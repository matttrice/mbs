<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arc, Arrow } from '$lib/components/svg';
</script>

<ReferenceOverlay src="/export/06-Sin_Death/Flesh.png" />

<!-- Static Content -->
<!-- Title: Flesh -->
<Fragment
	layout={{ x: 102, y: 9, width: 756, height: 44 }}
	font={{ align: 'center', font_size: 59.2, bold: true, color: 'var(--text-level-0)' }}
>
	Flesh
</Fragment>

<!-- SARX (Greek) -->
<Fragment
	layout={{ x: 96, y: 39, width: 238, height: 36 }}
	fill="var(--bg-level-1)"
	font={{ bold: true, font_size: 30.8 }}
>
	SARX (Greek)
</Fragment>

<!-- Flesh definition box -->
<Fragment
	layout={{ x: 96, y: 72, width: 455, height: 134 }}
	fill="var(--bg-level-1)"
	line={{ width: 6 }}
	font={{ wrap: true }}
>
	Flesh that covers the bones<br>The body of man. <br>Sensuous nature of man.<br>Animal nature with cravings which incite to sin.<br>Physical nature of man.<br>The flesh, earthly nature apart from divine influence<br>and therefore prone to sin and opposed to God.<br>
</Fragment>

<!-- Animated Content -->
<!-- Step 1: Where did this sinful nature come from? -->
<Fragment
	step={1}
	layout={{ x: 564, y: 58, width: 271, height: 46 }}
	line={{ width: 6 }}
	font={{ align: 'left', font_size: 17.5, wrap: true }}
>
	Where did this sinful nature <br>in the flesh come from?
</Fragment>

<!-- Step 2: ADAM: -->
<Fragment
	step={2}
	layout={{ x: 564, y: 105, width: 120, height: 46 }}
	fill="var(--bg-level-1)"
	line={{ width: 1 }}
	font={{ bold: true, font_size: 30.8 }}
>
	ADAM:
</Fragment>

<!-- Step 2 with: Passed through birth... -->
<Fragment
	step={2}
	layout={{ x: 564, y: 150, width: 315, height: 120 }}
	fill="var(--bg-level-1)"
	line={{ width: 1 }}
	font={{ v_align: 'top', font_size: 17.5, wrap: true }}
>
	Passed through birth from <br>Generation to generation.<br><u>Sin lives inside the flesh,</u> from birth which causes us to be <br>MORTAL and we have NO CHOICE.
</Fragment>

<!-- Step 3: Romans 8:1-14 -->
<Fragment
	step={3}
	drillTo="sin-and-death/romans-8-1"
	returnHere	
	layout={{ x: 95, y: 206, width: 456, height: 54 }}
	fill="var(--bg-cmd-law)"
	line={{ width: 6 }}
	font={{ bold: true, font_size: 36.7 }}
>
	Romans 8:1-14
</Fragment>

<!-- Step 4: What does it mean... -->
<Fragment
	step={4}
	layout={{ x: 127, y: 482, width: 667, height: 48 }}
	line={{ width: 1 }}
	font={{bold: true, font_size: 23.3, wrap: true }}
>
	What does it mean to - "live according to the flesh" (sarx)?
</Fragment>

<!-- Step 5: How and why do we sin? -->
<Fragment
	step={5}
	layout={{ x: 84, y: 309, width: 350, height: 26 }}
	line={{ width: 1 }}
	font={{ bold: true, v_align: 'middle', font_size: 26.7, italic: true }}
>
	<em>How and why do we sin?</em>
</Fragment>

<!-- Step 6: Galatians, Romans, James references -->
<Fragment
	step={6}
	drillTo="sin-and-death/galatians-5-17"
	returnHere
	layout={{ x: 84, y: 340, width: 208, height: 122 }}
	line={{ width: 1 }}
	font={{ bold: true, font_size: 26.7, wrap: true }}
>
	Galatians 5:17<br>Romans 6:12<br>James 1:14-15
</Fragment>

<!-- Step 7: Temptation "by own lusts" -->
<Fragment
	step={7}
	layout={{ x: 292, y: 355, width: 182, height: 60 }}
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
	font={{ v_align: 'middle', align: 'center', font_size: 23.3, italic: true, wrap: true }}
>
	<em>Temptation</em><br><em>"by own lusts"</em>
</Fragment>

<!-- Step 8: Red arc -->
<Fragment step={8} animate="draw">
	<Arc from={{ x: 391, y: 300 }} to={{ x: 510, y: 312 }} curve={-126} shift={54} stroke={{ width: 8, color: 'var(--stroke-level-0)' }} zIndex={13} arrow />
</Fragment>

<!-- Step 8.1: SIN -->
<Fragment
	step={8.1}
	layout={{ x: 459, y: 316, width: 99, height: 60 }}
	line={{ width: 1 }}
	font={{ bold: true, v_align: 'middle', font_size: 50 }}
>
	<strong>SIN</strong>
</Fragment>

<!-- Step 8.2: Down arrow -->
<Fragment step={8.2} animate="wipe-down">
	<Arrow from={{ x: 509, y: 375 }} to={{ x: 509, y: 420 }} stroke={{ width: 10 }} zIndex={14} />
</Fragment>

<!-- Step 8.3: DEATH -->
<Fragment
	step={8.3}
	layout={{ x: 415, y: 422, width: 187, height: 61 }}
	line={{ width: 1 }}
	font={{ bold: true, v_align: 'middle', font_size: 50 }}
>
	<strong>DEATH</strong>
</Fragment>

<!-- Step 9: Side Note: Temptation -->
<Fragment
	step={9}
	layout={{ x: 564, y: 270, width: 315, height: 78 }}
	fill="var(--bg-cmd-law)"
	line={{ width: 1 }}
	font={{ wrap: true }}
>
	Side Note: Temptation is necessary<br>to start the cascade of events that <br>leads to sin and death.  Who provided<br>the temptation in the Garden?
</Fragment>

<!-- Step 10: 1Corinthians 15:45-53 -->
<Fragment
	step={10}
	layout={{ x: 648, y: 369, width: 229, height: 88 }}
	font={{ bold: true, font_size: 33.3, wrap: true }}
>
	1 Corinthians <br>15:45-53
</Fragment>
