<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import FleshContent from './Content.svelte';
	import CorinthiansContent from '../1-corinthians-15/Content.svelte';
</script>

<CustomShowProvider
	name="flesh"
	slides={[FleshContent, CorinthiansContent]}
/>
