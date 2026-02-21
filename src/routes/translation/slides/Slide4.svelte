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

	<!-- End of lesson -->
	<Fragment
		layout={{ x: 111, y: 118, width: 747, height: 57 }}
		font={{ font_size: 59.2, bold: true, color: 'var(--text-ghost)' }}
		zIndex={1}
	>
		End of lesson
	</Fragment>
</Slide>
