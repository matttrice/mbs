<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect, Ellipse } from '$lib/components/svg';

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
		layout={{ x: 69, y: 2, width: 190, height: 32 }}
		font={{ font_size: 20, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={3}
	>
		Genesis 25:27-34
	</Fragment>

	<!-- Title: Birthrights -->
	<Fragment
		layout={{ x: 368, y: -1, width: 242, height: 44 }}
		font={{ bold: true, align: 'center', v_align: 'middle', font_name: 'Arial' }}
		zIndex={22}
	>
		Birthrights
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (105 Steps) ========== -->

	<!-- Step 1: Hebrews 12:16-17 -->
	<Fragment
		step={1}
		drillTo="birthrights/hebrews-12-16"
		layout={{ x: 72, y: 29, width: 189, height: 23 }}
		font={{ font_size: 20, bold: true, align: 'center' }}
		zIndex={51}
	>
		Hebrews 12:16-17
	</Fragment>

	<!-- Step 2: "godless and immoral" question -->
	<Fragment
		step={2}
		layout={{ x: 247, y: 26, width: 169, height: 24 }}
		font={{ font_size: 11.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={4}
	>
		"godless and immoral" what was so bad about Esau?
	</Fragment>

	<!-- Step 3: Romans 8:5-8, Genesis 25:23 -->
	<Fragment
		step={3}
		drillTo="birthrights/romans-8-5"
		layout={{ x: 69, y: 53, width: 305, height: 24 }}
		font={{ font_size: 20, bold: true, align: 'center', wrap: true }}
		zIndex={52}
	>
		Romans 8:5-8, Genesis 25:23
	</Fragment>

	<!-- Step 4: John 3:3-7 -->
	<Fragment
		step={4}
		drillTo="birthrights/john-3-3"
		layout={{ x: 408, y: 41, width: 156, height: 23 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={92}
	>
		John 3:3-7
	</Fragment>

	<!-- Step 5: Horizontal line across -->
	<Fragment step={5} animate="wipe">
		<Line from={{ x: 60, y: 80 }} to={{ x: 900, y: 80 }} stroke={{ width: 2, color: '#000000' }} zIndex={23} />
	</Fragment>

	<!-- Step 5 (with): Rectangle 86 - Physical column (gray background) -->
	<Fragment step={5} animate="wipe-down">
		<Rect x={59} y={80} width={426} height={460} fill="var(--color-level1)" zIndex={2} />
	</Fragment>

	<!-- Step 5 (with): Physical text -->
	<Fragment
		step={5}
		layout={{ x: 157, y: 90, width: 187, height: 48 }}
		font={{ font_size: 39.2, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={14}
	>
		Physical
	</Fragment>

	<!-- Step 5 (with): "Flesh gives birth to flesh" -->
	<Fragment
		step={5}
		drillTo="birthrights/romans-10-17"
		layout={{ x: 166, y: 82, width: 172, height: 21 }}
		font={{ font_size: 13.3, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={87}
	>
		"Flesh gives birth to flesh"
	</Fragment>

	<!-- Step 6: Spiritual text -->
	<Fragment
		step={6}
		layout={{ x: 614, y: 96, width: 182, height: 42 }}
		font={{ font_size: 39.2, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={15}
	>
		Spiritual
	</Fragment>

	<!-- Step 6 (with): "Spirit gives birth to spirit" -->
	<Fragment
		step={6}
		drillTo="birthrights/romans-10-17"
		layout={{ x: 619, y: 82, width: 172, height: 21 }}
		font={{ font_size: 13.3, italic: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={88}
	>
		"Spirit gives birth to spirit"
	</Fragment>

	<!-- Step 6 (with): Blue background rectangle for spiritual column -->
	<Fragment step={6} animate="wipe-down">
		<Rect x={486} y={80} width={415} height={460} fill="var(--color-level2)" zIndex={0} />
	</Fragment>

	<!-- Step 7: Husband -->
	<Fragment
		step={7}
		layout={{ x: 342, y: 105, width: 129, height: 31 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={5}
	>
		Husband
	</Fragment>

	<!-- Step 8: Wife -->
	<Fragment
		step={8}
		layout={{ x: 375, y: 143, width: 64, height: 36 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={6}
	>
		Wife
	</Fragment>

	<!-- Step 8 (with): Arrow connector from Husband to Wife -->
	<Fragment step={8} animate="fade">
		<Arrow from={{ x: 352, y: 161 }} to={{ x: 352, y: 184 }} stroke={{ width: 8, color: '#000000' }} zIndex={44} />
	</Fragment>

	<!-- Step 8 (with): Physical oval (womb) -->
	<Fragment step={8}>
		<Ellipse cx={247.5} cy={243} rx={93.5} ry={105} stroke={{ width: 8, color: '#000000' }} zIndex={61} />
	</Fragment>

	<!-- Step 9: Seed -->
	<Fragment
		step={9}
		layout={{ x: 364, y: 185, width: 82, height: 31 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={7}
	>
		Seed
	</Fragment>

	<!-- Step 10: Arrow from Seed to physical oval -->
	<Fragment step={10} animate="fade">
		<Arrow from={{ x: 306, y: 130 }} to={{ x: 306, y: 221 }} stroke={{ width: 8, color: '#000000' }} zIndex={67} />
	</Fragment>

	<!-- Step 10 (with): Blue oval (spiritual seed representation) -->
	<Fragment step={10}>
		<Ellipse cx={247} cy={239.5} rx={25} ry={25.5} fill="var(--color-level2)" stroke={{ width: 1, color: '#000000' }} zIndex={62} />
	</Fragment>

	<!-- Step 10 (with): Another blue oval (duplicate from JSON) -->
	<Fragment step={10}>
		<Ellipse cx={247} cy={239.5} rx={25} ry={25.5} fill="var(--color-level2)" stroke={{ width: 1, color: '#000000' }} zIndex={43} />
	</Fragment>

	<!-- Step 10 (with): Inception text -->
	<Fragment
		step={10}
		layout={{ x: 346, y: 237, width: 131, height: 29 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={8}
	>
		Inception
	</Fragment>

	<!-- Step 11: Fed by Woman -->
	<Fragment
		step={11}
		layout={{ x: 351, y: 278, width: 110, height: 47 }}
		font={{ font_size: 15, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={24}
	>
		Fed by Woman
	</Fragment>

	<!-- Step 11 (with): Gestation -->
	<Fragment
		step={11}
		layout={{ x: 338, y: 329, width: 136, height: 29 }}
		font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={25}
	>
		Gestation
	</Fragment>

	<!-- Step 11 (with): Water text in womb -->
	<Fragment
		step={11}
		layout={{ x: 203, y: 270, width: 101, height: 40 }}
		font={{ font_size: 36.7, bold: true, color: '#F4F4F4', align: 'center', v_align: 'middle' }}
		zIndex={60}
	>
		Water
	</Fragment>

	<!-- Step 11 (with): Water line image -->
	<Fragment
		step={11}
		layout={{ x: 155, y: 236, width: 190, height: 123 }}
		zIndex={59}
	>
		<img src="/export/11-Birthrights/image1.png" alt="BirthWaterLine" class="slide-image" />
	</Fragment>

	<!-- Step 11 (with): Blue horizontal bar (birth line) -->
	<Fragment step={11}>
		<Rect x={53} y={371} width={433} height={9} fill="#0000FF" zIndex={54} />
	</Fragment>

	<!-- Step 11.2 (after 1000ms): Baby - Birthrights -->
	<Fragment
		step={11.2}
		layout={{ x: 149, y: 385, width: 259, height: 26 }}
		font={{ font_size: 26.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={50}
	>
		Baby - Birthrights
	</Fragment>

	<!-- Step 11.2 (with): Down arrow for birth -->
	<Fragment step={11.2}>
		<Rect x={229} y={335} width={32} height={51} fill="#000000" zIndex={56} />
	</Fragment>

	<!-- Step 12: How do you know which family this baby belongs to? -->
	<Fragment
		step={12}
		layout={{ x: 72, y: 92, width: 92, height: 112 }}
		font={{ font_size: 17.5, align: 'center' }}
		zIndex={16}
	>
		How do you knowwhich family this baby belongs to?
	</Fragment>

	<!-- Step 13: Seed,Body text -->
	<Fragment
		step={13}
		layout={{ x: 65, y: 197, width: 91, height: 79 }}
		font={{ font_size: 33.3, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={26}
	>
		Seed,Body
	</Fragment>

	<!-- Step 13 (with): Arrow to Genetics -->
	<Fragment step={13} animate="fade">
		<Arrow from={{ x: 112, y: 273 }} to={{ x: 112, y: 336 }} stroke={{ width: 8, color: '#000000' }} zIndex={18} />
	</Fragment>

	<!-- Step 13 (with): Genetics text -->
	<Fragment
		step={13}
		layout={{ x: 66, y: 327, width: 113, height: 36 }}
		font={{ font_size: 26.7, bold: true, align: 'center', font_name: 'Arial' }}
		zIndex={55}
	>
		Genetics
	</Fragment>

	<!-- Step 14: Christ -->
	<Fragment
		step={14}
		drillTo="birthrights/ephesians-5-22"
		layout={{ x: 506, y: 108, width: 96, height: 33 }}
		font={{ font_size: 30, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={9}
	>
		Christ
	</Fragment>

	<!-- Step 14 (with): Eph. 5:22 reference -->
	<Fragment
		step={14}
		drillTo="birthrights/ephesians-5-22"
		layout={{ x: 501, y: 134, width: 66, height: 13 }}
		font={{ font_size: 10, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={89}
	>
		Eph. 5:22
	</Fragment>

	<!-- Step 14 (with): Blue arrow connector -->
	<Fragment step={14} animate="fade">
		<Arrow from={{ x: 475, y: 123 }} to={{ x: 500, y: 123 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={74} />
	</Fragment>

	<!-- Step 15: Arrow connector for Church -->
	<Fragment step={15} animate="fade">
		<Arrow from={{ x: 449, y: 161 }} to={{ x: 498, y: 161 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={75} />
	</Fragment>

	<!-- Step 15.1 (after): Church -->
	<Fragment
		step={15.1}
		drillTo="birthrights/ephesians-5-29"
		layout={{ x: 497, y: 147, width: 106, height: 29 }}
		font={{ font_size: 30, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={10}
	>
		Church
	</Fragment>

	<!-- Step 15.1 (with): Eph. 5:29, 2 Cor. 11: 2 reference -->
	<Fragment
		step={15.1}
		drillTo="birthrights/ephesians-5-29"
		layout={{ x: 500, y: 170, width: 108, height: 14 }}
		font={{ font_size: 10, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={81}
	>
		Eph. 5:29, 2 Cor. 11: 2
	</Fragment>

	<!-- Step 15.1 (with): Arrow from Church area to oval -->
	<Fragment step={15.1} animate="fade">
		<Arrow from={{ x: 615, y: 161 }} to={{ x: 615, y: 178 }} stroke={{ width: 8, color: '#0000FF' }} zIndex={45} />
	</Fragment>

	<!-- Step 15.1 (with): Spiritual oval (womb) -->
	<Fragment step={15.1}>
		<Ellipse cx={703.5} cy={244} rx={93.5} ry={105} stroke={{ width: 8, color: '#000000' }} zIndex={95} />
	</Fragment>

	<!-- Step 16: Word -->
	<Fragment
		step={16}
		drillTo="birthrights/luke-8-11"
		layout={{ x: 512, y: 182, width: 77, height: 36 }}
		font={{ font_size: 30, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={12}
	>
		Word
	</Fragment>

	<!-- Step 16 (with): Luke 8:11 reference -->
	<Fragment
		step={16}
		drillTo="birthrights/luke-8-11"
		layout={{ x: 494, y: 211, width: 108, height: 14 }}
		font={{ font_size: 10, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={82}
	>
		Luke 8:11
	</Fragment>

	<!-- Step 16 (with): Arrow to Word -->
	<Fragment step={16} animate="fade">
		<Arrow from={{ x: 449, y: 200 }} to={{ x: 498, y: 200 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={76} />
	</Fragment>

	<!-- Step 17: Arrow for Faith from Hearing -->
	<Fragment step={17} animate="fade">
		<Arrow from={{ x: 478, y: 255 }} to={{ x: 500, y: 255 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={77} />
	</Fragment>

	<!-- Step 17 (with): Faith from text -->
	<Fragment
		step={17}
		layout={{ x: 503, y: 228, width: 93, height: 24 }}
		font={{ font_size: 15, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={64}
	>
		Faith from
	</Fragment>

	<!-- Step 17 (with): Hearing -->
	<Fragment
		step={17}
		drillTo="birthrights/romans-10-17"
		layout={{ x: 500, y: 238, width: 100, height: 32 }}
		font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={84}
	>
		Hearing
	</Fragment>

	<!-- Step 17 (with): Romans 10:7 reference -->
	<Fragment
		step={17}
		drillTo="birthrights/romans-10-17"
		layout={{ x: 491, y: 262, width: 108, height: 14 }}
		font={{ font_size: 10, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={83}
	>
		Romans 10:7
	</Fragment>

	<!-- Step 18: Arrow to spiritual seed -->
	<Fragment step={18} animate="fade">
		<Arrow from={{ x: 642, y: 124 }} to={{ x: 642, y: 206 }} stroke={{ width: 8, color: '#0000FF' }} zIndex={98} />
	</Fragment>

	<!-- Step 18 (with): Heart shape (red) - first instance -->
	<Fragment step={18}>
		<Rect x={674} y={205} width={59} height={53} fill="#FD0013" zIndex={97} />
	</Fragment>

	<!-- Step 18 (with): Heart shape (red) - second instance -->
	<Fragment step={18}>
		<Rect x={674} y={204} width={58} height={53} fill="#FD0013" zIndex={63} />
	</Fragment>

	<!-- Step 19: Fed by Church -->
	<Fragment
		step={19}
		layout={{ x: 502, y: 280, width: 94, height: 40 }}
		font={{ font_size: 15, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={13}
	>
		Fed by Church
	</Fragment>

	<!-- Step 19 (with): Grows -->
	<Fragment
		step={19}
		drillTo="birthrights/hebrews-11-1"
		layout={{ x: 505, y: 333, width: 94, height: 29 }}
		font={{ font_size: 30, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={66}
	>
		Grows
	</Fragment>

	<!-- Step 19 (with): Faith box -->
	<Fragment
		step={19}
		layout={{ x: 520, y: 322, width: 60, height: 24 }}
		font={{ font_size: 15, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={65}
	>
		Faith
	</Fragment>

	<!-- Step 19 (with): Hebrews 11:1 reference -->
	<Fragment
		step={19}
		drillTo="birthrights/hebrews-11-1"
		layout={{ x: 495, y: 353, width: 108, height: 14 }}
		font={{ font_size: 10, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={85}
	>
		Hebrews 11:1
	</Fragment>

	<!-- Step 20: Baptized -->
	<Fragment
		step={20}
		drillTo="birthrights/acts-2-38"
		layout={{ x: 607, y: 267, width: 194, height: 40 }}
		font={{ font_size: 36.7, bold: true, color: '#F4F4F4', align: 'center', v_align: 'middle' }}
		zIndex={96}
	>
		Baptized
	</Fragment>

	<!-- Step 20 (with): Acts 2:38, Gal. 2:24, 1Cor. 12:13 reference -->
	<Fragment
		step={20}
		drillTo="birthrights/acts-2-38"
		layout={{ x: 650, y: 303, width: 120, height: 36 }}
		font={{ font_size: 10, color: '#FFFFFF', align: 'center', v_align: 'middle' }}
		zIndex={100}
	>
		Acts 2:38, Gal. 2:24, 1Cor. 12:13
	</Fragment>

	<!-- Step 20 (with): Water line image for spiritual -->
	<Fragment
		step={20}
		layout={{ x: 607, y: 237, width: 190, height: 120 }}
		zIndex={94}
	>
		<img src="/export/11-Birthrights/image1.png" alt="BirthWaterLine" class="slide-image" />
	</Fragment>

	<!-- Step 21: Down arrow for spiritual birth -->
	<Fragment step={21}>
		<Rect x={690} y={335} width={32} height={51} fill="#000000" zIndex={93} />
	</Fragment>

	<!-- Step 21.2 (after 1000ms): Blue horizontal bar (spiritual birth line) -->
	<Fragment step={21.2}>
		<Rect x={486} y={371} width={424} height={9} fill="#0000FF" zIndex={53} />
	</Fragment>

	<!-- Step 21.3 (after): Baby - Birthrights (spiritual side) -->
	<Fragment
		step={21.3}
		layout={{ x: 655, y: 380, width: 261, height: 36 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={71}
	>
		Baby - Birthrights
	</Fragment>

	<!-- Step 22: How do you know which family (spiritual side) -->
	<Fragment
		step={22}
		layout={{ x: 794, y: 91, width: 88, height: 113 }}
		font={{ font_size: 17.5, align: 'center' }}
		zIndex={17}
	>
		How do you knowwhich family this baby belongs to?
	</Fragment>

	<!-- Step 23: Seed,Body (spiritual side) -->
	<Fragment
		step={23}
		layout={{ x: 799, y: 197, width: 87, height: 93 }}
		font={{ font_size: 33.3, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={11}
	>
		Seed,Body
	</Fragment>

	<!-- Step 23 (with): Arrow to spiritual genetics -->
	<Fragment step={23} animate="fade">
		<Arrow from={{ x: 835, y: 281 }} to={{ x: 835, y: 336 }} stroke={{ width: 8, color: '#0000FF' }} zIndex={19} />
	</Fragment>

	<!-- Step 23 (with): Genetics (spiritual) -->
	<Fragment
		step={23}
		layout={{ x: 782, y: 327, width: 113, height: 34 }}
		font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'center', font_name: 'Arial' }}
		zIndex={57}
	>
		Genetics
	</Fragment>

	<!-- Step 24: Yellow highlight oval -->
	<Fragment step={24}>
		<Ellipse cx={840} cy={259} rx={51} ry={61} stroke={{ width: 6, color: '#FFFF00' }} zIndex={102} />
	</Fragment>

	<!-- Step 24 (with): Yellow arrow line -->
	<Fragment step={24} animate="fade">
		<Arrow from={{ x: 688, y: 203 }} to={{ x: 688, y: 229 }} stroke={{ width: 6, color: '#FFFF00' }} zIndex={99} />
	</Fragment>

	<!-- Step 25: Yellow arrow line (vertical) -->
	<Fragment step={25} animate="fade">
		<Arrow from={{ x: 558, y: 173 }} to={{ x: 558, y: 196 }} stroke={{ width: 6, color: '#FFFF00' }} zIndex={86} />
	</Fragment>

	<!-- Step 25.1 (after): Another yellow arrow -->
	<Fragment step={25.1} animate="fade">
		<Arrow from={{ x: 557, y: 133 }} to={{ x: 557, y: 153 }} stroke={{ width: 6, color: '#FFFF00' }} zIndex={106} />
	</Fragment>

	<!-- Step 26: Life (true seed) -->
	<Fragment
		step={26}
		layout={{ x: 548, y: 381, width: 130, height: 29 }}
		font={{ font_size: 26.7, bold: true, italic: true, v_align: 'middle' }}
		zIndex={58}
	>
		Life (true seed)
	</Fragment>

	<!-- Step 26 (with): Death -->
	<Fragment
		step={26}
		layout={{ x: 605, y: 345, width: 94, height: 28 }}
		font={{ font_size: 26.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
		zIndex={1}
	>
		Death
	</Fragment>

	<!-- Step 27: 1Corinthians 15:45-49 -->
	<Fragment
		step={27}
		drillTo="birthrights/1-corinthians-15-49"
		layout={{ x: 349, y: 65, width: 274, height: 33 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000' }}
		font={{ font_size: 23.3, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={90}
	>
		1Corinthians 15:45-49
	</Fragment>

	<!-- Step 28: 1st Adam box -->
	<Fragment
		step={28}
		layout={{ x: 191, y: 144, width: 117, height: 39 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000' }}
		font={{ font_size: 26.7, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={68}
	>
		1st Adam
	</Fragment>

	<!-- Step 28 (with): 2nd Adam box -->
	<Fragment
		step={28}
		layout={{ x: 638, y: 144, width: 130, height: 38 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000' }}
		font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'center', v_align: 'middle' }}
		zIndex={101}
	>
		2nd Adam
	</Fragment>

	<!-- Step 29: Red rectangle (Satan Deceives section) -->
	<Fragment step={29} animate="fade">
		<Rect x={60} y={415} width={669} height={125} fill="#FF0000" zIndex={27} />
	</Fragment>

	<!-- Step 29 (with): Satan Deceives text -->
	<Fragment
		step={29}
		layout={{ x: 70, y: 419, width: 222, height: 27 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={28}
	>
		Satan Deceives
	</Fragment>

	<!-- Step 29 (with): Not monogamous text -->
	<Fragment
		step={29}
		layout={{ x: 279, y: 421, width: 145, height: 29 }}
		font={{ font_size: 15, align: 'center', v_align: 'middle' }}
		zIndex={37}
	>
		Not monogamous –Many false seeds.
	</Fragment>

	<!-- Step 29 (with): Seed/ Doctrine (first) -->
	<Fragment
		step={29}
		layout={{ x: 422, y: 414, width: 126, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={38}
	>
		Seed/ Doctrine
	</Fragment>

	<!-- Step 29 (with): Seed/ Doctrine (second) -->
	<Fragment
		step={29}
		layout={{ x: 574, y: 414, width: 126, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={39}
	>
		Seed/ Doctrine
	</Fragment>

	<!-- Step 29 (with): Heart shapes for false seeds -->
	<Fragment step={29}>
		<Rect x={434} y={451} width={42} height={31} fill="#000000" zIndex={46} />
	</Fragment>

	<Fragment step={29}>
		<Rect x={549} y={451} width={42} height={31} fill="#000000" zIndex={47} />
	</Fragment>

	<Fragment step={29}>
		<Rect x={654} y={451} width={42} height={31} fill="#000000" zIndex={48} />
	</Fragment>

	<!-- Step 29 (with): 2 Corinthians 11:2 -->
	<Fragment
		step={29}
		drillTo="birthrights/satans-seed"
		layout={{ x: 83, y: 449, width: 192, height: 23 }}
		font={{ font_size: 20, bold: true, v_align: 'middle' }}
		zIndex={42}
	>
		2 Corinthians 11:2
	</Fragment>

	<!-- Step 30: Satan masquerades text -->
	<Fragment
		step={30}
		layout={{ x: 94, y: 466, width: 287, height: 31 }}
		font={{ font_size: 11.7, wrap: true, v_align: 'middle' }}
		zIndex={72}
	>
		Satan masquerades as an angel of light. His servants masquerade as servants of righteousness.
	</Fragment>

	<!-- Step 30 (with): Galatians 1:6 quote -->
	<Fragment
		step={30}
		layout={{ x: 80, y: 489, width: 325, height: 42 }}
		font={{ font_size: 16.7, bold: true, wrap: true, v_align: 'middle' }}
		zIndex={73}
	>
		Galatians 1:6    "a different gospel— 7which is really no gospel at all."
	</Fragment>

	<!-- Step 30 (with): "A different Jesus" -->
	<Fragment
		step={30}
		layout={{ x: 233, y: 497, width: 138, height: 21 }}
		font={{ font_size: 13.3, bold: true, wrap: true, v_align: 'middle' }}
		zIndex={78}
	>
		"A different Jesus"
	</Fragment>

	<!-- Step 31: First Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={455} cy={485} rx={44} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={31} />
	</Fragment>

	<!-- Step 31 (with): Harlots text (first) -->
	<Fragment
		step={31}
		layout={{ x: 426, y: 476, width: 65, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={32}
	>
		Harlots
	</Fragment>

	<!-- Step 31 (with): Second Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={569} cy={485} rx={44} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={29} />
	</Fragment>

	<!-- Step 31 (with): Harlots text (second) -->
	<Fragment
		step={31}
		layout={{ x: 540, y: 476, width: 64, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={34}
	>
		Harlots
	</Fragment>

	<!-- Step 31 (with): Third Harlots oval -->
	<Fragment step={31}>
		<Ellipse cx={673.5} cy={485} rx={43.5} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={30} />
	</Fragment>

	<!-- Step 31 (with): Harlots text (third) -->
	<Fragment
		step={31}
		layout={{ x: 643, y: 476, width: 63, height: 22 }}
		font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
		zIndex={33}
	>
		Harlots
	</Fragment>

	<!-- Step 31 (with): Arrow lines to harlots -->
	<Fragment step={31} animate="fade">
		<Arrow from={{ x: 486, y: 433 }} to={{ x: 486, y: 455 }} stroke={{ width: 3, color: '#000000' }} zIndex={35} />
	</Fragment>

	<Fragment step={31} animate="fade">
		<Arrow from={{ x: 528, y: 434 }} to={{ x: 528, y: 458 }} stroke={{ width: 3, color: '#000000' }} zIndex={36} />
	</Fragment>

	<Fragment step={31} animate="fade">
		<Arrow from={{ x: 604, y: 436 }} to={{ x: 604, y: 455 }} stroke={{ width: 3, color: '#000000' }} zIndex={40} />
	</Fragment>

	<Fragment step={31} animate="fade">
		<Arrow from={{ x: 640, y: 438 }} to={{ x: 640, y: 454 }} stroke={{ width: 3, color: '#000000' }} zIndex={41} />
	</Fragment>

	<!-- Step 32: Illegitimate Children text -->
	<Fragment
		step={32}
		layout={{ x: 398, y: 500, width: 327, height: 27 }}
		line={{ color: '#000000' }}
		font={{ font_size: 15, bold: true, v_align: 'middle' }}
		zIndex={49}
	>
		Illegitimate Children – born of false doctrine
	</Fragment>

	<!-- Step 33: What if you didn't know? -->
	<Fragment
		step={33}
		layout={{ x: 743, y: 516, width: 146, height: 25 }}
		font={{ font_size: 13.3, italic: true, align: 'center', v_align: 'top' }}
		zIndex={69}
	>
		What if you didn't know?
	</Fragment>

	<!-- Step 33.1 (after): Acts 19:1-5 -->
	<Fragment
		step={33.1}
		drillTo="birthrights/acts-19-1"
		layout={{ x: 762, y: 502, width: 102, height: 20 }}
		font={{ font_size: 16.7, bold: true, align: 'center' }}
		zIndex={70}
	>
		Acts 19:1-5
	</Fragment>

	<!-- Step 34: John 1:11-12 -->
	<Fragment
		step={34}
		drillTo="birthrights/john-1-11"
		layout={{ x: 732, y: 464, width: 165, height: 27 }}
		font={{ font_size: 21.7, bold: true, align: 'center' }}
		zIndex={20}
	>
		John 1:11-12
	</Fragment>

	<!-- Step 35: "right to be called sons of God" -->
	<Fragment
		step={35}
		layout={{ x: 726, y: 489, width: 175, height: 15 }}
		font={{ font_size: 11.7, italic: true, align: 'center' }}
		zIndex={21}
	>
		"right to be called sons of God"
	</Fragment>

	<!-- Step 36: Circumcision box -->
	<Fragment
		step={36}
		drillTo="birthrights/circumcision"
		layout={{ x: 736, y: 409, width: 149, height: 57 }}
		font={{ font_size: 23.3, bold: true, align: 'center' }}
		zIndex={79}
	>
		CircumcisionJer. 9:25, 1 Cor 7:19, Rom. 2:28, Col. 2:11
	</Fragment>

	<!-- Step 37: Arrow from heart to circumcision -->
	<Fragment step={37} animate="fade">
		<Arrow from={{ x: 741, y: 260 }} to={{ x: 741, y: 411 }} stroke={{ width: 8, color: '#000000' }} zIndex={104} />
	</Fragment>

	<!-- Step 37 (with): Circumcision of the heart text -->
	<Fragment
		step={37}
		layout={{ x: 620, y: 243, width: 169, height: 22 }}
		fill="var(--color-bg-light)"
		font={{ font_size: 10, wrap: true, align: 'center' }}
		zIndex={105}
	>
		Circumcision of the heart, by God
	</Fragment>

	<!-- Step 38: Baptism = Death box -->
	<Fragment
		step={38}
		drillTo="birthrights/1-john-5-7"
		layout={{ x: 595, y: 6, width: 294, height: 30 }}
		font={{ font_size: 15, bold: true, wrap: true, align: 'center' }}
		zIndex={80}
	>
		Baptism = Death, Burial & Resurrection1John 5:7, Rev. 20:6
	</Fragment>

	<!-- Step 39: Birth-process to receive the Holy Spirit -->
	<Fragment
		step={39}
		drillTo="birthrights/formation-of-the-body"
		layout={{ x: 635, y: 41, width: 260, height: 44 }}
		line={{ color: '#000000' }}
		font={{ font_size: 15, bold: true, wrap: true, align: 'center', v_align: 'middle' }}
		zIndex={91}
	>
		Birth-process to receive the Holy Spirit is always the same!
	</Fragment>

	<!-- Step 39 (with): Arrow from box to John 3:3 area -->
	<Fragment step={39} animate="fade">
		<Arrow from={{ x: 634, y: 65 }} to={{ x: 634, y: 84 }} stroke={{ width: 8, color: '#0000FF' }} zIndex={103} />
	</Fragment>
</Slide>
