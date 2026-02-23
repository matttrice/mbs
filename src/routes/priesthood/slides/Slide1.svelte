<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
    <ReferenceOverlay src="export/10-The_Priesthood/Slide1.png" />

	<!-- Static: Priesthood title -->
	<Fragment
		layout={{ x: 328, y: 10, width: 302, height: 40 }}
		font={{ font_size: 43.2, bold: true }}
		zIndex={14}
	>
		Priesthood
	</Fragment>

	<!-- Static: Leviticus 9, Hebrews 9,10 drill link -->
	<Fragment
		drillTo="priesthood/priesthood-levitical"
		layout={{ x: 56, y: 18, width: 302, height: 40 }}
		font={{ font_size: 21.6, bold: true, v_align: 'middle', align: 'center' }}
		zIndex={3}
	>
		<strong>Leviticus 9, Hebrews 9,10</strong>
	</Fragment>

	<!-- Step 1: Levitical column (gray rect + line + text) -->
	<Fragment step={1}>
		<Rect x={56} y={52} width={419} height={476} fill="var(--bg-level-1)" zIndex={1} />
	</Fragment>

	<Fragment step={1}>
		<Line from={{ x: 56, y: 54 }} to={{ x: 906, y: 54 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={34} />
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 131, y: 55, width: 251, height: 59 }}
		font={{ font_size: 43, bold: true, align: 'center' }}
		zIndex={5}
	>
		<strong>LEVITICAL </strong>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 84, y: 98, width: 340, height: 42 }}
		font={{ font_size: 24, bold: true, italic: true, v_align: 'middle', align: 'center' }}
		zIndex={19}
	>
		<strong><em>Tribe of Levi, Order of Aaron </em></strong>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 86, y: 266, width: 337, height: 148 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={7}
	>
		<strong>Source: Physical Ancestry</strong><br />
		<strong>Weak Sinful Priest(s)</strong><br />
		<strong>Temporary Priesthood</strong><br />
		<strong>External Regulations</strong>
	</Fragment>

	<!-- Step 2: Melchizedekian column intro (drill + blue rect + "New Order") -->
	<Fragment
		step={2}
		drillTo="priesthood/priesthood-spiritual"
		layout={{ x: 597, y: 18, width: 302, height: 40 }}
		font={{ font_size: 21.6, bold: true, v_align: 'top', align: 'center' }}
		zIndex={21}
	>
		<strong>Genesis 14:17, Hebrews 7</strong>
	</Fragment>

	<Fragment step={2}>
		<Rect x={475} y={52} width={430} height={476} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 484, y: 102, width: 176, height: 34 }}
		font={{ font_size: 24, bold: true, italic: true, v_align: 'middle', align: 'center', color: 'var(--text-level-3)' }}
		zIndex={20}
	>
		<strong><em>"New Order"</em></strong>
	</Fragment>

	<!-- Step 3: of Melchizedek + MELCHIZEDEKIAN + A better hope -->
	<Fragment
		step={3}
		layout={{ x: 624, y: 105, width: 230, height: 50 }}
		font={{ font_size: 21.6, bold: true, italic: true, v_align: 'middle', align: 'center', wrap: true }}
		zIndex={35}
	>
		<strong><em>of Melchizedek</em></strong><br /><strong><em> Indestructible Life</em></strong>
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 485, y: 57, width: 404, height: 59 }}
		font={{ font_size: 43, bold: true, align: 'center', color: 'var(--text-level-3)' }}
		zIndex={6}
	>
		<strong>MELCHIZEDEKIAN</strong>
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 488, y: 124, width: 172, height: 36 }}
		font={{ font_size: 19.2, bold: true, italic: true, v_align: 'middle', color: 'var(--text-level-3)', wrap: true }}
		zIndex={36}
	>
		<strong><em>"A better hope"</em></strong>
	</Fragment>

	<!-- Step 4: Four arrows + Source: Indestructible Life -->
	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 288 }} to={{ x: 545, y: 289 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={26} />
	</Fragment>

	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 315 }} to={{ x: 546, y: 315 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={27} />
	</Fragment>

	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 339 }} to={{ x: 546, y: 341 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={28} />
	</Fragment>

	<Fragment step={4} animate="draw">
		<Arrow from={{ x: 375, y: 365 }} to={{ x: 546, y: 365 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={29} />
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 554, y: 266, width: 335, height: 148 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={9}
	>
		<strong>Source: Indestructible Life</strong><br />
		<strong>Perfect Forever</strong><br />
		<strong>Permanent Priesthood</strong><br />
		<strong>Internal/Conscience Clean</strong>
	</Fragment>

	<!-- Step 5: High Priest: Appointed For Life -->
	<Fragment
		step={5}
		layout={{ x: 93, y: 148, width: 362, height: 38 }}
		font={{ font_size: 24, bold: true, v_align: 'middle' }}
		zIndex={15}
	>
		<strong><u>High Priest</u></strong><u>: Appointed For Life</u>
	</Fragment>

	<!-- Step 6: Arrow + High Priest: Appointed For Eternity -->
	<Fragment step={6} animate="draw">
		<Arrow from={{ x: 452, y: 167 }} to={{ x: 522, y: 167 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={23} />
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: 500, y: 148, width: 389, height: 38 }}
		font={{ font_size: 20, bold: true, v_align: 'middle' }}
		zIndex={17}
	>
		<strong><u>High Priest</u></strong><u>: Appointed For Eternity</u>
	</Fragment>

	<!-- Step 7: Physical man interceded -->
	<Fragment
		step={7}
		layout={{ x: 71, y: 184, width: 300, height: 71 }}
		font={{ font_size: 15, v_align: 'middle', wrap: true }}
		zIndex={16}
	>
		Physical man interceded for people on behalf of God. He dies, must appoint a new one.
	</Fragment>

	<!-- Step 8: Jeremiah 33:14-18 drill -->
	<Fragment
		step={8}
		drillTo="priesthood/jeremiah-33-14-18"
		layout={{ x: 386, y: 182, width: 194, height: 38 }}
		font={{ font_size: 20, bold: true}}
		zIndex={22}
	>
		<strong>Jeremiah 33:14-18 </strong>
	</Fragment>

	<!-- Step 9: Arrow + Spiritual man intercedes -->
	<Fragment step={9} animate="draw">
		<Arrow from={{ x: 377, y: 219 }} to={{ x: 584, y: 219 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={24} />
	</Fragment>

	<Fragment
		step={9}
		layout={{ x: 580, y: 196, width: 316, height: 52 }}
		font={{ font_size: 19.2, v_align: 'middle', wrap: true }}
		zIndex={18}
	>
		Spiritual man (Christ) intercedes on behalf of spiritual people eternally.
	</Fragment>

	<!-- Step 10: Old Testament (1st Glory) + Physical -->
	<Fragment
		step={10}
		layout={{ x: 92, y: 390, width: 292, height: 36 }}
		font={{ font_size: 24, align: 'center', wrap: true }}
		line={{ width: 4 }}
		zIndex={8}
	>
		Old Testament (1<sup>st</sup> Glory)
	</Fragment>

	<Fragment
		step={10}
		layout={{ x: 84, y: 422, width: 252, height: 50 }}
		font={{ font_size: 43.2, bold: true, v_align: 'middle', align: 'center' }}
		zIndex={2}
	>
		<strong>Physical</strong>
	</Fragment>

	<!-- Step 11: Arrow + New Testament (2nd Glory) + Spiritual -->
	<Fragment step={11} animate="draw">
		<Arrow from={{ x: 375, y: 409 }} to={{ x: 550, y: 409 }} stroke={{ width: 11, color: 'var(--stroke-level-0)' }} zIndex={25} />
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 540, y: 390, width: 326, height: 36 }}
		font={{ font_size: 24, align: 'center', wrap: true }}
		line={{ width: 4 }}
		zIndex={10}
	>
		New Testament (2<sup>nd</sup> Glory)
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 608, y: 422, width: 268, height: 50 }}
		font={{ font_size: 43.2, bold: true, v_align: 'middle', align: 'center', color: 'var(--text-level-3)' }}
		zIndex={30}
	>
		<strong>Spiritual</strong>
	</Fragment>

	<!-- Step 12: Levitical Priesthood part of what nation? -->
	<Fragment
		step={12}
		layout={{ x: 293, y: 430, width: 168, height: 70 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle', wrap: true }}
		line={{ width: 4 }}
		zIndex={11}
	>
		<strong>Levitical Priesthood </strong><br /><strong> part of what nation?</strong>
	</Fragment>

	<!-- Step 13: Israel -->
	<Fragment
		step={13}
		layout={{ x: 138, y: 462, width: 142, height: 65 }}
		font={{ font_size: 48, bold: true }}
		zIndex={12}
	>
		<strong>Israel</strong>
	</Fragment>

	<!-- Step 14: Melchizedekian counterpart? -->
	<Fragment
		step={14}
		layout={{ x: 475, y: 430, width: 157, height: 70 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle', align: 'center', wrap: true }}
		line={{ width: 4 }}
		zIndex={13}
	>
		<strong>Melchizedekian</strong><br /><strong>counterpart?</strong>
	</Fragment>

	<!-- Step 15: Arrow + Church -->
	<Fragment step={15}>
		<Arrow from={{ x: 285, y: 500 }} to={{ x: 648, y: 500 }} stroke={{ width: 11, color: 'var(--stroke-level-0)' }} zIndex={32} />
	</Fragment>

	<Fragment
		step={15}
		layout={{ x: 648, y: 464, width: 184, height: 65 }}
		font={{ font_size: 48, bold: true, color: 'var(--text-level-3)' }}
		zIndex={31}
	>
		<strong>Church</strong>
	</Fragment>
</Slide>
