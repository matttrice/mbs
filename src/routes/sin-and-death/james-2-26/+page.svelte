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
		James 2:26
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 107.8, y: 55.5, width: 744.4, height: 100 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		For just as the body without the spirit is dead, so also faith without works is dead.
	</Fragment>
</Slide>
