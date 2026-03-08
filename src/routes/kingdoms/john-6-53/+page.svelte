<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: John 6:53 (consolidated title + body) -->
	<Fragment
		layout={{ x: 90, y: 8, width: 756, height: 87 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="John 6:53">
			So Jesus said to them, "Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink His blood, you have no life in yourselves.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Luke 13:6-9 -->
	<Fragment
		step={1}
		layout={{ x: 90, y: 98, width: 761, height: 184 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Luke 13:6-9">
			<sup>6 </sup>And He <em>began</em> telling this parable: "A man had a fig tree which had been planted in his vineyard; and he came looking for fruit on it and did not find any.<sup>7 </sup>And he said to the vineyard-keeper, 'Behold, for three years I have come looking for fruit on this fig tree without finding any. Cut it down! Why does it even use up the ground?' <sup>8 </sup>And he answered and said to him, 'Let it alone, sir, for this year too, until I dig around it and put in fertilizer; <sup>9 </sup>and if it bears fruit next year, <em>fine</em>; but if not, cut it down.'"
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Matthew 25:26-30 -->
	<Fragment
		step={2}
		layout={{ x: 90, y: 285, width: 783, height: 232 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Matthew 25:26-30">
			"But his master answered and said to him, 'You wicked, lazy slave, you knew that I reap where I did not sow and gather where I scattered no <em>seed</em>. <sup>27 </sup>Then you ought to have put my money in the bank, and on my arrival I would have received my <em>money</em> back with interest. <sup>28 </sup>Therefore take away the talent from him, and give it to the one who has the ten talents.' <sup>29 </sup>"For to everyone who has, <em>more</em> shall be given, and he will have an abundance; but from the one who does not have, even what he does have shall be taken away. <sup>30 </sup>Throw out the worthless slave into the outer darkness; in that place there will be weeping and gnashing of teeth.
		</ScriptureBlock>
	</Fragment>
</Slide>
