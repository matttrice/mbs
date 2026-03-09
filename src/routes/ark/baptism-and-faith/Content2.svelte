<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow } from '$lib/components/svg';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import Arc from '$lib/components/svg/Arc.svelte';
</script>

<div class="slide-bg"></div>
<ReferenceOverlay src="/export/08-The_Ark/Slide9.png" />
<!-- Static: Scripture (consolidated title + body) -->
<Fragment
	layout={{ x: 42, y: 19, width: 864, height: 127 }}
	font={{ v_align: 'middle', align: 'left', wrap: true }}
	line={{ width: 1 }}
>
	<ScriptureBlock title="Ephesians 2:8-9">
		For by <strong style="color:var(--text-level-3)">grace</strong> you have been <strong style="color:var(--text-level-3)">saved through faith</strong>; and that not of yourselves, it is the <strong style="color:var(--text-level-3)">gift of God</strong>; <sup>9</sup> not as a result of works, so that no one may boast.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Is Baptism a "work"? (timing: click) -->
<Fragment
	step={1}
	layout={{ x: 100, y: 203, width: 372, height: 38 }}
	fill="var(--bg-ghost)"
	font={{ font_size: 26.7, bold: true, align: 'center', wrap: true }}
>
	Is Baptism a "work"?
</Fragment>

<!-- Step 2: Romans 6:22-23 scripture (timing: click) -->
<Fragment
	step={2}
	layout={{ x: 42, y: 356, width: 864, height: 169 }}
	font={{ v_align: 'middle', align: 'left', wrap: true }}
	line={{ width: 1 }}
>
	<ScriptureBlock title="Romans 6:22-23">
		<strong style="color:var(--text-level-3)"><u>But now</u> having been freed from sin</strong> and enslaved to God, you derive your benefit, resulting in sanctification, and the <strong style="color:var(--text-level-3)">outcome, eternal life</strong>.<sup>23</sup> For the wages of sin is death, but the <strong style="color:var(--text-level-3)">free gift of God</strong> is <strong style="color:var(--text-level-3)">eternal life</strong> in Christ Jesus our Lord.
	</ScriptureBlock>
</Fragment>

<!-- Step 3: First arrow (timing: click) -->
<Fragment step={3} animate="wipe-up">
	<Arc from={{ x: 857, y: 442 }} to={{ x: 828, y: 101 }} curve={50} stroke={{ width: 5, color: 'var(--bg-level-3)' }} arrow />	
</Fragment>

<!-- Step 4: Second arrow (timing: click) -->
<Fragment step={4} animate="wipe-down">
	<Arc from={{ x: 354, y: 94 }} to={{ x: 420, y: 440 }} curve={-100} stroke={{ width: 5, color: 'var(--bg-level-3)' }} arrow />
</Fragment>

<!-- Step 5: 1Peter 3:20-21 scripture (timing: click) -->
<Fragment
	step={5}
	layout={{ x: 42, y: 146, width: 864, height: 203 }}
	fill="var(--bg-ghost)"
	font={{ align: 'center', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="1Peter 3:20-21" scale="lg">
		Corresponding to that, <strong style="color:var(--text-level-3)">baptism now saves you</strong>--not the removal of dirt from <br>the flesh, but an appeal to God for a good conscience --through the resurrection<br> of Jesus Christ.
	</ScriptureBlock>
</Fragment>

<!-- Step 6: "baptism now saves you" highlight (timing: click) -->
<Fragment
	step={6}
	layout={{ x: 308, y: 223, width: 270, height: 28 }}
	fill="var(--bg-ghost)"
	font={{ font_size: 23.3, bold: true, color: 'var(--text-level-3)', v_align: 'middle', align: 'center' }}
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
	zIndex={25}
>
	<strong>baptism now saves you</strong>
</Fragment>

<!-- Step 6: Multiple arrows pointing to key text (timing: with) -->
<Fragment step={6} animate="wipe-up">
	<Arrow from={{ x: 576, y: 235 }} to={{ x: 786, y: 102 }} stroke={{ width: 5, color: 'var(--stroke-level-3)' }} zIndex={3} />
</Fragment>

<Fragment step={6} animate="wipe-down">
	<Arrow from={{ x: 574, y: 238 }} to={{ x: 826, y: 446 }} stroke={{ width: 5, color: 'var(--stroke-level-3)' }} zIndex={4} />
</Fragment>

<Fragment step={6} animate="wipe-down">
	<Arrow from={{ x: 358, y: 249 }} to={{ x: 287, y: 418 }} stroke={{ width: 5, color: 'var(--stroke-level-3)' }} zIndex={5} />
</Fragment>

<Fragment step={6} animate="wipe-up">
	<Arrow from={{ x: 490, y: 230 }} to={{ x: 479, y: 96 }} stroke={{ width: 5, color: 'var(--stroke-level-3)' }} zIndex={6} />
</Fragment>
