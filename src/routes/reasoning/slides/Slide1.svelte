<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 1: Opening Quote - Neil Postman
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * This slide has no animations - just static content
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
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide1.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	
	<!-- Quote text box with light gray background -->
	<!-- Original: x: 202.8, y: 192.1, width: 1173.2, height: 479.8 -->
	<!-- Scaled: x: 126.75, y: 120.1, width: 733.3, height: 299.9 -->
	<Fragment
		layout={{ x: 127, y: 50, width: 733, height: 300 }}
		font={{ font_size: 23.3, align: 'left', wrap: true }}
		fill="var(--color-bg-light)"
		zIndex={1}
	>
		<p style="margin: 0; padding: 15px; line-height: 1.5;">
			"When one learns to read, one learns a peculiar way of behaving. Self restraint is a challenge not only to the body but to the mind. Sentences paragraphs and pages unfold slowly, in sequence and according to a logic that is far from intuitive... the literate person must learn to be reflective and analytical, patient and assertive always poised, after due consideration to say no to a text."
		</p>
		<p style="margin: 0; padding: 0 15px 15px 15px; font-style: italic;">
			Neil Postman: The Disappearance of Childhood
		</p>
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
