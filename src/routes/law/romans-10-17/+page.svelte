<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 103, y: 38, width: 767, height: 127 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Romans 10:17 NASB" scale="lg">
			So faith comes from hearing, <br>and hearing by the word of Christ.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 102, y: 192, width: 780, height: 123 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Romans 10:17 NIV">
			Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.
		</ScriptureBlock>
	</Fragment>
</Slide>
