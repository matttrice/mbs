<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Rect } from '$lib/components/svg';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg-ghost"></div>
    <ReferenceOverlay src="/export/08-The_Ark/Slide3.png" />
	<!-- Step 1: Ark image (with step 2 title simultaneously) -->
	<Fragment
		layout={{ x: 60, y: 133, width: 840, height: 273 }}
		animate="fade"
	>
		<img src="/export/08-The_Ark/image1.jpg" alt="Ark" class="slide-image" />
	</Fragment>

	<!-- Step 1: "Ark" title (timing: with) -->
	<Fragment
		layout={{ x: 74, y: 239, width: 199, height: 41 }}
		font={{ font_size: 55, bold: true, color: '#F4F4F4' }}
        zIndex={4}
	>
		Ark
	</Fragment>

	<!-- Step 1.1: Dimensions (timing: after) -->
	<Fragment
		step={1.1}
		layout={{ x: 768, y: 274, width: 76, height: 34 }}
		font={{ font_size: 23.3, bold: true, color: '#F4F4F4', align: 'center', wrap: true }}
	>
		75ft
	</Fragment>

	<Fragment
		step={1.1}
		layout={{ x: 778, y: 201, width: 76, height: 34 }}
		font={{ font_size: 23.3, bold: true, color: '#F4F4F4', align: 'center', wrap: true }}
	>
		45ft
	</Fragment>

	<Fragment
		step={1.1}
		layout={{ x: 731, y: 149, width: 76, height: 34 }}
		font={{ font_size: 23.3, bold: true, color: '#F4F4F4', align: 'center', wrap: true }}
	>
		450ft
	</Fragment>

	<!-- Step 1.2: Door image (timing: after) -->
	<Fragment
		step={1.2}
		layout={{ x: 399, y: 241, width: 129, height: 78 }}
		line={{ width: 2, color: 'var(--color-stroke-darkest)' }}
		animate="fade"
	>
		<img src="/export/08-The_Ark/image2.png" alt="Door" class="slide-image" />
	</Fragment>

	<!-- Step 2: Allegory definition -->
	<Fragment
		step={2}
		layout={{ x: 50, y: 12, width: 300, height: 56 }}
		font={{ font_size: 20, bold: true, align: 'left', wrap: true }}
	>
		Allegory:  true story with spiritual (symbolic) meaning
	</Fragment>

	<!-- Step 3: Pattern of Salvation box (timing: click triggers with elements) -->
	<Fragment step={3} animate="fade">
		<Rect x={43} y={345} width={367} height={200} fill="#F4F4F4" stroke={{ width: 4, color: '#000000' }} zIndex={1} />
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 90, y: 354, width: 273, height: 26 }}
		font={{ font_size: 26.7, color: '#000000', v_align: 'middle' }}
		line={{ width: 1 }}
        zIndex={2}
	>
		Pattern of Salvation:
	</Fragment>

	<!-- Step 4: 1. Judgment -->
	<Fragment
		step={4}
		layout={{ x: 56, y: 383, width: 162, height: 36 }}
		font={{ font_size: 23.3, bold: true, align: 'left', v_align: 'middle' }}
		line={{ width: 1 }}
        zIndex={2}
	>
		1. Judgment:
	</Fragment>

	<!-- Step 5: Death Sentence -->
	<Fragment
		step={5}
		layout={{ x: 209, y: 384, width: 202, height: 34 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'left', v_align: 'middle', wrap: true }}
        zIndex={2}
	>
		Death Sentence
	</Fragment>

	<!-- Step 6: 2. Wrath of God -->
	<Fragment
		step={6}
		layout={{ x: 56, y: 412, width: 199, height: 36 }}
		font={{ font_size: 23.3, bold: true, align: 'left', v_align: 'middle' }}
		line={{ width: 1 }}
        zIndex={2}
	>
		2. Wrath of God:
	</Fragment>

	<!-- Step 7: Flood -->
	<Fragment
		step={7}
		layout={{ x: 244, y: 415, width: 100, height: 30 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'left', v_align: 'middle', wrap: true }}
        zIndex={2}
	>
		Flood
	</Fragment>

	<!-- Step 8: 3. Plan of Salvation -->
	<Fragment
		step={8}
		layout={{ x: 56, y: 442, width: 240, height: 36 }}
		font={{ font_size: 23.3, bold: true, align: 'left', v_align: 'middle' }}
		line={{ width: 1 }}
        zIndex={2}
	>
		3. Plan of Salvation:
	</Fragment>

	<!-- Step 9: 4. Blood -->
	<Fragment
		step={9}
		layout={{ x: 58, y: 472, width: 112, height: 36 }}
		font={{ font_size: 23.3, bold: true, align: 'left', v_align: 'middle' }}
		line={{ width: 1 }}
        zIndex={2}
	>
		4. Blood:
	</Fragment>

	<!-- Step 10: Genesis 6:14 - drillTo ark.tebah -->
	<Fragment
		step={10}
		drillTo="ark/tebah"
		layout={{ x: 410, y: 6, width: 546, height: 36 }}
		font={{ font_size: 26.7, align: 'left' }}
		line={{ width: 1 }}
	>
		"Make an ark, cover inside & out with pitch"
	</Fragment>

	<!-- Step 11: Ark definitions after drill -->
	<Fragment
		step={11}
		layout={{ x: 463, y: 34, width: 373, height: 40 }}
		font={{ font_size: 26.7, italic: true, align: 'left' }}
		line={{ width: 1 }}
	>
		Ark: box, vessel for valuables
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 463, y: 66, width: 377, height: 40 }}
		font={{ font_size: 16.7, italic: true, align: 'left' }}
		line={{ width: 1 }}
	>
		(n) Pitch: tar, price of life, ransom
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 463, y: 98, width: 521, height: 40 }}
		font={{ font_size: 16.7, italic: true, align: 'left' }}
		line={{ width: 1 }}
	>
		(v) Pitch: cover, make atonement, reconcile
	</Fragment>

	<!-- Step 12: Physical question -->
	<Fragment
		step={12}
		layout={{ x: 532, y: 368, width: 376, height: 81 }}
		font={{ font_size: 30, bold: true, align: 'left', wrap: true }}
		line={{ width: 1 }}
        zIndex={2}
	>
		Physically, <i>(literally)</i> what is coating the ark?
	</Fragment>

	<!-- Step 13: Black ark image -->
	<Fragment
		step={13}
		layout={{ x: 60, y: 133, width: 840, height: 273 }}
		animate="fade"
	>
		<img src="/export/08-The_Ark/image3.png" alt="Black Ark" class="slide-image" />
	</Fragment>

	<!-- Step 14: Spiritual question -->
	<Fragment
		step={13}
		layout={{ x: 532, y: 448, width: 376, height: 81 }}
		fill="var(--color-bg-blood)"
		font={{ font_size: 30, bold: true, align: 'left', wrap: true }}
		line={{ width: 1, color: 'var(--color-stroke-darkest)' }}
        zIndex={2}
	>
		Spiritually, (symbolic) What is covering the ark?
	</Fragment>

	<!-- Step 15: Arrow and Pitch label (using connector arrow) -->
    <Fragment
        step={15}
        animate="wipe-left"
    >
        <Arrow to={{ x: 230, y: 489 }} from={{ x: 532, y: 489 }} stroke={{ color: "var(--color-bg-blood)", width: 10 }} />
    </Fragment>
	
    <Fragment
		step={15}
		layout={{ x: 161, y: 473, width: 70, height: 34 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'left', v_align: 'middle' }}
        zIndex={3}
	>
		Pitch
	</Fragment>

	<!-- Step 16: Hebrews 11:7 drillTo -->
	<Fragment
		step={16}
		drillTo="ark/hebrews-11-7"
		layout={{ x: 344, y: 444, width: 163, height: 34 }}
        fill="var(--color-bg-ghost)"
		font={{ font_size: 23.3, bold: true, align: 'center' }}
		line={{ width: 3, color: 'var(--color-stroke-darkest)' }}
        zIndex={5}
	>
		Hebrews 11:7
	</Fragment>

	<!-- Step 17: Ark link -->
	<Fragment
		step={17}
		drillTo="ark/hebrews-11-7"
		layout={{ x: 284, y: 446, width: 71, height: 30 }}
		font={{ font_size: 23.3, bold: true, color: '#0000FF', align: 'left', v_align: 'middle', wrap: true }}
        zIndex={5}
	>
		Ark
	</Fragment>

	<!-- Step 18: 1Peter 3:18-21 drillTo -->
	<Fragment
		step={18}
		drillTo="ark/1-peter-3-20"
		layout={{ x: 100, y: 60, width: 198, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
	>
		1Peter 3:18-21
	</Fragment>

	<!-- Step 19: Ark & Spiritual Salvation correspond -->
	<Fragment
		step={19}
		layout={{ x: 45, y: 91, width: 293, height: 26 }}
		font={{ font_size: 16.7, align: 'center' }}
		line={{ width: 1 }}
	>
		Ark & Spiritual Salvation "correspond" <strong>?</strong>
	</Fragment>

	<Fragment
		step={19}
		layout={{ x: 526, y: 180, width: 279, height: 101 }}
		font={{ font_size: 20, bold: true, color: '#FFFFFF', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		"8 persons were brought safely through the water. Corresponding to that, baptism now saves you."
	</Fragment>

	<!-- Step 20: Genesis 7:11 drillTo -->
	<Fragment
		step={20}
		drillTo="ark/genesis-7-11"
		layout={{ x: 100, y: 114, width: 180, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
	>
		Genesis 7:11
	</Fragment>

	<!-- Step 21: Water arrows (coming from off-screen above and below) -->
	<Fragment step={21} animate="wipe-down">
		<Arrow from={{ x: 396, y: 0 }} to={{ x: 396, y: 172 }} stroke={{ width: 30, color: 'var(--color-level3)' }} zIndex={4} />
	</Fragment>

	<Fragment step={21} animate="wipe-up">
		<Arrow from={{ x: 469, y: 550 }} to={{ x: 469, y: 314 }} stroke={{ width: 30, color: 'var(--color-level3)' }} headSize={3} zIndex={4} />
	</Fragment>

	<!-- Step 21.1: Water labels (timing: after) -->
	<Fragment
		step={21.1}
		layout={{ x: 281, y: 178, width: 178, height: 41 }}
		font={{ font_size: 26.7, bold: true, color: '#F4F4F4', align: 'left' }}
		line={{ width: 1 }}
	>
		Water Above
	</Fragment>

	<Fragment
		step={21.1}
		layout={{ x: 282, y: 290, width: 177, height: 41 }}
		font={{ font_size: 26.7, bold: true, color: '#F4F4F4', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Water Below
	</Fragment>

	<!-- Step 22: Baptism -->
	<Fragment
		step={22}
		layout={{ x: 281, y: 221, width: 274, height: 69 }}
		font={{ font_size: 50, bold: true, color: '#33CCFF', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Baptism
	</Fragment>
</Slide>
