<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow } from '$lib/components/svg';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
    import Arc from '$lib/components/svg/Arc.svelte';
</script>

<div class="slide-bg"></div>
<ReferenceOverlay src="/export/08-The_Ark/Slide9.png" />
<!-- Static: Title -->
<Fragment
	layout={{ x: 103, y: 19, width: 240, height: 38 }}
	font={{ font_size: 30.8, bold: true, align: 'left' }}
>
	Ephesians 2:8-9
</Fragment>

<!-- Static: Main scripture -->
<Fragment
	layout={{ x: 99, y: 60, width: 714, height: 69 }}
	font={{ font_size: 22, v_align: 'middle', align: 'left', wrap: true }}
>
	For by grace you have been saved through faith; and that not of yourselves, it is the gift of God; 9 not as a result of works, so that no one may boast.
</Fragment>

<!-- Step 1: Is Baptism a "work"? (timing: click) -->
<Fragment
	step={1}
	layout={{ x: 100, y: 203, width: 372, height: 38 }}
	fill="#F4F4F4"
	font={{ font_size: 26.7, bold: true, align: 'center', wrap: true }}
>
	Is Baptism a "work"?
</Fragment>

<Fragment
	step={2}
	layout={{ x: 99, y: 360, width: 240, height: 38 }}
	font={{ font_size: 30.8, bold: true, align: 'left' }}
>
	Romans 6:22-23
</Fragment>
<Fragment
	step={2}
	layout={{ x: 95, y: 360, width: 714, height: 169 }}
	font={{ font_size: 22, v_align: 'middle', align: 'left', wrap: true }}
>
	But now having been freed from sin and enslaved to God, you derive your benefit, resulting in sanctification, and the outcome, eternal life. 23 For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
</Fragment>

<!-- Step 3: First arrow (timing: click) -->
<Fragment step={3} animate="wipe-up">
	<Arc from={{ x: 518, y: 423 }} to={{ x: 413, y: 82 }}  stroke={{ width: 5, color: 'var(--color-level3)' }} arrow />	
</Fragment>

<!-- Step 4: Second arrow (timing: click) -->
<Fragment step={4} animate="wipe-up">
	<Arc from={{ x: 379, y: 446 }} to={{ x: 329, y: 108 }} stroke={{ width: 5, color: 'var(--color-level3)' }} arrow />
</Fragment>

<Fragment
	step={5}
	layout={{ x: 99, y: 155, width: 240, height: 38 }}
	font={{ font_size: 30.8, bold: true, align: 'left' }}
	zIndex={2}
>
	1 Peter 3:20-21
</Fragment>
<Fragment
	step={5}
	layout={{ x: 94, y: 185, width: 799, height: 173 }}
	fill="var(--color-bg-light)"
	font={{ font_size: 22, align: 'left', wrap: true }}
	line={{ width: 8 }}
	 zIndex={1}
>
	...who once were disobedient, when the patience of God kept waiting in the days of Noah, during the construction of the ark, in which a few, that is, eight persons, were brought safely through the water.<br/><sup>21</sup> Corresponding to that, baptism now saves you --not the removal of dirt from the flesh, but an appeal to God for a good conscience --through the resurrection of Jesus Christ.
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
