<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from '../levitical-lineage/Content.svelte';
	import Content2 from '../hebrews-9-8/Content.svelte';
</script>

<CustomShowProvider
	name="priesthood-levitical"
	slides={[Content1, Content2]}
/>
