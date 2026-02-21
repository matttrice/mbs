<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Ephesians 5:3-7 -->
	<Fragment
		layout={{ x: 102, y: 8, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		Ephesians 5:3-7
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 50, width: 766, height: 148 }}
		font={{ wrap: true, font_size: 16.7 }}
		zIndex={1}
	>
		But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God's holy people. 4 Nor should there be obscenity, foolish talk or coarse joking, which are out of place, but rather thanksgiving. 5 For of this you can be sure: No immoral, impure or greedy person—such a person is an idolater—has any inheritance in the kingdom of Christ and of God. 6 Let no one deceive you with empty words, for because of such things God's wrath comes on those who are disobedient. 7 Therefore do not be partners with them. 8 For you were once darkness, but now you are light in the Lord.
	</Fragment>

	<!-- Step 1: 2 Thessalonians 2:9-12 -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 198, width: 781, height: 184 }}
		font={{ wrap: true, font_size: 16.7 }}
		zIndex={2}
		animate="fade"
	>
		2 Thessalonians 2:9-12 The coming of the lawless one will be in accordance with how Satan works. He will use all sorts of displays of power through signs and wonders that serve the lie, 10 and all the ways that wickedness deceives those who are perishing. They perish because they refused to love the truth and so be saved. 11 For this reason God sends them a powerful delusion so that they will believe the lie12 and so that all will be condemned who have not believed the truth but have delighted in wickedness.
	</Fragment>

	<!-- Step 2: Explanation -->
	<Fragment
		step={2}
		layout={{ x: 77, y: 379, width: 792, height: 26 }}
		font={{ wrap: true, align: 'center', font_size: 16.7, italic: true, color: 'var(--text-level-3)' }}
		zIndex={3}
		animate="fade"
	>
		The context of "wickedness" is doctrinal deception: empty words of salvation, "refusal to love the truth"
	</Fragment>

	<!-- Step 3: Matthew 7:13 -->
	<Fragment
		step={3}
		layout={{ x: 102, y: 407, width: 781, height: 111 }}
		font={{ wrap: true, font_size: 16.7 }}
		zIndex={4}
		animate="fade"
	>
		Matthew 7:13"Enter through the narrow gate; for the gate is wide and the way is broad that leads to destruction, and there are many who enter through it. 14 For the gate is narrow and the way is constricted that leads to life, and there are few who find it.
	</Fragment>
</Slide>
