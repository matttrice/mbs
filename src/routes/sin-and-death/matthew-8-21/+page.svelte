<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 13.0, width: 756.1, height: 44.4 }}
		font={{ font_size: 39.2, bold: true }}
	>
		Matthew 8:21-22
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 110.4, y: 54.6, width: 755.2, height: 157.5 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		Another of the disciples said to Him, "Lord, permit me first to go and bury my father." 22 But Jesus said to him, "Follow Me, and allow the dead to bury their own dead."
	</Fragment>
</Slide>
