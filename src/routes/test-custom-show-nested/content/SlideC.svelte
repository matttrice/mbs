<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static title -->
<Fragment
	layout={{ x: 300, y: 20, width: 360, height: 50 }}
	font={{ font_size: 36, bold: true }}
>
	Slide C Content
</Fragment>

<!-- Step 1 -->
<Fragment
	step={1}
	layout={{ x: 100, y: 150, width: 300, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	C Step 1: First item
</Fragment>

<!-- Step 2 -->
<Fragment
	step={2}
	layout={{ x: 100, y: 220, width: 300, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	C Step 2: Second item
</Fragment>
