<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Genesis3Content from '../genesis-3-1-5/Content.svelte';
	import Genesis18Content from '../genesis-18-1-3/Content.svelte';
	import ExodusContent from '../exodus-33-21-23/Content.svelte';
	import NumbersContent from '../numbers-22-29-33/Content.svelte';
	import Ezekiel1Content from '../ezekiel-1-daniel-10/Content1.svelte';
	import Daniel10Content from '../ezekiel-1-daniel-10/Content2.svelte';
	import Acts10Content from '../acts-10-30-31/Content.svelte';
	import Acts22Content from '../acts-22-6-9/Content.svelte';
</script>

<CustomShowProvider
	name="incarnation"
	slides={[Genesis3Content, Genesis18Content, ExodusContent, NumbersContent, Ezekiel1Content, Daniel10Content, Acts10Content, Acts22Content]}
/>
