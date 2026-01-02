<script lang="ts">

	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 1: Law - "Moral Law vs Commandment Law"
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 28 animation steps covering Moral Law and Commandment Law concepts
	 * Conscience as judge, timeline from Adam to Moses Law
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/05-Law/Slide1.png" />

	<!-- ===== ANIMATION SEQUENCE (28 Steps) ===== -->

	<!-- Step 1: Romans 2:12-16 (drill) -->
	<Fragment
		layout={{ x: 107.6, y: 4.4, width: 126.1, height: 53.2 }}
		font={{ font_size: 50 , bold: true }}
		zIndex={20}
	>
		Law
	</Fragment>
	
	<Fragment
		step={1}
		drillTo="law/romans-2-12"
		layout={{ x: 115.9, y: 78.8, width: 201.9, height: 25 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle' }}
		zIndex={30}
	>
		Romans 2:12-16
	</Fragment>

	<!-- Step 2: Moral Law Rectangle (gray box) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={74.1} y={69.4} width={285.4} height={319.4} fill="var(--color-level1)" stroke={{ width: 2.3, color: 'var(--color-stroke-dark)' }} zIndex={2} />
	</Fragment>

	<!-- Step 2 (with): "Moral" label -->
	<Fragment
		step={2}
		layout={{ x: 149.4, y: 90.9, width: 134.9, height: 61.4 }}
		font={{ font_size: 48, align: 'center', bold: true }}
		zIndex={3}
	>
		Moral
	</Fragment>

	<!-- Step 2.1: "Ability to know good and evil." -->
	<Fragment
		step={2}
		layout={{ x: 104.1, y: 256.6, width: 225.5, height: 26.1 }}
		font={{ font_size: 16.7, align: 'center' }}
		zIndex={4}
	>
		Ability to know good and evil.
	</Fragment>

	<!-- Step 3: "What judges under Moral Law?" -->
	<Fragment
		step={3}
		layout={{ x: 94.9, y: 280.9, width: 243.9, height: 26.1 }}
		font={{ font_size: 16.7, align: 'center' }}
		zIndex={5}
	>
		What judges under Moral Law?
	</Fragment>

	<!-- Step 4: "Conscience" -->
	<Fragment
		step={4}
		layout={{ x: 125.5, y: 138.4, width: 182.7, height: 35.1 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle', italic: true }}
		zIndex={28}
	>
		Conscience
	</Fragment>

	<!-- Step 5: 1 Timothy 4 / Ephesians 4 / Isaiah 5 (drill) -->
	<Fragment
		step={5}
		drillTo="law/1timothy-4-ephesians-4-isaiah-5"
		layout={{ x: 106.1, y: 174.8, width: 221.6, height: 81.4 }}
		font={{ font_size: 23.3, align: 'center', v_align: 'middle' }}
		zIndex={6}
	>
		1 Timothy 4:1-4<br/>Ephesians 4:17-19<br/>Isaiah 5:20
	</Fragment>

	<!-- Step 6: "Do you have to know the Bible..." -->
	<Fragment
		step={6}
		layout={{ x: 87.3, y: 302.5, width: 259.1, height: 49.2 }}
		font={{ font_size: 18.3, align: 'center', wrap: true }}
		zIndex={7}
	>
		Do you have to know the Bible to define good and evil?
	</Fragment>

	<!-- Step 7: Romans 5:12-14 (drill) -->
	<Fragment
		step={7}
		drillTo="law/romans-5-12"
		layout={{ x: 105.6, y: 350.9, width: 222.4, height: 40.2 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={8}
	>
		Romans 5:12-14
	</Fragment>

	<!-- Step 8: Timeline group (all appear together) -->
	<!-- Text Box 31: "Sin existed before Law..." -->
	<Fragment
		step={8}
		layout={{ x: 80, y: 416.3, width: 150, height: 92.1 }}
		font={{ font_size: 16.7, wrap: true }}
		zIndex={22}
	>
		Sin existed before Law, even over those who did not break a commandment like Adam.
	</Fragment>

	<!-- Step 8: "Adam" box -->
	<Fragment
		step={8}
		layout={{ x: 223.8, y: 445.4, width: 120, height: 56.4 }}
		font={{ font_size: 40, v_align: 'middle', bold: true }}
		fill="var(--color-level1)"
		zIndex={25}
	>
		Adam
	</Fragment>

	<!-- Step 8: "Moral Law" box on timeline -->
	<Fragment
		step={8}
		layout={{ x: 368, y: 417, width: 212.2, height: 85 }}
		font={{ font_size: 40, align: 'center', v_align: 'bottom', bold: true }}
		fill="var(--color-level1)"
		zIndex={24}
	>
		Moral Law
	</Fragment>

	<!-- Step 8: "Moses Law" box (orange) -->
	<Fragment
		step={8}
		layout={{ x: 613.1, y: 417, width: 143.1, height: 100 }}
		font={{ font_size: 40, align: 'center', v_align: 'middle', bold: true }}
		fill="var(--color-bg-cmd-law)"
		zIndex={26}
	>
		Moses<br/>Law
	</Fragment>

	<!-- Step 8: "Yet death reigned due to violations of" -->
	<Fragment
		step={8}
		layout={{ x: 340, y: 425, width: 274.4, height: 35 }}
		font={{ font_size: 17, align: 'center', v_align: 'bottom', bold: true }}
		zIndex={27}
	>
		Death reigned <br/> due to violations of:
	</Fragment>

	<!-- Step 8: Timeline arrow -->
	<Fragment step={8} animate="wipe">
		<Arrow from={{ x: 333.9, y: 473 }} to={{ x: 900, y: 473 }} stroke={{ width: 13.3 }} zIndex={23} />
	</Fragment>

	<!-- Step 9: Genesis 2:16-17 (drill) -->
	<Fragment
		step={9}
		drillTo="law/genesis-2-16"
		layout={{ x: 617.4, y: 355.8, width: 216.1, height: 30.4 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle' }}
		zIndex={29}
	>
		Genesis 2:16-17
	</Fragment>

	<!-- Step 9 (with): Commandment Law Rectangle (orange box) -->
	<Fragment step={9} animate="wipe-down">
		<Rect x={567.5} y={67.2} width={307.9} height={321.1} fill="var(--color-bg-cmd-law)" stroke={{ width: 2.3, color: 'var(--color-stroke-dark)' }} zIndex={1} />
	</Fragment>

	<!-- Step 10: "Command" label -->
	<Fragment
		step={10}
		layout={{ x: 604.5, y: 79.1, width: 233.9, height: 61.4 }}
		font={{ font_size: 48 , bold: true }}
		zIndex={12}
	>
		Command
	</Fragment>

	<!-- Step 10 (with): Romans 5:20 / Galatians 3:19 (drill) -->
	<Fragment
		step={10}
		drillTo="law/romans-5-galatians-3"
		layout={{ x: 633.7, y: 156.3, width: 175.8, height: 64.5 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={13}
	>
		Romans 5:20<br/>Galatians 3:19
	</Fragment>

	<!-- Step 11: "Expanded Law due to weak flesh." -->
	<Fragment
		step={11}
		layout={{ x: 558.4, y: 67.2, width: 334.2, height: 29.2 }}
		font={{ font_size: 16.7, align: 'center', italic: true }}
		zIndex={11}
	>
		Expanded Law due to weak flesh.
	</Fragment>

	<!-- Step 12: "Examples:" -->
	<Fragment
		step={12}
		layout={{ x: 583.1, y: 218.9, width: 121.9, height: 32.2 }}
		font={{ font_size: 20, italic: true }}
		zIndex={14}
	>
		Examples:
	</Fragment>

	<!-- Step 12 (with): "Social Laws (Leviticus)" -->
	<Fragment
		step={12}
		layout={{ x: 593.4, y: 243.2, width: 232.6, height: 32.2 }}
		font={{ font_size: 20 }}
		zIndex={16}
	>
		Social Laws (Leviticus)
	</Fragment>

	<!-- Step 13: "Priesthood / Royalty / Sacrifice..." -->
	<Fragment
		step={13}
		layout={{ x: 593.4, y: 266.2, width: 256.1, height: 57.3 }}
		font={{ font_size: 20 }}
		zIndex={17}
	>
		Priesthood / Royalty<br/>Sacrifice / Worship etc.
	</Fragment>

	<!-- Step 14: "10 Commandments (moral +)" (drill) -->
	<Fragment
		step={14}
		drillTo="law/10-commandments"
		layout={{ x: 592.4, y: 314.8, width: 274.6, height: 30.1 }}
		font={{ font_size: 20 }}
		zIndex={15}
	>
		10 Commandments (moral +)
	</Fragment>

	<!-- Step 15: Vertical line/arrow connecting Moral to middle -->
	<Fragment step={15} animate="wipe-up">
		<Arrow from={{ x: 588, y: 235.8 }} to={{ x: 300, y: 138.2 }} stroke={{ width: 4 }} zIndex={31} />
	</Fragment>

	<!-- Step 15 (with): Law outer rectangle (orange background) -->
	<Fragment step={15} animate="fade">
		<Rect x={32.8} y={3.4} width={878.2} height={399.3} fill="var(--color-bg-cmd-law)" stroke={{ width: 1, color: '#000000' }} zIndex={0} />
	</Fragment>

	<!-- Step 15.1: Top horizontal line -->
	<Fragment step={15.1} animate="draw">
		<Line from={{ x: 74.1, y: 66 }} to={{ x: 875.4, y: 66 }} stroke={{ width: 8 }} zIndex={32} />
	</Fragment>

	<!-- Step 16: Arrow from Commandment up to middle -->
	<Fragment step={16} animate="wipe-up">
		<Arrow from={{ x: 619, y: 224.7 }} to={{ x: 635, y: 157 }} stroke={{ width: 4 }} zIndex={18} />
	</Fragment>

	<!-- Step 16.1: "Must be heard" -->
	<Fragment
		step={16.1}
		layout={{ x: 613.7, y: 124.1, width: 215.6, height: 36.4 }}
		font={{ font_size: 26.7, v_align: 'middle', italic: true }}
		zIndex={21}
	>
		Must be heard
	</Fragment>

	<!-- Step 17: "Entire World: Violates Moral Law" -->
	<Fragment
		step={17}
		layout={{ x: 369.8, y: 115, width: 187.3, height: 59.2 }}
		font={{ font_size: 27, align: 'center', wrap: true }}
		zIndex={19}
	>
		<strong>Entire World:</strong><br/>Moral Law
	</Fragment>

	<!-- Step 18: "Only Israel: Violates Moral & Commandment Law" -->
	<Fragment
		step={18}
		layout={{ x: 355, y: 220, width: 220, height: 107 }}
		font={{ font_size: 27, align: 'center', wrap: true}}
		zIndex={33}
	>
		<strong>Only Israel:</strong><br/> Moral &<br/>Commandment Law
	</Fragment>

	<!-- Step 19: "All Violate Conscience." (highlighted box) -->
	<Fragment
		step={19}
		layout={{ x: 320, y: 20, width: 270, height: 81.6 }}
		font={{ font_size: 30, align: 'center', bold: true, color: 'var(--color-bg-cmd-law)' }}
		fill="var(--color-bg-darkest)"
		zIndex={34}
	>
		Everyone Violates<br/>Conscience.
	</Fragment>
</Slide>
