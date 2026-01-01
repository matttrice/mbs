<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Drill: Ecclesiastes 3:19-21 - Same fate for man and animals
	 */

</script>

<Slide>
	<Fragment
		layout={{ x: 97.8, y: 52.2, width: 437.5, height: 44.4 }}
		font={{ font_size: 44.2, align: 'left', bold: true }}
	>
		Ecclesiastes 3:19-21
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 62.5, y: 112.5, width: 835, height: 250 }}
		font={{ font_size: 26, v_align: 'top', wrap: true }}
	>
		Surely the fate of human beings is like that of the animals; the same fate awaits them both: As one dies, so dies the other. All have the same breath*; humans have no advantage over animals. Everything is meaningless. [20] All go to the same place; all come from dust, and to dust all return. [21] Who knows if the human spirit rises upward and if the spirit of the animal goes down into the earth?
	</Fragment>

	<Fragment
		layout={{ x: 62.5, y: 375, width: 187.5, height: 25 }}
		font={{ font_size: 16, italic: true }}
	>
		*NIV (or spirit)
	</Fragment>

	<Fragment
		layout={{ x: 812.5, y: 442.8, width: 112.5, height: 30.3 }}
		font={{ font_size: 20 }}
	>
		NASB2020
	</Fragment>
</Slide>
