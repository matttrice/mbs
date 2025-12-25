<script lang="ts">
	import { onMount } from 'svelte';

	/**
	 * Development utility for checking slide alignment against exported images.
	 * Press 'O' to toggle the overlay visibility.
	 * 
	 * Usage:
	 * ```svelte
	 * <Slide>
	 *   <ReferenceOverlay src="/export/09-The_Promises/Slide1.png" />
	 *   <!-- slide content -->
	 * </Slide>
	 * ```
	 */
	interface Props {
		/** Path to the reference image */
		src: string;
		/** Initial opacity (default: 0.5) */
		opacity?: number;
		/** Key to toggle overlay (default: 'o') */
		toggleKey?: string;
	}

	let { src, opacity = 0.5, toggleKey = 'o' }: Props = $props();

	let visible = $state(false);

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key.toLowerCase() === toggleKey.toLowerCase()) {
				visible = !visible;
			}
		}
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if visible}
	<img {src} class="reference-overlay" style:opacity alt="" />
{/if}
