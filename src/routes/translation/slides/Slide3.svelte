<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Ellipse, Rect } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
	const BASE_LAYER = 0;
	const SHAPE_LAYER = 2;
	const ARROW_LAYER = 4;
	const LINK_LAYER = 100;
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<Fragment
		clickTo="translation/genesis-6-1"
		layout={{ x: 84, y: 13, width: 293, height: 40 }}
		font={{ v_align: 'middle', font_size: 39.2, bold: true }}
		zIndex={LINK_LAYER}
	>
		<u>Genesis 6:1-8</u>
	</Fragment>

	<!-- Static: Question text -->
	<Fragment
		layout={{ x: 356, y: 10, width: 494, height: 38 }}
		font={{ align: 'center', font_size: 23.3, v_align: 'middle' }}
		zIndex={BASE_LAYER}
	>
		Why <em>"Sons of God" &amp; "daughters of men" </em> ??
	</Fragment>

	<!-- Step 1: "Sons of God" heading -->
	<Fragment
		step={1}
		layout={{ x: 84, y: 60, width: 259, height: 46 }}
		font={{ align: 'center', font_size: 30.8, bold: true }}
		zIndex={BASE_LAYER}
	>
		"Sons of God"
	</Fragment>

	<!-- Step 1: Used 5 times in OT (drillTo angels) -->
	<Fragment
		step={1}
		drillTo="translation/angels"
		layout={{ x: 63, y: 99, width: 306, height: 93 }}
		font={{ align: 'center', font_size: 20,wrap: true }}
		zIndex={BASE_LAYER}
	>
		<strong>Used 5 times in Old Testament</strong><br>Job 38:1-7, Job 1:6-7, Job 2:1-2 <br>Genesis 6:2, Genesis 6:4
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 395, y: 41, width: 196, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={BASE_LAYER}
	>
		Sons of God =
	</Fragment>

	<Fragment
		step={3.1}
		layout={{ x: 566, y: 42, width: 134, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={BASE_LAYER}
	>
		Angels =
	</Fragment>

	<Fragment
		step={3.2}
		layout={{ x: 675, y: 41, width: 149, height: 38 }}
		font={{ font_size: 26.7 }}
		zIndex={BASE_LAYER}
	>
		Nephilim =
	</Fragment>

	<Fragment
		step={3.3}
		layout={{ x: 434, y: 75, width: 184, height: 32 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={BASE_LAYER}
	>
		Fallen Ones =
	</Fragment>

	<!-- Step 3: Earth Born -->
	<Fragment
		step={3.4}
		layout={{ x: 608, y: 75, width: 153, height: 32 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={BASE_LAYER}
	>
		Earth Born
	</Fragment>

	<!-- Step 4: Nephilim (large) -->
	<Fragment
		step={4}
		layout={{ x: 12, y: 228, width: 222, height: 59 }}
		font={{ v_align: 'middle', align: 'center', font_size: 44.2, bold: true }}
		zIndex={BASE_LAYER}
	>
		Nephilim
	</Fragment>

	<Fragment step={4} animate="draw">
		<Arrow from={{ x: -2, y: 342 }} to={{ x: 428, y: 342 }} stroke={{ width: 82, color: 'var(--stroke-level-3)' }} zIndex={ARROW_LAYER} />
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 131, y: 309, width: 252, height: 66 }}
		font={{ v_align: 'middle', align: 'center', font_size: 59.2, bold: true, color: 'var(--text-ghost)' }}
		zIndex={ARROW_LAYER}
	>
		<strong>FLOOD</strong>
	</Fragment>

	<!-- Step 5: "in those days" / Pre-Flood box -->
	<Fragment
		step={5}
		layout={{ x: 20, y: 389, width: 226, height: 111 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, bold: true, wrap: true }}
		zIndex={BASE_LAYER}
	>
		"in those days"<br><strong>Pre-Flood</strong>
	</Fragment>

	<!-- Step 6: Green oval (Cleansed Earth) -->
	<Fragment step={6}>
		<Ellipse cx={563} cy={368} rx={184} ry={175} fill="var(--bg-earth)" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={BASE_LAYER} />
	</Fragment>

	<!-- Step 6: Cleansed Earth text -->
	<Fragment
		step={6}
		layout={{ x: 436, y: 258, width: 259, height: 51 }}
		font={{ font_size: 35, align: 'center', v_align: 'middle', bold: true }}
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
		"and also afterward"<br><strong>Post-Flood</strong>
	</Fragment>

	<Fragment step={8} animate="fly-down">
		<Arrow from={{ x: 370, y: 162 }} to={{ x: 473, y: 226 }} stroke={{ width: 20 }} headSize={2} zIndex={ARROW_LAYER} />
	</Fragment>

	<!-- Step 8: Nephilim rect label -->
	<Fragment
		step={8.1}
		layout={{ x: 475, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true }}
		zIndex={31}
	>
		Nephilim
	</Fragment>

	<!-- Step 9: Sins of Angels (drillTo angels-sin) -->
	<Fragment
		step={9}
		drillTo="translation/angels-sin"
		layout={{ x: 386, y: 106, width: 380, height: 34 }}
		font={{ font_size: 23.3, align: 'center', v_align: 'middle' }}
		zIndex={23}
	>
		<strong>Sins of Angels:</strong> Jude 6, 2 Peter 2:4
	</Fragment>

	<!-- Step 9.1: Nephilim red overlay (after previous) -->
	<Fragment
		step={9.1}
		animate="fly-down"
		layout={{ x: 475, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: 'var(--bg-blood)' }}
		zIndex={9}
		transition={{ duration: 10000 }}
	>
		Nephilim
	</Fragment>

	<!-- Step 10: How many survive the flood? -->
	<Fragment
		step={10}
		layout={{ x: 422, y: 382, width: 295, height: 24 }}
		font={{ v_align: 'middle', font_size: 21, align: 'center', bold: true, color: 'var(--text-ghost)' }}
		exitStep={11}
		zIndex={1}
	>
		How many survive the flood?
	</Fragment>

	<!-- Step 11: Ark -->
	<Fragment
		step={11}
		animate="fly-up"
		layout={{ x: 485, y: 305, width: 161, height: 69 }}
		font={{ v_align: 'middle', align: 'center', font_size: 48.3, bold: true, color: 'var(--text-ghost)' }}
		fill="var(--bg-level-0)"
		zIndex={12}
	>
		Ark
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 449, y: 369, width: 233, height: 38 }}
		font={{ align: 'center', font_size: 30, bold: true }}
		fill="var(--bg-earth)"
		zIndex={8}
	>
		<strong>8</strong> Survivors
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
		layout={{ x: 60, y: 490, width: 840, height: 41 }}
		font={{ align: 'center', wrap: true, font_size: 23.3, bold: true }}
		fill="white"
		line={{ width: 2, color: 'var(--bg-blood)' }}
		zIndex={LINK_LAYER}
	>
		Numbers 13:32-33, Deuteronomy 1:27-28, Deuteronomy 3:10-11, Amos 2:9
	</Fragment>

	<!-- Step 14: Nephilim red overlay -->
	<Fragment
		step={14}
		animate="fly-down"
		layout={{ x: 475, y: 218, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: 'var(--bg-blood)' }}
		zIndex={20}
	>
		Nephilim
	</Fragment>

	<Fragment
		step={15}
		drillTo="translation/gates"
		layout={{ x: 441, y: 153, width: 236, height: 34 }}
		font={{ font_size: 23.3, align: 'center', v_align: 'middle'}}
		zIndex={LINK_LAYER}
	>
		<strong>Gates:</strong> John 10:1-7
	</Fragment>

	<!-- Step 16: Jesus/Satan comparison group -->
	<!-- Step 16: Horizontal divider line -->
	<Fragment step={16}>
		<Line from={{ x: 689, y: 172 }} to={{ x: 923, y: 172 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={27} />
	</Fragment>

	<!-- Step 16: Vertical divider line -->
	<Fragment step={16}>
		<Line from={{ x: 806, y: 143 }} to={{ x: 806, y: 254 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={28} />
	</Fragment>

	<!-- Satan column -->
	<Fragment
		step={16}
		layout={{ x: 690, y: 145, width: 100, height: 25 }}
		font={{ align: 'center', font_size: 22, bold: true }}
		zIndex={29}
	>
		<strong>Satan</strong>
	</Fragment>
	
	<Fragment
		step={16}
		layout={{ x: 810, y: 145, width: 100, height: 25 }}
		font={{ align: 'center', font_size: 22, bold: true }}
		zIndex={26}
	>
		<strong>Jesus</strong>
	</Fragment>


	<Fragment
		step={16}
		layout={{ x: 680, y: 168, width: 120, height: 100 }}
		font={{ align: 'left', font_size: 18}}
		zIndex={26}
	>
		- Unauthorized<br>- "Climbs in"<br> &nbsp;&nbsp- Steal, kill,<br>  &nbsp;&nbsp&nbsp;&nbsp;&nbsp; destroy
	</Fragment>

	<Fragment
		step={16}
		layout={{ x: 815, y: 138, width: 149, height: 135 }}
		font={{ align: 'left', font_size: 18}}
		zIndex={25}
	>
		- Authorized<br>- Mary's Womb<br>- Save
	</Fragment>

	<!-- Step 16: Nephilim red overlay -->
	<Fragment
		step={16}
		animate="fly-down"
		layout={{ x: 476, y: 219, width: 182, height: 54 }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: 'var(--bg-blood)' }}
		zIndex={30}
	>
		Nephilim
	</Fragment>
</Slide>
