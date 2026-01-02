<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect, Arrow } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
    <div class="slide-bg"></div>
	<ReferenceOverlay src="/export/06-Sin_Death/Slide2.png" />

	<!-- Static Content -->
	<!-- Title: "Men & Women = Mankind" -->
	<Fragment
		layout={{ x: 138.8, y: 15.4, width: 682.4, height: 61.2 }}
		font={{ font_size: 55, bold: true }}
	>
		Men &amp; Women = Mankind
	</Fragment>

	<!-- Romans 5:12 "All have sinned" (static, drillable) -->
	<Fragment
		drillTo="sin-and-death/romans-5-12"
		layout={{ x: 199.1, y: 72.4, width: 575.6, height: 44.5 }}
		fill="#F4F4F4"
		line={{ width: 1.3 }}
		font={{ v_align: 'middle', align: 'center', font_size: 36.7 }}
		zIndex={8}
	>
		Romans 5:12 "All have sinned"
	</Fragment>

	<!-- Animated Content -->
	<!-- Step 1: Original Sin: Genesis 2 & 3 -->
	<Fragment
		step={1}
		drillTo="sin-and-death/mortality-morality"
		layout={{ x: 121.6, y: 118.1, width: 730.7, height: 59.9 }}
		fill="#F4F4F4"
		line={{ width: 1.3, color: '#000000' }}
		font={{ v_align: 'middle', align: 'center', font_size: 36.7 }}
		zIndex={13}
		animate="fade"
	>
		Original Sin: Genesis 2 &amp; 3
	</Fragment>

	<!-- Step 2: "Mortality" -->
	<Fragment
		step={2}
		layout={{ x: 195.4, y: 191.4, width: 201.8, height: 61.4 }}
		line={{ width: 8 }}
		font={{ align: 'center', font_size: 44.2 }}
		zIndex={2}
		animate="fade"
	>
		Mortality
	</Fragment>

	<!-- Step 2 with: Gray rectangle behind Mortality -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={149.4} y={171.8} width={293.9} height={372.1} fill="#999999" stroke={{ width: 1 }} zIndex={1} />
	</Fragment>

	<!-- Step 2 with: "V.S." -->
	<Fragment
		step={2}
		layout={{ x: 453.6, y: 207.7, width: 54.5, height: 34.3 }}
		font={{ font_size: 23.3 }}
		zIndex={12}
		animate="fade"
	>
		V.S.
	</Fragment>

	<!-- Step 2.1: "Morality" -->
	<Fragment
		step={2.1}
		layout={{ x: 571.5, y: 191.4, width: 186.9, height: 61.4 }}
		line={{ width: 8 }}
		font={{ align: 'center', font_size: 44.2 }}
		zIndex={3}
		animate="fade"
	>
		Morality
	</Fragment>

	<!-- Step 2.1 with: Orange rectangle behind Morality -->
	<Fragment step={2.1} animate="wipe-down">
		<Rect x={517.9} y={170.5} width={293.9} height={373.4} fill="#FD8017" stroke={{ width: 1 }} zIndex={0} />
	</Fragment>

	<!-- Step 3: Down arrow for "No Choice" -->
	<Fragment step={3} animate="wipe">
		<Arrow from={{ x: 296.6, y: 243.3 }} to={{ x: 296.6, y: 307.7 }} stroke={{ width: 18.7 }} zIndex={10} />
	</Fragment>

	<!-- Step 3.1: "No Choice" -->
	<Fragment
		step={3.1}
		layout={{ x: 178.1, y: 299.3, width: 236.4, height: 61.6 }}
		fill="#F4F4F4"
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 44.2 }}
		zIndex={4}
		animate="fade"
	>
		No Choice
	</Fragment>

	<!-- Step 4: Down arrow for "Choice" -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 664.3, y: 243.3 }} to={{ x: 664.3, y: 315.4 }} stroke={{ width: 18.7 }} zIndex={11} />
	</Fragment>

	<!-- Step 4.1: "Choice" -->
	<Fragment
		step={4.1}
		layout={{ x: 563.4, y: 299.3, width: 202.9, height: 61.6 }}
		fill="#F4F4F4"
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 44.2 }}
		zIndex={5}
		animate="fade"
	>
		Choice
	</Fragment>

	<!-- Step 5: "Physical Death" -->
	<Fragment
		step={5}
		layout={{ x: 178.9, y: 383.4, width: 234.7, height: 129.1 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 50 }}
		zIndex={6}
		animate="fade"
	>
		Physical<br/>Death
	</Fragment>

	<!-- Step 6: "Spiritual Death" -->
	<Fragment
		step={6}
		layout={{ x: 517.8, y: 385.8, width: 293.9, height: 129.1 }}
		line={{ width: 1 }}
		font={{ align: 'center', font_size: 50 }}
		zIndex={7}
		animate="fade"
	>
		Spiritual<br/>Death
	</Fragment>
</Slide>
