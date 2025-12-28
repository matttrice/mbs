<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Arc, Line, Rect } from '$lib/components/svg';

	/**
	 * Slide 3: Methods of Reason - Inductive vs Deductive
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * This slide uses extracted arc_path data for precise curved arrows
	 * representing the Bible's self-referential timeline structure.
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
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide3.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: Methods of Reason -->
	<Fragment
		layout={{ x: 102.7, y: 6, width: 756.1, height: 44.4 }}
		font={{ font_size: 44.2, bold: true }}
		zIndex={39}
	>
		Methods of Reason
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: Inductive -->
	<Fragment
		step={1}
		layout={{ x: 147.9, y: 136.1, width: 261.7, height: 45.6 }}
		font={{ font_size: 48.3, bold: true }}
		zIndex={38}
	>
		Inductive
	</Fragment>

	<!-- Step 2: Deductive -->
	<Fragment
		step={2}
		layout={{ x: 560.1, y: 136.1, width: 256.9, height: 45.6 }}
		font={{ font_size: 48.3, bold: true, color: 'var(--color-level3)' }}
		zIndex={37}
	>
		Deductive
	</Fragment>

	<!-- Step 3: Gray rectangle (Inductive box) -->
	<Fragment step={3} animate="fade">
		<Rect x={60} y={138} width={413} height={120} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={22} />
	</Fragment>

	<!-- Step 3.1: Small (delay 500ms) -->
	<Fragment
		step={3.1}
		layout={{ x: 115.8, y: 174.8, width: 110.2, height: 50.4 }}
		font={{ font_size: 35, bold: true }}
		zIndex={41}
	>
		Small
	</Fragment>

	<!-- Step 3.2: Specific (delay 1000ms) -->
	<Fragment
		step={3.2}
		layout={{ x: 100.2, y: 205.5, width: 151.4, height: 50.4 }}
		font={{ font_size: 35, bold: true }}
		zIndex={43}
	>
		Specific
	</Fragment>

	<Fragment step={4} animate="wipe">
		<Line from={{ x: 238, y: 201 }} to={{ x: 339, y: 201 }} stroke={{ width: 8 }} startMarker={{ radius: 10 }} endMarker={{ radius: 20 }} zIndex={28} />
	</Fragment>

	<Fragment
		step={4.1}
		layout={{ x: 353.6, y: 174.8, width: 72.9, height: 50.4 }}
		font={{ font_size: 35, bold: true }}
		zIndex={42}
	>
		Big
	</Fragment>

	<Fragment
		step={4.2}
		layout={{ x: 305.8, y: 209.8, width: 133, height: 42 }}
		font={{ font_size: 35, bold: true }}
		zIndex={27}
	>
		General
	</Fragment>

	<!-- Step 5: Cyan rectangle (Deductive box) -->
	<Fragment step={5} animate="fade">
		<Rect x={473} y={138} width={427} height={120} fill="var(--color-level2)" stroke={{ color: '#000000', width: 1 }} zIndex={21} />
	</Fragment>

	<!-- Step 5.1: Big (blue) (delay 500ms) -->
	<Fragment
		step={5.1}
		layout={{ x: 534.4, y: 174.8, width: 72.8, height: 50.4 }}
		font={{ font_size: 35, bold: true, color: 'var(--color-level3)' }}
		zIndex={46}
	>
		Big
	</Fragment>

	<!-- Step 5.2: General (blue) (delay 1000ms) -->
	<Fragment
		step={5.2}
		layout={{ x: 528.9, y: 209.8, width: 133, height: 42 }}
		font={{ font_size: 35, bold: true, color: 'var(--color-level3)' }}
		zIndex={44}
	>
		General
	</Fragment>

	<!-- Step 6: Horizontal line with circles (Big → Small in Deductive) -->
	<Fragment step={6} animate="wipe">
		<Line from={{ x: 624, y: 204 }} to={{ x: 725, y: 204 }} stroke={{ width: 8, color: 'var(--color-level3)' }} startMarker={{ radius: 20 }} endMarker={{ radius: 10 }} zIndex={29} />
	</Fragment>

	<!-- Step 6.1: Small (blue) (delay 500ms) -->
	<Fragment
		step={6.1}
		layout={{ x: 736.7, y: 174.8, width: 110.2, height: 50.4 }}
		font={{ font_size: 35, bold: true, color: '#0000FF' }}
		zIndex={45}
	>
		Small
	</Fragment>

	<!-- Step 6.2: Specific (blue) (delay 1000ms) -->
	<Fragment
		step={6.2}
		layout={{ x: 713.3, y: 205.5, width: 151.4, height: 50.4 }}
		font={{ font_size: 35, bold: true, color: '#0000FF' }}
		zIndex={47}
	>
		Specific
	</Fragment>

	<!-- Step 7: "What method of reason is best..." -->
	<Fragment
		step={7}
		layout={{ x: 59.2, y: 29.3, width: 202.7, height: 68.6 }}
		font={{ font_size: 16.7, wrap: true }}
		zIndex={30}
	>
		What method of reason is best if you don't have the complete picture?
	</Fragment>

	<!-- Step 8: "How do you start a puzzle?" -->
	<Fragment
		step={8}
		layout={{ x: 271.2, y: 49.2, width: 324.9, height: 24.4 }}
		font={{ font_size: 23.3, bold: true, italic: true, color: '#0000FF' }}
		zIndex={36}
	>
		How do you start a puzzle?
	</Fragment>

	<!-- Puzzle pieces (simplified - scattered gray pieces) -->
	<Fragment step={8} animate="fade">
		<Rect x={641} y={72} width={21} height={18} fill="#969696" stroke={{ color: '#000000', width: 1 }} zIndex={83} />
	</Fragment>
	<Fragment step={8} animate="fade">
		<Rect x={620} y={114} width={21} height={18} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={86} />
	</Fragment>
	<Fragment step={8.1} animate="fade">
		<Rect x={650} y={100} width={16} height={13} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={101} />
	</Fragment>
	<Fragment step={8.1} animate="fade">
		<Rect x={604} y={87} width={18} height={15} fill="var(--color-level1)" stroke={{ color: '#000000', width: 1 }} zIndex={102} />
	</Fragment>

	<!-- Step 9/10: Blue corner pieces of completed puzzle -->
	<Fragment step={9} animate="fade">
		<Rect x={700} y={112} width={30} height={30} fill="#0000FF" stroke={{ color: '#000000', width: 1 }} zIndex={74} />
	</Fragment>
	<Fragment step={9.1} animate="fade">
		<Rect x={699} y={9} width={30} height={30} fill="#0000FF" stroke={{ color: '#000000', width: 1 }} zIndex={73} />
	</Fragment>
	<Fragment step={9.2} animate="fade">
		<Rect x={838} y={9} width={30} height={30} fill="#0000FF" stroke={{ color: '#000000', width: 1 }} zIndex={72} />
	</Fragment>
	<Fragment step={9.3} animate="fade">
		<Rect x={837} y={112} width={30} height={30} fill="#0000FF" stroke={{ color: '#000000', width: 1 }} zIndex={75} />
	</Fragment>

	<!-- Step 10: Connecting lines between puzzle corners -->
	<Fragment step={10} animate="wipe">
		<Arrow from={{ x: 678, y: 75 }} to={{ x: 752, y: 76 }} stroke={{ width: 12.5 }} zIndex={76} />
	</Fragment>
	<Fragment step={10.1} animate="wipe">
		<Line from={{ x: 729, y: 24 }} to={{ x: 838, y: 24 }} stroke={{ width: 12.5 }} zIndex={78} />
	</Fragment>
	<Fragment step={10.2} animate="wipe">
		<Line from={{ x: 816, y: 75 }} to={{ x: 889, y: 76 }} stroke={{ width: 12.5 }} zIndex={77} />
	</Fragment>
	<Fragment step={10.3} animate="wipe">
		<Line from={{ x: 730, y: 127 }} to={{ x: 837, y: 128 }} stroke={{ width: 12.5 }} zIndex={79} />
	</Fragment>

	<!-- Step 11: Puzzle → Deductive curved arrows (Arc 233, 234) -->
	<Fragment step={11} animate="draw">
		<Arc from={{ x: 636.8, y: 120 }} to={{ x: 788, y: 71.6 }} curve={76.9} stroke={{ width: 3.3, color: '#0000FF' }} />
	</Fragment>
	<Fragment step={11.1} animate="draw">
		<Arc from={{ x: 655, y: 78.1 }} to={{ x: 788, y: 88.8 }} curve={-9.6} stroke={{ width: 3.3, color: '#0000FF' }} />
	</Fragment>

	<!-- Step 12: "What if you begin inductively?" -->
	<Fragment
		step={12}
		layout={{ x: 311.6, y: 70, width: 234.7, height: 26.2 }}
		font={{ font_size: 16.7 }}
		zIndex={0}
	>
		What if you begin inductively?
	</Fragment>

	<!-- Step 13: Genesis + Timeline arrow -->
	<Fragment
		step={13}
		layout={{ x: 73.6, y: 361.8, width: 98.6, height: 28.9 }}
		font={{ font_size: 18.7, bold: true }}
		zIndex={31}
	>
		Genesis
	</Fragment>

	<!-- Timeline arrow (horizontal) -->
	<Fragment step={13.1} animate="wipe">
		<Arrow from={{ x: 60, y: 396 }} to={{ x: 362, y: 396 }} stroke={{ width: 10.8 }} zIndex={13} />
	</Fragment>

	<!-- Step 14: Ezra/Nehemiah/Esther -->
	<Fragment
		step={14}
		layout={{ x: 234.2, y: 352, width: 112, height: 107.1 }}
		font={{ font_size: 18.7, bold: true }}
		zIndex={88}
	>
		Ezra<br/><br/>Nehemiah<br/>Esther
	</Fragment>

	<!-- Step 15: "Chronological History Stops" callout -->
	<Fragment
		step={15}
		layout={{ x: 293.1, y: 293.6, width: 112.1, height: 53.1 }}
		font={{ font_size: 16.7 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 1 }}
		zIndex={69}
	>
		<span style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center; font-size: 14px;">
			Chronological<br/>History Stops
		</span>
	</Fragment>

	<!-- Step 16: Poetry / Major Prophets / Minor Prophets -->
	<Fragment
		step={16}
		layout={{ x: 357.5, y: 355, width: 70, height: 23 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={91}
	>
		Poetry
	</Fragment>

	<Fragment
		step={16.1}
		layout={{ x: 357.5, y: 381.1, width: 94.7, height: 46.8 }}
		font={{ font_size: 21.7, bold: true, align: "center" }}
		zIndex={93}
	>
		Major<br/>Prophets
	</Fragment>

	<Fragment
		step={16.2}
		layout={{ x: 353.9, y: 428.2, width: 97.2, height: 45.1 }}
		font={{ font_size: 21.7, bold: true, align: "center" }}
		zIndex={92}
	>
		Minor<br/>Prophets
	</Fragment>

	<!-- Step 17: Curved arcs from Poetry/Prophets back to Ezra (fanned out) -->
	<Fragment step={17} animate="draw">
		<Arc from={{ x: 364, y: 365 }} to={{ x: 290, y: 365 }} curve={-25} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={23} />
	</Fragment>
	<Fragment step={17} animate="draw">
		<Arc from={{ x: 364, y: 404 }} to={{ x: 290, y: 420 }} curve={35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={25} />
	</Fragment>
	<Fragment step={17.1} animate="draw">
		<Arc from={{ x: 364, y: 425 }} to={{ x: 290, y: 430 }} curve={55} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={63} />
	</Fragment>
	<Fragment step={17} animate="draw">
		<Arc from={{ x: 364, y: 448 }} to={{ x: 290, y: 445 }} curve={75} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={24} />
	</Fragment>

	<!-- Step 18: "What book begins New Testament?" -->
	<Fragment
		step={18}
		layout={{ x: 396.1, y: 262.9, width: 182, height: 42 }}
		font={{ font_size: 18.7, bold: true }}
		zIndex={89}
	>
		What book begins<br/>New Testament?
	</Fragment>

	<!-- NT Timeline arrow -->
	<Fragment step={18.1} animate="wipe">
		<Arrow from={{ x: 513, y: 396 }} to={{ x: 893, y: 396 }} stroke={{ width: 10.8 }} zIndex={12} />
	</Fragment>

	<!-- Step 19: Hebrews 9:15-17 (hyperlink to drill) -->
	<Fragment
		step={19}
		drillTo="reasoning/hebrews-9-15"
		layout={{ x: 412.2, y: 306.7, width: 142.3, height: 25.5 }}
		font={{ font_size: 16.7, bold: true }}
		fill="#FFFFFF"
		line={{ color: '#000000', width: 0.2 }}
		zIndex={90}
	>
		Hebrews 9:15-17
	</Fragment>

	<!-- Step 20: Gospels (Matt, Mark, Luke, John) -->
	<Fragment
		step={20}
		layout={{ x: 446.8, y: 347.8, width: 70, height: 23.9 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={97}
	>
		Matt.
	</Fragment>

	<Fragment
		step={20.1}
		layout={{ x: 450.3, y: 367.9, width: 63, height: 30 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={98}
	>
		Mark
	</Fragment>

	<Fragment
		step={20.2}
		layout={{ x: 450.3, y: 394.1, width: 63, height: 23.9 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={99}
	>
		Luke
	</Fragment>

	<Fragment
		step={20.3}
		layout={{ x: 450.3, y: 415.9, width: 63, height: 23.6 }}
		font={{ font_size: 21.7, bold: true }}
		zIndex={100}
	>
		John
	</Fragment>

	<!-- Step 21: Vertical line + Acts -->
	<Fragment step={21} animate="draw">
		<Line from={{ x: 535, y: 313 }} to={{ x: 536, y: 365 }} stroke={{ width: 5 }} zIndex={11} />
	</Fragment>

	<Fragment
		step={21.1}
		layout={{ x: 512, y: 361.2, width: 49.6, height: 24.8 }}
		font={{ font_size: 18.7, bold: true }}
		zIndex={32}
	>
		Acts
	</Fragment>

	<!-- Step 22: "Transition Books" callout -->
	<Fragment
		step={22}
		layout={{ x: 428.1, y: 473.9, width: 143.1, height: 60.8 }}
		font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF' }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 1 }}
		zIndex={68}
	>
		<span style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center;">
			Transition<br/>Books
		</span>
	</Fragment>

	<!-- Step 23: Romans, Corinthians, Galatians, etc. (Paul's letters stacked) -->
	<Fragment
		step={23}
		layout={{ x: 564.2, y: 322.9, width: 152.4, height: 163.8 }}
		font={{ font_size: 18.7, bold: true }}
		zIndex={20}
	>
		Romans<br/>Corinthians<br/>Galatians<br/><br/>Ephesians<br/>Philippians<br/>Colossians<br/>Thessalonians
	</Fragment>

	<!-- Step 24: Curved arcs from Paul's letters back to Acts (fanned out) -->
	<!-- Above timeline arcs -->
	<Fragment step={24} animate="draw">
		<Arc from={{ x: 564, y: 340 }} to={{ x: 536, y: 340 }} curve={-20} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={17} />
	</Fragment>
	<Fragment step={24} animate="draw">
		<Arc from={{ x: 564, y: 355 }} to={{ x: 536, y: 355 }} curve={-35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={18} />
	</Fragment>
	<Fragment step={24} animate="draw">
		<Arc from={{ x: 564, y: 370 }} to={{ x: 536, y: 370 }} curve={-50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={19} />
	</Fragment>
	<!-- Below timeline arcs -->
	<Fragment step={24.1} animate="draw">
		<Arc from={{ x: 564, y: 420 }} to={{ x: 536, y: 420 }} curve={20} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={14} />
	</Fragment>
	<Fragment step={24.1} animate="draw">
		<Arc from={{ x: 564, y: 440 }} to={{ x: 536, y: 440 }} curve={35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={15} />
	</Fragment>
	<Fragment step={24.2} animate="draw">
		<Arc from={{ x: 564, y: 460 }} to={{ x: 536, y: 460 }} curve={50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={16} />
	</Fragment>

	<!-- Step 25: Timothy, Titus, Philemon, Hebrews, James, Peter, John, Jude -->
	<Fragment
		step={25}
		layout={{ x: 695, y: 305, width: 113.1, height: 179.2 }}
		font={{ font_size: 20, bold: true }}
		zIndex={62}
	>
		<div style="display: flex; flex-direction: column; line-height: 1;">
			<span>Timothy</span>
			<span>Titus</span>
			<span>Philemon</span>
			<span>Hebrews</span>
            <span>-</span>
			<span>James</span>
			<span>Peter</span>
			<span>John</span>
			<span>Jude</span>
		</div>
	</Fragment>

	<!-- Step 26: Curved arcs from General epistles back to Paul's letters (fanned out) -->
	<!-- Above timeline arcs -->
	<Fragment step={26} animate="draw">
		<Arc from={{ x: 700, y: 310 }} to={{ x: 640, y: 310 }} curve={-20} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={56} />
	</Fragment>
	<Fragment step={26.1} animate="draw">
		<Arc from={{ x: 700, y: 330 }} to={{ x: 640, y: 330 }} curve={-35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={57} />
	</Fragment>
	<Fragment step={26.2} animate="draw">
		<Arc from={{ x: 700, y: 350 }} to={{ x: 640, y: 350 }} curve={-50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={58} />
	</Fragment>
	<!-- Below timeline arcs -->
	<Fragment step={26} animate="draw">
		<Arc from={{ x: 679, y: 420 }} to={{ x: 640, y: 420 }} curve={20} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={59} />
	</Fragment>
	<Fragment step={26} animate="draw">
		<Arc from={{ x: 679, y: 440 }} to={{ x: 640, y: 440 }} curve={35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={60} />
	</Fragment>
	<Fragment step={26} animate="draw">
		<Arc from={{ x: 679, y: 460 }} to={{ x: 640, y: 460 }} curve={50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={61} />
	</Fragment>

	<!-- Step 27: Revelation -->
	<Fragment
		step={27}
		layout={{ x: 800, y: 350, width: 123, height: 32.2 }}
		font={{ font_size: 20, bold: true }}
		zIndex={96}
	>
		Revelation
	</Fragment>

	<!-- Step 28: Large curved arcs from Revelation back to Genesis/earlier books (fanned out) -->
	<!-- Above timeline - arcs going to earlier books -->
	<Fragment step={28} animate="draw">
		<Arc from={{ x: 820, y: 356 }} to={{ x: 175, y: 365 }} curve={-200} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={50} />
	</Fragment>
	<Fragment step={28} animate="draw">
		<Arc from={{ x: 757, y: 356 }} to={{ x: 450, y: 360 }} curve={-70} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={48} />
	</Fragment>
	<Fragment step={28.1} animate="draw">
		<Arc from={{ x: 757, y: 356 }} to={{ x: 565, y: 355 }} curve={-50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={52} />
	</Fragment>
	<Fragment step={28.2} animate="draw">
		<Arc from={{ x: 757, y: 356 }} to={{ x: 640, y: 345 }} curve={-35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={54} />
	</Fragment>
	<!-- Below timeline - return arcs -->
	<Fragment step={28.3} animate="draw">
		<Arc from={{ x: 175, y: 430 }} to={{ x: 757, y: 420 }} curve={100} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={51} />
	</Fragment>
	<Fragment step={28.4} animate="draw">
		<Arc from={{ x: 450, y: 435 }} to={{ x: 757, y: 425 }} curve={70} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={49} />
	</Fragment>
	<Fragment step={28.5} animate="draw">
		<Arc from={{ x: 565, y: 440 }} to={{ x: 757, y: 430 }} curve={50} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={53} />
	</Fragment>
	<Fragment step={28.6} animate="draw">
		<Arc from={{ x: 640, y: 445 }} to={{ x: 757, y: 435 }} curve={35} stroke={{ width: 3, color: '#0000FF' }} arrow zIndex={55} />
	</Fragment>

	<!-- Step 29: "What type of thinker is God?" callout -->
	<Fragment
		step={29}
		layout={{ x: 722.9, y: 265.4, width: 157.1, height: 54.6 }}
		font={{ font_size: 20 }}
		fill="var(--color-bg-light)"
		line={{ color: '#000000', width: 1 }}
		zIndex={67}
	>
		<span style="display: flex; align-items: center; justify-content: center; height: 100%; text-align: center;">
			What type of<br/>thinker is God?
		</span>
	</Fragment>

	<!-- Step 30: Arrow pointing up to Deductive -->
	<Fragment step={30} animate="draw">
		<Line from={{ x: 670, y: 182 }} to={{ x: 735, y: 270 }} stroke={{ width: 6.7 }} zIndex={34} />
	</Fragment>

	<!-- Step 31: "Biblical Examples:" section -->
	<Fragment
		step={31}
		layout={{ x: 50, y: 262, width: 203, height: 21.7 }}
		font={{ font_size: 16.7, bold: true}}
		zIndex={64}
	>
		Biblical Examples: Genesis 1:1
	</Fragment>

	<!-- Step 32: Genesis 1:1 explanation + vertical arcs (Arc 96, 97) -->
	<Fragment
		step={32}
		layout={{ x: 32, y: 275, width: 220, height: 62.5 }}
		font={{ font_size: 14, align: 'left', v_align: 'top', wrap: true }}
		zIndex={87}
	>
		Everything made in first sentence. Rest of chapter fills in details of each day.
	</Fragment>

	<!-- Vertical oval loops for Genesis pattern - wrap around the timeline -->
	<Fragment
		step={32}
		layout={{ x: 83, y: 336, width: 70, height: 128 }}
		animate="fade"
		zIndex={10}
	>
		<img src="/images/arc1.png" alt="" style="width: 100%; height: 100%;" />
	</Fragment>
	<Fragment
		step={32}
		layout={{ x: 60, y: 336, width: 70, height: 128 }}
		animate="fade"
		zIndex={9}
	>
		<img src="/images/arc1.png" alt="" style="width: 100%; height: 100%;" />
	</Fragment>

	<!-- Step 33: Genesis 1:27 vs Genesis 2:7 (hyperlink) + more vertical arcs -->
	<Fragment
		step={33}
		drillTo="reasoning/genesis-1-vs-2"
		layout={{ x: 32, y: 465.9, width: 270, height: 27.4 }}
		font={{ font_size: 15, bold: true }}
		fill="var(--color-bg-ghost)"
		zIndex={94}
	>
		Genesis 1:27 vs. Genesis 2:7
	</Fragment>

	<!-- Step 34: Two Adams explanation + vertical arcs (Arc 98, 99, 100) -->
	<Fragment
		step={34}
		layout={{ x: 32, y: 486.9, width: 270, height: 44.2 }}
		font={{ font_size: 15, wrap: true }}
		fill="var(--color-bg-ghost)"
		zIndex={95}
	>
		Two Adams? Or God being consistent and giving more detail about one?
	</Fragment>

	<!-- More vertical oval loops for Genesis pattern -->
	<Fragment
		step={34}
		layout={{ x: 102, y: 336, width: 70, height: 128 }}
		animate="fade"
		zIndex={6}
	>
		<img src="/images/arc1.png" alt="" style="width: 100%; height: 100%;" />
	</Fragment>
	<Fragment
		step={34}
		layout={{ x: 132, y: 336, width: 70, height: 128 }}
		animate="fade"
		zIndex={7}
	>
		<img src="/images/arc1.png" alt="" style="width: 100%; height: 100%;" />
	</Fragment>
	<Fragment
		step={34}
		layout={{ x: 163, y: 336, width: 70, height: 128 }}
		animate="fade"
		zIndex={8}
	>
		<img src="/images/arc1.png" alt="" style="width: 100%; height: 100%;" />
	</Fragment>

	<Fragment
		step={35}
		layout={{ x: 305.3, y: 85, width: 250, height: 60 }}
		font={{ font_size: 18.7, bold: true, color: 'var(--color-level3)', align: 'center' }}
		zIndex={66}
	>
		<button 
			onclick={() => import('$lib/stores/navigation').then(m => m.navigation.goToSlide(3))}
			style="background: none; border: none; cursor: pointer; color: inherit; font: inherit; width: 100%; height: 100%;"
		>
			Is it possible to think like God? <br/>
			1 Corinthians 2:11-16
		</button>
	</Fragment>
</Slide>

<style>
	/* Additional styling if needed */
</style>
