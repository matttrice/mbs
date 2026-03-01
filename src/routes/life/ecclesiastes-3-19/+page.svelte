<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 92, y: 104, width: 744, height: 345 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Ecclesiastes 3:19-21">
			Surely the fate of human beings is like that of the animals; the same fate awaits them both: As one dies, so dies the other. <u>All have the same breath</u>*; humans have no advantage over animals. Everything is meaningless. <sup>[20]</sup> All go to the same place; <u>all come from dust, and to dust all return</u>. <sup>[21]</sup> Who knows if the <u>human spirit</u> rises upward and if the <u>spirit of the animal</u> goes down into the earth?"
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 752, y: 462, width: 139, height: 30 }}
		font={{ font_size: 20 }}
	>
		*NIV (or spirit)
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 432, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
