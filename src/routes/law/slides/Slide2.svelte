<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Rect } from '$lib/components/svg';

	/**
	 * Slide 2: Law Violations = One Result
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Compares Law of Sin & Death vs Faith/Grace
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
	<ReferenceOverlay src="/export/05-Law/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title -->
	<Fragment
		layout={{ x: 45, y: 5, width: 478, height: 44 }}
		font={{ font_size: 53.3 }}
		zIndex={2}
	>
		Law Violations = One Result
	</Fragment>

	<!-- ===== ANIMATED CONTENT ===== -->
	
	<!-- Step 1: Moral Law gray box (click) -->
	<Fragment step={1} animate="fade">
		<Rect x={83} y={117} width={206} height={277} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={3} />
	</Fragment>

	<!-- Step 1: "Moral" text (with) -->
	<Fragment
		step={1}
		layout={{ x: 120, y: 111, width: 135, height: 61 }}
		font={{ font_size: 48 }}
		zIndex={10}
		animate="fade"
	>
		Moral
	</Fragment>

	<!-- Step 1: "Awen" definition (with) -->
	<Fragment
		step={1}
		layout={{ x: 113, y: 161, width: 145, height: 147 }}
		font={{ font_size: 56, align: 'center', wrap: true }}
		zIndex={4}
		animate="fade"
	>
		"Awen"<br/>twisted, distorted, ugly
	</Fragment>

	<!-- Step 2: Arrow down from Moral box (click) -->
	<Fragment step={2} animate="wipe">
		<Arrow from={{ x: 186.1, y: 309.5 }} to={{ x: 186.1, y: 350.7 }} stroke={{ width: 8, color: '#000000' }} zIndex={5} />
	</Fragment>

	<!-- Step 2.1: "Death" under Moral (after 500ms) -->
	<Fragment
		step={2.1}
		layout={{ x: 110, y: 329, width: 152, height: 67 }}
		font={{ font_size: 77.3, align: 'center' }}
		zIndex={8}
		animate="fade"
	>
		Death
	</Fragment>

	<!-- Step 3: Command Law orange box (click) -->
	<Fragment step={3} animate="fade">
		<Rect x={53} y={46} width={467} height={494} fill="#FD8017" stroke={{ color: '#000000', width: 8.3 }} zIndex={0} />
	</Fragment>

	<!-- Step 3: "Command" text (with) -->
	<Fragment
		step={3}
		layout={{ x: 259, y: 55, width: 280, height: 61 }}
		font={{ font_size: 48, align: 'center' }}
		zIndex={11}
		animate="fade"
	>
		Command
	</Fragment>

	<!-- Step 3: "Pesha" definition (with) -->
	<Fragment
		step={3}
		layout={{ x: 322, y: 129, width: 155, height: 115 }}
		font={{ font_size: 56, align: 'center', wrap: true }}
		zIndex={6}
		animate="fade"
	>
		"Pesha"<br/>stubborn, rebellious
	</Fragment>

	<!-- Step 4: Arrow down from Command box (click) -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 399.2, y: 254.2 }} to={{ x: 399.2, y: 348.4 }} stroke={{ width: 8, color: '#000000' }} zIndex={7} />
	</Fragment>

	<!-- Step 4.1: "Death" under Command (after 500ms) -->
	<Fragment
		step={4.1}
		layout={{ x: 324, y: 330, width: 151, height: 66 }}
		font={{ font_size: 77.3, align: 'center' }}
		zIndex={9}
		animate="fade"
	>
		Death
	</Fragment>

	<!-- Step 5: "Sin causes death. Law brings wrath" (click) - drillTo -->
	<Fragment
		step={5}
		drillTo="law/romans-4-14"
		layout={{ x: 129, y: 411, width: 310, height: 115 }}
		font={{ font_size: 48, align: 'center', wrap: true }}
		zIndex={12}
		animate="fade"
	>
		Sin causes death. Law brings wrath. Romans 4:15
	</Fragment>

	<!-- Step 6: Romans 6:11-14 (click) - drillTo -->
	<Fragment
		step={6}
		drillTo="law/romans-6-11"
		layout={{ x: 609, y: 62, width: 269, height: 41 }}
		font={{ font_size: 42.7, align: 'center' }}
		zIndex={13}
		animate="fade"
	>
		Romans 6:11-14
	</Fragment>

	<!-- Step 6: Faith/Grace blue box (with) -->
	<Fragment step={6} animate="fade">
		<Rect x={558} y={0} width={370} height={540} fill="var(--color-level2)" stroke={{ color: '#000000', width: 16 }} zIndex={1} />
	</Fragment>

	<!-- Step 6: "Faith / Grace" title (with) -->
	<Fragment
		step={6}
		layout={{ x: 575, y: 8, width: 336, height: 59 }}
		font={{ font_size: 72, align: 'center' }}
		zIndex={16}
		animate="fade"
	>
		Faith / Grace
	</Fragment>

	<!-- Step 7: "For sin shall no longer be your master..." (click) -->
	<Fragment
		step={7}
		layout={{ x: 582, y: 91, width: 323, height: 82 }}
		font={{ font_size: 32, wrap: true }}
		zIndex={14}
		animate="fade"
	>
		For sin shall no longer be your master, because you are not under the law, but under grace
	</Fragment>

	<!-- Step 7: Arrow from Law to Grace (with) -->
	<Fragment step={7} animate="wipe">
		<Arrow from={{ x: 527.3, y: 160.9 }} to={{ x: 527.3, y: 399.9 }} stroke={{ width: 8, color: '#000000' }} zIndex={24} />
	</Fragment>

	<!-- Step 7.1: "Law of Sin & Death" (after) -->
	<Fragment
		step={7.1}
		layout={{ x: 129, y: 402, width: 355, height: 49 }}
		font={{ font_size: 53.3, align: 'center', color: '#FD8017' }}
		fill="#333333"
		line={{ color: '#000000', width: 1 }}
		zIndex={23}
		animate="fade"
	>
		Law of Sin &amp; Death
	</Fragment>

	<!-- Step 8: 2 Corinthians 5:17 (click) - drillTo -->
	<Fragment
		step={8}
		drillTo="law/2corinthians-5-17"
		layout={{ x: 605, y: 182, width: 276, height: 44 }}
		font={{ font_size: 42.7, align: 'center' }}
		zIndex={20}
		animate="fade"
	>
		2 Corinthians 5:17
	</Fragment>

	<!-- Step 9: "God not counting men's sins..." (click) -->
	<Fragment
		step={9}
		layout={{ x: 582, y: 213, width: 323, height: 65 }}
		font={{ font_size: 26.7, wrap: true }}
		zIndex={15}
		animate="fade"
	>
		God not counting men's sins against them. Ambassadors for Christ. Diplomatic Immunity – grace period
	</Fragment>

	<!-- Step 10: Romans 3:19 (click) - drillTo -->
	<Fragment
		step={10}
		drillTo="law/romans-3-19"
		layout={{ x: 603, y: 287, width: 281, height: 32 }}
		font={{ font_size: 42.7, align: 'center', v_align: 'middle' }}
		zIndex={22}
		animate="fade"
	>
		Romans 3:19
	</Fragment>

	<!-- Step 11: "Justified – Not under the law..." (click) -->
	<Fragment
		step={11}
		layout={{ x: 593, y: 318, width: 300, height: 78 }}
		font={{ font_size: 32, align: 'center', italic: true, wrap: true }}
		zIndex={17}
		animate="fade"
	>
		Justified – Not under the law, still upholding (establishing) the law
	</Fragment>

	<!-- Step 11.1: Horizontal arrow (after) -->
	<Fragment step={11.1} animate="wipe">
		<Arrow from={{ x: 522, y: 333.6 }} to={{ x: 593, y: 333.6 }} stroke={{ width: 8, color: '#000000' }} zIndex={25} />
	</Fragment>

	<!-- Step 12: 1 Corinthians 6:9 (click) - drillTo -->
	<Fragment
		step={12}
		drillTo="law/1corinthians-6-9"
		layout={{ x: 605, y: 378, width: 276, height: 44 }}
		font={{ font_size: 42.7, align: 'center' }}
		zIndex={21}
		animate="fade"
	>
		1 Corinthians 6:9
	</Fragment>

	<!-- Step 13: "Everything is permissible..." (click) -->
	<Fragment
		step={13}
		layout={{ x: 588, y: 404, width: 312, height: 56 }}
		font={{ font_size: 32, align: 'center', italic: true, wrap: true }}
		zIndex={18}
		animate="fade"
	>
		Everything is permissible [lawful]<br/>but not all is beneficial
	</Fragment>

	<!-- Step 14: "I thought everyone was/is a sinner?" (click) - drillTo -->
	<Fragment
		step={14}
		drillTo="law/sinners-vs-freedom"
		layout={{ x: 605, y: 461, width: 276, height: 60 }}
		font={{ font_size: 32, align: 'center', italic: true, wrap: true }}
		fill="var(--color-bg-ghost)"
		zIndex={27}
		animate="fade"
	>
		"I thought everyone<br/>was/is a sinner ?"
	</Fragment>

	<!-- Step 15: Hebrews 7:11 (click) - drillTo -->
	<Fragment
		step={15}
		drillTo="law/hebrews-7-11"
		layout={{ x: 47, y: 42, width: 177, height: 67 }}
		font={{ font_size: 42.7, align: 'center', wrap: true }}
		fill="var(--color-level2)"
		zIndex={26}
		animate="fade"
	>
		Hebrews 7:11<br/>(change of law)
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
