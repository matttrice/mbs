<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 7.3, width: 756.1, height: 44.4 }}
		font={{ bold: true }}
	>
		Psalms 139:14-15
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 105.3, y: 51.2, width: 763.4, height: 232.1 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 30.8 }}
		animate="fade"
	>
		I will give thanks to You, for I am fearfully and wonderfully made; Wonderful are Your works, And my soul knows it very well. 15 My frame was not hidden from You, When I was made in secret, and skillfully wrought in the depths of the earth;
	</Fragment>
</Slide>
