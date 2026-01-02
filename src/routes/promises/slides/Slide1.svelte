<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Path, Rect } from '$lib/components/svg';

	/**
	 * Slide 1: The Promises - Pixel-perfect layout from PowerPoint extraction
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * 
	 * All coordinates from 09-The_Promises.json extraction
	 * 47 animation steps including decorative rectangles and connecting lines
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
	<ReferenceOverlay src="/export/09-The_Promises/Slide1.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	<Fragment
		layout={{ x: 321.6, y: 3.1, width: 316.8, height: 42 }}
		font={{ font_size: 43.2, bold: true }}
		zIndex={100}
	>
		The Promises
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (49 Steps) ========== -->

	<!-- Step 1: Genesis 12:1-3 -->
	<Fragment
		step={1}
		drillTo="promises/genesis-12-1"
		layout={{ x: 59.9, y: 9, width: 259.2, height: 36 }}
		font={{ font_size: 33.6, bold: true }}
		zIndex={1}
	>
		Genesis 12:1-3
	</Fragment>

	<!-- Step 2: Rectangle 59 (grey background column) + Line 62 (horizontal line) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={75.6} y={50} width={274.8} height={462.4} fill="var(--color-level1)" />
	</Fragment>

	<Fragment step={2} animate="fade">
		<Line from={{ x: 74.7, y: 48.2 }} to={{ x: 885.7, y: 48.2 }} stroke={{ width: 2.7, color: '#000000' }} />
	</Fragment>

	<!-- Step 3: Great Nation -->
	<Fragment
		step={3}
		layout={{ x: 112.8, y: 115.5, width: 180, height: 28.9 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={6}
		animate="fly-right"
	>
		Great Nation
	</Fragment>

	<!-- Step 5: Land of Canaan -->
	<Fragment
		step={4}
		layout={{ x: 112.8, y: 226.7, width: 194.4, height: 30 }}
		font={{ font_size: 26.4, bold: true }}
		zIndex={7}
	>
		Land of Canaan
	</Fragment>

	<!-- Step 6: Families Blessed -->
	<Fragment
		step={5}
		layout={{ x: 112.8, y: 369.3, width: 208.8, height: 28.9 }}
		font={{ font_size: 26.4, bold: true }}
		zIndex={8}
	>
		Families Blessed
	</Fragment>

	<!-- Step 7: Deuteronomy 7:6-8 (hyperlink) -->
	<Fragment
		step={6}
		drillTo="promises/deuteronomy-7-6"
		layout={{ x: 105.6, y: 145.5, width: 223.2, height: 34.9 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={9}
	>
		Deuteronomy 7:6-8
	</Fragment>

	<!-- Step 8: Israel (boxed) -->
	<Fragment
		step={7}
		layout={{ x: 156, y: 175.4, width: 122.4, height: 43.9 }}
		font={{ font_size: 33.6, bold: true }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={10}
	>
		Israel
	</Fragment>

	<!-- Step 9: Genesis 13:14-15 (hyperlink) -->
	<Fragment
		step={8}
		drillTo="promises/genesis-13-14"
		layout={{ x: 105.6, y: 249.3, width: 204.6, height: 36 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={17}
	>
		Genesis 13:14-15
	</Fragment>

	<!-- Step 10: What kinds of things are forever? (hyperlink) -->
	<Fragment
		step={9}
		drillTo="promises/forever-things"
		layout={{ x: 354.7, y: 59.3, width: 252, height: 48.6 }}
		font={{ font_size: 24, wrap: true, align: 'center' }}
		zIndex={14}
	>
		What kinds of things are forever?
	</Fragment>

	<!-- Step 11: Spiritual (blue text) -->
	<Fragment
		step={10}
		layout={{ x: 607.8, y: 54, width: 268.2, height: 50.5 }}
		font={{ font_size: 52.8, bold: true, color: 'var(--color-level3)' }}
		zIndex={15}
	>
		Spiritual
	</Fragment>

	<!-- Step 12: Rectangle 60 (blue background column) -->
	<Fragment step={11} animate="wipe-down">
		<Rect x={609.9} y={50} width={274.8} height={462.4} fill="var(--color-level2)" />
	</Fragment>

	<!-- Step 13: Physical -->
	<Fragment
		step={12}
		layout={{ x: 91.2, y: 54, width: 252, height: 60.5 }}
		font={{ font_size: 52.8, bold: true }}
		zIndex={16}
	>
		Physical
	</Fragment>

	<!-- Step 14: 1Peter 2:9 (hyperlink) -->
	<Fragment
		step={13}
		drillTo="promises/1peter-2-9"
		layout={{ x: 681.6, y: 148, width: 122.4, height: 30 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={11}
	>
		1Peter 2:9
	</Fragment>

	<!-- Step 15: Right arrow (Israel to Church) -->
	<Fragment step={14} animate="wipe">
		<Arrow from={{ x: 307, y: 197 }} to={{ x: 666, y: 197 }} stroke={{ width: 10 }} zIndex={34} />
	</Fragment>

	<!-- Step 14.1: Church (blue boxed) - appears after arrow with delay -->
	<Fragment
		step={14.1}
		layout={{ x: 679.8, y: 175.4, width: 138.6, height: 43.9 }}
		font={{ font_size: 33.6, bold: true, color: 'var(--color-level3)' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={12}
		animate="fade"
	>
		Church
	</Fragment>

	<!-- Step 15: Chosen race, royal priesthood, holy nation -->
	<Fragment
		step={15}
		layout={{ x: 629.4, y: 104.8, width: 235.8, height: 50.4 }}
		font={{ font_size: 16.8, wrap: true, align: 'center' }}
		zIndex={48}
	>
		Chosen race, Royal Priesthood, Holy Nation
	</Fragment>

	<!-- Step 18: Canaan (boxed) -->
	<Fragment
		step={16}
		layout={{ x: 146, y: 280.3, width: 142.4, height: 43.9 }}
		font={{ font_size: 33.6, bold: true }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={18}
	>
		Canaan
	</Fragment>

	<!-- Step 19: Is physical Israel a great nation today?... -->
	<Fragment
		step={17}
		layout={{ x: 82, y: 319.7, width: 288, height: 50.4 }}
		font={{ font_size: 16.8, wrap: true }}
		zIndex={49}
	>
		Is physical Israel a great nation today? In possession of Canaan?
	</Fragment>

	<!-- Step 20: Hebrews 11:8-16 (hyperlink) -->
	<Fragment
		step={18}
		drillTo="promises/hebrews-11-8"
		layout={{ x: 652.8, y: 249.9, width: 201.6, height: 34.9 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={19}
	>
		Hebrews 11:8-16
	</Fragment>

	<!-- Step 21: Right arrow (Canaan to Heaven) -->
	<Fragment step={19} animate="wipe">
		<Arrow from={{ x: 307, y: 302 }} to={{ x: 666, y: 302 }} stroke={{ width: 10 }} zIndex={35} />
	</Fragment>

	<!-- Step 22: Heaven (blue boxed) -->
	<Fragment
		step={19.1}
		layout={{ x: 681.6, y: 280.3, width: 140.6, height: 43.9 }}
		font={{ font_size: 33.6, bold: true, color: 'var(--color-level3)' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={20}
	>
		Heaven
	</Fragment>

	<!-- Step 23: What if this point is missed? Hebrews 3:11-4:11 (hyperlink) -->
	<Fragment
		step={21}
		drillTo="promises/hebrews-3-14"
		layout={{ x: 364.8, y: 138, width: 230.4, height: 60.3 }}
		font={{ font_size: 19, bold: true, align: 'center' }}
		zIndex={37}
	>
		What if this point is missed?<br />Hebrews 3:11 - 4:11
	</Fragment>

	<!-- Step 24: Joshua…Savior…Israel…Canaan -->
	<Fragment
		step={22}
		layout={{ x: 380.7, y: 230, width: 211, height: 68.5 }}
		font={{ font_size: 24, bold: true, wrap: true, align: 'center' }}
		fill="var(--color-bg-ghost)"
		zIndex={36}
	>
		Joshua…Savior…Israel…Canaan
	</Fragment>

	<!-- Step 25: Jesus…Savior…Church…Heaven (blue) -->
	<Fragment
		step={23}
		layout={{ x: 380.7, y: 302.3, width: 211, height: 66 }}
		font={{ font_size: 24, bold: true, color: 'var(--color-level3)', wrap: true, align: 'center' }}
		fill="var(--color-bg-ghost)"
		zIndex={51}
	>
		Jesus…Savior…Church…Heaven
	</Fragment>

	<!-- Step 26: Luke 1:30-33 (hyperlink) -->
	<Fragment
		step={24}
		drillTo="promises/luke-1-30"
		layout={{ x: 674.4, y: 366, width: 158.4, height: 30 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={13}
	>
		Luke 1:30-33
	</Fragment>

	<!-- Step 27: Christ (blue boxed) -->
	<Fragment
		step={25}
		layout={{ x: 681.6, y: 400.1, width: 144, height: 43.9 }}
		font={{ font_size: 33.6, bold: true, color: 'var(--color-level3)' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={22}
	>
		Christ
	</Fragment>

	<!-- Step 28: Galatians 3:16-29 (hyperlink) -->
	<Fragment
		step={26}
		drillTo="promises/galatians-3-16"
		layout={{ x: 105.6, y: 396, width: 205.2, height: 30 }}
		font={{ font_size: 24, align: 'left' }}
		zIndex={21}
	>
		Galatians 3:16-29
	</Fragment>

	<!-- Step 29: Abraham (boxed) -->
	<Fragment
		step={27}
		layout={{ x: 137.1, y: 428.4, width: 160.2, height: 44.1 }}
		font={{ font_size: 33.6, bold: true }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1.3 }}
		zIndex={30}
	>
		Abraham
	</Fragment>

	<!-- Step 30: Line 47 (connector from Abraham) -->
	<Fragment step={28} animate="draw">
		<Line from={{ x: 271.2, y: 435.3 }} to={{ x: 327.7, y: 435.3 }} stroke={{ width: 4 }} zIndex={24} />
	</Fragment>

	<!-- Step 31: Isaac (small boxed) -->
	<Fragment
		step={29}
		layout={{ x: 328.8, y: 421.5, width: 64.2, height: 27.2 }}
		font={{ font_size: 19.2, align: 'left' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={45}
	>
		Isaac
	</Fragment>

	<!-- Step 32: Line 51 (connector up to Esau) -->
	<Fragment step={30} animate="draw">
		<Line from={{ x: 379.2, y: 426 }} to={{ x: 402.1, y: 399.3 }} stroke={{ width: 4 }} zIndex={44} />
	</Fragment>

	<!-- Step 33: Esau (small boxed) -->
	<Fragment
		step={31}
		layout={{ x: 392.1, y: 375.3, width: 62.1, height: 27.2 }}
		font={{ font_size: 19.2, align: 'left' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={27}
	>
		Esau
	</Fragment>

	<!-- Step 34: Line 52 (connector to Jacob) -->
	<Fragment step={32} animate="draw">
		<Line from={{ x: 386.4, y: 440 }} to={{ x: 422.4, y: 440 }} stroke={{ width: 4 }} zIndex={25} />
	</Fragment>

	<!-- Step 35: Jacob (small boxed) -->
	<Fragment
		step={33}
		layout={{ x: 422.4, y: 421.5, width: 69.6, height: 27.2 }}
		font={{ font_size: 19.2, align: 'left' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={47}
	>
		Jacob
	</Fragment>

	<!-- Step 36: Line 53 (connector to 12 Sons) -->
	<Fragment step={34} animate="draw">
		<Line from={{ x: 486.6, y: 440 }} to={{ x: 536.8, y: 440 }} stroke={{ width: 4 }} zIndex={46} />
	</Fragment>

	<!-- Step 37: 12 Sons (Tribes) (small boxed) -->
	<Fragment
		step={35}
		layout={{ x: 531.4, y: 422.3, width: 88.8, height: 46.5 }}
		font={{ font_size: 19.2 }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={31}
	>
		12 Sons<br />(Tribes)
	</Fragment>

	<!-- Step 38: Judah (small boxed) -->
	<Fragment
		step={36}
		layout={{ x: 547, y: 398.8, width: 81.9, height: 27.2 }}
		font={{ font_size: 19.2 }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={29}
	>
		Judah
	</Fragment>

	<!-- Step 39: David (small boxed) -->
	<Fragment
		step={37}
		layout={{ x: 564.2, y: 371.6, width: 75.2, height: 27.2 }}
		font={{ font_size: 19.2 }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={28}
	>
		David
	</Fragment>

	<!-- Step 40: Line 55 (connector to Christ) -->
	<Fragment step={38} animate="draw">
		<Line from={{ x: 638.4, y: 387 }} to={{ x: 677.9, y: 407.2 }} stroke={{ width: 4 }} zIndex={3} />
	</Fragment>

	<!-- Step 41: "if you are Christ's, then you are Abraham's offspring" -->
	<Fragment
		step={39}
		layout={{ x: 621.3, y: 449.1, width: 239.2, height: 50.4 }}
		font={{ font_size: 17, wrap: true, align: 'center', bold: true }}
		zIndex={50}
	>
		"If you are Christ's, then you are Abraham's offspring"
	</Fragment>

	<!-- Step 42: Line 46 (connector down to Ishmael) -->
	<Fragment step={40} animate="draw">
		<Line from={{ x: 164.5, y: 472.5 }} to={{ x: 200.5, y: 487.7 }} stroke={{ width: 4 }} zIndex={23} />
	</Fragment>

	<!-- Step 43: Ishmael (small boxed) -->
	<Fragment
		step={41}
		layout={{ x: 201.4, y: 478.1, width: 85.5, height: 27.2 }}
		font={{ font_size: 19.2, align: 'left' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={41}
	>
		Ishmael
	</Fragment>

	<!-- Step 44: Line 48 (connector to Arabic Nations) -->
	<Fragment step={42} animate="draw">
		<Line from={{ x: 279.8, y: 495.6 }} to={{ x: 314.8, y: 495.6 }} stroke={{ width: 4 }} zIndex={40} />
	</Fragment>

	<!-- Step 45: Arabic Nations (small boxed) -->
	<Fragment
		step={43}
		layout={{ x: 307.2, y: 480, width: 147.5, height: 27.2 }}
		font={{ font_size: 19.2 }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={39}
	>
		Arabic Nations
	</Fragment>

	<!-- Step 46: Line 49 (connector to Mohammed) -->
	<Fragment step={44} animate="draw">
		<Line from={{ x: 438.9, y: 495.6 }} to={{ x: 482.1, y: 495.6 }} stroke={{ width: 4 }} zIndex={0} />
	</Fragment>

	<!-- Step 47: Mohammed (small boxed) -->
	<Fragment
		step={45}
		layout={{ x: 481.1, y: 480, width: 119.7, height: 27.2 }}
		font={{ font_size: 19.2, align: 'left' }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={42}
	>
		Mohammed
	</Fragment>

	<!-- Step 48: Line 50 (connector to Islam) -->
	<Fragment step={46} animate="draw">
		<Line from={{ x: 521.7, y: 503.9 }} to={{ x: 572, y: 519.3 }} stroke={{ width: 4 }} zIndex={38} />
	</Fragment>

	<!-- Step 49: Islam (small boxed) -->
	<Fragment
		step={47}
		layout={{ x: 572.9, y: 502.4, width: 75.9, height: 27.2 }}
		font={{ font_size: 19.2 }}
		fill="var(--color-bg-ghost)"
		line={{ color: '#000000', width: 1 }}
		zIndex={43}
	>
		Islam
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components inside Fragment */
</style>
