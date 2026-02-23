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

	<!-- Static: Physical Israel title -->
	<Fragment
		layout={{ x: 98, y: 8, width: 308, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
		zIndex={37}
	>
		Physical Israel
	</Fragment>

	<!-- Static: Horizontal line separator -->
	<Fragment>
		<Line from={{ x: 48, y: 54 }} to={{ x: 912, y: 54 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={38} />
	</Fragment>

	<!-- Step 1: Gray background rect -->
	<Fragment step={1}>
		<Rect x={48} y={54} width={418} height={364} fill="var(--bg-level-1)" zIndex={2} />
	</Fragment>

	<!-- Step 1.1: Is everyone a priest? -->
	<Fragment
		step={1.1}
		layout={{ x: 90, y: 83, width: 172, height: 28 }}
		font={{ font_size: 16.8 }}
		zIndex={3}
	>
		Is everyone a priest?
	</Fragment>

	<!-- Step 2: No, just the Levites -->
	<Fragment
		step={2}
		layout={{ x: 254, y: 83, width: 164, height: 28 }}
		font={{ font_size: 16.8, italic: true }}
		zIndex={4}
	>
		<em>No, just the Levites.</em>
	</Fragment>

	<!-- Step 3: Could a Levite be King? -->
	<Fragment
		step={3}
		layout={{ x: 90, y: 105, width: 260, height: 28 }}
		font={{ font_size: 16.8, v_align: 'middle' }}
		zIndex={5}
	>
		Could a Levite be King of Israel?
	</Fragment>

	<!-- Step 4: No. -->
	<Fragment
		step={4}
		layout={{ x: 336, y: 105, width: 41, height: 28 }}
		font={{ font_size: 16.8, italic: true, v_align: 'middle' }}
		zIndex={6}
	>
		<em>No.</em>
	</Fragment>

	<!-- Step 5: Levitical Priesthood title + frames + Offices Divided -->
	<Fragment
		step={5}
		layout={{ x: 120, y: 53, width: 291, height: 42 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={7}
	>
		<strong>Levitical Priesthood</strong>
	</Fragment>

	<Fragment step={5}>
        <Line from={{ x: 118, y: 135 }} to={{ x: 394, y: 136 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={41} />
    </Fragment>

	<Fragment
		step={5}
		layout={{ x: 134, y: 184, width: 234, height: 34 }}
		font={{ font_size: 21.6, bold: true, align: 'center', color: '#FFC000', wrap: true }}
		fill="var(--bg-level-0)"
		zIndex={41}
	>
		<strong>Offices Divided</strong>
	</Fragment>

	<!-- Step 5.1: Priests + Kings -->
	<Fragment
		step={5.1}
		layout={{ x: 115, y: 141, width: 112, height: 42 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={9}
	>
		<strong>Priests</strong>
	</Fragment>

	<Fragment
		step={5.1}
		layout={{ x: 288, y: 141, width: 95, height: 42 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={8}
	>
		<strong>Kings</strong>
	</Fragment>

	<!-- Step 6: Priest duties list -->
	<Fragment
		step={6}
		layout={{ x: 62, y: 226, width: 275, height: 150 }}
		font={{ font_size: 16.8, wrap: true }}
		zIndex={10}
	>
		- Clergy (Levitical) / Laity<br />
		- Born into it<br />
		- Mediators  i.e. Moses<br />
		- Oversee holy worship<br />
		  (tabernacle)<br />
		- All die and need to be replaced<br />
		- Weak because of own sins
	</Fragment>

	<!-- Step 7: Vertical arrow -->
	<Fragment step={7}>
		<Arrow from={{ x: 376, y: 178 }} to={{ x: 376, y: 241 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={49} />
	</Fragment>

	<!-- Step 7.1: Genesis 49:10 drill -->
	<Fragment
		step={7.1}
		drillTo="priesthood/genesis-49-10"
		layout={{ x: 238, y: 233, width: 232, height: 48 }}
		font={{ font_size: 16.8, bold: true, align: 'center', wrap: true }}
		zIndex={11}
	>
		<strong>Genesis 49:10</strong><br /><strong>Psalms 60:7, Hebrews 7:14</strong>
	</Fragment>

	<!-- Step 8: Judah = Kings + Throne of David -->
	<Fragment
		step={8}
		layout={{ x: 302, y: 274, width: 167, height: 34 }}
		font={{ font_size: 21.6, bold: true, wrap: true }}
		zIndex={12}
	>
		<strong>Judah = Kings</strong>
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: 312, y: 302, width: 143, height: 28 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={13}
	>
		<strong>Throne of David</strong>
	</Fragment>

	<!-- Step 9: Vertical arrow + Christ / Luke 1:30-33 drill -->
	<Fragment step={9}>
		<Arrow from={{ x: 380, y: 324 }} to={{ x: 380, y: 350 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={14} />
	</Fragment>

	<Fragment
		step={9}
		drillTo="priesthood/luke-1-30-33"
		layout={{ x: 309, y: 341, width: 147, height: 59 }}
		font={{ font_size: 21.6, bold: true, align: 'center', wrap: true }}
		zIndex={15}
	>
		<strong>Christ </strong><br /><strong>Luke 1:30-33</strong>
	</Fragment>

	<!-- Step 10: What is the name of Christ's Kingdom? -->
	<Fragment
		step={10}
		layout={{ x: 278, y: 405, width: 187, height: 48 }}
		font={{ font_size: 16.8, bold: true, align: 'center', color: 'var(--text-level-3)', wrap: true }}
		fill="var(--bg-ghost)"
		line={{ width: 4 }}
		zIndex={16}
	>
		<strong>What is the name</strong><br /><strong>of Christ's Kingdom?</strong>
	</Fragment>

	<!-- Step 11: Church title + blue rect + question + frames -->
	<Fragment
		step={11}
		layout={{ x: 597, y: 8, width: 149, height: 40 }}
		font={{ font_size: 38.4, v_align: 'middle', align: 'left', color: 'var(--text-level-3)' }}
		line={{ width: 1 }}
		zIndex={43}
	>
		Church
	</Fragment>

	<Fragment step={11}>
		<Rect x={466} y={54} width={446} height={400} fill="var(--bg-level-2)" zIndex={1} />
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 464, y: 82, width: 448, height: 28 }}
		font={{ font_size: 16.8, align: 'center', wrap: true }}
		zIndex={17}
	>
		What is the name of the Priesthood over the CHURCH?
	</Fragment>

	<Fragment step={11}>
		<Rect x={682} y={129} width={202} height={125} fill="var(--bg-level-0)" zIndex={47} />
	</Fragment>

	<Fragment step={11}>
        <Line from={{ x: 118, y: 135 }} to={{ x: 394, y: 136 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={41} />
    </Fragment>

	<!-- Step 12: MELCHIZEDEK -->
	<Fragment
		step={12}
		layout={{ x: 575, y: 53, width: 224, height: 42 }}
		font={{ font_size: 28.8, bold: true, color: 'var(--text-level-3)' }}
		zIndex={18}
	>
		<strong>MELCHIZEDEK</strong>
	</Fragment>

	<!-- Step 13: Priest? + Hebrews 7:23-28 drill -->
	<Fragment
		step={13}
		layout={{ x: 523, y: 140, width: 113, height: 42 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={19}
	>
		<strong>Priest?</strong>
	</Fragment>

	<Fragment
		step={13}
		drillTo="priesthood/hebrews-7-23-28"
		layout={{ x: 514, y: 214, width: 169, height: 28 }}
		font={{ font_size: 16.8, bold: true, align: 'center', wrap: true }}
		zIndex={51}
	>
		<strong>Hebrews 7:23-28  </strong>
	</Fragment>

	<!-- Step 14: CHRIST (under Priest) -->
	<Fragment
		step={14}
		layout={{ x: 486, y: 176, width: 176, height: 59 }}
		font={{ font_size: 43, bold: true, align: 'center' }}
		zIndex={20}
	>
		<strong>CHRIST</strong>
	</Fragment>

	<!-- Step 15: King? + Revelation 17:14 drill -->
	<Fragment
		step={15}
		layout={{ x: 732, y: 140, width: 97, height: 42 }}
		font={{ font_size: 28.8, bold: true }}
		zIndex={21}
	>
		<strong>King?</strong>
	</Fragment>

	<Fragment
		step={15}
		drillTo="priesthood/revelation-17-14"
		layout={{ x: 683, y: 214, width: 202, height: 28 }}
		font={{ font_size: 16.8, bold: true, v_align: 'middle', wrap: true }}
		zIndex={56}
	>
		<strong>Revelation 17:14,19:16</strong>
	</Fragment>

	<!-- Step 16: CHRIST (under King) -->
	<Fragment
		step={16}
		layout={{ x: 716, y: 176, width: 176, height: 59 }}
		font={{ font_size: 43, bold: true, align: 'center' }}
		zIndex={22}
	>
		<strong>CHRIST</strong>
	</Fragment>

	<!-- Step 17: Jeremiah 33:17-18 drill + Luke 1:30-36 drill -->
	<Fragment
		step={17}
		drillTo="priesthood/jeremiah-33-17-18"
		layout={{ x: 523, y: 234, width: 186, height: 48 }}
		font={{ font_size: 16.8, bold: true, wrap: true }}
		zIndex={23}
	>
		<strong>Jeremiah 33:17-18</strong><br /><strong>Zechariah 6:11-13</strong>
	</Fragment>

	<Fragment
		step={17}
		drillTo="priesthood/luke-1-30-36"
		layout={{ x: 685, y: 234, width: 172, height: 48 }}
		font={{ font_size: 16.8, bold: true, wrap: true }}
		zIndex={50}
	>
		<strong>Luke 1:30-36, 1:5</strong><br /><strong>Matthew 1:1-16</strong>
	</Fragment>

	<!-- Step 18: JESUS = High Priest and King + rect divider + curved connector + Peace -->
	<Fragment
		step={18}
		layout={{ x: 465, y: 274, width: 404, height: 36 }}
		font={{ font_size: 24, bold: true, align: 'right', color: 'var(--text-level-3)', wrap: true }}
		zIndex={24}
	>
		<strong>JESUS = High Priest and King</strong>
	</Fragment>

	<Fragment step={18}>
		<Rect x={677} y={147} width={18} height={68} fill="var(--bg-level-2)" stroke={{ width: 1 }} zIndex={52} />
	</Fragment>

	<Fragment step={18}>
		<Arrow from={{ x: 800, y: 75 }} to={{ x: 869, y: 293 }} stroke={{ width: 6, color: 'var(--stroke-level-0)' }} bow={0.3} zIndex={44} />
	</Fragment>

	<Fragment
		step={18}
		layout={{ x: 642, y: 145, width: 90, height: 35 }}
		font={{ font_size: 21.6, bold: true, align: 'center', color: '#FFC000', wrap: true }}
		fill="var(--bg-level-0)"
		zIndex={53}
	>
		<strong>Peace</strong>
	</Fragment>

	<!-- Step 19: Ephesians 5:22-25 drill -->
	<Fragment
		step={19}
		drillTo="priesthood/ephesians-5-22-25"
		layout={{ x: 660, y: 304, width: 238, height: 77 }}
		font={{ font_size: 19.2, bold: true, wrap: true }}
		zIndex={25}
	>
		<strong>Ephesians 5:22-25</strong><br /><strong>Galatians 3:26</strong><br /><strong>1 Peter 2:9, James 1:12</strong>
	</Fragment>

	<!-- Step 20: Christ/Church/King/Priests -->
	<Fragment
		step={20}
		layout={{ x: 480, y: 301, width: 105, height: 68 }}
		font={{ font_size: 16.8, wrap: true }}
		zIndex={26}
	>
		Christ<br />Church<br />King/Priests
	</Fragment>

	<!-- Step 21: Husband/Woman/Sons -->
	<Fragment
		step={21}
		layout={{ x: 579, y: 301, width: 82, height: 68 }}
		font={{ font_size: 16.8, wrap: true }}
		zIndex={27}
	>
		Husband<br />Woman<br />Sons
	</Fragment>

	<!-- Step 22: If you were born... -->
	<Fragment
		step={22}
		layout={{ x: 471, y: 370, width: 429, height: 25 }}
		font={{ font_size: 14.4, bold: true, align: 'center', wrap: true }}
		zIndex={28}
	>
		<strong>If you were born into this family, what would that make you?</strong>
	</Fragment>

	<!-- Step 23: Revelation 5:9-10 drill -->
	<Fragment
		step={23}
		drillTo="priesthood/revelation-5-9-10"
		layout={{ x: 586, y: 390, width: 184, height: 28 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={46}
	>
		<strong>Revelation 5:9-10 NKJV</strong>
	</Fragment>

	<!-- Step 24: Sons = Kings and Priests -->
	<Fragment
		step={24}
		layout={{ x: 541, y: 410, width: 306, height: 36 }}
		font={{ font_size: 24, bold: true }}
		zIndex={45}
	>
		<strong>Sons = Kings and Priests</strong>
	</Fragment>

	<!-- Step 25: Responsibilities / Duties -->
	<Fragment
		step={25}
		layout={{ x: 220, y: 404, width: 357, height: 50 }}
		font={{ font_size: 24, bold: true, v_align: 'middle', align: 'center', wrap: true }}
		fill="var(--bg-level-2)"
		zIndex={29}
	>
		<strong>Responsibilities / Duties:</strong>
	</Fragment>

	<!-- Step 26: Malachi 2:7 drill -->
	<Fragment
		step={26}
		drillTo="priesthood/malachi-2-7"
		layout={{ x: 68, y: 410, width: 152, height: 36 }}
		font={{ font_size: 24, bold: true }}
		zIndex={42}
	>
		<strong> Malachi 2:7</strong>
	</Fragment>

	<!-- Step 27: Duties to the Priesthood + arrow + HOLY -->
	<Fragment
		step={27}
		layout={{ x: 266, y: 449, width: 496, height: 31 }}
		font={{ font_size: 19.2, bold: true, wrap: true }}
		zIndex={30}
	>
		<strong>Duties to the Priesthood:  Oversee the Holy Worship</strong>
	</Fragment>

	<Fragment step={27}>
		<Arrow from={{ x: 206, y: 464 }} to={{ x: 270, y: 464 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={35} />
	</Fragment>

	<Fragment
		step={27}
		layout={{ x: 85, y: 436, width: 118, height: 54 }}
		font={{ font_size: 38.4, bold: true, color: 'var(--text-level-3)' }}
		zIndex={33}
	>
		<strong>HOLY</strong>
	</Fragment>

	<!-- Step 28: Duties to the Nation drill CS 11 -->
	<Fragment
		step={28}
		drillTo="priesthood/2-samuel-11-1"
		layout={{ x: 268, y: 472, width: 620, height: 51 }}
		font={{ font_size: 19.2, bold: true, wrap: true }}
		zIndex={31}
	>
		<strong>Duties to the Nation:  </strong><br /><strong>2 Samuel 11:1, Ephesians 6:10-12, Matthew 28:18-19, 2 Corinthians 10:3-6</strong>
	</Fragment>

	<!-- Step 29: Spiritual Battle drill CS 11 -->
	<Fragment
		step={29}
		drillTo="priesthood/2-samuel-11-1"
		layout={{ x: 472, y: 472, width: 367, height: 31 }}
		font={{ font_size: 19.2, bold: true, color: 'var(--text-level-3)', wrap: true }}
		zIndex={0}
	>
		<strong>Spiritual Battle, Expand the boarders</strong>
	</Fragment>

	<!-- Step 29.1: Arrow + ROYAL -->
	<Fragment step={29.1}>
		<Arrow from={{ x: 220, y: 486 }} to={{ x: 270, y: 486 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={36} />
	</Fragment>

	<Fragment
		step={29.1}
		layout={{ x: 76, y: 472, width: 147, height: 54 }}
		font={{ font_size: 38.4, bold: true, color: 'var(--text-level-3)' }}
		zIndex={34}
	>
		<strong>ROYAL</strong>
	</Fragment>
</Slide>
