<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Drill: Genesis 2:16-17 - The first command
	 */
</script>

<Slide>
	<Fragment
		layout={{ x: 102.7, y: 45.6, width: 756.1, height: 44.4 }}
		font={{ font_size: 44.2, bold: true }}
	>
		Genesis 2:16-17
	</Fragment>

	<Fragment
		layout={{ x: 108.9, y: 96.3, width: 742.1, height: 220 }}
		font={{ font_size: 35, v_align: 'middle', wrap: true }}
	>
		The LORD God commanded the man, saying, "From any tree of the garden you may eat freely;  but from the tree of the knowledge of good and evil you shall not eat, for in the day that you eat from it you will surely die."
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 137, y: 360, width: 665, height: 108 }}
		font={{ font_size: 48, align: 'center' }}
		fill="var(--color-bg-cmd-law)"
		line={{ width: 8 }}
	>
		"commanded" evokes what thoughts?
	</Fragment>
</Slide>
