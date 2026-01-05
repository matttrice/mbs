<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import PostFloodContent from './Content.svelte';
	import AmosContent from '../amos-2-9/Content.svelte';
</script>

<CustomShowProvider
	name="post-flood"
	slides={[PostFloodContent, AmosContent]}
/>
