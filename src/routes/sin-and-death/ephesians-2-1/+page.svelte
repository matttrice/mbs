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
		Ephesians 2:1-2
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 107.8, y: 55.5, width: 744.4, height: 169.5 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8 }}
		animate="fade"
	>
		And you were dead in your trespasses and sins, 2 in which you formerly walked according to the course of this world, according to the prince of the power of the air, of the spirit that is now working in the sons of disobedience.
	</Fragment>
</Slide>
