// Licensed under CC-BY 4.0. See LICENSE file for details.
// For original source and attribution, visit: https://github.com/matttrice/mbs

import { writable, derived, get } from 'svelte/store';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import type { NavigationContext } from '$lib/types';

const STORAGE_KEY_PREFIX = 'mbs-nav-';
const DRILLTO_STORAGE_KEY = 'mbs-drillto';

// Get the localStorage key for a specific presentation
function getStorageKey(presentation: string): string {
	return `${STORAGE_KEY_PREFIX}${presentation}`;
}

// Load autoDrillAll preference from localStorage
function loadAutoDrillAll(): boolean {
	if (!browser) return true; // Default to true
	try {
		const stored = localStorage.getItem(DRILLTO_STORAGE_KEY);
		if (stored !== null) {
			return JSON.parse(stored);
		}
	} catch (e) {
		console.warn('[Navigation] Failed to load autoDrillAll:', e);
	}
	return true; // Default to true
}

// Save autoDrillAll preference to localStorage
function persistAutoDrillAll(value: boolean): void {
	if (!browser) return;
	try {
		localStorage.setItem(DRILLTO_STORAGE_KEY, JSON.stringify(value));
	} catch (e) {
		console.warn('[Navigation] Failed to persist autoDrillAll:', e);
	}
}

