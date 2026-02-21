<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg scripture"></div>
<ReferenceOverlay src="/export/10-The_Priesthood/Slide18.png" />

<!-- Title -->
<Fragment
	layout={{ x: 92, y: 31, width: 582, height: 44 }}
	font={{ font_size: 33.6, bold: true }}
>
	1 Peter 2:9
</Fragment>

<!-- Scripture content -->
<Fragment
	layout={{ x: 92, y: 68, width: 598, height: 194 }}
	font={{ font_size: 24, v_align: 'middle', wrap: true }}
>
	But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.
</Fragment>

<!-- James 1:12 -->
<Fragment
	layout={{ x: 92, y: 275, width: 676, height: 123 }}
	font={{ font_size: 33.6, bold: true, v_align: 'middle', wrap: true }}
>
	James 1:12<br />Blessed is a man who perseveres under trial; for once he has been approved, he will receive the crown of life which the Lord has promised to those who love Him.
</Fragment>

<!-- Step 1: King Priest box -->
<Fragment
	step={1}
	layout={{ x: 473, y: 56, width: 266, height: 107 }}
	font={{ font_size: 33.6, bold: true, v_align: 'middle', wrap: true, align: 'center' }}
	fill="var(--bg-level-2)"
	line={{ width: 5, color: 'var(--stroke-level-0)' }}
>
	King Priest<br />Priest King
</Fragment>

<!-- Step 2: Dual nature summary -->
<Fragment
	step={2}
	layout={{ x: 149, y: 410, width: 641, height: 86 }}
	font={{ font_size: 28.8, v_align: 'middle', align: 'center' }}
>
	All members born through the Church have a dual nature in the Kingdom
</Fragment>
