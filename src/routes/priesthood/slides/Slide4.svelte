<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 76, y: 26, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		The End
	</Fragment>
</Slide>
