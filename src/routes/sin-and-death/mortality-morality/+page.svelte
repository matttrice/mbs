<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 60, y: 14.1, width: 840, height: 44.4 }}
		font={{ align: 'center', font_size: 40, bold: true }}
	>
		Physical &amp; Spiritual Death Enter
	</Fragment>

	<!-- Genesis 2:15-17 - static -->
	<Fragment
		layout={{ x: 90.1, y: 60.7, width: 786.4, height: 157.4 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 23 }}
	>
		<strong>Genesis 2:15-17</strong> Then the LORD God took the man and put him into the garden of Eden to cultivate it and keep it. 16 The LORD God commanded the man, saying, "From any tree of the garden you may eat freely; 17 but from the tree of the knowledge of good and evil you shall not eat, for in the day that you eat from it you will surely die."
	</Fragment>

	<!-- Genesis 3:19 -->
	<Fragment
		step={1}
		layout={{ x: 90.1, y: 214.3, width: 785.2, height: 100.9 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 23 }}
		animate="fade"
	>
		<strong>Genesis 3:19</strong> By the sweat of your face You will eat bread, Till you return to the ground, Because from it you were taken; For you are dust, And to dust you shall return."
	</Fragment>

	<!-- Mortality = physical death -->
	<Fragment
		step={2}
		layout={{ x: 314.4, y: 314.5, width: 585.6, height: 56.4 }}
		fill="#969696"
		font={{ align: 'center', font_size: 36.7 }}
		animate="fade"
	>
		Mortality = physical death
	</Fragment>

	<!-- Genesis 3:22 -->
	<Fragment
		step={3}
		layout={{ x: 90.1, y: 370.9, width: 787.6, height: 98.9 }}
		font={{ wrap: true, font_size: 23 }}
		animate="fade"
	>
		<strong>Genesis 3:22</strong> Then the LORD God said, "Behold, the man has become like one of Us, knowing good and evil; and now, he might stretch out his hand, and take also from the tree of life, and eat, and live forever"—
	</Fragment>

	<!-- Morality = choice of good and evil -->
	<Fragment
		step={4}
		layout={{ x: 162.7, y: 473.2, width: 737.3, height: 56.4 }}
		fill="#FD8017"
		font={{ align: 'center', font_size: 36.7 }}
		animate="fade"
	>
		Morality = choice of good and evil
	</Fragment>
</Slide>
