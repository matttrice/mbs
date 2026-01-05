<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Title: The End -->
	<Fragment
		layout={{ x: 102, y: 203, width: 756, height: 39 }}
		font={{ bold: true }}
		zIndex={0}
	>
		The End
	</Fragment>
</Slide>
