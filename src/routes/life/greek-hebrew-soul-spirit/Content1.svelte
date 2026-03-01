<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<!-- Static: Title -->
<Fragment
	layout={{ x: 102, y: 6, width: 756, height: 44 }}
	font={{ font_size: 44.2, bold: true, italic: true }}
>
	<em>Dividing Soul & Spirit</em>
</Fragment>

<!-- Step 1: Wind, Breath, Life header -->
<Fragment
	step={1}
	layout={{ x: 110, y: 53, width: 203, height: 72 }}
	font={{ align: 'center', font_size: 26.7, wrap: true }}
	zIndex={10}
>
	Wind, <br/>Breath, Life
</Fragment>

<!-- Step 2: Column 1 terms -->
<Fragment
	step={2}
	layout={{ x: 84, y: 133, width: 241, height: 94 }}
	font={{ font_size: 20, wrap: true }}
	zIndex={14}
>
	Ruwach (spirit) Hebrew<br/>Nephesh (soul) Hebrew<br/>Pneuma (spirit) Greek<br/>Psyche (soul)  Greek
</Fragment>

<!-- Step 3: Emotions, Love, Desires header -->
<Fragment
	step={3}
	layout={{ x: 347, y: 53, width: 224, height: 72 }}
	font={{ align: 'center', font_size: 26.7, wrap: true }}
	zIndex={11}
>
	Emotions,<br/> Love, Desires
</Fragment>

<!-- Step 4: Column 2 terms + connector line -->
<Fragment
	step={4}
	layout={{ x: 343, y: 133, width: 241, height: 95 }}
	font={{ font_size: 20, wrap: true }}
	zIndex={15}
>
	Meah (spirit) Hebrew<br/>Nephesh (soul) Hebrew<br/>Psyche (soul) Greek<br/>Pneuma (soul) Greek
</Fragment>

<Fragment step={4} animate="wipe-right">
	<Arrow from={{ x: 328, y: 83 }} to={{ x: 370, y: 83 }} stroke={{ width: 9, color: 'var(--stroke-level-2)' }} zIndex={2} />
</Fragment>
<Fragment step={4} animate="wipe-left">
	<Arrow from={{ x: 330, y: 83 }} to={{ x: 288, y: 83 }} stroke={{ width: 9, color: 'var(--stroke-level-2)' }} zIndex={2} />
</Fragment>
<!-- Step 5: Cognition, Mind, Moral Character header -->
<Fragment
	step={5}
	layout={{ x: 604, y: 53, width: 266, height: 72 }}
	font={{ align: 'center', font_size: 26.7, wrap: true }}
	zIndex={12}
>
	Cognition, Mind,<br/>Moral Character
</Fragment>

<!-- Step 6: Column 3 terms + connector line -->
<Fragment
	step={6}
	layout={{ x: 616, y: 133, width: 241, height: 99 }}
	font={{ font_size: 20, wrap: true }}
	zIndex={13}
>
	Ruwach (spirit) Hebrew<br/>Nephesh (soul) Hebrew<br/>Pneuma (spirit) Greek<br/>Psyche (soul) Greek
</Fragment>

<Fragment step={6} animate="wipe-right">
	<Arrow from={{ x: 580, y: 83 }} to={{ x: 627, y: 83 }} stroke={{ width: 9, color: 'var(--stroke-level-2)' }} zIndex={2} />
</Fragment>
<Fragment step={6} animate="wipe-left">
	<Arrow from={{ x: 600, y: 83 }} to={{ x: 545, y: 83 }} stroke={{ width: 9, color: 'var(--stroke-level-2)' }} zIndex={2} />
</Fragment>

<!-- Step 7: Interchangeability note -->
<Fragment
	step={7}
	layout={{ x: 99, y: 244, width: 766, height: 72 }}
	font={{ align: 'center', font_size: 26.7, wrap: true }}
	zIndex={7}
>
	The Greek and Hebrew terms for <u>soul</u> and <u>spirit</u> are often used interchangeably <strong><u><em>in physical contexts only</em></u></strong>.
</Fragment>

<!-- Step 8: Context: Angels, Demons box -->
<Fragment
	step={8}
	layout={{ x: 158, y: 319, width: 273, height: 81 }}
	fill="var(--bg-level-2)"
	line={{ width: 2, color: 'var(--stroke-level-0)' }}
	font={{ align: 'center', font_size: 20, wrap: true }}
	zIndex={16}
>
	<em><u>Context</u></em>:  Angels, Demons, Evil spirits.<br/>Greek: <em>pneuma</em> (spirit)
</Fragment>

<!-- Step 9: Context: Spirit of God box -->
<Fragment
	step={9}
	layout={{ x: 536, y: 319, width: 237, height: 81 }}
	fill="var(--bg-level-2)"
	line={{ width: 2, color: 'var(--stroke-level-0)' }}
	font={{ align: 'center', font_size: 20, wrap: true }}
	zIndex={17}
>
	<em><u>Context</u></em>: Spirit of God.<br/>Hebrew: <em>ruach</em> (spirit)<br/>Greek: <em>pneuma</em> (spirit)
</Fragment>

<!-- Step 10: Eternal life principle -->
<Fragment
	step={10}
	layout={{ x: 96, y: 394, width: 783, height: 105 }}
	font={{ font_size: 26.7, wrap: true }}
	zIndex={8}
>
	In scripture the word <u><em>psyche</em> (soul)</u> is used invariably in the <strong><u>context of eternal life</u></strong>. The words that refer to spirit are never mentioned in the context of everlasting life.
</Fragment>

<!-- Step 11: Link to biblical examples -->
<Fragment
	step={11}
	layout={{ x: 499, y: 498, width: 401, height: 34 }}
	font={{ font_size: 21.7 }}
	zIndex={18}
>
	Biblical examples of Psyche (Soul) →
</Fragment>
