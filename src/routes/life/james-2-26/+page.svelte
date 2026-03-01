<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 125, y: 119, width: 678, height: 139 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="James 2:26">
			For just as the body without the spirit is dead, so also faith without works is dead.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 669, y: 436, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true, align: 'right' }}
	>
		NASB2020
	</Fragment>
</Slide>
