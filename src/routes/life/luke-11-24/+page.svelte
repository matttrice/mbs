<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 116, y: 20, width: 758, height: 299 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Luke 11:24-26" scale="lg">
			"When the unclean spirit comes out of a <u>person</u>, it passes through waterless places seeking rest, and not finding any, it then says, 'I will return to my <u>house</u> from which I came.' <sup>[25]</sup> And when it comes, it finds it swept and put in order. <sup>[26]</sup> Then it goes and brings along seven other spirits more evil than itself, and they come in and live there; and the last condition of that person becomes worse than the first."
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 138, y: 341, width: 700, height: 90 }}
		fill='var(--bg-level-3)'
		font={{ align: 'center', font_size: 26.7, wrap: true, color: 'var(--text-ghost)' }}

	>
		You are a house of spirits; kept alive by a spirit (in your blood) and tutored by spirits (in your mind)
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 262, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
