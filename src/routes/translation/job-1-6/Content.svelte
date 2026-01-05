<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title Job 1:6-7 -->
<Fragment
	layout={{ x: 69, y: 8, width: 400, height: 44 }}
	font={{ font_name: 'Arial', bold: true }}
	zIndex={1}
>
	Job 1:6-7
</Fragment>

<!-- Title Job 2:1-2 -->
<Fragment
	layout={{ x: 490, y: 8, width: 400, height: 44 }}
	font={{ font_name: 'Arial', bold: true }}
	zIndex={1}
>
	Job 2:1-2
</Fragment>

<!-- Step 1: Job 1:6-7 content -->
<Fragment
	step={1}
	layout={{ x: 35, y: 65, width: 420, height: 280 }}
	font={{ wrap: true, font_size: 20, v_align: 'top', align: 'left' }}
	zIndex={2}
	animate="fade"
>
	One day the sons of God came to present themselves before the LORD, and Satan also came with them. 7 The LORD said to Satan, "Where have you come from?" Satan answered the LORD, "From roaming through the earth and going back and forth in it."
</Fragment>

<!-- Step 2: Job 2:1-2 content -->
<Fragment
	step={2}
	layout={{ x: 500, y: 65, width: 420, height: 280 }}
	font={{ wrap: true, font_size: 20, v_align: 'top', align: 'left' }}
	zIndex={3}
	animate="fade"
>
	On another day the sons of God came to present themselves before the LORD, and Satan also came with them to present himself before him. 2 And the LORD said to Satan, "Where have you come from?" Satan answered the LORD, "From roaming through the earth and going back and forth in it."
</Fragment>

<!-- Step 3: Question -->
<Fragment
	step={3}
	layout={{ x: 35, y: 360, width: 889, height: 40 }}
	font={{ font_size: 24, bold: true, color: '#0000CC' }}
	zIndex={4}
	animate="fade"
>
	Who are the "sons of God" in this context?
</Fragment>

<!-- Step 4: Answer -->
<Fragment
	step={4}
	layout={{ x: 35, y: 420, width: 889, height: 80 }}
	font={{ font_size: 28, bold: true }}
	zIndex={5}
	animate="fade"
>
	Sons of God = Angels
</Fragment>
