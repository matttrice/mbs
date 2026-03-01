<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 68, y: 94, width: 773, height: 356 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Genesis 1:11-12">
			Then God said, "Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds." And it was so. <sup>[12] </sup>The land produced vegetation: plants bearing seed according to their kinds and trees bearing fruit with seed in it according to their kinds. And God saw that it was good.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 841, y: 442, width: 50, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NIV
	</Fragment>
</Slide>
