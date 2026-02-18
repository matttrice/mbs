<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 3: Faith / Grace - Responsibility & Judgment
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 32 animation steps covering Luke 13:6-9 parable,
	 * hamartia definition, and fear/trembling concepts
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/05-Law/Slide3.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: "Faith / Grace" -->
	<Fragment
		layout={{ x: 330.9, y: 15.5, width: 313.1, height: 44.4 }}
		font={{ font_size: 40, align: 'center' }}
		zIndex={5}
	>
		Faith / Grace
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE (32 Steps) ===== -->

	<!-- Step 1: Philippians 2:12 (drill) -->
	<Fragment
		step={1}
		drillTo="law/philippians-2-12"
		layout={{ x: 90.4, y: 18.9, width: 227.4, height: 31.4 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={25}
	>
		Philippians 2:12
	</Fragment>

	<!-- Step 2: "Sin Not Counted = No Death, Why Fear & Trembling?" -->
	<Fragment
		step={2}
		layout={{ x: 89.5, y: 45.8, width: 229.2, height: 52.7 }}
		font={{ font_size: 16.7, align: 'center', italic: true, color: '#0000FF' }}
		zIndex={26}
	>
		Sin Not Counted = No Death<br/>Why Fear & Trembling?
	</Fragment>

	<!-- Step 3: 2 Corinthians 5:10 (drill) -->
	<Fragment
		step={3}
		drillTo="law/2corinthians-5-10"
		layout={{ x: 94.6, y: 110.8, width: 219.1, height: 38 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={31}
	>
		2 Corinthians 5:10
	</Fragment>

	<!-- Step 4: "Responsible for good and bad..." -->
	<Fragment
		step={4}
		layout={{ x: 75.5, y: 143, width: 257.1, height: 55.9 }}
		font={{ font_size: 20, align: 'center', italic: true , wrap: true }}
		zIndex={30}
	>
		Responsible for good and bad while in the body,<br/>Fear the Lord.
	</Fragment>

	<!-- Step 5: Romans 6:18 (drill) -->
	<Fragment
		step={5}
		drillTo="law/romans-6-17"
		layout={{ x: 80.3, y: 213.1, width: 247.6, height: 31.1 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={19}
	>
		Romans 6:18
	</Fragment>

	<!-- Step 5 (with): Horizontal line under Romans 6:18 -->
	<Fragment step={5} animate="draw">
		<Line from={{ x: 84.1, y: 245.8 }} to={{ x: 324.1, y: 245.8 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={32} />
	</Fragment>

	<!-- Step 6: Romans 6:18 quote box (drill) -->
	<Fragment
		step={6}
		drillTo="law/romans-6-17"
		layout={{ x: 79.1, y: 245.3, width: 250.1, height: 78.8 }}
		font={{ font_size: 20, align: 'center', wrap: true }}
		zIndex={22}
	>
		"You have been set free<br/>from sin and have become slaves to righteousness"
	</Fragment>

	<!-- Step 6 (with): "Freedom from sin but not responsibility!" -->
	<Fragment
		step={6}
		layout={{ x: 79.8, y: 327.9, width: 237.8, height: 54.5 }}
		font={{ font_size: 20, italic: true }}
		zIndex={23}
	>
		Freedom from sin but not<br/>responsibility!
	</Fragment>

	<!-- Step 7: "Fear and trembling from responsibility...not sin." -->
	<Fragment
		step={7}
		layout={{ x: 80.8, y: 464.6, width: 570, height: 42.4 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={27}
	>
		Fear and trembling from responsibility...not sin.
	</Fragment>

	<!-- Step 8: Right column rectangle (blue) -->
	<Fragment step={8} animate="wipe-down">
		<Rect x={333} y={15.5} width={308.9} height={416.6} fill="var(--bg-level-2)" stroke={{ width: 1, color: '#000000' }} zIndex={0} />
	</Fragment>

	<!-- Step 8 (with): "As a slave you have new set of responsibility" -->
	<Fragment
		step={8}
		layout={{ x: 374.2, y: 64.2, width: 226.6, height: 54.6 }}
		font={{ font_size: 20, align: 'center' }}
		zIndex={24}
	>
		As a slave you have<br/>new set of responsibility
	</Fragment>

	<!-- Step 8 (with): Luke 13:6-9 (drill) -->
	<Fragment
		step={8}
		drillTo="law/luke-13-6"
		layout={{ x: 397.8, y: 112.4, width: 179.4, height: 45.9 }}
		font={{ font_size: 30 }}
		zIndex={17}
	>
		Luke 13:6-9
	</Fragment>

	<!-- Step 9: Parable keywords list -->
	<Fragment
		step={9}
		layout={{ x: 367.5, y: 203.2, width: 129.2, height: 169.5 }}
		font={{ font_size: 26.7 }}
		zIndex={6}
	>
		Owner<br/>Keeper<br/>Vineyard<br/>Trees<br/>Fruit
	</Fragment>

	<!-- Step 10: Arrow to "God" -->
	<Fragment step={10} animate="wipe">
		<Arrow from={{ x: 477.2, y: 226.2 }} to={{ x: 507.2, y: 226.2 }} stroke={{ width: 4.7 }} zIndex={7} />
	</Fragment>

	<!-- Step 10.1: "God" -->
	<Fragment
		step={10.1}
		layout={{ x: 507.2, y: 201.2, width: 69.8, height: 40.3 }}
		font={{ font_size: 26.7 }}
		zIndex={8}
	>
		God
	</Fragment>

	<!-- Step 11: Arrow to "Christ" -->
	<Fragment step={11} animate="wipe">
		<Arrow from={{ x: 475.8, y: 255.6 }} to={{ x: 507.2, y: 255.6 }} stroke={{ width: 4.7 }} zIndex={9} />
	</Fragment>

	<!-- Step 11.1: "Christ" -->
	<Fragment
		step={11.1}
		layout={{ x: 507.2, y: 235.8, width: 93.8, height: 40.2 }}
		font={{ font_size: 26.7 }}
		zIndex={13}
	>
		Christ
	</Fragment>

	<!-- Step 12: Arrow to "Church" -->
	<Fragment step={12} animate="wipe">
		<Arrow from={{ x: 488.4, y: 290.6 }} to={{ x: 507.2, y: 290.6 }} stroke={{ width: 4.7 }} zIndex={10} />
	</Fragment>

	<!-- Step 12.1: "Church" -->
	<Fragment
		step={12.1}
		layout={{ x: 507.2, y: 267.2, width: 110.2, height: 40.3 }}
		font={{ font_size: 26.7 }}
		zIndex={14}
	>
		Church
	</Fragment>

	<!-- Step 13: Arrow to "Sons" -->
	<Fragment step={13} animate="wipe">
		<Arrow from={{ x: 459.2, y: 322.7 }} to={{ x: 507.2, y: 322.7 }} stroke={{ width: 4.7 }} zIndex={11} />
	</Fragment>

	<!-- Step 13.1: "Sons" -->
	<Fragment
		step={13.1}
		layout={{ x: 507.2, y: 300.8, width: 81.8, height: 40.3 }}
		font={{ font_size: 26.7 }}
		zIndex={15}
	>
		Sons
	</Fragment>

	<!-- Step 14: Arrow to "Fruits of Spirit" -->
	<Fragment step={14} animate="wipe">
		<Arrow from={{ x: 446.2, y: 351.8 }} to={{ x: 470.2, y: 351.8 }} stroke={{ width: 4.7 }} zIndex={12} />
	</Fragment>

	<!-- Step 14.1: "Fruits of Spirit: Benevolence, Teaching, etc." -->
	<Fragment
		step={14.1}
		layout={{ x: 470.2, y: 340.8, width: 146.9, height: 71.6 }}
		font={{ font_size: 17.5, italic: true }}
		zIndex={16}
	>
		Fruits of Spirit:<br/>Benevolence,<br/>Teaching, ect.
	</Fragment>

	<!-- Step 15: "Church Exclusive" -->
	<Fragment
		step={15}
		layout={{ x: 356.9, y: 162.7, width: 261.1, height: 36.4 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle', italic: true }}
		zIndex={18}
	>
		Church Exclusive
	</Fragment>

	<!-- Step 16: Right column rectangle (blue) for hamartia -->
	<Fragment step={16} animate="wipe-down">
		<Rect x={650.8} y={15.8} width={234.2} height={472.2} fill="var(--bg-level-2)" stroke={{ width: 1, color: '#000000' }} zIndex={1} />
	</Fragment>

	<!-- Step 16 (with): "hamartia" title -->
	<Fragment
		step={16}
		layout={{ x: 650.8, y: 15.5, width: 234.2, height: 44.4 }}
		font={{ font_size: 40, align: 'center' }}
		zIndex={5}
	>
		hamartia
	</Fragment>

	<!-- Step 16 (with): hamartia definition -->
	<Fragment
		step={16}
		layout={{ x: 651.8, y: 65, width: 230.8, height: 225 }}
		font={{ font_size: 20, italic: true, v_align: 'top', wrap: true }}
		zIndex={2}
	>
		To be without a share in<br/> b) to miss the mark<br/> c) to err, be mistaken<br/> d) to miss or wander from the path of uprightness<br/> e) to wander from the law of God
	</Fragment>

	<!-- Step 17: Arrow down for hamartia -->
	<Fragment step={17} animate="wipe-down">
		<Arrow from={{ x: 767.1, y: 292.7 }} to={{ x: 767.1, y: 365.9 }} stroke={{ width: 8 }} zIndex={3} />
	</Fragment>

	<!-- Step 17.1: "Death" -->
	<Fragment
		step={17.1}
		layout={{ x: 691.4, y: 351.7, width: 151.6, height: 66.4 }}
		font={{ font_size: 48.3, align: 'center' }}
		zIndex={4}
	>
		Death
	</Fragment>

	<!-- Step 17.1 (with): "Same result as other sins..." -->
	<Fragment
		step={17.1}
		layout={{ x: 649.2, y: 415.3, width: 235.8, height: 48.6 }}
		font={{ font_size: 16.7, align: 'center', wrap: true }}
		zIndex={21}
	>
		Same result as other sins Decided at judgment.
	</Fragment>

	<!-- Step 18: Luke 13:9 quote -->
	<Fragment
		step={18}
		layout={{ x: 83.4, y: 497.5, width: 788, height: 45.3 }}
		font={{ font_size: 28, align: 'left' }}
		zIndex={20}
	>
		 <strong>Luke 13:9</strong> If it bears fruit next year, fine! If not, then cut it down.
	</Fragment>

	<!-- Step 19: 1 Peter 4:12-18 / Hebrews 10:23 (drill) -->
	<Fragment
		step={19}
		drillTo="law/1peter-4-12"
		layout={{ x: 73.4, y: 383.5, width: 247.6, height: 64.8 }}
		font={{ font_size: 23.3, align: 'center', bold: true }}
		zIndex={28}
	>
		1Peter 4:12-18<br/>Hebrews 10:23
	</Fragment>

	<!-- Step 20: "Judgment begins with the household of God" -->
	<Fragment
		step={20}
		layout={{ x: 84.1, y: 437.7, width: 447.9, height: 29.4 }}
		font={{ font_size: 20 }}
		zIndex={29}
	>
		Judgment begins with the household of God
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components or Fragment with fill/line */
</style>
