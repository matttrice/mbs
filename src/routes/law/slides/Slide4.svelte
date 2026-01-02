<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Slide 4: End of Lesson
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * 
	 * Static content only - no animations
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<!-- Title: "End of Lesson" -->
	<Fragment
		layout={{ x: 77.4, y: 117.2, width: 402.6, height: 45 }}
		font={{ font_size: 50 }}
		zIndex={0}
	>
		End of Lesson
	</Fragment>
</Slide>
