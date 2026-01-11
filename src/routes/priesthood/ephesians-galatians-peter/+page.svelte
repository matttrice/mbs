<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from '../ephesians-5-22-25/Content.svelte';
	import Content2 from '../1-peter-2-9/Content.svelte';
</script>

<CustomShowProvider
	name="ephesians-galatians-peter"
	slides={[Content1, Content2]}
/>