// Create the navigation store with initial state
function createNavigationStore() {
	const initial: NavigationContext = {
		current: {
			presentation: '',
			slide: 0,
			fragment: 0
		},
		stack: [],
		maxSlide: 0,
		maxFragment: 0,
		slideFragmentCounts: [],
		slideFragments: [],              // Track fragment position per slide
		isReturningFromDrill: false,     // Flag to prevent init() from resetting state
		drillTargets: {},                // Map of step -> drillTo target for current slide/drill
		returnHere: false,               // If true, return here (to parent) instead of origin
		autoDrillAll: loadAutoDrillAll(), // If true, all drillTo fragments auto-drill on next click
		pendingAutoDrill: null,          // Pending drill to execute on next click
		lastCompletedDrill: null         // The last drill target that was completed (prevents re-triggering)
	};

	// Load persisted state from localStorage for a specific presentation
	function loadPersistedState(presentation: string): Partial<NavigationContext> | null {
		if (!browser) return null;
		try {
			const key = getStorageKey(presentation);
			const stored = localStorage.getItem(key);
			if (stored) {
				const parsed = JSON.parse(stored);
				console.log('[Navigation] Loaded persisted state for', presentation, ':', parsed);
				return parsed;
			}
		} catch (e) {
			console.warn('[Navigation] Failed to load persisted state:', e);
		}
		return null;
	}

	// Save state to localStorage (only the parts we need to persist)
	// State is always stored under the root (origin) presentation's key
	function persistState(ctx: NavigationContext) {
		if (!browser) return;
		const rootPresentation = ctx.stack.length > 0
			? ctx.stack[0].presentation
			: ctx.current.presentation;
		if (!rootPresentation) return; // Don't persist empty/initial state
		try {
			const toPersist = {
				current: ctx.current,
				stack: ctx.stack,
				slideFragments: ctx.slideFragments,
				slideFragmentCounts: ctx.slideFragmentCounts,
				maxSlide: ctx.maxSlide
			};
			localStorage.setItem(getStorageKey(rootPresentation), JSON.stringify(toPersist));
		} catch (e) {
			console.warn('[Navigation] Failed to persist state:', e);
		}
	}

	// Clear persisted state for a specific presentation
	function clearPersistedState(presentation?: string) {
		if (!browser) return;
		try {
			if (presentation) {
				localStorage.removeItem(getStorageKey(presentation));
				console.log('[Navigation] Cleared persisted state for:', presentation);
			} else {
				// Clear all presentation keys
				const keysToRemove: string[] = [];
				for (let i = 0; i < localStorage.length; i++) {
					const key = localStorage.key(i);
					if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
						keysToRemove.push(key);
					}
				}
				keysToRemove.forEach(key => localStorage.removeItem(key));
				console.log('[Navigation] Cleared all persisted state');
			}
		} catch (e) {
			console.warn('[Navigation] Failed to clear persisted state:', e);
		}
	}

	const { subscribe, set, update } = writable<NavigationContext>(initial);

	// Helper to update and persist state
	function updateAndPersist(updater: (ctx: NavigationContext) => NavigationContext) {
		update((ctx) => {
			const newState = updater(ctx);
			persistState(newState);
			return newState;
		});
	}

	return {
		subscribe,

		/**
		 * Initialize a presentation with slide fragment counts
		 * @param presentation - presentation ID
		 * @param slideFragmentCounts - array of fragment counts per slide [slide0Count, slide1Count, ...]
		 */
		init(presentation: string, slideFragmentCounts: number[] = [0]) {
			update((ctx) => {
				// If returning from drill, preserve state and clear the flag
				if (ctx.isReturningFromDrill && ctx.current.presentation === presentation) {
					console.log('[Navigation] Returning from drill, preserving position:', 
						`slide ${ctx.current.slide}, fragment ${ctx.current.fragment}`);
					const newState = {
						...ctx,
						isReturningFromDrill: false,
						maxSlide: slideFragmentCounts.length - 1,
						slideFragmentCounts,
						slideFragments: ctx.slideFragments.length ? ctx.slideFragments : slideFragmentCounts.map(() => 0),
						maxFragment: slideFragmentCounts[ctx.current.slide] || 0
					};
					persistState(newState);
					return newState;
				}

				// Check for persisted state on page refresh (per-presentation key)
				const persisted = loadPersistedState(presentation);
				
				if (persisted?.slideFragments?.length) {
					console.log('[Navigation] Restoring from localStorage:', persisted);
					
					// If we were in a drill, restore to the stack's origin position
					const isInDrillStack = (persisted.stack?.length ?? 0) > 0 &&
						persisted.stack?.[0]?.presentation === presentation;
					const isDirectMatch = persisted.current?.presentation === presentation;
					
					if (isInDrillStack && !isDirectMatch && persisted.stack) {
						const originState = persisted.stack[0];
						console.log('[Navigation] Was in drill, restoring to origin:', originState);
						const restoredState = {
							...ctx,
							isReturningFromDrill: false,
							current: {
								presentation,
								slide: originState.slide,
								fragment: originState.fragment
							},
							stack: [], // Clear drill stack
							maxSlide: slideFragmentCounts.length - 1,
							maxFragment: slideFragmentCounts[originState.slide] || 0,
							slideFragmentCounts,
							slideFragments: persisted.slideFragments
						};
						persistState(restoredState);
						return restoredState;
					}
					
					// Direct match - restore to saved position
					const currentSlide = persisted.current!.slide;
					const restoredState = {
						...ctx,
						isReturningFromDrill: false,
						current: persisted.current!,
						stack: persisted.stack || [],
						maxSlide: slideFragmentCounts.length - 1,
						maxFragment: slideFragmentCounts[currentSlide] || 0,
						slideFragmentCounts,
						slideFragments: persisted.slideFragments
					};
					return restoredState;
				}
				
				console.log('[Navigation] Fresh init for presentation:', presentation);
				// Fresh visit - reset everything, initialize slideFragments array
				const freshState = {
					...ctx,
					isReturningFromDrill: false,
					current: {
						presentation,
						slide: 0,
						fragment: 0
					},
					maxSlide: slideFragmentCounts.length - 1,
					maxFragment: slideFragmentCounts[0] || 0,
					slideFragmentCounts,
					slideFragments: slideFragmentCounts.map(() => 0)  // All slides start at fragment 0
				};
				persistState(freshState);
				return freshState;
			});
		},

		/**
		 * Initialize a drill/custom show (single slide presentation)
		 * @param maxFragment - total fragments in the drill
		 */
		setMaxFragment(max: number) {
			update((ctx) => ({
				...ctx,
				maxFragment: max,
				maxSlide: 0,
				slideFragmentCounts: [max]
				// Note: drillTargets are registered by Fragment components, not cleared here
			}));
		},

		/**
		 * Register a drill target for a specific slide and step
		 * Called by Fragment components that have a drillTo prop
		 * @param slideIndex - The slide index (0 for drills, actual slide index for presentations)
		 * @param step - The normalized step number
		 * @param target - The route to drill into
		 * @param returnHere - if true, this drill returns to its immediate caller, not origin
		 * @param autoDrill - if true, this fragment auto-drills on next click (independent of autoDrillAll)
		 */
		registerDrillTarget(slideIndex: number, step: number, target: string, returnHere: boolean = false, autoDrill: boolean = false) {
			const key = `${slideIndex}:${step}`;
			update((ctx) => ({
				...ctx,
				drillTargets: {
					...ctx.drillTargets,
					[key]: { target, returnHere, autoDrill }
				}
			}));
		},

		/**
		 * Check if there's an autoDrill target at the current position and set pending if so.
		 * Called by Fragment after registering a static autoDrill target (no step).
		 * This handles the case where content is visible at fragment 0 and should auto-drill on first click.
		 */
		checkAutoDrillAtCurrentPosition(slideIndex: number, step: number) {
			update((ctx) => {
				// Don't set pending auto-drill when returning from a drill
				// (prevents infinite loop of drilling back into the same target)
				if (ctx.isReturningFromDrill) {
					return ctx;
				}
				
				// Only set pending if we're at the matching position
				if (ctx.current.slide !== slideIndex || ctx.current.fragment !== step) {
					return ctx;
				}
				
				const drillKey = `${slideIndex}:${step}`;
				const drillInfo = ctx.drillTargets[drillKey];
				
				// Skip if this is the same drill we just completed (prevents re-triggering)
				if (drillInfo && ctx.lastCompletedDrill === drillInfo.target) {
					console.log('[Navigation] Skipping auto-drill - just returned from this drill:', drillInfo.target);
					return ctx;
				}
				
				// Set pending if: global autoDrillAll is enabled OR per-fragment autoDrill is true
				if (drillInfo && (ctx.autoDrillAll || drillInfo.autoDrill)) {
					console.log('[Navigation] Setting pending auto-drill at current position:', drillKey, '->', drillInfo.target);
					return {
						...ctx,
						pendingAutoDrill: drillInfo
					};
				}
				
				return ctx;
			});
		},

		/**
		 * Unregister a drill target (called when Fragment unmounts)
		 */
		unregisterDrillTarget(slideIndex: number, step: number) {
			const key = `${slideIndex}:${step}`;
			update((ctx) => {
				const { [key]: _, ...rest } = ctx.drillTargets;
				return {
					...ctx,
					drillTargets: rest
				};
			});
		},

		/**
		 * Clear all drill targets (called when navigating away)
		 */
		clearDrillTargets() {
			update((ctx) => ({
				...ctx,
				drillTargets: {}
			}));
		},

		/**
		 * Advance to the next fragment, slide, or auto-return if at end of a drill
		 * 
		 * Auto-drill behavior (when autoDrillAll is enabled):
		 * 1. Fragment with drillTo is shown first (content visible)
		 * 2. NEXT click executes the pending drill
		 * This ensures fragment content is always revealed before drilling.
		 * 
		 * If at the last fragment and it has a registered drillTo, auto-drill into it
		 */
		next() {
			const ctx = get({ subscribe });
			
			// Check for pending auto-drill from previous next() call
			// This executes the drill AFTER the fragment was shown
			if (ctx.pendingAutoDrill) {
				const { target, returnHere } = ctx.pendingAutoDrill;
				console.log('[Navigation] Executing pending auto-drill to:', target, returnHere ? '(returnHere)' : '');
				update((c) => ({ ...c, pendingAutoDrill: null }));
				this.drillInto(target, 0, returnHere);
				return;
			}
			
			if (ctx.current.fragment < ctx.maxFragment) {
				// Still have fragments to show in current slide
				updateAndPersist((c) => {
					const newFragment = c.current.fragment + 1;
					const newSlideFragments = [...c.slideFragments];
					newSlideFragments[c.current.slide] = newFragment;
					
					// Check if new fragment has a drillTo that should auto-drill
					// Auto-drill if: global autoDrillAll is enabled OR per-fragment autoDrill is true
					// Use slide-aware key: "slideIndex:step"
					const drillKey = `${c.current.slide}:${newFragment}`;
					const drillTarget = c.drillTargets[drillKey];
					const drillInfo = drillTarget && (c.autoDrillAll || drillTarget.autoDrill) ? drillTarget : null;
					
					if (drillInfo) {
						console.log('[Navigation] Setting pending auto-drill for:', drillKey, '->', drillInfo.target, drillInfo.autoDrill ? '(per-fragment)' : '(global)');
					}
					
					return {
						...c,
						current: {
							...c.current,
							fragment: newFragment
						},
						slideFragments: newSlideFragments,
						pendingAutoDrill: drillInfo || null,
						lastCompletedDrill: null  // Clear when navigating
					};
				});
			} else if (ctx.current.slide < ctx.maxSlide) {
				// Advance to next slide, start at fragment 0
				console.log('[Navigation] Advancing to next slide:', ctx.current.slide + 1);
				updateAndPersist((c) => {
					const nextSlide = c.current.slide + 1;
					
					// Check if new slide has a drillTo at fragment 0 that should auto-drill
					const drillKey = `${nextSlide}:0`;
					const drillTarget = c.drillTargets[drillKey];
					const drillInfo = drillTarget && (c.autoDrillAll || drillTarget.autoDrill) ? drillTarget : null;
					
					if (drillInfo) {
						console.log('[Navigation] Setting pending auto-drill for new slide:', drillKey, '->', drillInfo.target);
					}
					
					return {
						...c,
						current: {
							...c.current,
							slide: nextSlide,
							fragment: 0  // When advancing naturally, start fresh
						},
						maxFragment: c.slideFragmentCounts[nextSlide] || 0,
						pendingAutoDrill: drillInfo,  // Set pending if there's an autoDrill at fragment 0
						lastCompletedDrill: null  // Clear when navigating
					};
				});
			} else {
				// At end of current slide/drill - check for auto-drill or auto-return
				// Use slide-aware key for drill lookup
				const drillKey = `${ctx.current.slide}:${ctx.maxFragment}`;
				const drillInfo = ctx.drillTargets[drillKey];
				
				// Auto-drill if: global autoDrillAll is enabled OR per-fragment autoDrill is true
				// If neither, arrow right at a drillTo fragment skips the drill
				if (drillInfo && (ctx.autoDrillAll || drillInfo.autoDrill)) {
					// Last fragment has a drillTo - auto drill into it
					const { target, returnHere } = drillInfo;
					console.log('[Navigation] Auto-drilling to:', target, returnHere ? '(returnHere)' : '');
					this.drillInto(target, 0, returnHere);
				} else if (ctx.stack.length > 0) {
					// We're in a drill with no more drillTos - check returnHere flag
					if (ctx.returnHere) {
						console.log('[Navigation] End of nested drill - returning to parent');
						this.returnFromDrill(false);  // Pop just one level
					} else {
						console.log('[Navigation] End of drill sequence - returning to origin');
						this.returnFromDrill(true);  // Return to origin
					}
				}
				// else: At end of main presentation - do nothing
			}
		},

		/**
		 * Go back to the previous fragment or slide
		 * Clears any pending auto-drill since user explicitly moved backward
		 */
		prev() {
			updateAndPersist((ctx) => {
				if (ctx.current.fragment > 0) {
					// Go back one fragment, update slideFragments
					const newFragment = ctx.current.fragment - 1;
					const newSlideFragments = [...ctx.slideFragments];
					newSlideFragments[ctx.current.slide] = newFragment;
					return {
						...ctx,
						current: {
							...ctx.current,
							fragment: newFragment
						},
						slideFragments: newSlideFragments,
						pendingAutoDrill: null  // Clear pending drill when going backward
					};
				} else if (ctx.current.slide > 0) {
					// Go to previous slide, at its saved fragment position
					const prevSlide = ctx.current.slide - 1;
					const prevSlideFragment = ctx.slideFragments[prevSlide] || 0;
					const prevSlideMaxFragment = ctx.slideFragmentCounts[prevSlide] || 0;
					console.log('[Navigation] Going to previous slide:', prevSlide, 'at fragment:', prevSlideFragment);
					return {
						...ctx,
						current: {
							...ctx.current,
							slide: prevSlide,
							fragment: prevSlideFragment
						},
						maxFragment: prevSlideMaxFragment,
						pendingAutoDrill: null  // Clear pending drill when changing slides
					};
				}
				return ctx;
			});
		},

		/**
		 * Jump to a specific fragment in current slide
		 */
		goToFragment(fragment: number) {
			updateAndPersist((ctx) => ({
				...ctx,
				current: {
					...ctx.current,
					fragment: Math.max(0, Math.min(fragment, ctx.maxFragment))
				},
				pendingAutoDrill: null  // Clear pending drill when jumping
			}));
		},

		/**
		 * Jump to a specific slide
		 */
		goToSlide(slide: number) {
			updateAndPersist((ctx) => {
				const targetSlide = Math.max(0, Math.min(slide, ctx.maxSlide));
				// Restore saved fragment position for target slide
				const targetFragment = ctx.slideFragments[targetSlide] || 0;
				console.log('[Navigation] Jumping to slide:', targetSlide, 'at fragment:', targetFragment);
				return {
					...ctx,
					current: {
						...ctx.current,
						slide: targetSlide,
						fragment: targetFragment
					},
					maxFragment: ctx.slideFragmentCounts[targetSlide] || 0,
					pendingAutoDrill: null  // Clear pending drill when jumping slides
				};
			});
		},

		/**
		 * Drill into a custom show - PUSH current state to stack, then navigate
		 * @param returnHere - if true, this drill returns to caller, not origin
		 */
		drillInto(target: string, startFragment: number = 0, returnHere: boolean = false) {
			updateAndPersist((ctx) => {
				// Push current state onto the stack BEFORE navigating
				// Include slideFragments so we can restore per-slide positions on return
				const stateToSave = {
					...ctx.current,
					slideFragments: [...ctx.slideFragments]  // Save per-slide positions
				};
				const newStack = [...ctx.stack, stateToSave];

				console.log('[Navigation] Drilling into:', target, returnHere ? '(returnHere)' : '');
				console.log('[Navigation] Saving state to stack:', stateToSave);
				console.log('[Navigation] Stack depth now:', newStack.length);

				return {
					...ctx,
					stack: newStack,
					current: {
						presentation: target,
						slide: 0,
						fragment: startFragment
					},
					maxSlide: 0,
					maxFragment: 0, // Will be set by the drill's setMaxFragment or init
					slideFragmentCounts: [],
					drillTargets: {},  // Clear - new drill will register its own
					returnHere,        // Store flag for when this drill ends
					pendingAutoDrill: null  // Clear pending drill when drilling
				};
			});

			// Navigate to the target route
			goto(`/${target}`);
		},

		/**
		 * Return from a drill - POP state from stack and restore
		 * Returns to EXACT same position (slide + fragment) like PowerPoint Custom Shows
		 * If returnToOrigin is true, pops all the way back to the original presentation
		 */
		returnFromDrill(returnToOrigin: boolean = false) {
			const ctx = get({ subscribe });
			
			if (ctx.stack.length === 0) {
				console.warn('[Navigation] Cannot return - stack is empty');
				return;
			}

			// Determine how many states to pop
			// If returnToOrigin, pop all the way to the first state (the original presentation)
			const popCount = returnToOrigin ? ctx.stack.length : 1;
			const newStack = ctx.stack.slice(0, ctx.stack.length - popCount);
			const returnState = ctx.stack[ctx.stack.length - popCount]; // Get the state we're returning to

			console.log('[Navigation] Returning from drill');
			console.log('[Navigation] Restoring state:', returnState);
			console.log('[Navigation] Stack depth now:', newStack.length);
			if (returnToOrigin) {
				console.log('[Navigation] Returning to origin - popped', popCount, 'states');
			}

			// Determine the route based on presentation
			// life -> /life, ecclesiastes.3.19 -> /life/ecclesiastes.3.19, etc.
			const route = this.getRouteForPresentation(returnState.presentation);

			// Extract slideFragments from returnState (if saved during drill)
			const { slideFragments: savedSlideFragments, ...currentState } = returnState;

			// Track which drill we just completed to prevent re-triggering
			const completedDrill = ctx.current.presentation;

			// Update the store - return to EXACT same position
			// The pending drill approach means we don't need to advance - just return cleanly
			updateAndPersist((c) => ({
				...c,
				stack: newStack,
				current: currentState,  // Return to exact position
				slideFragments: savedSlideFragments || c.slideFragments,
				isReturningFromDrill: true,  // Flag to prevent init() from resetting
				drillTargets: {},  // Clear drill targets - origin will re-register
				pendingAutoDrill: null,  // Clear any pending drill
				lastCompletedDrill: completedDrill,  // Track completed drill to prevent re-triggering
				// These will be properly set by the presentation's init()
				maxSlide: 0,
				maxFragment: 0,
				slideFragmentCounts: []
			}));

			// Navigate back to the original presentation
			goto(route);
		},

		/**
		 * Clear all progress for a presentation (called from menu)
		 * @param presentation - presentation ID to clear, or undefined to clear all
		 */
		clearPresentation(presentation?: string) {
			clearPersistedState(presentation);
			set(initial);
			console.log('[Navigation] Cleared presentation:', presentation || 'all');
		},

		/**
		 * Get the route path for a presentation ID
		 */
		getRouteForPresentation(presentation: string): string {
			return `/${presentation}`;
		},

		/**
		 * Check if we can return (stack is not empty)
		 */
		canReturn(): boolean {
			return get({ subscribe }).stack.length > 0;
		},

		/**
		 * Get current stack depth
		 */
		getStackDepth(): number {
			return get({ subscribe }).stack.length;
		},

		/**
		 * Set auto-drill-all mode
		 * When enabled, all fragments with drillTo auto-drill on next click (not just last fragment)
		 * When disabled, only the last fragment with drillTo auto-drills
		 * If toggling off while in a drill, returns to origin to avoid orphaned state
		 */
		setAutoDrillAll(value: boolean) {
			const ctx = get({ subscribe });
			
			// If turning off while in a drill, return to origin first
			if (!value && ctx.stack.length > 0) {
				console.log('[Navigation] Turning off autoDrillAll while in drill - returning to origin');
				this.returnFromDrill(true);
			}
			
			persistAutoDrillAll(value);
			update((c) => ({
				...c,
				autoDrillAll: value
			}));
			console.log('[Navigation] autoDrillAll set to:', value);
		},

		/**
		 * Get current auto-drill-all setting
		 */
		getAutoDrillAll(): boolean {
			return get({ subscribe }).autoDrillAll;
		},

		/**
		 * Reset everything
		 */
		reset() {
			set({
				...initial,
				autoDrillAll: loadAutoDrillAll() // Preserve autoDrillAll setting
			});
		}
	};
}

