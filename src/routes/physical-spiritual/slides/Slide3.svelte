<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 3: End of Lesson
	 * Simple end slide with just static content
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg slide-earth"></div>

	<!-- Static: End of lesson -->
	<Fragment
		layout={{ x: 414, y: 125.1, width: 486.1, height: 85.8 }}
		font={{ font_size: 44.2, bold: true, color: 'var(--text-light)' }}
		fill="var(--bg-level-1)"
		zIndex={1}
	>
		End of lesson
	</Fragment>
</Slide>

<style>
	.slide-earth {
		background-image: url('/images/earth-moon.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
