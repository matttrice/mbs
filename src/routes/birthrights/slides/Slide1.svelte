<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Arc, Circle, Line, Rect, Ellipse } from '$lib/components/svg';

	/**
	 * Slide 1: Birthrights - Main teaching slide
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 *
	 * All coordinates from 11-Birthrights.json extraction
	 * 105 animation sequences with Physical/Spiritual birth comparison
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
	const boxLayer = 0;
	const shapeLayer = 10;
	const textLayer = 20;
	const arrowLayer = 30;	
	const linkLayer = 40;
</script>

<Slide {slideIndex}>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/11-Birthrights/Slide1.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->

	<!-- Genesis 25:27-34 (top left hyperlink) -->
	<Fragment
		drillTo="birthrights/genesis-25-27"
		layout={{ x: 10, y: 5, width: 200, height: 21 }}
		font={{ font_size: 20, bold: true, align: 'left', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Genesis 25:27-34
	</Fragment>

	<!-- Title: Birthrights -->
	<Fragment
		layout={{ x: 368, y: -1, width: 242, height: 44 }}
		font={{ font_size: 39.2, bold: true, align: 'center', v_align: 'middle', font_name: 'Arial' }}
		zIndex={textLayer}
	>
		Birthrights
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (105 Steps) ========== -->

	<!-- Step 1: Hebrews 12:16-17 -->
	<Fragment
		step={1}
		drillTo="birthrights/hebrews-12-16"
		layout={{ x: 10, y: 30, width: 200, height: 21 }}
		font={{ font_size: 20, bold: true, align: 'left' }}
		zIndex={textLayer}
	>
		Hebrews 12:16-17
	</Fragment>

	<!-- Step 2: "godless and immoral" question -->
	<Fragment
		step={2}
		layout={{ x: 227, y: 5, width: 154, height: 50 }}
		font={{ font_size: 11.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		"godless and immoral" <br /> what was so <br />bad about Esau?
	</Fragment>

	<!-- Step 3: Romans 8:5-8, Genesis 25:23 -->
	<Fragment
		step={3}
		drillTo="birthrights/sin-of-esau"
		layout={{ x: 10, y: 54, width: 305, height: 21 }}
		font={{ font_size: 20, bold: true, align: 'left' }}
		zIndex={textLayer}
	>
		Romans 8:5-8, Genesis 25:23
	</Fragment>

	<!-- Step 4: John 3:3-8 -->
	<Fragment
		step={4}
		drillTo="birthrights/john-3-3"
		layout={{ x: 402, y: 41, width: 156, height: 20 }}
		font={{ font_size: 23.3, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		John 3:3-8
	</Fragment>

	<!-- Step 5: Horizontal line across -->
	<Fragment step={5} animate="wipe">
		<Line from={{ x: 0, y: 78 }} to={{ x: 960, y: 78 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Step 5 (with): Rectangle 86 - Physical column (gray background) -->
	<Fragment step={5} animate="wipe-down">
		<Rect x={0} y={80} width={484} height={460} fill="var(--bg-level-1)" zIndex={boxLayer} />
	</Fragment>

	<!-- Step 5 (with): Physical text -->
	<Fragment
		step={5}
		layout={{ x: 127, y: 90, width: 187, height: 48 }}
		font={{ font_size: 39.2, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Physical
	</Fragment>

	<!-- Step 5 (with): "Flesh gives birth to flesh" -->
	<Fragment
		step={5}
		layout={{ x: 136, y: 82, width: 172, height: 21 }}
		font={{ font_size: 13.3, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		"Flesh gives birth to flesh"
	</Fragment>

	<!-- Step 6: Spiritual text -->
	<Fragment
		step={6}
		layout={{ x: 624, y: 96, width: 182, height: 42 }}
		font={{ font_size: 39.2, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Spiritual
	</Fragment>

	<!-- Step 6 (with): "Spirit gives birth to spirit" -->
	<Fragment
		step={6}
		layout={{ x: 629, y: 82, width: 172, height: 21 }}
		font={{ font_size: 13.3, italic: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		"Spirit gives birth to spirit"
	</Fragment>

	<!-- Step 6 (with): Blue background rectangle for spiritual column -->
	<Fragment step={6} animate="wipe-down">
		<Rect x={484} y={80} width={476} height={460} fill="var(--bg-level-2)" zIndex={boxLayer} />
	</Fragment>

	<!-- Step 7: Husband -->
	<Fragment
		step={7}
		layout={{ x: 316, y: 100, width: 129, height: 31 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={textLayer}
	>
		Husband
	</Fragment>

	<!-- Step 8: Wife -->
	<Fragment
		step={8}
		layout={{ x: 380, y: 143, width: 64, height: 36 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Wife
	</Fragment>

	<!-- Step 8 (with): Arrow connector from Husband to Wife -->
	<Fragment step={8} animate="fade">
		<Arrow from={{ x: 375, y: 164 }} to={{ x: 303, y: 186 }} stroke={{ width: 8, color: 'var(--stroke-level-0)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 8 (with): Physical oval (womb) -->
	<Fragment step={8}>
		<Ellipse cx={217} cy={243} rx={93.5} ry={105} stroke={{ width: 8, color: 'var(--stroke-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 9: Seed -->
	<Fragment
		step={9}
		layout={{ x: 365, y: 182, width: 82, height: 31 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Seed
	</Fragment>

	<!-- Blue oval (seed representation) -->
	<Fragment step={10}>
		<Ellipse cx={217} cy={220} rx={25} ry={25} fill="var(--bg-level-2)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={textLayer} />
	</Fragment>

	<!-- Arrow from Seed to physical oval -->
	<Fragment step={10}>
		<Arrow from={{ x: 315, y: 135 }} to={{ x: 241, y: 200 }} stroke={{ width: 8, color: 'var(--stroke-level-0)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 10 (with): Inception text -->
	<Fragment
		step={10}
		layout={{ x: 320, y: 228, width: 131, height: 29 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Inception
	</Fragment>

	<!-- Step 11: Fed by Woman -->
	<Fragment
		step={11}
		layout={{ x: 347, y: 275, width: 55, height: 15 }}
		font={{ font_size: 15, bold: true, align: 'left', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Fed by
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 345, y: 290, width: 110, height: 25 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Woman
	</Fragment>

	<!-- Step 11 (with): Gestation -->
	<Fragment
		step={11}
		layout={{ x: 318, y: 327, width: 136, height: 29 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Gestation
	</Fragment>

	<!-- Step 11 (with): Water text in womb -->
	<Fragment
		step={11}
		layout={{ x: 173, y: 270, width: 101, height: 40 }}
		font={{ font_size: 36.7, bold: true, color: 'var(--text-light)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Water
	</Fragment>

	<!-- Step 11 (with): Water line image -->
	<Fragment
		step={11}
		layout={{ x: 123, y: 236, width: 190, height: 123 }}
		zIndex={boxLayer}
	>
		<img src="/export/11-Birthrights/image1.png" alt="BirthWaterLine" class="slide-image" />
	</Fragment>

	<Fragment step={11}>
		<Rect x={0} y={361} width={485} height={9} fill="var(--bg-level-3)" zIndex={boxLayer} />
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 122, y: 379, width: 259, height: 26 }}
		font={{ font_size: 26.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Baby - Birthrights
	</Fragment>

	<Fragment step={12} animate="wipe-down">
		<Arrow from={{ x: 215, y: 350 }} to={{ x: 215, y: 382 }} stroke={{ width: 10, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Step 12: How do you know which family this baby belongs to? -->
	<Fragment
		step={12}
		layout={{ x: 7, y: 133, width: 130, height: 60 }}
		font={{ font_size: 15, align: 'center', wrap: true }}
		zIndex={textLayer}
	>
		How do you know which family this baby belongs to?
	</Fragment>

	<!-- Step 13: Seed,Body text -->
	<Fragment
		step={13}
		layout={{ x: 15, y: 197, width: 100, height: 79 }}
		font={{ font_size: 33, bold: true, align: 'center', v_align: 'middle', wrap: true }}
		zIndex={textLayer}
	>
		Seed,<br>Body
	</Fragment>

	<!-- Step 13 (with): Arrow to Genetics -->
	<Fragment step={13} animate="wipe-down">
		<Arrow from={{ x: 64, y: 273 }} to={{ x: 64, y: 348 }} stroke={{ width: 8, color: 'var(--stroke-level-0)' }} zIndex={arrowLayer} />
	</Fragment>

	<Fragment
		step={13}
		layout={{ x: 15, y: 354, width: 102, height: 24 }}
		fill='var(--bg-light)'
		font={{ font_size: 20, align: 'center', v_align: 'middle', color: 'var(--text-level-0)' }}
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
	>
		Water Line
	</Fragment>

	<!-- Step 13 (with): Genetics text -->
	<Fragment
		step={13}
		layout={{ x: 12, y: 380, width: 113, height: 26 }}
		font={{ font_size: 26.7, bold: true, align: 'center', font_name: 'Arial' }}
		zIndex={textLayer}
	>
		Genetics
	</Fragment>

	<!-- Step 14: Christ -->
	<Fragment
		step={14}
		drillTo="birthrights/ephesians-5-22"
		layout={{ x: 500, y: 103, width: 96, height: 29 }}
		font={{ font_size: 30, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Christ
	</Fragment>

	<!-- Step 14 (with): Eph. 5:22 reference -->
	<Fragment
		step={14}
		drillTo="birthrights/ephesians-5-22"
		layout={{ x: 517, y: 129, width: 66, height: 13 }}
		font={{ font_size: 10, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Eph. 5:22
	</Fragment>

	<!-- Step 14 (with): Blue arrow connector -->
	<Fragment step={14} animate="wipe-right">
		<Arrow from={{ x: 450, y: 118 }} to={{ x: 500, y: 118 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 15: Arrow connector for Church -->
	<Fragment step={15} animate="wipe-right">
		<Arrow from={{ x: 450, y: 156 }} to={{ x: 500, y: 156 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 15.1 (after): Church -->
	<Fragment
		step={15}
		drillTo="birthrights/ephesians-5-29"
		layout={{ x: 502, y: 142, width: 106, height: 29 }}
		font={{ font_size: 30, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Church
	</Fragment>

	<!-- Step 15.1 (with): Eph. 5:29, 2 Cor. 11: 2 reference -->
	<Fragment
		step={15.1}
		drillTo="birthrights/ephesians-5-29"
		layout={{ x: 501, y: 166, width: 108, height: 14 }}
		font={{ font_size: 10, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Eph. 5:29, 2 Cor. 11: 2
	</Fragment>

	<!-- Step 15.1 (with): Arrow from Church area to oval -->
	<Fragment step={15.1} animate="wipe-right">
		<Arrow from={{ x: 610, y: 162 }} to={{ x: 636, y: 178 }} stroke={{ width: 5, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 15.1 (with): Spiritual oval (womb) -->
	<Fragment step={15.1}>
		<Ellipse cx={717} cy={244} rx={93.5} ry={105} stroke={{ width: 8, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 16: Word -->
	<Fragment
		step={16}
		drillTo="birthrights/luke-8-11"
		layout={{ x: 511, y: 184, width: 77, height: 29 }}
		font={{ font_size: 30, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Word
	</Fragment>

	<!-- Step 16 (with): Luke 8:11 reference -->
	<Fragment
		step={16}
		drillTo="birthrights/luke-8-11"
		layout={{ x: 498, y: 208, width: 108, height: 14 }}
		font={{ font_size: 10, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Luke 8:11
	</Fragment>

	<!-- Step 16 (with): Arrow to Word -->
	<Fragment step={16} animate="wipe-right">
		<Arrow from={{ x: 450, y: 200 }} to={{ x: 500, y: 200 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 17: Arrow for Faith from Hearing -->
	<Fragment step={17} animate="wipe-right">
		<Arrow from={{ x: 452, y: 244 }} to={{ x: 500, y: 244 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 17 (with): Faith from text -->
	<Fragment
		step={17}
		layout={{ x: 506, y: 226, width: 93, height: 12 }}
		font={{ font_size: 15, bold: true, color: 'var(--bg-level-3)', align: 'left' }}
		zIndex={textLayer}
	>
		Faith from
	</Fragment>

	<!-- Step 17 (with): Hearing -->
	<Fragment
		step={17}
		layout={{ x: 505, y: 234, width: 100, height: 29 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Hearing
	</Fragment>

	<!-- Step 17 (with): Romans 10:7 reference -->
	<Fragment
		step={17}
		drillTo="birthrights/romans-10-17"
		layout={{ x: 513, y: 259, width: 80, height: 14 }}
		font={{ font_size: 10, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Romans 10:7
	</Fragment>

	<!-- Step 18: Arrow to spiritual seed -->
	<Fragment step={18} animate="wipe-right">
		<Arrow from={{ x: 598, y: 130 }} to={{ x: 680, y: 200 }} stroke={{ width: 8, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 18 (with): Heart shape (red) - first instance -->
	<Fragment 
		step={18}
		layout={{ x: 665, y: 165, width: 100, height: 100 }}
		zIndex={shapeLayer}>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--bg-blood)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>

	</Fragment>

	<Fragment step={19} animate="wipe-right">
		<Arrow from={{ x: 456, y: 304 }} to={{ x: 497, y: 304 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={10} />
	</Fragment>

	<!-- Step 19: Fed by Church -->
	<Fragment
		step={19}
		layout={{ x: 508, y: 275, width: 55, height: 15 }}
		font={{ font_size: 15, bold: true, color: 'var(--bg-level-3)', align: 'left', v_align: 'middle' }}
		zIndex={13}
	>
		Fed by
	</Fragment>
	<Fragment
		step={19}
		layout={{ x: 502, y: 290, width: 110, height: 25 }}
		font={{ font_size: 30, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={13}
	>
		Church
	</Fragment>
	
	<!-- Step 19 (with): Faith box -->
	<Fragment
		step={19}
		layout={{ x: 509, y: 318, width: 60, height: 15 }}
		font={{ font_size: 15, bold: true, color: 'var(--bg-level-3)', align: 'left' }}
		zIndex={65}
	>
		Faith
	</Fragment>
	
	<Fragment step={19.1} animate="wipe-right">
		<Arrow from={{ x: 456, y: 344 }} to={{ x: 497, y: 344 }} stroke={{ width: 4, color: 'var(--bg-level-3)' }} zIndex={10} />
	</Fragment>

	<!-- Step 19 (with): Grows -->
	<Fragment
		step={19.1}
		layout={{ x: 506, y: 328, width: 94, height: 29 }}
		font={{ font_size: 30, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Grows
	</Fragment>

	<!-- Step 19 (with): Hebrews 11:1 reference -->
	<Fragment
		step={19.1}
		drillTo="birthrights/hebrews-11-1"
		layout={{ x: 549, y: 318, width: 80, height: 14 }}
		font={{ font_size: 10, color: 'var(--bg-level-3)', align: 'left', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Hebrews 11:1
	</Fragment>

	<!-- Step 20: Baptized -->
	<Fragment
		step={20}
		layout={{ x: 620, y: 267, width: 194, height: 40 }}
		font={{ font_size: 36.7, bold: true, color: 'var(--text-light)', align: 'center', v_align: 'middle' }}
		zIndex={96}
	>
		Baptized
	</Fragment>

	<!-- Step 20 (with): Acts 2:38, Gal. 2:24, 1Cor. 12:13 reference -->
	<Fragment
		step={20}
		drillTo="birthrights/acts-2-38"
		layout={{ x: 640, y: 303, width: 160, height: 14 }}
		font={{ font_size: 10, color: 'var(--text-ghost)', align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Acts 2:38, Gal. 2:24, 1Cor. 12:13
	</Fragment>

	<!-- Step 20 (with): Water line image for spiritual -->
	<Fragment
		step={20}
		layout={{ x: 620, y: 237, width: 190, height: 120 }}
		zIndex={boxLayer}
	>
		<img src="/export/11-Birthrights/image1.png" alt="BirthWaterLine" class="slide-image" />
	</Fragment>

	<!-- Step 21: Down arrow for spiritual birth -->
	<Fragment step={21} animate="wipe-down">
		<Arrow from={{ x: 720, y: 350 }} to={{ x: 720, y: 382 }} stroke={{ width: 10, color: 'var(--bg-level-0)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 21.2 (after 1000ms): Blue horizontal bar (spiritual birth line) -->
	<Fragment step={21.1}>
		<Rect x={485} y={361} width={475} height={9} fill="var(--bg-level-3)" zIndex={boxLayer} />
	</Fragment>

	<!-- Step 21.3 (after): Baby - Birthrights (spiritual side) -->
	<Fragment
		step={21.2}
		layout={{ x: 591, y: 379, width: 231, height: 26 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--bg-level-3)', align: 'left', v_align: 'middle' }}
		zIndex={textLayer}
	>
		Baby - Birthrights
	</Fragment>

	<!-- Step 22: How do you know which family (spiritual side) -->
	<Fragment
		step={22}
		layout={{ x: 815, y:133, width: 130, height: 60 }}
		font={{ font_size: 15, align: 'center', wrap: true }}
		zIndex={textLayer}
	>
		How do you know which family this baby belongs to?
	</Fragment>

	<!-- Step 23: Seed,Body (spiritual side) -->
	<Fragment
		step={23}
		layout={{ x: 825, y: 197, width: 94, height: 93 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle', wrap: true }}
		zIndex={11}
	>
		Seed,<br>Body
	</Fragment>

	<!-- Step 23 (with): Arrow to spiritual genetics -->
	<Fragment step={23} animate="wipe-down">
		<Arrow from={{ x: 870, y: 281 }} to={{ x: 870, y: 348 }} stroke={{ width: 8, color: 'var(--bg-level-3)' }} zIndex={19} />
	</Fragment>

	<!-- Step 23 (with): Genetics (spiritual) -->
	<Fragment
		step={23}
		layout={{ x: 820, y: 380, width: 113, height: 26 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--bg-level-3)', align: 'center', font_name: 'Arial' }}
		zIndex={57}
	>
		Genetics
	</Fragment>

	<Fragment
		step={23.1} animate="fly-down"
		layout={{ x: 823, y: 354, width: 102, height: 24 }}
		font={{ font_size: 20, align: 'center', v_align: 'middle', color: 'var(--text-level-3)' }}
		fill="var(--bg-light)"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
	>
		Water Line
	</Fragment>

	<!-- Step 24: Yellow highlight oval -->
	<Fragment step={24} animate="draw">
		<Ellipse cx={870} cy={245} rx={61} ry={51} stroke={{ width: 3, color: 'var(--color-highlight)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 24 (with): Yellow arrow to Word -->
	<Fragment step={24.1} animate="draw">
		<Arc from={{ x: 810, y: 256 }} to={{ x: 591, y: 212 }} curve={-35} arrow stroke={{ width: 3, color: 'var(--color-highlight)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 25: Yellow arrow line (vertical) -->
	<Fragment step={24.2} animate="draw">
		<Arc from={{ x: 508, y: 193 }} to={{ x: 496, y: 164 }} curve={-50} shift={15} arrow stroke={{ width: 3, color: 'var(--color-highlight)' }} zIndex={arrowLayer} />
	</Fragment>

	<!-- Step 25.1 (after): Another yellow arrow -->  
	<Fragment step={24.3} animate="draw">
		<Arc arrow from={{ x: 501, y: 151 }} to={{ x: 499, y: 127 }} curve={-45} stroke={{ width: 3, color: 'var(--color-highlight)' }} zIndex={arrowLayer} shift={5} />
	</Fragment>

	<!-- Step 26 (with): Death -->
	<Fragment
		step={26}
		layout={{ x: 441, y: 351, width: 94, height: 25 }}
		font={{ font_size: 23, italic: true, align: 'center', v_align: 'middle' }}
		fill="var(--bg-light)"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		zIndex={1}
	>
		Death
	</Fragment>

	<!-- Step 26: Life (true seed) -->
	<Fragment
		step={26}
		layout={{ x: 448, y: 387, width: 70, height: 20 }}
		font={{ font_size: 23, bold: true, italic: true, v_align: 'middle' }}
		zIndex={58}
	>
		Life
	</Fragment>

	<!-- Step 27: 1Corinthians 15:45-49 -->
	<Fragment
		step={27}
		drillTo="birthrights/1-corinthians-15-49"
		layout={{ x: 349, y: 62, width: 274, height: 33 }}
		line={{ width: 1 , color: 'var(--stroke-level-0)' }}
		fill="var(--bg-light)"
		font={{ font_size: 23.3, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={linkLayer}
	>
		1 Corinthians 15:45-49
	</Fragment>

	<!-- Step 28: 1st Adam box -->
	<Fragment
		step={28}
		layout={{ x: 155, y: 140, width: 125, height: 39 }}
		fill="var(--bg-light)"
		line={{ width: 2, color: 'var(--stroke-level-0)' }}
		font={{ font_size: 26.7, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={68}
	>
		1st Adam
	</Fragment>

	<!-- Step 28 (with): 2nd Adam box -->
	<Fragment
		step={28.1}
		layout={{ x: 650, y: 140, width: 135, height: 39 }}
		fill="var(--bg-light)"
		line={{ width: 2, color: 'var(--stroke-level-0)' }}
		font={{ font_size: 26.7, bold: true, color: 'var(--bg-level-3)', align: 'center', v_align: 'middle' }}
		zIndex={101}
	>
		2nd Adam
	</Fragment>

	<!-- Step 29: Red rectangle (Satan Deceives section) -->
	<Fragment step={29} animate="wipe-right">
		<Rect x={0} y={415} width={735} height={125} fill="var(--bg-danger)" zIndex={boxLayer} />
	</Fragment>

	<!-- Step 29 (with): Satan Deceives text -->
	<Fragment
		step={29}
		layout={{ x: 10, y: 419, width: 222, height: 27 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		Satan Deceives
	</Fragment>

	<!-- Step 29 (with): Not monogamous text -->
	<Fragment
		step={29}
		layout={{ x: 240, y: 421, width: 200, height: 29 }}
		font={{ font_size: 15, align: 'center', v_align: 'middle', wrap: true }}
		zIndex={textLayer}
	>
		Not monogamous, <br /> <strong>Many false seeds.</strong>
	</Fragment>

	<!-- Step 29 (with): Seed/ Doctrine (first) -->
	<Fragment
		step={29}
		layout={{ x: 415, y: 414, width: 126, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={38}
	>
		Seed - Doctrine
	</Fragment>

	<!-- Step 29 (with): Seed/ Doctrine (second) -->
	<Fragment
		step={29}
		layout={{ x: 574, y: 414, width: 126, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={39}
	>
		Seed - Doctrine
	</Fragment>

	<!-- Step 29 (with): Heart shapes for false seeds -->
	<Fragment 
		step={29}
		layout={{ x: 405, y: 415, width: 100, height: 100 }}
	>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
	</Fragment>

	<Fragment 
		step={29}
		layout={{ x: 519, y: 415, width: 100, height: 100 }}
		>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
	</Fragment>

	<Fragment
		step={29}
		layout={{ x: 623, y: 415, width: 100, height: 100 }}
		>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
	</Fragment>

	<!-- Step 29 (with): 2 Corinthians 11:2 -->
	<Fragment
		step={29}
		drillTo="birthrights/satans-seed"
		layout={{ x: 20, y: 445, width: 192, height: 18 }}
		font={{ font_size: 20, bold: true, v_align: 'middle' }}
		zIndex={42}
	>
		2 Corinthians 11:2
	</Fragment>

	<!-- Step 30: Satan masquerades text -->
	<Fragment
		step={30}
		layout={{ x: 15, y: 464, width: 350, height: 31 }}
		font={{ font_size: 11.7, wrap: true, v_align: 'middle' }}
		zIndex={72}
	>
		Satan masquerades as an angel of light. His servants masquerade as servants of righteousness.
	</Fragment>

	<!-- Step 30 (with): Galatians 1:6 quote -->
	<Fragment
		step={30}
		layout={{ x: 40, y: 489, width: 80, height: 25 }}
		font={{ font_size: 17, bold: true, v_align: 'middle' }}
		zIndex={73}
	>
		Galatians 1:6
	</Fragment>

	<Fragment
		step={30}
		layout={{ x: 11, y: 505, width: 420, height: 25 }}
		font={{ font_size: 15, bold: true, wrap: true, v_align: 'middle' }}
		zIndex={73}
	>
		A different gospel — <sup>7</sup> which is really no gospel at all.
	</Fragment>

	<!-- Step 30 (with): "A different Jesus" -->
	<Fragment
		step={30}
		layout={{ x: 255, y: 485, width: 155, height: 25 }}
		font={{ font_size: 15, bold: true, wrap: true, v_align: 'middle' }}
		zIndex={78}
	>
		"A different Jesus"
	</Fragment>

	<!-- Step 31 (with): Harlots text (first) -->
	<Fragment
		step={31}
		layout={{ x: 420, y: 460, width: 65, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--text-ghost)' }}
		zIndex={textLayer}
	>
		Harlots
	</Fragment>

	<!-- Step 31 (with): Harlots text (second) -->
	<Fragment
		step={31}
		layout={{ x: 540, y: 460, width: 64, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--text-ghost)' }}
		zIndex={textLayer}
	>
		Harlots
	</Fragment>
	
	<!-- Step 31 (with): Harlots text (third) -->
	<Fragment
		step={31}
		layout={{ x: 643, y: 460, width: 63, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--text-ghost)'	 }}
		zIndex={textLayer}
	>
		Harlots
	</Fragment>
	
	<!-- Step 31: First Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={455} cy={485} rx={44} ry={48} stroke={{ width: 8, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 31 (with): Second Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={569} cy={485} rx={44} ry={48} stroke={{ width: 8, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 31 (with): Third Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={673.5} cy={485} rx={43.5} ry={48} stroke={{ width: 8, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 31 (with): Arrow lines to harlots -->
	<Fragment step={31} animate="wipe-down">
		<Arrow from={{ x: 510, y: 433 }} to={{ x: 492, y: 450 }} stroke={{ width: 3, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<Fragment step={31} animate="wipe-down">
		<Arrow from={{ x: 509, y: 433 }} to={{ x: 528, y: 456 }} stroke={{ width: 3, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<Fragment step={31} animate="wipe-down">
		<Arrow from={{ x: 624, y: 436 }} to={{ x: 608, y: 455 }} stroke={{ width: 3, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<Fragment step={31} animate="wipe-down">
		<Arrow from={{ x: 623, y: 436 }} to={{ x: 636, y: 453 }} stroke={{ width: 3, color: 'var(--bg-level-0)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 32: Illegitimate Children text -->
	<Fragment
		step={31}
		layout={{ x: 425, y: 495, width: 327, height: 27 }}
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		font={{ font_size: 15, bold: true, v_align: 'middle' }}
		fill="var(--bg-light)"
		zIndex={shapeLayer}
	>
		Illegitimate Children – born of false doctrine
	</Fragment>

	<!-- Step 33 (after): Acts 19:1-5 -->
	<Fragment
		step={33}
		drillTo="birthrights/acts-19-1"
		layout={{ x: 762, y: 500, width: 102, height: 20 }}
		font={{ font_size: 16.7, bold: true, align: 'center' }}
		zIndex={textLayer}
	>
		Acts 19:1-5
	</Fragment>

	<!-- Step 33: What if you didn't know? -->
	<Fragment
		step={33}
		layout={{ x: 775, y: 518, width: 146, height: 25 }}
		font={{ font_size: 13.3, italic: true, bold: true, align: 'center', v_align: 'top' }}
		zIndex={textLayer}
	>
		What if you didn't know?
	</Fragment>

	<!-- Step 34: John 1:11-12 -->
	<Fragment
		step={34}
		drillTo="birthrights/john-1-11"
		layout={{ x: 745, y: 460, width: 165, height: 27 }}
		font={{ font_size: 21.7, bold: true, align: 'center' }}
		zIndex={20}
	>
		John 1:11-12
	</Fragment>

	<!-- Step 35: "right to be called sons of God" -->
	<Fragment
		step={35}
		layout={{ x: 765, y: 485, width: 175, height: 15 }}
		font={{ font_size: 11.7, italic: true, align: 'center' }}
		zIndex={21}
	>
		"right to be called sons of God"
	</Fragment>

	<!-- Step 36: Circumcision box -->
	<Fragment
		step={36}
		layout={{ x: 755, y: 415, width: 149, height: 15 }}
		font={{ font_size: 23.3, bold: true, align: 'center' }}
		zIndex={79}
	>
		Circumcision
	</Fragment>
	<Fragment
		step={36}
		drillTo="birthrights/circumcision"
		layout={{ x: 755, y: 440, width: 149, height: 15 }}
		font={{ font_size: 12, bold: true, align: 'center', wrap: true }}
		zIndex={79}
	>
		Jer. 9:25, 1 Cor 7:19, Rom. 2:28, Col. 2:11
	</Fragment>

	<!-- Step 37: Arrow from circumcision -->
	<Fragment step={37} animate="wipe-up">
		<Arc from={{ x: 804, y: 328 }} to={{ x: 748, y: 230 }} curve={60} arrow stroke={{ width: 2, color: 'var(--color-highlight)' }} zIndex={shapeLayer} />
	</Fragment>

	<!-- Step 37 (with): Circumcision of the heart text -->
	<Fragment
		step={37}
		layout={{ x: 630, y: 320, width: 180, height: 22 }}
		fill="var(--bg-light)"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		font={{ font_size: 10, wrap: true, align: 'center' }}
		zIndex={shapeLayer}
	>
		Circumcision of the heart, by God
	</Fragment>

	<!-- Step 38: Baptism = Death box -->
	<Fragment
		step={38}
		drillTo="birthrights/1-john-5-7"
		layout={{ x: 650, y: 12, width: 294, height: 30 }}
		font={{ font_size: 15, bold: true, wrap: true, align: 'center' }}
		zIndex={80}
	>
		Baptism = Death, Burial & Resurrection 1 John 5:7, Rev. 20:6
	</Fragment>
	<!-- Step 39: Birth-process to receive the Holy Spirit -->
    <Fragment
        step={39}
		drillTo="birthrights/body-complete"
		autoDrill
        layout={{ x: 680, y: 47, width: 260, height: 20 }}
        font={{ font_size: 15, bold: true, wrap: true, align: 'center', v_align: 'middle' }}
        zIndex={linkLayer}
    >
        Birth-process is <u>always</u> the same!
    </Fragment>
	<!-- Step 39 (with): Arrow from box to John 3:3 area -->
	<Fragment step={39} animate="wipe-left">
		<Arrow from={{ x: 679, y: 58 }} to={{ x: 631, y: 66 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>
	<Fragment step={39} animate="wipe-left">
		<Arrow from={{ x: 678, y: 58 }} to={{ x: 548, y: 52 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={arrowLayer} />
	</Fragment>
	<Fragment step={39}>
		<Circle cx={678} cy={58} r={6} zIndex={5}  fill="var(--bg-level-3)" />
	</Fragment>
</Slide>
