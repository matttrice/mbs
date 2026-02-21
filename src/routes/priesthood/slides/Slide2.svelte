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
	<ReferenceOverlay src="/export/10-The_Priesthood/Slide2.png" />

	<!-- Static: Physical Israel title -->
	<Fragment
		layout={{ x: 98, y: 8, width: 308, height: 40 }}
		font={{ bold: true, color: 'var(--text-level-0)', align: 'left' }}
	>
		Physical Israel
	</Fragment>

	<!-- Static: Top line -->
	<Fragment>
		<Line from={{ x: 48, y: 54 }} to={{ x: 912, y: 54 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={31} />
	</Fragment>

	<!-- Step 1: Gray rectangle (left column) - instant with rectangle visible -->
	<Fragment step={1} animate="fade">
		<Rect x={48} y={54} width={418} height={364} fill="var(--bg-level-1)" zIndex={1} />
	</Fragment>

	<!-- Step 1.1: Is everyone a priest? - after -->
	<Fragment
		step={1.1}
		layout={{ x: 90, y: 84, width: 177, height: 30 }}
		font={{ font_size: 16.8 }}
		zIndex={3}
	>
		Is everyone a priest?
	</Fragment>

	<!-- Step 2: No, just the Levites -->
	<Fragment
		step={2}
		layout={{ x: 253, y: 84, width: 168, height: 30 }}
		font={{ font_size: 16.8, italic: true }}
		zIndex={4}
	>
		No, just the Levites.
	</Fragment>

	<!-- Step 3: Could a Levite be King of Israel? -->
	<Fragment
		step={3}
		layout={{ x: 90, y: 104, width: 264, height: 30 }}
		font={{ font_size: 16.8, v_align: 'middle' }}
		zIndex={5}
	>
		Could a Levite be King of Israel?
	</Fragment>

	<!-- Step 4: No. -->
	<Fragment
		step={4}
		layout={{ x: 336, y: 104, width: 46, height: 30 }}
		font={{ font_size: 16.8, italic: true, v_align: 'middle' }}
		zIndex={6}
	>
		No.
	</Fragment>

	<!-- Step 5: Levitical Priesthood title + frames -->
	<Fragment
		step={5}
		layout={{ x: 120, y: 54, width: 296, height: 45 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={56}
	>
		Levitical Priesthood
	</Fragment>

	<!-- Step 5: Half frames (black boxes for Priests/Kings) - with previous -->
	<Fragment step={5} animate="fade">
		<Rect x={55} y={129} width={202} height={125} fill="var(--bg-level-0)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={33} />
	</Fragment>
	<Fragment step={5} animate="fade">
		<Rect x={250} y={129} width={202} height={125} fill="var(--bg-level-0)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={32} />
	</Fragment>

	<!-- Step 5: Offices Divided - with previous -->
	<Fragment
		step={5}
		layout={{ x: 134, y: 184, width: 234, height: 36 }}
		font={{ font_size: 21.6, bold: true, color: '#FFC000', wrap: true, align: 'center' }}
		fill="var(--bg-level-0)"
		zIndex={50}
	>
		Offices Divided
	</Fragment>

	<!-- Step 5.1: Priests - after -->
	<Fragment
		step={5.1}
		layout={{ x: 114, y: 141, width: 116, height: 45 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={49}
	>
		Priests
	</Fragment>

	<!-- Step 5.1: Kings - with previous -->
	<Fragment
		step={5.1}
		layout={{ x: 288, y: 141, width: 100, height: 45 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={48}
	>
		Kings
	</Fragment>

	<!-- Step 6: Clergy/Laity list -->
	<Fragment
		step={6}
		layout={{ x: 61, y: 226, width: 275, height: 152 }}
		font={{ font_size: 16.8, wrap: true }}
		zIndex={7}
	>
		- Clergy (Levitical) / Laity<br />- Born into it<br />- Mediators  i.e. Moses<br />- Oversee holy worship<br />   (tabernacle)<br />- All die and need to be replaced<br />- Weak because of own sins
	</Fragment>

	<!-- Step 7: Arrow down + Genesis 49:10 drillTo -->
	<Fragment step={7} animate="draw">
		<Arrow from={{ x: 378, y: 178 }} to={{ x: 378, y: 241 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={41} />
	</Fragment>

	<!-- Step 7.1: Genesis 49:10 - after -->
	<Fragment
		step={7.1}
		drillTo="priesthood/genesis-49-10"
		layout={{ x: 235, y: 233, width: 236, height: 50 }}
		font={{ font_size: 16.8, bold: true, align: 'center' }}
		zIndex={8}
	>
		Genesis 49:10<br />Psalms 60:7, Hebrews 7:14
	</Fragment>

	<!-- Step 8: Judah = Kings -->
	<Fragment
		step={8}
		layout={{ x: 302, y: 275, width: 167, height: 62 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={9}
	>
		Judah = Kings
	</Fragment>

	<!-- Step 8: Throne of David - with previous -->
	<Fragment
		step={8}
		layout={{ x: 312, y: 301, width: 149, height: 30 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={10}
	>
		Throne of David
	</Fragment>

	<!-- Step 9: Arrow to Christ + Luke 1:30-33 drillTo -->
	<Fragment step={9} animate="draw">
		<Arrow from={{ x: 380, y: 324 }} to={{ x: 380, y: 350 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={11} />
	</Fragment>

	<!-- Step 9: Christ Luke 1:30-33 drillTo - with previous -->
	<Fragment
		step={9}
		drillTo="priesthood/luke-1-30-33"
		layout={{ x: 306, y: 342, width: 151, height: 62 }}
		font={{ font_size: 21.6, bold: true, align: 'center' }}
		zIndex={12}
	>
		Christ Luke 1:30-33
	</Fragment>

	<!-- Step 10: What is the name of Christ's Kingdom? -->
	<Fragment
		step={10}
		layout={{ x: 275, y: 405, width: 193, height: 50 }}
		font={{ font_size: 16.8, bold: true, color: 'var(--text-level-3)', align: 'center' }}
		fill="var(--bg-ghost)"
		zIndex={13}
	>
		What is the name<br />of Christ's Kingdom?
	</Fragment>

	<!-- Step 11: Church title -->
	<Fragment
		step={11}
		layout={{ x: 597, y: 8, width: 149, height: 40 }}
		font={{ font_size: 38.4, color: 'var(--text-level-3)', v_align: 'middle', align: 'left' }}
		zIndex={35}
	>
		Church
	</Fragment>

	<!-- Step 11: Blue rectangle (right column) - with previous -->
	<Fragment step={11} animate="wipe-down">
		<Rect x={466} y={54} width={446} height={400} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<!-- Step 11: What is the name of the Priesthood over the CHURCH? - with previous -->
	<Fragment
		step={11}
		layout={{ x: 465, y: 83, width: 447, height: 30 }}
		font={{ font_size: 16.8, wrap: true, align: 'center' }}
		zIndex={14}
	>
		What is the name of the Priesthood over the CHURCH?
	</Fragment>

	<!-- Step 11: Half frames (black boxes for Priest/King) - with previous -->
	<Fragment step={11} animate="fade">
		<Rect x={682} y={129} width={202} height={125} fill="var(--bg-level-0)" zIndex={39} />
	</Fragment>
	<Fragment step={11} animate="fade">
		<Rect x={488} y={129} width={202} height={125} fill="var(--bg-level-0)" zIndex={40} />
	</Fragment>

	<!-- Step 12: MELCHIZEDEK -->
	<Fragment
		step={12}
		layout={{ x: 575, y: 54, width: 230, height: 45 }}
		font={{ font_size: 28.8, bold: true, color: 'var(--text-level-3)' }}
		zIndex={55}
	>
		MELCHIZEDEK
	</Fragment>

	<!-- Step 13: Priest? + Hebrews 7:23-28 drillTo -->
	<Fragment
		step={13}
		layout={{ x: 523, y: 140, width: 118, height: 45 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={52}
	>
		Priest?
	</Fragment>

	<!-- Step 13: Hebrews 7:23-28 drillTo - with previous -->
	<Fragment
		step={13}
		drillTo="priesthood/hebrews-7-23-28"
		layout={{ x: 514, y: 214, width: 169, height: 29 }}
		font={{ font_size: 16.8, bold: true, wrap: true, align: 'center' }}
		zIndex={43}
	>
		Hebrews 7:23-28
	</Fragment>

	<!-- Step 14: CHRIST (priest) -->
	<Fragment
		step={14}
		layout={{ x: 501, y: 176, width: 146, height: 50 }}
		font={{ font_size: 33.6, bold: true, align: 'center' }}
		zIndex={53}
	>
		CHRIST
	</Fragment>

	<!-- Step 15: King? + Revelation 17:14 drillTo -->
	<Fragment
		step={15}
		layout={{ x: 732, y: 140, width: 102, height: 45 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={15}
	>
		King?
	</Fragment>

	<!-- Step 15: Revelation 17:14 drillTo - with previous -->
	<Fragment
		step={15}
		drillTo="priesthood/revelation-17-14"
		layout={{ x: 684, y: 215, width: 202, height: 28 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle', wrap: true }}
		zIndex={47}
	>
		Revelation 17:14,19:16
	</Fragment>

	<!-- Step 16: CHRIST (king) -->
	<Fragment
		step={16}
		layout={{ x: 731, y: 176, width: 146, height: 50 }}
		font={{ font_size: 33.6, bold: true, align: 'center' }}
		zIndex={54}
	>
		CHRIST
	</Fragment>

	<!-- Step 17: Jeremiah 33:17-18 drillTo (multi-slide custom show) -->
	<Fragment
		step={17}
		drillTo="priesthood/jeremiah-33-17-18-custom"
		layout={{ x: 523, y: 234, width: 186, height: 50 }}
		font={{ font_size: 16.8, bold: true, wrap: true }}
		zIndex={16}
	>
		Jeremiah 33:17-18<br />Zechariah 6:11-13
	</Fragment>

	<!-- Step 17: Luke 1:30-36 drillTo - with previous -->
	<Fragment
		step={17}
		drillTo="priesthood/luke-1-30-36"
		layout={{ x: 685, y: 234, width: 172, height: 50 }}
		font={{ font_size: 16.8, bold: true, wrap: true }}
		zIndex={42}
	>
		Luke 1:30-36, 1:5<br />Matthew 1:1-16
	</Fragment>

	<!-- Step 18: JESUS = High Priest and King -->
	<Fragment
		step={18}
		layout={{ x: 465, y: 275, width: 404, height: 39 }}
		font={{ font_size: 24, bold: true, color: 'var(--text-level-3)', wrap: true, align: 'right' }}
		zIndex={17}
	>
		JESUS = High Priest and King
	</Fragment>

	<!-- Step 18: Blue fill between frames - with previous -->
	<Fragment step={18} animate="fade">
		<Rect x={673} y={147} width={25} height={67} fill="var(--bg-level-2)" zIndex={44} />
	</Fragment>

	<!-- Step 18: Curved arrow - with previous (simplified to straight arrow) -->
	<Fragment step={18} animate="draw">
		<Arrow from={{ x: 837, y: 76 }} to={{ x: 837, y: 294 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} zIndex={36} />
	</Fragment>

	<!-- Step 18: Peace - with previous -->
	<Fragment
		step={18}
		layout={{ x: 642, y: 145, width: 90, height: 35 }}
		font={{ font_size: 21.6, bold: true, color: '#FFC000', wrap: true, align: 'center' }}
		fill="var(--bg-level-0)"
		zIndex={51}
	>
		Peace
	</Fragment>

	<!-- Step 19: Ephesians 5:22-25 drillTo (multi-slide custom show) -->
	<Fragment
		step={19}
		drillTo="priesthood/ephesians-galatians-peter"
		layout={{ x: 660, y: 304, width: 238, height: 79 }}
		font={{ font_size: 19.2, bold: true, wrap: true }}
		zIndex={18}
	>
		Ephesians 5:22-25<br />Galatians 3:26<br />1 Peter 2:9, James 1:12
	</Fragment>

	<!-- Step 20: Christ Church King/Priests -->
	<Fragment
		step={20}
		layout={{ x: 480, y: 300, width: 110, height: 71 }}
		font={{ font_size: 16.8 }}
		zIndex={19}
	>
		Christ<br />Church<br />King/Priests
	</Fragment>

	<!-- Step 21: Husband Woman Sons -->
	<Fragment
		step={21}
		layout={{ x: 579, y: 301, width: 87, height: 71 }}
		font={{ font_size: 16.8 }}
		zIndex={20}
	>
		Husband<br />Woman<br />Sons
	</Fragment>

	<!-- Step 22: If you were born into this family... -->
	<Fragment
		step={22}
		layout={{ x: 467, y: 371, width: 437, height: 27 }}
		font={{ font_size: 14.4, bold: true, align: 'center' }}
		zIndex={21}
	>
		If you were born into this family, what would that make you?
	</Fragment>

	<!-- Step 23: Revelation 5:9-10 drillTo -->
	<Fragment
		step={23}
		drillTo="priesthood/revelation-5-9-10"
		layout={{ x: 586, y: 390, width: 190, height: 30 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={38}
	>
		Revelation 5:9-10 NKJV
	</Fragment>

	<!-- Step 24: Sons = Kings and Priests -->
	<Fragment
		step={24}
		layout={{ x: 541, y: 410, width: 311, height: 39 }}
		font={{ font_size: 24, bold: true }}
		zIndex={37}
	>
		Sons = Kings and Priests
	</Fragment>

	<!-- Step 25: Responsibilities / Duties -->
	<Fragment
		step={25}
		layout={{ x: 221, y: 404, width: 357, height: 50 }}
		font={{ font_size: 24, bold: true, v_align: 'middle', wrap: true, align: 'center' }}
		fill="var(--bg-level-2)"
		zIndex={22}
	>
		Responsibilities / Duties:
	</Fragment>

	<!-- Step 26: Malachi 2:7 drillTo -->
	<Fragment
		step={26}
		drillTo="priesthood/malachi-2-7"
		layout={{ x: 69, y: 411, width: 157, height: 39 }}
		font={{ font_size: 24, bold: true }}
		zIndex={34}
	>
		Malachi 2:7
	</Fragment>

	<!-- Step 27: Duties to the Priesthood -->
	<Fragment
		step={27}
		layout={{ x: 266, y: 449, width: 501, height: 33 }}
		font={{ font_size: 19.2, bold: true }}
		zIndex={23}
	>
		Duties to the Priesthood:  Oversee the Holy Worship
	</Fragment>

	<!-- Step 27: Arrow + HOLY - with previous -->
	<Fragment step={27} animate="wipe">
		<Arrow from={{ x: 207, y: 464 }} to={{ x: 272, y: 464 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={28} />
	</Fragment>

	<Fragment
		step={27}
		layout={{ x: 85, y: 436, width: 124, height: 56 }}
		font={{ font_size: 38.4, bold: true, color: 'var(--text-level-3)' }}
		zIndex={26}
	>
		HOLY
	</Fragment>

	<!-- Step 28: Duties to the Nation drillTo (multi-slide custom show) -->
	<Fragment
		step={28}
		drillTo="priesthood/2-samuel-11-1-custom"
		layout={{ x: 267, y: 472, width: 620, height: 53 }}
		font={{ font_size: 19.2, bold: true, wrap: true }}
		zIndex={24}
	>
		Duties to the Nation:  2 Samuel 11:1, Ephesians 6:10-12, Matthew 28:18-19, 2 Corinthians 10:3-6
	</Fragment>

	<!-- Step 29: Spiritual Battle drillTo -->
	<Fragment
		step={29}
		drillTo="priesthood/2-corinthians-10-3-6"
		layout={{ x: 473, y: 473, width: 367, height: 33 }}
		font={{ font_size: 19.2, bold: true, color: 'var(--text-level-3)', wrap: true }}
		zIndex={2}
	>
		Spiritual Battle, Expand the boarders
	</Fragment>

	<!-- Step 29.1: Arrow + ROYAL - after -->
	<Fragment step={29.1} animate="wipe">
		<Arrow from={{ x: 221, y: 486 }} to={{ x: 271, y: 486 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={29} />
	</Fragment>

	<Fragment
		step={29.1}
		layout={{ x: 77, y: 472, width: 151, height: 56 }}
		font={{ font_size: 38.4, bold: true, color: 'var(--text-level-3)' }}
		zIndex={27}
	>
		ROYAL
	</Fragment>
</Slide>

<style>
	:global(.slide-bg) {
		position: absolute;
		inset: 0;
		background: var(--bg-ghost);
	}
</style>
