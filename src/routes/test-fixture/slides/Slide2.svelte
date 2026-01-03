<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Slide 2: Multi-Drill Test
	 * 
	 * - Step 1: "Multi Drill Start" with drillTo "test-fixture/drill-01"
	 *   - drill-01 → drill-02 → drill-03 → returns to Slide 2
	 * - Step 2: "After Multi" (no drill)
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	
	<!-- Title (always visible) -->
	<Fragment
		layout={{ x: 300, y: 20, width: 360, height: 50 }}
		font={{ font_size: 36, bold: true }}
	>
		Slide Two
	</Fragment>

	<!-- Step 1: Starts nested drill chain (drill-01 → drill-02 → drill-03) -->
	<Fragment
		step={1}
		drillTo="test-fixture/drill-01"
		layout={{ x: 100, y: 100, width: 250, height: 40 }}
		font={{ font_size: 24 }}
	>
		Multi Drill Start
	</Fragment>

	<!-- Step 2: After returning from nested drills -->
	<Fragment
		step={2}
		layout={{ x: 100, y: 160, width: 200, height: 40 }}
		font={{ font_size: 24 }}
	>
		After Multi
	</Fragment>
</Slide>

<style>
	.slide-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
	}
</style>
