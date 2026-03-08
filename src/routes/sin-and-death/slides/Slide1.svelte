<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect } from '$lib/components/svg';
    import Arc from '$lib/components/svg/Arc.svelte';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();

	const COL_WIDTH = 270;
	const COL_1_X = 75;
	const COL_2_X = 345;
	const COL_3_X = 615;
	const DIFFERENCE_X = COL_3_X - 203 / 2;
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<ReferenceOverlay src="/export/06-Sin_Death/Slide1.png" />

	<!-- Romans 6:23 reference -->
	<Fragment
		drillTo="sin-and-death/romans-6-23"
		layout={{ x: COL_1_X, y: 65, width: COL_WIDTH, height: 33 }}
		line={{ width: 6 }}
		font={{ v_align: 'middle', align:'center', font_size: 30, bold: true }}
		zIndex={12}
	>
		Romans 6:23
	</Fragment>

	<Fragment
		layout={{ x: COL_1_X, y: 14, width: COL_WIDTH, height: 51 }}
		fill="var(--bg-level-0)"
		font={{ align: 'center', v_align: 'middle', font_size: 39, bold: true, color: 'var(--text-light)' }}
	>
		Sin
	</Fragment>

	<!-- "Death" box -->
	<Fragment
		step={1}
		animate="wipe-left"
		layout={{ x: COL_2_X, y: 14, width: COL_WIDTH -50, height: 51 }}
		fill="var(--bg-level-0)"
		font={{ align: 'left', v_align: 'middle', font_size: 39, bold: true, color: 'var(--text-light)' }}
	>
		Death
	</Fragment>
	<!-- equals sign between sin and death -->
	<Fragment
		step={1}
		animate="wipe-left"
		layout={{ x: 285, y: 14, width: 30, height: 51 }}
		font={{ align: 'right', v_align: 'middle', font_size: 39, bold: true, color: 'var(--text-light)' }}
	>
		=
	</Fragment>
	<!-- Step 1: Isaiah 59:1-2 -->
	<Fragment
		step={2}
		drillTo="sin-and-death/isaiah-59-1"
		layout={{ x: COL_2_X, y: 65, width: COL_WIDTH, height: 33 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30, bold: true }}
		zIndex={6}
	>
		Isaiah 59:1-2
	</Fragment>
	
	<Fragment
		step={3}
		animate="wipe-right"
		layout={{ x: 555, y: 14, width: COL_WIDTH, height: 51 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'left', font_size: 39, bold: true, color: 'var(--text-light)' }}
		fill="var(--bg-level-0)"
		zIndex={7}
	>
		Separation
	</Fragment>
	<Fragment
		step={3}
		layout={{ x: 485, y: 14, width: 30, height: 51 }}
		font={{ align: 'right', v_align: 'middle', font_size: 39, bold: true, color: 'var(--text-light)' }}
		animate="wipe-right"
	>
		=
	</Fragment>

	<Fragment step={4} animate="wipe-down">
		<Rect x={COL_1_X} y={101.4} width={COL_WIDTH} height={240} fill="var(--bg-level-1)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={1} />
	</Fragment>

	<!-- Step 4: James 2:26 reference -->
	<Fragment
		step={4}
		drillTo="sin-and-death/james-2-26"
		layout={{ x: COL_1_X, y: 220, width: COL_WIDTH, height: 31.9 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 28 }}
		zIndex={5}
		animate="fade"
	>
		James 2:26
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: COL_1_X, y: 293.1, width: COL_WIDTH, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 , bold:true}}
		zIndex={8}
	>
		Body / Spirit
	</Fragment>

	<!-- Step 5: "Physical Death" -->
	<Fragment
		step={6}
		layout={{ x: COL_1_X, y: 110, width: COL_WIDTH, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45, bold: true, wrap: true}}
		zIndex={4}
		animate="fade"
	>
		<strong>Physical Death</strong>
	</Fragment>

	<!-- Step 6: Orange (Spiritual Death) -->
	<Fragment step={7} animate="wipe-down">
		<Rect x={COL_2_X} y={101.4} width={COL_WIDTH} height={240} fill="var(--bg-cmd-law)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={1} />
	</Fragment>

	<!-- Step 7: Ezekiel 18:4 reference -->
	<Fragment
		step={7}
		drillTo="sin-and-death/ezekiel-18-4"
		layout={{ x: COL_2_X, y: 210, width: COL_WIDTH, height: 50.3 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3 }}
		zIndex={6}
	>
		Ezekiel 18:4 <br/> Ephesians 2:1-2
	</Fragment>

	<!-- Step 9-11: "Separation?" for Spiritual -->
	<Fragment
		step={9}
		layout={{ x: COL_2_X, y: 265, width: COL_WIDTH, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 25 }}
		zIndex={17}
		animate="fade"
	>
		Separation?
	</Fragment>

	<!-- Step 10: "Soul / God" for Spiritual -->
	<Fragment
		step={10}
		layout={{ x: COL_2_X, y: 293.1, width: COL_WIDTH, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8, bold: true }}
		zIndex={18}
		animate="fade"
	>
		Soul / God
	</Fragment>

	<!-- Step 11: "Spiritual Death" title -->
	<Fragment
		step={11}
		layout={{ x: COL_2_X, y: 110, width: COL_WIDTH, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45, bold: true }}
		zIndex={9}
		animate="fade"
	>
		<strong>Spiritual<br/>Death</strong>
	</Fragment>

	<!-- Step 12: Red column (Eternal Death) -->
	<Fragment step={12} animate="wipe-down">
		<Rect x={COL_3_X} y={101.4} width={COL_WIDTH} height={240} fill="var(--bg-danger)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<!-- Step 12.1: Revelation 20:14-15, 21:6-8 -->
	<Fragment
		step={12.1}
		drillTo="sin-and-death/revelation-20-14"
		layout={{ x: COL_3_X, y: 210, width: COL_WIDTH, height: 50.3 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3 }}
		zIndex={11}
		animate="fade"
	>
		Revelation 20:14-15<br/>Revelation 21:6-8
	</Fragment>

	<!-- Step 13: "Separation?" for Eternal -->
	<Fragment
		step={13}
		layout={{ x: COL_3_X, y: 265, width: COL_WIDTH, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 25 }}
		zIndex={19}
		animate="fade"
	>
		Separation?
	</Fragment>

	<!-- Step 14: "Soul / God" for Eternal -->
	<Fragment
		step={14}
		layout={{ x: COL_3_X, y: 293.1, width: COL_WIDTH, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8, bold: true }}
		zIndex={20}
		animate="fade"
	>
		Soul / God
	</Fragment>

	<!-- Step 15: "Eternal Death" title -->
	<Fragment
		step={15}
		layout={{ x: COL_3_X, y: 110, width: COL_WIDTH, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45, bold: true }}
		zIndex={10}
		animate="fade"
	>
		<strong>Eternal<br/>Death</strong>
	</Fragment>

	<!-- Step 16: "Difference?" -->
	<Fragment
		step={16}
		layout={{ x: DIFFERENCE_X, y: 325, width: 203, height: 23.9 }}
		fill="var(--bg-ghost)"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'middle', align: 'center', font_size: 17.5, italic: true }}
		zIndex={30}
		animate="fade"
	>
		Difference?
	</Fragment>

	<!-- Step 16.1: "Changeable" -->
	<Fragment
		step={17}
		layout={{ x: COL_2_X, y: 330, width: COL_WIDTH, height: 100 }}
		line={{ width: [0, 1, 1, 1], color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8, italic: true, wrap: true }}
		zIndex={1}
		fill="var(--bg-cmd-law)"
		animate="wipe-down"
	>
		Changeable<br/><strong style="font-size: 0.7em">"You formerly walked"</strong>
	</Fragment>

	<!-- Step 16.3: "Permanent" -->
	<Fragment
		step={17}
		layout={{ x: COL_3_X, y: 340, width: COL_WIDTH, height: 150 }}
		line={{ width: [0, 1, 1, 1], color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'top', align: 'center', font_size: 30.8, italic: true, wrap: true }}
		zIndex={1}
		fill="var(--bg-danger)"
		animate="wipe-down"
	>
		Permanent<br/><strong style="font-size: 0.7em">"It is done"</strong>
	</Fragment>

	<!-- Step 18: Nature of Death -->
	<Fragment
		step={18}
		drillTo="sin-and-death/death-states"
		layout={{ x: 45, y: 345, width: 270, height: 35 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 30.8, bold: true }}
		zIndex={24}
		animate="fade"
	>
		<u>Nature of Death:</u>
	</Fragment>

	<Fragment
		step={19}
		layout={{ x: 35, y: 380, width: 300, height: 35 }}
		line={{ width: 1 }}
		font={{ font_size: 33 }}
		zIndex={25}
	>
		<strong>Process:</strong> <span style="font-size: 0.9em">Genesis 3:19</span>
	</Fragment>

	<Fragment
		step={19.1}
		layout={{ x: 35, y: 415, width: 300, height: 35 }}
		line={{ width: 1 }}
		font={{ font_size: 33 }}
		zIndex={26}
	>
		<strong style="color: var(--bg-cmd-law)">Event:</strong> Ezekiel 18:4
	</Fragment>

	<Fragment
		step={19.2}
		layout={{ x: 35, y: 450, width: 300, height: 35 }}
		line={{ width: 1 }}
		font={{ font_size: 33}}
		zIndex={27}
	>
		<strong style="color: var(--bg-cmd-law)">State:</strong> Ephesians 2:1
	</Fragment>

	<!-- Step 20: Matthew 8:21-22 -->
	<Fragment
		step={20}
		drillTo="sin-and-death/matthew-8-21"
		layout={{ x: COL_2_X, y: 460, width: COL_WIDTH, height: 45 }}
		line={{ width: 1 }}
		font={{ font_size: 30, align: 'center', bold: true }}
		zIndex={28}
	>
		Matthew 8:21-22
	</Fragment>

	<!-- Step 21: "How can dead people bury dead people?" -->
	<Fragment
		step={21}
		layout={{ x: 320.7, y: 490, width: 463.9, height: 30.6 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 23.3, italic: true }}
		zIndex={29}
		animate="fade"
	>
		How can dead people bury dead people?
	</Fragment>
	<Fragment
		step={22}
		animate="wipe-left"
	>
		<Arc arrow headSize={5} from={{ x: 311, y: 509 }} to={{ x: 128, y: 492 }} curve={-60} stroke={{ width: 4, color: 'var(--stroke-cmd-law)' }} />
	</Fragment>
</Slide>
