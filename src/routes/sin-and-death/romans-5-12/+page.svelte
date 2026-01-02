<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.8, y: 23.1, width: 756, height: 44.4 }}
		font={{ bold: true }}
	>
		Romans 5:12
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 107.8, y: 80.8, width: 744.4, height: 169.5 }}
		line={{ width: 1 }}
		font={{ font_size: 33.3, wrap: true }}
		animate="fade"
	>
		12 Therefore, just as through one man sin entered into the world, and death through sin, and so death spread to all men, because all sinned—
	</Fragment>
</Slide>
