<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 105.1, y: 37.4, width: 755.9, height: 44.4 }}
		font={{ font_size: 33.3, bold: true, color: '#000000' }}
	>
		Romans 6:23
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 112.9, y: 90.5, width: 740.8, height: 88.8 }}
		line={{ width: 1 }}
		font={{ font_size: 33.3 }}
		animate="fade"
	>
		For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord
	</Fragment>
</Slide>
