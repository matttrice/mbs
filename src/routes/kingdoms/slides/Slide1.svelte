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
	const topLinksLayer = 99
    const questionMark = { font_size: 30, bold: true, color: 'var(--text-bright)' }
    const boxQuestion = { font_size: 24 }
    const boxAnswer = { font_size: 24, bold: true, italic: true }
	const optionsBoxProps = {
		layout: { x: 372, y: 212, width: 200, height: 100 },
		fill: 'var(--text-bright)',
		line: { width: 20, color: 'var(--stroke-level-0)' },
		font: { v_align: 'middle' as const, wrap: true, align: 'center' as const, font_size: 26.7, bold: true, color: 'var(--bg-ghost)' },
		zIndex: 100
	}
</script>

<Slide {slideIndex}>

    <ReferenceOverlay src="/export/08-Kingdoms/Slide1.png" />

	<!-- Static Content -->
	<!-- Background rectangle (light blue) -->
	<Fragment>
		<Rect x={0} y={0} width={961} height={541} fill="var(--bg-level-2)" zIndex={bgLayer} />
	</Fragment>

	<!-- Static Kingdom box (left, top) -->
	<Fragment>
		<Rect x={30} y={19} width={450} height={218} fill="var(--bg-ghost)" stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
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
		layout={{ x: 304, y: 25, width: 165, height: 46 }}
		font={{ align: 'right', font_size: 12 }}
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
		layout={{ x: 472, y: 152, width: 16, height: 50 }}
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
		layout={{ x: 359, y: 113, width: 110, height: 42 }}
		font={{ wrap: true, align: 'right', font_size: 12 }}
		zIndex={topLinksLayer}
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
		font={{ v_align: 'middle', wrap: true, font_size: 10.0, italic: true, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={textLayer}
        line={{ width:2, color: 'var(--bg-level-3)' }}
	>
		Lacking moral categories; no law against sin; pre-fallen Adam & Eve, children, etc.
	</Fragment>

	<!-- Step 9: "?" for Law -->
	<Fragment
		step={9}
		layout={{ x: 100, y: 105, width: 22, height: 26 }}
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
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
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
		{...optionsBoxProps}
        exitStep={13}
	>
		Options ?
	</Fragment>

	<Fragment step={19} {...optionsBoxProps} exitStep={20}>
		Options ?
	</Fragment>

	<Fragment step={26} {...optionsBoxProps} exitStep={27}>
		Options ?
	</Fragment>

	<Fragment step={30} {...optionsBoxProps} exitStep={31}>
		Options ?
	</Fragment>

	<Fragment step={41} {...optionsBoxProps} exitStep={42}>
		Options ?
	</Fragment>

	<Fragment step={45} {...optionsBoxProps} exitStep={46}>
		Options ?
	</Fragment>

	<Fragment step={13}>
        <!-- Eternal Kingdom box -->
        <Rect x={480} y={19} width={450} height={218} fill="var(--bg-ghost)" stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
        <!-- White door -->
        <Rect x={472} y={152} width={16} height={48} fill="var(--bg-ghost)" zIndex={boxLayer} />
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
		layout={{ x: 442, y: 148, width: 76, height: 22 }}
		font={{ wrap: true, font_size: 13.3, align: 'center', bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

    <Fragment step={14} animate="wipe-right">
        <Arrow 
            from={{ x: 400, y: 185 }} to={{ x: 590, y: 185 }} 
            stroke={{ width: 35, color: 'var(--stroke-level-0)' }}
            headSize={1.75} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<!-- Step 14: Death arrow (horizontal, physical death to Eternal Kingdom) -->
	<Fragment
		step={14}
		layout={{ x: 433, y: 160, width: 100, height: 50 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 24, bold: true, color: 'var(--bg-ghost)' }}
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
		<Rect x={-1} y={237} width={962} height={350} fill="var(--bg-level-1)" zIndex={bgLayer} />
		<Line from={{ x: 36, y: 211 }} to={{ x: 474, y: 212 }} stroke={{ width: 7, color: 'var(--bg-cmd-law', dash: '10,5' }} zIndex={boxLayer} />
		<Rect x={30} y={236} width={450} height={236} fill="var(--bg-ghost)" stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
    </Fragment>

	<!-- Step 20: Romans 3:23 drill -->
	<Fragment
		step={19}
		drillTo="kingdoms/romans-3-23"
		layout={{ x: 30, y: 240, width: 240, height: 18 }}
		fill="var(--bg-cmd-law)"
		font={{font_size: 12 }}
		line={{ width: 2, color: 'var(--stroke-level-0)' }}
		zIndex={56}
	>
		Romans 3:23 Isaiah 59:2, Romans 6:23
	</Fragment>

    <!-- Step 21: "(spiritual)" label -->
	<Fragment
		step={21}
		layout={{ x: 292, y: 180, width: 67, height: 20 }}
		font={{ font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(spiritual)
	</Fragment>

    <Fragment step={21} animate="wipe-down">
        <Arrow 
            from={{ x: 325, y: 198 }} to={{ x: 325, y: 350 }} 
            stroke={{ width: 35, color: 'var(--bg-level-2)' }}
            headSize={1.75} 
            zIndex={textLayer+1} 
        />
    </Fragment>

	<!-- Step 21: Spiritual Death -->
	<Fragment
		step={21}
		layout={{ x: 308, y: 210, width: 35, height: 120 }}
		font={{ font_name: 'Arial Black', font_size: 24, bold: true, color: 'var(--text-ghost)' }}
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
		layout={{ x: 355, y: 250, width: 120, height: 25 }}
		font={{ align: 'right', font_size: 11.7, wrap: true }}
		zIndex={topLinksLayer}
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
		font={{ font_size: 22, font_name:'Arial Black', bold: true, color: 'var(--bg-cmd-law)' }}
		zIndex={textLayer}
	>
		State of Danger
	</Fragment>

	<!-- Step 22: Danger description -->
	<Fragment
		step={22}
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
		layout={{ x: 369, y: 280, width: 105, height: 40 }}
		font={{ align: 'right', font_size: 12, wrap: true }}
		zIndex={topLinksLayer}
	>
		Ephesians 5:3-7<br/>2 Thess. 2:9-2<br/>Matthew 7:13
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
        fill="var(--bg-ghost)"
		zIndex={textLayer}
	>
		Moral, Sin & Death
	</Fragment>

	<!-- Step 25: "(unable to cleanse conscience)" -->
	<Fragment
		step={25}
		layout={{ x: 80, y: 354, width: 221, height: 12 }}
		font={{font_size: 11.7, italic: true }}
        fill="var(--bg-ghost)"
		zIndex={textLayer}
	>
		(unable to cleanse conscience)
	</Fragment>

	<Fragment step={27} animate="wipe">
		<Rect x={30} y={472} width={450} height={78} fill="var(--bg-cmd-law" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
	</Fragment>

	<Fragment
		step={27}
		layout={{ x: 286, y: 369, width: 76, height: 22  }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

    <Fragment step={27} animate="wipe-down">
        <Arrow 
            from={{ x: 325, y: 388 }} to={{ x: 325, y: 528 }} 
            stroke={{ width: 35, color: 'var(--stroke-level-0)' }}
            headSize={1.75} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<Fragment
		step={27}
		layout={{ x: 308, y: 395, width: 35, height: 105 }}
		font={{ v_align: 'middle', align: 'center', font_name: 'Arial Black', font_size: 23.3, bold: true, color: 'var(--bg-ghost)' }}
		zIndex={textLayer}
	>
	    <div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 24px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<Fragment
		step={27}
		drillTo="kingdoms/2-peter-2-1"
		layout={{ x: 84, y: 473, width: 122, height: 20 }}
		font={{ font_size: 18, bold: true }}
		zIndex={textLayer}
	>
		2 Peter 2:1-4
	</Fragment>

	<!-- "Tartarus/Hades - Hopeless" -->
	<Fragment
		step={28}
		layout={{ x: 61, y: 492, width: 160, height: 20 }}
		font={{ font_size: 18, bold: true }}
		zIndex={textLayer}
	>
		Tartarus/Hades
	</Fragment>

	<Fragment
		step={28}
		layout={{ x: 352, y: 488, width: 121, height: 50 }}
		font={{ font_size: 18, bold: true, align: 'center', wrap: true }}
		zIndex={67}
	>
		Moral Judgement
	</Fragment>

	<Fragment step={29}>
		<Rect x={-2} y={550} width={965} height={47} 
		fill="var(--bg-level-1)" 
		stroke={{ width: 2, color: 'var(--stroke-level-0)' }}
		zIndex={boxLayer} />
	</Fragment>

	<Fragment step={29} animate="wipe-down">
		<Arrow 
			from={{ x: 139, y: 516 }} to={{ x: 139, y: 578 }}
			stroke={{ width: 27, color: 'var(--bg-level-0)' }}
			headSize={1.75} 
			zIndex={boxLayer} 
		/>
	</Fragment>

	<!-- "2nd Death" label -->
	<Fragment
		step={29}
		layout={{ x: 240, y: 548, width: 155, height: 38 }}
		font={{ wrap: true, font_size: 26.7, bold: true }}
		zIndex={39}
	>
		2nd Death
	</Fragment>

	<!-- Romans 6:1-11 drill (multi-slide custom show) -->
	<Fragment
		step={30}
		drillTo="kingdoms/die-with-christ"
		layout={{ x: 570, y: 355, width: 160, height: 49 }}
		font={{ font_size: 12, wrap: true }}
		fill="var(--bg-ghost)"
        line={{width: 2, color: 'var(--bg-level-3)'}}
		zIndex={textLayer}
	>
		Romans 6:1-11, Ephesians 2:1-5, Colossians 2:8-14, 3:1-4, Romans 8:10
	</Fragment>

	<!-- Kingdom of Christ box -->
	<Fragment step={31}>
		<Rect x={480} y={236} width={450} height={236} fill="var(--bg-ghost)" stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
	</Fragment>

    <Fragment step={31} animate="wipe-right">
        <Arrow 
            from={{ x: 360, y: 380 }} to={{ x: 560, y: 380 }} 
            stroke={{ width: 35, color: 'var(--bg-level-2)' }}
            headSize={1.75} 
            zIndex={boxLayer} 
        />
    </Fragment>

	<!-- "BAPTISM = DEATH" label -->
	<Fragment
		step={31}
		layout={{ x: 345, y: 365, width: 223, height: 28 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', bold: true, font_size: 19, color: 'var(--text-ghost)' }}
		zIndex={textLayer}
	>
		Baptism = DEATH
	</Fragment>

	<Fragment
		step={31}
		layout={{ x: 390, y: 340, width: 85, height: 25 }}
		font={{ wrap: true, align: 'center', font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(spiritual)
	</Fragment>

	<!-- "Kingdom" label in Kingdom of Christ -->
	<Fragment
		step={34}
		layout={{ x: 482, y: 251, width: 141, height: 38 }}
		font={{font_size: 26.7, bold: true }}
		zIndex={textLayer}
	>
		Kingdom
	</Fragment>
	

	<!-- King label -->
	<Fragment
		step={34}
		layout={{ x: 498, y: 282, width: 50, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		King:
	</Fragment>

	<!-- Subjects label -->
	<Fragment
		step={34}
		layout={{ x: 498, y: 305, width: 93, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Subjects:
	</Fragment>

	<!-- Law label -->
	<Fragment
		step={34}
		layout={{ x: 498, y: 325, width: 46, height: 27 }}
		font={boxQuestion}
		zIndex={textLayer}
	>
		Law:
	</Fragment>

	<!-- "of Christ" label -->
	<Fragment
		step={35}
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
		layout={{ x: 491, y: 405, width: 337, height: 20 }}
		font={{ wrap: true, font_size: 11.7, color: 'var(--bg-ghost)' }}
		fill="var(--bg-level-3)"
		zIndex={textLayer}
	>
		1 Corinthians 15:1-4 Hebrews 11:6, Romans 10:17, Acts 2:38
	</Fragment>

	<!-- "Hear, Believe, Repent, Confess, Baptized" -->
	<Fragment
		step={32}
		layout={{ x: 348, y: 410, width: 129, height: 61 }}
		font={{ wrap: true, font_size: 15.0, align: 'center' }}
		zIndex={textLayer}
	>
		Hear, Believe, Repent, Confess, Baptized
	</Fragment>

	<Fragment
		step={32}
		layout={{ x: 340, y: 397, width: 140, height: 20 }}
		font={{ font_size: 12, align: 'center', bold: true }}
		zIndex={textLayer}
	>
		Gospel: Narrow Gate
	</Fragment>


	<!-- Step 33: "(Wide Gate)" label -->
	<Fragment
		step={33}
		layout={{ x: 205, y: 292, width: 76, height: 20 }}
		font={{ font_size: 11.7, italic: true, color: 'var(--bg-ghost)', bold: true }}
        fill = "var(--bg-level-0)"
		zIndex={textLayer}
	>
		Wide Gate
	</Fragment>

	<!-- Wide gate arrow -->
	<Fragment step={33} animate="wipe-down">
		<Arrow from={{ x: 268, y: 310 }} to={{ x: 255, y: 430 }} headSize={5} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={boxLayer} />
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
		layout={{ x: 753, y: 310, width: 146, height: 51 }}
		font={{ wrap: true, font_name: 'Arial Black', font_size: 40.0, bold: true, color: 'var(--text-level-3)' }}
		zIndex={textLayer}
	>
		Saved
	</Fragment>

	<!-- Step 34: Saved description -->
	<Fragment
		step={34}
		layout={{ x: 745, y: 355, width: 180, height: 45 }}
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
		font={{ wrap: true, font_size: 11.7, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={textLayer}
	>
		Conscience Cleaned (1 Peter 3:21)
	</Fragment>
	
	<!-- Blue arc connector -->
	<Fragment step={35.1} animate="draw">
		<Arc from={{ x: 528, y: 253 }} to={{ x: 370, y: 190 }} curve={-60} stroke={{ width: 5, color: 'var(--stroke-level-2)' }} arrow zIndex={51} />
	</Fragment>

	<!-- "Must become like children" box (after) -->
	<Fragment
		step={35.1}
		layout={{ x: 260, y: 130, width: 112, height: 51 }}
		fill="var(--bg-level-3)"
		font={{ wrap: true, align: 'center', font_size: 11, italic: true, color: 'var(--bg-ghost)' }}
		zIndex={textLayer}
	>
		"Must become like children' - not under the law"
	</Fragment>

	<!-- Step 36: Colossians 1:13-14 drill -->
	<Fragment
		step={36}
		drillTo="kingdoms/colossians-1-13"
		layout={{ x: 800, y: 245, width: 121, height: 40 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Colossians 1:13-14<br/>1Peter 2:9-11<br/>Galatians 3:26-29
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
		layout={{ x: 800, y: 295, width: 124, height: 25 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		2 Corinthians 6:14<br/>Mark 16:15-16
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
		<Line from={{ x: 483, y: 430 }} to={{ x: 930, y: 430 }} stroke={{ width: 4, color: 'var(--stroke-level-0)', dash: '10,5' }} zIndex={textLayer} />
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

	<!-- Step 27: Gray bar -->
	<Fragment step={42} animate="wipe-down">
		<Rect x={479} y={237} width={482} height={350} fill="var(--bg-level-1)" zIndex={bgLayer} />
	</Fragment>

	<!-- 2 Peter 2:20-21 drill -->
	<Fragment
		step={43}
		drillTo="kingdoms/2-peter-2-20"
		layout={{ x: 500, y: 475, width: 195, height: 20 }}
		font={{ wrap: true, align: 'center', font_size: 18, bold: true }}
		zIndex={textLayer}
	>
		2 Peter 2:20-21, 3:17
	</Fragment>

	<!-- Death arrow (unfaithful) -->	
	<Fragment step={44} animate="wipe-down">
        <Arrow 
			from={{ x: 850, y: 452 }} to={{ x: 850, y: 565 }}
            stroke={{ width: 35, color: 'var(--stroke-level-0)' }}
            headSize={1.75} 
            zIndex={boxLayer} 
        />
    </Fragment>
	
	<Fragment
		step={44}
		layout={{ x: 840, y: 450, width: 20, height: 100 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 20, color: 'var(--text-light)' }}
		zIndex={textLayer}
	>
		<div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 22px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<Fragment
		step={44}
		layout={{ x: 811, y: 436, width: 76, height: 17 }}
		fill="var(--bg-ghost)"
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

	<Fragment
		step={44}
		layout={{ x: 494, y: 490, width: 206, height: 45 }}
		font={{ wrap: true, font_size: 13.3, align: 'center', bold: true }}
		zIndex={textLayer}
	>
		"worse off at the end than they were at the beginning"
	</Fragment>

    <Fragment step={46} animate="wipe-up">
        <Arrow 
			from={{ x: 783, y: 300 }} to={{ x: 783, y: 165 }}            
			stroke={{ width: 35, color: 'var(--bg-level-0)' }}
            headSize={1.75} 
            zIndex={textLayer} 
        />
    </Fragment>

	<!-- Death arrow (up, physical death from Kingdom of Christ) -->
	<Fragment
		step={46}
		layout={{ x: 770, y: 158, width: 25, height: 142 }}
		font={{ v_align: 'middle', font_name: 'Arial Black', font_size: 23.3, bold: true, color: 'var(--bg-ghost)' }}
		zIndex={textLayer}
	>
		<div style="writing-mode: vertical-lr; text-orientation: upright; font-family: 'Arial Black'; font-size: 24px; font-weight: bold; letter-spacing: -12px; text-align: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        DEATH</div>
	</Fragment>

	<Fragment
		step={46}
		layout={{ x: 745, y: 296, width: 76, height: 22 }}
		font={{ wrap: true, font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		(physical)
	</Fragment>

	<Fragment
		step={46}
		layout={{ x: 622, y: 126, width: 300, height: 45 }}
		font={{ wrap: true, v_align: 'middle', align: 'center', font_name: 'Arial Black', font_size: 36.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={textLayer}
	>
		Perfect Safety
	</Fragment>

	<Fragment
		step={46}
		layout={{ x: 599, y: 182, width: 146, height: 32 }}
		font={{ wrap: true, align: 'center', font_size: 13.3, bold: true }}
		zIndex={textLayer}
	>
		Heavenly State State of Eternal Life
	</Fragment>

	<Fragment
		step={47}
		drillTo="kingdoms/1-corinthians-15-22"
		layout={{ x: 775, y: 29, width: 150, height: 34 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		1 Corinthians 15:22-25<br/>2 Peter 1:10-11
	</Fragment>

	<Fragment
		step={48}
		layout={{ x: 702, y: 86, width: 22, height: 26 }}
		font={questionMark}
		zIndex={89}
		exitStep={46}
	>
		?
	</Fragment>

	<Fragment
		step={48}
		layout={{ x: 701, y: 86, width: 152, height: 26 }}
		font={{ align: 'center', font_size: 16.7, bold: true }}
		zIndex={textLayer}
	>
		& Those Justified
	</Fragment>

	<Fragment
		step={48}
		layout={{ x: 700, y: 101, width: 188, height: 34 }}
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true }}
		zIndex={textLayer}
	>
		Kings & Priests
	</Fragment>

	<Fragment step={48} animate="wipe">
		<Line from={{ x: 514, y: 61 }} to={{ x: 722, y: 61 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={91} />
	</Fragment>

	<Fragment
		step={49}
		drillTo="kingdoms/revelation-21-3"
		layout={{ x: 811, y: 62, width: 114, height: 20 }}
		font={{ wrap: true, align: 'right', font_size: 11.7 }}
		zIndex={textLayer}
	>
		Revelation 21:3-4
	</Fragment>
</Slide>
