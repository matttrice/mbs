<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!--
	Slide content component B - second slide in the custom show
-->

<div class="slide-bg"></div>

<!-- Static title -->
<Fragment
	layout={{ x: 300, y: 20, width: 360, height: 50 }}
	font={{ font_size: 36, bold: true, color: '#0000CC' }}
>
	Slide B Content
</Fragment>

<!-- Step 1 -->
<Fragment
	step={1}
	layout={{ x: 100, y: 150, width: 400, height: 40 }}
	font={{ font_size: 24 }}
	animate="fly-left"
>
	B Step 1: Different content
</Fragment>

<!-- Step 2 -->
<Fragment
	step={2}
	layout={{ x: 100, y: 220, width: 400, height: 40 }}
	font={{ font_size: 24 }}
	animate="fly-left"
>
	B Step 2: More content
</Fragment>
