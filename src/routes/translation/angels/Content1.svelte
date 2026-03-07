<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Line } from '$lib/components/svg';
</script>

<div class="slide-bg"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 45, y: 17, width: 756, height: 44 }}
	font={{ font_size: 36.7, bold: true }}
	zIndex={1}
>
	Job 38:1-7
</Fragment>

<!-- Static: Scripture text -->
<Fragment
	layout={{ x: 45, y: 61, width: 728, height: 408 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={0}
>
	<ScriptureBlock version="NASB">
		Then the LORD answered Job out of the whirlwind and said,  <br><sup>2</sup> "Who is this that darkens counsel <br>By words without knowledge? <br><sup>3</sup> "Now gird up your loins like a man, <br>And I will ask you, and you instruct Me! <br><sup>4</sup> "Where were you when I laid the foundation of the earth? <br>Tell <em>Me</em>, if you have understanding, <br><sup>5</sup> Who set its measurements? Since you know. <br>Or who stretched the line on it? <br><sup>6</sup> "On what were its bases sunk? <br>Or who laid its cornerstone, <br><sup>7</sup> When the morning stars sang together <br>And all the <strong>sons of God</strong> shouted for joy?
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Context question box -->
<Fragment
	step={1}
	layout={{ x: 614, y: 116, width: 319, height: 99 }}
	font={{ align: 'center', font_size: 26.7, wrap: true }}
	fill="var(--bg-ghost)"
	line={{ color: 'var(--stroke-level-0)' }}
	zIndex={2}
>
	What's the context of <br>this passage?<br><em>"laid the foundation of the earth"</em>
</Fragment>

<!-- Step 2: NIV verse 7 + dashed lines -->
<Fragment
	step={2}
	layout={{ x: 491, y: 360, width: 335, height: 109 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={3}
>
	<ScriptureBlock version="NIV">
		<sup>7</sup> while the morning stars sang <br>together and all the <strong>angels</strong> <br>shouted for joy?
	</ScriptureBlock>
</Fragment>

<Fragment step={2}>
	<Line from={{ x: 470, y: 360 }} to={{ x: 822, y: 360 }} stroke={{ width: 4, dash: '8,4' }} zIndex={4} />
</Fragment>

<Fragment step={2}>
	<Line from={{ x: 479, y: 372 }} to={{ x: 479, y: 481 }} stroke={{ width: 4, dash: '8,4' }} zIndex={5} />
</Fragment>
