<script lang="ts">
	import '$lib/styles/theme.css';
	import '$lib/styles/scripture.css';
	import '$lib/styles/utilities.css';
	import '$lib/styles/presentation.css';

	import { navigation, canReturn } from '$lib/stores/navigation';
	import ReturnButton from '$lib/components/ReturnButton.svelte';
	import DebugOverlay from '$lib/components/DebugOverlay.svelte';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { dev } from '$app/environment';

	let { children } = $props();

	// Enable smooth view transitions for drill navigation
	onNavigate((navigation) => {
		// Only apply view transition if browser supports it
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		// Expose navigation for E2E tests in development
		if (dev) {
			(window as unknown as { __mbs_navigation: typeof navigation }).__mbs_navigation = navigation;
		}

		function handleKeydown(e: KeyboardEvent) {
			// Ignore if user is typing in an input
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
				return;
			}

			switch (e.key) {
				case ' ':
				case 'ArrowRight':
				case 'ArrowDown':
					e.preventDefault();
					navigation.next();
					break;

				case 'ArrowLeft':
				case 'ArrowUp':
					e.preventDefault();
					navigation.prev();
					break;

				case 'Escape':
					if (navigation.canReturn()) {
						e.preventDefault();
						navigation.returnFromDrill();
					}
					break;

				case 'q':
					e.preventDefault();
					window.location.href = '/';
					break;

				case 'Home':
					e.preventDefault();
					navigation.goToFragment(0);
					break;
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<svelte:head>
	<title>MBS - Master Bible Study</title>
</svelte:head>

<div class="presentation-container">
	{@render children()}
	<ReturnButton />
	<DebugOverlay />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			sans-serif;
		overflow: hidden;
		background: var(--color-bg-light);
	}

	.presentation-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
