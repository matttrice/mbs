<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 91, y: 25, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Revelation 5:9-10
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 91, y: 66, width: 778, height: 155 }}
		font={{ font_size: 24, v_align: 'middle' }}
	>
		And they sang a new song, saying: "You are worthy to take the scroll, And to open its seals; For You were slain, And have redeemed us to God by Your blood out of every tribe and tongue and people and nation, 10 And have made us kings and priests to our God; And we shall reign on the earth."
	</Fragment>
</Slide>
