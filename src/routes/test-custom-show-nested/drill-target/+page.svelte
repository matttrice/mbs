<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static title -->
	<Fragment
		layout={{ x: 250, y: 20, width: 460, height: 50 }}
		font={{ font_size: 36, bold: true }}
	>
		Drill Target Content
	</Fragment>

	<!-- Step 1 -->
	<Fragment
		step={1}
		layout={{ x: 100, y: 150, width: 400, height: 40 }}
		font={{ font_size: 24 }}
		animate="fade"
	>
		Drill Step 1: Scripture text
	</Fragment>
</Slide>
