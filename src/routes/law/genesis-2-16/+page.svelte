<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 102, y: 46, width: 756, height: 270 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Genesis 2:16-17" scale="lg">
			The LORD God commanded the man, saying, "From any tree of the garden you may eat freely;  but from the tree of the knowledge of good and evil you shall not eat, for in the day that you eat from it you will surely die."
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 137, y: 360, width: 665, height: 108 }}
		font={{ align: 'center', wrap: true }}
		fill="var(--bg-cmd-law)"
		line={{ width: 8 }}
	>
		"commanded" <br>evokes what thoughts?
	</Fragment>
</Slide>
