<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import FragmentArrow from '$lib/components/FragmentArrow.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 2: Galatians 4:21-31 - Physical vs Spiritual (Hagar/Sarah allegory)
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * 
	 * All coordinates from 09-The_Promises.json extraction (slide_number: 2)
	 * 26 animation steps
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
	<ReferenceOverlay src="/export/09-The_Promises/Slide2.png" />

	<!-- ========== ANIMATION SEQUENCE (26 Steps) ========== -->

	<!-- Step 1: Galatians 4:21-31 (hyperlink) -->
	<Fragment
		step={1}
		drillTo="promises/galatians-4-21"
		layout={{ x: 60.5, y: -1.4, width: 336.4, height: 55.3 }}
		font={{ font_size: 38.4, bold: true }}
		zIndex={2}
	>
		Galatians 4:21-31
	</Fragment>

	<!-- Step 2: Rectangle 35 (grey background column - Physical) -->
	<Fragment
		step={2}
		layout={{ x: 92.3, y: 52.7, width: 345.6, height: 468 }}
		fill="var(--color-level1)"
		zIndex={0}
	>
		<span></span>
	</Fragment>

	<!-- Step 3: Rectangle 34 (blue background column - Spiritual) -->
	<Fragment
		step={3}
		layout={{ x: 516, y: 52.7, width: 338.4, height: 468 }}
		fill="var(--color-level2)"
		zIndex={0}
	>
		<span></span>
	</Fragment>

	<!-- Step 4: Abraham (centered boxed) -->
	<Fragment
		step={4}
		layout={{ x: 379.2, y: 100.7, width: 208.8, height: 54 }}
		font={{ font_size: 43.2 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 2.3 }}
		zIndex={22}
	>
		Abraham
	</Fragment>

	<!-- Step 5: Ishmael -->
	<Fragment
		step={5}
		layout={{ x: 180.9, y: 107.5, width: 170.2, height: 61.1 }}
		font={{ font_size: 43.2, alignment: 'left' }}
		zIndex={4}
	>
		Ishmael
	</Fragment>

	<!-- Step 6: Isaac (blue) -->
	<Fragment
		step={6}
		layout={{ x: 624.9, y: 108.7, width: 121.7, height: 61.1 }}
		font={{ font_size: 43.2, alignment: 'left', color: 'var(--color-level3)' }}
		zIndex={3}
	>
		Isaac
	</Fragment>

	<!-- Step 7: Physical (header) -->
	<Fragment
		step={7}
		layout={{ x: 167.9, y: 44.7, width: 194.5, height: 61.1 }}
		font={{ font_size: 43.2, bold: true }}
		zIndex={16}
	>
		Physical
	</Fragment>

	<!-- Step 8: Spiritual (header, blue) -->
	<Fragment
		step={8}
		layout={{ x: 589.2, y: 45.9, width: 192, height: 61.1 }}
		font={{ font_size: 43.2, bold: true, color: 'var(--color-level3)' }}
		zIndex={17}
	>
		Spiritual
	</Fragment>

	<!-- Step 9: Vertical stem from Abraham + Arrow to Hagar -->
	<Fragment step={9} animate="none">
		<!-- Vertical stem centered under Abraham -->
		<div class="connector-stem" style="left: 450px; top: 154px; width: 20px; height: 41px; z-index: 21;"></div>
	</Fragment>
	<FragmentArrow 
		step={9}
		path={{ start: { x: 450, y: 186 }, end: { x: 336, y: 186 } }}
		line={{ width: 16 }}
		zIndex={21}
	/>

	<!-- Step 10: Hagar (bold) - appears with arrow at step 9, slightly delayed -->
	<Fragment
		step={9.1}
		layout={{ x: 195.3, y: 154.3, width: 141.1, height: 61.1 }}
		font={{ font_size: 43.2, bold: true, alignment: 'left' }}
		zIndex={8}
	>
		Hagar
	</Fragment>

	<!-- Step 11: covenant (left side) -->
	<Fragment
		step={11}
		layout={{ x: 178.5, y: 196.7, width: 174.8, height: 55.3 }}
		font={{ font_size: 38.4, alignment: 'left' }}
		zIndex={18}
	>
		covenant
	</Fragment>

	<!-- Step 12: Arrow from Abraham to Sarah (right arrow shape) -->
	<Fragment step={12} animate="none">
		<div class="connector-stem" style="left: 485px; top: 154px; width: 20px; height: 41px; z-index: 21;"></div>
	</Fragment>
	<FragmentArrow 
		step={12}
		path={{ start: { x: 505, y: 186 }, end: { x: 617, y: 186 } }}
		line={{ width: 16 }}
		zIndex={20}
	/>

	<!-- Step 13: Sarah (bold, blue) - appears with arrow at step 12, slightly delayed -->
	<Fragment
		step={12.1}
		layout={{ x: 616.5, y: 158.2, width: 138.7, height: 61.1 }}
		font={{ font_size: 43.2, bold: true, alignment: 'left', color: 'var(--color-level3)' }}
		zIndex={5}
	>
		Sarah
	</Fragment>

	<!-- Step 14: covenant (right side, blue) -->
	<Fragment
		step={14}
		layout={{ x: 598.5, y: 196.7, width: 174.8, height: 55.3 }}
		font={{ font_size: 38.4, alignment: 'left', color: 'var(--color-level3)' }}
		zIndex={19}
	>
		covenant
	</Fragment>

	<!-- Step 15: Down arrow (left side) -->
	<FragmentArrow 
		step={15}
		path={{ start: { x: 265, y: 244 }, end: { x: 265, y: 292 } }}
		line={{ width: 24 }}
		headSize={1}
		zIndex={23}
	/>

	<!-- Step 16: Mt. Sinai (bold) -->
	<Fragment
		step={15.1}
		layout={{ x: 177.5, y: 282.2, width: 176.9, height: 55.3 }}
		font={{ font_size: 38.4, bold: true, alignment: 'left' }}
		zIndex={9}
	>
		Mt. Sinai
	</Fragment>

	<!-- Step 17: Mosaical Law (bold italic) -->
	<Fragment
		step={17}
		layout={{ x: 132.8, y: 314.2, width: 276.9, height: 55.3 }}
		font={{ font_size: 38.4, bold: true, italic: true, alignment: 'left' }}
		zIndex={10}
	>
		Mosaical Law
	</Fragment>

	<!-- Step 18: Present Jerusalem -->
	<Fragment
		step={18}
		layout={{ x: 116.4, y: 360, width: 302.1, height: 49.4 }}
		font={{ font_size: 33.6, alignment: 'left' }}
		zIndex={11}
	>
		Present Jerusalem
	</Fragment>

	<!-- Step 19: Bondage to sin -->
	<Fragment
		step={19}
		layout={{ x: 144.3, y: 394.7, width: 252, height: 49.4 }}
		font={{ font_size: 33.6, alignment: 'left' }}
		zIndex={12}
	>
		Bondage to sin
	</Fragment>

	<!-- Step 20: Slaves to the LAW -->
	<Fragment
		step={20}
		layout={{ x: 118.2, y: 438, width: 296.1, height: 49.4 }}
		font={{ font_size: 33.6, alignment: 'left' }}
		zIndex={13}
	>
		Slaves to the LAW
	</Fragment>

	<!-- Step 21: Romans 8:2-3 (hyperlink) -->
	<Fragment
		step={21}
		drillTo="promises/romans-8-2"
		layout={{ x: 166.1, y: 471.5, width: 208.2, height: 43.6 }}
		font={{ font_size: 28.8, bold: true, alignment: 'left' }}
		zIndex={14}
	>
		Romans 8:2-3
	</Fragment>

	<!-- Step 22: Down arrow (right side) -->
	<FragmentArrow 
		step={22}
		path={{ start: { x: 685, y: 244 }, end: { x: 685, y: 292 } }}
		line={{ width: 24 }}
		headSize={1}
		zIndex={24}
	/>

	<!-- Step 23: "Jerusalem above is free" (blue, italic) -->
	<Fragment
		step={22.1}
		layout={{ x: 543.4, y: 278.5, width: 283.4, height: 97.9 }}
		font={{ font_size: 38.4, italic: true, color: 'var(--color-level3)' }}
		zIndex={6}
	>
		<span class="wrap-text">"Jerusalem above is free"</span>
	</Fragment>

	<!-- Step 24: Hebrews 12:22-24 (hyperlink) -->
	<Fragment
		step={24}
		drillTo="promises/hebrews-12-22"
		layout={{ x: 551, y: 383, width: 284.7, height: 49.4 }}
		font={{ font_size: 33.6, bold: true, alignment: 'left' }}
		zIndex={7}
	>
		Hebrews 12:22-24
	</Fragment>

	<!-- Step 25: Physical Jews summary box -->
	<Fragment
		step={25}
		layout={{ x: 85.4, y: 374.8, width: 362.9, height: 64.8 }}
		font={{ font_size: 21.6, bold: true }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 1 }}
		zIndex={15}
	>
		<span class="wrap-text"><span class="text-physical">Physical</span> Jews/Following Mosaical Law <strong>does not</strong> give salvation.</span>
	</Fragment>

	<!-- Step 26: Spiritual Jews summary box -->
	<Fragment
		step={26}
		layout={{ x: 503.3, y: 446.3, width: 362.9, height: 64.8 }}
		font={{ font_size: 24, bold: true }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 1 }}
		zIndex={25}
	>
		<span class="wrap-text"><span class="text-spiritual">Spiritual</span> Jews/Following Christ's Law <strong>gives</strong> salvation.</span>
	</Fragment>
</Slide>

<style>
	.text-physical {
		color: var(--color-text-primary);
	}

	.text-spiritual {
		color: var(--color-level3);
	}

	.connector-stem {
		position: absolute;
		background: #000000;
	}
</style>
