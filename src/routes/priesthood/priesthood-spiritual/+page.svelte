<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from './Content1.svelte';
	import Content2 from './Content2.svelte';
	import Content3 from '../hebrews-7-11-19/Content.svelte';
</script>

<CustomShowProvider
	name="priesthood-spiritual"
	slides={[Content1, Content2, Content3]}
/>
