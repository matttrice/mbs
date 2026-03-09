<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 42, y: 35, width: 864, height: 379 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1Peter 3:18-21" version="NASB" scale="lg">
			For Christ also died for sins once for all, the just for the unjust, so that He might bring us to God, having been put to death in the flesh, but made alive in the spirit; <sup>19 </sup>in which also He went and made proclamation to the spirits now in prison, <sup>20 </sup>who once were disobedient, <u>when the patience of God kept waiting in the days of Noah, during the construction of the ark</u>, in which a few, that is, eight persons, were brought safely through the<sup> </sup>water. <sup>21 </sup>Corresponding to that, baptism now saves you--not the removal of dirt from the flesh, but an appeal to God for a good conscience--through the resurrection of Jesus Christ
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: First underline (timing: click) -->
	<Fragment step={1} animate="draw">
		<Line from={{ x: 403, y: 290 }} to={{ x: 626, y: 290 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.1: Second underline (timing: after) -->
	<Fragment step={1.1} animate="draw">
		<Line from={{ x: 636, y: 291 }} to={{ x: 877, y: 292 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.2: Third underline (timing: after) -->
	<Fragment step={1.2} animate="draw">
		<Line from={{ x: 47, y: 321 }} to={{ x: 417, y: 320 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.3: Fourth underline (timing: after) -->
	<Fragment step={1.3} animate="draw">
		<Line from={{ x: 430, y: 320 }} to={{ x: 874, y: 320 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.4: Fifth underline (timing: after) -->
	<Fragment step={1.4} animate="draw">
		<Line from={{ x: 48, y: 349 }} to={{ x: 454, y: 349 }} stroke={{ width: 3, color: 'var(--bg-level-3)' }} zIndex={1} />
	</Fragment>
</Slide>
