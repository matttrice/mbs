<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Slide 1: Basic Drill Test
	 * 
	 * - Step 1: "First Fragment" with drillTo "test-fixture/drill-01"
	 * - Step 2: "Second Fragment" (no drill)
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
		Test Fixture
	</Fragment>

	<!-- Step 1: Drillable fragment (single level drill) -->
	<Fragment
		step={1}
		drillTo="test-fixture/drill-01"
		layout={{ x: 100, y: 100, width: 200, height: 40 }}
		font={{ font_size: 24 }}
	>
		First Fragment
	</Fragment>

	<!-- Step 2: Non-drillable fragment -->
	<Fragment
		step={2}
		layout={{ x: 100, y: 160, width: 200, height: 40 }}
		font={{ font_size: 24 }}
	>
		Second Fragment
	</Fragment>
</Slide>

<style>
	.slide-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
	}
</style>
