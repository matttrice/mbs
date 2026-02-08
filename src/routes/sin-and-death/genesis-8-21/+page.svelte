<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 94.4, y: 5.8, width: 756.1, height: 44.4 }}
		font={{font_size: 30, bold: true }}
	>
		Genesis 8:21
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 93.6, y: 46.2, width: 755.3, height: 194.8 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		The LORD smelled the soothing aroma; and the LORD said to Himself, "I will never again curse the ground on account of man, for the intent of man's heart is evil from his youth; and I will never again destroy every living thing, as I have done.
	</Fragment>
</Slide>
