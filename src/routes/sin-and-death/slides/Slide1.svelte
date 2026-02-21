<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<ReferenceOverlay src="/export/06-Sin_Death/Slide1.png" />

	<!-- Static Content -->
	<!-- "Sin =" box -->
	<Fragment
		layout={{ x: 222.2, y: 13.9, width: 138.6, height: 50.4 }}
		fill="var(--bg-level-0)"
		font={{ v_align: 'middle', font_size: 39.2, color: 'var(--text-light)' }}
	>
		Sin&nbsp;&nbsp;=
	</Fragment>

	<!-- "Death" box -->
	<Fragment
		layout={{ x: 351.8, y: 13.9, width: 128.2, height: 50.4 }}
		fill="var(--bg-level-0)"
		font={{ v_align: 'top', font_size: 39.2, bold: true, color: 'var(--text-light)' }}
	>
		Death
	</Fragment>

	<!-- Romans 6:23 reference -->
	<Fragment
		drillTo="sin-and-death/romans-6-23"
		layout={{ x: 239.4, y: 65.2, width: 217.0, height: 33.4 }}
		line={{ width: 6 }}
		font={{ v_align: 'middle', font_size: 30.8 }}
		zIndex={12}
	>
		Romans 6:23
	</Fragment>

	<!-- Animated Content -->
	<!-- Step 1: Gray column (Physical Death) -->
	<Fragment step={1} animate="wipe-down">
		<Rect x={66.8} y={101.4} width={271.4} height={240} fill="var(--bg-level-1)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1: Isaiah 59:1-2 -->
	<Fragment
		step={1}
		drillTo="sin-and-death/isaiah-59-1"
		layout={{ x: 450, y: 30, width: 264.4, height: 50.3 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3 }}
		zIndex={6}
		animate="fade"
	>
		Isaiah 59:1-2
	</Fragment>

	<!-- Step 2: "Separation?" text -->
	<Fragment
		step={2}
		layout={{ x: 450, y: 13.9, width: 245.0, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={7}
		animate="fade"
	>
		Separation?
	</Fragment>

	<!-- Step 3: "Body / Spirit" -->
	<Fragment
		step={3}
		layout={{ x: 86.8, y: 293.1, width: 231.4, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={8}
		animate="fade"
	>
		Body / Spirit
	</Fragment>

	<!-- Step 4: James 2:26 reference -->
	<Fragment
		step={4}
		drillTo="sin-and-death/james-2-26"
		layout={{ x: 96.8, y: 247.9, width: 211.1, height: 31.9 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3 }}
		zIndex={5}
		animate="fade"
	>
		James 2:26
	</Fragment>

	<!-- Step 5: "Physical Death" -->
	<Fragment
		step={5}
		layout={{ x: 80.4, y: 103, width: 245.0, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45, bold: true }}
		zIndex={4}
		animate="fade"
	>
		Physical<br/>Death
	</Fragment>

	<!-- Step 6: Orange (Spiritual Death) -->
	<Fragment step={6} animate="wipe-down">
		<Rect x={315.3} y={101.4} width={271.4} height={240} fill="var(--bg-cmd-law)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={1} />
	</Fragment>

	<!-- Step 7: Ezekiel 18:4 reference -->
	<Fragment
		step={7}
		drillTo="sin-and-death/ezekiel-18-4"
		layout={{ x: 337.2, y: 197.2, width: 228.3, height: 50.3 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3 }}
		zIndex={6}
		animate="fade"
	>
		Ezekiel 18:4 <br/> Ephesians 2:1-2
	</Fragment>

	<!-- Step 9-11: "Separation?" for Spiritual -->
	<Fragment
		step={9}
		layout={{ x: 360.8, y: 258.1, width: 196.1, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={17}
		animate="fade"
	>
		Separation?
	</Fragment>

	<!-- Step 10: "Soul / God" for Spiritual -->
	<Fragment
		step={10}
		layout={{ x: 367.7, y: 293.1, width: 182.1, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={18}
		animate="fade"
	>
		Soul / God
	</Fragment>

	<!-- Step 11: "Spiritual Death" title -->
	<Fragment
		step={11}
		layout={{ x: 341.2, y: 103, width: 235.0, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45.0, bold: true }}
		zIndex={9}
		animate="fade"
	>
		Spiritual<br/>Death
	</Fragment>

	<!-- Step 12: Red column (Eternal Death) -->
	<Fragment step={12} animate="wipe-down">
		<Rect x={585.8} y={101.4} width={271.4} height={240} fill="var(--bg-danger)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<!-- Step 12.1: Revelation 20:14-15, 21:6-8 -->
	<Fragment
		step={12.1}
		drillTo="sin-and-death/revelation-20-14"
		layout={{ x: 589.8, y: 197.2, width: 264.4, height: 50.3 }}
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
		layout={{ x: 630.9, y: 258.1, width: 182.1, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={19}
		animate="fade"
	>
		Separation?
	</Fragment>

	<!-- Step 14: "Soul / God" for Eternal -->
	<Fragment
		step={14}
		layout={{ x: 634.5, y: 293.1, width: 175.0, height: 28.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8 }}
		zIndex={20}
		animate="fade"
	>
		Soul / God
	</Fragment>

	<!-- Step 15: "Eternal Death" title -->
	<Fragment
		step={15}
		layout={{ x: 614.7, y: 103, width: 214.6, height: 92 }}
		font={{ v_align: 'middle', align: 'center', font_size: 45.0, bold: true }}
		zIndex={10}
		animate="fade"
	>
		Eternal<br/>Death
	</Fragment>

	<!-- Step 16: "Difference?" -->
	<Fragment
		step={16}
		layout={{ x: 460, y: 325, width: 203.0, height: 23.9 }}
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
		layout={{ x: 315.3, y: 330, width: 271.4, height: 100 }}
		line={{ width: [0, 1, 1, 1], color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'middle', align: 'center', font_size: 30.8, italic: true, wrap: true }}
		zIndex={1}
		fill="var(--bg-cmd-law)"
		animate="wipe-down"
	>
		Changeable<br/><span style="font-size: 0.7em">"You formerly walked"</span>
	</Fragment>

	<!-- Step 16.3: "Permanent" -->
	<Fragment
		step={17.1}
		layout={{ x: 585.8, y: 340, width: 271.4, height: 150 }}
		line={{ width: [0, 1, 1, 1], color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'top', align: 'center', font_size: 30.8, italic: true, wrap: true }}
		zIndex={1}
		fill="var(--bg-danger)"
		animate="fade"
	>
		Permanent<br/><span style="font-size: 0.7em">"It is done"</span>
	</Fragment>

	<!-- Step 18: Nature of Death -->
	<Fragment
		step={18}
		layout={{ x: 70, y: 340, width: 225, height: 30 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 30.8 }}
		zIndex={24}
		animate="fade"
	>
		Nature of Death:
	</Fragment>

	<!-- Step 19: "Process Genesis 3:19" -->
	<Fragment
		step={19}
		drillTo="sin-and-death/death-states"
		layout={{ x: 98.1, y: 359.2, width: 206.6, height: 73.3 }}
		line={{ width: 1 }}
		font={{ font_size: 33.3 }}
		zIndex={25}
		animate="fade"
	>
		Process<br/>Genesis 3:19
	</Fragment>

	<!-- Step 19.1: "Event Ezekiel 18:4" -->
	<Fragment
		step={19.1}
		layout={{ x: 98.1, y: 416.6, width: 193.8, height: 79.2 }}
		line={{ width: 1 }}
		font={{ font_size: 33.3, color: '#FF8000' }}
		zIndex={26}
		animate="fade"
	>
		Event<br/>Ezekiel 18:4
	</Fragment>

	<!-- Step 19.2: "State Ephesians 2:1" -->
	<Fragment
		step={19.2}
		layout={{ x: 98.1, y: 472.9, width: 189.1, height: 66.1 }}
		line={{ width: 1 }}
		font={{ font_size: 33.3, color: 'var(--bg-cmd-law)' }}
		zIndex={27}
		animate="fade"
	>
		State<br/>Ephesians 2:1
	</Fragment>

	<!-- Step 20: Matthew 8:21-22 -->
	<Fragment
		step={20}
		drillTo="sin-and-death/matthew-8-21"
		layout={{ x: 320.3, y: 440.4, width: 246.1, height: 45.0 }}
		line={{ width: 1 }}
		font={{ font_size: 30.0 }}
		zIndex={28}
		animate="fade"
	>
		Matthew 8:21-22
	</Fragment>

	<!-- Step 21: "How can dead people bury dead people?" -->
	<Fragment
		step={21}
		layout={{ x: 320.7, y: 482.2, width: 463.9, height: 30.6 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 23.3, italic: true }}
		zIndex={29}
		animate="fade"
	>
		How can dead people bury dead people?
	</Fragment>
</Slide>
