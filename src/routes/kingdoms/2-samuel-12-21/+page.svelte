<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 102, y: 19, width: 774, height: 195 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Samuel 12:21-23" scale="lg">
			Then his servants said to him, "What is this thing that you have done? While the child was alive, you fasted and wept; but when the child died, you arose and ate food." <sup>22</sup>He said, "While the child was <em>still</em> alive, I fasted and wept; for I said, 'Who knows, the Lord may be gracious to me, that the child may live.' <sup>23	</sup>But now he has died; why should I fast? Can I bring him back again? I will go to him, but he will not return to me."
		</ScriptureBlock>
	</Fragment>
</Slide>
