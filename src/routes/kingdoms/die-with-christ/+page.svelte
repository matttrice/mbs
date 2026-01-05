<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Romans6Content from './Content.svelte';
	import Colossians2Content from '../colossians-2-8/Content.svelte';
	import Romans8Content from '../romans-8-10/Content.svelte';
</script>

<CustomShowProvider
	name="romans-6-1-11"
	slides={[Romans6Content, Colossians2Content, Romans8Content]}
/>
