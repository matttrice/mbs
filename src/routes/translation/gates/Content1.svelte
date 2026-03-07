<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Line, Ellipse } from '$lib/components/svg';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture text -->
<Fragment
	layout={{ x: 49, y: 40, width: 890, height: 216 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="John 10:1-6">
		"I tell you the truth, the man who does not enter the sheep pen by the gate, but climbs in by some other way, is a thief and a robber. <sup>2</sup> The man who enters by the gate is the shepherd of his sheep. <sup>3</sup> The watchman opens the gate for him, and the sheep listen to his voice. He calls his own sheep by name and leads them out. <sup>4</sup> When he has brought out all his own, he goes on ahead of them, and his sheep follow him because they know his voice. <sup>5</sup> But they will never follow a stranger; in fact, they will run away from him because they do not recognize a stranger's voice." <sup>6</sup> Jesus used this figure of speech, but they did not understand what he was telling them."
	</ScriptureBlock>
</Fragment>

<Fragment
	step={1}
	layout={{ x: 170, y: 282, width: 188, height: 42 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={7}
>
	<strong>Shepherd: </strong>
</Fragment>

<Fragment step={1}>
	<Line from={{ x: 164, y: 331 }} to={{ x: 778, y: 331 }} stroke={{ width: 4 }} zIndex={13} />
</Fragment>

<!-- Step 1: Vertical line -->
<Fragment step={1}>
	<Line from={{ x: 491, y: 296 }} to={{ x: 491, y: 399 }} stroke={{ width: 4 }} zIndex={14} />
</Fragment>

<Fragment
	step={1}
	layout={{ x: 529, y: 286, width: 111, height: 38 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={4}
>
	<strong>Thief: </strong>
</Fragment>

<!-- Step 2: Top horizontal line -->
<Fragment step={2} animate="draw">
	<Line from={{ x: 164, y: 127 }} to={{ x: 338, y: 127 }} stroke={{ width: 3 }} zIndex={17} />
</Fragment>

<!-- Step 3: "Satan" -->
<Fragment
	step={3}
	layout={{ x: 631, y: 287, width: 120, height: 38 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={10}
>
	<strong>Satan</strong>
</Fragment>

<!-- Step 4: Blue horizontal line -->
<Fragment step={4} animate="draw">
	<Line from={{ x: 660, y: 128 }} to={{ x: 894, y: 128 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={18} />
</Fragment>

<!-- Step 5: "Christ" -->
<Fragment
	step={5}
	layout={{ x: 347, y: 284, width: 111, height: 41 }}
	font={{ font_size: 33.3, bold: true, wrap: true, color: 'var(--text-level-3)' }}
	zIndex={9}
>
	<strong>Christ</strong>
</Fragment>

<!-- Step 6: "Gates:" -->
<Fragment
	step={6}
	layout={{ x: 61, y: 362, width: 138, height: 46 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={5}
>
	<strong>Gates:</strong>
</Fragment>

<!-- Step 7: "Watchman opens gate" -->
<Fragment
	step={7}
	layout={{ x: 197, y: 331, width: 271, height: 34 }}
	font={{ font_size: 23.3, bold: true, wrap: true, color: 'var(--text-level-3)' }}
	zIndex={8}
>
	Watchman opens gate
</Fragment>

<!-- Step 8: "Some other way" -->
<Fragment
	step={8}
	layout={{ x: 534, y: 331, width: 202, height: 34 }}
	font={{ font_size: 23.3, bold: true, wrap: true }}
	zIndex={6}
>
	Some other way
</Fragment>

<!-- Step 9: "Mary" -->
<Fragment
	step={9}
	layout={{ x: 261, y: 364, width: 118, height: 42 }}
	font={{ font_size: 30, bold: true, wrap: true }}
	zIndex={11}
>
	<strong>Mary</strong>
</Fragment>

<!-- Step 10: "Incarnation" -->
<Fragment
	step={10}
	animate="fly-down"
	layout={{ x: 541, y: 364, width: 190, height: 42 }}
	font={{ font_size: 30, bold: true, wrap: true }}
	zIndex={12}
>
	<strong>Incarnation</strong>
</Fragment>

<!-- Step 11: "Sheep pen:" -->
<Fragment
	step={11}
	layout={{ x: 224, y: 428, width: 193, height: 46 }}
	font={{ font_size: 33.3, bold: true }}
	zIndex={3}
>
	<strong>Sheep pen:</strong>
</Fragment>

<!-- Step 12: Green oval -->
<Fragment step={12}>
	<Ellipse cx={490.5} cy={454.5} rx={64.5} ry={56.5} fill="var(--bg-earth)" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={15} />
</Fragment>

<!-- Step 12: "Earth" -->
<Fragment
	step={12}
	layout={{ x: 446, y: 431, width: 89, height: 42 }}
	font={{ font_size: 30, bold: true, align: 'center', v_align: 'middle' }}
	zIndex={16}
>
	<strong>Earth</strong>
</Fragment>
