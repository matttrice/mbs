<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Rect, Line } from '$lib/components/svg';

	/**
	 * Slide 3: Faith / Grace - Responsibility and hamartia
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Explores the concept of missing the mark (hamartia) and responsibility under grace
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
	<ReferenceOverlay src="/export/05-Law/Slide3.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: Faith / Grace -->
	<Fragment
		layout={{ x: 331, y: 16, width: 313, height: 44 }}
		font={{ font_size: 64, align: 'center', color: '#000000' }}
		zIndex={5}
	>
		Faith / Grace
	</Fragment>

	<!-- ===== ANIMATED CONTENT ===== -->
	
	<!-- Step 1: Philippians 2:12 (click) - drillTo -->
	<Fragment
		step={1}
		drillTo="law/philippians-2-12"
		layout={{ x: 90, y: 19, width: 227, height: 31 }}
		font={{ font_size: 37.3, align: 'center' }}
		zIndex={25}
		animate="fade"
	>
		Philippians 2:12
	</Fragment>

	<!-- Step 2: "Sin Not Counted = No Death..." (click) -->
	<Fragment
		step={2}
		layout={{ x: 90, y: 46, width: 229, height: 53 }}
		font={{ font_size: 26.7, align: 'center', italic: true, color: '#0000FF', wrap: true }}
		zIndex={26}
		animate="fade"
	>
		Sin Not Counted = No Death<br/>Why Fear &amp; Trembling?
	</Fragment>

	<!-- Step 3: 2 Corinthians 5:10 (click) - drillTo -->
	<Fragment
		step={3}
		drillTo="law/2corinthians-5-10"
		layout={{ x: 95, y: 111, width: 219, height: 38 }}
		font={{ font_size: 37.3, align: 'center' }}
		zIndex={31}
		animate="fade"
	>
		2 Corinthians 5:10
	</Fragment>

	<!-- Step 4: "Responsible for good and bad..." (click) -->
	<Fragment
		step={4}
		layout={{ x: 76, y: 136, width: 257, height: 56 }}
		font={{ font_size: 32, align: 'center', italic: true, wrap: true }}
		zIndex={30}
		animate="fade"
	>
		Responsible for good and bad while in the body,<br/>Fear the Lord.
	</Fragment>

	<!-- Step 5: Romans 6:18 (click) - drillTo -->
	<Fragment
		step={5}
		drillTo="law/romans-6-17"
		layout={{ x: 80, y: 213, width: 248, height: 31 }}
		font={{ font_size: 37.3, align: 'center' }}
		zIndex={19}
		animate="fade"
	>
		Romans 6:18
	</Fragment>

	<!-- Step 5: Horizontal line (with) -->
	<Fragment step={5} animate="draw">
		<Line from={{ x: 84, y: 245 }} to={{ x: 324, y: 246 }} stroke={{ width: 5, color: '#CCCCCC' }} zIndex={32} />
	</Fragment>

	<!-- Step 6: "You have been set free from sin..." (click) - drillTo -->
	<Fragment
		step={6}
		drillTo="law/romans-6-17"
		layout={{ x: 79, y: 245, width: 250, height: 79 }}
		font={{ font_size: 32, align: 'center', wrap: true }}
		zIndex={22}
		animate="fade"
	>
		"You have been set free<br/>from sin and have become slaves to righteousness"
	</Fragment>

	<!-- Step 6: "Freedom from sin but not responsibility!" (with) -->
	<Fragment
		step={6}
		layout={{ x: 80, y: 328, width: 238, height: 55 }}
		font={{ font_size: 32, italic: true, wrap: true }}
		zIndex={23}
		animate="fade"
	>
		Freedom from sin but not<br/>responsibility!
	</Fragment>

	<!-- Step 7: "Fear and trembling from responsibility..." (click) -->
	<Fragment
		step={7}
		layout={{ x: 81, y: 465, width: 570, height: 42 }}
		font={{ font_size: 42.7, italic: true, wrap: true }}
		zIndex={27}
		animate="fade"
	>
		Fear and trembling from responsibility...not sin.
	</Fragment>

	<!-- Step 8: Blue responsibility box (click) -->
	<Fragment step={8} animate="fade">
		<Rect x={333} y={16} width={309} height={417} fill="var(--color-level2)" stroke={{ color: '#000000', width: 1 }} zIndex={0} />
	</Fragment>

	<!-- Step 8: "As a slave you have new set of responsibility" (with) -->
	<Fragment
		step={8}
		layout={{ x: 374, y: 64, width: 227, height: 55 }}
		font={{ font_size: 32, align: 'center', wrap: true }}
		zIndex={24}
		animate="fade"
	>
		As a slave you have<br/>new set of responsibility
	</Fragment>

	<!-- Step 8: Luke 13:6-9 (with) - drillTo -->
	<Fragment
		step={8}
		drillTo="law/luke-13-6"
		layout={{ x: 398, y: 112, width: 179, height: 46 }}
		font={{ font_size: 48 }}
		zIndex={17}
		animate="fade"
	>
		Luke 13:6-9
	</Fragment>

	<!-- Step 9: "Owner Keeper Vineyard Trees Fruit" list (click) -->
	<Fragment
		step={9}
		layout={{ x: 368, y: 203, width: 129, height: 170 }}
		font={{ font_size: 42.7, wrap: true }}
		zIndex={6}
		animate="fade"
	>
		Owner<br/>Keeper<br/>Vineyard<br/>Trees<br/>Fruit
	</Fragment>

	<!-- Step 10: Arrow to God (click) -->
	<Fragment step={10} animate="wipe">
		<Arrow from={{ x: 477, y: 226.2 }} to={{ x: 509, y: 226.2 }} stroke={{ width: 4.7, color: '#000000' }} zIndex={7} />
	</Fragment>

	<!-- Step 10.1: "God" (after) -->
	<Fragment
		step={10.1}
		layout={{ x: 507, y: 201, width: 70, height: 40 }}
		font={{ font_size: 42.7 }}
		zIndex={8}
		animate="fade"
	>
		God
	</Fragment>

	<!-- Step 11: Arrow to Christ (click) -->
	<Fragment step={11} animate="wipe">
		<Arrow from={{ x: 476, y: 255.6 }} to={{ x: 509, y: 255.6 }} stroke={{ width: 4.7, color: '#000000' }} zIndex={9} />
	</Fragment>

	<!-- Step 11.1: "Christ" (after) -->
	<Fragment
		step={11.1}
		layout={{ x: 507, y: 236, width: 94, height: 40 }}
		font={{ font_size: 42.7 }}
		zIndex={13}
		animate="fade"
	>
		Christ
	</Fragment>

	<!-- Step 12: Arrow to Church (click) -->
	<Fragment step={12} animate="wipe">
		<Arrow from={{ x: 488, y: 290.6 }} to={{ x: 509, y: 290.6 }} stroke={{ width: 4.7, color: '#000000' }} zIndex={10} />
	</Fragment>

	<!-- Step 12.1: "Church" (after) -->
	<Fragment
		step={12.1}
		layout={{ x: 507, y: 267, width: 110, height: 40 }}
		font={{ font_size: 42.7 }}
		zIndex={14}
		animate="fade"
	>
		Church
	</Fragment>

	<!-- Step 13: Arrow to Sons (click) -->
	<Fragment step={13} animate="wipe">
		<Arrow from={{ x: 459, y: 322.6 }} to={{ x: 509, y: 322.6 }} stroke={{ width: 4.7, color: '#000000' }} zIndex={11} />
	</Fragment>

	<!-- Step 13.1: "Sons" (after) -->
	<Fragment
		step={13.1}
		layout={{ x: 507, y: 301, width: 82, height: 40 }}
		font={{ font_size: 42.7 }}
		zIndex={15}
		animate="fade"
	>
		Sons
	</Fragment>

	<!-- Step 14: Arrow to Fruits (click) -->
	<Fragment step={14} animate="wipe">
		<Arrow from={{ x: 446, y: 351.6 }} to={{ x: 470, y: 351.6 }} stroke={{ width: 4.7, color: '#000000' }} zIndex={12} />
	</Fragment>

	<!-- Step 14.1: "Fruits of Spirit: Benevolence, Teaching, etc." (after) -->
	<Fragment
		step={14.1}
		layout={{ x: 470, y: 341, width: 147, height: 72 }}
		font={{ font_size: 28, italic: true, wrap: true }}
		zIndex={16}
		animate="fade"
	>
		Fruits of Spirit:<br/>Benevolence,<br/>Teaching, ect.
	</Fragment>

	<!-- Step 15: "Church Exclusive" (click) -->
	<Fragment
		step={15}
		layout={{ x: 357, y: 163, width: 261, height: 36 }}
		font={{ font_size: 42.7, align: 'center', v_align: 'middle', italic: true }}
		zIndex={18}
		animate="fade"
	>
		Church Exclusive
	</Fragment>

	<!-- Step 16: hamartia blue box (click) -->
	<Fragment step={16} animate="fade">
		<Rect x={651} y={16} width={234} height={472} fill="var(--color-level2)" stroke={{ color: '#000000', width: 1 }} zIndex={1} />
	</Fragment>

	<!-- Step 16: "hamartia" definition (with) -->
	<Fragment
		step={16}
		layout={{ x: 652, y: 17, width: 231, height: 273 }}
		font={{ font_size: 56, italic: true, wrap: true }}
		zIndex={2}
		animate="fade"
	>
		"hamartia"<br/>to be without a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;share in<br/>b) to miss the mark<br/>c) to err, be mistaken<br/>d) to miss or wander&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from the path of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uprightness<br/>e) to wander from the&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;law of God
	</Fragment>

	<!-- Step 17: Arrow down from hamartia (click) -->
	<Fragment step={17} animate="wipe">
		<Arrow from={{ x: 767.1, y: 292.7 }} to={{ x: 767.1, y: 365.9 }} stroke={{ width: 8, color: '#000000' }} zIndex={3} />
	</Fragment>

	<!-- Step 17.1: "Death" (after 500ms) -->
	<Fragment
		step={17.1}
		layout={{ x: 691, y: 352, width: 152, height: 66 }}
		font={{ font_size: 77.3, align: 'center' }}
		zIndex={4}
		animate="fade"
	>
		Death
	</Fragment>

	<!-- Step 17.1: "Same result as other sins..." (with) -->
	<Fragment
		step={17.1}
		layout={{ x: 649, y: 415, width: 236, height: 49 }}
		font={{ font_size: 26.7, align: 'center', wrap: true }}
		zIndex={21}
		animate="fade"
	>
		Same result as other sins Decided at judgment.
	</Fragment>

	<!-- Step 18: "If it bears fruit..." quote (click) -->
	<Fragment
		step={18}
		layout={{ x: 83, y: 498, width: 783, height: 45 }}
		font={{ font_size: 48, color: '#000000', wrap: true }}
		zIndex={20}
		animate="fade"
	>
		9 If it bears fruit next year, fine! If not, then cut it down.
	</Fragment>

	<!-- Step 19: 1 Peter 4:12-18 (click) - drillTo -->
	<Fragment
		step={19}
		drillTo="law/1peter-4-12"
		layout={{ x: 73, y: 384, width: 248, height: 65 }}
		font={{ font_size: 37.3, align: 'center', wrap: true }}
		zIndex={28}
		animate="fade"
	>
		1Peter 4:12-18<br/>Hebrews 10:23
	</Fragment>

	<!-- Step 20: "Judgment begins with the household of God" (click) -->
	<Fragment
		step={20}
		layout={{ x: 84, y: 438, width: 448, height: 29 }}
		font={{ font_size: 32 }}
		zIndex={29}
		animate="fade"
	>
		Judgment begins with the household of God
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
