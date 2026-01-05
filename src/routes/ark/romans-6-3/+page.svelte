<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import BaptismAndFaithContent from '../baptism-and-faith/BaptismAndFaithContent.svelte';
	import Ephesians28Content from '../ephesians-2-8/Ephesians28Content.svelte';
</script>

<!--
	Custom Show: romans-6-3 (PowerPoint custom show "romans6.3")
	
	This aggregates slides 8 and 9 from The Ark presentation:
	1. BaptismAndFaithContent (Romans 6:3-7,17-18, 22-23) - 6 steps
	2. Ephesians28Content (Ephesians 2:8-9) - 6 steps
	
	Navigation progresses through all slides automatically, then returns to origin.
-->
<CustomShowProvider 
	name="romans-6-3" 
	slides={[BaptismAndFaithContent, Ephesians28Content]} 
/>
