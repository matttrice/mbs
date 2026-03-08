<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 102, y: 28, width: 765, height: 292 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="1 Peter 3:18-22">
			For Christ also died for sins once for all, <em>the</em> just for <em>the</em> unjust, so that He might bring us to God, having been put to death in the flesh, but made alive in the spirit; <sup>19 </sup>in which also He went and made proclamation to the spirits <em>now</em> in prison, <sup>20 </sup>who once were disobedient, when the patience of God kept waiting in the days of Noah, during the construction of the ark, in which a few, that is, eight persons, were brought safely through <em>the</em> water. <sup>21 </sup>Corresponding to that, baptism now saves you--not the removal of dirt from the flesh, but an appeal to God for a good conscience--through the resurrection of Jesus Christ, <sup>22 </sup>who is at the right hand of God, having gone into heaven, after angels and authorities and powers had been subjected to Him.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Appeal to God explanation -->

	<!-- Step 1: Summary bar (with) -->
	<Fragment
		step={1}
		layout={{ x: 118, y: 334, width: 741, height: 90 }}
		fill="var(--bg-level-3)"
		font={{ font_size: 28, v_align: 'middle', wrap: true, align: 'center', bold: true, color: 'var(--text-ghost)' }}
		zIndex={2}
	>
		Safely through the water = Baptism = Saves you = Resurrection of Jesus
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 169, y: 424, width: 622, height: 120 }}
		fill="var(--bg-level-0)"
		font={{ font_size: 28, v_align: 'middle', wrap: true, align: 'center', bold: true, color: 'var(--text-ghost)' }}
		zIndex={3}
	>
		The water is an appeal to God for a good conscience - through the resurrection of Jesus Christ.
	</Fragment>
</Slide>
