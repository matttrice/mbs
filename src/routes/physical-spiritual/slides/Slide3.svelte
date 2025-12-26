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
	<div class="slide-bg slide-bg-dark"></div>
	<ReferenceOverlay src="/export/02-Physical_Spiritual/Slide3.png" />

	<!-- Static: End of lesson -->
	<Fragment
		layout={{ x: 414, y: 125.1, width: 486.1, height: 85.8 }}
		font={{ font_size: 44.2, color: '#FFFFFF' }}
		zIndex={1}
	>
		End of lesson
	</Fragment>
</Slide>

<style>
	.slide-bg-dark {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
	}
</style>
