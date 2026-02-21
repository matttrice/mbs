<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!-- Slide 19: Romans 8:10-11 content -->
<div class="slide-bg scripture"></div>

<!-- Title: Romans 8:10-11 -->
<Fragment
	layout={{ x: 102, y: 28, width: 756, height: 39 }}
	font={{ align: 'left', font_size: 26.7, bold: true }}
	zIndex={0}
>
	Romans 8:10-11
</Fragment>

<!-- Static scripture text -->
<Fragment
	layout={{ x: 102, y: 60, width: 762, height: 148 }}
	font={{ font_size: 23.3, wrap: true}}
	zIndex={1}
>
	But if Christ is in you, your body is dead because of sin, yet your spiritis alive because of righteousness. 11 And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies through his Spirit,who lives in you.
</Fragment>

<!-- Step 1: Explanation box -->
<Fragment
	step={1}
	layout={{ x: 177, y: 288, width: 613, height: 62 }}
	fill="var(--bg-level-2)"
	font={{ wrap: true, align: 'center', font_size: 23.3 }}
	zIndex={2}
	animate="fade"
>
	Having died with Christ means you physically remain in the world but your invisible part is alive.
</Fragment>
