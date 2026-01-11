<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from '../jeremiah-33-17-18/Content.svelte';
	import Content2 from '../luke-1-30-36/Content.svelte';
</script>

<CustomShowProvider
	name="jeremiah-33-17-18-custom"
	slides={[Content1, Content2]}
/>
