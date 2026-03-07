<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Genesis5Content from '../genesis-5-21-24/Content.svelte';
	import Kings2Content from '../2-kings-2-11-12/Content.svelte';
	import MatthewContent from '../matthew-17-1-3/Content.svelte';
	import LukeContent from '../luke-24-50-52/Content.svelte';
</script>

<CustomShowProvider
	name="excarnation"
	slides={[Genesis5Content, Kings2Content, MatthewContent, LukeContent]}
/>
