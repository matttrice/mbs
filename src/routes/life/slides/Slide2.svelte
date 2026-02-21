<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 2: Mankind - Body, Spirit, Soul - Origins and Destinations
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 30 animation steps covering Origins/Destinations diagram
	 * Body (Earth→Earth), Spirit (God→God), Soul (God→Judgment)
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
	<ReferenceOverlay src="/export/04-Life/Slide2.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	<!-- Title: Mankind -->
	<Fragment
		layout={{ x: 325.5, y: 8.9, width: 303.3, height: 44.4 }}
		font={{ font_size: 59.2, bold: true }}
		zIndex={0}
	>
		Mankind
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (30 Steps) ========== -->

	<!-- Step 1: Horizontal line divider under headers -->
	<Fragment step={1} animate="wipe">
		<Line from={{ x: 81.1, y: 66.7 }} to={{ x: 879, y: 66.7 }} stroke={{ width: 4.2, color: 'var(--stroke-level-0)' }} zIndex={5} />
	</Fragment>

	<!-- Step 1.1: "Body" header -->
	<Fragment
		step={1.1}
		layout={{ x: 153.6, y: 60.2, width: 127.4, height: 61.4 }}
		font={{ font_size: 50, bold: true }}
		zIndex={6}
	>
		Body
	</Fragment>

	<!-- Step 1.2: "Spirit" header -->
	<Fragment
		step={1.2}
		layout={{ x: 413.9, y: 60.2, width: 130.3, height: 61.4 }}
		font={{ font_size: 50, align: 'center', color: 'var(--text-level-3)', bold: true }}
		zIndex={7}
	>
		Spirit
	</Fragment>

	<!-- Step 1.3: "Soul" header -->
	<Fragment
		step={1.3}
		layout={{ x: 683.3, y: 60.2, width: 112.5, height: 61.4 }}
		font={{ font_size: 50, align: 'center', color: 'var(--text-level-3)', bold: true }}
		zIndex={8}
	>
		Soul
	</Fragment>

	<!-- Step 2: "ORIGINS" label -->
	<Fragment
		step={2}
		layout={{ x: 54, y: 205, width: 185, height: 34.3 }}
		font={{ font_size: 26.7, v_align: 'middle', bold: true }}
		line={{ width: 0.6 }}
		zIndex={33}
	>
		ORIGINS
	</Fragment>

	<!-- Step 2 (after): Dashed divider line -->
	<Fragment step={2} animate="draw">
		<Line from={{ x: 85, y: 238.6 }} to={{ x: 877.2, y: 238.6 }} stroke={{ width: 7, color: 'var(--stroke-level-0)', dash: '10,5' }} zIndex={40} />
	</Fragment>

	<!-- Step 2 (with): Body column (gray) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={81.1} y={68} width={259} height={282} fill="var(--bg-level-1)" stroke={{ width: 0.6 }} zIndex={1} />
	</Fragment>

	<!-- Step 2 (with): Spirit/Soul column (blue) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={340} y={68} width={538.9} height={282} fill="var(--bg-level-2)" stroke={{ width: 0.6 }} zIndex={3} />
	</Fragment>

	<!-- Step 2 (with): "DESTINATIONS" label -->
	<Fragment
		step={2}
		layout={{ x: 90, y: 311, width: 185, height: 41 }}
		font={{ font_size: 26.7, v_align: 'middle', bold: true }}
		line={{ width: 0.6 }}
		zIndex={43}
	>
		DESTINATIONS
	</Fragment>

	<!-- Step 3: Genesis 3:19 (drill) -->
	<Fragment
		step={3}
		drillTo="life/genesis-3-19"
		layout={{ x: 126.3, y: 114.4, width: 182.1, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center', bold: true }}
		zIndex={9}
	>
		Genesis 3:19
	</Fragment>

	<!-- Step 4: "Earth" (origin) -->
	<Fragment
		step={4}
		layout={{ x: 148.6, y: 156.1, width: 137.4, height: 42.2 }}
		font={{ font_size: 50, v_align: 'middle', bold: true }}
		zIndex={12}
	>
		Earth
	</Fragment>

	<!-- Step 4.1: Arrow Earth→Earth -->
	<Fragment step={4.1} animate="wipe-down">
		<Arrow from={{ x: 217.3, y: 211.8 }} to={{ x: 217.3, y: 271.8 }} stroke={{ width: 8.3, color: 'var(--stroke-level-0)' }} zIndex={41} />
	</Fragment>

	<!-- Step 5: "Earth" (destination) -->
	<Fragment
		step={5}
		layout={{ x: 152.4, y: 253.1, width: 129.9, height: 61.4 }}
		font={{ font_size: 50, bold: true }}
		zIndex={13}
	>
		Earth
	</Fragment>

	<!-- Step 6: Ecclesiastes 12:7 (drill) -->
	<Fragment
		step={6}
		drillTo="life/ecclesiastes-12-7"
		layout={{ x: 359.6, y: 114.4, width: 238.9, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center', bold: true }}
		zIndex={10}
	>
		Ecclesiastes 12:7
	</Fragment>

	<!-- Step 7: "God" (Spirit origin) -->
	<Fragment
		step={7}
		layout={{ x: 423.6, y: 156.2, width: 111.1, height: 42.1 }}
		font={{ font_size: 50, v_align: 'middle', align: 'center', color: 'var(--bg-level-3)', bold: true }}
		zIndex={14}
	>
		God
	</Fragment>

	<!-- Step 7.1: Arrow God→God (Spirit) -->
	<Fragment step={7.1} animate="wipe-down">
		<Arrow from={{ x: 476.1, y: 211.8 }} to={{ x: 476.1, y: 271.8 }} stroke={{ width: 8.3, color: 'var(--bg-level-3)' }} zIndex={44} />
	</Fragment>

	<!-- Step 8: "God" (Spirit destination) -->
	<Fragment
		step={8}
		layout={{ x: 426.6, y: 253.1, width: 105.1, height: 61.4 }}
		font={{ font_size: 50, align: 'center', color: 'var(--bg-level-3)', bold: true }}
		zIndex={15}
	>
		God
	</Fragment>

	<!-- Step 9: Ezekiel 18:4 (drill) -->
	<Fragment
		step={9}
		drillTo="life/ezekiel-18-4"
		layout={{ x: 670.1, y: 114.4, width: 168.6, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center', bold: true }}
		zIndex={18}
	>
		Ezekiel 18:4
	</Fragment>

	<!-- Step 10: "God" (Soul origin) -->
	<Fragment
		step={10}
		layout={{ x: 681.4, y: 156.2, width: 111.1, height: 42.1 }}
		font={{ font_size: 50, v_align: 'middle', align: 'center', color: 'var(--bg-level-3)', bold: true }}
		zIndex={16}
	>
		God
	</Fragment>

	<!-- Step 11: Arrow God→Judgment (Soul) -->
	<Fragment step={11} animate="wipe-down">
		<Arrow from={{ x: 730.9, y: 211.8 }} to={{ x: 730.9, y: 271.8 }} stroke={{ width: 8.3, color: 'var(--bg-level-3)' }} zIndex={42} />
	</Fragment>

	<!-- Step 11.1: Hebrews 9:27 (drill) -->
	<Fragment
		step={11.1}
		drillTo="life/hebrews-9-27"
		layout={{ x: 658.4, y: 311.3, width: 189.6, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center', color: 'var(--text-level-0)', bold: true }}
		zIndex={11}
	>
		Hebrews 9:27
	</Fragment>

	<!-- Step 12: "Judgment" (Soul destination) -->
	<Fragment
		step={12}
		layout={{ x: 622.9, y: 253.1, width: 229.7, height: 61.4 }}
		font={{ font_size: 45, align: 'center', color: 'var(--text-level-3)', bold: true }}
		zIndex={17}
	>
		Judgment
	</Fragment>

	<!-- Step 13: Matthew 16:26 (drill) -->
	<Fragment
		step={13}
		drillTo="life/matthew-16-26"
		layout={{ x: 58.3, y: 437.6, width: 256.4, height: 48.3 }}
		font={{ font_size: 30.8, align: 'center', bold: true }}
		zIndex={25}
	>
		Matthew 16:26
	</Fragment>

	<!-- Step 14: "Rank of Importance?" box -->
	<Fragment
		step={14}
		layout={{ x: 78.3, y: 355.8, width: 205, height: 85 }}
		font={{ font_size: 30.8, color: 'var(--bg-level-3)', bold: true, wrap: true }}
		fill="var(--bg-ghost)"
		line={{ width: 0.8, color: 'var(--stroke-level-0)' }}
		zIndex={32}
	>
		Rank of Importance?
	</Fragment>

	<!-- Step 15: "#1" -->
	<Fragment
		step={15}
		layout={{ x: 447, y: 363.3, width: 50.5, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={19}
	>
		#1
	</Fragment>

	<!-- Step 16: "Soul" (#1 rank) -->
	<Fragment
		step={16}
		layout={{ x: 504.4, y: 363.3, width: 83.3, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={20}
	>
		Soul
	</Fragment>

	<!-- Step 17: "#2" -->
	<Fragment
		step={17}
		layout={{ x: 450.3, y: 399.8, width: 50.5, height: 45.4 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={21}
	>
		#2
	</Fragment>

	<!-- Step 18: "Spirit" (#2 rank) -->
	<Fragment
		step={18}
		layout={{ x: 504.4, y: 399.9, width: 95.4, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={22}
	>
		Spirit
	</Fragment>

	<!-- Step 19: "#3" -->
	<Fragment
		step={19}
		layout={{ x: 450.3, y: 435.6, width: 50.5, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={23}
	>
		#3
	</Fragment>

	<!-- Step 20: "Body" (#3 rank) -->
	<Fragment
		step={20}
		layout={{ x: 505, y: 435, width: 94.2, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={24}
	>
		Body
	</Fragment>

	<!-- Step 21: "Dominant" label -->
	<Fragment
		step={21}
		layout={{ x: 653, y: 370, width: 210.6, height: 38.6 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={31}
	>
		Dominant
	</Fragment>

	<!-- Step 21.1: Arrow to Dominant -->
	<Fragment step={21.1} animate="wipe">
		<Arrow from={{ x: 594, y: 392 }} to={{ x: 670, y: 392 }} stroke={{ width: 5 }} zIndex={26} />
	</Fragment>

	<!-- Step 22: "Submissive" (Spirit) -->
	<Fragment
		step={22}
		layout={{ x: 678.6, y: 400, width: 188.9, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={30}
	>
		Submissive
	</Fragment>

	<!-- Step 22.1: Arrow to Submissive (Spirit) -->
	<Fragment step={22.1} animate="wipe">
		<Arrow from={{ x: 606.4, y: 426.7 }} to={{ x: 670, y: 426.7 }} stroke={{ width: 5 }} zIndex={27} />
	</Fragment>

	<!-- Step 23: "Submissive" (Body) -->
	<Fragment
		step={23}
		layout={{ x: 678.6, y: 435.6, width: 188.9, height: 45.3 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={29}
	>
		Submissive
	</Fragment>

	<!-- Step 23.1: Arrow to Submissive (Body) -->
	<Fragment step={23.1} animate="wipe">
		<Arrow from={{ x: 604, y: 463 }} to={{ x: 670, y: 463 }} stroke={{ width: 5 }} zIndex={2} />
	</Fragment>

	<!-- Step 24: Luke 11:24-26 (drill) -->
	<Fragment
		step={24}
		drillTo="life/luke-11-24"
		layout={{ x: 452.1, y: 485.1, width: 220.2, height: 45.3 }}
		font={{ font_size: 30.8, bold: true }}
		zIndex={34}
	>
		Luke 11:24-26
	</Fragment>

	<!-- Step 25: "House/Spirits/Person" box (drill) -->
	<Fragment
		step={25}
		drillTo="life/house-for-spirits"
		layout={{ x: 301.9, y: 355.8, width: 143.3, height: 173.3 }}
		font={{ font_size: 36.7, bold: true, align: 'center', wrap: true }}
		fill="var(--bg-ghost)"
		line={{ width: 0.8, color: 'var(--stroke-level-0)' }}
		zIndex={36}
	>
		House<br/>Spirits<br/>Person<br/><span style="font-size: 18px; position: relative; top: -15px;">("the man")</span>
	</Fragment>

	<!-- Step 26: Red arrow House → Body -->
	<Fragment step={26} animate="wipe">
		<Arrow from={{ x: 428, y: 389 }} to={{ x: 505, y: 450 }} stroke={{ width: 5.8, color: '#FF0000' }} zIndex={37} />
	</Fragment>

	<!-- Step 27: Red arrow Spirits → Spirit -->
	<Fragment step={27} animate="wipe">
		<Arrow from={{ x: 430, y: 422 }} to={{ x: 504, y: 422 }} stroke={{ width: 5.8, color: '#FF0000' }} zIndex={38} />
	</Fragment>

	<!-- Step 28: Red arrow Person → Soul -->
	<Fragment step={28} animate="wipe">
		<Arrow from={{ x: 435, y: 463 }} to={{ x: 510, y: 390 }} stroke={{ width: 5.8, color: '#FF0000' }} zIndex={39} />
	</Fragment>

	<!-- Step 29: Red arrow Soul → Judgment -->
	<Fragment step={29} animate="wipe">
		<Arrow from={{ x: 540, y: 375 }} to={{ x: 623, y: 300 }} stroke={{ width: 5.8, color: '#FF0000' }} zIndex={35} />
	</Fragment>

	<!-- Step 30: Question about characteristics -->
	<Fragment
		step={30}
		layout={{ x: 610.9, y: 10.8, width: 297.4, height: 50.8 }}
		font={{ font_size: 15, wrap: true, bold: true }}
		line={{ width: 0.8 }}
		zIndex={28}
	>
		Choice is a characteristic of the Soul. What are the other characteristics of the Soul, Spirit, and Body?
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components inside Fragment */
</style>
