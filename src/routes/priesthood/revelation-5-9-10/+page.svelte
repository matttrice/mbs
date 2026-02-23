<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 92, y: 26, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Revelation 5:9-10
	</Fragment>

	<!-- Scripture -->
	<Fragment
		layout={{ x: 92, y: 68, width: 778, height: 153 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		And they sang a new song, saying: "You are worthy to take the scroll, And to open its seals; For You were slain, And have redeemed us to God by Your blood out of every tribe and tongue and people and nation, <sup>10</sup> And have made us kings and priests to our God; And we shall reign on the earth."
	</Fragment>
</Slide>
