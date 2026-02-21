<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 1: Physical/Spiritual - Genesis 1:1
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio, scaled from 1536x864)
	 * Scale factor: 0.625 (960/1536)
	 * 
	 * 73 animation steps covering the relationship between physical and spiritual,
	 * energy and matter, causes and effects.
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();

	const GL = { x: 0, w: 210 };
	const L = { x: 210, w: 270 };
	const R = { x: 480, w: 270 };
	const GR = { x: 750, w: 210 };
	const center = (col: { x: number; w: number }, fw: number) => col.x + (col.w - fw) / 2;
	const pageCenter = (fw: number) => (960 - fw) / 2;
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/02-Physical_Spiritual/Slide1.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: Genesis 1:1 -->
	<Fragment
		layout={{ x: center(GL, 161.7), y: 2.3, width: 161.7, height: 37.2 }}
		font={{ font_size: 24.2 }}
		zIndex={66}
	>
		Genesis 1:1
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (73 Steps) ========== -->

	<!-- Step 1: "In the beginning God created the HEAVENS and the EARTH..." -->
	<Fragment
		step={1}
		layout={{ x: center(GL, 166.1), y: 29, width: 166.1, height: 70 }}
		font={{ font_size: 15, align: 'left', v_align: 'top', wrap: true }}
		zIndex={48}
	>
		In the beginning God<br />created the HEAVENS<br />and the EARTH...
	</Fragment>

	<!-- Step 2: "Internal Interpretation" -->
	<Fragment
		step={2}
		layout={{ x: center(GL, 126.7), y: 95.4, width: 126.7, height: 50.8 }}
		font={{ font_size: 17.5, wrap: true }}
		zIndex={45}
	>
		Internal<br />Interpretation
	</Fragment>

	<!-- Step 3: "Heavens" + Blue rectangle + Lines + "Earth" + Gray rectangle (all with timing) -->
	<Fragment step={3} animate="wipe-down">
		<Rect x={L.x} y={0} width={L.w} height={540} fill="var(--bg-level-2)" zIndex={0} />
		<Rect x={R.x} y={0} width={R.w} height={540} fill="var(--bg-level-1)" zIndex={0} />
		<!-- Horizontal divider line -->
		<Line from={{ x: L.x, y: 55.4 }} to={{ x: R.x + R.w, y: 55.4 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={0} />
		<!-- Vertical divider line -->
		<Line from={{ x: R.x, y: 0 }} to={{ x: R.x, y: 540 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: center(L, 217.1), y: 6.9, width: 217.1, height: 40.8 }}
		font={{ font_size: 50, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Heavens
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: center(R, 161.1), y: 7.5, width: 161.1, height: 40.8 }}
		font={{ font_size: 50, bold: true }}
		zIndex={11}
	>
		Earth
	</Fragment>

	<!-- Step 4: Colossians 1:15-16 (hyperlink) + "All things..." -->
	<Fragment
		step={4}
		drillTo="physical-spiritual/colossians-1-15"
		layout={{ x: center(GR, 250), y: 60.3, width: 210, height: 30 }}
		font={{ font_size: 23.3, bold: true, align: 'left' }}
		fill="var(--bg-level-1)"
		zIndex={62}
	>
		Colossians 1:15-16
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: center(GR, 137.8), y: 38.5, width: 137.8, height: 25.4 }}
		font={{ font_size: 20, italic: true }}
		zIndex={74}
	>
		All things…
	</Fragment>

	<!-- Step 5: "Visible" -->
	<Fragment
		step={5}
		layout={{ x: center(R, 196.1), y: 55, width: 196.1, height: 36.1 }}
		font={{ font_size: 40 }}
		zIndex={13}
	>
		Visible
	</Fragment>

	<!-- Step 6: "Invisible" -->
	<Fragment
		step={6}
		layout={{ x: center(L, 210), y: 55, width: 210, height: 36.1 }}
		font={{ font_size: 40, color: 'var(--bg-level-3)' }}
		zIndex={14}
	>
		Invisible
	</Fragment>

	<!-- Step 7: 2 Corinthians 4:17 (hyperlink) -->
	<Fragment
		step={7}
		drillTo="physical-spiritual/2corinthians-4-17"
		layout={{ x: center(GR, 250), y: 96.4, width: 210, height: 30 }}
		font={{ font_size: 23.3, bold: true, align: 'left' }}
		fill="var(--bg-level-1)"
		zIndex={63}
	>
		2 Corinthians 4:17
	</Fragment>

	<!-- Step 8: "Seen" -->
	<Fragment
		step={8}
		layout={{ x: center(R, 160.9), y: 93.6, width: 160.9, height: 35.9 }}
		font={{ font_size: 40 }}
		zIndex={15}
	>
		Seen
	</Fragment>

	<!-- Step 9: "Temporal" -->
	<Fragment
		step={9}
		layout={{ x: center(R, 205.9), y: 129.8, width: 205.9, height: 42 }}
		font={{ font_size: 40 }}
		zIndex={17}
	>
		Temporal
	</Fragment>

	<!-- Step 10: "Unseen" -->
	<Fragment
		step={10}
		layout={{ x: center(L, 161.1), y: 93.6, width: 161.1, height: 35.9 }}
		font={{ font_size: 40, color: 'var(--bg-level-3)' }}
		zIndex={16}
	>
		Unseen
	</Fragment>

	<!-- Step 11: "Eternal" -->
	<Fragment
		step={11}
		layout={{ x: center(L, 159.3), y: 131.4, width: 159.3, height: 38.6 }}
		font={{ font_size: 40, color: 'var(--bg-level-3)' }}
		zIndex={18}
	>
		Eternal
	</Fragment>

	<!-- Step 12: Hebrews 11:1 (hyperlink) + "Evidence..." -->
	<Fragment
		step={12}
		drillTo="physical-spiritual/hebrews-11-1"
		layout={{ x: center(GR, 250), y: 134.2, width: 210, height: 30 }}
		font={{ font_size: 23.3, bold: true, align: 'center' }}
		fill="var(--bg-level-1)"
		zIndex={22}
	>
		Hebrews 11:1
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 769.7, y: 168, width: 129.3, height: 25.4 }}
		font={{ font_size: 20, italic: true }}
		zIndex={73}
	>
		Evidence…
	</Fragment>

	<!-- Step 13: Romans 1:20 (hyperlink) -->
	<Fragment
		step={13}
		drillTo="physical-spiritual/romans-1-20"
		layout={{ x: center(GL, 140), y: 144, width: 140, height: 30.8 }}
		font={{ font_size: 20, bold: true, align: 'left' }}
		zIndex={47}
	>
		Romans 1:20
	</Fragment>

	<Fragment
		step={14}
		layout={{ x: center(GL, 154.4), y: 168, width: 154.4, height: 65 }}
		font={{ font_size: 17.5, align: 'left', wrap: true }}
		zIndex={20}
	>
		What evidence for invisible qualities are <strong>clearly seen</strong>?
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: center(GR, 130.2), y: 201.8, width: 130.2, height: 60.4 }}
		font={{ font_size: 15, align: 'center', v_align: 'top', wrap: true }}
		zIndex={21}
	>
		Is it safe to put paper clip in a light socket?
	</Fragment>

    <Fragment
		step={15}
		layout={{ x: center(GR, 130.2), y: 260, width: 130.2, height: 60.4 }}
		font={{ font_size: 15, align: 'center', v_align: 'top', wrap: true, bold: true }}
		zIndex={21}
	>
		No. Why?
	</Fragment>

	<Fragment
		step={16}
		layout={{ x: center(R, 153.9), y: 263.9, width: 153.9, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={24}
	>
		Fan spins
	</Fragment>

	<Fragment step={16} animate="draw">
		<Line from={{ x: 547, y: 285 }} to={{ x: 453, y: 285 }} stroke={{ width: 3, dash: '5,5' }} zIndex={8} />
	</Fragment>

	<Fragment
		step={16.2}
		layout={{ x: center(L, 200), y: 260, width: 220, height: 31.3 }}
		font={{ font_size: 25, color: 'var(--bg-level-3)' }}
		zIndex={27}
	>
		Force of Electricity
	</Fragment>

	<Fragment
		step={18}
		layout={{ x: center(R, 142.8), y: 237.6, width: 142.8, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={23}
	>
		Trees sway
	</Fragment>

	<Fragment step={18} animate="draw">
		<Line from={{ x: 537, y: 258 }} to={{ x: 434, y: 258 }} stroke={{ width: 3, dash: '5,5' }} zIndex={7} />
	</Fragment>

	<Fragment
		step={19}
		layout={{ x: center(L, 182), y: 234.8, width: 182, height: 31.3 }}
		font={{ font_size: 25, color: 'var(--bg-level-3)' }}
		zIndex={26}
	>
		Force of Wind
	</Fragment>

	<Fragment
		step={20}
		layout={{ x: center(R, 133.1), y: 208.8, width: 133.1, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={25}
	>
		Things fall
	</Fragment>

	<Fragment step={20} animate="draw">
		<Line from={{ x: 536, y: 228 }} to={{ x: 442, y: 228 }} stroke={{ width: 3, dash: '5,5' }} zIndex={9} />
	</Fragment>

	<Fragment
		step={21}
		layout={{ x: center(L, 199.8), y: 206.1, width: 199.8, height: 31.3 }}
		font={{ font_size: 25, color: 'var(--bg-level-3)' }}
		zIndex={28}
	>
		Force of Gravity
	</Fragment>

	<Fragment step={22} animate="fade">
		<Rect x={center(L, 230) + 20} y={178} width={230} height={118.9} fill="var(--bg-light)" zIndex={6} />
	</Fragment>

	<Fragment step={22} animate="wipe">
		<Arrow from={{ x: 146, y: 261 }} to={{ x: 245, y: 240 }} stroke={{ width: 4 }} zIndex={32} />
	</Fragment>

	<Fragment
		step={22}
		layout={{ x: center(GL, 96.8), y: 245.6, width: 96.8, height: 45.8 }}
		font={{ font_size: 21.7, bold: true, wrap: true, align: 'center' }}
		zIndex={31}
	>
		Forms of what?
	</Fragment>

	<Fragment
		step={23}
		layout={{ x: center(L, 136.8), y: 177, width: 136.8, height: 36.1 }}
		font={{ font_size: 35, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={30}
	>
		Causes
	</Fragment>

	<Fragment
		step={24}
		layout={{ x: center(R, 144.5), y: 177, width: 144.5, height: 36.1 }}
		font={{ font_size: 35, bold: true }}
		zIndex={29}
	>
		Effects
	</Fragment>

	<Fragment step={24} animate="fade">
		<Rect x={center(R, 230) - 20} y={178} width={230} height={118.9} fill="var(--bg-light)" zIndex={5} />
	</Fragment>

	<Fragment
		step={25}
		layout={{ x: center(GR, 138.3), y: 273.9, width: 138.3, height: 75.8 }}
		font={{ font_size: 21.7, bold: true, wrap: true }}
		zIndex={33}
	>
		What is effected?
	</Fragment>

	<Fragment step={25} animate="wipe-left">
		<Arrow from={{ x: 780, y: 305 }} to={{ x: 694, y: 315 }} stroke={{ width: 4 }} zIndex={34} />
	</Fragment>

	<Fragment step={26} animate="fade">
		<Rect x={center(R, 230) - 20} y={295.4} width={250} height={127.7} fill="var(--bg-ghost)"  zIndex={1} />
	</Fragment>

	<Fragment
		step={26}
		layout={{ x: center(R, 161.1), y: 301.8, width: 161.1, height: 40 }}
		font={{ font_size: 44.2, bold: true }}
		zIndex={64}
	>
		Matter
	</Fragment>

	<!-- Step 27: "Energy" + white box -->
	<Fragment
		step={27}
		layout={{ x: center(L, 177.3), y: 294.4, width: 177.3, height: 53.9 }}
		font={{ font_size: 44.2, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={65}
	>
		Energy
	</Fragment>

	<Fragment step={27}>
		<Rect x={center(L, 230)} y={294.9} width={250} height={128.4} fill="var(--bg-ghost)" zIndex={4} />
	</Fragment>

	<!-- Step 28: First Law of Thermodynamics -->
	<Fragment
		step={28}
		layout={{ x: center(GL, 184.8), y: 299.4, width: 184.8, height: 86.9 }}
		font={{ font_size: 11, align: 'left', v_align: 'top', wrap: true }}
		zIndex={39}
	>
		<strong>First Law of Thermodynamics</strong><br />States the total energy of an isolated system is constant; energy can be transformed from one form to another but can be neither created nor destroyed.
	</Fragment>

	<!-- Step 29: "Einstein" box -->
	<Fragment
		step={29}
		layout={{ x: pageCenter(101.9), y: 308, width: 101.9, height: 30 }}
		font={{ font_size: 21.7, bold: true }}
		fill="var(--bg-ghost)"
		line={{ color: 'var(--stroke-level-0)', width: 1 }}
		zIndex={46}
	>
		Einstein
	</Fragment>

	<!-- Step 30: "=" overlay -->
	<Fragment
		step={30}
		layout={{ x: pageCenter(113.1), y: 297, width: 113.1, height: 47 }}
		font={{ font_size: 48.3, bold: true }}
		fill="var(--bg-ghost)"
		zIndex={61}
	>
		=
	</Fragment>

	<!-- Step 31: "E = m" equation -->
	<Fragment
		step={31}
		layout={{ x: 434.9, y: 341.6, width: 41.9, height: 45.6 }}
		font={{ font_size: 50, color: 'var(--bg-level-3)' }}
		zIndex={68}
	>
		E
	</Fragment>

	<Fragment
		step={31}
		layout={{ x: 466.4, y: 342.1, width: 29.2, height: 45.6 }}
		font={{ font_size: 39.2, bold: true}}
		fill="var(--bg-ghost)"
		zIndex={70}
	>
		=
	</Fragment>

	<Fragment
		step={31}
		layout={{ x: 489.6, y: 338.8, width: 48, height: 45.6 }}
		font={{ font_size: 50}}
		zIndex={69}
	>
		m
	</Fragment>

	<!-- Step 32: "What's missing?" -->
	<Fragment
		step={32}
		layout={{ x: center(GL, 133.8), y: 409.3, width: 133.8, height: 29.8 }}
		font={{ font_size: 16.7, bold: true }}
		zIndex={35}
	>
		What's missing?
	</Fragment>

	<!-- Step 33: Genesis 1:1-3 (hyperlink) -->
	<Fragment
		step={33}
		drillTo="physical-spiritual/genesis-1-1"
		layout={{ x: center(GL, 160.2), y: 437.5, width: 160.2, height: 30.8 }}
		font={{ font_size: 20, bold: true }}
		fill="var(--bg-ghost)"
		line={{ color: 'var(--stroke-level-0)', width: 1 }}
		zIndex={36}
	>
		Genesis 1:1-3
	</Fragment>

	<!-- Step 34: "Creation Equation" + diagonal line to Genesis -->
	<Fragment
		step={34}
		layout={{ x: center(L, 204.9), y: 348.3, width: 204.9, height: 36.3 }}
		font={{ font_size: 23.3, italic: true }}
		zIndex={67}
	>
		Creation Equation
	</Fragment>

	<Fragment step={34} animate="wipe">
		<Arrow from={{ x: 169, y: 447 }} to={{ x: 249, y: 379 }} stroke={{ width: 4 }} zIndex={72} />
	</Fragment>

	<!-- Step 34: "What gives matter stability?" + diagonal line -->
	<Fragment
		step={35}
		layout={{ x: center(GR, 147.1), y: 365.8, width: 147.1, height: 48 }}
		font={{ font_size: 17.5, wrap: true }}
		zIndex={37}
	>
		What gives matter stability?
	</Fragment>

	<Fragment step={35} animate="wipe-left">
		<Arrow from={{ x: 774, y: 379 }} to={{ x: 583, y: 367 }} stroke={{ width: 4 }} zIndex={38} />
	</Fragment>

	<!-- Step 35: "c²" -->
	<Fragment
		step={36}
		layout={{ x: center(R, 185), y: 340, width: 63, height: 45.6 }}
		font={{ font_size: 50, color: 'var(--bg-level-3)' }}
		zIndex={71}
	>
		c²
	</Fragment>

	<!-- Step 37: 1 Corinthians 15:40-45 (hyperlink) -->
	<Fragment
		step={37}
		drillTo="physical-spiritual/1corinthians-15-40"
		layout={{ x: center(GL, 140), y: 470.4, width: 140, height: 53.9 }}
		font={{ font_size: 20, bold: true, color: 'var(--bg-level-3)', wrap: true, align: 'center' }}
		fill="var(--bg-ghost)"
		line={{ color: 'var(--stroke-level-0)', width: 1 }}
		zIndex={40}
	>
		1 Corinthians 15:40-45
	</Fragment>

	<!-- Step 38: "perishable" -->
	<Fragment
		step={38}
		layout={{ x: center(R, 110.2), y: 420, width: 110.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={49}
	>
		perishable
	</Fragment>

	<!-- Step 38.1: "dishonor" (after 500ms) -->
	<Fragment
		step={38.1}
		layout={{ x: center(R, 96.9), y: 441.9, width: 96.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={51}
	>
		dishonor
	</Fragment>

	<!-- Step 38.2: "weakness" (after 1000ms) -->
	<Fragment
		step={38.2}
		layout={{ x: center(R, 105.1), y: 463.8, width: 105.1, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={53}
	>
		weakness
	</Fragment>

	<!-- Step 38.3: "physical body" (after 1500ms) -->
	<Fragment
		step={38.3}
		layout={{ x: center(R, 146.6), y: 485.6, width: 146.6, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={55}
	>
		physical body
	</Fragment>

	<!-- Step 38.4: "1st Adam" (after 2000ms) -->
	<Fragment
		step={38.4}
		layout={{ x: center(R, 180), y: 507.5, width: 100.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={57}
	>
		1st Adam
	</Fragment>

	<!-- Step 38.5: "- Earth" (after 2500ms) -->
	<Fragment
		step={38.5}
		layout={{ x: center(R, -20), y: 507.5, width: 75.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={59}
	>
		- Earth
	</Fragment>

	<!-- Step 39: "imperishable" -->
	<Fragment
		step={39}
		layout={{ x: center(L, 132.2), y: 420, width: 132.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={50}
	>
		imperishable
	</Fragment>

	<!-- Step 39.1: "glory" (after 500ms) -->
	<Fragment
		step={39.1}
		layout={{ x: center(L, 62.6), y: 441.9, width: 62.6, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={52}
	>
		glory
	</Fragment>

	<!-- Step 39.2: "power" (after 1000ms) -->
	<Fragment
		step={39.2}
		layout={{ x: center(L, 71.9), y: 463.8, width: 71.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={54}
	>
		power
	</Fragment>

	<!-- Step 39.3: "spiritual body" (after 1500ms) -->
	<Fragment
		step={39.3}
		layout={{ x: center(L, 139.3), y: 485.6, width: 139.3, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={56}
	>
		spiritual body
	</Fragment>

	<!-- Step 39.4: "2nd Adam" (after 2000ms) -->
	<Fragment
		step={39.4}
		layout={{ x: center(L, 200), y: 507.5, width: 107.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={58}
	>
		2nd Adam
	</Fragment>

	<!-- Step 39.5: "- Heaven" (after 2500ms) -->
	<Fragment
		step={39.5}
		layout={{ x: center(L, -20	), y: 507.5, width: 94.8, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={60}
	>
		- Heaven
	</Fragment>

	<!-- Step 40: "SPIRITUAL" with border -->
	<Fragment
		step={40}
		layout={{ x: center(L, 218), y: 386.3, width: 218, height: 35.9 }}
		font={{ font_size: 39.2, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={41}
	>
		SPIRITUAL
	</Fragment>

	<!-- Step 41: "PHYSICAL" -->
	<Fragment
		step={41}
		layout={{ x: center(R, 210.3), y: 381.8, width: 210.3, height: 44.9 }}
		font={{ font_size: 39.2, bold: true }}
		zIndex={42}
	>
		PHYSICAL
	</Fragment>

	<!-- Step 42: "=" between SPIRITUAL and PHYSICAL -->
	<Fragment
		step={42}
		fill="var(--bg-ghost)"
		layout={{ x: pageCenter(40), y: 387, width: 40, height: 36, padding: 0 }}
		font={{ font_size: 39.2, bold: true }}
		zIndex={43}
	>
		=
	</Fragment>

	<!-- Step 43: "Spiritual & Physical: Equal..." summary box -->
	<Fragment
		step={43}
		layout={{ x: center(GR, 210), y: 423, width: 196.1, height: 90 }}
		font={{ font_size: 17.5, bold: true, align: 'left', v_align: 'top', wrap: true }}
		fill="var(--bg-level-1)"
		zIndex={44}
	>
		Spiritual & Physical are equal, but in different forms, same as energy & matter
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components inside Fragment */
</style>
