<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 99, y: 84, width: 736, height: 186 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Jude 1:10">
			But these men revile the things which they do not understand; and the things which they know by instinct, like unreasoning animals, by these things they are destroyed.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 710, y: 361, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true, align: 'right' }}
	>
		NASB95
	</Fragment>
</Slide>
