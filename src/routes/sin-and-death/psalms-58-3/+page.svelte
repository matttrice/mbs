<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 13.0, width: 756.1, height: 44.4 }}
		font={{ font_size: 33.3, bold: true }}
	>
		Psalms 58:3
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 107.8, y: 57.5, width: 691.4, height: 82.7 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		The wicked are estranged from the womb; These who speak lies go astray from birth.
	</Fragment>
</Slide>
