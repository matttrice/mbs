<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import FragmentArrow from '$lib/components/FragmentArrow.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

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
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/02-Physical_Spiritual/Slide1.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: Genesis 1:1 -->
	<Fragment
		layout={{ x: 13.1, y: 2.3, width: 161.7, height: 37.2 }}
		font={{ font_size: 24.2 }}
		zIndex={66}
	>
		Genesis 1:1
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (73 Steps) ========== -->

	<!-- Step 1: "In the beginning God created the HEAVENS and the EARTH..." -->
	<Fragment
		step={1}
		layout={{ x: 20.3, y: 24.6, width: 166.1, height: 70 }}
		font={{ font_size: 15, alignment: 'left' }}
		zIndex={48}
	>
		<span class="wrap-text">In the beginning God<br />created the HEAVENS<br />and the EARTH...</span>
	</Fragment>

	<!-- Step 2: "Internal Interpretation" -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 95.4, width: 126.7, height: 50.8 }}
		font={{ font_size: 17.5, color: '#000000' }}
		zIndex={45}
	>
		<span class="wrap-text">Internal<br />Interpretation</span>
	</Fragment>

	<!-- Step 3: "Heavens" + Blue rectangle + Lines + "Earth" + Gray rectangle (all with timing) -->
	<Fragment
		step={3}
		layout={{ x: 239.5, y: 6.9, width: 217.1, height: 40.8 }}
		font={{ font_size: 40, bold: true, color: '#0000FF' }}
		zIndex={10}
	>
		Heavens
	</Fragment>

	<!-- Blue column (Heavens) - appears with step 3 -->
	<Fragment
		step={3}
		layout={{ x: 192.7, y: 0, width: 288, height: 540 }}
		fill="var(--color-level2)"
		zIndex={2}
	>
		<span></span>
	</Fragment>

	<!-- Horizontal line under Heavens/Earth -->
	<Fragment step={3} zIndex={12}>
		<div class="horizontal-line" style="left: 192.4px; top: 53.9px; width: 558px; height: 3px;"></div>
	</Fragment>

	<!-- Vertical line dividing Heavens/Earth -->
	<Fragment step={3} zIndex={3}>
		<div class="vertical-line" style="left: 480px; top: 0; width: 3px; height: 540px;"></div>
	</Fragment>

	<!-- "Earth" text -->
	<Fragment
		step={3}
		layout={{ x: 520.8, y: 7.5, width: 161.1, height: 40.8 }}
		font={{ font_size: 40, bold: true }}
		zIndex={11}
	>
		Earth
	</Fragment>

	<!-- Gray column (Earth) -->
	<Fragment
		step={3}
		layout={{ x: 480, y: 0, width: 270, height: 540 }}
		fill="var(--color-level1)"
		zIndex={0}
	>
		<span></span>
	</Fragment>

	<!-- Step 4: Colossians 1:15-16 (hyperlink) + "All things..." -->
	<Fragment
		step={4}
		drillTo="physical-spiritual/colossians-1-15"
		layout={{ x: 693.8, y: 63.3, width: 247.2, height: 36.1 }}
		font={{ font_size: 23.3, bold: true, alignment: 'left' }}
		fill="var(--color-level1)"
		zIndex={62}
	>
		Colossians 1:15-16
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 773.8, y: 42.5, width: 137.8, height: 25.4 }}
		font={{ font_size: 20, italic: true }}
		zIndex={74}
	>
		All things…
	</Fragment>

	<!-- Step 5: "Visible" -->
	<Fragment
		step={5}
		layout={{ x: 500.4, y: 55, width: 196.1, height: 36.1 }}
		font={{ font_size: 40 }}
		zIndex={13}
	>
		Visible
	</Fragment>

	<!-- Step 6: "Invisible" -->
	<Fragment
		step={6}
		layout={{ x: 240.4, y: 55, width: 210, height: 36.1 }}
		font={{ font_size: 40, color: '#0000FF' }}
		zIndex={14}
	>
		Invisible
	</Fragment>

	<!-- Step 7: 2 Corinthians 4:17 (hyperlink) -->
	<Fragment
		step={7}
		drillTo="physical-spiritual/2corinthians-4-17"
		layout={{ x: 693.8, y: 96.4, width: 247.2, height: 40.6 }}
		font={{ font_size: 23.3, bold: true, alignment: 'left' }}
		fill="var(--color-level1)"
		zIndex={63}
	>
		2 Corinthians 4:17
	</Fragment>

	<!-- Step 8: "Seen" -->
	<Fragment
		step={8}
		layout={{ x: 520.4, y: 93.6, width: 160.9, height: 35.9 }}
		font={{ font_size: 40 }}
		zIndex={15}
	>
		Seen
	</Fragment>

	<!-- Step 9: "Temporal" -->
	<Fragment
		step={9}
		layout={{ x: 497.9, y: 129.8, width: 205.9, height: 42 }}
		font={{ font_size: 40 }}
		zIndex={17}
	>
		Temporal
	</Fragment>

	<!-- Step 10: "Unseen" -->
	<Fragment
		step={10}
		layout={{ x: 264.9, y: 93.6, width: 161.1, height: 35.9 }}
		font={{ font_size: 40, color: '#0000FF' }}
		zIndex={16}
	>
		Unseen
	</Fragment>

	<!-- Step 11: "Eternal" -->
	<Fragment
		step={11}
		layout={{ x: 265.8, y: 131.4, width: 159.3, height: 38.6 }}
		font={{ font_size: 40, color: '#0000FF' }}
		zIndex={18}
	>
		Eternal
	</Fragment>

	<!-- Step 12: Hebrews 11:1 (hyperlink) + "Evidence..." -->
	<Fragment
		step={12}
		drillTo="physical-spiritual/hebrews-11-1"
		layout={{ x: 695.6, y: 134.2, width: 245.1, height: 35.1 }}
		font={{ font_size: 23.3, bold: true, alignment: 'left' }}
		fill="var(--color-level2)"
		zIndex={22}
	>
		Hebrews 11:1
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 769.7, y: 172.9, width: 129.3, height: 25.4 }}
		font={{ font_size: 20, italic: true }}
		zIndex={73}
	>
		Evidence…
	</Fragment>

	<!-- Step 13: Romans 1:20 (hyperlink) -->
	<Fragment
		step={13}
		drillTo="physical-spiritual/romans-1-20"
		layout={{ x: 33.3, y: 154.3, width: 140, height: 30.8 }}
		font={{ font_size: 20, bold: true, alignment: 'left' }}
		zIndex={47}
	>
		Romans 1:20
	</Fragment>

	<!-- Step 14: "What evidence for invisible qualities—clearly seen?" -->
	<Fragment
		step={14}
		layout={{ x: 31.1, y: 179.2, width: 154.4, height: 58.9 }}
		font={{ font_size: 17.5, alignment: 'left' }}
		zIndex={20}
	>
		<span class="wrap-text">What evidence for<br />invisible qualities—clearly seen?</span>
	</Fragment>

	<!-- Step 15: "Is it safe to put a paper clip in a light socket?" -->
	<Fragment
		step={15}
		layout={{ x: 766, y: 201.8, width: 130.2, height: 60.4 }}
		font={{ font_size: 15, alignment: 'left' }}
		zIndex={21}
	>
		<span class="wrap-text">Is it safe to put<br />a paper clip in a<br />light socket?</span>
	</Fragment>

	<!-- Step 16: "Fan spins" -->
	<Fragment
		step={16}
		layout={{ x: 530.6, y: 263.9, width: 153.9, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={24}
	>
		Fan spins
	</Fragment>

	<!-- Step 17: Line from Fan spins + "Force of Electricity" -->
	<FragmentArrow 
		step={17}
		path={{ start: { x: 547, y: 285 }, end: { x: 453, y: 285 } }}
		line={{ width: 3 }}
		arrowhead={false}
		zIndex={8}
	/>

	<Fragment
		step={17}
		layout={{ x: 228.8, y: 260, width: 235.9, height: 31.3 }}
		font={{ font_size: 25, color: '#0000FF' }}
		zIndex={27}
	>
		Force of Electricity
	</Fragment>

	<!-- Step 18: "Trees sway" -->
	<Fragment
		step={18}
		layout={{ x: 536.1, y: 237.6, width: 142.8, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={23}
	>
		Trees sway
	</Fragment>

	<!-- Step 19: Line + "Force of Wind" -->
	<FragmentArrow 
		step={19}
		path={{ start: { x: 537, y: 258 }, end: { x: 434, y: 258 } }}
		line={{ width: 3 }}
		arrowhead={false}
		zIndex={7}
	/>

	<Fragment
		step={19}
		layout={{ x: 255.8, y: 234.8, width: 182, height: 31.3 }}
		font={{ font_size: 25, color: '#0000FF' }}
		zIndex={26}
	>
		Force of Wind
	</Fragment>

	<!-- Step 20: "Things fall" -->
	<Fragment
		step={20}
		layout={{ x: 540.9, y: 208.8, width: 133.1, height: 31.3 }}
		font={{ font_size: 25 }}
		zIndex={25}
	>
		Things fall
	</Fragment>

	<!-- Step 21: Line + "Force of Gravity" -->
	<FragmentArrow 
		step={21}
		path={{ start: { x: 536, y: 228 }, end: { x: 442, y: 228 } }}
		line={{ width: 3 }}
		arrowhead={false}
		zIndex={9}
	/>

	<Fragment
		step={21}
		layout={{ x: 246.8, y: 206.1, width: 199.8, height: 31.3 }}
		font={{ font_size: 25, color: '#0000FF' }}
		zIndex={28}
	>
		Force of Gravity
	</Fragment>

	<!-- Step 22: "Causes" + Causes box -->
	<Fragment
		step={22}
		layout={{ x: 287.2, y: 177, width: 136.8, height: 36.1 }}
		font={{ font_size: 35, bold: true, color: '#0000FF' }}
		zIndex={30}
	>
		Causes
	</Fragment>

	<Fragment
		step={22}
		layout={{ x: 199.3, y: 178, width: 280, height: 118.9 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 1 }}
		zIndex={6}
	>
		<span></span>
	</Fragment>

	<!-- Step 23: "Effects" + Effects box -->
	<Fragment
		step={23}
		layout={{ x: 535.3, y: 177, width: 144.5, height: 36.1 }}
		font={{ font_size: 35, bold: true }}
		zIndex={29}
	>
		Effects
	</Fragment>

	<Fragment
		step={23}
		layout={{ x: 478.3, y: 178, width: 261.4, height: 118.9 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 1 }}
		zIndex={5}
	>
		<span></span>
	</Fragment>

	<!-- Step 24: Diagonal line + "What is effected?" -->
	<Fragment step={24} zIndex={34}>
		<div class="connector-line angled-down" style="left: 725px; top: 251.2px; width: 70.8px; height: 40.7px;"></div>
	</Fragment>

	<Fragment
		step={24}
		layout={{ x: 760.7, y: 273.9, width: 138.3, height: 75.8 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={33}
	>
		<span class="wrap-text">What is effected?</span>
	</Fragment>

	<!-- Step 25: "Matter" + white box -->
	<Fragment
		step={25}
		layout={{ x: 533.6, y: 301.8, width: 161.1, height: 40 }}
		font={{ font_size: 44.2, bold: true }}
		zIndex={64}
	>
		Matter
	</Fragment>

	<Fragment
		step={25}
		layout={{ x: 481.1, y: 295.4, width: 258.6, height: 127.7 }}
		fill="#FFFFFF"
		zIndex={1}
	>
		<span></span>
	</Fragment>

	<!-- Step 26: Diagonal line + "Forms of what?" -->
	<Fragment step={26} zIndex={32}>
		<div class="connector-line angled-down" style="left: 153.3px; top: 252px; width: 67.2px; height: 25.3px;"></div>
	</Fragment>

	<Fragment
		step={26}
		layout={{ x: 71.3, y: 245.6, width: 96.8, height: 45.8 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={31}
	>
		<span class="wrap-text">Forms of<br />what?</span>
	</Fragment>

	<!-- Step 27: "Energy" + white box -->
	<Fragment
		step={27}
		layout={{ x: 252.5, y: 294.4, width: 177.3, height: 53.9 }}
		font={{ font_size: 44.2, bold: true, color: '#0000FF' }}
		zIndex={65}
	>
		Energy
	</Fragment>

	<Fragment
		step={27}
		layout={{ x: 199.3, y: 294.9, width: 283.6, height: 128.4 }}
		fill="#FFFFFF"
		zIndex={4}
	>
		<span></span>
	</Fragment>

	<!-- Step 28: First Law of Thermodynamics -->
	<Fragment
		step={28}
		layout={{ x: 10.9, y: 299.4, width: 184.8, height: 86.9 }}
		font={{ font_size: 11.7, bold: true, color: '#000000', alignment: 'left' }}
		zIndex={39}
	>
		<span class="wrap-text"><strong>First Law of Thermodynamics</strong><br />States the total energy of an isolated system is constant; energy can be transformed from one form to another but can be neither created nor destroyed.</span>
	</Fragment>

	<!-- Step 29: "Einstein" box -->
	<Fragment
		step={29}
		layout={{ x: 429.1, y: 308, width: 101.9, height: 30 }}
		font={{ font_size: 21.7, bold: true }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 1 }}
		zIndex={46}
	>
		Einstein
	</Fragment>

	<!-- Step 30: "=" overlay -->
	<Fragment
		step={30}
		layout={{ x: 424.4, y: 304.4, width: 113.1, height: 41.4 }}
		font={{ font_size: 48.3, bold: true }}
		fill="#FFFFFF"
		zIndex={61}
	>
		=
	</Fragment>

	<!-- Step 31: "E = m" equation -->
	<Fragment
		step={31}
		layout={{ x: 434.9, y: 341.6, width: 41.9, height: 45.6 }}
		font={{ font_size: 50, color: '#0000FF' }}
		zIndex={68}
	>
		E
	</Fragment>

	<Fragment
		step={31}
		layout={{ x: 466.4, y: 342.1, width: 29.2, height: 45.6 }}
		font={{ font_size: 39.2 }}
		zIndex={70}
	>
		=
	</Fragment>

	<Fragment
		step={31}
		layout={{ x: 489.6, y: 338.8, width: 48, height: 45.6 }}
		font={{ font_size: 50, color: '#000000' }}
		zIndex={69}
	>
		m
	</Fragment>

	<!-- Step 32: "What's missing?" -->
	<Fragment
		step={32}
		layout={{ x: 36.4, y: 409.3, width: 133.8, height: 29.8 }}
		font={{ font_size: 16.7, bold: true }}
		zIndex={35}
	>
		What's missing?
	</Fragment>

	<!-- Step 33: Genesis 1:1-3 (hyperlink) -->
	<Fragment
		step={33}
		drillTo="physical-spiritual/genesis-1-1"
		layout={{ x: 23.2, y: 437.5, width: 160.2, height: 30.8 }}
		font={{ font_size: 20, bold: true }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 1 }}
		zIndex={36}
	>
		Genesis 1:1-3
	</Fragment>

	<!-- Step 34: "What gives matter stability?" + diagonal line -->
	<Fragment
		step={34}
		layout={{ x: 760.4, y: 365.8, width: 147.1, height: 48 }}
		font={{ font_size: 17.5 }}
		zIndex={37}
	>
		<span class="wrap-text">What gives matter stability?</span>
	</Fragment>

	<Fragment step={34} zIndex={38}>
		<div class="connector-line angled-down" style="left: 583.1px; top: 361px; width: 170.7px; height: 18.3px;"></div>
	</Fragment>

	<!-- Step 35: "c²" -->
	<Fragment
		step={35}
		layout={{ x: 525.6, y: 338.4, width: 63, height: 45.6 }}
		font={{ font_size: 50, color: '#0000FF' }}
		zIndex={71}
	>
		c²
	</Fragment>

	<!-- Step 36: "Creation Equation" + diagonal line to Genesis -->
	<Fragment
		step={36}
		layout={{ x: 228.8, y: 348.3, width: 204.9, height: 36.3 }}
		font={{ font_size: 23.3, italic: true }}
		zIndex={67}
	>
		Creation Equation
	</Fragment>

	<Fragment step={36} zIndex={72}>
		<div class="connector-line angled-down" style="left: 168.5px; top: 373.3px; width: 65.1px; height: 74.1px;"></div>
	</Fragment>

	<!-- Step 37: 1 Corinthians 15:40-45 (hyperlink) -->
	<Fragment
		step={37}
		drillTo="physical-spiritual/1corinthians-15-40"
		layout={{ x: 33.3, y: 470.4, width: 140, height: 53.9 }}
		font={{ font_size: 20, bold: true, color: '#0000FF' }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 1 }}
		zIndex={40}
	>
		<span class="wrap-text">1Corinthians 15:40-45</span>
	</Fragment>

	<!-- Step 38: "perishable" -->
	<Fragment
		step={38}
		layout={{ x: 540.5, y: 420, width: 110.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={49}
	>
		perishable
	</Fragment>

	<!-- Step 38.1: "dishonor" (after 500ms) -->
	<Fragment
		step={38.1}
		layout={{ x: 547.2, y: 441.9, width: 96.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={51}
	>
		dishonor
	</Fragment>

	<!-- Step 38.2: "weakness" (after 1000ms) -->
	<Fragment
		step={38.2}
		layout={{ x: 543, y: 463.8, width: 105.1, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={53}
	>
		weakness
	</Fragment>

	<!-- Step 38.3: "physical body" (after 1500ms) -->
	<Fragment
		step={38.3}
		layout={{ x: 522.4, y: 485.6, width: 146.6, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={55}
	>
		physical body
	</Fragment>

	<!-- Step 38.4: "1st Adam" (after 2000ms) -->
	<Fragment
		step={38.4}
		layout={{ x: 508, y: 507.5, width: 100.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={57}
	>
		1st Adam
	</Fragment>

	<!-- Step 38.5: "- Earth" (after 2500ms) -->
	<Fragment
		step={38.5}
		layout={{ x: 614.1, y: 507.5, width: 75.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={59}
	>
		- Earth
	</Fragment>

	<!-- Step 39: "imperishable" -->
	<Fragment
		step={39}
		layout={{ x: 266.4, y: 420, width: 132.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={50}
	>
		imperishable
	</Fragment>

	<!-- Step 39.1: "glory" (after 500ms) -->
	<Fragment
		step={39.1}
		layout={{ x: 301.4, y: 441.9, width: 62.6, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={52}
	>
		glory
	</Fragment>

	<!-- Step 39.2: "power" (after 1000ms) -->
	<Fragment
		step={39.2}
		layout={{ x: 296.7, y: 463.8, width: 71.9, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={54}
	>
		power
	</Fragment>

	<!-- Step 39.3: "spiritual body" (after 1500ms) -->
	<Fragment
		step={39.3}
		layout={{ x: 263, y: 485.6, width: 139.3, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={56}
	>
		spiritual body
	</Fragment>

	<!-- Step 39.4: "2nd Adam" (after 2000ms) -->
	<Fragment
		step={39.4}
		layout={{ x: 242, y: 507.5, width: 107.2, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={58}
	>
		2nd Adam
	</Fragment>

	<!-- Step 39.5: "- Heaven" (after 2500ms) -->
	<Fragment
		step={39.5}
		layout={{ x: 353.9, y: 507.5, width: 94.8, height: 26.4 }}
		font={{ font_size: 21.7, bold: true, color: '#0000FF' }}
		zIndex={60}
	>
		- Heaven
	</Fragment>

	<!-- Step 40: "SPIRITUAL" with border -->
	<Fragment
		step={40}
		layout={{ x: 235, y: 386.3, width: 218, height: 35.9 }}
		font={{ font_size: 39.2, bold: true, color: '#0000FF' }}
		line={{ color: '#000000', width: 1 }}
		zIndex={41}
	>
		SPIRITUAL
	</Fragment>

	<!-- Step 41: "PHYSICAL" -->
	<Fragment
		step={41}
		layout={{ x: 500.8, y: 381.8, width: 210.3, height: 44.9 }}
		font={{ font_size: 39.2, bold: true }}
		zIndex={42}
	>
		PHYSICAL
	</Fragment>

	<!-- Step 42: "=" between SPIRITUAL and PHYSICAL -->
	<Fragment
		step={42}
		layout={{ x: 462.9, y: 389.8, width: 36.1, height: 28.9 }}
		font={{ font_size: 39.2, bold: true }}
		zIndex={43}
	>
		=
	</Fragment>

	<!-- Step 43: "Spiritual & Physical: Equal..." summary box -->
	<Fragment
		step={43}
		layout={{ x: 715.6, y: 431.6, width: 196.1, height: 96.1 }}
		font={{ font_size: 17.5, bold: true, alignment: 'left' }}
		fill="var(--color-level1)"
		zIndex={44}
	>
		<span class="wrap-text">Spiritual & Physical:<br />Equal, but in different<br />forms, same as energy<br />& matter</span>
	</Fragment>
</Slide>

<style>
	.horizontal-line {
		position: absolute;
		background-color: #000000;
	}

	.vertical-line {
		position: absolute;
		background-color: #000000;
	}

	.connector-line.angled-down {
		position: absolute;
		background: linear-gradient(
			to bottom right,
			transparent calc(50% - 2px),
			#0000FF calc(50% - 2px),
			#0000FF calc(50% + 2px),
			transparent calc(50% + 2px)
		);
	}
</style>
