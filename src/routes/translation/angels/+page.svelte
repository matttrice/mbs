<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import AngelsContent from './Content.svelte';
	import Job1Content from '../job-1-6/Content.svelte';
	import Genesis6Content from '../genesis-6-4/Content.svelte';
</script>

<CustomShowProvider
	name="angels"
	slides={[AngelsContent, Job1Content, Genesis6Content]}
/>
