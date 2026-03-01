<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Circle, Line, Path, Rect } from '$lib/components/svg';

	/**
	 * Slide 4: Man - Soul, Spirit, Body characteristics and Trinity analogy
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 33 animation steps covering characteristics of Soul, Spirit, Body
	 * Comparison with God (Father, Son, Holy Spirit)
	 * Freud and Harris psychological parallels
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/04-Life/Slide4.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	
	<!-- Blue background for left side -->
	<Rect x={60} y={0} width={554.1} height={540} fill="var(--bg-level-2)" zIndex={0} />

	<!-- Title: Man -->
	<Fragment
		layout={{ x: 132.9, y: 7.8, width: 141.4, height: 44.8 }}
		font={{ font_size: 52.5, v_align: 'middle', bold: true, color: 'var(--text-level-0)' }}
		zIndex={40}
	>
		<strong>Man</strong>
	</Fragment>

	<!-- Subtitle: (Made in the image of God) -->
	<Fragment
		layout={{ x: 73.6, y: 50, width: 271.4, height: 33.3 }}
		font={{ font_size: 20, italic: true }}
		zIndex={19}
	>
		(Made in the image of God)
	</Fragment>

	<!-- Hebrews 4:12 link (static with drill) -->
	<Fragment
		drillTo="life/hebrews-4-12"
		layout={{ x: 355.2, y: 5.7, width: 254.6, height: 48.5 }}
		font={{ font_size: 35, bold: true, align: 'center'}}
		fill="var(--bg-ghost)"
		zIndex={39}
	>
		Hebrews 4:12
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (33 Steps) ========== -->

	<!-- Step 1: "Soul" header -->
	<Fragment
		step={1}
		layout={{ x: 140.5, y: 76.7, width: 129.5, height: 42.9 }}
		font={{ font_size: 45, bold: true, color: 'var(--text-level-3)' }}
		zIndex={9}
	>
		Soul
	</Fragment>

	<!-- Step 2: Soul characteristics -->
	<Fragment
		step={2}
		layout={{ x: 87, y: 109, width: 384.7, height: 90.2 }}
		font={{ font_size: 23.3, wrap: true }}
		zIndex={12}
	>
		Think, Reason, Choose<br/>Judge, Plan, Create, Progress,<br/>Logic, Rational.
	</Fragment>

	<!-- Step 3: "Spirit" header -->
	<Fragment
		step={3}
		layout={{ x: 131.4, y: 188.6, width: 148.4, height: 62.7 }}
		font={{ font_size: 45, bold: true, color: 'var(--text-level-3)' }}
		line={{ width: 0.8 }}
		zIndex={10}
	>
		Spirit
	</Fragment>

	<!-- Step 4: Jude 1:10 (drill) -->
	<Fragment
		step={4}
		drillTo="life/jude-1-10"
		layout={{ x: 85.2, y: 247.2, width: 120, height: 34.3 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={13}
	>
		Jude 1:10
	</Fragment>

	<!-- Step 5: 2 Peter 2:12 (drill) -->
	<Fragment
		step={5}
		drillTo="life/2peter-2-12"
		layout={{ x: 206.6, y: 247.2, width: 132.7, height: 34.3 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={14}
	>
		2 Peter 2:12
	</Fragment>

	<!-- Step 6: Spirit characteristics -->
	<Fragment
		step={6}
		layout={{ x: 90.4, y: 274.1, width: 349.9, height: 32.7 }}
		font={{ font_size: 23.3 }}
		zIndex={6}
	>
		Unreason, Instinct, basic emotions
	</Fragment>

	<!-- Step 7: Animals list -->
	<Fragment
		step={7}
		layout={{ x: 93.6, y: 301.9, width: 169.6, height: 26.1 }}
		font={{ font_size: 16.7 }}
		zIndex={15}
	>
		Deer, Cats, Humans…
	</Fragment>

	<!-- Step 8: "*also life to body" -->
	<Fragment
		step={8}
		layout={{ x: 253.8, y: 302.8, width: 128.3, height: 25.9 }}
		font={{ font_size: 16.7 }}
		zIndex={1}
	>
		*also life to body
	</Fragment>

	<!-- Step 9: Sympathetic "fight or flight" -->
	<Fragment
		step={9}
		layout={{ x: 246.9, y: 334.6, width: 136.1, height: 54.6 }}
		font={{ font_size: 20 }}
		zIndex={16}
	>
		Sympathetic<br/>"fight or flight"
	</Fragment>

	<!-- Step 9 (with): Parasympathetic "rest & digest" -->
	<Fragment
		step={9}
		layout={{ x: 87.5, y: 333.2, width: 163.7, height: 54.2 }}
		font={{ font_size: 20 }}
		zIndex={17}
	>
		Parasympathetic<br/>"rest & digest"
	</Fragment>

	<!-- Step 10: Proverbs 16:32 (drill) -->
	<Fragment
		step={10}
		drillTo="life/proverbs-16-32"
		layout={{ x: 384.1, y: 299.3, width: 172.8, height: 34.2 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={7}
	>
		Proverbs 16:32
	</Fragment>

	<!-- Step 11: "Body" header -->
	<Fragment
		step={11}
		layout={{ x: 138.3, y: 391.6, width: 146.3, height: 62.9 }}
		font={{ font_size: 45, bold: true }}
		line={{ width: 0.8 }}
		zIndex={11}
	>
		Body
	</Fragment>

	<!-- Step 12: Body characteristics -->
	<Fragment
		step={12}
		layout={{ x: 96.6, y: 443.1, width: 264.1, height: 83.9 }}
		font={{ font_size: 23.3, wrap: true }}
		zIndex={3}
	>
		Structure, boundary,<br/>house, governs, restricts
	</Fragment>

	<!-- Step 13: Greek & Hebrew Definitions (drill) -->
	<Fragment
		step={13}
		drillTo="life/greek-hebrew-soul-spirit"
		layout={{ x: 289.8, y: 186, width: 187.9, height: 64.2 }}
		font={{ font_size: 23.3, align: 'center' }}
		fill="var(--bg-ghost)"
		line={{ width: 0.8, color: 'var(--stroke-level-0)' }}
		zIndex={18}
	>
		Greek & Hebrew<br/>Definitions
	</Fragment>

	<!-- Step 14: 1Corinthians 5:5 (drill) -->
	<Fragment
		step={14}
		drillTo="life/1corinthians-5-5"
		layout={{ x: 358.4, y: 400, width: 260, height: 118.5 }}
		font={{ font_size: 26.7, align: 'center', wrap: true }}
		zIndex={5}
	>
		<strong>1 Corinthians 5:5</strong> "spirit may be saved"<br/><strong>John 4:24</strong><br/>"God is spirit"
	</Fragment>

	<!-- Step 15: Dashed line divider -->
	<Fragment step={15} animate="draw">
		<Line from={{ x: 60, y: 394.1 }} to={{ x: 612, y: 394.1 }} stroke={{ width: 4, color: 'var(--stroke-level-0)', dash: '16,6' }} zIndex={4} />
	</Fragment>

	<!-- Step 15 (with): Body section background -->
	<Fragment step={15} animate="wipe-down">
		<Rect x={81.1} y={394} width={286.4} height={138} fill="var(--bg-level-1)" zIndex={2} />
	</Fragment>

	<!-- Step 15.1 (with): Thought-bubble tail from 1 Corinthians 5:5 -->
	<Fragment step={15.1}>
		<Circle cx={568} cy={399} r={3.2} fill="var(--bg-ghost)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={9} />
		<Circle cx={562} cy={392} r={5} fill="var(--bg-ghost)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={9} />
		<Circle cx={552} cy={383} r={7.2} fill="var(--bg-ghost)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={9} />
	</Fragment>

	<!-- Step 15.1: Cloud callout - Spirit description -->
	<Fragment
		step={15.1}
		layout={{ x: 416, y: 247, width: 168, height: 148 }}
		zIndex={8}
	>
		<Path
			d="M 30,116 C 16,116 8,104 10,90 C 4,78 10,60 24,54 C 28,36 42,24 60,26 C 70,12 88,8 102,18 C 118,10 136,16 144,30 C 154,34 162,50 158,66 C 166,80 162,100 146,110 C 142,128 124,140 106,136 C 90,146 70,146 56,136 C 42,140 28,132 22,120 C 16,120 12,118 10,114 C 8,108 20,116 30,116 Z"
			fill="var(--bg-ghost)"
			stroke={{ width: 1, color: 'var(--stroke-level-0)' }}
			zIndex={8}
		/>
	</Fragment>

	<Fragment
		step={15.1}
		layout={{ x: 431, y: 286, width: 138, height: 83 }}
		font={{ font_size: 12, v_align: 'middle', align: 'center', wrap: true }}
		zIndex={10}
	>
		Invisible part.<br/>1. Ingredient of animal and human life.<br/>2. Collective invisible nature of life.
	</Fragment>

	<!-- Step 16: "God" header -->
	<Fragment
		step={16}
		layout={{ x: 705.1, y: 0, width: 119.6, height: 53.6 }}
		font={{ bold: true,font_size: 52.5, align: 'center', color: 'var(--text-level-3)' }}
		zIndex={20}
	>
		<strong>God</strong>
	</Fragment>

	<!-- Step 17: "Father" -->
	<Fragment
		step={17}
		layout={{ x: 657.1, y: 62.8, width: 215.6, height: 62.7 }}
		font={{ bold: true, font_size: 45, align: 'center', color: 'var(--text-level-3)' }}
		zIndex={33}
	>
		Father
	</Fragment>

	<!-- Step 18: Father characteristics -->
	<Fragment
		step={18}
		layout={{ x: 654.6, y: 109, width: 222.3, height: 86.7 }}
		font={{ align: 'center', font_size: 23.3, color: 'var(--text-level-3)', wrap: true }}
		zIndex={21}
	>
		Creator, Designer, Planner, progressive, dominant
	</Fragment>

	<!-- Step 19: "Son" -->
	<Fragment
		step={19}
		layout={{ x: 706.9, y: 198.3, width: 116.1, height: 62.7 }}
		font={{ bold: true, font_size: 45, color: 'var(--text-level-0)' }}
		zIndex={35}
	>
		Son
	</Fragment>

	<!-- Step 20: Son characteristics -->
	<Fragment
		step={20}
		layout={{ x: 644.6, y: 246.1, width: 252.6, height: 123.1 }}
		font={{ align: 'center', font_size: 23.3, color: 'var(--text-level-3)', wrap: true }}
		zIndex={22}
	>
		Word governs the Church which is the body of Christ – rules, regulations, restrictions
	</Fragment>

	<!-- Step 21: "Holy Spirit" -->
	<Fragment
		step={21}
		layout={{ x: 631.6, y: 366.4, width: 266.8, height: 62.7 }}
		font={{ bold: true, font_size: 45, color: 'var(--text-level-3)' }}
		zIndex={34}
	>
		Holy Spirit
	</Fragment>

	<!-- Step 22: Holy Spirit characteristics (drill) -->
	<Fragment
		step={22}
		drillTo="life/1corinthians-6-15"
		layout={{ x: 644.6, y: 420, width: 255.2, height: 107.5 }}
		font={{ align: 'center', font_size: 23.3, color: 'var(--text-level-3)', wrap: true }}
		zIndex={23}
	>
		Implementation of His will - life to the body of Christ. Defies logic.
	</Fragment>

	<!-- Step 23: Arrow Soul→Father -->
	<Fragment step={23} animate="wipe">
		<Arrow from={{ x: 260.2, y: 100.2 }} to={{ x: 689.9, y: 100.3 }} stroke={{ width: 6, color: 'var(--text-level-3)' }} zIndex={24} />
	</Fragment>

	<!-- Step 24: Arrow Spirit→Body (of Christ) -->
	<Fragment step={24} animate="wipe">
		<Arrow from={{ x: 263, y: 233.1 }} to={{ x: 761.4, y: 378.3 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={25} />
	</Fragment>

	<!-- Step 25: Arrow Spirit→Holy Spirit -->
	<Fragment step={24.1} animate="wipe">
		<Arrow from={{ x: 267.7, y: 215 }} to={{ x: 652.4, y: 389.1 }} stroke={{ width: 6, color: 'var(--text-level-3)' }} zIndex={26} />
	</Fragment>

	<Fragment step={25} animate="wipe">
		<Arrow from={{ x: 271.7, y: 427 }} to={{ x: 712.4, y: 231 }} stroke={{ width: 6, color: 'var(--text-level-0)' }} zIndex={26} />
	</Fragment>

	<!-- Step 26: Freud box -->
	<Fragment
		step={26}
		layout={{ x: 498.1, y: 92.4, width: 127.1, height: 128.4 }}
		font={{ font_size: 23.3, align: 'center' }}
		fill="var(--bg-level-1)"
		line={{ width: 0.8 }}
		zIndex={27}
	>
		Freud<br/>Id<br/>Ego<br/>Superego
	</Fragment>

	<!-- Step 26 (with): "3 parts identified by many" -->
	<Fragment
		step={26}
		layout={{ x: 389.8, y: 59.4, width: 220.8, height: 26.3 }}
		font={{ font_size: 16.7 }}
		zIndex={41}
	>
		3 parts identified by many
	</Fragment>

	<!-- Step 27: Arrow Freud Superego→Son -->
	<Fragment step={27} animate="wipe-left">
		<Arrow from={{ x: 507.6, y: 192.8 }} to={{ x: 266.6, y: 109.7 }} stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={29} />
	</Fragment>

	<!-- Step 28: Arrow Freud Id→Holy Spirit area -->
	<Fragment step={28} animate="wipe-left">
		<Arrow from={{ x: 540.6, y: 143.5 }} to={{ x: 270.2, y: 209.3 }} stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={30} />
	</Fragment>

	<!-- Step 29: Arrow Freud Ego→Father -->
	<Fragment step={29} animate="wipe-left">
		<Arrow from={{ x: 538.4, y: 172.8 }} to={{ x: 264.8, y: 407.6 }} stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={36} />
	</Fragment>

	<!-- Step 30: Harris box -->
	<Fragment
		step={30}
		layout={{ x: 498.1, y: 224.3, width: 126.1, height: 123.8 }}
		font={{ font_size: 23.3, align: 'center' }}
		fill="var(--bg-level-1)"
		line={{ width: 0.8 }}
		zIndex={28}
	>
		Harris<br/>Parent<br/>Adult<br/>Child
	</Fragment>

	<!-- Step 31: Arrow Harris Parent→Child -->
	<Fragment step={31} animate="wipe-left">
		<Arrow from={{ x: 528.7, y: 325.6 }} to={{ x: 270.8, y: 225.9 }} stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={31} />
	</Fragment>

	<!-- Step 32: Arrow Harris Adult→Body -->
	<Fragment step={32} animate="wipe-left">
		<Arrow from={{ x: 523.6, y: 264.1 }} to={{ x: 255.3, y: 110.8 }}  stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={37} />
	</Fragment>

	<!-- Step 33: Arrow Harris Child→Spirit -->
	<Fragment step={33} animate="wipe-left">
		<Arrow from={{ x: 530.8, y: 298.6 }} to={{ x: 275.6, y: 412 }} stroke={{ width: 3.5, color: 'var(--stroke-level-0)' }} zIndex={32} />
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components inside Fragment */
</style>
