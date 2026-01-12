<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<!--
	Slide 3: Entry point that drills into the body-complete custom show.
-->
<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Drill into the body-complete custom show -->
	<Fragment
		drillTo="birthrights/body-complete"
		layout={{ x: 280, y: 220, width: 400, height: 100 }}
		font={{ font_size: 32, bold: true, color: '#0000CC' }}
		fill="var(--color-bg-light)"
	>
		Formation of the Body →
	</Fragment>
</Slide>