// Export the singleton store
export const navigation = createNavigationStore();

// Derived stores for convenience
export const currentFragment = derived(navigation, ($nav) => $nav.current.fragment);
export const currentSlide = derived(navigation, ($nav) => $nav.current.slide);
export const currentPresentation = derived(navigation, ($nav) => $nav.current.presentation);
export const canReturn = derived(navigation, ($nav) => $nav.stack.length > 0);
export const stackDepth = derived(navigation, ($nav) => $nav.stack.length);
export const maxFragment = derived(navigation, ($nav) => $nav.maxFragment);
export const maxSlide = derived(navigation, ($nav) => $nav.maxSlide);
export const autoDrillAll = derived(navigation, ($nav) => $nav.autoDrillAll);

// ========== Global Original Step Registry ==========
// Used by DebugOverlay to show original author steps

type OriginalStepLookup = (normalizedStep: number) => number;
const originalStepRegistry = new Map<string, OriginalStepLookup>();

// Reactive trigger - increments when registry changes to force Svelte reactivity
const registryVersion = writable(0);

/**
 * Register an original step lookup function for a presentation/slide.
 * Called by Slide components on mount.
 */
export function registerOriginalStepLookup(
	presentation: string,
	slideIndex: number,
	lookup: OriginalStepLookup
): void {
	const key = `${presentation}:${slideIndex}`;
	originalStepRegistry.set(key, lookup);
	registryVersion.update(v => v + 1);
}

/**
 * Unregister an original step lookup (called on unmount).
 */
export function unregisterOriginalStepLookup(presentation: string, slideIndex: number): void {
	const key = `${presentation}:${slideIndex}`;
	originalStepRegistry.delete(key);
	registryVersion.update(v => v + 1);
}

/**
 * Get the original author step for a normalized step.
 * Returns the normalized step if no lookup is registered.
 * Pass registryVersion store value to ensure reactivity.
 */
export function getOriginalStep(presentation: string, slideIndex: number, normalizedStep: number, _version?: number): number {
	const key = `${presentation}:${slideIndex}`;
	const lookup = originalStepRegistry.get(key);
	return lookup ? lookup(normalizedStep) : normalizedStep;
}

// Export the registry version for reactive lookups
export { registryVersion };
