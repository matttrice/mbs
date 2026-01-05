<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from './Content.svelte';
	import Content2 from '../hebrews-4-1/Content.svelte';
</script>

<CustomShowProvider
	name="hebrews-3-14"
	slides={[Content1, Content2]}
/>
