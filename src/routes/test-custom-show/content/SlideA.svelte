<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!--
	Slide content component - contains the actual content without the Slide wrapper.
	Can be used:
	1. Standalone: wrapped by +page.svelte in <Slide>
	2. In CustomShowProvider: aggregated with other slide content
-->

<div class="slide-bg"></div>

<!-- Static title -->
<Fragment
	layout={{ x: 300, y: 20, width: 360, height: 50 }}
	font={{ font_size: 36, bold: true }}
>
	Slide A Content
</Fragment>

<!-- Step 1 -->
<Fragment
	step={1}
	layout={{ x: 100, y: 150, width: 300, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	Step 1: First item
</Fragment>

<!-- Step 2 -->
<Fragment
	step={2}
	layout={{ x: 100, y: 220, width: 300, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	Step 2: Second item
</Fragment>

<!-- Step 3 -->
<Fragment
	step={3}
	layout={{ x: 100, y: 290, width: 300, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	Step 3: Third item
</Fragment>
