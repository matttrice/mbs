<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: "Leviticus 9, Hebrews 9,10" drillTo CS17 -->
	<Fragment
		drillTo="priesthood/priesthood-levitical"
		layout={{ x: 56, y: 18, width: 302, height: 40 }}
		font={{ v_align: 'middle', align: 'center', font_size: 21.6, bold: true }}
		zIndex={3}
	>
		<strong>Leviticus 9, Hebrews 9,10</strong>
	</Fragment>

	<!-- Static: Title "Priesthood" -->
	<Fragment
		layout={{ x: 328, y: 10, width: 302, height: 40 }}
		font={{ font_size: 43.2, bold: true, color: 'var(--text-level-0)' }}
		zIndex={14}
	>
		Priesthood
	</Fragment>

	<!-- Step 1: Left column rectangle (click) -->
	<Fragment step={1} animate="wipe-down">
		<Rect x={56} y={52} width={419} height={476} fill="var(--bg-ghost)" zIndex={1} />
	</Fragment>

	<!-- Step 1: Horizontal separator line (with) -->
	<Fragment step={1} animate="draw">
		<Line from={{ x: 56, y: 54 }} to={{ x: 906, y: 54 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={34} />
	</Fragment>

	<!-- Step 1: "LEVITICAL" (with) -->
	<Fragment
		step={1}
		layout={{ x: 131, y: 55, width: 251, height: 59 }}
		font={{ align: 'center', font_size: 43, bold: true }}
		zIndex={5}
	>
		<strong>LEVITICAL </strong>
	</Fragment>

	<!-- Step 1: "Tribe of Levi, Order of Aaron" (with) -->
	<Fragment
		step={1}
		layout={{ x: 84, y: 98, width: 340, height: 42 }}
		font={{ v_align: 'middle', align: 'center', font_size: 24, bold: true, italic: true }}
		zIndex={19}
	>
		<strong><em>Tribe of Levi, Order of Aaron </em></strong>
	</Fragment>

	<!-- Step 1: Source stats (with) -->
	<Fragment
		step={1}
		layout={{ x: 86, y: 266, width: 337, height: 148 }}
		font={{ wrap: true, font_size: 21.6, bold: true }}
		zIndex={7}
	>
		<strong>Source: Physical Ancestry</strong><br/><strong>Weak Sinful Priest(s)</strong><br/><strong>Temporary Priesthood</strong><br/><strong>External Regulations</strong>
	</Fragment>

	<!-- Step 2: "Genesis 14:17, Hebrews 7" drillTo CS18 (click) -->
	<Fragment
		step={2}
		drillTo="priesthood/priesthood-spiritual"
		layout={{ x: 597, y: 18, width: 302, height: 40 }}
		font={{ v_align: 'top', align: 'center', font_size: 21.6, bold: true }}
		zIndex={21}
	>
		<strong>Genesis 14:17, Hebrews 7</strong>
	</Fragment>

	<!-- Step 2: Right column rectangle (with) -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={475} y={52} width={430} height={476} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<!-- Step 2: "'New Order'" (with) -->
	<Fragment
		step={2}
		layout={{ x: 484, y: 102, width: 176, height: 34 }}
		font={{ v_align: 'middle', align: 'center', font_size: 24, bold: true, italic: true, color: 'var(--text-level-3)' }}
		zIndex={20}
	>
		<strong><em>"New Order"</em></strong>
	</Fragment>

	<!-- Step 3: "of Melchizedek / Indestructible Life" (click) -->
	<Fragment
		step={3}
		layout={{ x: 624, y: 105, width: 230, height: 50 }}
		font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 21.6, bold: true, italic: true }}
		zIndex={35}
	>
		<strong><em>of Melchizedek</em></strong><br/><strong><em> Indestructible Life</em></strong>
	</Fragment>

	<!-- Step 3: "MELCHIZEDEKIAN" (with) -->
	<Fragment
		step={3}
		layout={{ x: 485, y: 57, width: 404, height: 59 }}
		font={{ align: 'center', font_size: 43, bold: true, color: 'var(--text-level-3)' }}
		zIndex={6}
	>
		<strong>MELCHIZEDEKIAN</strong>
	</Fragment>

	<!-- Step 3: "'A better hope'" (with) -->
	<Fragment
		step={3}
		layout={{ x: 488, y: 124, width: 172, height: 36 }}
		font={{ v_align: 'middle', wrap: true, font_size: 19.2, bold: true, italic: true, color: 'var(--text-level-3)' }}
		zIndex={36}
	>
		<strong><em>"A better hope"</em></strong>
	</Fragment>

	<!-- Step 4: Arrow row 1 (click) -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 288 }} to={{ x: 545, y: 289 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={26} />
	</Fragment>

	<!-- Step 4: Arrow row 2 (with) -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 315 }} to={{ x: 546, y: 315 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={27} />
	</Fragment>

	<!-- Step 4: Arrow row 3 (with) -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 339 }} to={{ x: 546, y: 341 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={28} />
	</Fragment>

	<!-- Step 4: Arrow row 4 (with) -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 365 }} to={{ x: 546, y: 365 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={29} />
	</Fragment>

	<!-- Step 4: Right column source stats (with) -->
	<Fragment
		step={4}
		layout={{ x: 554, y: 266, width: 335, height: 148 }}
		font={{ wrap: true, font_size: 21.6, bold: true }}
		zIndex={9}
	>
		<strong>Source: Indestructible Life</strong><br/><strong>Perfect Forever</strong><br/><strong>Permanent Priesthood</strong><br/><strong>Internal/Conscience Clean</strong>
	</Fragment>

	<!-- Step 5: "High Priest: Appointed For Life" (click) -->
	<Fragment
		step={5}
		layout={{ x: 73, y: 148, width: 302, height: 38 }}
		font={{ v_align: 'middle', font_size: 24, bold: true }}
		zIndex={15}
	>
		<strong><u>High Priest</u></strong><u>: Appointed For Life</u>
	</Fragment>

	<!-- Step 6: Arrow from left to right HP (click) -->
	<Fragment step={6} animate="draw">
		<Arrow from={{ x: 422, y: 166 }} to={{ x: 502, y: 166 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={23} />
	</Fragment>

	<!-- Step 6: "High Priest: Appointed For Eternity" (with) -->
	<Fragment
		step={6}
		layout={{ x: 494, y: 148, width: 389, height: 38 }}
		font={{ v_align: 'middle', font_size: 24, bold: true }}
		zIndex={17}
	>
		<strong><u>High Priest</u></strong><u>: Appointed For Eternity</u>
	</Fragment>

	<!-- Step 7: Physical man intercedes text (click) -->
	<Fragment
		step={7}
		layout={{ x: 71, y: 184, width: 314, height: 71 }}
		font={{ v_align: 'middle', wrap: true, font_size: 19.2 }}
		zIndex={16}
	>
		Physical man interceded for people on behalf of God. He dies, must appoint a new one.
	</Fragment>

	<!-- Step 8: "Jeremiah 33:14-18" drillTo CS13 (click) -->
	<Fragment
		step={8}
		drillTo="priesthood/jeremiah-33-14"
		layout={{ x: 386, y: 182, width: 194, height: 38 }}
		font={{ v_align: 'middle', align: 'center' }}
		zIndex={22}
	>
		<strong>Jeremiah 33:14-18 </strong>
	</Fragment>

	<!-- Step 9: Arrow from left intercede to right (click) -->
	<Fragment step={9} animate="draw">
		<Arrow from={{ x: 376, y: 219 }} to={{ x: 583, y: 219 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={24} />
	</Fragment>

	<!-- Step 9: Spiritual man intercedes text (with) -->
	<Fragment
		step={9}
		layout={{ x: 580, y: 196, width: 316, height: 52 }}
		font={{ v_align: 'middle', font_size: 19.2, wrap: true }}
		zIndex={18}
	>
		Spiritual man (Christ) intercedes on<br/>behalf of spiritual people eternally.
	</Fragment>

	<!-- Step 10: "Old Testament (1st Glory)" (click) -->
	<Fragment
		step={10}
		layout={{ x: 92, y: 390, width: 292, height: 36 }}
		font={{ wrap: true, align: 'center' }}
		line={{ width: 4 }}
		zIndex={8}
	>
		Old Testament (1<sup>st</sup> Glory)
	</Fragment>

	<!-- Step 10: "Physical" (with) -->
	<Fragment
		step={10}
		layout={{ x: 84, y: 422, width: 252, height: 50 }}
		font={{ v_align: 'middle', align: 'center', font_size: 43.2, bold: true }}
		zIndex={2}
	>
		<strong>Physical</strong>
	</Fragment>

	<!-- Step 11: Large arrow to right column (click) -->
	<Fragment step={11} animate="draw">
		<Arrow from={{ x: 375, y: 409 }} to={{ x: 550, y: 409 }} stroke={{ width: 11, color: 'var(--stroke-level-0)' }} zIndex={25} />
	</Fragment>

	<!-- Step 11: "New Testament (2nd Glory)" (with) -->
	<Fragment
		step={11}
		layout={{ x: 540, y: 390, width: 326, height: 36 }}
		font={{ wrap: true, align: 'center' }}
		line={{ width: 4 }}
		zIndex={10}
	>
		New Testament (2<sup>nd</sup> Glory)
	</Fragment>

	<!-- Step 11: "Spiritual" (with) -->
	<Fragment
		step={11}
		layout={{ x: 608, y: 422, width: 268, height: 50 }}
		font={{ v_align: 'middle', align: 'center', font_size: 43.2, bold: true, color: 'var(--text-level-3)' }}
		zIndex={30}
	>
		<strong>Spiritual</strong>
	</Fragment>

	<!-- Step 12: "Levitical Priesthood part of what nation?" (click) -->
	<Fragment
		step={12}
		layout={{ x: 293, y: 430, width: 168, height: 70 }}
		font={{ v_align: 'middle', font_size: 16.8, bold: true, wrap: true }}
		line={{ width: 4 }}
		zIndex={11}
	>
		<strong>Levitical Priesthood </strong><br/><strong> part of what nation?</strong>
	</Fragment>

	<!-- Step 13: "Israel" (click) -->
	<Fragment
		step={13}
		layout={{ x: 138, y: 462, width: 142, height: 65 }}
		font={{ font_size: 48, bold: true }}
		zIndex={12}
	>
		<strong>Israel</strong>
	</Fragment>

	<!-- Step 14: "Melchizedekian counterpart?" (click) -->
	<Fragment
		step={14}
		layout={{ x: 475, y: 430, width: 157, height: 70 }}
		font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 16.8, bold: true }}
		line={{ width: 4 }}
		zIndex={13}
	>
		<strong>Melchizedekian</strong><br/><strong>counterpart?</strong>
	</Fragment>

	<!-- Step 15: Large arrow to Church (click) -->
	<Fragment step={15} animate="draw">
		<Arrow from={{ x: 285, y: 500 }} to={{ x: 648, y: 500 }} stroke={{ width: 11, color: 'var(--stroke-level-0)' }} zIndex={32} />
	</Fragment>

	<!-- Step 15: "Church" (with) -->
	<Fragment
		step={15}
		layout={{ x: 648, y: 464, width: 184, height: 65 }}
		font={{ font_size: 48, bold: true, color: 'var(--text-level-3)' }}
		zIndex={31}
	>
		<strong>Church</strong>
	</Fragment>
</Slide>
