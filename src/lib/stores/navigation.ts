import { writable, derived, get } from 'svelte/store';
import { goto } from '$app/navigation';
import type { NavigationState, NavigationContext } from '$lib/types';

// Create the navigation store with initial state
function createNavigationStore() {
	const initial: NavigationContext = {
		current: {
			presentation: '',
			slide: 0,
			fragment: 0
		},
		stack: [],
		maxFragment: 0
	};

	const { subscribe, set, update } = writable<NavigationContext>(initial);

	return {
		subscribe,

		/**
		 * Initialize a presentation - ONLY resets fragment if this is a fresh visit
		 * (not a return from drill). Always updates maxFragment.
		 */
		init(presentation: string, maxFragment: number = 0) {
			update((ctx) => {
				// Check if we're returning to this presentation (it matches current)
				// AND we have a non-zero fragment (meaning we drilled and returned)
				const isReturning = ctx.current.presentation === presentation && ctx.current.fragment > 0;
				
				if (isReturning) {
					console.log('[Navigation] Returning to presentation, preserving fragment:', ctx.current.fragment);
					// Just update maxFragment, keep the restored fragment
					return {
						...ctx,
						maxFragment
					};
				}
				
				console.log('[Navigation] Fresh init for presentation:', presentation);
				// Fresh visit - reset everything
				return {
					...ctx,
					current: {
						presentation,
						slide: 0,
						fragment: 0
					},
					maxFragment
				};
			});
		},

		/**
		 * Set the maximum fragment count for the current slide
		 */
		setMaxFragment(max: number) {
			update((ctx) => ({
				...ctx,
				maxFragment: max
			}));
		},

		/**
		 * Advance to the next fragment, or auto-return if at end of a drill
		 */
		next() {
			const ctx = get({ subscribe });
			
			if (ctx.current.fragment < ctx.maxFragment) {
				// Still have fragments to show
				update((c) => ({
					...c,
					current: {
						...c.current,
						fragment: c.current.fragment + 1
					}
				}));
			} else if (ctx.stack.length > 0) {
				// At end of fragments AND we're in a drill - auto return
				console.log('[Navigation] End of drill sequence - auto returning');
				this.returnFromDrill();
			}
			// else: At end of main presentation - do nothing (or could go to next slide)
		},

		/**
		 * Go back to the previous fragment
		 */
		prev() {
			update((ctx) => {
				if (ctx.current.fragment > 0) {
					return {
						...ctx,
						current: {
							...ctx.current,
							fragment: ctx.current.fragment - 1
						}
					};
				}
				return ctx;
			});
		},

		/**
		 * Jump to a specific fragment
		 */
		goToFragment(fragment: number) {
			update((ctx) => ({
				...ctx,
				current: {
					...ctx.current,
					fragment: Math.max(0, Math.min(fragment, ctx.maxFragment))
				}
			}));
		},

		/**
		 * Drill into a custom show - PUSH current state to stack, then navigate
		 */
		drillInto(target: string, startFragment: number = 0) {
			update((ctx) => {
				// Push current state onto the stack BEFORE navigating
				const newStack = [
					...ctx.stack,
					{ ...ctx.current } // Clone current state
				];

				console.log('[Navigation] Drilling into:', target);
				console.log('[Navigation] Saving state to stack:', ctx.current);
				console.log('[Navigation] Stack depth now:', newStack.length);

				return {
					...ctx,
					stack: newStack,
					current: {
						presentation: target,
						slide: 0,
						fragment: startFragment
					},
					maxFragment: 0 // Will be set by the new slide
				};
			});

			// Navigate to the target route
			goto(`/${target}`);
		},

		/**
		 * Return from a drill - POP state from stack and restore
		 * Returns to EXACT same fragment (like PowerPoint Custom Shows)
		 */
		returnFromDrill() {
			const ctx = get({ subscribe });
			
			if (ctx.stack.length === 0) {
				console.warn('[Navigation] Cannot return - stack is empty');
				return;
			}

			// Pop the last state from the stack
			const newStack = [...ctx.stack];
			const returnState = newStack.pop()!;

			console.log('[Navigation] Returning from drill');
			console.log('[Navigation] Restoring state:', returnState);
			console.log('[Navigation] Stack depth now:', newStack.length);

			// Update the store - return to EXACT same fragment
			update((c) => ({
				...c,
				stack: newStack,
				current: {
					...returnState
				},
				maxFragment: 0 // Will be set by the slide
			}));

			// Navigate back to the original presentation
			const route = returnState.presentation === 'life' ? '/' : `/${returnState.presentation}`;
			goto(route);
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
export const currentPresentation = derived(navigation, ($nav) => $nav.current.presentation);
export const currentSlide = derived(navigation, ($nav) => $nav.current.slide);
export const canReturn = derived(navigation, ($nav) => $nav.stack.length > 0);
export const stackDepth = derived(navigation, ($nav) => $nav.stack.length);
