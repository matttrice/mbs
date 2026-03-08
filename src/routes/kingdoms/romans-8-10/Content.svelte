<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<!-- Slide 19: Romans 8:10-11 content -->
<div class="slide-bg scripture"></div>

<Fragment
	layout={{ x: 102, y: 28, width: 762, height: 180 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="Romans 8:10-11" scale="lg">
		But if Christ is in you, your body is dead because of sin, yet your spirit<br>is alive because of righteousness. <sup>11</sup> And if the Spirit of him who raised <br>Jesus from the dead is living in you, he who raised Christ from the dead <br>will also give life to your mortal bodies through his Spirit,<br>who lives in you.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Explanation box -->
<Fragment
	step={1}
	layout={{ x: 125, y: 230, width: 700, height: 100 }}
	fill="var(--bg-level-3)"
	font={{ wrap: true, bold: true, align: 'center', font_size: 30, color: 'var(--text-ghost)' }}
	line={{ width: 2, color: 'var(--bg-stroke-1)' }}
	zIndex={2}
	animate="fade"
>
	Having died with Christ means you physically remain in the world but your invisible part is alive.
</Fragment>
