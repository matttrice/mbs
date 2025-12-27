<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Line } from '$lib/components/svg';

	/**
	 * Slide 2: The Bible - Structure overview
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Animation sequence: 14 steps showing Bible structure
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
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: The Bible -->
	<!-- Original: x: 444.3, y: 9.6, width: 647.3, height: 71.0, font_size: 62.7 -->
	<Fragment
		layout={{ x: 278, y: 6, width: 405, height: 44 }}
		font={{ font_size: 39.2, bold: true }}
		zIndex={18}
	>
		The Bible
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: Horizontal dividing line + Old Testament header (timing: with) -->
	<!-- Original line: x: 208, y: 456.3, width: 1120 -->
	<Fragment step={1} animate="wipe">
		<Line 
			from={{ x: 130, y: 285 }} 
			to={{ x: 830, y: 285 }} 
			stroke={{ width: 1, color: '#000000' }} 
			zIndex={3} 
		/>
	</Fragment>

	<!-- Old Testament: 39 books (timing: with) -->
	<!-- Original: x: 132, y: 66.3, font_size: 34.7 -->
	<Fragment
		step={1}
		layout={{ x: 82, y: 41, width: 274, height: 34 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={1}
	>
		Old Testament: 39 books
	</Fragment>

	<!-- Step 2: New Testament: 27 books (timing: click) -->
	<!-- Original: x: 132, y: 450.8, font_size: 34.7 -->
	<Fragment
		step={2}
		layout={{ x: 82, y: 282, width: 283, height: 34 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={4}
	>
		New Testament: 27 books
	</Fragment>

	<!-- Step 3: Law (5) -->
	<!-- Original: x: 199.7, y: 107.3, font_size: 34.7, color: #0000FF -->
	<Fragment
		step={3}
		layout={{ x: 125, y: 67, width: 82, height: 34 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={5}
	>
		Law (5)
	</Fragment>

	<!-- Law books list -->
	<Fragment
		step={3.1}
		layout={{ x: 125, y: 100, width: 82, height: 180 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={5}
	>
		Genesis<br/>Exodus<br/>Leviticus<br/>Numbers<br/>Deuteronomy
	</Fragment>

	<!-- Step 4: History (12) -->
	<!-- Original: x: 405, y: 105.8, font_size: 34.7, color: #0000FF -->
	<Fragment
		step={4}
		layout={{ x: 253, y: 66, width: 123, height: 34 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={6}
	>
		History (12)
	</Fragment>

	<!-- History books list -->
	<Fragment
		step={4.1}
		layout={{ x: 253, y: 100, width: 123, height: 180 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={6}
	>
		Joshua<br/>Judges<br/>Ruth<br/>1 Samuel<br/>2 Samuel<br/>1 Kings<br/>2 Kings<br/>1 Chronicles<br/>2 Chronicles<br/>Ezra<br/>Nehemiah<br/>Esther
	</Fragment>

	<!-- Step 5: Poetry (5) -->
	<!-- Original: x: 627.8, y: 105.8, font_size: 34.7, color: #0000FF -->
	<Fragment
		step={5}
		layout={{ x: 392, y: 66, width: 108, height: 34 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={7}
	>
		Poetry (5)
	</Fragment>

	<!-- Poetry books list -->
	<Fragment
		step={5.1}
		layout={{ x: 392, y: 100, width: 108, height: 180 }}
		font={{ font_size: 11, color: '#000000', alignment: 'left' }}
		zIndex={7}
	>
		Job<br/>Psalms<br/>Proverbs<br/>Songs<br/>Ecclesiastes
	</Fragment>

	<!-- Step 6: Major Prophets (5) -->
	<!-- Original: x: 853.7, y: 71.8, font_size: 34.7, color: #0000FF, 2 lines -->
	<Fragment
		step={6}
		layout={{ x: 534, y: 45, width: 135, height: 56 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={8}
	>
		Major<br/>Prophets (5)
	</Fragment>

	<!-- Major Prophets books list -->
	<Fragment
		step={6.1}
		layout={{ x: 534, y: 100, width: 135, height: 180 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={8}
	>
		Isaiah<br/>Jeremiah<br/>Lamentations<br/>Ezekiel<br/>Daniel
	</Fragment>

	<!-- Step 7: Minor Prophets (12) -->
	<!-- Original: x: 1091.7, y: 82.5, font_size: 34.7, color: #0000FF, 2 lines -->
	<Fragment
		step={7}
		layout={{ x: 682, y: 52, width: 143, height: 51 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={9}
	>
		Minor<br/>Prophets (12)
	</Fragment>

	<!-- Minor Prophets books list -->
	<Fragment
		step={7.1}
		layout={{ x: 682, y: 100, width: 143, height: 180 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={9}
	>
		Hosea<br/>Joel<br/>Amos<br/>Obadiah<br/>Jonah<br/>Micah<br/>Nahum<br/>Habakkuk<br/>Zephaniah<br/>Haggai<br/>Zechariah<br/>Malachi
	</Fragment>

	<!-- Step 8: Gospel (4) -->
	<!-- Original: x: 185.7, y: 502.7, font_size: 28, color: #0000FF -->
	<Fragment
		step={8}
		layout={{ x: 116, y: 314, width: 95, height: 29 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={10}
	>
		Gospel (4)
	</Fragment>

	<!-- Gospel books list -->
	<Fragment
		step={8.1}
		layout={{ x: 116, y: 343, width: 95, height: 80 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={10}
	>
		Matthew<br/>Mark<br/>Luke<br/>John
	</Fragment>

	<!-- Step 9: Church History (1) -->
	<!-- Original: x: 432, y: 492, font_size: 28, color: #0000FF, 2 lines -->
	<Fragment
		step={9}
		layout={{ x: 270, y: 307, width: 96, height: 43 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={11}
	>
		Church<br/>History (1)
	</Fragment>

	<!-- Church History books list -->
	<Fragment
		step={9.1}
		layout={{ x: 270, y: 350, width: 96, height: 30 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={11}
	>
		Acts
	</Fragment>

	<!-- Step 10: Letters to Churches (9) -->
	<!-- Original: x: 667.5, y: 485.8, font_size: 28, color: #0000FF, 2 lines -->
	<Fragment
		step={10}
		layout={{ x: 417, y: 304, width: 117, height: 50 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={13}
	>
		Letters to<br/>Churches (9)
	</Fragment>

	<!-- Letters to Churches books list -->
	<Fragment
		step={10.1}
		layout={{ x: 417, y: 354, width: 117, height: 130 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={13}
	>
		Romans<br/>1 Corinthians<br/>2 Corinthians<br/>Galatians<br/>Ephesians<br/>Philippians<br/>Colossians<br/>1 Thessalonians<br/>2 Thessalonians
	</Fragment>

	<!-- Step 11: Letters to Individuals (12) -->
	<!-- Original: x: 932, y: 485.8, font_size: 28, color: #0000FF, 2 lines -->
	<Fragment
		step={11}
		layout={{ x: 582, y: 304, width: 134, height: 50 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={14}
	>
		Letters to<br/>Individuals (12)
	</Fragment>

	<!-- Letters to Individuals books list -->
	<Fragment
		step={11.1}
		layout={{ x: 582, y: 354, width: 134, height: 160 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={14}
	>
		1 Timothy<br/>2 Timothy<br/>Titus<br/>Philemon<br/>Hebrews<br/>James<br/>1 Peter<br/>2 Peter<br/>1 John<br/>2 John<br/>3 John<br/>Jude
	</Fragment>

	<!-- Step 12: Prophecy (1) -->
	<!-- Original: x: 1160, y: 502.7, font_size: 28, color: #0000FF -->
	<Fragment
		step={12}
		layout={{ x: 725, y: 314, width: 116, height: 29 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={12}
	>
		Prophecy (1)
	</Fragment>

	<!-- Prophecy books list -->
	<Fragment
		step={12.1}
		layout={{ x: 725, y: 343, width: 116, height: 30 }}
		font={{ font_size: 11, color: '#000000' }}
		zIndex={12}
	>
		Revelation
	</Fragment>

	<!-- Step 13: "How does the Author think?" cloud callout -->
	<!-- Original: x: 258.3, y: 585.3, width: 418.5, height: 253.8, font_size: 42.7 -->
	<Fragment
		step={13}
		layout={{ x: 161, y: 366, width: 261, height: 159 }}
		font={{ font_size: 26.7, bold: true }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={17}
	>
		<span style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center;">
			How does the Author think?
		</span>
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
