<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 13.6, width: 756.1, height: 44.5 }}
		font={{ bold: true, color: '#000000' }}
	>
		Psalms 51:5
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 106.2, y: 51.7, width: 679.6, height: 82.6 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8 }}
		animate="fade"
	>
		Behold, I was brought forth in iniquity, And in sin my mother conceived me.
	</Fragment>
</Slide>
