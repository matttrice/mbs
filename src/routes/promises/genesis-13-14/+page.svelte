<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 48, y: 72, width: 773, height: 305 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Genesis 13:14-15" scale="lg">
			<sup>14</sup> The LORD said to Abram, after Lot had separated from him, "Lift up your eyes, and look from the place where you are, northward and southward and eastward and westward; <sup>15</sup> for all the land which you see I will give to you and to your descendants forever.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 251, y: 384, width: 432, height: 79 }}
		font={{ font_size: 33.6, bold: true, color: 'var(--text-level-3)', wrap: true }}
		zIndex={2}
	>
		What kinds of things<br> are forever?
	</Fragment>
</Slide>
