<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import ExcarnationContent from './Content.svelte';
	import KingsContent from '../2-kings-2-11/Content.svelte';
	import MatthewContent from '../matthew-17-1/Content.svelte';
	import LukeContent from '../luke-24-50/Content.svelte';
</script>

<CustomShowProvider
	name="excarnation"
	slides={[ExcarnationContent, KingsContent, MatthewContent, LukeContent]}
/>
