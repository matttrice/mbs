<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title -->
<Fragment
	layout={{ x: 69, y: 8, width: 822, height: 44 }}
	font={{ font_name: 'Arial', bold: true }}
	zIndex={1}
>
	Job 38:1, 4-7
</Fragment>

<!-- Step 1: Scripture content -->
<Fragment
	step={1}
	layout={{ x: 35, y: 75, width: 889, height: 246 }}
	font={{ wrap: true, font_size: 23.3, v_align: 'top', align: 'left' }}
	zIndex={2}
	animate="fade"
>
	Then the LORD answered Job out of the storm. He said: 4 "Where were you when I laid the earth's foundation? Tell me, if you understand. 5 Who marked off its dimensions? Surely you know! Who stretched a measuring line across it? 6 On what were its footings set, or who laid its cornerstone—7 while the morning stars sang together and all the sons of God shouted for joy?
</Fragment>

<!-- Step 2: Question about context -->
<Fragment
	step={2}
	layout={{ x: 35, y: 360, width: 889, height: 40 }}
	font={{ font_size: 24, bold: true, color: '#0000CC' }}
	zIndex={3}
	animate="fade"
>
	What is the context being described?
</Fragment>

<!-- Step 3: Answer - Creation -->
<Fragment
	step={3}
	layout={{ x: 35, y: 420, width: 889, height: 40 }}
	font={{ font_size: 28, bold: true }}
	zIndex={4}
	animate="fade"
>
	Creation of the Universe
</Fragment>
