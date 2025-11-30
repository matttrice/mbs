import { writable, derived, get } from 'svelte/store';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import type { NavigationContext } from '$lib/types';

const STORAGE_KEY = 'mbs-nav-state';

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
		returnHere: false                // If true, return here (to parent) instead of origin
	};

	// Load persisted state from localStorage
	function loadPersistedState(): Partial<NavigationContext> | null {
		if (!browser) return null;
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				console.log('[Navigation] Loaded persisted state:', parsed);
				return parsed;
			}
		} catch (e) {
			console.warn('[Navigation] Failed to load persisted state:', e);
		}
		return null;
	}

	// Save state to localStorage (only the parts we need to persist)
	function persistState(ctx: NavigationContext) {
		if (!browser) return;
		try {
			const toPersist = {
				current: ctx.current,
				stack: ctx.stack,
				slideFragments: ctx.slideFragments,
				slideFragmentCounts: ctx.slideFragmentCounts,
				maxSlide: ctx.maxSlide
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(toPersist));
		} catch (e) {
			console.warn('[Navigation] Failed to persist state:', e);
		}
	}

	// Clear persisted state for a specific presentation
	function clearPersistedState(presentation?: string) {
		if (!browser) return;
		try {
			if (presentation) {
				// Only clear if the stored state is for this presentation
				const stored = loadPersistedState();
				if (stored?.current?.presentation === presentation) {
					localStorage.removeItem(STORAGE_KEY);
					console.log('[Navigation] Cleared persisted state for:', presentation);
				}
			} else {
				localStorage.removeItem(STORAGE_KEY);
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

				// Check for persisted state on page refresh
				const persisted = loadPersistedState();
				if (persisted?.current?.presentation === presentation && persisted.slideFragments?.length) {
					console.log('[Navigation] Restoring from localStorage:', persisted);
					const restoredState = {
						...ctx,
						isReturningFromDrill: false,
						current: persisted.current,
						stack: persisted.stack || [],
						maxSlide: slideFragmentCounts.length - 1,
						maxFragment: slideFragmentCounts[persisted.current.slide] || 0,
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
		 * Register a drill target for a specific step
		 * Called by Fragment components that have a drillTo prop
		 * @param returnHere - if true, this drill returns to its immediate caller, not origin
		 */
		registerDrillTarget(step: number, target: string, returnHere: boolean = false) {
			update((ctx) => ({
				...ctx,
				drillTargets: {
					...ctx.drillTargets,
					[step]: { target, returnHere }
				}
			}));
		},

		/**
		 * Unregister a drill target (called when Fragment unmounts)
		 */
		unregisterDrillTarget(step: number) {
			update((ctx) => {
				const { [step]: _, ...rest } = ctx.drillTargets;
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
		 * If at the last fragment and it has a registered drillTo, auto-drill into it
		 */
		next() {
			const ctx = get({ subscribe });
			
			if (ctx.current.fragment < ctx.maxFragment) {
				// Still have fragments to show in current slide
				updateAndPersist((c) => {
					const newFragment = c.current.fragment + 1;
					const newSlideFragments = [...c.slideFragments];
					newSlideFragments[c.current.slide] = newFragment;
					return {
						...c,
						current: {
							...c.current,
							fragment: newFragment
						},
						slideFragments: newSlideFragments
					};
				});
			} else if (ctx.current.slide < ctx.maxSlide) {
				// Advance to next slide, start at fragment 0
				console.log('[Navigation] Advancing to next slide:', ctx.current.slide + 1);
				updateAndPersist((c) => {
					const nextSlide = c.current.slide + 1;
					return {
						...c,
						current: {
							...c.current,
							slide: nextSlide,
							fragment: 0  // When advancing naturally, start fresh
						},
						maxFragment: c.slideFragmentCounts[nextSlide] || 0,
						drillTargets: {}  // Clear drill targets when changing slides
					};
				});
			} else {
				// At end of current slide/drill - check for auto-drill or auto-return
				const drillInfo = ctx.drillTargets[ctx.maxFragment];
				
				if (drillInfo) {
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
						slideFragments: newSlideFragments
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
						maxFragment: prevSlideMaxFragment
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
				}
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
					maxFragment: ctx.slideFragmentCounts[targetSlide] || 0
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
					returnHere        // Store flag for when this drill ends
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

			// Update the store - return to EXACT same position with flag set
			updateAndPersist((c) => ({
				...c,
				stack: newStack,
				current: currentState,
				slideFragments: savedSlideFragments || c.slideFragments,  // Restore per-slide positions
				isReturningFromDrill: true,  // Flag to prevent init() from resetting
				drillTargets: {},  // Clear drill targets - origin will re-register
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
		 * Reset everything
		 */
		reset() {
			set(initial);
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
