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

	<!-- Static: End of lesson -->
	<Fragment
		layout={{ x: 99, y: 33, width: 633, height: 72 }}
		font={{ font_size: 59.2, bold: true }}
	>
		End of lesson
	</Fragment>
</Slide>
