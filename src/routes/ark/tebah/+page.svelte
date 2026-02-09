<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/08-The_Ark/Slide7.png" />
	<!-- Static: Genesis 6:14 quote -->
	<Fragment
		layout={{ x: 53, y: 189, width: 819, height: 54 }}
		fill="var(--color-level1)"
		font={{ font_size: 20, align: 'center', wrap: true }}
		line={{ width: 2, color: 'var(--color-stroke-dark)' }}
	>
		"Make for yourself an *ark of gopher wood; you shall make the <strong>ark</strong> with rooms, and shall <strong>*cover it inside and out with *pitch</strong>.
	</Fragment>

	<!-- Step 1: *Ark = Tebah title (timing: with = step 1) -->
	<Fragment
		step={1}
		layout={{ x: 86, y: 8, width: 319, height: 40 }}
		font={{ font_size: 26.7, bold: true, color: '#000000', v_align: 'bottom', align: 'left' }}
	>
		*Ark = Tebah
	</Fragment>

	<!-- Step 1: Definition 1 (timing: with) -->
	<Fragment
		step={1}
		layout={{ x: 106, y: 39, width: 259, height: 30 }}
		font={{ font_size: 20, color: '#000000', align: 'left', wrap: true }}
	>
		1. A vessel, a box or chest.
	</Fragment>

	<!-- Step 2: Definition 2 - Coffer (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 106, y: 61, width: 298, height: 30 }}
		font={{ font_size: 20, color: '#0000FF', align: 'left', wrap: true }}
	>
		2. Coffer - box for valuables
	</Fragment>

	<!-- Step 3: Treasured Possession drillTo (timing: click) -->
	<Fragment
		step={3}
		drillTo="ark/exodus-19-5"
		returnHere
		layout={{ x: 94, y: 91, width: 311, height: 36 }}
		font={{ font_size: 16.7, align: 'left', wrap: true }}
	>
		Treasured Possession: Exodus 19:5, Exodus 25:10 Malachi. 3:17, 1 Peter 2:9
	</Fragment>

	<!-- Step 4: Moses - Exodus 2:1-6 drillTo (timing: click) -->
	<Fragment
		step={4}
		drillTo="ark/exodus-2-1"
		returnHere
		layout={{ x: 94, y: 131, width: 185, height: 21 }}
		font={{ font_size: 16.7, italic: true, align: 'left'}}
	>
		(Moses - Exodus 2:1-6)
	</Fragment>

	<!-- Step 5: *Pitch = Kopher (n) (timing: click) -->
	<Fragment
		step={5}
		layout={{ x: 469, y: 11, width: 319, height: 34 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
	>
		*Pitch = Kopher (n)
	</Fragment>

	<!-- Step 5: 1. A cover (timing: with) -->
	<Fragment
		step={5}
		layout={{ x: 498, y: 39, width: 296, height: 30 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
	>
		1. A cover, (tar) bitumen.
	</Fragment>

	<!-- Step 6: *Cover = Kaphar (v) (timing: click) -->
	<Fragment
		step={6}
		layout={{ x: 469, y: 83, width: 332, height: 40 }}
		font={{ font_size: 26.7, bold: true, color: '#000000', align: 'left' }}
		line={{ width: 1 }}
	>
		*Cover = Kaphar (v)
	</Fragment>

	<!-- Step 6: 1. To cover (timing: with) -->
	<Fragment
		step={6}
		layout={{ x: 498, y: 112, width: 134, height: 30 }}
		font={{ font_size: 20, color: '#000000', align: 'left', wrap: true }}
	>
		1. To cover
	</Fragment>

	<!-- Step 7: 2. The price of life, ransom, bribe (timing: click) -->
	<Fragment
		step={7}
		layout={{ x: 502, y: 64, width: 313, height: 26 }}
		font={{ font_size: 20, color: '#0000FF', align: 'left' }}
	>
		2. The price of life, ransom, bribe
	</Fragment>

	<!-- Step 8: 2. Purge, make an atonement... (timing: click) -->
	<Fragment
		step={8}
		layout={{ x: 498, y: 132, width: 456, height: 48 }}
		font={{ font_size: 20, color: '#0000FF', align: 'left', wrap: true }}
	>
		2. Purge, make an atonement, make propitiation, reconciliation, cover over with pitch
	</Fragment>

	<!-- Step 9: Leviticus 17:11, 16:15 drillTo (timing: click) -->
	<Fragment
		step={9}
		drillTo="ark/leviticus-17-11"
		returnHere
		layout={{ x: 807, y: 27, width: 126, height: 44 }}
		font={{ font_size: 20, bold: true, align: 'center', wrap: true }}
	>
		Leviticus 17:11, 16:15
	</Fragment>

	<!-- Step 9: Left brace shape (timing: with) - using line approximation -->
	<Fragment step={9} animate="fade">
		<Line from={{ x: 799, y: 19 }} to={{ x: 799, y: 129 }} stroke={{ width: 6, color: 'var(--color-stroke-dark)' }} />
		<Line from={{ x: 779, y: 19 }} to={{ x: 799, y: 22 }} stroke={{ width: 6, color: 'var(--color-stroke-dark)' }} />
		<Line from={{ x: 779, y: 130 }} to={{ x: 799, y: 126 }} stroke={{ width: 6, color: 'var(--color-stroke-dark)' }} />
		<Line from={{ x: 800, y: 64 }} to={{ x: 810, y: 64 }} stroke={{ width: 6, color: 'var(--color-stroke-dark)' }} />

	</Fragment>

	<!-- Step 10: Life of flesh is in the blood (timing: click) -->
	<Fragment
		step={10}
		layout={{ x: 807, y: 82, width: 131, height: 46 }}
		font={{ font_size: 16.7, italic: true, align: 'center', wrap: true }}
	>
		Life of flesh is in the blood
	</Fragment>

	<!-- Step 11: Romans 3:24 scripture (timing: click) -->
	<Fragment
		step={11}
		layout={{ x: 40, y: 250, width: 100, height: 20 }}
		font={{ font_size: 25, align: 'left', bold: true}}
	>
		Romans 3:24
	</Fragment>
	<Fragment
		step={11}
		layout={{ x: 36, y: 260, width: 500, height: 224 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
	>
		…and all are justified freely by his grace through the redemption that came by Christ Jesus. <sup>25</sup> God presented Christ as a sacrifice of *atonement, through the shedding of his blood—to be received by faith. He did this to demonstrate his righteousness, because in his forbearance he had left the sins committed beforehand unpunished. <br/>(NIV)[*propitiation NASB, KJV = atone, appease]
	</Fragment>

	<!-- Step 12: Red underlines and Atonement/kaphar labels (timing: click with arrows) -->
	<Fragment step={12} animate="draw">
		<Line from={{ x: 760, y: 157 }} to={{ x: 585, y: 157 }} stroke={{ width: 4, color: '#C00000' }} zIndex={2} />
	</Fragment>

	<Fragment step={12} animate="wipe-down">
		<Arrow from={{ x: 168, y: 179 }} to={{ x: 168, y: 331 }} stroke={{ width: 3, color: 'var(--color-stroke-dark)' }} />
	</Fragment>

	<Fragment step={12} animate="draw">
		<Line from={{ x: 910, y: 127 }} to={{ x: 838, y: 127 }} stroke={{ width: 4, color: '#C00000' }} zIndex={2} />
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 124, y: 144, width: 233, height: 46 }}
		font={{ font_size: 30.8, bold: true, color: '#CC0000' }}
		line={{ width: 1 }}
	>
		Atonement  =
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 324, y: 144, width: 173, height: 46 }}
		font={{ font_size: 30.8, bold: true }}
		line={{ width: 1 }}
	>
		kaphar =
	</Fragment>

	<!-- Step 13: Blood = arrow (timing: click) -->
	<Fragment step={13} animate="wipe-down">
		<Arrow from={{ x: 408, y: 97 }} to={{ x: 258, y: 351 }} stroke={{ width: 3, color: 'var(--color-stroke-dark)' }} />
	</Fragment>

	<Fragment
		step={13}
		layout={{ x: 371, y: 57, width: 152, height: 46 }}
		font={{ font_size: 30.8, bold: true, color: '#CC0000', align: 'left' }}
		line={{ width: 1 }}
	>
		blood =
	</Fragment>

	<!-- Step 13.1: Red underline (timing: after) -->
	<Fragment step={13.1} animate="draw">
		<Line from={{ x: 665, y: 90 }} to={{ x: 527, y: 90 }} stroke={{ width: 4, color: '#C00000' }} zIndex={2} />
	</Fragment>

	<!-- Step 14: 1 John 2:2 (timing: click) -->
	<Fragment
		step={14}
		layout={{ x: 521, y: 243, width: 416, height: 89 }}
		font={{ font_size: 23, align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<strong>1 John 2:2</strong> He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.
	</Fragment>

	<!-- Step 15: 1 John 1:7 (timing: click) -->
	<Fragment
		step={15}
		layout={{ x: 60, y: 478, width: 835, height: 52 }}
		font={{ font_size: 23, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<strong>1 John1:7</strong>...but if we walk in the Light as He Himself is in the Light, we have fellowship with one another, and the blood of Jesus His Son cleanses us from all sin.
	</Fragment>

	<!-- Step 16: Propitiation question (timing: click) -->
	<Fragment
		step={16}
		layout={{ x: 524, y: 331, width: 350, height: 69 }}
		font={{ font_size: 21.7, bold: true, color: 'var(--color-level3)', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Propitiation (atoning sacrifice) of sin is accomplished how?
	</Fragment>

	<!-- Step 17: CHRIST arrow BLOOD (timing: click) -->
	<Fragment
		step={17}
		layout={{ x: 511, y: 386, width: 148, height: 50 }}
		font={{ font_size: 35, bold: true, align: 'left' }}
		line={{ width: 1 }}
	>
		CHRIST
	</Fragment>

	<Fragment step={17} animate="wipe">
		<Arrow from={{ x: 645, y: 410 }} to={{ x: 722, y: 410 }} stroke={{ width: 8, color: '#000000' }} zIndex={5} />
	</Fragment>

	<!-- Step 17.1: BLOOD and kaphar equation (timing: after) -->
	<Fragment
		step={17.1}
		layout={{ x: 733, y: 385, width: 144, height: 51 }}
		font={{ font_size: 35, bold: true, color: '#CC0000', align: 'left' }}
		line={{ width: 1 }}
	>
		BLOOD
	</Fragment>

	<Fragment
		step={17.1}
		layout={{ x: 484, y: 427, width: 431, height: 40 }}
		font={{ font_size: 26.7, bold: true, italic: true, align: 'left' }}
		line={{ width: 1 }}
	>
		kaphar = cover = kopher = blood
	</Fragment>

	<Fragment step={17.1} animate="wipe-down">
		<Arrow from={{ x: 573, y: 92 }} to={{ x: 733, y: 393 }} stroke={{ width: 3, color: 'var(--color-stroke-dark)' }} zIndex={6} />
	</Fragment>
</Slide>
