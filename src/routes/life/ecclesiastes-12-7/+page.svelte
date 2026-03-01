<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 99, y: 91, width: 773, height: 190 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Ecclesiastes 12:7">
			Remember him--before the silver cord is severed, and the golden bowl is broken; before the pitcher is shattered at the spring, and the wheel broken at the well, <sup>[7] </sup>and the dust returns to the ground it came from, and the spirit returns to God who gave it.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 99, y: 266, width: 788, height: 115 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Ecclesiastes 3:20">
		All go to the same place; all come from dust, and to dust all return.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 823, y: 213, width: 74, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NIV
	</Fragment>

	<Fragment
		layout={{ x: 793, y: 325, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
