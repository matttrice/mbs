<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect } from '$lib/components/svg';

	/**
	 * Slide 5: End of Lesson
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Simple end slide with no animations
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide5.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Black vertical bar on right side -->
	<!-- Original: x: 1397, y: 0, width: 43, height: 182.3 -->
	<Rect x={873} y={0} width={27} height={114} fill="#000000" zIndex={1} />

	<!-- Title: End of Lesson -->
	<!-- Original: x: 164.3, y: 58, width: 1209.7, font_size: 84, BACKGROUND_2 color (light) -->
	<Fragment
		layout={{ x: 103, y: 36, width: 756, height: 44 }}
		font={{ font_size: 52.5, bold: true }}
		zIndex={2}
	>
		End of Lesson
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
