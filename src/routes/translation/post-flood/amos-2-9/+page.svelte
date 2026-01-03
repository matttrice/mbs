<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 128, y: 56, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Amos 2:9-10
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 126, y: 108, width: 698, height: 232 }}
		font={{ wrap: true, font_size: 26.7 }}
		zIndex={1}
	>
		"Yet it was I who destroyed the Amorite before them, Though his height was like the height of cedars And he was strong as the oaks; I even destroyed his fruit above and his root below. 10 "It was I who brought you up from the land of Egypt, And I led you in the wilderness forty years That you might take possession of the land of the Amorite."
	</Fragment>
</Slide>
