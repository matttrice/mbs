<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import IncarnationContent from './Content.svelte';
	import Genesis18Content from '../genesis-18-1/Content.svelte';
	import Exodus33Content from '../exodus-33-21/Content.svelte';
	import Numbers22Content from '../numbers-22-29/Content.svelte';
	import Ezekiel1Content from '../ezekiel-1-25/Content.svelte';
	import Daniel10Content from '../daniel-10-4/Content.svelte';
	import Acts10Content from '../acts-10-30/Content.svelte';
	import Acts22Content from '../acts-22-6/Content.svelte';
</script>

<CustomShowProvider
	name="incarnation"
	slides={[
		IncarnationContent,
		Genesis18Content,
		Exodus33Content,
		Numbers22Content,
		Ezekiel1Content,
		Daniel10Content,
		Acts10Content,
		Acts22Content
	]}
/>
