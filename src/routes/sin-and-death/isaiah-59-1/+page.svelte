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
		Isaiah 59:1-2
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 107.8, y: 55.5, width: 744.4, height: 169.5 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8 }}
		animate="fade"
	>
		Behold, the LORD's hand is not so short That it cannot save; Nor is His ear so dull That it cannot hear. 2 But your iniquities have made a separation between you and your God, And your sins have hidden His face from you so that He does not hear.
	</Fragment>
</Slide>
