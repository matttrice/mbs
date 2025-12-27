<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 4: The End
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (960/1536)
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/03-Biblical_Time/Slide4.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- The End -->
	<Fragment
		layout={{ x: 109.9, y: 115.4, width: 302.3, height: 44.4 }}
		font={{ font_size: 39.2 }}
		zIndex={1}
	>
		The End
	</Fragment>
</Slide>

<style>
</style>
