<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 9.0, width: 756.1, height: 44.4 }}
		font={{ font_size: 33.3, bold: true }}
	>
		Ezekiel 18:4
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 107.8, y: 55.5, width: 744.4, height: 120 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
		drillTo="sin-and-death/ephesians-2-1"
	>
		"Behold, all souls are Mine; the soul of the father as well as the soul of the son is Mine. The soul who sins will die.
	</Fragment>
</Slide>
