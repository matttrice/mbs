<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Samuel 12:21-23 -->
	<Fragment
		layout={{ x: 102, y: 19, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={0}
	>
		2 Samuel 12:21-23
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 63, width: 774, height: 151 }}
		font={{ wrap: true, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		Then his servants said to him, "What is this thing that you have done? While the child was alive, you fasted and wept; but when the child died, you arose and ate food." 22 He said, "While the child was still alive, I fasted and wept; for I said, 'Who knows, the Lord may be gracious to me, that the child may live.' 23 But now he has died; why should I fast? Can I bring him back again? I will go to him, but he will not return to me."
	</Fragment>
</Slide>
