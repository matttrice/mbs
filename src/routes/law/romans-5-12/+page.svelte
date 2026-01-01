<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 5:12-14 - Sin Before the Law
	 * Custom Show ID: 3 (Romans5.12)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 900, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'center' }}
	>
		Romans 5:12-14
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 55, width: 900, height: 180 }}
		font={{ font_size: 21, align: 'left', wrap: true }}
		animate="fade"
	>
		Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all men, because all sinned— for before the law was given, sin was in the world. But sin is not taken into account when there is no law. Nevertheless, death reigned from the time of Adam to the time of Moses, even over those who did not sin by breaking a command, as did Adam, who was a pattern of the one to come.
	</Fragment>

	<!-- Key question -->
	<Fragment
		step={2}
		layout={{ x: 30, y: 250, width: 450, height: 50 }}
		font={{ font_size: 24, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Why did death reign during the time period with no law?
	</Fragment>

	<!-- Analysis points -->
	<Fragment
		step={3}
		layout={{ x: 30, y: 310, width: 300, height: 40 }}
		font={{ font_size: 20, align: 'left' }}
		animate="fade"
	>
		"all sinned" (verse 12)
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 30, y: 350, width: 300, height: 40 }}
		font={{ font_size: 20, align: 'left' }}
		animate="fade"
	>
		"before the law was given"
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 30, y: 390, width: 300, height: 40 }}
		font={{ font_size: 20, align: 'left' }}
		animate="fade"
	>
		"sin was in the world"
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 480, y: 250, width: 450, height: 50 }}
		font={{ font_size: 22, italic: true, align: 'center', color: '#CC0000' }}
		animate="fade"
	>
		No Law = No Sin = No Death?
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 350, y: 310, width: 580, height: 60 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		animate="fade"
	>
		"But sin is not taken into account when there is no law" (verse 13)
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 350, y: 370, width: 580, height: 60 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		animate="fade"
	>
		"Death reigned…even over those who did not sin by breaking a command" (verse 14)
	</Fragment>

	<!-- Timeline reference -->
	<Fragment
		step={6}
		layout={{ x: 30, y: 450, width: 900, height: 40 }}
		font={{ font_size: 24, align: 'center', italic: true }}
		animate="fade"
	>
		Adam → Moral Law → Moses Law | Days of Noah, Sodom &amp; Gomorrah
	</Fragment>
</Slide>
