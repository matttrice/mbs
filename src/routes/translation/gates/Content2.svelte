<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Line, Ellipse } from '$lib/components/svg';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture text -->
<Fragment
	layout={{ x: 61, y: 60, width: 850, height: 148 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="John 10:7-10...">
		"Therefore Jesus said again, "I tell you the truth, I am the gate for the sheep. <sup>8</sup> All who ever came before me were thieves and robbers, but the sheep did not listen to them. <sup>9</sup> I am the gate; whoever enters through me will be saved. He will come in and go out, and find pasture. <sup>10</sup> The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: "Shepherd:" -->
<Fragment
	step={1}
	layout={{ x: 178, y: 212, width: 188, height: 42 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={10}
>
	<strong>Shepherd: </strong>
</Fragment>

<Fragment
	step={1}
	animate="fly-down"
>
	<Line from={{ x: 487, y: 112 }} to={{ x: 726, y: 112 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={0} />
</Fragment>

<!-- Step 1: Horizontal line -->
<Fragment step={1}>
	<Line from={{ x: 172, y: 261 }} to={{ x: 786, y: 261 }} stroke={{ width: 4 }} zIndex={16} />
</Fragment>

<!-- Step 1: Vertical line -->
<Fragment step={1}>
	<Line from={{ x: 499, y: 226 }} to={{ x: 499, y: 414 }} stroke={{ width: 4 }} zIndex={17} />
</Fragment>

<!-- Step 1: "Thief:" -->
<Fragment
	step={1}
	layout={{ x: 538, y: 214, width: 111, height: 38 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={7}
>
	<strong>Thief: </strong>
</Fragment>

<!-- Step 1: "Satan" -->
<Fragment
	step={1}
	layout={{ x: 640, y: 216, width: 120, height: 38 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={13}
>
	<strong>Satan</strong>
</Fragment>

<!-- Step 1: "Christ" -->
<Fragment
	step={1}
	layout={{ x: 356, y: 213, width: 111, height: 41 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={12}
>
	<strong>Christ</strong>
</Fragment>

<!-- Step 1: "Sheep pen:" -->
<Fragment
	step={1}
	layout={{ x: 54, y: 354, width: 193, height: 46 }}
	font={{ font_size: 33.3, bold: true }}
	zIndex={6}
>
	<strong>Sheep pen:</strong>
</Fragment>

<!-- Step 1: "Gates:" -->
<Fragment
	step={1}
	layout={{ x: 69, y: 292, width: 138, height: 46 }}
	font={{ font_size: 33.3, bold: true, wrap: true }}
	zIndex={8}
>
	<strong>Gates:</strong>
</Fragment>

<!-- Step 2: Verse 7 text -->
<Fragment
	step={2}
	layout={{ x: 54, y: 438, width: 622, height: 26 }}
	font={{ font_size: 16.7, wrap: true }}
	zIndex={2}
>
	<em>Verse 7</em>: Jesus <em>becomes</em> the gate of <strong style="color: var(--text-level-2)">Spiritual Life</strong>.
</Fragment>

<!-- Step 2: "I am the Gate" -->
<Fragment
	step={2}
	layout={{ x: 205, y: 259, width: 271, height: 34 }}
	font={{ font_size: 23.3, bold: true, align: 'center', wrap: true }}
	zIndex={11}
>
	I am the Gate
</Fragment>

<Fragment
	step={2}
	layout={{ x: 282, y: 288, width: 118, height: 42 }}
	font={{ font_size: 30, bold: true, wrap: true }}
	zIndex={14}
>
	<strong>Christ</strong>
</Fragment>

<!-- Step 2: Blue oval (Spirit Born) -->
<Fragment step={3}>
	<Ellipse cx={333} cy={383} rx={59} ry={51} fill="var(--bg-level-2)" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={18} />
</Fragment>

<!-- Step 2: "Spirit Born" text -->
<Fragment
	step={3}
	layout={{ x: 285, y: 342, width: 98, height: 79 }}
	font={{ font_size: 30, bold: true, wrap: true, align: 'center', v_align: 'middle' }}
	zIndex={19}
>
	<strong>Spirit </strong><br><strong>Born</strong>
</Fragment>

<Fragment
	step={4}
	animate="fly-down"
>
	<Line from={{ x: 64, y: 183 }} to={{ x: 450, y: 183 }} stroke={{ width: 2}} zIndex={18} />
</Fragment>

<Fragment
	step={4}
	layout={{ x: 542, y: 259, width: 224, height: 34 }}
	font={{ font_size: 23.3, bold: true, wrap: true }}
	zIndex={9}
>
	Steal Kill Destroy
</Fragment>

<Fragment
	step={5}
	layout={{ x: 560, y: 290, width: 190, height: 42 }}
	font={{ font_size: 30, bold: true, wrap: true }}
	zIndex={15}
>
	<strong>Deceived</strong>
</Fragment>

<Fragment
	step={5}
	layout={{ x: 54, y: 460, width: 920, height: 46 }}
	font={{ font_size: 16.7, wrap: true }}
	zIndex={3}
>
	<em>Verse 8</em>: Who came before him? Many angelic defectors + false prophets deceiving many.<br> 
	&nbsp;&nbsp;&nbsp; The defectors are locked up but <u>the gate of deception</u> remains wide open.
</Fragment>

<!-- Step 4: Gray oval (Earth Born) -->
<Fragment step={6}>
	<Ellipse cx={636} cy={379} rx={59} ry={51} fill="var(--bg-level-1)" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={20} />
</Fragment>

<!-- Step 4: "Earth Born" text -->
<Fragment
	step={6}
	layout={{ x: 587, y: 341, width: 98, height: 79 }}
	font={{ font_size: 30, bold: true, wrap: true, align: 'center', v_align: 'middle' }}
	zIndex={21}
>
	<strong>Earth </strong><br><strong>Born</strong>
</Fragment>

<!-- Step 5: Verse 9-10 text -->
<Fragment
	step={7}
	layout={{ x: 54, y: 500, width: 565, height: 26 }}
	font={{ font_size: 16.7, wrap: true }}
	zIndex={4}
>
	<em>Verse 9-10</em>: "<strong style="color: var(--text-level-3)"><em>I am the gate; whoever enters through me will be saved.</em></strong>"
</Fragment>
