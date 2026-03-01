<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 57, y: 75, width: 795, height: 127 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Leviticus 17:11" scale="lg">
			For the life of the flesh is in the blood, and I have given it to you on the altar to make atonement for your souls; for it is the blood by reason of the life that makes atonement.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 432, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB95
	</Fragment>
</Slide>
