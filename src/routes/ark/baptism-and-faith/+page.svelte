<script lang="ts">
    import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import BaptismAndFaithContent from './Content1.svelte';
    import Ephesians2Content from './Content2.svelte';
</script>

<CustomShowProvider 
	name="baptism-and-faith" 
	slides={[BaptismAndFaithContent, Ephesians2Content]} 
/>
