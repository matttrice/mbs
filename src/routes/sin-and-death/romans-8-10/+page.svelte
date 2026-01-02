<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 11.4, width: 756.1, height: 44.4 }}
		font={{ font_size: 39.2, bold: true }}
	>
		Romans 8:10
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 101.6, y: 56.1, width: 766.3, height: 120.1 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 30.8 }}
		animate="fade"
	>
		If Christ is in you, though the body is dead because of sin, yet the spirit is alive because of righteousness.
	</Fragment>
</Slide>
