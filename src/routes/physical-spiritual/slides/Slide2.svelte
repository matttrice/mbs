<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect } from '$lib/components/svg';
    import Line from '$lib/components/svg/Line.svelte';
    import Arc from '$lib/components/svg/Arc.svelte';

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

	// Two-column layout: each 270px wide, meeting at center of 960px canvas
	const GL = { x: 0, w: 210 };    // Left gutter
	const L = { x: 210, w: 270 };   // Left column (PHYSICAL)
	const R = { x: 480, w: 270 };   // Right column (SPIRITUAL)
	const GR = { x: 750, w: 210 };  // Right gutter
	const center = (col: { x: number; w: number }, fw: number) => col.x + (col.w - fw) / 2;
	const pageCenter = (fw: number) => (960 - fw) / 2;

	// Delta for swap animation: distance text slides between column centers
	const swapDx = center(R, 238.5) - center(L, 230.6);
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/02-Physical_Spiritual/Slide2.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Static horizontal timeline line (visible throughout) - DASHED blue line -->
	<Fragment>
		<Line from={{ x: 0, y: 260 }} to={{ x: 960, y: 260 }} stroke={{ width: 4.8, color: 'var(--bg-level-3)', dash: '10,5' }} zIndex={3} />
	</Fragment>

	<Fragment
		layout={{ x: center(GL, 142.1), y: 302.4, width: 142.1, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={1}
	>
		Eternity
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->
	<Fragment
		step={1}
		layout={{ x: center(GL, 110.9), y: 220, width: 110.9, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={1}
	>
		Beginning
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: center(GL, 82), y: 265, width: 82, height: 26.6 }}
		font={{ font_size: 17.5, bold: true }}
		zIndex={1}
	>
		ALPHA
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: center(GR, 56.1), y: 220, width: 56.1, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={1}
	>
		End
	</Fragment>
	
	<Fragment step={1} animate="wipe">
		<Line from={{ x: 102, y: 260 }} to={{ x: 855, y: 260 }} stroke={{ width: 6.7, color: 'var(--stroke-level-0)' }} 
			  startMarker={{ radius: 8 }}  
			  endMarker={{ radius: 8 }} zIndex={24} />
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: center(GR, 88.1), y: 265, width: 88.1, height: 26.6 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={1}
	>
		OMEGA
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: center(GR, 142.2), y: 302.4, width: 142.2, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={1}
	>
		Eternity
	</Fragment>
	
	<Fragment
		step={2}
		layout={{ x: 44.9, y: 81.6, width: 41.9, height: 45.6 }}
		font={{ font_size: 50, color: 'var(--bg-level-3)' }}
		zIndex={68}
	>
		E
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 75.4, y: 82.1, width: 29.2, height: 45.6 }}
		font={{ font_size: 39.2 }}
		zIndex={70}
	>
		=
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 99.6, y: 81.8, width: 48, height: 45.6 }}
		font={{ font_size: 50}}
		zIndex={69}
	>
		m
	</Fragment>
	
	<Fragment
		step={2}
		layout={{ x: 131.6, y: 81.4, width: 63, height: 45.6 }}
		font={{ font_size: 50, color: 'var(--bg-level-3)' }}
		zIndex={71}
	>
		c²
	</Fragment>

	<!-- Step 1: Background columns appear (SPIRITUAL left blue, PHYSICAL right gray) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={L.x} y={0} width={L.w} height={540} fill="var(--bg-level-2)" zIndex={0} />
		<Rect x={R.x} y={0} width={R.w} height={540} fill="var(--bg-level-1)" zIndex={0} />
	</Fragment>
	
	<!-- SPIRITUAL label fades in left, slides right at step -->
	<Fragment
		step={2}
		animate="fly-down"
		layout={{ x: center(L, 230.6), y: 7, width: 230.6, height: 52.4 }}
		font={{ font_size: 36.7, bold: true, color: 'var(--bg-level-3)', align: 'center' }}
		keyframes={[{ step: 5, x: swapDx }]}
		transition={{ duration: 800 }}
		zIndex={2}
	>
		SPIRITUAL
	</Fragment>
	
	<Fragment
		step={2}
		layout={{ x: pageCenter(95.8), y: 13.4, width: 95.8, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, align: 'center' }}
		zIndex={2}
	>
		=
	</Fragment>
	<!-- PHYSICAL label fades in right, slides left at step -->
	<Fragment
		step={2}
		animate="fly-down"
		layout={{ x: center(R, 238.5), y: 7, width: 238.5, height: 52.4 }}
		font={{ font_size: 36.7, bold: true, align: 'center' }}
		keyframes={[{ step: 5, x: -swapDx }]}
		transition={{ duration: 800 }}
		zIndex={2}
	>
		PHYSICAL
	</Fragment>

	<!-- EMC2 Arrows -->
	<Fragment step={3} animate="draw">
		<Arc from={{ x: 77, y: 80 }} to={{ x: 114, y: 79 }} curve={-50} stroke={{ width: 3, color: 'var(--bg-level-3)' }} arrow  />
	</Fragment>

	<Fragment step={4} animate="draw">
		<Arc from={{ x: 141, y: 86 }} to={{ x: 68, y: 74 }} curve={90} shift={20} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} arrow />
	</Fragment>

	<!-- Step 2: Background columns swap (gray left, blue right) -->
	<Fragment step={5} animate="wipe-left">
		<Rect x={L.x} y={0} width={L.w} height={540} fill="var(--bg-level-1)" zIndex={1} />
	</Fragment>

	<Fragment step={5} animate="wipe-right">
		<Rect x={R.x} y={0} width={R.w} height={540} fill="var(--bg-level-2)" zIndex={1} />
	</Fragment>
	
	<Fragment
		step={6}
		layout={{ x: center(L, 263.6), y: 50.6, width: 263.6, height: 76.4 }}
		font={{ font_size: 33.3, bold: true, wrap: true }}
		zIndex={26}
	>
		Temporary<br />Visible
	</Fragment>

	<Fragment
		step={7}
		layout={{ x: center(R, 221.9), y: 45, width: 221.9, height: 88.3 }}
		font={{ font_size: 33.3, bold: true, color: 'var(--bg-level-3)', wrap: true }}
		zIndex={27}
	>
		Eternal<br />Unseen
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: center(L, 220), y: 126.8, width: 220, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={18}
	>
		Copy/Shadow
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: pageCenter(50), y: 126.8, width: 50, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center' }}
		zIndex={18}
	>
		=
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: center(R, 250), y: 126.8, width: 250, height: 47.9 }}
		font={{ font_size: 30, bold: true, align: 'center', color: 'var(--bg-level-3)' }}
		zIndex={18}
	>
		True/Substance
	</Fragment>

	<Fragment
		step={9}
		drillTo="physical-spiritual/hebrews-9-22"
		layout={{ x: 14.6, y: 133.8, width: 205.6, height: 34.3 }}
		font={{ font_size: 23.3, bold: true }}
		fill="var(--bg-level-2)"
		zIndex={32}
	>
		Hebrews 9:22-24
	</Fragment>

	<Fragment
		step={10}
		layout={{ x: center(L, 160.8), y: 199.8, width: 160.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={10}
	>
		ISRAEL
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: pageCenter(63.6), y: 207, width: 63.6, height: 47.9 }}
		font={{ font_size: 33.3, bold: true, align: 'center' }}
		zIndex={20}
	>
		=
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: center(R, 187.3), y: 203.6, width: 187.3, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={5}
	>
		CHURCH
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: pageCenter(575), y: 267.7, width: 588.4, height: 44.4 }}
		font={{ font_size: 33.3 }}
		zIndex={19}
	>
		Old Testament = New Testament
	</Fragment>

	<Fragment
		step={13}
		layout={{ x: center(R, 157.4), y: 316.5, width: 157.4, height: 118 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--bg-level-3)', wrap: true }}
		zIndex={23}
	>
		Imperishable<br />Powerful<br />Glorified
	</Fragment>

	<Fragment
		step={14}
		layout={{ x: center(L, 130), y: 318.1, width: 130, height: 114.9 }}
		font={{ font_size: 26.7, bold: true, wrap: true }}
		zIndex={22}
	>
		Perishable<br />Weakness<br />Dishonor
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: center(L, 130.8), y: 174.8, width: 130.8, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--bg-level-3)', align: 'center' }}
		zIndex={15}
	>
		Glory #1
	</Fragment>

	<Fragment
		step={16}
		layout={{ x: center(R, 130.6), y: 180.4, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--bg-level-3)', align: 'center' }}
		zIndex={11}
	>
		Glory #2
	</Fragment>

	<Fragment
		step={17}
		layout={{ x: center(GR, 130.6), y: 128.6, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: 'var(--bg-level-3)', align: 'center' }}
		zIndex={4}
	>
		Glory #3
	</Fragment>

	<Fragment
		step={17}
		layout={{ x: center(GR, 177.8), y: 150, width: 177.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, color: 'var(--bg-level-3)', align: 'center' }}
		zIndex={14}
	>
		HEAVEN
	</Fragment>
</Slide>