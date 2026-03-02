<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 60, y: 14, width: 840, height: 44 }}
		font={{ align: 'center', font_size: 40, bold: true }}
	>
		Physical &amp; Spiritual Death Enter
	</Fragment>

	<!-- Genesis 2:15-17 (static, scripture) -->
	<Fragment
		layout={{ x: 90, y: 61, width: 786, height: 158 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Genesis 2:15-17">
			Then the LORD God took the man and put him into the garden of Eden to cultivate it and keep it. <sup>16</sup> The LORD God commanded the man, saying, "From any tree of the garden you may eat freely; <sup>17</sup> but from the tree of the knowledge of good and evil you shall not eat, for in the day that you eat from it you will surely die."
		</ScriptureBlock>
	</Fragment>

	<!-- Genesis 3:19 (step 1, scripture) -->
	<Fragment
		step={1}
		layout={{ x: 90, y: 214, width: 785, height: 101 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Genesis 3:19">
			By the sweat of your face You will eat bread, Till you return to the ground, Because from it you were taken; For you are dust, And to dust you shall return."
		</ScriptureBlock>
	</Fragment>

	<!-- Mortality = physical death (step 2) -->
	<Fragment
		step={2}
		layout={{ x: 314, y: 314, width: 586, height: 56 }}
		fill="var(--bg-level-1)"
		font={{ align: 'center', font_size: 36.7 }}
	>
		Mortality = physical death
	</Fragment>

	<!-- Genesis 3:22 (step 3, scripture) -->
	<Fragment
		step={3}
		layout={{ x: 90, y: 371, width: 788, height: 99 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Genesis 3:22">
			Then the LORD God said, "Behold, the man has become like one of Us, knowing good and evil; and now, he might stretch out his hand, and take also from the tree of life, and eat, and live forever"--
		</ScriptureBlock>
	</Fragment>

	<!-- Morality = choice of good and evil (step 4) -->
	<Fragment
		step={4}
		layout={{ x: 162, y: 473, width: 738, height: 56 }}
		fill="var(--bg-cmd-law)"
		font={{ align: 'center', font_size: 36.7 }}
	>
		Morality = choice of good <em>and</em> evil
	</Fragment>
</Slide>
