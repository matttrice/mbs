<script lang="ts">
	import CustomShowProvider from '$lib/components/CustomShowProvider.svelte';
	import Content1 from './Content.svelte';
	import Content2 from '../greek-hebrew-soul-spirit-2/Content.svelte';
	import Content3 from '../greek-hebrew-soul-spirit-3/Content.svelte';
</script>

<CustomShowProvider
	name="greek-hebrew-soul-spirit"
	slides={[Content1, Content2, Content3]}
/>
