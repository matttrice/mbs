<script lang="ts">

	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 2: Law Violations = One Result
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 26 animation steps covering Moral vs Commandment violations,
	 * Faith/Grace column, and various scripture references
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/05-Law/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: "Law Violations = One Result" -->
	<Fragment
		layout={{ x: 44.7, y: 4.6, width: 477.6, height: 44.4 }}
		font={{ font_size: 33.3, bold: true }}
		zIndex={2}
	>
		Law Violations = One Result
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE (26 Steps) ===== -->

	<!-- Step 1: Moral Law Rectangle (gray box) -->
	<Fragment step={1} animate="wipe-down">
		<Rect x={82.6} y={116.7} width={206.1} height={277.4} fill="var(--color-level1)" stroke={{ width: 1, color: '#000000' }} zIndex={3} />
	</Fragment>

	<!-- Step 1 (with): "Moral" label -->
	<Fragment
		step={1}
		layout={{ x: 120.3, y: 110.8, width: 134.9, height: 61.4 }}
		font={{ font_size: 48 }}
		zIndex={10}
	>
		Moral
	</Fragment>

	<!-- Step 1 (with): "Awen" - twisted, distorted, ugly -->
	<Fragment
		step={1}
		layout={{ x: 113.2, y: 160.9, width: 144.9, height: 147.3 }}
		font={{ font_size: 30, align: 'center', wrap: true }}
		zIndex={4}
	>
		"Awen"<br/>twisted, distorted, ugly
	</Fragment>

	<!-- Step 2: Arrow down -->
	<Fragment step={2} animate="wipe-down">
		<Arrow from={{ x: 186.1, y: 309.5 }} to={{ x: 186.1, y: 350.7 }} stroke={{ width: 8 }} zIndex={5} />
	</Fragment>

	<!-- Step 2.1: "Death" text -->
	<Fragment
		step={2.1}
		layout={{ x: 109.9, y: 328.8, width: 151.6, height: 66.6 }}
		font={{ font_size: 48.3, align: 'center' }}
		zIndex={8}
	>
		Death
	</Fragment>

	<!-- Step 3: Commandment Law Rectangle (orange box) -->
	<Fragment step={3} animate="wipe-down">
		<Rect x={53.2} y={46.4} width={466.7} height={493.6} fill="var(--color-bg-cmd-law)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={0} />
	</Fragment>

	<!-- Step 3 (with): "Command" label -->
	<Fragment
		step={3}
		layout={{ x: 240, y: 54.9, width: 279.7, height: 61.4 }}
		font={{ font_size: 48, align: 'center', bold: true }}
		zIndex={11}
	>
		Command
	</Fragment>

	<!-- Step 3 (with): "Pesha" - stubborn, rebellious -->
	<Fragment
		step={3}
		layout={{ x: 321.6, y: 128.9, width: 155.4, height: 115 }}
		font={{ font_size: 30, align: 'center', wrap: true }}
		zIndex={6}
	>
		"Pesha"<br/>stubborn, rebellious
	</Fragment>

	<!-- Step 4: Arrow down for Commandment -->
	<Fragment step={4} animate="wipe-down">
		<Arrow from={{ x: 399.2, y: 254.2 }} to={{ x: 399.2, y: 348.4 }} stroke={{ width: 8 }} zIndex={7} />
	</Fragment>

	<!-- Step 4.1: "Death" text (right side) -->
	<Fragment
		step={4.1}
		layout={{ x: 323.5, y: 330, width: 151.4, height: 66.4 }}
		font={{ font_size: 48.3, align: 'center' }}
		zIndex={9}
	>
		Death
	</Fragment>

	<!-- Step 5: "Sin causes death. Law brings wrath. Romans 4:15" (drill) -->
	<Fragment
		step={5}
		drillTo="law/romans-4-14"
		layout={{ x: 129.4, y: 410.7, width: 310.1, height: 115.4 }}
		font={{ font_size: 30, align: 'center', wrap: true }}
		zIndex={12}
	>
		Sin causes death.<br/>Law brings wrath. <br/>Romans 4:15
	</Fragment>

	<!-- Step 6: Romans 6:11-14 (drill) -->
	<Fragment
		step={6}
		drillTo="law/romans-6-11"
		layout={{ x: 608.8, y: 62.2, width: 269.1, height: 40.9 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={13}
	>
		Romans 6:11-14
	</Fragment>

	<!-- Step 6 (with): Faith/Grace Rectangle (blue box) -->
	<Fragment step={6} animate="wipe-down">
		<Rect x={558.4} y={0} width={369.8} height={540} fill="var(--color-level2)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={1} />
	</Fragment>

	<!-- Step 6 (with): "Faith / Grace" title -->
	<Fragment
		step={6}
		layout={{ x: 575, y: 7.8, width: 336.4, height: 58.6 }}
		font={{ font_size: 45, align: 'center', bold: true }}
		zIndex={16}
	>
		<u>Faith / Grace</u>
	</Fragment>

	<!-- Step 7: Quote from Romans 6:14 -->
	<Fragment
		step={7}
		layout={{ x: 590, y: 100, width: 300, height: 82 }}
		font={{ font_size: 20, wrap: true }}
		zIndex={14}
	>
		For sin shall no longer be your master, because you are <strong><u>not under the law, but under grace</u></strong>
	</Fragment>

	<!-- Step 7 (with): Arrow down to Faith/Grace section -->
	<Fragment step={7} animate="wipe-down">
		<Arrow from={{ x: 590, y: 170 }} to={{ x: 455, y: 399.9 }} stroke={{ width: 5 }} zIndex={24} />
	</Fragment>

	<!-- Step 7.1: "Law of Sin & Death" box -->
	<Fragment
		step={7.1}
		layout={{ x: 120, y: 402.4, width: 354.8, height: 48.8 }}
		font={{ font_size: 33.3, align: 'center', color: 'var(--color-bg-cmd-law)' }}
		fill="var(--color-bg-darkest)"
		line={{ color: 'var(--color-stroke-dark)' }}
		zIndex={23}
	>
		Law of Sin & Death
	</Fragment>

	<!-- Step 8: 2 Corinthians 5:17 (drill) -->
	<Fragment
		step={8}
		drillTo="law/2corinthians-5-18"
		layout={{ x: 605, y: 182, width: 276, height: 44 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={20}
	>
		2 Corinthians 5:17
	</Fragment>

	<!-- Step 9: "God not counting men's sins against them..." -->
	<Fragment
		step={9}
		layout={{ x: 582, y: 213.3, width: 322.6, height: 65.4 }}
		font={{ font_size: 16.7, wrap: true }}
		zIndex={15}
	>
		God not counting men's sins against them. Ambassadors for Christ. Diplomatic Immunity – grace period
	</Fragment>

	<!-- Step 10: Romans 3:19 (drill) -->
	<Fragment
		step={10}
		drillTo="law/romans-3-19-nasb"
		layout={{ x: 602.9, y: 286.6, width: 280.9, height: 32.1 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle' }}
		zIndex={22}
	>
		Romans 3:19
	</Fragment>

	<!-- Step 11: "Justified – Not under the law..." -->
	<Fragment
		step={11}
		layout={{ x: 593.2, y: 300, width: 300.2, height: 78.3 }}
		font={{ font_size: 20, align: 'center', italic: true, wrap: true }}
		zIndex={17}
	>
		Justified – Not under the law, still upholding (establishing) the law
	</Fragment>

	<!-- Step 11.1: Horizontal arrow -->
	<Fragment step={11.1} animate="wipe-left">
		<Arrow to={{ x: 522.2, y: 330 }} from={{ x: 593.2, y: 330 }} stroke={{ width: 8 }} zIndex={25} />
	</Fragment>

	<!-- Step 12: 1 Corinthians 6:9 (drill) -->
	<Fragment
		step={12}
		drillTo="law/1corinthians-6-9"
		layout={{ x: 605.2, y: 377.6, width: 276.1, height: 44.1 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={21}
	>
		1 Corinthians 6:9
	</Fragment>

	<!-- Step 13: "Everything is permissible [lawful]..." -->
	<Fragment
		step={13}
		layout={{ x: 587.5, y: 403.6, width: 311.6, height: 55.5 }}
		font={{ font_size: 20, align: 'center', italic: true }}
		zIndex={18}
	>
		Everything is permissible [lawful]<br/>but not all is beneficial
	</Fragment>

	<!-- Step 14: "I thought everyone was/is a sinner?" (drill) -->
	<Fragment
		step={14}
		drillTo="law/sinners-vs-freedom"
		layout={{ x: 605.2, y: 461, width: 276.1, height: 59.8 }}
		font={{ font_size: 20, align: 'center', italic: true }}
		fill="var(--color-bg-ghost)"
		zIndex={27}
	>
		"I thought everyone<br/>was/is a sinner ?"
	</Fragment>

	<!-- Step 15: Hebrews 7:11 (change of law) (drill) -->
	<Fragment
		step={15}
		drillTo="law/hebrews-7-11"
		layout={{ x: 46.6, y: 41.9, width: 176.5, height: 67.4 }}
		font={{ font_size: 24, align: 'center' }}
		fill="var(--color-level2)"
		zIndex={26}
	>
		Hebrews 7:11<br/>(change of law)
	</Fragment>
</Slide>
