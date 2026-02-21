<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect, Arrow, Line } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<ReferenceOverlay src="/export/06-Sin_Death/Slide3.png" />

	<!-- Static Content -->
	<!-- Gray left column -->
	<Rect x={73.9} y={0} width={287.1} height={382.5} fill="var(--bg-level-1)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={0} />

	<!-- Orange right column -->
	<Rect x={606.1} y={0} width={280} height={402} fill="var(--bg-cmd-law)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={2} />

	<!-- Title: "Original Sin" -->
	<Fragment
		layout={{ x: 334.1, y: 0, width: 298.9, height: 59.2 }}
		fill="var(--bg-ghost)"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		font={{ align: 'center', font_size: 39.2, bold: true, color: 'var(--text-level-0)' }}
		zIndex={40}
	>
		"Original Sin"
	</Fragment>

	<!-- Animated Content -->
	<!-- Step 1: Psalms 58:3 -->
	<Fragment
		step={1}
		drillTo="sin-and-death/psalms-58-3"
		layout={{ x: 116.9, y: 16.9, width: 174.2, height: 31.8 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={4}
	>
		Psalms 58:3
	</Fragment>

	<!-- Step 2: Genesis 8:21 -->
	<Fragment
		step={2}
		drillTo="sin-and-death/genesis-8-21"
		layout={{ x: 116.1, y: 46.9, width: 175, height: 30.1 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={5}
	>
		Genesis 8:21
	</Fragment>

	<!-- Step 3: Psalms 51:5 -->
	<Fragment
		step={3}
		drillTo="sin-and-death/psalms-51-5"
		layout={{ x: 116.9, y: 76.9, width: 174.2, height: 33.4 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={6}
	>
		Psalms 51:5
	</Fragment>

	<!-- Step 3 with: Horizontal line under left column -->
	<Fragment step={3} animate="draw">
		<Line from={{ x: 116.1, y: 120 }} to={{ x: 298.1, y: 120 }} stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={41} />
	</Fragment>

	<!-- Step 4: Arrow pointing right with "Compare to" -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 304.2, y: 83.5 }} to={{ x: 613, y: 83.5 }} stroke={{ width: 13.3 }} zIndex={10} />
	</Fragment>

	<!-- Step 4 with: "Compare to" box -->
	<Fragment
		step={4}
		layout={{ x: 325.4, y: 65.2, width: 178.8, height: 35.9 }}
		fill="var(--bg-ghost)"
		line={{ width: 1.3, color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'middle', font_size: 26.7, italic: true }}
		zIndex={11}
		animate="fade"
	>
		Compare to
	</Fragment>

	<!-- Step 4.1: Duet. 1:39 -->
	<Fragment
		step={4.1}
		drillTo="sin-and-death/deuteronomy-1-39"
		layout={{ x: 676.1, y: 19.4, width: 153.9, height: 30.6 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={7}
	>
		Duet. 1:39
	</Fragment>

	<!-- Step 5: Isaiah 7:14-16 -->
	<Fragment
		step={5}
		drillTo="sin-and-death/isaiah-7-14"
		layout={{ x: 662, y: 49.4, width: 210, height: 32.7 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={9}
	>
		Isaiah 7:14-16
	</Fragment>

	<!-- Step 6: Psalms 139:14-15 -->
	<Fragment
		step={6}
		drillTo="sin-and-death/psalms-139-14"
		layout={{ x: 620, y: 79.4, width: 258.9, height: 36 }}
		font={{ bold: true, v_align: 'middle', font_size: 26.7 }}
		zIndex={8}
	>
		Psalms 139: 14-15
	</Fragment>

	<!-- Step 6.1: Horizontal line under right column -->
	<Fragment step={6.1} animate="draw">
		<Line from={{ x: 655, y: 120.1 }} to={{ x: 837, y: 120.1 }} stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={42} />
	</Fragment>

	<!-- Step 7: "Contradiction?" -->
	<Fragment
		step={7}
		layout={{ x: 361.1, y: 91.9, width: 237.9, height: 42 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', align: 'center', font_size: 21.7 }}
		zIndex={12}
		animate="fade"
	>
		Contradiction?
	</Fragment>

	<!-- Step 8: Psalms 51:5-6 -->
	<Fragment
		step={8}
		drillTo="sin-and-death/psalms-51-5-6"
		layout={{ x: 387.6, y: 120, width: 202.4, height: 41.5 }}
		line={{ width: 1.3 }}
		font={{ font_size: 26.7 }}
		zIndex={13}
		animate="fade"
	>
		Psalms 51:5-6
	</Fragment>

	<!-- Step 9: "Innermost being" -->
	<Fragment
		step={9}
		layout={{ x: 633.9, y: 130.4, width: 238, height: 17.9 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 26.7, italic: true }}
		zIndex={14}
		animate="fade"
	>
		"Innermost being"
	</Fragment>

	<!-- Step 10: "hidden part" -->
	<Fragment
		step={10}
		layout={{ x: 665.5, y: 148.3, width: 175, height: 30 }}
		line={{ width: 1 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={15}
		animate="fade"
	>
		"hidden part"
	</Fragment>

	<!-- Step 11: Internal interpretation -->
	<Fragment
		step={11}
		layout={{ x: 384.5, y: 158, width: 200, height: 60 }}
		font={{ align: 'center', bold: true, font_size: 26, italic: true, wrap: true }}
		zIndex={16}
	>
		Internal interpretation
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 359.5, y: 212, width: 248.6, height: 25 }}
		font={{ align: 'center', font_size: 15, italic: true }}
		zIndex={16}
	>
		Where are like phrases?
	</Fragment>

	<!-- Step 12: Romans 7:14-25 -->
	<Fragment
		step={12}
		drillTo="sin-and-death/romans-7-14"
		layout={{ x: 92.7, y: 117.6, width: 228.6, height: 36.1 }}
		line={{ width: 1.3 }}
		font={{ font_size: 26.7 }}
		zIndex={17}
		animate="fade"
	>
		Romans 7:14-25
	</Fragment>

	<!-- Step 13: "inner man" v.s. "flesh" -->
	<Fragment
		step={13}
		layout={{ x: 73.9, y: 143.3, width: 280, height: 30 }}
		line={{ width: 1 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={18}
		animate="fade"
	>
		"inner man" v.s."flesh"
	</Fragment>

	<!-- Step 14: 1Peter 3:1-4 -->
	<Fragment
		step={14}
		drillTo="sin-and-death/1-peter-3-1"
		layout={{ x: 669.5, y: 190.9, width: 176.9, height: 30 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7 }}
		zIndex={19}
		animate="fade"
	>
		1Peter 3:1-4
	</Fragment>

	<!-- Step 15: "hidden person" -->
	<Fragment
		step={15}
		layout={{ x: 644.5, y: 213.9, width: 217, height: 36.1 }}
		line={{ width: 1 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={20}
	>
		"hidden person"
	</Fragment>

	<!-- Step 16: "Why do we die?" -->
	<Fragment
		step={16}
		layout={{ x: 375.1, y: 235.9, width: 230.9, height: 35 }}
		line={{ width: 1 }}
		font={{ bold: true, font_size: 27.5, italic: true }}
		zIndex={21}
	>
		Why do we die?
	</Fragment>

	<!-- Step 17: Romans 8:10 -->
	<Fragment
		step={17}
		drillTo="sin-and-death/romans-8-10"
		layout={{ x: 114.8, y: 177, width: 191.4, height: 34.6 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', font_size: 26.7 }}
		zIndex={22}
		animate="fade"
	>
		Romans 8:10
	</Fragment>

	<!-- Step 18: Flesh dead because of sin -->
	<Fragment
		step={18}
		layout={{ x: 88, y: 203, width: 245, height: 65.9 }}
		line={{ width: 1 }}
		font={{ font_size: 21.7, italic: true }}
		zIndex={23}
		animate="fade"
	>
		Flesh dead because<br/>of sin. Where did the<br/>sin come from?
	</Fragment>

	<!-- Step 19: Definition of "flesh" -->
	<Fragment
		step={19}
		drillTo="sin-and-death/flesh"
		layout={{ x: 101.2, y: 273.3, width: 154.1, height: 60 }}
		line={{ width: 3, color: 'var(--stroke-level-0)' }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7 }}
		zIndex={29}
		animate="fade"
	>
		Definition of<br/>"flesh"
	</Fragment>

	<!-- Step 20: MORTALITY - Limited to flesh -->
	<Fragment
		step={20}
		layout={{ x: 277, y: 276.1, width: 203, height: 83.1 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 30.8 }}
		fill="var(--bg-level-1)"
		zIndex={24}
		animate="fade"
	>
		MORTALITY<br/>Limited to flesh
	</Fragment>

	<!-- Step 20: "Why does the inner man die?" -->
	<Fragment
		step={20.1}
		layout={{ x: 662, y: 318.4, width: 189.1, height: 48 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 21.7, italic: true }}
		zIndex={25}
		animate="fade"
	>
		Why does the<br/>"inner man" die?
	</Fragment>

	<!-- Step 21: James 4:17 / Ezekiel 18:4 -->
	<Fragment
		step={21}
		drillTo="sin-and-death/james-4-17"
		layout={{ x: 679.5, y: 261, width: 171.5, height: 60.8 }}
		line={{ width: 1.3 }}
		font={{ font_size: 26.7 }}
		zIndex={26}
		animate="fade"
	>
		James 4:17<br/>Ezekiel 18:4
	</Fragment>

	<!-- Step 22: "soul sins and dies" -->
	<Fragment
		step={22}
		layout={{ x: 657.6, y: 369.6, width: 200.2, height: 17.9 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 21.7, italic: true }}
		zIndex={27}
		animate="fade"
	>
		soul sins and dies
	</Fragment>

	<!-- Step 22.1: MORALITY - Limited to "inner man" (soul) -->
	<Fragment
		step={22.1}
		layout={{ x: 493.9, y: 282, width: 182.1, height: 96.1 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 30.8 }}
		zIndex={28}
		animate="fade"
	>
		MORALITY<br/>Limited to<br/>"inner man" (soul)
	</Fragment>

	<!-- Step 23: "Children" -->
	<Fragment
		step={23}
		layout={{ x: 73.9, y: 448.9, width: 155.4, height: 23.9 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', font_size: 30.8 }}
		zIndex={30}
		animate="fade"
	>
		Children
	</Fragment>

	<!-- Step 24: Matthew 18:1-4, 19:14, 2 Samuel 12:21 -->
	<Fragment
		step={24}
		drillTo="sin-and-death/matthew-18-1"
		layout={{ x: 73.6, y: 475.6, width: 317.1, height: 22.4 }}
		line={{ width: 1.3 }}
		font={{ font_size: 17.5 }}
		zIndex={31}
		animate="fade"
	>
		Matthew 18:1-4,19:14, 2 Samuel 12:21
	</Fragment>

	<!-- Step 25: What do children possess that adults should desire? -->
	<Fragment
		step={25}
		layout={{ x: 60, y: 424.1, width: 383.3, height: 29.4 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', align: 'center', italic: true }}
		zIndex={32}
		animate="fade"
	>
		What do children posses that adults should desire?
	</Fragment>

	<!-- Step 26: INNOCENCE -->
	<Fragment
		step={26}
		layout={{ x: 73.9, y: 489.9, width: 309.7, height: 48 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', font_size: 40 }}
		zIndex={35}
		animate="fade"
	>
		INNOCENCE
	</Fragment>

	<!-- Step 27: What is the purpose of baptism? -->
	<Fragment
		step={27}
		layout={{ x: 57.5, y: 357.9, width: 462, height: 67.7 }}
		fill="var(--bg-level-2)"
		font={{ align: 'center', font_size: 26.7, color: 'var(--text-level-3)' }}
		zIndex={33}
		animate="fade"
	>
		What is the purpose of baptism?
	</Fragment>

	<!-- Step 27.1: Acts 2:37-39, Acts 22:16 -->
	<Fragment
		step={27.1}
		drillTo="sin-and-death/acts-2-37"
		layout={{ x: 130, y: 393.3, width: 324.4, height: 26.7 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', font_size: 26.7 }}
		zIndex={34}
		animate="fade"
	>
		Acts 2:37-39, Acts 22:16
	</Fragment>

	<!-- Step 28: Forgiveness of sins. -->
	<Fragment
		step={28}
		layout={{ x: 498, y: 397.3, width: 388.1, height: 28.3 }}
		fill="var(--bg-level-2)"
		line={{ width: 1.3, color: 'var(--bg-level-2)' }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3, color: 'var(--text-level-3)' }}
		zIndex={43}
		animate="fade"
	>
		Forgiveness of sins.
	</Fragment>

	<!-- Step 29: Why baptize babies? -->
	<Fragment
		step={29}
		layout={{ x: 418.1, y: 495.7, width: 315, height: 32.6 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 30.8, italic: true }}
		zIndex={36}
		animate="fade"
	>
		Why baptize babies?
	</Fragment>

	<!-- Step 30: Scriptures Concerning Christ -->
	<Fragment
		step={30}
		layout={{ x: 645.9, y: 430.3, width: 242.1, height: 22 }}
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', font_size: 16.7 }}
		zIndex={37}
		animate="fade"
	>
		Scriptures Concerning Christ
	</Fragment>

	<!-- Step 31: Romans 8:3 / Phil. 2:6-7 / Hebrews references -->
	<Fragment
		step={31}
		drillTo="sin-and-death/romans-8-3"
		layout={{ x: 740.2, y: 450.3, width: 153.9, height: 83.8 }}
		line={{ width: 1.3 }}
		font={{ align: 'right', font_size: 16.7 }}
		zIndex={38}
		animate="fade"
	>
		Romans 8:3<br/>Phil. 2:6-7<br/>Hebrews 2:14-17<br/>Hebrews 4:15
	</Fragment>

	<!-- Step 32: Was Christ separated from God at birth? -->
	<Fragment
		step={32}
		layout={{ x: 396.7, y: 471.7, width: 367.2, height: 26.4 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 20, italic: true }}
		zIndex={39}
		animate="fade"
	>
		Was Christ separated from God at birth?
	</Fragment>

	<!-- Step 33: Vertical arrow pointing down -->
	<Fragment step={33} animate="wipe">
		<Arrow from={{ x: 481.6, y: 336.4 }} to={{ x: 481.6, y: 463 }} stroke={{ width: 13.3 }} zIndex={44} />
	</Fragment>
</Slide>
