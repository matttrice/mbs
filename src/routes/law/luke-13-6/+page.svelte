<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Luke 13:6-9 - Parable of the Fig Tree
	 * Custom Show ID: 5 (Luke13.6)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 30, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Luke 13:6-9
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 100, width: 880, height: 300 }}
		font={{ font_size: 26, align: 'left', wrap: true }}
		animate="fade"
	>
		And He began telling this parable: "A man had a fig tree which had been planted in his vineyard; and he came looking for fruit on it and did not find any. And he said to the vineyard-keeper, 'Behold, for three years I have come looking for fruit on this fig tree without finding any. Cut it down! Why does it even use up the ground?' And he answered and said to him, 'Let it alone, sir, for this year too, until I dig around it and put in fertilizer; and if it bears fruit next year, fine; but if not, cut it down.'"
	</Fragment>
</Slide>
