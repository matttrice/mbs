<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 83, y: 19, width: 282, height: 38 }}
		font={{ font_size: 30.8, bold: true }}
	>
		Ephesians 2:8-9
	</Fragment>

	<!-- Static: Main scripture -->
	<Fragment
		layout={{ x: 99, y: 47, width: 714, height: 99 }}
		font={{ font_size: 21.7, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		For by grace you have been saved through faith; and that not of yourselves, it is the gift of God; 9 not as a result of works, so that no one may boast.
	</Fragment>

	<!-- Step 1: Is Baptism a "work"? (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 256, y: 203, width: 372, height: 38 }}
		fill="#F4F4F4"
		font={{ font_size: 26.7, bold: true, align: 'center', wrap: true }}
	>
		Is Baptism a "work"?
	</Fragment>

	<!-- Step 2: Romans 6:22-23 quote (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 99, y: 356, width: 799, height: 169 }}
		font={{ font_size: 30.8, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
	<strong>Romans 6:22-23</strong>	But now having been freed from sin and enslaved to God, you derive your benefit, resulting in sanctification, and the outcome, eternal life. 23 For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
	</Fragment>

	<!-- Step 3: First arrow (timing: click) -->
	<Fragment step={3} animate="wipe-down">
		<Arrow from={{ x: 488, y: 75 }} to={{ x: 488, y: 432 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={1} />
	</Fragment>

	<!-- Step 4: Second arrow (timing: click) -->
	<Fragment step={4} animate="wipe-down">
		<Arrow from={{ x: 415, y: 112 }} to={{ x: 415, y: 461 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={2} />
	</Fragment>

	<!-- Step 5: 1 Peter 3:20-21 box (timing: click) -->
	<Fragment
		step={5}
		layout={{ x: 94, y: 146, width: 799, height: 203 }}
		fill="#F4F4F4"
		font={{ font_size: 27, align: 'left', wrap: true }}
		line={{ width: 8 }}
	>
		<strong>1 Peter 3:20-21</strong>...who once were disobedient, when the patience of God kept waiting in the days of Noah, during the construction of the ark, in which a few, that is, eight persons, were brought safely through the water. 21 Corresponding to that, baptism now saves you --not the removal of dirt from the flesh, but an appeal to God for a good conscience --through the resurrection of Jesus Christ.
	</Fragment>

	<!-- Step 6: "baptism now saves you" highlight (timing: click) -->
	<Fragment
		step={6}
		layout={{ x: 337, y: 258, width: 264, height: 34 }}
		fill="#F4F4F4"
		font={{ font_size: 23.3, bold: true, color: '#0000FF', v_align: 'middle', align: 'center' }}
		line={{ width: 1, color: '#000000' }}
	>
		baptism now saves you
	</Fragment>

	<!-- Step 6: Multiple arrows pointing to key text (timing: with) -->
	<Fragment step={6} animate="wipe-down">
		<Arrow from={{ x: 414, y: 108 }} to={{ x: 414, y: 267 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={3} />
	</Fragment>

	<Fragment step={6} animate="wipe-down">
		<Arrow from={{ x: 568, y: 284 }} to={{ x: 568, y: 436 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={4} />
	</Fragment>

	<Fragment step={6} animate="wipe-down">
		<Arrow from={{ x: 499, y: 287 }} to={{ x: 499, y: 469 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={5} />
	</Fragment>

	<Fragment step={6} animate="wipe-down">
		<Arrow from={{ x: 462, y: 79 }} to={{ x: 462, y: 270 }} stroke={{ width: 5, color: '#0000FF' }} zIndex={6} />
	</Fragment>
</Slide>
