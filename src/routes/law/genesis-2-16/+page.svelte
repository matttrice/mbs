<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Genesis 2:16-17 - The First Command
	 * Custom Show ID: 0 (Genesis2.16)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 20, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Genesis 2:16-17
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 80, width: 880, height: 200 }}
		font={{ font_size: 28, align: 'left', wrap: true }}
		animate="fade"
	>
		The LORD God commanded the man, saying, "From any tree of the garden you may eat freely; but from the tree of the knowledge of good and evil you shall not eat, for in the day that you eat from it you will surely die."
	</Fragment>

	<!-- Question -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 320, width: 880, height: 60 }}
		font={{ font_size: 32, italic: true, align: 'center', color: '#0000CC' }}
		animate="fade"
	>
		"commanded" evokes what thoughts?
	</Fragment>
</Slide>
