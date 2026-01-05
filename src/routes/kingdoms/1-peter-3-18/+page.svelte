<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 1 Peter 3:18-22 -->
	<Fragment
		layout={{ x: 102, y: 28, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		1 Peter 3:18-22
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 72, width: 765, height: 248 }}
		font={{ wrap: true, color: '#000000' }}
		zIndex={1}
	>
		For Christ also died for sins once for all, the just for the unjust, so that He might bring us to God, having been put to death in the flesh, but made alive in the spirit; 19 in which also He went and made proclamation to the spirits now in prison, 20 who once were disobedient, when the patience of God kept waiting in the days of Noah, during the construction of the ark, in which a few, that is, eight persons, were brought safely through the water. 21 Corresponding to that, baptism now saves you—not the removal of dirt from the flesh, but an appeal to God for a good conscience—through the resurrection of Jesus Christ, 22 who is at the right hand of God, having gone into heaven, after angels and authorities and powers had been subjected to Him.
	</Fragment>

	<!-- Step 1: Appeal to God explanation -->
	<Fragment
		step={1}
		layout={{ x: 169, y: 424, width: 622, height: 54 }}
		fill="#000000"
		font={{ wrap: true, align: 'center', bold: true, color: '#F4F4F4' }}
		zIndex={3}
		animate="fade"
	>
		The water is an appeal to God for a good conscience – through the resurrection of Jesus Christ.
	</Fragment>

	<!-- Step 1: Summary bar (with) -->
	<Fragment
		step={1}
		layout={{ x: 118, y: 365, width: 741, height: 30 }}
		fill="#0000FF"
		font={{ wrap: true, align: 'center', bold: true, color: '#F4F4F4' }}
		zIndex={2}
		animate="fade"
	>
		Safely through the water = Baptism = Saves you = Resurrection of Jesus
	</Fragment>
</Slide>
