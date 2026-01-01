<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Slide 3: Hebrews 4:12 - Static scripture slide
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * No animations - just scripture display
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<!-- Slide background -->
	<div class="slide-bg"></div>

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	
	<!-- Title: Hebrews 4:12 -->
	<Fragment
		layout={{ x: 112.2, y: 52.2, width: 373.8, height: 44.4 }}
		font={{ font_size: 44.2, align: 'left', bold: true }}
		zIndex={1}
	>
		Hebrews 4:12
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 113.4, y: 121.2, width: 742, height: 194.8 }}
		font={{ font_size: 30.8, v_align: 'middle', wrap: true }}
		zIndex={0}
	>
		For the word of God is living and active and sharper than any two-edged sword, and piercing as far as the division of soul and spirit, of both joints and marrow, and able to judge the thoughts and intentions of the heart.
	</Fragment>

	<!-- Version: NIV -->
	<Fragment
		layout={{ x: 840.4, y: 442.8, width: 49.9, height: 30.3 }}
		font={{ font_size: 20 }}
		zIndex={2}
	>
		NIV
	</Fragment>
</Slide>
