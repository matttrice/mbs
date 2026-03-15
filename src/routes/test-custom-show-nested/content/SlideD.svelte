<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static title -->
<Fragment
	layout={{ x: 300, y: 20, width: 360, height: 50 }}
	font={{ font_size: 36, bold: true }}
>
	Slide D Content
</Fragment>

<!-- Step 1 -->
<Fragment
	step={1}
	layout={{ x: 100, y: 150, width: 400, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	D Step 1: Info
</Fragment>

<!-- Step 2: drillTo with returnHere (the key test case) -->
<Fragment
	step={2}
	drillTo="test-custom-show-nested/drill-target"
	returnHere
	layout={{ x: 100, y: 220, width: 400, height: 40 }}
	font={{ font_size: 24, italic: true }}
	animate="fade"
>
	D Step 2: Drill Link
</Fragment>

<!-- Step 3 -->
<Fragment
	step={3}
	layout={{ x: 100, y: 290, width: 400, height: 40 }}
	font={{ font_size: 24 }}
	animate="fade"
>
	D Step 3: After drill
</Fragment>
