<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 101.1, y: 15.1, width: 755.9, height: 44.4 }}
		font={{ bold: true }}
	>
		Psalms 51:5-6
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 107.8, y: 57.7, width: 744.4, height: 194.8 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8 }}
		animate="fade"
	>
		Behold, I was brought forth in iniquity, And in sin my mother conceived me. 6 Behold, You desire truth in the innermost being, And in the hidden part You will make me know wisdom.
	</Fragment>
</Slide>
