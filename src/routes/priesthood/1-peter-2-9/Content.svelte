<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: 1 Peter 2:9 scripture -->
<Fragment
	layout={{ x: 92, y: 68, width: 598, height: 194 }}
	font={{ v_align: 'middle', wrap: true, font_size: 24 }}
	zIndex={1}
>
    <ScriptureBlock title="1 Peter 2:9">
	But you are a chosen people, <br/>a <strong><u>royal</u> <u>priesthood</u></strong>, <br/>a <strong><u>holy</u> <u>nation</u></strong>, <br/>God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.
	</ScriptureBlock>
</Fragment>

<!-- Static: James 1:12 scripture -->
<Fragment
	layout={{ x: 92, y: 275, width: 676, height: 123 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={8}
>
	<ScriptureBlock>
		<strong>James 1:12</strong><br/>Blessed is a man who perseveres under trial; for once he has been approved, he will receive the <strong>crown of life </strong>which the Lord has promised to those who love Him.<br/>
	</ScriptureBlock>
</Fragment>

<!-- Step 1: King Priest / Priest King (click) -->
<Fragment
	step={1}
	layout={{ x: 472, y: 56, width: 266, height: 107 }}
	fill="var(--bg-level-2)"
	line={{ width: 5, color: 'var(--stroke-level-0)' }}
	font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 43, bold: true }}
	zIndex={3}
>
	<strong>King Priest</strong><br/><strong>Priest King</strong>
</Fragment>

<!-- Step 2: Dual nature commentary (click) -->
<Fragment
	step={2}
	layout={{ x: 148, y: 410, width: 640, height: 86 }}
	font={{ v_align: 'middle', align: 'center', font_size: 28.8, wrap: true }}
	zIndex={7}
>
	All members born through the Church <br/>have a dual nature in the Kingdom
</Fragment>
