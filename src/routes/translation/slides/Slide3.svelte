<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Ellipse, Rect } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: Vertical line (Line 21) -->
	<Fragment>
		<Line from={{ x: 594, y: 419 }} to={{ x: 594, y: 461 }} stroke={{ width: 1 }} zIndex={6} />
	</Fragment>

	<!-- Static: Title "Genesis 6:1-8" (drillTo genesis-6-1) -->
	<Fragment
		drillTo="translation/genesis-6-1"
		layout={{ x: 84, y: 13, width: 293, height: 62 }}
		font={{ v_align: 'top', font_size: 39.2, bold: true }}
		zIndex={17}
	>
		Genesis 6:1-8
	</Fragment>

	<!-- Static: Question text -->
	<Fragment
		layout={{ x: 376, y: 10, width: 494, height: 38 }}
		font={{ align: 'center', font_size: 23.3 }}
		zIndex={15}
	>
		Why <em>"Sons of God" &amp; "daughters of men" </em>?
	</Fragment>

	<!-- Step 1: "Sons of God" heading -->
	<Fragment
		step={1}
		layout={{ x: 94, y: 60, width: 259, height: 46 }}
		font={{ align: 'center', font_size: 30.8, bold: true }}
		zIndex={16}
	>
		"Sons of God"
	</Fragment>

	<!-- Step 1: Used 5 times in OT (drillTo angels) -->
	<Fragment
		step={1}
		drillTo="translation/angels"
		layout={{ x: 73, y: 99, width: 306, height: 93 }}
		font={{ align: 'center', font_size: 20, bold: true, wrap: true }}
		zIndex={18}
	>
		<strong>Used 5 times in Old Testament</strong><br>Job 38:1-7, Job 1:6-7, Job 2:1-2 <br>Genesis 6:2, Genesis 6:4
	</Fragment>

	<!-- Step 2: Separator line (degenerate in JSON, derived from layout) -->
	<Fragment step={2} animate="draw">
		<Line from={{ x: 270, y: 361 }} to={{ x: 648, y: 361 }} stroke={{ width: 1 }} zIndex={2} />
	</Fragment>

	<!-- Step 3: Sons of God = -->
	<Fragment
		step={3}
		layout={{ x: 386, y: 41, width: 196, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={19}
	>
		Sons of God =
	</Fragment>

	<!-- Step 3: Angels = -->
	<Fragment
		step={3}
		layout={{ x: 566, y: 42, width: 134, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={24}
	>
		Angels =
	</Fragment>

	<!-- Step 3: Nephilim = -->
	<Fragment
		step={3}
		layout={{ x: 681, y: 41, width: 149, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={20}
	>
		Nephilim =
	</Fragment>

	<!-- Step 3: Earth Born -->
	<Fragment
		step={3}
		layout={{ x: 640, y: 73, width: 153, height: 42 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={21}
	>
		Earth Born
	</Fragment>

	<!-- Step 3: Fallen Ones = -->
	<Fragment
		step={3}
		layout={{ x: 454, y: 75, width: 184, height: 42 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={22}
	>
		Fallen Ones =
	</Fragment>

	<!-- Step 4: Nephilim (large) -->
	<Fragment
		step={4}
		layout={{ x: 82, y: 228, width: 222, height: 59 }}
		font={{ v_align: 'middle', align: 'center', font_size: 44.2, bold: true }}
		zIndex={11}
	>
		Nephilim
	</Fragment>

	<!-- Step 4: FLOOD text -->
	<Fragment
		step={4}
		layout={{ x: 131, y: 312, width: 252, height: 66 }}
		font={{ v_align: 'middle', font_size: 59.2, bold: true, color: 'var(--text-ghost)' }}
		zIndex={34}
	>
		FLOOD
	</Fragment>

	<!-- Step 4: FLOOD arrow (thick blue horizontal bar) -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: -2, y: 342 }} to={{ x: 428, y: 342 }} stroke={{ width: 82, color: 'var(--stroke-level-3)' }} zIndex={33} />
	</Fragment>

	<!-- Step 5: "in those days" / Pre-Flood box -->
	<Fragment
		step={5}
		layout={{ x: 80, y: 389, width: 226, height: 111 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, bold: true, wrap: true }}
		zIndex={10}
	>
		"in those days"<br>Pre-Flood
	</Fragment>

	<!-- Step 6: Green oval (Cleansed Earth) -->
	<Fragment step={6}>
		<Ellipse cx={563} cy={368} rx={184} ry={175} fill="#05D000" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<!-- Step 6: Cleansed Earth text -->
	<Fragment
		step={6}
		layout={{ x: 441, y: 258, width: 259, height: 51 }}
		font={{ font_size: 35 }}
		zIndex={7}
	>
		Cleansed Earth
	</Fragment>

	<!-- Step 7: "and also afterward" / Post-Flood -->
	<Fragment
		step={7}
		layout={{ x: 436, y: 406, width: 271, height: 74 }}
		font={{ align: 'center', font_size: 26.7, bold: true, wrap: true }}
		zIndex={5}
	>
		"and also afterward"<br>Post-Flood
	</Fragment>

	<!-- Step 8: Down-pointing arrow (Right Arrow 18 rotated 90°) -->
	<Fragment step={8}>
		<Arrow from={{ x: 558, y: 176 }} to={{ x: 558, y: 224 }} stroke={{ width: 3 }} headSize={5} zIndex={32} />
	</Fragment>

	<!-- Step 8: Nephilim rect label -->
	<Fragment
		step={8}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true }}
		zIndex={31}
	>
		Nephilim
	</Fragment>

	<!-- Step 9: Sins of Angels (drillTo angels-sin) -->
	<Fragment
		step={9}
		drillTo="translation/angels-sin"
		layout={{ x: 386, y: 106, width: 362, height: 34 }}
		font={{ font_size: 23.3, bold: true, wrap: true }}
		zIndex={23}
	>
		<strong>Sins of Angels: </strong>Jude 6, 2 Peter 2:4
	</Fragment>

	<!-- Step 9.1: Nephilim red overlay (after previous) -->
	<Fragment
		step={9.1}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={9}
	>
		Nephilim
	</Fragment>

	<!-- Step 10: How many survive the flood? -->
	<Fragment
		step={10}
		layout={{ x: 462, y: 362, width: 225, height: 24 }}
		font={{ v_align: 'middle', font_size: 16.7 }}
		zIndex={1}
	>
		How many survive the flood?
	</Fragment>

	<!-- Step 11: Ark -->
	<Fragment
		step={11}
		layout={{ x: 491, y: 305, width: 161, height: 69 }}
		font={{ v_align: 'middle', align: 'center', font_size: 48.3, bold: true, color: 'var(--text-ghost)' }}
		fill="var(--bg-level-0)"
		zIndex={12}
	>
		Ark
	</Fragment>

	<!-- Step 11: 8 Survivors -->
	<Fragment
		step={11}
		layout={{ x: 456, y: 369, width: 233, height: 38 }}
		font={{ align: 'center', font_size: 30, bold: true }}
		fill="#05D000"
		zIndex={8}
	>
		<strong>8 </strong>Survivors
	</Fragment>

	<!-- Step 12: How many of the survivors are Nephilim? -->
	<Fragment
		step={12}
		layout={{ x: 747, y: 262, width: 195, height: 105 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3, bold: true, wrap: true }}
		zIndex={3}
	>
		How many <br>of the survivors <br>are Nephilim?
	</Fragment>

	<!-- Step 13: If the Nephilim are of mortal origin... -->
	<Fragment
		step={13}
		layout={{ x: 754, y: 368, width: 188, height: 128 }}
		font={{ v_align: 'middle', align: 'center', bold: true, wrap: true }}
		zIndex={4}
	>
		If the Nephilim <br>are of mortal<br>origin, should <br>they exist <br>Post-Flood?
	</Fragment>

	<!-- Step 14: Numbers 13:32-33... post-flood references (drillTo post-flood) -->
	<Fragment
		step={14}
		drillTo="translation/post-flood"
		layout={{ x: 60, y: 500, width: 840, height: 41 }}
		font={{ align: 'center', wrap: true }}
		fill="white"
		zIndex={14}
	>
		Numbers 13:32-33, Deuteronomy 1:27-28, Deuteronomy 3:10-11, Amos 2:9
	</Fragment>

	<!-- Step 14: Nephilim red overlay -->
	<Fragment
		step={14}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={29}
	>
		Nephilim
	</Fragment>

	<!-- Step 15: Gates: John 10:1-7 (drillTo john-10-1) -->
	<Fragment
		step={15}
		drillTo="translation/john-10-1"
		layout={{ x: 391, y: 138, width: 236, height: 34 }}
		font={{ font_size: 23.3, bold: true }}
		zIndex={13}
	>
		<strong>Gates: </strong>John 10:1-7
	</Fragment>

	<!-- Step 16: Jesus/Satan comparison group -->
	<!-- Satan column -->
	<Fragment
		step={16}
		layout={{ x: 638, y: 180, width: 149, height: 160 }}
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true }}
		zIndex={26}
	>
		<strong>Satan</strong><br>- Unauthorized<br>- Climbs in<br>Steal, kill,<br>    destroy
	</Fragment>

	<!-- Jesus column -->
	<Fragment
		step={16}
		layout={{ x: 760, y: 180, width: 99, height: 129 }}
		font={{ align: 'center', font_size: 23.3, bold: true, wrap: true }}
		zIndex={25}
	>
		<strong>Jesus</strong><br>- Authorized<br>- Womb<br>- Save
	</Fragment>

	<!-- Step 16: Horizontal divider line -->
	<Fragment step={16}>
		<Line from={{ x: 639, y: 214 }} to={{ x: 843, y: 214 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={27} />
	</Fragment>

	<!-- Step 16: Vertical divider line -->
	<Fragment step={16}>
		<Line from={{ x: 760, y: 183 }} to={{ x: 760, y: 317 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={28} />
	</Fragment>

	<!-- Step 16: Nephilim red overlay -->
	<Fragment
		step={16}
		layout={{ x: 480, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: '#FD0013' }}
		zIndex={30}
	>
		Nephilim
	</Fragment>
</Slide>
