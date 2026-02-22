<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: John 6:53 -->
	<Fragment
		layout={{ x: 110, y: 8, width: 100, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		John 6:53
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 90, y: 41, width: 721, height: 54 }}
		font={{ wrap: true, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		So Jesus said to them, "Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink His blood, you have no life in yourselves.
	</Fragment>

	<!-- Step 1: Luke 13:6-9 -->
	<Fragment
		step={1}
		layout={{ x: 90, y: 98, width: 761, height: 184 }}
		font={{ wrap: true, font_size: 20,color: 'var(--text-level-0)' }}
		zIndex={2}
		animate="fade"
	>
		Luke 13:6-96 And He began telling this parable: "A man had a fig tree which had been planted in his vineyard; and he came looking for fruit on it and did not find any.7 And he said to the vineyard-keeper, 'Behold, for three years I have come looking for fruit on this fig tree without finding any. Cut it down! Why does it even use up the ground?' 8 And he answered and said to him, 'Let it alone, sir, for this year too, until I dig around it and put in fertilizer; 9 and if it bears fruit next year, fine; but if not, cut it down.'"
	</Fragment>

	<!-- Step 2: Matthew 25:26-30 -->
	<Fragment
		step={2}
		layout={{ x: 90, y: 285, width: 783, height: 232 }}
		font={{ wrap: true, font_size: 20, color: 'var(--text-level-0)' }}
		zIndex={3}
		animate="fade"
	>
		Matthew 25:26-30 "But his master answered and said to him, 'You wicked, lazy slave, you knew that I reap where I did not sow and gather where I scattered no seed. 27 Then you ought to have put my money in the bank, and on my arrival I would have received my money back with interest. 28 Therefore take away the talent from him, and give it to the one who has the ten talents.' 29 "For to everyone who has, more shall be given, and he will have an abundance; but from the one who does not have, even what he does have shall be taken away. 30 Throw out the worthless slave into the outer darkness; in that place there will be weeping and gnashing of teeth.
	</Fragment>
</Slide>
