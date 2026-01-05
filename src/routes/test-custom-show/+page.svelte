<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import SlideA from './content/SlideA.svelte';
	import SlideB from './content/SlideB.svelte';
</script>

<!--
	Test page for CustomShowProvider.
	
	This demonstrates how to create a multi-slide custom show (drill)
	that aggregates multiple slide content components.
	
	Navigation will:
	1. Show Slide A (3 steps)
	2. Show Slide B (2 steps)  
	3. Return to origin after completing Slide B
-->
<CustomShowProvider name="test-custom-show" slides={[SlideA, SlideB]} />
