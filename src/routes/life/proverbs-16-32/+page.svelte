<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 88, y: 138, width: 784, height: 141 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Proverbs 16:32">
			One who is slow to anger is better than the mighty, And one who rules his spirit, than one who captures a city.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 432, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
