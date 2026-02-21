<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title: Death as a Process -->
	<Fragment
		layout={{ x: 89.8, y: 25.7, width: 272.8, height: 43.3 }}
		line={{ width: 1 }}
		font={{ font_size: 35 }}
	>
		Genesis 3:19
	</Fragment>

	<Fragment
		layout={{ x: 432.2, y: 25.1, width: 379, height: 44.4 }}
		font={{ font_size: 40, bold: true }}
	>
		Death as a Process
	</Fragment>

	<!-- Genesis 3:19 text -->
	<Fragment
		step={1}
		layout={{ x: 89.2, y: 65, width: 768.1, height: 123.4 }}
		font={{ font_size: 30 }}
		animate="fade"
	>
		By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return."
	</Fragment>

	<!-- Death as an Event -->
	<Fragment
		layout={{ x: 442.3, y: 214.1, width: 397.4, height: 43.6 }}
		line={{ width: 1 }}
		font={{ font_size: 40, color: '#FF8000' }}
	>
		Death as an Event
	</Fragment>

	<!-- Ezekiel 18:4 text -->
	<Fragment
		step={2}
		layout={{ x: 89.9, y: 210.2, width: 784.1, height: 132.1 }}
		line={{ width: 1 }}
		font={{ font_size: 35 }}
		animate="fade"
	>
		Ezekiel 18:4 "Behold, all souls are Mine; the soul of the father as well as the soul of the son is Mine. The soul who sins will die.
	</Fragment>

	<!-- Death as a State -->
	<Fragment
		layout={{ x: 442.3, y: 370.3, width: 397.4, height: 41.2 }}
		line={{ width: 1 }}
		font={{ font_size: 40, color: 'var(--bg-cmd-law)' }}
	>
		Death as a State
	</Fragment>

	<!-- Ephesians 2:1 text -->
	<Fragment
		step={3}
		layout={{ x: 89.6, y: 375.2, width: 801.1, height: 150.4 }}
		font={{ font_size: 35 }}
		animate="fade"
	>
		Ephesians 2:1 As for you, you were dead in your transgressions and sins, 2 in which you used to live when you followed the ways of this world…
	</Fragment>
</Slide>
