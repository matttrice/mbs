<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import SlideC from './content/SlideC.svelte';
	import SlideD from './content/SlideD.svelte';
</script>

<CustomShowProvider name="test-custom-show-nested" slides={[SlideC, SlideD]} />
