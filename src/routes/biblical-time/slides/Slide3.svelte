<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 3: Full Biblical Timeline with transitions and scripture references
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (960/1536)
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
	const linkLayer = 100;
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/03-Biblical_Time/Slide3.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: Biblical Time -->
	<Fragment
		layout={{ x: 300.5, y: 0, width: 292.4, height: 44.4 }}
		font={{ font_size: 32 }}
		zIndex={16}
	>
		Biblical Time
	</Fragment>

	<!-- Genesis 1:1 In the beginning… -->
	<Fragment
		layout={{ x: 83.6, y: 0, width: 212.1, height: 60.5 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={10}
	>
		Genesis 1:1<br/>In the beginning…
	</Fragment>

	<!-- Static Eternity left -->
	<Fragment
		layout={{ x: 62.4, y: 302.4, width: 142.1, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: '#0000FF' }}
		zIndex={5}
	>
		Eternity
	</Fragment>

	<!-- Static horizontal blue line (DASHED) -->
	<Fragment>
		<Line from={{ x: 0, y: 260.5 }} to={{ x: 960, y: 260.5 }} stroke={{ width: 4.6, color: '#0000FF', dash: '10,5' }} zIndex={17} />
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: Before time? -->
	<Fragment
		step={1}
		layout={{ x: 46.4, y: 111.1, width: 173.9, height: 30 }}
		font={{ font_size: 21.7, align: 'center' }}
		zIndex={4}
	>
		Before time?
	</Fragment>

	<!-- Step 2: Ephesians 1:4, John 17:24, 1 Peter 1:20, Jude 24-25 (drill link) -->
	<Fragment
		step={2}
		drillTo="biblical-time/ephesians-1-3"
		layout={{ x: 71.8, y: 352.8, width: 152.8, height: 88.8 }}
		font={{ font_size: 16.7, bold: true }}
		zIndex={linkLayer}
	>
		Ephesians 1:4<br/>John 17:24<br/>1 Peter 1:20<br/>Jude 24-25
	</Fragment>

	<!-- Step 3: Father + Son -->
	<Fragment
		step={3}
		layout={{ x: 94.3, y: 136.1, width: 70, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={6}
	>
		Father
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 104.6, y: 152.5, width: 49.3, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={7}
	>
		Son
	</Fragment>

	<!-- Step 4 (click): Holy Spirit -->
	<Fragment
		step={4}
		layout={{ x: 77.1, y: 167.4, width: 104.3, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={8}
	>
		Holy Spirit
	</Fragment>

	<!-- Step 5 (click): Angels Gospel -->
	<Fragment
		step={5}
		layout={{ x: 91.8, y: 186.6, width: 79.8, height: 50.4 }}
		font={{ font_size: 17.5, bold: true, color: '#0000FF' }}
		zIndex={9}
	>
		Angels<br/>Gospel
	</Fragment>

	<Fragment step={6}>
		<Line from={{ x: 196, y: 225.5 }} to={{ x: 196, y: 285.7 }} 
			  stroke={{ width: 6.7, color: 'var(--color-stroke-dark)' }} 
			  startMarker={{ radius: 8 }}  
			  endMarker={{ radius: 8 }} 
			  zIndex={34} />
	</Fragment>

	<!-- Step 6 (click): Horizontal timeline arrow (pointing right across full width) -->
	<Fragment 
		step={6} 
		animate="wipe"
		exitStep={14}
		>
		<Arrow from={{ x: 195, y: 260 }} to={{ x: 744, y: 260 }} stroke={{ width: 7, color: 'var(--color-stroke-dark)' }} zIndex={30} />
	</Fragment>

	<!-- Step 7 (click): End vertical line + End label -->
	<Fragment step={7} animate="wipe-down">
		<Line from={{ x: 748.9, y: 225.5 }} to={{ x: 748.9, y: 285.7 }} 
			  stroke={{ width: 6.7, color: 'var(--color-stroke-dark)' }} 
			  startMarker={{ radius: 8 }}  
			  endMarker={{ radius: 8 }} 
			  zIndex={34} />
	</Fragment>

	<Fragment
		step={7}
		layout={{ x: 787.8, y: 227.9, width: 56.1, height: 30.3 }}
		font={{ font_size: 20, bold: true }}
		zIndex={35}
		animate="fade"
	>
		End
	</Fragment>

	<!-- Step 8 (click): ALPHA + Revelation link (left) -->
	<Fragment
		step={8}
		layout={{ x: 92.5, y: 261.4, width: 82, height: 26.6 }}
		font={{ font_size: 17.5, bold: true }}
		zIndex={1}
	>
		ALPHA
	</Fragment>

	<Fragment
		step={8}
		drillTo="biblical-time/revelation-1-8"
		layout={{ x: 65.4, y: 279.6, width: 136.1, height: 31.6 }}
		font={{ font_size: 21.7, bold: true, align: 'center' }}
		zIndex={linkLayer}
	>
		Revelation
	</Fragment>

	<!-- Step 8 (after 1000ms): OMEGA + Revelation link (right) -->
	<Fragment
		step={8.2}
		layout={{ x: 765.9, y: 261.4, width: 88.1, height: 26.6 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={20}
		animate="fade"
	>
		OMEGA
	</Fragment>

	<Fragment
		step={8.2}
		drillTo="biblical-time/revelation-1-8"
		layout={{ x: 741.9, y: 281.3, width: 136.1, height: 31.6 }}
		font={{ font_size: 21.7, bold: true, align: 'center' }}
		zIndex={51}
		animate="fade"
	>
		Revelation
	</Fragment>

	<!-- Step 9 (click): Eternity (right) -->
	<Fragment
		step={9}
		layout={{ x: 738.9, y: 302.4, width: 142.2, height: 48.3 }}
		font={{ font_size: 33.3, bold: true, color: '#0000FF' }}
		zIndex={39}
	>
		Eternity
	</Fragment>

	<!-- Step 10 (click): PHYSICAL + horizontal line -->
	<Fragment
		step={10}
		layout={{ x: 177, y: 216.8, width: 210, height: 45.3 }}
		font={{ font_size: 30.8, bold: true, align: 'center' }}
		zIndex={22}
	>
		PHYSICAL
	</Fragment>

	<!-- Step 11 (click): ISRAEL -->
	<Fragment
		step={11}
		layout={{ x: 201.7, y: 174.3, width: 160.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={24}
	>
		ISRAEL
	</Fragment>

	<!-- Step 12 (click): Israel description box -->
	<Fragment
		step={12}
		layout={{ x: 205.3, y: 265.5, width: 250, height: 100 }}
		font={{ font_size: 16.7, wrap: true }}
		zIndex={36}
	>
		Chosen Nation, Promise land,<br/>Battle, Birthrights, Circumcision,<br/>Blood, Sacrifice, Worship,<br/>Jerusalem
	</Fragment>

	<!-- Step 13 (click): Hebrews 8:13 link -->
	<Fragment
		step={13}
		drillTo="biblical-time/hebrews-8-13"
		layout={{ x: 465, y: 271.4, width: 168.9, height: 24.6 }}
		font={{ font_size: 21.7, bold: true, v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Hebrews 8:13
	</Fragment>

	<!-- Step 14 (click): Transition label (rotated) -->
	<Fragment
		step={14}
		layout={{ x: 346, y: 190, width: 128.6, height: 36.1, rotation: -55 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={49}
	>
		Transition
	</Fragment>
	
	<Fragment step={14}>
		<Line from={{ x: 191.4, y: 260.8 }} to={{ x: 400, y: 260 }} stroke={{ width: 7, color: 'var(--color-stroke-dark)' }} zIndex={33} />
	</Fragment>

	<!-- Step 14 (after 500ms): Diagonal DASHED line + Matthew -->
	<Fragment step={14.1} animate="draw">
		<Line from={{ x: 396, y: 256 }} to={{ x: 467, y: 160 }} stroke={{ width: 3.8, color: '#000000', dash: '8,4' }} zIndex={60} />
	</Fragment>

	<Fragment
		step={14.1}
		layout={{ x: 390.9, y: 231.4, width: 118.1, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={40}
		animate="fade"
	>
		Matthew
	</Fragment>

	<!-- Step 14.2 (after 1000ms): Mark -->
	<Fragment
		step={14.2}
		layout={{ x: 387, y: 213, width: 118.1, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={41}
		animate="fade"
	>
		Mark
	</Fragment>

	<!-- Step 14.3 (after 1500ms): Luke -->
	<Fragment
		step={14.3}
		layout={{ x: 402, y: 193.6, width: 118.1, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={42}
		animate="fade"
	>
		Luke
	</Fragment>

	<!-- Step 14.4 (after 2000ms): John -->
	<Fragment
		step={14.4}
		layout={{ x: 414.2, y: 174.1, width: 118.1, height: 29.2 }}
		font={{ font_size: 17.5, bold: true, align: 'center' }}
		zIndex={43}
		animate="fade"
	>
		John
	</Fragment>

	<!-- Step 15 (click): Jesus... link -->
	<Fragment
		step={15}
		drillTo="biblical-time/matthew-5"
		layout={{ x: 177.2, y: 49.9, width: 177.8, height: 39.2 }}
		font={{ font_size: 28, v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Jesus...
	</Fragment>

	<!-- Step 15 (after 500ms): "you heard it said" + vertical line -->
	<Fragment
		step={15.1}
		layout={{ x: 152.1, y: 80, width: 250.2, height: 36.4 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={12}
		animate="fade"
	>
		"you heard it said"
	</Fragment>

	<Fragment step={15.1} animate="wipe-down">
		<Arrow from={{ x: 211.4, y: 115.6 }} to={{ x: 219, y: 181.3 }} stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={11} />
	</Fragment>

	<!-- Step 16 (click): "now I say to you" + connector line -->
	<Fragment
		step={16}
		layout={{ x: 303, y: 51, width: 220, height: 36 }}
		font={{ font_size: 26.7, italic: true }}
		zIndex={14}
	>
		"now I say to you"
	</Fragment>

	<Fragment step={16} animate="wipe-right">
		<Arrow from={{ x: 390.9, y: 91.1 }} to={{ x: 513.1, y: 119.7 }} stroke={{ width: 5, color: '#000000' }} zIndex={15} />
	</Fragment>

	<!-- Step 16 (after 500ms): CHURCH + connector lines -->
	<Fragment
		step={16.1}
		layout={{ x: 505.6, y: 84.3, width: 187.3, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, align: 'center' }}
		zIndex={19}
		animate="fade"
	>
		CHURCH
	</Fragment>

	<Fragment step={16.1} animate="draw">
		<Line from={{ x: 462, y: 165.2 }} to={{ x: 712.1, y: 165.2 }} stroke={{ width: 3.8, color: '#000000', dash: '10,5' }} zIndex={31} />
	</Fragment>

	<Fragment step={16.1} animate="draw">
		<Line from={{ x: 454.4, y: 173.4 }} to={{ x: 717.3, y: 173.4 }} stroke={{ width: 3.8, color: 'var(--color-level3', dash: '10,5' }} zIndex={56} />
	</Fragment>

	<!-- Step 17 (click): SPIRITUAL + 2 Corinthians 3:7-11 link -->
	<Fragment
		step={17}
		layout={{ x: 497.7, y: 124.7, width: 203, height: 45.3 }}
		font={{ font_size: 30.8, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={23}
	>
		SPIRITUAL
	</Fragment>

	<Fragment
		step={17}
		drillTo="biblical-time/2corinthians-3-7"
		layout={{ x: 476.1, y: 295, width: 210, height: 50 }}
		font={{ font_size: 21.7, bold: true, v_align: 'middle' }}
		zIndex={linkLayer}
	>
		2 Corinthians 3:7-11<br/>1 Peter 1:10-11
	</Fragment>

	<!-- Step 18 (click): Glory #1 -->
	<Fragment
		step={18}
		layout={{ x: 216.7, y: 150.3, width: 130.8, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={46}
	>
		Glory #1
	</Fragment>

	<!-- Step 19 (click): Glory #2 -->
	<Fragment
		step={19}
		layout={{ x: 534, y: 65.3, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={25}
	>
		Glory #2
	</Fragment>

	<!-- Step 20 (click): Church description box -->
	<Fragment
		step={20}
		layout={{ x: 502.1, y: 180, width: 250, height: 74.7 }}
		font={{ font_size: 16.7, color: 'var(--color-level3)', wrap: true }}
		zIndex={37}
	>
		Church Nation, Promise land,<br/>Battle, Birthrights, Circumcision,<br/>Blood, Sacrifice, Worship,<br/>Heavenly Jerusalem
	</Fragment>

	<!-- Step 21 (click): Romans 8:18 link -->
	<Fragment
		step={21}
		drillTo="biblical-time/romans-8-18"
		layout={{ x: 732.2, y: 135.8, width: 143.4, height: 72.7 }}
		font={{ font_size: 20, bold: true, v_align: 'middle' }}
		zIndex={linkLayer}
	>
		Romans 8:18<br/>2 Cor. 4:17<br/>2 Timothy 2:8
	</Fragment>

	<!-- Step 22 (click): Diagonal DASHED purple line to Eternal + ETERNAL label -->
	<Fragment step={22} animate="wipe-up">
		<Line from={{ x: 716, y: 113 }} to={{ x: 716, y: 172 }} stroke={{ width: 3.8, color: 'var(--color-level3)', dash: '10,5' }} zIndex={59} />
	</Fragment>

	<!-- Step 22 (after): Blue DASHED vertical line to Eternal + ETERNAL -->
	<Fragment step={22.1} animate="wipe">
		<Line from={{ x: 715, y: 115 }} to={{ x: 958, y: 115 }} stroke={{ width: 4.4, color: 'var(--color-level3)', dash: '10,5' }} zIndex={32} />
	</Fragment>

	<Fragment
		step={22.1}
		layout={{ x: 738.3, y: 86.1, width: 128.9, height: 27.2 }}
		font={{ font_size: 26.7, bold: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={21}
		animate="fade"
	>
		ETERNAL
	</Fragment>

	<!-- Step 23 (click): Glory #3 -->
	<Fragment
		step={23}
		layout={{ x: 737.4, y: 16.1, width: 130.6, height: 29.2 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={18}
	>
		Glory #3
	</Fragment>

	<!-- Step 24 (click): HEAVEN -->
	<Fragment
		step={24}
		layout={{ x: 713.8, y: 37.6, width: 177.8, height: 55.4 }}
		font={{ font_size: 39.2, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={45}
	>
		HEAVEN
	</Fragment>

	<!-- Step 25 (click): 2 Corinthians 3:18 + full text -->
	<Fragment
		step={25}
		layout={{ x: 75, y: 442.6, width: 252.6, height: 30.3 }}
		font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
		line={{ width: 0.6 }}
		zIndex={47}
	>
		2 Corinthians 3:18
	</Fragment>

	<Fragment
		step={25}
		layout={{ x: 82.4, y: 469.8, width: 795.3, height: 56.4 }}
		font={{ font_size: 20, wrap: true }}
		zIndex={48}
	>
		And we, who with unveiled faces all reflect the Lord's glory, are being transformed into his likeness with ever-increasing glory, which comes from the Lord, who is the Spirit.
	</Fragment>

	<!-- Step 26 (click): Does God Change? link -->
	<Fragment
		step={26}
		drillTo="biblical-time/james-1-17"
		layout={{ x: 770.6, y: 403.1, width: 115.8, height: 50.4 }}
		font={{ font_size: 17.5, bold: true }}
		line={{ width: 0.8 }}
		zIndex={linkLayer}
	>
		Does God<br/>Change?
	</Fragment>

	<!-- Step 27 (click): Romans 7:14 box -->
	<Fragment
		step={27}
		layout={{ x: 220, y: 354, width: 550, height: 58.6 }}
		font={{ font_size: 22, bold: true, align: 'left' }}
	>
		Romans 7:14 We know that the Law is spiritual;<br/>but I am unspiritual, sold as a slave to sin.
	</Fragment>

	<!-- Step 28 (click): Connector ARROW lines to Romans 7:14 -->
	<Fragment step={28} animate="wipe-down">
		<Arrow from={{ x: 414.2, y: 320 }} to={{ x: 530, y: 364 }} stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={50} />
	</Fragment>

	<Fragment step={28} animate="wipe-down">
		<Arrow from={{ x: 669, y: 234.2 }} to={{ x: 683.8, y: 358.6 }} stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={57} />
	</Fragment>

	<!-- Step 29 (click): ...How? -->
	<Fragment
		step={29}
		layout={{ x: 650, y: 375, width: 125.9, height: 38.4 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={58}
	>
		...How?
	</Fragment>

	<!-- Step 30 (click): Tutor + Galatians 3:24-25 link -->
	<Fragment
		step={30}
		drillTo="biblical-time/galatians-3-24"
		layout={{ x: 290, y: 413.4, width: 79.6, height: 34.3 }}
		font={{ font_size: 23.3, bold: true }}
		zIndex={linkLayer}
	>
		Tutor:
	</Fragment>

	<Fragment
		step={30}
		drillTo="biblical-time/galatians-3-24"
		layout={{ x: 377.9, y: 417.8, width: 385, height: 46.4 }}
		font={{ font_size: 16.7 }}
		line={{ width: 1 }}
		zIndex={linkLayer}
	>
		Galatians 3:24-25, Romans 15:4, 1Corinthians 10:11,<br/>Colossians 2:16-17, Hebrews 10:1
	</Fragment>
</Slide>

<style>
</style>
