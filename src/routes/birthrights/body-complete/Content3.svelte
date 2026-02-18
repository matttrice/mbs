<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect, Arrow, Line } from '$lib/components/svg';
</script>

<div class="slide-bg"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 317, y: 0, width: 331, height: 44 }}
	font={{ font_size: 26.7, bold: true, italic: true, align: 'center', v_align: 'middle' }}
>
	Formation of the Body
</Fragment>

<!-- Step 1: Physical column -->
<Fragment step={1} animate="wipe-down">
	<Rect x={90} y={0} width={227} height={540} fill="var(--bg-level-1)" zIndex={0} />
</Fragment>

<!-- Step 1.1: Dust image -->
<Fragment
	step={1.1}
	layout={{ x: 53, y: 417, width: 322, height: 129 }}
>
	<img src="/export/11-Birthrights/image3.png" alt="dust" class="slide-image" />
</Fragment>

<!-- Step 2: 1st Adam -->
<Fragment
	step={2}
	layout={{ x: 110, y: 12, width: 190, height: 51 }}
	font={{ font_size: 39.2, bold: true }}
>
	1st Adam
</Fragment>

<!-- Step 3: Formed Body -->
<Fragment
	step={3}
	layout={{ x: 322, y: 48, width: 183, height: 28 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	Formed Body
</Fragment>

<!-- Step 3: Genesis 2:7 link -->
<Fragment
	step={3}
	drillTo="birthrights/genesis-2-7"
	layout={{ x: 333, y: 77, width: 136, height: 23 }}
	font={{ font_size: 23.3, italic: true, v_align: 'middle' }}
>
	Genesis 2:7
</Fragment>

<!-- Step 3: Body image -->
<Fragment
	step={3}
	layout={{ x: 92, y: 222, width: 120, height: 322 }}
>
	<img src="/export/11-Birthrights/image6.png" alt="body" class="slide-image" />
</Fragment>

<!-- Step 4: Spirit Given -->
<Fragment
	step={4}
	layout={{ x: 322, y: 112, width: 169, height: 24 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	Spirit Given
</Fragment>

<!-- Step 5: Living Being -->
<Fragment
	step={5}
	layout={{ x: 322, y: 157, width: 167, height: 24 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	Living Being
</Fragment>

<!-- Step 5.2: Male label -->
<Fragment
	step={5.2}
	layout={{ x: 123, y: 276, width: 63, height: 27 }}
	font={{ font_size: 20, bold: true, align: 'center', v_align: 'middle' }}
>
	Male
</Fragment>

<!-- Step 6: Ribs image -->
<Fragment
	step={6}
	layout={{ x: 109, y: 252, width: 84, height: 144 }}
>
	<img src="/export/11-Birthrights/image7.png" alt="ribs" class="slide-image" />
</Fragment>

<!-- Step 6: Rib image -->
<Fragment
	step={6}
	layout={{ x: 264, y: 302, width: 55, height: 28 }}
>
	<img src="/export/11-Birthrights/image5.png" alt="rib" class="slide-image" />
</Fragment>

<!-- Step 7: Female body image -->
<Fragment
	step={7}
	layout={{ x: 196, y: 222, width: 121, height: 324 }}
>
	<img src="/export/11-Birthrights/image4.png" alt="female body" class="slide-image" />
</Fragment>

<!-- Step 7: Female label -->
<Fragment
	step={7}
	layout={{ x: 227, y: 279, width: 76, height: 24 }}
	font={{ font_size: 20, bold: true, align: 'center' }}
>
	Female
</Fragment>

<!-- Step 7: DNA (rib) -->
<Fragment
	step={7}
	layout={{ x: 322, y: 196, width: 130, height: 33 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	DNA (rib)
</Fragment>

<!-- Step 8: Formed 2nd Half -->
<Fragment
	step={8}
	layout={{ x: 322, y: 243, width: 121, height: 61 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	Formed 2nd Half
</Fragment>

<!-- Step 9: 1. Miraculous Births -->
<Fragment
	step={9}
	layout={{ x: 331, y: 328, width: 188, height: 27 }}
	font={{ font_size: 20, bold: true, v_align: 'middle' }}
>
	1. Miraculous "Births"
</Fragment>

<!-- Step 10: 2. Two Become One -->
<Fragment
	step={10}
	layout={{ x: 331, y: 351, width: 155, height: 27 }}
	font={{ font_size: 20, bold: true, v_align: 'middle' }}
>
	2. Two Become One
</Fragment>

<!-- Step 10: Full body image -->
<Fragment
	step={10}
	layout={{ x: 130, y: 48, width: 151, height: 406 }}
>
	<img src="/export/11-Birthrights/image2.png" alt="body" class="slide-image" />
</Fragment>

<!-- Step 10: OneFlesh label -->
<Fragment
	step={10}
	layout={{ x: 95, y: 60, width: 84, height: 64 }}
	font={{ font_size: 29.2, bold: true, align: 'center', v_align: 'middle' }}
>
	OneFlesh
</Fragment>

<!-- Step 10: Mankind label -->
<Fragment
	step={10}
	layout={{ x: 145, y: 129, width: 126, height: 40 }}
	font={{ font_size: 29.2, bold: true, align: 'center', v_align: 'middle' }}
>
	Mankind
</Fragment>

<!-- Step 11: 3. All subsequent births -->
<Fragment
	step={11}
	layout={{ x: 331, y: 371, width: 270, height: 60 }}
	font={{ font_size: 20, bold: true, v_align: 'middle', wrap: true }}
>
	3. All subsequent births follow Birth Pattern
</Fragment>

<!-- Step 12: Spiritual column -->
<Fragment step={12} animate="wipe-down">
	<Rect x={648} y={0} width={234} height={540} fill="var(--bg-level-2)" zIndex={0} />
</Fragment>

<!-- Step 12: 2nd Adam -->
<Fragment
	step={12}
	layout={{ x: 669, y: 17, width: 203, height: 51 }}
	font={{ font_size: 39.2, bold: true }}
>
	2nd Adam
</Fragment>

<!-- Step 12.1: Acts 1:1 link -->
<Fragment
	step={12.1}
	drillTo="birthrights/body-initalized"
	layout={{ x: 554, y: 72, width: 94, height: 32 }}
	font={{ font_size: 23.3, italic: true, v_align: 'middle' }}
>
	Acts 1:1
</Fragment>

<!-- Step 13: Arrow and Jews label -->
<Fragment step={13} animate="wipe">
	<Arrow from={{ x: 534, y: 63 }} to={{ x: 534, y: 63 }} stroke={{ width: 7 }} zIndex={3} />
</Fragment>

<Fragment
	step={13}
	layout={{ x: 573, y: 47, width: 68, height: 29 }}
	font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'right', v_align: 'middle' }}
>
	Jews
</Fragment>

<!-- Step 13.2: Jews label bottom -->
<Fragment
	step={13.2}
	layout={{ x: 672, y: 270, width: 70, height: 29 }}
	font={{ font_size: 20, bold: true }}
>
	Jews
</Fragment>

<!-- Step 13.2: Dust image -->
<Fragment
	step={13.2}
	layout={{ x: 607, y: 421, width: 310, height: 125 }}
>
	<img src="/export/11-Birthrights/image3.png" alt="dust" class="slide-image" />
</Fragment>

<!-- Step 13.2: Body image -->
<Fragment
	step={13.2}
	layout={{ x: 646, y: 217, width: 120, height: 323 }}
>
	<img src="/export/11-Birthrights/image6.png" alt="body" class="slide-image" />
</Fragment>

<!-- Step 14: Arrow and Pentecost -->
<Fragment step={14} animate="wipe">
	<Arrow from={{ x: 494, y: 128 }} to={{ x: 494, y: 128 }} stroke={{ width: 7 }} zIndex={2} />
</Fragment>

<Fragment
	step={14}
	layout={{ x: 522, y: 108, width: 121, height: 31 }}
	font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'right', v_align: 'middle' }}
>
	Pentecost
</Fragment>

<!-- Step 15: Arrow and Living Church -->
<Fragment step={15} animate="wipe">
	<Arrow from={{ x: 516, y: 171 }} to={{ x: 516, y: 171 }} stroke={{ width: 7 }} zIndex={1} />
</Fragment>

<Fragment
	step={15}
	layout={{ x: 540, y: 143, width: 101, height: 48 }}
	font={{ font_size: 20, bold: true, color: '#0000FF', align: 'right', v_align: 'middle' }}
>
	Living Church
</Fragment>

<!-- Step 16: Is the Church Complete? box -->
<Fragment step={16} animate="fade">
	<Rect x={144} y={370} width={125} height={62} fill="var(--bg-light)" zIndex={50} />
</Fragment>

<Fragment
	step={16}
	layout={{ x: 136, y: 375, width: 149, height: 55 }}
	font={{ font_size: 17.5, bold: true, align: 'center', wrap: true }}
	zIndex={51}
>
	Is the Church Complete? Was Adam?
</Fragment>

<!-- Step 17: Arrow and Gentiles -->
<Fragment step={17} animate="wipe">
	<Arrow from={{ x: 477, y: 276 }} to={{ x: 477, y: 276 }} stroke={{ width: 7 }} zIndex={0} />
</Fragment>

<Fragment
	step={17}
	layout={{ x: 525, y: 259, width: 121, height: 27 }}
	font={{ font_size: 26.7, bold: true, color: '#0000FF', align: 'right', v_align: 'middle' }}
>
	Gentiles
</Fragment>

<!-- Step 17: Female body image -->
<Fragment
	step={17}
	layout={{ x: 751, y: 215, width: 122, height: 328 }}
>
	<img src="/export/11-Birthrights/image4.png" alt="female body" class="slide-image" />
</Fragment>

<!-- Step 17: Gentiles label -->
<Fragment
	step={17}
	layout={{ x: 778, y: 271, width: 77, height: 29 }}
	font={{ font_size: 20, bold: true, align: 'center' }}
>
	Gentiles
</Fragment>

<!-- Step 18: Arrow and Peter -->
<Fragment step={18} animate="wipe">
	<Arrow from={{ x: 502, y: 217 }} to={{ x: 502, y: 217 }} stroke={{ width: 7 }} zIndex={4} />
</Fragment>

<Fragment
	step={18}
	drillTo="birthrights/acts-10-24"
	layout={{ x: 554, y: 203, width: 90, height: 18 }}
	font={{ font_size: 26.7, bold: true, italic: true, color: '#0000FF', align: 'right', v_align: 'middle' }}
>
	Peter
</Fragment>

<!-- Step 18.2: Acts 10:24 link -->
<Fragment
	step={18.2}
	drillTo="birthrights/acts-10-24"
	layout={{ x: 530, y: 222, width: 118, height: 29 }}
	font={{ font_size: 23.3, italic: true }}
>
	Acts 10:24
</Fragment>

<!-- Step 19: Ribs image -->
<Fragment
	step={19}
	layout={{ x: 664, y: 251, width: 89, height: 128 }}
>
	<img src="/export/11-Birthrights/image7.png" alt="ribs" class="slide-image" />
</Fragment>

<!-- Step 19: Rib image -->
<Fragment
	step={19}
	layout={{ x: 815, y: 296, width: 55, height: 28 }}
>
	<img src="/export/11-Birthrights/image5.png" alt="rib" class="slide-image" />
</Fragment>

<!-- Step 19.2: Ephesians 2:11 link -->
<Fragment
	step={19.2}
	drillTo="birthrights/ephesians-2-11"
	layout={{ x: 478, y: 282, width: 173, height: 28 }}
	font={{ font_size: 23.3, italic: true, align: 'center' }}
>
	Ephesians 2:11
</Fragment>

<!-- Step 20: Full body image -->
<Fragment
	step={20}
	layout={{ x: 681, y: 60, width: 152, height: 410 }}
>
	<img src="/export/11-Birthrights/image2.png" alt="body" class="slide-image" />
</Fragment>

<!-- Step 20: OneChurch label -->
<Fragment
	step={20}
	layout={{ x: 775, y: 75, width: 112, height: 48 }}
	font={{ font_size: 29.2, bold: true, align: 'center' }}
>
	OneChurch
</Fragment>

<!-- Step 20.2: Body of Christ label -->
<Fragment
	step={20.2}
	layout={{ x: 702, y: 141, width: 110, height: 48 }}
	font={{ font_size: 29.2, bold: true, align: 'center' }}
>
	Body of Christ
</Fragment>

<!-- Step 21: Three arrows pointing back -->
<Fragment step={21} animate="wipe">
	<Arrow from={{ x: 654, y: 343 }} to={{ x: 560, y: 343 }} stroke={{ width: 6 }} zIndex={9} />
</Fragment>

<Fragment step={21.1} animate="wipe">
	<Arrow from={{ x: 654, y: 367 }} to={{ x: 560, y: 367 }} stroke={{ width: 6 }} zIndex={10} />
</Fragment>

<Fragment step={21.2} animate="wipe">
	<Arrow from={{ x: 654, y: 408 }} to={{ x: 560, y: 408 }} stroke={{ width: 6 }} zIndex={11} />
</Fragment>

<!-- Step 22: Physical = Spiritual box -->
<Fragment step={22} animate="fade">
	<Rect x={60} y={426} width={874} height={115} fill="#0000FF" zIndex={52} />
</Fragment>

<Fragment
	step={22}
	layout={{ x: 126, y: 419, width: 735, height: 72 }}
	font={{ font_size: 60, bold: true, color: 'white', align: 'center' }}
	zIndex={53}
>
	Physical = Spiritual
</Fragment>

<!-- Step 22: Explanation text -->
<Fragment
	step={22}
	layout={{ x: 171, y: 491, width: 651, height: 40 }}
	font={{ font_size: 16.7, color: 'white', align: 'center', wrap: true }}
	zIndex={54}
>
	No one receives the spirit like the 1st does… everyone else is born of man and woman or spiritually, the seed of the word planted in the heart and baptized (born again)
</Fragment>
