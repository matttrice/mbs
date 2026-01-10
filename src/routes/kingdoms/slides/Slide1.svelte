<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect, Arrow, Line, Arc } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();

    const bgLayer = 0
    const boxLayer = 1
    const textLayer = 2
    const questionMark = { font_size: 30, bold: true, color: 'var(--color-text-bright)' }
    const boxQuestion = { font_size: 24 }
    const boxAnswer = { font_size: 24, bold: true, italic: true }
</script>

<Slide {slideIndex}>

    <ReferenceOverlay src="/export/08-Kingdoms/Slide1.png" />

	<!-- Static Content -->
	<!-- Background rectangle (light blue) -->
	<Fragment>
		<Rect x={0} y={0} width={961} height={541} fill="var(--color-level2)" zIndex={bgLayer} />
	</Fragment>

	<!-- Static Kingdom box (left, top) -->
	<Fragment>
		<Rect x={30} y={19} width={450} height={218} fill="var(--color-bg-ghost)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Static "Kingdom" label (left) -->
	<Fragment
		layout={{ x: 35, y: 28, width: 128, height: 38 }}
		font={{ wrap: true, font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		Kingdom
	</Fragment>

	<!-- ANIMATION SEQUENCE -->

	<!-- Step 1: Genesis scripture reference (drill) -->
	<Fragment
		step={1}
		drillTo="kingdoms/genesis-1-31"
		layout={{ x: 275, y: 20, width: 190, height: 62 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Genesis 1:31, Job 38:32-33<br/>1 Chronicles 29:10-11<br/>Psalms 47:2
	</Fragment>

	<!-- Step 2: "of Nature" label -->
	<Fragment
		step={2}
		layout={{ x: 144, y: 28, width: 146, height: 38 }}
		font={{font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		of Nature
	</Fragment>

	<!-- Step 3: "King:" label -->
	<Fragment
		step={3}
		layout={{ x: 44, y: 60, width: 51, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		King:
	</Fragment>

	<!-- Step 3: "Subjects:" label -->
	<Fragment
		step={3}
		layout={{ x: 32, y: 82, width: 120, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Subjects:
	</Fragment>

	<!-- Step 3: "Law:" label -->
	<Fragment
		step={3}
		layout={{ x: 44, y: 103, width: 51, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Law:
	</Fragment>

	<Fragment
		step={3.1}
		layout={{ x: 105, y: 65, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={4}
	>
		?
	</Fragment>

	<!-- Step 4: "God" for King -->
	<Fragment
		step={4}
		layout={{ x: 90, y: 60, width: 65, height: 30 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		God
	</Fragment>

	<!-- "?" for Subjects -->
	<Fragment
		step={5}
		layout={{ x: 145, y: 83, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={7}
	>
		?
	</Fragment>

	<!-- Step 6: Genesis 3 scripture drill -->
	<Fragment
		step={6}
		drillTo="kingdoms/genesis-3-6"
		layout={{ x: 365, y: 115, width: 100, height: 49 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Genesis 3:6-8 Matthew 18:2-3 Matthew 19:14
	</Fragment>

	<!-- Step 7: "Innocent" for Subjects -->
	<Fragment
		step={7}
		layout={{ x: 135, y: 81, width: 120, height: 30 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Innocent
	</Fragment>

	<!-- Step 8: Innocent description -->
	<Fragment
		step={8}
		layout={{ x: 300, y: 72, width: 170, height: 40 }}
		font={{ v_align: 'middle', wrap: true, font_size: 10.0, italic: true, bold: true, color: 'var(--color-level3)' }}
		zIndex={textLayer}
        line={{ width:2, color: 'var(--color-level3)' }}
	>
		Lacking moral categories; no law against sin; pre-fallen Adam & Eve, children, etc.
	</Fragment>

	<!-- Step 9: "?" for Law -->
	<Fragment
		step={9}
		layout={{ x: 100, y: 109, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={10}
	>
		?
	</Fragment>

	<!-- Step 10: "Natural, Innocence" for Law -->
	<Fragment
		step={10}
		layout={{ x: 103, y: 103, width: 202, height: 30 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Natural, Innocence
	</Fragment>

	<!-- Step 11: "State of Safety" label -->
	<Fragment
		step={11}
		layout={{ x: 71, y: 134, width: 158, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--color-level3)' }}
		zIndex={textLayer}
	>
		State of Safety
	</Fragment>

	<!-- Step 11: Safety description -->
	<Fragment
		step={11}
		layout={{ x: 72, y: 162, width: 156, height: 33 }}
		font={{ align: 'center', font_size: 11.7, wrap: true }}
		zIndex={textLayer}
	>
		Relationship maintained with God through innocence
	</Fragment>

	<!-- Step 12: "Options?" box -->
	<Fragment
		step={12}
		layout={{ x: 402, y: 212, width: 154, height: 57 }}
		fill="#F4F4F4"
		line={{ width: 8, color: '#000000' }}
		font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 26.7, bold: true }}
		zIndex={100}
        exitStep={13}
	>
		Options ?
	</Fragment>

	<Fragment step={13}>
	    <!-- Step 13: Light blue background (right side) -->        
        <Rect x={369} y={0} width={592} height={236} fill="var(--color-level2)" zIndex={bgLayer} />
        <!-- Eternal Kingdom box -->
        <Rect x={480} y={19} width={450} height={218} fill="var(--color-bg-ghost)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={boxLayer} />
        <!-- White door -->
        <Rect x={475} y={152} width={10} height={55} fill="var(--color-bg-ghost)" zIndex={boxLayer} />
    </Fragment>

	<!-- Step 13: "Eternal" label -->
	<Fragment
		step={13}
		layout={{ x: 490, y: 24, width: 250, height: 38 }}
		font={{ wrap: true, font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		Eternal Kingdom
	</Fragment>

	<Fragment
		step={14}
		layout={{ x: 455, y: 148, width: 76, height: 22 }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

    <Fragment step={14} animate="wipe-right">
        <Arrow 
            from={{ x: 400, y: 185 }} 
            to={{ x: 590, y: 185 }} 
            stroke={{ width: 35, color: 'var(--color-stroke-dark)' }}
            headSize={1.5} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<!-- Step 14: Death arrow (horizontal, physical death to Eternal Kingdom) -->
	<Fragment
		step={14}
		layout={{ x: 433, y: 160, width: 100, height: 50 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 24, bold: true, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer}
	>
		DEATH
	</Fragment>

	<!-- Step 14: 2 Samuel drill -->
	<Fragment
		step={14}
		drillTo="kingdoms/2-samuel-12-21"
		layout={{ x: 491, y: 211, width: 111, height: 20 }}
		font={{ align: 'right', font_size: 11.7 }}
		zIndex={55}
	>
		2 Samuel 12:21-23
	</Fragment>

	<!-- Eternal Kingdom labels:-->
	<Fragment
		step={15}
		layout={{ x: 491, y: 65, width: 52, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		King:
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: 489, y: 87, width: 102, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Subjects:
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: 491, y: 108, width: 49, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Law:
	</Fragment>

	<!-- "?" for Eternal Kingdom King -->
	<Fragment
		step={15.1}
		layout={{ x: 542, y: 65, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
		exitStep={16}
	>
		?
	</Fragment>

    	<!-- "?" for Eternal Kingdom Subjects -->
	<Fragment
		step={15.2}
		layout={{ x: 590, y: 87, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
		exitStep={17}
	>
		?
	</Fragment>

	<!-- "?" for Eternal Kingdom Law -->
	<Fragment
		step={15.3}
		layout={{ x: 542, y: 108, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
		exitStep={18}
	>
		?
	</Fragment>

	<!-- Step 16: "God" (Eternal Kingdom King) -->
	<Fragment
		step={16}
		layout={{ x: 540, y: 61, width: 59, height: 34 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		God
	</Fragment>

	<!-- Step 17: "Innocent" (Eternal Kingdom Subjects) -->
	<Fragment
		step={17}
		layout={{ x: 586, y: 82, width: 115, height: 34 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Innocent
	</Fragment>

	<!-- Step 18: "God" (Eternal Kingdom Law) -->
	<Fragment
		step={18}
		layout={{ x: 534, y: 104, width: 61, height: 34 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		God
	</Fragment>

	<!-- Step 19: Age of Accountability label -->
	<Fragment
		step={19}
		layout={{ x: 49, y: 212, width: 220, height: 22 }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		Age of Accountability = Morality
	</Fragment>

	<!-- Step 19: Orange background (Kingdom of the World area, with) -->
	<Fragment step={19} animate="wipe-down">
		<Rect x={-1} y={204} width={962} height={336} fill="var(--color-bg-cmd-law)" zIndex={bgLayer} />
		<Line from={{ x: 36, y: 211 }} to={{ x: 474, y: 212 }} stroke={{ width: 7, color: 'var(--color-bg-cmd-law', dash: '10,5' }} zIndex={boxLayer} />
		<Rect x={30} y={237} width={450} height={236} fill="var(--color-bg-ghost)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={boxLayer} />
		<Line from={{ x: 270, y: 231 }} to={{ x: 430, y: 231 }} stroke={{ width: 23, color: 'var(--color-bg-ghost)' }} zIndex={boxLayer} />
    </Fragment>

	<!-- Step 20: Romans 3:23 drill -->
	<Fragment
		step={20}
		drillTo="kingdoms/romans-3-23"
		layout={{ x: 29, y: 240, width: 241, height: 18 }}
		fill="var(--color-bg-cmd-law)"
		font={{font_size: 12 }}
		zIndex={56}
	>
		Romans 3:23 Isaiah 59:2, Romans 6:23
	</Fragment>

    <!-- Step 21: "(spiritual)" label -->
	<Fragment
		step={21}
		layout={{ x: 345, y: 227, width: 67, height: 20 }}
		font={{ font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(spiritual)
	</Fragment>

    <Fragment step={21} animate="wipe-down">
        <Arrow 
            from={{ x: 325, y: 198 }} 
            to={{ x: 325, y: 350 }} 
            stroke={{ width: 35, color: 'var(--color-level2)' }}
            headSize={1.5} 
            zIndex={textLayer+1} 
        />
    </Fragment>

	<!-- Step 21: Spiritual Death -->
	<Fragment
		step={21}
		layout={{ x: 308, y: 210, width: 35, height: 100 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 24, bold: true, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer+1}
	>
		<div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 24px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<!-- Step 21.1: King label -->
	<Fragment
		step={21}
		layout={{ x: 44, y: 285, width: 50, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		King:
	</Fragment>

	<Fragment
		step={21}
		layout={{ x: 30, y: 308, width: 120, height: 26 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Subjects:
	</Fragment>

	<!-- Law label -->
	<Fragment
		step={21}
		layout={{ x: 44, y: 327, width: 48, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Law:
	</Fragment>

	<!-- "?" for World King -->
	<Fragment
		step={21.1}
		layout={{ x: 100, y: 285, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={22}
	>
		?
	</Fragment>

	<!-- "?" for World Subjects -->
	<Fragment
		step={21.1}
		layout={{ x: 140, y: 307, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={24}
	>
		?
	</Fragment>

	<!-- "?" for World Law -->
	<Fragment
		step={21.1}
		layout={{ x: 100, y: 330, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
        exitStep={25}
	>
		?
	</Fragment>

	<!-- 2 Corinthians 4:4 drill (after) -->
	<Fragment
		step={21.1}
		drillTo="kingdoms/2-corinthians-4-4"
		layout={{ x: 355, y: 250, width: 120, height: 20 }}
		font={{ align: 'right', font_size: 11.7, wrap: true }}
		zIndex={textLayer}
	>
		2 Corinthians 4:3-4<br/>Matthew 4:8-9
	</Fragment>

	<!-- Step "Kingdom" label (after) -->
	<Fragment
		step={21.1}
		layout={{ x: 32, y: 254, width: 127, height: 36 }}
		font={{ font_size: 25, bold: true }}
		zIndex={textLayer}
	>
		Kingdom
	</Fragment>

	<!-- Step "of the World" -->
	<Fragment
		step={22}
		layout={{ x: 132, y: 254, width: 182, height: 36 }}
		font={{ font_size: 25, bold: true }}
		zIndex={textLayer}
	>
		of the World
	</Fragment>

	<!-- Step 22: "Satan" -->
	<Fragment
		step={22}
		layout={{ x: 95, y: 285, width: 75, height: 28 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Satan
	</Fragment>

	<!-- Step 22: "State of Danger" -->
	<Fragment
		step={22}
		layout={{ x: 71, y: 358, width: 158, height: 30  }}
		font={{ font_size: 22, font_name:'Arial Black', bold: true, color: 'var(--color-bg-cmd-law)' }}
		zIndex={textLayer}
	>
		State of Danger
	</Fragment>

	<!-- Step 22: Danger description -->
	<Fragment
		step={22.2}
		layout={{ x: 65, y: 378, width: 186, height: 38 }}
		font={{ wrap: true, font_size: 13 }}
		zIndex={textLayer}
	>
		Separated from relationship with God due to conscience
	</Fragment>

	<!-- Step 23: Ephesians 5:3-7 drill -->
	<Fragment
		step={23}
		drillTo="kingdoms/ephesians-5-3"
		layout={{ x: 340, y: 280, width: 135, height: 40 }}
		font={{ align: 'right', font_size: 12, wrap: true }}
		zIndex={textLayer}
	>
		Ephesians 5:3-7<br/>2 Thessalonians 2:9-2<br/>Matthew 7:13
	</Fragment>

	<!-- Step 24: "Sinners" -->
	<Fragment
		step={24}
		layout={{ x: 138, y: 305, width: 98, height: 35 }}
		font={boxAnswer}
		zIndex={textLayer+1}
	>
		Sinners
	</Fragment>

	<!-- Step 25: "Moral, Sin & Death" for Law -->
	<Fragment
		step={25}
		layout={{ x: 93, y: 330, width: 216, height: 24 }}
		font={boxAnswer}
        fill="var(--color-bg-ghost)"
		zIndex={textLayer}
	>
		Moral, Sin & Death
	</Fragment>

	<!-- Step 25: "(unable to cleanse conscience)" -->
	<Fragment
		step={25}
		layout={{ x: 80, y: 355, width: 221, height: 10 }}
		font={{font_size: 11.7, italic: true }}
        fill="var(--color-bg-ghost)"
		zIndex={textLayer}
	>
		(unable to cleanse conscience)
	</Fragment>

	<!-- Step 26: White line connector below World box -->
	<Fragment step={26} animate="wipe">
		<Line from={{ x: 270, y: 469 }} to={{ x: 406, y: 469 }} stroke={{ width: 8, color: 'var(--color-bg-ghost)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Step 26.1: "(physical)" label -->
	<Fragment
		step={26.1}
		layout={{ x: 286, y: 359, width: 76, height: 22  }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

    <Fragment step={26.1} animate="wipe-down">
        <Arrow 
            from={{ x: 325, y: 378 }} 
            to={{ x: 325, y: 518 }} 
            stroke={{ width: 35, color: 'var(--color-stroke-dark)' }}
            headSize={1.5} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<!-- Step 26.1: Physical Death arrow (down, after) -->
	<Fragment
		step={26.1}
		layout={{ x: 308, y: 385, width: 35, height: 105 }}
		font={{ v_align: 'middle', align: 'center', font_name: 'Arial Black', font_size: 23.3, bold: true, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer}
	>
	    <div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 24px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<!-- Step 26.1: 2 Peter 2:1-4 drill -->
	<Fragment
		step={26.1}
		drillTo="kingdoms/2-peter-2-1"
		layout={{ x: 100, y: 472, width: 92, height: 22 }}
		font={{ font_size: 18, bold: true }}
		zIndex={textLayer}
	>
		2 Peter 2:1-4
	</Fragment>

	<!-- Step 27: "Tartarus/Hades - Hopeless" -->
	<Fragment
		step={27}
		layout={{ x: 40, y: 483, width: 270, height: 30 }}
		font={{ wrap: true, bold: true }}
		zIndex={textLayer}
	>
		Tartarus/Hades - Hopeless
	</Fragment>

	<!-- Step 27: Black bar at bottom -->
	<Fragment step={27}>
		<Rect x={-1} y={514} width={962} height={28} fill="#000000" zIndex={bgLayer} />
	</Fragment>

	<!-- Step 27: Gray bar -->
	<Fragment step={27}>
		<Rect x={-1} y={473} width={963} height={41} fill="#969696" zIndex={bgLayer} />
	</Fragment>

	<!-- Step 27: "Judgement" label -->
	<Fragment
		step={27}
		layout={{ x: 434, y: 483, width: 131, height: 30 }}
		font={{ wrap: true, align: 'center', bold: true }}
		zIndex={67}
	>
		Judgement
	</Fragment>

	<!-- Step 27: Gray rectangle for 2nd Death -->
	<Fragment step={27}>
		<Rect x={516} y={492} width={149} height={49} fill="#969696" zIndex={boxLayer} />
	</Fragment>

	<!-- Step 27: Red down arrow box -->
	<Fragment step={27}>
		<Rect x={566} y={482} width={57} height={28} fill="#FD0013" stroke={{ width: 3, color: '#000000' }} zIndex={38} />
	</Fragment>

	<!-- "2nd Death" label -->
	<Fragment
		step={27}
		layout={{ x: 531, y: 503, width: 134, height: 38 }}
		font={{ wrap: true, font_size: 26.7, bold: true }}
		zIndex={39}
	>
		2nd Death
	</Fragment>

	<!-- Romans 6:1-11 drill (multi-slide custom show) -->
	<Fragment
		step={28}
		drillTo="kingdoms/die-with-christ"
		layout={{ x: 560, y: 355, width: 160, height: 49 }}
		font={{ font_size: 12, wrap: true }}
		fill="var(--color-bg-ghost)"
        line={{width: 2, color: 'var(--color-level3)'}}
		zIndex={textLayer}
	>
		Romans 6:1-11, Ephesians 2:1-5, Colossians 2:8-14, 3:1-4, Romans 8:10
	</Fragment>

	<!-- Kingdom of Christ box -->
	<Fragment step={29}>
		<Rect x={480} y={237} width={450} height={236} fill="var(--color-bg-ghost)" stroke={{ width: 5, color: 'var(--color-stroke-dark)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- White connector line -->
	<Fragment step={29} animate="wipe-down">
		<Line from={{ x: 480, y: 352 }} to={{ x: 480, y: 404 }} stroke={{ width: 27, color: 'var(--color-bg-ghost' }} zIndex={boxLayer} />
	</Fragment>

    <Fragment step={29} animate="wipe-right">
        <Arrow 
            from={{ x: 360, y: 380 }} 
            to={{ x: 550, y: 380 }} 
            stroke={{ width: 35, color: 'var(--color-level2)' }}
            headSize={1.5} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<!-- "BAPTISM = DEATH" label -->
	<Fragment
		step={29}
		layout={{ x: 340, y: 365, width: 223, height: 28 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', bold: true, font_size: 17, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer}
	>
		Baptism = DEATH
	</Fragment>

	<Fragment
		step={29}
		layout={{ x: 370, y: 322, width: 146, height: 40 }}
		font={{ wrap: true, align: 'left', font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		<div style="line-height:1;">Gospel:<br/> Narrow Gate<br/>(spiritual)</div>
	</Fragment>

	<!-- "Kingdom" label in Kingdom of Christ -->
	<Fragment
		step={29}
		layout={{ x: 482, y: 251, width: 141, height: 38 }}
		font={{font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		Kingdom
	</Fragment>
	

	<!-- King label -->
	<Fragment
		step={29}
		layout={{ x: 498, y: 282, width: 50, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		King:
	</Fragment>

	<!-- Subjects label -->
	<Fragment
		step={29}
		layout={{ x: 498, y: 305, width: 93, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Subjects:
	</Fragment>

	<!-- Law label -->
	<Fragment
		step={29}
		layout={{ x: 498, y: 325, width: 46, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Law:
	</Fragment>

	<!-- "of Christ" label -->
	<Fragment
		step={31}
		layout={{ x: 604, y: 251, width: 128, height: 38 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		of Christ
	</Fragment>

	<!-- Step 31: 1 Corinthians 15:1-4 drill -->
	<Fragment
		step={31}
		drillTo="kingdoms/faith-and-baptism"
		layout={{ x: 521, y: 405, width: 337, height: 20 }}
		font={{ wrap: true, font_size: 11.7, color: 'var(--color-bg-ghost)' }}
		fill="var(--color-level3)"
		zIndex={textLayer}
	>
		1 Corinthians 15:1-4 Hebrews 11:6, Romans 10:17, Acts 2:38
	</Fragment>

	<!-- Step 32: "Hear, Believe, Repent, Confess, Baptized" -->
	<Fragment
		step={32}
		layout={{ x: 348, y: 397, width: 129, height: 61 }}
		font={{ wrap: true, font_size: 15.0, align: 'center' }}
		zIndex={textLayer}
	>
		Hear, Believe, Repent, Confess, Baptized
	</Fragment>

	<!-- Step 33: "(Wide Gate)" label -->
	<Fragment
		step={33}
		layout={{ x: 215, y: 290, width: 76, height: 20 }}
		font={{ font_size: 11.7, italic: true, color: 'var(--color-bg-ghost)', bold: true }}
        fill = "var(--color-bg-darkest)"
		zIndex={textLayer}
	>
		Wide Gate
	</Fragment>

	<!-- Wide gate arrow -->
	<Fragment step={33} animate="wipe-down">
		<Arrow from={{ x: 280, y: 308 }} to={{ x: 255, y: 430 }} stroke={{ width: 6, color: '#000000' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Wide gate description -->
	<Fragment
		step={33}
		layout={{ x: 39, y: 407, width: 260, height: 62 }}
		font={{ wrap: true, font_size: 12 }}
		zIndex={textLayer}
	>
		<div style="line-height:1;"><strong>Believe, but decieved:</strong><br/> - Saved by grace before of baptism <br/> - Baptized but doesn't believe its the gate<br/> - Sprinkled as a child; faith only...</div>
	</Fragment>

	<!-- Step 34: "Saved" label -->
	<Fragment
		step={34}
		layout={{ x: 716, y: 302, width: 146, height: 51 }}
		font={{ wrap: true, font_name: 'Arial Black', font_size: 40.0, bold: true, color: '#0000FF' }}
		zIndex={textLayer}
	>
		Saved
	</Fragment>

	<!-- Step 34: Saved description -->
	<Fragment
		step={34}
		layout={{ x: 720, y: 336, width: 180, height: 58 }}
		font={{ wrap: true, font_size: 11.7 }}
		zIndex={textLayer}
	>
		Maintaining relationship with God via Christ's sinless blood and the "gift of the Holy Spirit"
	</Fragment>

	<!-- 1 Peter 3:18-22 drill (Conscience Cleaned) -->
	<Fragment
		step={35}
		drillTo="kingdoms/1-peter-3-18"
		layout={{ x: 522, y: 241, width: 222, height: 20 }}
		font={{ wrap: true, font_size: 11.7, bold: true, color: 'var(--color-level3)' }}
		zIndex={textLayer}
	>
		Conscience Cleaned (1 Peter 3:21)
	</Fragment>
	
	<!-- Blue arc connector -->
	<Fragment step={35.1} animate="draw">
		<Arc from={{ x: 528, y: 253 }} to={{ x: 370, y: 190 }} curve={-60} stroke={{ width: 6, color: '#0000FF' }} arrow zIndex={51} />
	</Fragment>

	<!-- "Must become like children" box (after) -->
	<Fragment
		step={35.1}
		layout={{ x: 260, y: 130, width: 112, height: 51 }}
		fill="var(--color-level3)"
		font={{ wrap: true, align: 'center', font_size: 11, italic: true, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer}
	>
		"Must become like children' - not under the law"
	</Fragment>

	<!-- Step 36: Colossians 1:13-14 drill -->
	<Fragment
		step={36}
		drillTo="kingdoms/colossians-1-13"
		layout={{ x: 808, y: 245, width: 121, height: 49 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Colossians 1:13-141 Peter 2:9-11Galatians 3:26-29
	</Fragment>

	<!-- Step 36: "?" for Christ King -->
	<Fragment
		step={36}
		layout={{ x: 550, y: 284, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
		exitStep={37}
	>
		?
	</Fragment>

	<!-- Step 37: "Christ" for King -->
	<Fragment
		step={37}
		layout={{ x: 545, y: 280, width: 82, height: 35 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Christ
	</Fragment>

	<!-- Step 38: "Church" for Subjects -->
	<Fragment
		step={38}
		layout={{ x: 587, y: 302, width: 102, height: 35 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Church
	</Fragment>

	<!-- Step 38: "(His body)" -->
	<Fragment
		step={38}
		layout={{ x: 620, y: 289, width: 66, height: 20 }}
		font={{ font_size: 11.7, italic: true }}
		zIndex={textLayer}
	>
		(His body)
	</Fragment>

	<!-- Step 39: 2 Corinthians 6:14-15 drill -->
	<Fragment
		step={39}
		drillTo="kingdoms/2-corinthians-6-14"
		layout={{ x: 805, y: 289, width: 124, height: 34 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		2 Corinthians 6:14-15 Mark 16:15-16
	</Fragment>

	<!-- Step 39: "?" for Law -->
	<Fragment
		step={39}
		layout={{ x: 550, y: 327, width: 22, height: 26 }}
		font={questionMark}
		zIndex={textLayer}
		exitStep={40}
	>
		?
	</Fragment>

	<!-- Step 40: "Faith & Grace" for Law -->
	<Fragment
		step={40}
		layout={{ x: 540, y: 323, width: 178, height: 35 }}
		font={boxAnswer}
		zIndex={textLayer}
	>
		Faith & Grace
	</Fragment>

	<!-- Step 41: Dashed line (Unfaithful boundary) -->
	<Fragment step={41} animate="wipe">
		<Line from={{ x: 483, y: 430 }} to={{ x: 930, y: 430 }} stroke={{ width: 4, color: 'var(--color-stroke-dark)', dash: '10,5' }} zIndex={textLayer} />
	</Fragment>

	<!-- Step 42: "Unfaithful" label -->
	<Fragment
		step={42}
		layout={{ x: 501, y: 433, width: 153, height: 20 }}
		font={{ font_name: 'Arial Black', font_size: 23.3, bold: true }}
		zIndex={textLayer}
	>
		Unfaithful
	</Fragment>

	<!-- Step 42: John 6:53 drill -->
	<Fragment
		step={42}
		drillTo="kingdoms/john-6-53"
		layout={{ x: 498, y: 455, width: 250, height: 10 }}
		font={{ wrap: true, align: 'center', font_size: 11.7 }}
		zIndex={textLayer}
	>
		John 6:53, Luke 13:6-9, Matthew 25:26-30
	</Fragment>

	<!-- Step 42: White connector line -->
	<Fragment step={42}>
		<Line from={{ x: 820, y: 470 }} to={{ x: 890, y: 470 }} stroke={{ width: 7, color: 'var(--color-bg-ghost)' }} zIndex={boxLayer} />
	</Fragment>
	<!-- Step 43: Death arrow (diagonal, unfaithful) -->
		
	<Fragment step={43} animate="wipe-down">
        <Arrow 
			from={{ x: 882, y: 413 }} to={{ x: 817, y: 557 }}
            stroke={{ width: 35, color: 'var(--color-stroke-dark)' }}
            headSize={1.5} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<Fragment
		step={43}
		layout={{ x: 808, y: 447, width: 101, height: 28, rotation: -65 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 23.3, color: '#F4F4F4' }}
		zIndex={textLayer}
	>
		Death
	</Fragment>

	<Fragment
		step={43}
		layout={{ x: 851, y: 396, width: 76, height: 22, rotation: 24 }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>
	
	<!-- Step 43: 2 Peter 2:20-21 drill -->
	<Fragment
		step={43}
		drillTo="kingdoms/2-peter-2-20"
		layout={{ x: 630, y: 487, width: 169, height: 22 }}
		font={{ wrap: true, align: 'center', font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		2 Peter 2:20-21, 3:17
	</Fragment>

    <Fragment step={44} animate="wipe-up">
        <Arrow 
			from={{ x: 792, y: 310 }} to={{ x: 792, y: 175 }}
            stroke={{ width: 35, color: 'var(--color-bg-darkest)' }}
            headSize={1.5} 
            zIndex={textLayer} 
        />
    </Fragment>

	<!-- Step 44: Death arrow (up, physical death from Kingdom of Christ) -->
	<Fragment
		step={44}
		layout={{ x: 758, y: 163, width: 70, height: 142 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 23.3, bold: true, color: 'var(--color-bg-ghost)' }}
		zIndex={textLayer}
	>
		<div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 24px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<!-- Step 44: "(physical)" label -->
	<Fragment
		step={44}
		layout={{ x: 815, y: 214, width: 76, height: 22 }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

	<!-- Step 44: White connector line -->
	<Fragment step={44}>
		<Line from={{ x: 760, y: 237 }} to={{ x: 820, y: 237 }} stroke={{ width: 11, color: 'var(--color-bg-ghost)' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Step 44: "Perfect Safety" label -->
	<Fragment
		step={44}
		layout={{ x: 611, y: 126, width: 300, height: 45 }}
		font={{ wrap: true, v_align: 'middle', align: 'center', font_name: 'Arial Black', font_size: 36.7, bold: true, color: '#0000FF' }}
		zIndex={textLayer}
	>
		Perfect Safety
	</Fragment>

	<!-- Step 44: "Heavenly State" description -->
	<Fragment
		step={44}
		layout={{ x: 599, y: 182, width: 146, height: 32 }}
		font={{ wrap: true, align: 'center', font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		Heavenly State State of Eternal Life
	</Fragment>

	<!-- Step 45: 1 Corinthians 15:22-25 drill -->
	<Fragment
		step={45}
		drillTo="kingdoms/1-corinthians-15-22"
		layout={{ x: 794, y: 29, width: 131, height: 34 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		1 Corinthians 15:22-252 Peter 1:10-11
	</Fragment>

	<!-- Step 45: "?" for Eternal Subjects -->
	<Fragment
		step={45}
		layout={{ x: 702, y: 86, width: 22, height: 26 }}
		font={questionMark}
		zIndex={89}
		exitStep={46}
	>
		?
	</Fragment>

	<!-- Step 46: "& Those Justified" label -->
	<Fragment
		step={46}
		layout={{ x: 701, y: 86, width: 152, height: 26 }}
		font={{ align: 'center', font_size: 16.7, bold: true }}
		zIndex={textLayer}
	>
		& Those Justified
	</Fragment>

	<!-- Step 46: "Kings & Priests" -->
	<Fragment
		step={46}
		layout={{ x: 700, y: 101, width: 188, height: 34 }}
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true }}
		zIndex={textLayer}
	>
		Kings & Priests
	</Fragment>

	<!-- Step 46: Blue horizontal line -->
	<Fragment step={46} animate="wipe">
		<Line from={{ x: 514, y: 61 }} to={{ x: 722, y: 61 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={91} />
	</Fragment>

	<!-- Step 47: Revelation 21:3-4 drill -->
	<Fragment
		step={47}
		drillTo="kingdoms/revelation-21-3"
		layout={{ x: 821, y: 62, width: 104, height: 20 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Revelation 21:3-4
	</Fragment>
</Slide>
