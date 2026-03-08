<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Ephesians 5:3-7 (consolidated title + body) -->
	<Fragment
		layout={{ x: 42, y: 8, width: 864, height: 190 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Ephesians 5:3-7">
			But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God's holy people. <sup>4 </sup>Nor should there be obscenity, foolish talk or coarse joking, which are out of place, but rather thanksgiving. <sup>5 </sup>For of this you can be sure: No immoral, impure or greedy person--such a person is an idolater--has any inheritance in the kingdom of Christ and of God.<sup> </sup><sup>6 </sup>Let no one <u>deceive</u> you with empty words, for because of such things God's wrath comes on those who are disobedient. <sup>7 </sup>Therefore do not be partners with them. <sup>8 </sup>For you were once darkness, but now you are light in the Lord.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: 2 Thessalonians 2:9-12 -->
	<Fragment
		step={1}
		layout={{ x: 42, y: 198, width: 864, height: 184 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="2 Thessalonians 2:9-12">
			The coming of the lawless one will be in accordance with how Satan works. He will use all sorts of displays of power through signs and wonders that serve the lie, <sup>10 </sup>and all the ways that wickedness <u>deceives</u> those who are perishing. They perish because they refused to love the truth and so be saved. <sup>11 </sup>For this reason God sends them a powerful delusion so that they will believe the lie<sup>12 </sup>and so that all will be condemned who have not believed the truth but have delighted in wickedness.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Explanation -->
	<Fragment
		step={2}
		layout={{ x: 42, y: 380, width: 864, height: 26 }}
		font={{ wrap: true, align: 'center', font_size: 17, bold: true, italic: true, color: 'var(--text-level-3)' }}
		zIndex={3}
	>
		The context of "wickedness" is doctrinal <u>deception</u>: empty words of salvation, "refusal to love the truth"
	</Fragment>

	<!-- Step 3: Matthew 7:13 -->
	<Fragment
		step={3}
		layout={{ x: 42, y: 407, width: 864, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Matthew 7:13">
			"Enter through the narrow gate; for the gate is wide and the way is broad that leads to destruction, and there are many who enter through it. <sup>14 </sup>For the gate is narrow and the way is constricted that leads to life, and there are few who find it.
		</ScriptureBlock>
	</Fragment>
</Slide>
