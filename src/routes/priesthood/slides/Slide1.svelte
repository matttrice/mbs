<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow, Rect, Line } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/10-The_Priesthood/Slide1.png" />

	<!-- Static: Title - Priesthood -->
	<Fragment
		layout={{ x: 329, y: 11, width: 302, height: 40 }}
		font={{ font_size: 43.2, bold: true, color: '#000000' }}
	>
		Priesthood
	</Fragment>

	<!-- Static: Leviticus 9, Hebrews 9,10 - drillTo -->
	<Fragment
		drillTo="priesthood/priesthood-levitical"
		layout={{ x: 55, y: 18, width: 302, height: 40 }}
		font={{ font_size: 21.6, bold: true, v_align: 'middle', align: 'center' }}
	>
		Leviticus 9, Hebrews 9,10
	</Fragment>

	<!-- Step 1: Gray rectangle (left column) -->
	<Fragment step={1} animate="wipe-down">
		<Rect x={55} y={53} width={419} height={475} fill="var(--bg-light)" zIndex={1} />
	</Fragment>

	<!-- Step 1: Top line - with previous -->
	<Fragment step={1} animate="wipe">
		<Line from={{ x: 55, y: 54 }} to={{ x: 905, y: 54 }} stroke={{ width: 3, color: '#000000' }} zIndex={34} />
	</Fragment>

	<!-- Step 1: LEVITICAL - with previous -->
	<Fragment
		step={1}
		layout={{ x: 155, y: 55, width: 203, height: 50 }}
		font={{ font_size: 33.6, bold: true, align: 'center' }}
		zIndex={5}
	>
		LEVITICAL
	</Fragment>

	<!-- Step 1: Tribe of Levi, Order of Aaron - with previous -->
	<Fragment
		step={1}
		layout={{ x: 84, y: 97, width: 341, height: 42 }}
		font={{ font_size: 24, bold: true, italic: true, v_align: 'middle', align: 'center' }}
		zIndex={19}
	>
		Tribe of Levi, Order of Aaron
	</Fragment>

	<!-- Step 1: Source details - with previous -->
	<Fragment
		step={1}
		layout={{ x: 86, y: 266, width: 337, height: 148 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={7}
	>
		Source: Physical Ancestry<br />Weak Sinful Priest(s)<br />Temporary Priesthood<br />External Regulations
	</Fragment>

	<!-- Step 2: Genesis 14:17, Hebrews 7 - drillTo -->
	<Fragment
		step={2}
		drillTo="priesthood/priesthood-spiritual"
		layout={{ x: 597, y: 18, width: 302, height: 40 }}
		font={{ font_size: 21.6, bold: true, v_align: 'top', align: 'center' }}
		zIndex={21}
	>
		Genesis 14:17, Hebrews 7
	</Fragment>

	<!-- Step 2: Blue rectangle (right column) - with previous -->
	<Fragment step={2} animate="wipe-down">
		<Rect x={475} y={53} width={430} height={475} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<!-- Step 2: "New Order" - with previous -->
	<Fragment
		step={2}
		layout={{ x: 484, y: 102, width: 176, height: 35 }}
		font={{ font_size: 24, bold: true, italic: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={20}
	>
		"New Order"
	</Fragment>

	<!-- Step 3: of Melchizedek Indestructible Life -->
	<Fragment
		step={3}
		layout={{ x: 624, y: 105, width: 230, height: 50 }}
		font={{ font_size: 21.6, bold: true, italic: true, v_align: 'middle', wrap: true, align: 'center' }}
		zIndex={35}
	>
		of Melchizedek Indestructible Life
	</Fragment>

	<!-- Step 3: MELCHIZEDEKIAN - with previous -->
	<Fragment
		step={3}
		layout={{ x: 526, y: 57, width: 323, height: 50 }}
		font={{ font_size: 33.6, bold: true, color: '#0000FF', align: 'center' }}
		zIndex={6}
	>
		MELCHIZEDEKIAN
	</Fragment>

	<!-- Step 3: "A better hope" - with previous -->
	<Fragment
		step={3}
		layout={{ x: 488, y: 125, width: 172, height: 36 }}
		font={{ font_size: 19.2, bold: true, italic: true, color: '#0000FF', v_align: 'middle', wrap: true }}
		zIndex={36}
	>
		"A better hope"
	</Fragment>

	<!-- Step 4: Arrows for attributes -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 375, y: 288 }} to={{ x: 544, y: 289 }} stroke={{ width: 6, color: '#000000' }} zIndex={26} />
	</Fragment>
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 375, y: 315 }} to={{ x: 546, y: 315 }} stroke={{ width: 6, color: '#000000' }} zIndex={27} />
	</Fragment>
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 375, y: 339 }} to={{ x: 546, y: 341 }} stroke={{ width: 6, color: '#000000' }} zIndex={28} />
	</Fragment>
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 375, y: 365 }} to={{ x: 546, y: 365 }} stroke={{ width: 6, color: '#000000' }} zIndex={29} />
	</Fragment>

	<!-- Step 4: Source details spiritual - with previous -->
	<Fragment
		step={4}
		layout={{ x: 553, y: 266, width: 336, height: 148 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={9}
	>
		Source: Indestructible Life<br />Perfect Forever<br />Permanent Priesthood<br />Internal/Conscience Clean
	</Fragment>

	<!-- Step 5: High Priest: Appointed For Life -->
	<Fragment
		step={5}
		layout={{ x: 73, y: 148, width: 302, height: 38 }}
		font={{ font_size: 24, bold: true, v_align: 'middle' }}
		zIndex={15}
	>
		High Priest: Appointed For Life
	</Fragment>

	<!-- Step 6: Arrow from life to eternity -->
	<Fragment step={6} animate="wipe">
		<Arrow from={{ x: 422, y: 167 }} to={{ x: 501, y: 167 }} stroke={{ width: 6, color: '#000000' }} zIndex={23} />
	</Fragment>

	<!-- Step 6: High Priest: Appointed For Eternity - with previous -->
	<Fragment
		step={6}
		layout={{ x: 494, y: 148, width: 389, height: 38 }}
		font={{ font_size: 24, bold: true, v_align: 'middle' }}
		zIndex={17}
	>
		High Priest: Appointed For Eternity
	</Fragment>

	<!-- Step 7: Physical man interceded -->
	<Fragment
		step={7}
		layout={{ x: 71, y: 184, width: 314, height: 71 }}
		font={{ font_size: 19.2, v_align: 'middle', wrap: true }}
		zIndex={16}
	>
		Physical man interceded for people on behalf of God. He dies, must appoint a new one.
	</Fragment>

	<!-- Step 8: Jeremiah 33:14-18 drillTo -->
	<Fragment
		step={8}
		drillTo="priesthood/jeremiah-33-14-18"
		layout={{ x: 386, y: 182, width: 194, height: 38 }}
		font={{ font_size: 21.6, bold: true, v_align: 'middle', align: 'center' }}
		zIndex={22}
	>
		Jeremiah 33:14-18
	</Fragment>

	<!-- Step 9: Arrow to spiritual intercession -->
	<Fragment step={9} animate="wipe">
		<Arrow from={{ x: 376, y: 219 }} to={{ x: 583, y: 219 }} stroke={{ width: 6, color: '#000000' }} zIndex={24} />
	</Fragment>

	<!-- Step 9: Spiritual man intercedes - with previous -->
	<Fragment
		step={9}
		layout={{ x: 581, y: 196, width: 317, height: 52 }}
		font={{ font_size: 19.2, v_align: 'middle' }}
		zIndex={18}
	>
		Spiritual man (Christ) intercedes on<br />behalf of spiritual people eternally.
	</Fragment>

	<!-- Step 10: Old Testament (1st Glory) -->
	<Fragment
		step={10}
		layout={{ x: 91, y: 390, width: 293, height: 39 }}
		font={{ font_size: 24, wrap: true, align: 'center' }}
		zIndex={8}
	>
		Old Testament (1st Glory)
	</Fragment>

	<!-- Step 10: Physical - with previous -->
	<Fragment
		step={10}
		layout={{ x: 84, y: 421, width: 252, height: 50 }}
		font={{ font_size: 43.2, bold: true, v_align: 'middle', align: 'center' }}
		zIndex={2}
	>
		Physical
	</Fragment>

	<!-- Step 11: Arrow from Physical to Spiritual -->
	<Fragment step={11} animate="wipe">
		<Arrow from={{ x: 375, y: 409 }} to={{ x: 550, y: 409 }} stroke={{ width: 11, color: '#000000' }} zIndex={25} />
	</Fragment>

	<!-- Step 11: New Testament (2nd Glory) - with previous -->
	<Fragment
		step={11}
		layout={{ x: 540, y: 390, width: 327, height: 39 }}
		font={{ font_size: 24, wrap: true, align: 'center' }}
		zIndex={10}
	>
		New Testament (2nd Glory)
	</Fragment>

	<!-- Step 11: Spiritual - with previous -->
	<Fragment
		step={11}
		layout={{ x: 608, y: 421, width: 268, height: 50 }}
		font={{ font_size: 43.2, bold: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		zIndex={30}
	>
		Spiritual
	</Fragment>

	<!-- Step 12: Levitical Priesthood part of what nation? -->
	<Fragment
		step={12}
		layout={{ x: 293, y: 431, width: 168, height: 70 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle' }}
		zIndex={11}
	>
		Levitical Priesthood  part of what nation?
	</Fragment>

	<!-- Step 13: Israel -->
	<Fragment
		step={13}
		layout={{ x: 138, y: 462, width: 146, height: 68 }}
		font={{ font_size: 48, bold: true }}
		zIndex={12}
	>
		Israel
	</Fragment>

	<!-- Step 14: Melchizedekian counterpart? -->
	<Fragment
		step={14}
		layout={{ x: 475, y: 431, width: 157, height: 70 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle', wrap: true, align: 'center' }}
		zIndex={13}
	>
		Melchizedekian<br />counterpart?
	</Fragment>

	<!-- Step 15: Arrow to Church -->
	<Fragment step={15} animate="wipe">
		<Arrow from={{ x: 285, y: 500 }} to={{ x: 648, y: 500 }} stroke={{ width: 11, color: '#000000' }} zIndex={32} />
	</Fragment>

	<!-- Step 15: Church - with previous -->
	<Fragment
		step={15}
		layout={{ x: 648, y: 465, width: 189, height: 68 }}
		font={{ font_size: 48, bold: true, color: '#0000FF' }}
		zIndex={31}
	>
		Church
	</Fragment>
</Slide>

<style>
	:global(.slide-bg) {
		position: absolute;
		inset: 0;
		background: var(--bg-ghost);
	}
</style>
