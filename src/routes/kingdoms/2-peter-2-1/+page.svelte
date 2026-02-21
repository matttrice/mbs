<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Peter 2:1-4 -->
	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 44 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={0}
	>
		2 Peter 2:1-4
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 52, width: 766, height: 200 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		But false prophets also arose among the people, just as there will also be false teachers among you, who will secretly introduce destructive heresies, even denying the Master who bought them, bringing swift destruction upon themselves. 2 Many will follow their sensuality, and because of them the way of the truth will be maligned; 3 and in their greed they will exploit you with false words; their judgment from long ago is not idle, and their destruction is not asleep.4 For if God did not spare angels when they sinned, but cast them into hell and committed them to pits of darkness, reserved for judgment;
	</Fragment>

	<!-- Step 1: Explanation box -->
	<Fragment
		step={1}
		layout={{ x: 196, y: 309, width: 596, height: 62 }}
		fill="var(--bg-cmd-law)"
		font={{ wrap: true, align: 'center', font_size: 23.3 }}
		zIndex={2}
		animate="fade"
	>
		Those facing destruction include all who are exploited / deceived by false words and those who teach it.
	</Fragment>
</Slide>
