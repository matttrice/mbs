<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 10, y: 35, width: 399, height: 51 }}
		font={{ font_size: 45, bold: true, color: '#000000' }}
	>
		1Peter 3:18-21
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 60, y: 70, width: 799, height: 363 }}
		font={{ font_size: 26.7, align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		For Christ also died for sins once for all, the just for the unjust, so that He might bring us to God, having been put to death in the flesh, but made alive in the spirit; 19 in which also He went and made proclamation to the spirits now in prison, 20 who once were disobedient, when the patience of God kept waiting in the days of Noah, during the construction of the ark, in which a few, that is, eight persons, were brought safely through the water. 21 Corresponding to that, baptism now saves you—not the removal of dirt from the flesh, but an appeal to God for a good conscience—through the resurrection of Jesus Christ
	</Fragment>

	<!-- Static: NASB label -->
	<Fragment
		layout={{ x: 821, y: 497, width: 58, height: 26 }}
		font={{ font_size: 16.7 }}
		line={{ width: 1 }}
	>
		NASB
	</Fragment>

	<!-- Step 1: First underline (timing: click) -->
	<Fragment step={1} animate="draw">
		<Line from={{ x: 120, y: 344 }} to={{ x: 390, y: 344 }} stroke={{ width: 4, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.1: Second underline (timing: after) -->
	<Fragment step={1.1} animate="draw">
		<Line from={{ x: 410, y: 344 }} to={{ x: 660, y: 344 }} stroke={{ width: 4, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.2: Third underline (timing: after) -->
	<Fragment step={1.2} animate="draw">
		<Line from={{ x: 770, y: 344 }} to={{ x: 821, y: 344 }} stroke={{ width: 4, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.3: Fourth underline (timing: after) -->
	<Fragment step={1.3} animate="draw">
		<Line from={{ x: 69, y: 376 }} to={{ x: 560, y: 376 }} stroke={{ width: 4, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 1.4: Fifth underline (timing: after) -->
	<Fragment step={1.4} animate="draw">
		<Line from={{ x:65, y: 409 }} to={{ x: 380, y: 409 }} stroke={{ width: 4, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>
</Slide>
