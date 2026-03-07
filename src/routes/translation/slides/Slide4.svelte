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

	<!-- Static: Background image -->
	<Fragment layout={{ x: 0, y: 0, width: 962, height: 619 }}>
		<img src="/export/07-Translation/image1.jpeg" alt="Celestial Map of the Northern Sky" class="slide-image" />
	</Fragment>

	<!-- Static: End of lesson title -->
	<Fragment
		layout={{ x: 111, y: 118, width: 747, height: 57 }}
		font={{ font_size: 59.2, bold: true, color: '#FFFFFF' }}
		zIndex={1}
	>
		End of lesson
	</Fragment>
</Slide>
