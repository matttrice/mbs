<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 108, y: 93, width: 779, height: 221 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Genesis 3:19" scale="lg">
			By the sweat of your face You will eat bread, Till you return to the ground, Because from it you were taken; For you are dust, And to dust you shall return.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 432, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB95
	</Fragment>
</Slide>
