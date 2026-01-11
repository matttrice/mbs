<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from '../levitical-priesthood/Content.svelte';
	import Content2 from '../hebrews-9-8-10/Content.svelte';
</script>

<CustomShowProvider
	name="priesthood-levitical"
	slides={[Content1, Content2]}
/>
