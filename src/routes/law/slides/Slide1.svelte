<script lang="ts">

	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 1: Law - Moral Law vs Commandment Law
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * This slide introduces the concept of different types of law:
	 * - Moral Law (conscience-based)
	 * - Commandment Law (Moses/Torah)
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
	<ReferenceOverlay src="/export/05-Law/Slide1.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Timeline arrow at bottom -->
	<Fragment
		layout={{ x: 134, y: 473, width: 483, height: 1 }}
		zIndex={23}
	>
		<Arrow from={{ x: 0, y: 0 }} to={{ x: 483, y: 0.8 }} stroke={{ width: 13.3, color: '#000000' }} headSize={2} />
	</Fragment>

	<!-- Static labels at bottom of slide -->
	<Fragment
		layout={{ x: -94, y: 416, width: 210, height: 92 }}
		font={{ font_size: 26.7, align: 'left', wrap: true }}
		zIndex={22}
	>
		Sin existed before Law even over those who did not break a commandment.
	</Fragment>

	<Fragment
		layout={{ x: 137, y: 423, width: 274, height: 34 }}
		font={{ font_size: 26.7, align: 'left' }}
		zIndex={27}
	>
		Yet death reigned due to violations of
	</Fragment>

	<Fragment
		layout={{ x: 168, y: 447, width: 212, height: 55 }}
		font={{ font_size: 64, align: 'center', v_align: 'middle' }}
		fill="var(--color-level1)"
		zIndex={24}
	>
		Moral Law
	</Fragment>

	<Fragment
		layout={{ x: 24, y: 445, width: 110, height: 56 }}
		font={{ font_size: 64, align: 'left', v_align: 'middle' }}
		fill="var(--color-level1)"
		zIndex={25}
	>
		Adam
	</Fragment>

	<Fragment
		layout={{ x: 413, y: 403, width: 143, height: 113 }}
		font={{ font_size: 64, align: 'center', v_align: 'middle' }}
		fill="#FD8017"
		zIndex={26}
	>
		Moses<br/>Law
	</Fragment>

	<!-- ===== ANIMATED CONTENT ===== -->
	
	<!-- Step 1: Romans 2:12-16 (click) - drillTo -->
	<Fragment
		step={1}
		drillTo="law/romans-2-12"
		layout={{ x: 116, y: 79, width: 202, height: 25 }}
		font={{ font_size: 42.7, align: 'center', v_align: 'middle' }}
		zIndex={30}
		animate="fade"
	>
		Romans 2:12-16
	</Fragment>

	<!-- Step 2: Moral Law box (click) -->
	<Fragment step={2} animate="fade">
		<Rect x={74} y={69} width={285} height={319} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={2} />
	</Fragment>

	<!-- Step 2: "Moral" text (with) -->
	<Fragment
		step={2}
		layout={{ x: 149, y: 91, width: 135, height: 61 }}
		font={{ font_size: 48, align: 'center' }}
		zIndex={3}
		animate="fade"
	>
		Moral
	</Fragment>

	<!-- Step 2.1: "Ability to know good and evil" (after 500ms) -->
	<Fragment
		step={2.1}
		layout={{ x: 104, y: 257, width: 226, height: 26 }}
		font={{ font_size: 26.7, align: 'center', wrap: true }}
		zIndex={4}
		animate="fade"
	>
		Ability to know good and evil.
	</Fragment>

	<!-- Step 3: "What judges under Moral Law?" (click) -->
	<Fragment
		step={3}
		layout={{ x: 95, y: 281, width: 244, height: 26 }}
		font={{ font_size: 26.7, align: 'center', wrap: true }}
		zIndex={5}
		animate="fade"
	>
		What judges under Moral Law?
	</Fragment>

	<!-- Step 4: "Conscience" (click) -->
	<Fragment
		step={4}
		layout={{ x: 126, y: 138, width: 183, height: 35 }}
		font={{ font_size: 42.7, align: 'center', v_align: 'middle', italic: true }}
		zIndex={28}
		animate="fade"
	>
		Conscience
	</Fragment>

	<!-- Step 5: Scripture references (click) - drillTo -->
	<Fragment
		step={5}
		drillTo="law/1timothy-4"
		layout={{ x: 106, y: 175, width: 222, height: 81 }}
		font={{ font_size: 37.3, align: 'center', v_align: 'middle' }}
		zIndex={6}
		animate="fade"
	>
		1 Timothy 4:1-4<br/>Ephesians 4:17-19<br/>Isaiah 5:20
	</Fragment>

	<!-- Step 6: "Do you have to know the Bible..." (click) -->
	<Fragment
		step={6}
		layout={{ x: 87, y: 303, width: 259, height: 49 }}
		font={{ font_size: 29.3, align: 'center', wrap: true }}
		zIndex={7}
		animate="fade"
	>
		Do you have to know the Bible to define good and evil?
	</Fragment>

	<!-- Step 7: Romans 5:12-14 (click) - drillTo -->
	<Fragment
		step={7}
		drillTo="law/romans-5-12"
		layout={{ x: 106, y: 351, width: 222, height: 40 }}
		font={{ font_size: 42.7, align: 'center' }}
		zIndex={8}
		animate="fade"
	>
		Romans 5:12-14
	</Fragment>

	<!-- Step 8: Genesis 2:16-17 (click) - drillTo -->
	<Fragment
		step={8}
		drillTo="law/genesis-2-16"
		layout={{ x: 617, y: 356, width: 216, height: 30 }}
		font={{ font_size: 42.7, align: 'center', v_align: 'middle' }}
		zIndex={29}
		animate="fade"
	>
		Genesis 2:16-17
	</Fragment>

	<!-- Step 8: Command box (with) -->
	<Fragment step={8} animate="fade">
		<Rect x={568} y={67} width={308} height={321} fill="#FD8017" stroke={{ color: '#000000', width: 2.3 }} zIndex={1} />
	</Fragment>

	<!-- Step 9: "Command" text (click) -->
	<Fragment
		step={9}
		layout={{ x: 605, y: 79, width: 234, height: 61 }}
		font={{ font_size: 48 }}
		zIndex={12}
		animate="fade"
	>
		Command
	</Fragment>

	<!-- Step 9: Romans 5:20/Galatians 3:19 (with) - drillTo -->
	<Fragment
		step={9}
		drillTo="law/romans-5-20"
		layout={{ x: 634, y: 156, width: 176, height: 65 }}
		font={{ font_size: 37.3, align: 'center' }}
		zIndex={13}
		animate="fade"
	>
		Romans 5:20<br/>Galatians 3:19
	</Fragment>

	<!-- Step 10: "Expanded Law due to weak flesh" (click) -->
	<Fragment
		step={10}
		layout={{ x: 558, y: 67, width: 334, height: 29 }}
		font={{ font_size: 26.7, align: 'center', italic: true }}
		zIndex={11}
		animate="fade"
	>
		Expanded Law due to weak flesh.
	</Fragment>

	<!-- Step 11: "Examples:" (click) -->
	<Fragment
		step={11}
		layout={{ x: 583, y: 219, width: 122, height: 32 }}
		font={{ font_size: 32, italic: true }}
		zIndex={14}
		animate="fade"
	>
		Examples:
	</Fragment>

	<!-- Step 11: "Social Laws (Leviticus)" (with) -->
	<Fragment
		step={11}
		layout={{ x: 593, y: 243, width: 233, height: 32 }}
		font={{ font_size: 32 }}
		zIndex={16}
		animate="fade"
	>
		Social Laws (Leviticus)
	</Fragment>

	<!-- Step 12: "Priesthood / Royalty..." (click) -->
	<Fragment
		step={12}
		layout={{ x: 593, y: 266, width: 256, height: 57 }}
		font={{ font_size: 32, wrap: true }}
		zIndex={17}
		animate="fade"
	>
		Priesthood / Royalty<br/>Sacrifice / Worship etc.
	</Fragment>

	<!-- Step 13: "10 Commandments" (click) - drillTo -->
	<Fragment
		step={13}
		drillTo="law/10-commandments"
		layout={{ x: 592, y: 315, width: 275, height: 30 }}
		font={{ font_size: 32 }}
		zIndex={15}
		animate="fade"
	>
		10 Commandments (moral +)
	</Fragment>

	<!-- Step 14: Down arrow between boxes (click) -->
	<Fragment step={14} animate="wipe">
		<Arrow from={{ x: 442.5, y: 138.2 }} to={{ x: 442.5, y: 235.8 }} stroke={{ width: 4, color: '#000000' }} zIndex={31} />
	</Fragment>

	<!-- Step 14: "Law" title (with) -->
	<Fragment
		step={14}
		layout={{ x: 108, y: 4, width: 126, height: 53 }}
		font={{ font_size: 80, bold: true }}
		zIndex={20}
		animate="fade"
	>
		Law
	</Fragment>

	<!-- Step 14: Main background rectangle (with) -->
	<Fragment step={14} animate="fade">
		<Rect x={33} y={3} width={878} height={399} fill="#FD8017" stroke={{ color: '#000000', width: 1 }} zIndex={0} />
	</Fragment>

	<!-- Step 14.1: Horizontal divider line (after) -->
	<Fragment step={14.1} animate="draw">
		<Line from={{ x: 74, y: 67 }} to={{ x: 875, y: 67 }} stroke={{ width: 13.3, color: '#000000' }} zIndex={32} />
	</Fragment>

	<!-- Step 15: Command arrow (click) -->
	<Fragment step={15} animate="wipe">
		<Arrow from={{ x: 619, y: 167.2 }} to={{ x: 619, y: 224.7 }} stroke={{ width: 4, color: '#000000' }} zIndex={18} />
	</Fragment>

	<!-- Step 15.1: "Must be heard" (after) -->
	<Fragment
		step={15.1}
		layout={{ x: 614, y: 124, width: 216, height: 36 }}
		font={{ font_size: 42.7, v_align: 'middle', italic: true }}
		zIndex={21}
		animate="fade"
	>
		Must be heard
	</Fragment>

	<!-- Step 16: "Entire World: Violates Moral Law" (click) -->
	<Fragment
		step={16}
		layout={{ x: 370, y: 224, width: 187, height: 59 }}
		font={{ font_size: 42.7, align: 'center', wrap: true }}
		zIndex={19}
		animate="fade"
	>
		Entire World:<br/>Violates Moral Law
	</Fragment>

	<!-- Step 17: "Only Israel: Violates Moral & Commandment Law" (click) -->
	<Fragment
		step={17}
		layout={{ x: 366, y: 294, width: 195, height: 107 }}
		font={{ font_size: 42.7, align: 'center', wrap: true }}
		zIndex={33}
		animate="fade"
	>
		Only Israel: Violates Moral &amp;<br/>Commandment Law
	</Fragment>

	<!-- Step 18: "All Violate Conscience" (click) -->
	<Fragment
		step={18}
		layout={{ x: 332, y: 102, width: 261, height: 82 }}
		font={{ font_size: 48, align: 'center', color: '#FD8017' }}
		fill="#000000"
		zIndex={34}
		animate="fade"
	>
		All Violate<br/>Conscience.
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
