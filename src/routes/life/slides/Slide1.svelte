<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Arc, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 1: Life - "How many kinds of life did God create?"
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Converted from 1536x864 PowerPoint (scale 0.625)
	 * 
	 * 31 animation steps covering Plants, Animals, Man columns
	 * Body, Spirit, Soul concepts with breath/blood circulation diagram
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
	<ReferenceOverlay src="/export/04-Life/Slide1.png" />

	<!-- ===== STATIC CONTENT (Always visible) ===== -->
	<!-- Title: Life -->
	<Fragment
		layout={{ x: 380, y: 6.6, width: 189.6, height: 44.4 }}
		font={{ font_size: 52.5, bold: true, align: 'center' }}
		zIndex={100}
	>
		Life
	</Fragment>

	<!-- "How many 'kinds' of life did God create?" -->
	<Fragment
		layout={{ x: 81.1, y: 12, width: 229.1, height: 56.4 }}
		font={{ font_size: 20 }}
		zIndex={12}
	>
		How many "kinds" of life did God create?
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (31 Steps) ========== -->

	<!-- Step 2: Genesis 1:11-12 (drill) + Rectangle 55 (green column) + Line 25 -->
	<Fragment
		step={2}
		drillTo="life/genesis-1-11"
		layout={{ x: 107.8, y: 100.1, width: 219.5, height: 40.3 }}
		font={{ font_size: 26.7 }}
		zIndex={15}
	>
		Genesis 1:11-12
	</Fragment>

	<!-- Step 2 (with): Plants column background -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={85.8} y={100.3} width={260.8} height={206.4} fill="var(--color-level1)" zIndex={7} />
	</Fragment>

	<!-- Step 2 (with): Horizontal line -->
	<Fragment step={2} animate="fade">
		<Line from={{ x: 86.6, y: 100.1 }} to={{ x: 877.5, y: 100.1 }} stroke={{ width: 3.3, color: '#000000' }} zIndex={18} />
	</Fragment>

	<!-- Step 3: "Plants" label -->
	<Fragment
		step={3}
		layout={{ x: 132.5, y: 134.1, width: 148.5, height: 60.6 }}
		font={{ font_size: 45 }}
		zIndex={40}
		animate="fade"
	>
		Plants
	</Fragment>

	<!-- Step 4: Rectangle 59 (Animals column) -->
	<Fragment step={4} animate="wipe-down">
		<Rect x={345.5} y={100.3} width={279.5} height={206.4} fill="var(--color-level1)" zIndex={3} />
	</Fragment>

	<!-- Step 4 (with): Genesis 1:20-25 (drill) -->
	<Fragment
		step={4}
		drillTo="life/genesis-1-20"
		layout={{ x: 370.9, y: 100.8, width: 220.9, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={16}
	>
		Genesis 1:20-25
	</Fragment>

	<!-- Step 5: "Animals" label -->
	<Fragment
		step={5}
		layout={{ x: 379.7, y: 133.6, width: 189.4, height: 61.4 }}
		font={{ font_size: 44.2 }}
		zIndex={13}
		animate="fade"
	>
		Animals
	</Fragment>

	<!-- Step 6: Rectangle 60 (Man column) -->
	<Fragment step={6} animate="wipe-down">
		<Rect x={620} y={100.3} width={257.1} height={206.4} fill="#969696" zIndex={4} />
	</Fragment>

	<!-- Step 6 (with): Genesis 1:26-27 (drill) -->
	<Fragment
		step={6}
		drillTo="life/genesis-1-26"
		layout={{ x: 612, y: 101.4, width: 220.9, height: 40.3 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={17}
	>
		Genesis 1:26-27
	</Fragment>

	<!-- Step 7: "Man" label -->
	<Fragment
		step={7}
		layout={{ x: 671.1, y: 133.6, width: 105.1, height: 61.4 }}
		font={{ font_size: 44.2 }}
		zIndex={14}
		animate="fade"
	>
		Man
	</Fragment>

	<!-- Step 8: "Things in common or different?" -->
	<Fragment
		step={8}
		layout={{ x: 576.3, y: 35.6, width: 259.2, height: 29.2 }}
		font={{ font_size: 20 }}
		zIndex={48}
	>
		Things in common or different?
	</Fragment>

	<!-- Step 9: Body (Plants column) -->
	<Fragment
		step={9}
		layout={{ x: 143, y: 176.9, width: 127.4, height: 61.4 }}
		font={{ font_size: 44.2, align: 'center' }}
		zIndex={19}
	>
		Body
	</Fragment>

	<!-- Step 10: Body (Animals column) -->
	<Fragment
		step={10}
		layout={{ x: 410.8, y: 184.2, width: 127.4, height: 61.4 }}
		font={{ font_size: 44.2, align: 'center' }}
		zIndex={20}
	>
		Body
	</Fragment>

	<!-- Step 11: Body (Man column) -->
	<Fragment
		step={11}
		layout={{ x: 666.6, y: 183, width: 127.4, height: 61.4 }}
		font={{ font_size: 44.2, align: 'center' }}
		zIndex={21}
	>
		Body
	</Fragment>

	<!-- Step 12: "Body = Visible" bar -->
	<Fragment
		step={12}
		layout={{ x: 85.8, y: 98.3, width: 790.8, height: 47.8 }}
		font={{ font_size: 36.7, align: 'center', v_align: 'middle', color: '#FFFFFF' }}
		fill="#000000"
		line={{ width: 0.8 }}
		zIndex={45}
	>
		Body = Visible
	</Fragment>

	<!-- Step 13: Ecclesiastes 3:19-21 (drill) -->
	<Fragment
		step={13}
		drillTo="life/ecclesiastes-3-19"
		layout={{ x: 354.1, y: 338.3, width: 245.2, height: 36.3 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={37}
	>
		Ecclesiastes 3:19-21
	</Fragment>

	<!-- Step 14: Blue spirit box (Animals) + dashed line + Spirit text -->
	<Fragment step={14} animate="wipe-down">
		<Rect x={345.5} y={256.1} width={280.3} height={117.2} fill="#3BCCFD" zIndex={9} />
	</Fragment>

	<Fragment step={14} animate="draw">
		<Line from={{ x: 340, y: 252.6 }} to={{ x: 878.3, y: 252.6 }} stroke={{ width: 7.5, color: '#0000FF', dash: '10,5' }} zIndex={51} />
	</Fragment>

	<Fragment
		step={14}
		layout={{ x: 396.4, y: 282.9, width: 144.9, height: 68.6 }}
		font={{ font_size: 50, color: '#0000FF' }}
		zIndex={55}
	>
		Spirit
	</Fragment>

	<!-- Step 15: Blue spirit box (Man) + Spirit text -->
	<Fragment step={15} animate="wipe-down">
		<Rect x={625.8} y={256.1} width={252.4} height={117.2} fill="#3BCCFD" zIndex={6} />
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: 659.7, y: 281.8, width: 144.9, height: 68.6 }}
		font={{ font_size: 50, align: 'center', color: '#0000FF' }}
		zIndex={54}
	>
		Spirit
	</Fragment>

	<!-- Step 16: "Spirit = Invisible" bar -->
	<Fragment
		step={16}
		layout={{ x: 340.4, y: 256.3, width: 537.7, height: 35.2 }}
		font={{ font_size: 33.3, align: 'center', v_align: 'middle', color: '#FFFFFF' }}
		fill="#0099CC"
		line={{ width: 0.8 }}
		zIndex={46}
	>
		Spirit = Invisible
	</Fragment>

	<!-- Step 17: James 2:26 (drill) -->
	<Fragment
		step={17}
		drillTo="life/james-2-26"
		layout={{ x: 400.8, y: 373.6, width: 152.1, height: 38.3 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={41}
	>
		James 2:26
	</Fragment>

	<!-- Step 18: "Life = Spirit" -->
	<Fragment
		step={18}
		layout={{ x: 403.5, y: 399.2, width: 154.1, height: 38.3 }}
		font={{ font_size: 26.7, color: '#0000FF' }}
		zIndex={42}
	>
		Life = Spirit
	</Fragment>

	<!-- Step 19: Leviticus 17:11 (drill) -->
	<Fragment
		step={19}
		drillTo="life/leviticus-17-11"
		layout={{ x: 376.9, y: 441.4, width: 214, height: 34.3 }}
		font={{ font_size: 26.7, align: 'center' }}
		zIndex={43}
	>
		Leviticus 17:11
	</Fragment>

	<!-- Step 20: "Blood = Life" -->
	<Fragment
		step={20}
		layout={{ x: 401.8, y: 468.8, width: 161.1, height: 38.3 }}
		font={{ font_size: 26.7, color: '#FF0000' }}
		zIndex={44}
	>
		Blood = Life
	</Fragment>

	<!-- Step 21: "Blood = Spirit" box -->
	<Fragment
		step={21}
		layout={{ x: 595.8, y: 452.4, width: 283.4, height: 56.4 }}
		font={{ font_size: 40, color: '#FF0000' }}
		fill="var(--color-bg-ghost)"
		line={{ width: 0.6, color: '#000000' }}
		zIndex={22}
	>
		Blood = Spirit
	</Fragment>

	<!-- Step 22: "Do plants have blood?" -->
	<Fragment
		step={22}
		layout={{ x: 647, y: 506.9, width: 203.6, height: 26.3 }}
		font={{ font_size: 16.7, align: 'center' }}
		zIndex={56}
	>
		Do plants have blood?
	</Fragment>

	<!-- Step 23: "Breath" box -->
	<Fragment
		step={23}
		layout={{ x: 207.2, y: 311.8, width: 111.6, height: 35.2 }}
		font={{ font_size: 33.3, v_align: 'middle' }}
		fill="var(--color-bg-ghost)"
		zIndex={52}
	>
		Breath
	</Fragment>

	<!-- Step 24: Arc 103 (breath to blood circulation arc) -->
	<Fragment step={24} animate="draw">
		<Arc 
			from={{ x: 294.8, y: 332.6 }} 
			to={{ x: 222.3, y: 503.1 }} 
			curve={-85.6} 
			stroke={{ width: 4.3, color: '#0099CC' }} 
			arrow 
			zIndex={10} 
		/>
	</Fragment>

	<!-- Step 24.1: "O2" label -->
	<Fragment
		step={24.1}
		layout={{ x: 298.7, y: 376.9, width: 47.5, height: 35.5 }}
		font={{ font_size: 33.3, v_align: 'bottom' }}
		fill="var(--color-bg-ghost)"
		zIndex={23}
	>
		O2
	</Fragment>

	<!-- Step 24.2: "Lungs" label -->
	<Fragment
		step={24.2}
		layout={{ x: 238.2, y: 432.5, width: 108.6, height: 31.7 }}
		font={{ font_size: 33.3, v_align: 'bottom' }}
		fill="var(--color-bg-ghost)"
		zIndex={24}
	>
		Lungs
	</Fragment>

	<!-- Step 24.3: "Heart" label + Heart shape -->
	<Fragment
		step={24.3}
		layout={{ x: 162, y: 463.6, width: 94.3, height: 28.9 }}
		font={{ font_size: 33.3, v_align: 'middle' }}
		zIndex={25}
	>
		Heart
	</Fragment>

	<Fragment step={24.3} animate="scale">
		<Rect x={168.6} y={379.9} width={86.7} height={82.6} fill="#FF0000" stroke={{ width: 0.6, color: '#000000' }} zIndex={39} />
	</Fragment>

	<!-- Step 25: Arc 104 (return arc) -->
	<Fragment step={25} animate="draw">
		<Arc 
			from={{ x: 195, y: 503.5 }} 
			to={{ x: 131.3, y: 330.8 }} 
			curve={86.9} 
			stroke={{ width: 4.3, color: '#0099CC' }} 
			arrow 
			zIndex={11} 
		/>
	</Fragment>

	<!-- Step 25.1: "Blood" label -->
	<Fragment
		step={25.1}
		layout={{ x: 64.3, y: 431.1, width: 111.6, height: 28.9 }}
		font={{ font_size: 33.3, v_align: 'middle' }}
		fill="var(--color-bg-ghost)"
		zIndex={26}
	>
		Blood
	</Fragment>

	<!-- Step 25.2: "Body" label -->
	<Fragment
		step={25.2}
		layout={{ x: 67.9, y: 364.8, width: 94.7, height: 30.2 }}
		font={{ font_size: 33.3, v_align: 'middle' }}
		fill="var(--color-bg-ghost)"
		zIndex={27}
	>
		Body
	</Fragment>

	<!-- Step 25.3: "Life" label -->
	<Fragment
		step={25.3}
		layout={{ x: 123.9, y: 316.1, width: 77, height: 32.8 }}
		font={{ font_size: 33.3, v_align: 'middle', align: 'center' }}
		zIndex={28}
	>
		Life
	</Fragment>

	<!-- Step 26: Lines 68 and 106 (arrows to spirit columns) -->
	<Fragment step={26} animate="wipe">
		<Arrow 
			from={{ x: 307.5, y: 324.4 }} 
			to={{ x: 405.8, y: 324.4 }} 
			stroke={{ width: 6.25 }} 
			zIndex={49} 
		/>
	</Fragment>

	<Fragment step={26} animate="wipe">
		<Arrow 
			from={{ x: 315.5, y: 335.6 }} 
			to={{ x: 671.8, y: 335.6 }} 
			stroke={{ width: 6.25 }} 
			zIndex={50} 
		/>
	</Fragment>

	<!-- Step 27: Arc 70 (CO2 exhale arc) -->
	<Fragment step={27} animate="draw">
		<Arc 
			from={{ x: 157.8, y: 315.1 }} 
			to={{ x: 104.1, y: 257.1 }} 
			curve={28.8} 
			stroke={{ width: 4.3, color: '#0099CC' }} 
			arrow 
			zIndex={29} 
		/>
	</Fragment>

	<!-- Step 27.1: "CO2" label -->
	<Fragment
		step={27.1}
		layout={{ x: 91.6, y: 210.4, width: 74.2, height: 45.3 }}
		font={{ font_size: 33.3, align: 'center' }}
		zIndex={30}
	>
		CO2
	</Fragment>

	<!-- Step 27.2: Arc 74 (O2 inhale arc from plants) -->
	<Fragment step={27.2} animate="draw">
		<Arc 
			from={{ x: 111.1, y: 220.8 }} 
			to={{ x: 303.4, y: 215.6 }} 
			curve={-51.3} 
			stroke={{ width: 4.3, color: '#0099CC' }} 
			arrow 
			zIndex={47} 
		/>
	</Fragment>

	<!-- Step 27.3: "O2" label (from plants) -->
	<Fragment
		step={27.3}
		layout={{ x: 268.9, y: 208.6, width: 51.7, height: 45.3 }}
		font={{ font_size: 33.3, align: 'center' }}
		zIndex={31}
	>
		O2
	</Fragment>

	<!-- Step 27.4: Arc 101 (final small arc) -->
	<Fragment step={27.4} animate="draw">
		<Arc 
			from={{ x: 280.8, y: 245.6 }} 
			to={{ x: 278.9, y: 313.2 }} 
			curve={-33.8} 
			stroke={{ width: 4.3, color: '#0099CC' }} 
			arrow 
			zIndex={53} 
		/>
	</Fragment>

	<!-- Step 28: 1Thess. 5:23 (drill) -->
	<Fragment
		step={28}
		drillTo="life/1thessalonians-5-23"
		layout={{ x: 647, y: 347.3, width: 157.4, height: 28.9 }}
		font={{ font_size: 23.3, align: 'center' }}
		zIndex={33}
	>
		1Thess. 5:23
	</Fragment>

	<!-- Step 29: Blue Soul box (Man) + Soul text -->
	<Fragment step={29} animate="wipe-down">
		<Rect x={625.8} y={364.8} width={252.4} height={80.3} fill="#3BCCFD" zIndex={5} />
	</Fragment>

	<Fragment
		step={29}
		layout={{ x: 661.4, y: 367.2, width: 125.3, height: 68.6 }}
		font={{ font_size: 60, color: '#0000FF' }}
		zIndex={34}
	>
		Soul
	</Fragment>

	<!-- Step 30: "LEAST COMPLEX" -->
	<Fragment
		step={30}
		layout={{ x: 110.8, y: 64.8, width: 201.9, height: 34.2 }}
		font={{ font_size: 21.7 }}
		fill="var(--color-bg-ghost)"
		zIndex={0}
	>
		LEAST COMPLEX
	</Fragment>

	<!-- Step 30.1: "MORE COMPLEX" -->
	<Fragment
		step={30.1}
		layout={{ x: 376.8, y: 64.8, width: 195.8, height: 34.2 }}
		font={{ font_size: 21.7 }}
		fill="var(--color-bg-ghost)"
		zIndex={1}
	>
		MORE COMPLEX
	</Fragment>

	<!-- Step 30.2: "MOST COMPLEX" -->
	<Fragment
		step={30.2}
		layout={{ x: 639.3, y: 64.8, width: 193.4, height: 34.2 }}
		font={{ font_size: 21.7 }}
		fill="var(--color-bg-ghost)"
		zIndex={2}
	>
		MOST COMPLEX
	</Fragment>

	<!-- Step 31: "God is Progressive" -->
	<Fragment
		step={31}
		layout={{ x: 557, y: 2.1, width: 299.7, height: 45.4 }}
		font={{ font_size: 30.8 }}
		fill="var(--color-bg-ghost)"
		zIndex={35}
	>
		God is Progressive
	</Fragment>
</Slide>

<style>
	/* All shapes now use SVG components inside Fragment */
</style>
