<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from './Content1.svelte';
	import Content2 from './Content2.svelte';
	import Content3 from './Content3.svelte';
</script>

<CustomShowProvider
	name="greek-hebrew-soul-spirit"
	slides={[Content1, Content2, Content3]}
/>
