<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 2 Corinthians 5:10 - Judgment Seat of Christ
	 * Custom Show ID: 12 (2Corinthians5.10)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 50, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		2 Corinthians 5:10-11
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 130, width: 880, height: 160 }}
		font={{ font_size: 26, align: 'left', wrap: true }}
		animate="fade"
	>
		For we must all appear before the judgment seat of Christ, that each one may receive what is due him for the thing done while in the body, whether good or bad. Since, then, we know what it is to fear the Lord, we try to persuade men.
	</Fragment>

	<!-- Questions -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 340, width: 880, height: 100 }}
		font={{ font_size: 28, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Did you respect the office of Ambassador for Christ?<br/>
		Did you respect your grace period? Your diplomatic immunity?
	</Fragment>
</Slide>
