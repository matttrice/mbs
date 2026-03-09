<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<Fragment
	layout={{ x: 102, y: 42, width: 728, height: 106 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Romans 10:17" scale="lg">
		Consequently, faith comes from hearing the message, and the message is heard through the word of Christ.
	</ScriptureBlock>
</Fragment>
