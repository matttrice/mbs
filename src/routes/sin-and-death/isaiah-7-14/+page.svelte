<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 10.8, width: 756.1, height: 44.5 }}
		font={{ bold: true }}
	>
		Isaiah 7:14-16
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 104.5, y: 53, width: 764.5, height: 306.9 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		"Therefore the Lord Himself will give you a sign: Behold, a virgin will be with child and bear a son, and she will call His name Immanuel. 15 "He will eat curds and honey at the time He knows enough to refuse evil and choose good. 16 "For before the boy will know enough to refuse evil and choose good, the land whose two kings you dread will be forsaken.
	</Fragment>
</Slide>
