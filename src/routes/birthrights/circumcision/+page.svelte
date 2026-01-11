<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from './Content1.svelte';
	import Content2 from './Content2.svelte';
</script>

<CustomShowProvider 
	name="circumcision" 
	slides={[Content1, Content2]} 
/>
