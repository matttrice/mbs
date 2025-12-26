<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 2: Physical/Spiritual - Timeline diagram
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio, scaled from 1536x864)
	 * Scale factor: 0.625 (960/1536)
	 * 
	 * Shows the relationship between Physical/Spiritual, Israel/Church, Heaven/Earth
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/02-Physical_Spiritual/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- "ALPHA" label -->
	<Fragment
		layout={{ x: 92.5, y: 261.4, width: 82, height: 26.6 }}
		font={{ font_size: 17.5, bold: true }}
		zIndex={2}
	>
		ALPHA
	</Fragment>

	<!-- Main timeline horizontal line -->
	<Fragment zIndex={3}>
		<div class="timeline-line" style="left: 60px; top: 259px; width: 840px; height: 5px;"></div>
	</Fragment>

	<!-- "OMEGA" label -->
	<Fragment
		layout={{ x: 765.9, y: 261.4, width: 88.1, height: 26.6 }}
		font={{ font_size: 17.5, bold: true, alignment: 'center' }}
		zIndex={6}
	>
		OMEGA
	</Fragment>

	<!-- "ETERNAL" label (right side) -->
	<Fragment
		layout={{ x: 760.8, y: 205.7, width: 128.9, height: 27.2 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={7}
	>
		ETERNAL
	</Fragment>

	<!-- Vertical line at "End" position -->
	<Fragment zIndex={29}>
		<div class="vertical-line" style="left: 749.2px; top: 225.5px; width: 7px; height: 60.1px;"></div>
	</Fragment>

	<!-- "End" label -->
	<Fragment
		layout={{ x: 788.2, y: 227.9, width: 56.1, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={30}
	>
		End
	</Fragment>

	<!-- Vertical divider line -->
	<Fragment zIndex={12}>
		<div class="vertical-line" style="left: 461.4px; top: -19px; width: 10px; height: 559px;"></div>
	</Fragment>

	<!-- Diagonal line (lower) -->
	<Fragment zIndex={13}>
		<div class="connector-line diagonal" style="left: 295.7px; top: 161.8px; width: 1px; height: 195.8px;"></div>
	</Fragment>

	<!-- Arrow line to Heaven -->
	<Fragment zIndex={16}>
		<div class="connector-line diagonal-up" style="left: 646.1px; top: 398.1px; width: 39.9px; height: 173.9px;"></div>
	</Fragment>

	<!-- "=" between titles -->
	<Fragment
		layout={{ x: 412.1, y: 13.4, width: 95.8, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, alignment: 'center' }}
		zIndex={21}
	>
		=
	</Fragment>

	<!-- "Eternity" labels (left and right) -->
	<Fragment
		layout={{ x: 59.3, y: 302.4, width: 142.1, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--color-level3)' }}
		zIndex={24}
	>
		Eternity
	</Fragment>

	<Fragment
		layout={{ x: 738.9, y: 302.4, width: 142.2, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--color-level3)' }}
		zIndex={25}
	>
		Eternity
	</Fragment>

	<!-- ========== ANIMATION SEQUENCE (18 Steps) ========== -->

	<!-- Step 1: Blue rectangle (SPIRITUAL column) + "SPIRITUAL" title -->
	<Fragment
		step={1}
		layout={{ x: 196.4, y: 0, width: 263.3, height: 541.2 }}
		fill="var(--color-level2)"
		zIndex={1}
	>
		<span></span>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 223.1, y: 7, width: 230.6, height: 52.4 }}
		font={{ font_size: 36.7, bold: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={9}
	>
		SPIRITUAL
	</Fragment>

	<!-- Step 1.1 (after): Gray rectangle (PHYSICAL column) + "PHYSICAL" title -->
	<Fragment
		step={1.1}
		layout={{ x: 460, y: 0, width: 270.7, height: 540 }}
		fill="var(--color-level2)"
		zIndex={0}
	>
		<span></span>
	</Fragment>

	<Fragment
		step={1.1}
		layout={{ x: 465.3, y: 7, width: 238.5, height: 52.4 }}
		font={{ font_size: 36.7, bold: true, alignment: 'center' }}
		zIndex={8}
	>
		PHYSICAL
	</Fragment>

	<!-- Step 2: "Temporary Visible" -->
	<Fragment
		step={2}
		layout={{ x: 195.4, y: 50.6, width: 263.6, height: 76.4 }}
		font={{ font_size: 33.3 }}
		zIndex={26}
	>
		<span class="wrap-text">Temporary<br />Visible</span>
	</Fragment>

	<!-- Step 3: "Eternal Unseen" -->
	<Fragment
		step={3}
		layout={{ x: 462.5, y: 45, width: 221.9, height: 88.3 }}
		font={{ font_size: 33.3, color: 'var(--color-level3)' }}
		zIndex={27}
	>
		<span class="wrap-text">Eternal<br />Unseen</span>
	</Fragment>

	<!-- Step 4: "Copy / Shadow = True / Substance" -->
	<Fragment
		step={4}
		layout={{ x: 214, y: 126.8, width: 515.6, height: 47.9 }}
		font={{ font_size: 30, bold: true, alignment: 'center' }}
		zIndex={18}
	>
		Copy / Shadow = True / Substance
	</Fragment>

	<!-- Step 5: Hebrews 9:22-24 (hyperlink) -->
	<Fragment
		step={5}
		drillTo="physical-spiritual/hebrews-9-22"
		layout={{ x: 14.6, y: 133.8, width: 205.6, height: 34.3 }}
		font={{ font_size: 23.3, bold: true }}
		fill="var(--color-level2)"
		zIndex={32}
	>
		Hebrews 9:22-24
	</Fragment>

	<!-- Step 6: "ISRAEL" + "=" + "CHURCH" -->
	<Fragment
		step={6}
		layout={{ x: 246.8, y: 199.8, width: 160.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, alignment: 'center' }}
		zIndex={10}
	>
		ISRAEL
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: 427.2, y: 207, width: 63.6, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, alignment: 'center' }}
		zIndex={20}
	>
		=
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: 499.3, y: 203.6, width: 187.3, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, alignment: 'center' }}
		zIndex={5}
	>
		CHURCH
	</Fragment>

	<!-- Step 7: "Old Testament = New Testament" -->
	<Fragment
		step={7}
		layout={{ x: 167.6, y: 267.7, width: 588.4, height: 44.4 }}
		font={{ font_size: 33.3 }}
		zIndex={19}
	>
		Old Testament = New Testament
	</Fragment>

	<!-- Step 8: "Perishable Weakness Dishonor" + "Imperishable Powerful Glorified" -->
	<Fragment
		step={8}
		layout={{ x: 514.1, y: 316.5, width: 157.4, height: 118 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={23}
	>
		<span class="wrap-text">Imperishable<br />Powerful<br />Glorified</span>
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: 262.2, y: 318.1, width: 130, height: 114.9 }}
		font={{ font_size: 26.7, bold: true, alignment: 'center' }}
		zIndex={22}
	>
		<span class="wrap-text">Perishable<br />Weakness<br />Dishonor</span>
	</Fragment>

	<!-- Step 9: "Glory #1" -->
	<Fragment
		step={9}
		layout={{ x: 261.8, y: 174.8, width: 130.8, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={15}
	>
		Glory #1
	</Fragment>

	<!-- Step 10: "Glory #2" -->
	<Fragment
		step={10}
		layout={{ x: 527.6, y: 180.4, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={11}
	>
		Glory #2
	</Fragment>

	<!-- Step 11: "Glory #3" + "HEAVEN" -->
	<Fragment
		step={11}
		layout={{ x: 745.8, y: 128.6, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={4}
	>
		Glory #3
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 730.8, y: 150, width: 177.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, color: 'var(--color-level3)', alignment: 'center' }}
		zIndex={14}
	>
		HEAVEN
	</Fragment>
</Slide>

<style>
	.timeline-line {
		position: absolute;
		background-color: #0000FF;
	}

	.vertical-line {
		position: absolute;
		background-color: #000000;
	}

	.connector-line.diagonal {
		position: absolute;
		background: linear-gradient(
			to bottom right,
			transparent calc(50% - 4px),
			#000000 calc(50% - 4px),
			#000000 calc(50% + 4px),
			transparent calc(50% + 4px)
		);
	}

	.connector-line.diagonal-up {
		position: absolute;
		background: linear-gradient(
			to top right,
			transparent calc(50% - 3px),
			#000000 calc(50% - 3px),
			#000000 calc(50% + 3px),
			transparent calc(50% + 3px)
		);
	}
</style>
