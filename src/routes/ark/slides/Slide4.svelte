<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect, Line, Arrow } from '$lib/components/svg';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
    <ReferenceOverlay src="/export/08-The_Ark/Slide4.png" />
	<!-- Static: Underwater background image -->
	<Fragment
		layout={{ x: 0, y: 318, width: 960, height: 222 }}
		line={{ width: 1 }}
	>
		<img src="/export/08-The_Ark/image5.jpeg" alt="Underwater" class="slide-image" />
	</Fragment>

	<Fragment
		layout={{ x: 69, y: 5, width: 455, height: 58 }}
		font={{ font_size: 52.5, bold: true, color: '#000000' }}
	>
		Baptism Defined
	</Fragment>

	<!-- Step 1: Black Ark box -->
	<Fragment
		step={1}
		layout={{ x: 218, y: 245, width: 588, height: 72 }}
		fill="var(--color-bg-darkest)"
		font={{ font_size: 44.2, bold: true, color: 'var(--color-bg-ghost)', align: 'center', v_align: 'middle' }}
		animate="fade"
	>
		Ark
	</Fragment>

	<!-- Step 1.2: Water Line (timing: after 1000ms) and label (timing: with) -->
	<Fragment step={1.2} animate="wipe">
		<Line from={{ x: 0, y: 316 }} to={{ x: 960, y: 316 }} stroke={{ width: 8, color: 'var(--color-level2)', dash: '15,5' }} zIndex={10} />
	</Fragment>

	<Fragment
		step={1.2}
		layout={{ x: 50, y: 299, width: 162, height: 40 }}
		fill="var(--color-level3)"
		font={{ font_size: 26.7, bold: true, color: 'var(--color-bg-ghost)', align: 'center', wrap: true }}
		line={{ width: 1 }}
        zIndex={10}
	>
		Water Line
	</Fragment>

	<!-- Black arrow pointing down (death arrow) -->
	<Fragment step={2} animate="wipe-down">
		<Arrow from={{ x: 115, y: 220 }} to={{ x: 115, y: 412 }} stroke={{ width: 25, color: 'var(--color-bg-darkest)' }} zIndex={3} />
	</Fragment>

	<Fragment
		step={2.1}
		layout={{ x: 80, y: 420, width: 233, height: 88 }}
		font={{ font_size: 79.2, bold: true, align: 'center' }}
		line={{ width: 4 }}
	>
		Death
	</Fragment>

	<!-- Step 3: Blue arrow pointing up (life arrow) -->
	<Fragment step={3} animate="wipe-up">
		<Arrow from={{ x: 160, y: 416 }} to={{ x: 160, y: 228 }} stroke={{ width: 25, color: 'var(--color-level3)' }} zIndex={3} />
	</Fragment>

	<!-- Step 3.1: Life label and Romans drillTo (timing: after 500ms) -->
	<Fragment
		step={3.1}
		layout={{ x: 87, y: 128, width: 158, height: 104 }}
		font={{ font_size: 79.2, bold: true, color: '#0000FF', align: 'left' }}
		line={{ width: 1 }}
	>
		Life
	</Fragment>

	<Fragment
		step={3.1}
		drillTo="ark/baptism-and-faith"
		layout={{ x: 119, y: 56, width: 338, height: 40 }}
		font={{ font_size: 26.7, align: 'left' }}
		line={{ width: 1 }}
	>
		Romans 6:3-7, 17-18, 22-23
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 107, y: 98, width: 358, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'center', wrap: true }}
		line={{ width: 1 }}
	>
		Old Self = Sin = Dead
	</Fragment>

	<!-- Step 4.2: Second black box for burial (timing: after 1000ms) -->
	<Fragment step={4.2} animate="fade">
		<Rect x={218} y={360} width={588} height={72} fill="var(--color-bg-darkest)" zIndex={7} />
	</Fragment>

	<Fragment
		step={4.2}
		layout={{ x: 230, y: 360, width: 588, height: 72 }}
		font={{ font_size: 50, bold: true, color: '#F4F4F4', align: 'center' }}
		line={{ width: 1 }}
        zIndex={8}
	>
		Burial & Resurrection
	</Fragment>

	<!-- Step 5: Washing away of sins drillTo -->
	<Fragment
		step={5}
		drillTo="ark/john-13-5"
		layout={{ x: 398, y: 438, width: 227, height: 82 }}
		fill="#F4F4F4"
		font={{ font_size: 21.7, align: 'center' }}
		line={{ width: 1 }}
	>
		Washing away of sins<br/>John 13:5<br/>Acts 22:16
	</Fragment>

	<!-- Step 6: & Resurrection label -->
	<Fragment
		step={6}
		layout={{ x: 421, y: 360, width: 366, height: 66 }}
		font={{ font_size: 50, bold: true, color: '#F4F4F4', align: 'left' }}
		line={{ width: 4 }}
	>
		& Resurrection
	</Fragment>

	<!-- Step 6: Ark = Saved (timing: with, then after for text) -->
	<Fragment step={6} animate="fade">
		<Rect x={239} y={245} width={500} height={72} fill="var(--color-bg-darkest)" stroke={{ width: 2, color: '#000000' }} zIndex={8} />
	</Fragment>

	<Fragment
		step={6.1}
		layout={{ x: 240, y: 245, width: 588, height: 72 }}
		font={{ font_size: 59, bold: true, color: 'var(--color-bg-ghost)', align: 'left' }}
		line={{ width: 1 }}
        zIndex={9}
	>
		Ark = Saved
	</Fragment>

	<!-- Step 7: Baptism equation -->
	<Fragment
		step={7}
		layout={{ x: 524, y: 21, width: 411, height: 78 }}
		font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Baptism = Death, Burial, Resurrection = Free gift of God
	</Fragment>

	<!-- Step 8: What does the Ark look like drillTo -->
	<Fragment
		step={8}
		drillTo="ark/ugly-black-box"
		layout={{ x: 291, y: 148, width: 439, height: 36 }}
		font={{ font_size: 23.3, align: 'center' }}
	>
		What does the Ark look like? - Isaiah 53
	</Fragment>

	<!-- Step 9: = Church -->
	<Fragment
		step={9}
		layout={{ x: 580, y: 245, width: 275, height: 72 }}
		fill="var(--color-bg-darkest)"
		font={{ font_size: 59, bold: true, color: 'var(--color-bg-ghost)', align: 'left' }}
		line={{ width: 1 }}
		zIndex={9}
	>
		= Church
	</Fragment>

	<Fragment
		step={9}
		layout={{ x: 710, y: 206, width: 148, height: 40 }}
		font={{ font_size: 26.7, bold: true }}
		line={{ width: 1 }}
	>
		(His body)
	</Fragment>

	<!-- Step 10: Importance of Baptism drillTo -->
	<Fragment
		step={10}
		drillTo="ark/revelation-20"
		layout={{ x: 291, y: 188, width: 437, height: 36 }}
		font={{ font_size: 23.3, align: 'center' }}
		line={{ width: 1 }}
	>
		Importance of Baptism - Revelation 20:6
	</Fragment>
</Slide>
