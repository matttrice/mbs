<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Ellipse, Rect, Line } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/07-Translation/Slide3.png" />

	<!-- Static Content -->
	<!-- Title: Genesis 6:1-8 (with hyperlink to drill) -->
	<Fragment
		drillTo="translation/genesis-6-1"
		layout={{ x: 84, y: 13, width: 293, height: 62 }}
		font={{ v_align: 'top', font_name: 'Arial', font_size: 39.2, bold: true }}
		zIndex={17}
	>
		Genesis 6:1-8
	</Fragment>

	<!-- Static question -->
	<Fragment
		layout={{ x: 376, y: 10, width: 494, height: 38 }}
		font={{ align: 'center', font_size: 23.3 }}
		zIndex={15}
	>
		Why "Sons of God" & "daughters of men" ?
	</Fragment>

	<!-- Static vertical line -->
	<Fragment>
		<Line from={{ x: 594, y: 419 }} to={{ x: 594, y: 461 }} stroke={{ width: 1 }} zIndex={6} />
	</Fragment>

	<!-- Step 1: "Sons of God" title -->
	<Fragment
		step={1}
		layout={{ x: 94, y: 60, width: 259, height: 46 }}
		font={{ align: 'center', font_size: 30.8, bold: true }}
		zIndex={16}
		animate="fade"
	>
		"Sons of God"
	</Fragment>

	<!-- Step 1: Job references with drill (with) -->
	<Fragment
		step={1}
		drillTo="translation/angels"
		layout={{ x: 73, y: 99, width: 306, height: 93 }}
		font={{ align: 'center', font_size: 20, bold: true }}
		zIndex={18}
		animate="fade"
	>
		Used 5 times in Old Testament<br/>Job 38:1-7, Job 1:6-7, Job 2:1-2 Genesis 6:2, Genesis 6:4
	</Fragment>

	<!-- Step 2: Horizontal line (placeholder - line is 0 height) -->
	<Fragment step={2} animate="fade">
		<Line from={{ x: 270, y: 361 }} to={{ x: 648, y: 361 }} stroke={{ width: 2 }} zIndex={2} />
	</Fragment>

	<!-- Step 3: Sons of God = -->
	<Fragment
		step={3}
		layout={{ x: 386, y: 41, width: 196, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={19}
		animate="fade"
	>
		Sons of God =
	</Fragment>

	<!-- Step 3: Angels = (with) -->
	<Fragment
		step={3}
		layout={{ x: 566, y: 42, width: 134, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={24}
		animate="fade"
	>
		Angels =
	</Fragment>

	<!-- Step 3: Nephilim = (with) -->
	<Fragment
		step={3}
		layout={{ x: 681, y: 41, width: 149, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={20}
		animate="fade"
	>
		Nephilim =
	</Fragment>

	<!-- Step 3: Earth Born (with) -->
	<Fragment
		step={3}
		layout={{ x: 640, y: 73, width: 153, height: 42 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={21}
		animate="fade"
	>
		Earth Born
	</Fragment>

	<!-- Step 3: Fallen Ones = (with) -->
	<Fragment
		step={3}
		layout={{ x: 454, y: 75, width: 184, height: 42 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={22}
		animate="fade"
	>
		Fallen Ones =
	</Fragment>

	<!-- Step 4: Nephilim (first occurrence) -->
	<Fragment
		step={4}
		layout={{ x: 82, y: 228, width: 222, height: 59 }}
		font={{ v_align: 'middle', align: 'center', font_size: 44.2, bold: true }}
		zIndex={11}
		animate="fade"
	>
		Nephilim
	</Fragment>

	<!-- Step 4: FLOOD (with) -->
	<Fragment
		step={4}
		layout={{ x: 131, y: 312, width: 252, height: 66 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 59.2, bold: true, color: '#F4F4F4' }}
		zIndex={34}
		animate="fade"
	>
		FLOOD
	</Fragment>

	<!-- Step 4: Blue flood arrow (with) -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: -2, y: 342 }} to={{ x: 428, y: 342 }} stroke={{ width: 82, color: 'var(--bg-level-3)' }} zIndex={33} />
	</Fragment>

	<!-- Step 5: "in those days" Pre-Flood -->
	<Fragment
		step={5}
		layout={{ x: 80, y: 389, width: 226, height: 111 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, bold: true }}
		zIndex={10}
		animate="fade"
	>
		"in those days"<br/>Pre-Flood
	</Fragment>

	<!-- Step 6: Green oval (Cleansed Earth) -->
	<Fragment step={6} animate="fade">
		<Ellipse cx={564} cy={368} rx={184} ry={175} fill="#05D000" stroke={{ width: 3, color: '#000000' }} zIndex={0} />
	</Fragment>

	<!-- Step 6: Cleansed Earth text (with) -->
	<Fragment
		step={6}
		layout={{ x: 441, y: 258, width: 259, height: 51 }}
		font={{ font_size: 35 }}
		zIndex={7}
		animate="fade"
	>
		Cleansed Earth
	</Fragment>

	<!-- Step 7: "and also afterward" Post-Flood -->
	<Fragment
		step={7}
		layout={{ x: 436, y: 406, width: 271, height: 74 }}
		font={{ align: 'center', font_size: 26.7, bold: true }}
		zIndex={5}
		animate="fade"
	>
		"and also afterward"<br/>Post-Flood
	</Fragment>

	<!-- Step 8: Black down arrow -->
	<Fragment step={8} animate="wipe">
		<Rect x={526} y={176} width={64} height={48} fill="#000000" zIndex={32} />
	</Fragment>

	<!-- Step 8: Nephilim in rectangle (with) -->
	<Fragment
		step={8}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true }}
		zIndex={31}
		animate="fade"
	>
		Nephilim
	</Fragment>

	<!-- Step 9: Angels sin reference with drill -->
	<Fragment
		step={9}
		drillTo="translation/angels-sin"
		layout={{ x: 386, y: 106, width: 362, height: 34 }}
		font={{ font_size: 23.3, bold: true }}
		zIndex={23}
		animate="fade"
	>
		Sins of Angels: Jude 6, 2 Peter 2:4
	</Fragment>

	<!-- Step 9.1: Nephilim red (after 500ms) -->
	<Fragment
		step={9.1}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={29}
		animate="fade"
	>
		Nephilim
	</Fragment>

	<!-- Step 10: How many survive? -->
	<Fragment
		step={10}
		layout={{ x: 462, y: 362, width: 225, height: 24 }}
		font={{ v_align: 'middle', font_size: 16.7 }}
		zIndex={1}
		animate="fade"
	>
		How many survive the flood?
	</Fragment>

	<!-- Step 11: Ark -->
	<Fragment
		step={11}
		layout={{ x: 491, y: 305, width: 161, height: 69 }}
		fill="#000000"
		font={{ v_align: 'middle', align: 'center', font_size: 48.3, bold: true, color: '#F4F4F4' }}
		zIndex={12}
		animate="fade"
	>
		Ark
	</Fragment>

	<!-- Step 11: 8 Survivors (with) -->
	<Fragment
		step={11}
		layout={{ x: 456, y: 369, width: 233, height: 38 }}
		fill="#05D000"
		font={{ align: 'center', font_size: 30, bold: true }}
		zIndex={8}
		animate="fade"
	>
		8 Survivors
	</Fragment>

	<!-- Step 12: How many Nephilim survivors? -->
	<Fragment
		step={12}
		layout={{ x: 747, y: 262, width: 195, height: 105 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3, bold: true }}
		zIndex={3}
		animate="fade"
	>
		How many of the survivors are Nephilim?
	</Fragment>

	<!-- Step 13: Mortal origin question -->
	<Fragment
		step={13}
		layout={{ x: 754, y: 368, width: 188, height: 128 }}
		font={{ v_align: 'middle', align: 'center', bold: true }}
		zIndex={4}
		animate="fade"
	>
		If the Nephilim are of mortal<br/>origin, should they exist Post-Flood?
	</Fragment>

	<!-- Step 14: Post-flood references with drill -->
	<Fragment
		step={14}
		drillTo="translation/post-flood"
		layout={{ x: 60, y: 500, width: 840, height: 41 }}
		fill="#FFFFFF"
		font={{ align: 'center' }}
		zIndex={14}
		animate="fade"
	>
		Numbers 13:32-33, Deuteronomy 1:27-28, Deuteronomy 3:10-11, Amos 2:9
	</Fragment>

	<!-- Step 14: Nephilim red again (with) -->
	<Fragment
		step={14}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={30}
		animate="fade"
	>
		Nephilim
	</Fragment>

	<!-- Step 15: Gates reference with drill -->
	<Fragment
		step={15}
		drillTo="translation/john-10-1"
		layout={{ x: 391, y: 138, width: 236, height: 34 }}
		font={{ font_size: 23.3, bold: true }}
		zIndex={13}
		animate="fade"
	>
		Gates: John 10:1-7
	</Fragment>

	<!-- Step 15: Final Nephilim red (with) -->
	<Fragment
		step={15}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={30}
		animate="fade"
	>
		Nephilim
	</Fragment>
</Slide>
