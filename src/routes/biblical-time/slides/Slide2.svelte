<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 2: Timeline diagram - Alpha/Omega, Physical/Spiritual
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (960/1536)
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();

	// Two-column layout: each 270px wide, meeting at center of 960px canvas
	const GL = { x: 0, w: 210 };    // Left gutter
	const L = { x: 210, w: 270 };   // Left column (PHYSICAL)
	const R = { x: 480, w: 270 };   // Right column (SPIRITUAL)
	const GR = { x: 750, w: 210 };  // Right gutter
	const center = (col: { x: number; w: number }, fw: number) => col.x + (col.w - fw) / 2;
	const pageCenter = (fw: number) => (960 - fw) / 2;
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/03-Biblical_Time/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Static horizontal timeline line (visible throughout) - DASHED blue line -->
	<Fragment>
		<Line from={{ x: 0, y: 260 }} to={{ x: 960, y: 260 }} stroke={{ width: 4.8, color: 'var(--color-level3)', dash: '10,5' }} zIndex={3} />
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<Fragment
		step={1}
		layout={{ x: center(GL, 142.1), y: 302.4, width: 142.1, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--color-level3)' }}
		zIndex={1}
	>
		Eternity
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: center(GL, 110.9), y: 220, width: 110.9, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={1}
	>
		Beginning
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: center(GL, 82), y: 265, width: 82, height: 26.6 }}
		font={{ font_size: 17.5, bold: true }}
		zIndex={2}
	>
		ALPHA
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: center(GR, 56.1), y: 220, width: 56.1, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={25}
	>
		End
	</Fragment>

	<Fragment step={3.1} animate="wipe">
		<Line from={{ x: 102, y: 260 }} to={{ x: 855, y: 260 }} stroke={{ width: 6.7, color: 'var(--color-stroke-dark)' }} 
			  startMarker={{ radius: 8 }}  
			  endMarker={{ radius: 8 }} zIndex={24} />
	</Fragment>

	<Fragment
		step={3.1}
		layout={{ x: center(GR, 88.1), y: 265, width: 88.1, height: 26.6 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={5}
		animate="fade"
	>
		OMEGA
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: center(GR, 142.2), y: 302.4, width: 142.2, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--color-level3)' }}
		zIndex={19}
	>
		Eternity
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: center(L, 220), y: 21.9, width: 220, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={12}
	>
		Copy/Shadow
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: pageCenter(50), y: 21.9, width: 50, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={12}
	>
		=
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: center(R, 250), y: 21.9, width: 250, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center', color: 'var(--color-level3)' }}
		zIndex={12}
	>
		True/Substance
	</Fragment>

	<Fragment step={5} animate="wipe-down">
		<Rect x={L.x} y={0} width={L.w} height={540} fill="var(--color-level1)" zIndex={1} />
		<Rect x={R.x} y={0} width={R.w} height={540} fill="var(--color-level2)" zIndex={0} />
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: center(R, 221.9), y: 66.1, width: 221.9, height: 88.3 }}
		font={{ font_size: 33.3, color: 'var(--color-level3)', v_align: 'middle' }}
		zIndex={21}
	>
		Eternal<br/>Unseen
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: center(R, 167), y: 270.4, width: 167, height: 108 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--color-level3)', align: 'center' }}
		zIndex={17}
	>
		Imperishable<br/>Powerful<br/>Glorified
	</Fragment>

	<Fragment
		step={7}
		layout={{ x: center(R, 203), y: 204.2, width: 203, height: 45.3 }}
		font={{ font_size: 30.8, bold: true, color: 'var(--color-level3)', align: 'center' }}
		zIndex={7}
	>
		SPIRITUAL
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: center(L, 263.6), y: 71.7, width: 263.6, height: 76.4 }}
		font={{ font_size: 33.3, v_align: 'middle' }}
		zIndex={20}
	>
		Temporary<br/>Visible
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: center(L, 167), y: 269.8, width: 167, height: 108 }}
		font={{ font_size: 26.7, bold: true, align: 'center' }}
		zIndex={16}
	>
		Perishable<br/>Weakness<br/>Dishonor
	</Fragment>

	<Fragment
		step={9}
		layout={{ x: center(L, 210), y: 204.2, width: 210, height: 45.3 }}
		font={{ font_size: 30.8, bold: true, align: 'center' }}
		zIndex={6}
	>
		PHYSICAL
	</Fragment>

	<Fragment
		step={10}
		layout={{ x: center(L, 160.8), y: 148.3, width: 160.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={8}
	>
		ISRAEL
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: center(R, 187.3), y: 152, width: 187.3, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={4}
	>
		CHURCH
	</Fragment>

	<!-- Step 12 (click): = signs -->
	<Fragment
		step={12}
		layout={{ x: pageCenter(63.6), y: 155.4, width: 63.6, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, align: 'center' }}
		zIndex={14}
	>
		=
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: pageCenter(95.8), y: 202.9, width: 95.8, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, align: 'center' }}
		zIndex={15}
	>
		=
	</Fragment>

	<!-- Step 13 (click): Old Testament = New Testament -->
	<Fragment
		step={13}
		layout={{ x: pageCenter(756), y: 399.3, width: 756, height: 44.4 }}
		font={{ font_size: 33.3, bold: true, align: 'center' }}
		zIndex={13}
	>
		Old Testament = New Testament
	</Fragment>
</Slide>

<style>
</style>
