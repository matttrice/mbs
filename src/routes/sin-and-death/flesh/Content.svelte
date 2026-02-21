<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arc, Arrow } from '$lib/components/svg';
</script>

<ReferenceOverlay src="/export/06-Sin_Death/Flesh.png" />

<!-- Static Content -->
<!-- Title: Flesh -->
<Fragment
	layout={{ x: 102.7, y: 9, width: 756.1, height: 44.4 }}
	font={{ align: 'center', font_size: 59.2, bold: true, color: 'var(--text-level-0)' }}
>
	Flesh
</Fragment>

<!-- SARX (Greek) -->
<Fragment
	layout={{ x: 95.6, y: 38.6, width: 237.9, height: 36.1 }}
	fill="var(--bg-level-1)"
	line={{ width: 6 }}
	font={{ font_size: 30.8 }}
>
	SARX (Greek)
</Fragment>

<!-- Flesh definition box -->
<Fragment
	layout={{ x: 95.6, y: 72.6, width: 455, height: 133.9 }}
	fill="var(--bg-level-1)"
	line={{ width: 6 }}
>
	Flesh that covers the bones<br/>The body of man.<br/>Sensuous nature of man.<br/>Animal nature with cravings which incite to sin.<br/>Physical nature of man.<br/>The flesh, earthly nature apart from divine influence<br/>and therefore prone to sin and opposed to God.
</Fragment>

<!-- Animated Content -->
<!-- Step 1: Where did this sinful nature come from? -->
<Fragment
	step={1}
	layout={{ x: 557, y: 57.2, width: 301.1, height: 45.8 }}
	line={{ width: 6 }}
	font={{ font_size: 17.5 }}
	animate="fade"
>
	Where did this sinful nature in the flesh come from?
</Fragment>

<!-- Step 2: ADAM: -->
<Fragment
	step={2}
	layout={{ x: 563.9, y: 105.2, width: 119.7, height: 45.4 }}
	fill="var(--bg-level-1)"
	line={{ width: 1.3 }}
	font={{ font_size: 30.8 }}
	animate="fade"
>
	ADAM:
</Fragment>

<!-- Step 2 with: Passed through birth... -->
<Fragment
	step={2}
	layout={{ x: 563.9, y: 150, width: 315, height: 120 }}
	fill="var(--bg-level-1)"
	line={{ width: 1.3 }}
	font={{ v_align: 'middle', font_size: 17.5 }}
	animate="fade"
>
	Passed through birth from Generation to generation. Sin lives inside the flesh from birth which causes us to be MORTAL and we have NO CHOICE.
</Fragment>

<!-- Step 3: Romans 8:1-14 -->
<Fragment
	step={3}
	layout={{ x: 95, y: 206.6, width: 455.6, height: 53.4 }}
	fill="var(--bg-cmd-law)"
	line={{ width: 6 }}
	font={{ font_size: 36.7 }}
	animate="fade"
>
	Romans 8:1-14
</Fragment>

<!-- Step 4: What does it mean... -->
<Fragment
	step={4}
	layout={{ x: 126.6, y: 482.6, width: 666.8, height: 48 }}
	line={{ width: 1 }}
	font={{ font_size: 23.3 }}
	animate="fade"
>
	What does it mean to - "live according to the flesh" (sarx)?
</Fragment>

<!-- Step 5: How and why do we sin? -->
<Fragment
	step={5}
	layout={{ x: 84.4, y: 309.4, width: 350, height: 26.4 }}
	line={{ width: 1 }}
	font={{ v_align: 'middle', font_size: 26.7, italic: true }}
	animate="fade"
>
	How and why do we sin?
</Fragment>

<!-- Step 6: Galatians, Romans, James references -->
<Fragment
	step={6}
	layout={{ x: 84.4, y: 340.2, width: 207.8, height: 122.5 }}
	line={{ width: 1 }}
	font={{ font_size: 26.7 }}
	animate="fade"
>
	Galatians 5:17<br/>Romans 6:12<br/>James 1:14-15
</Fragment>

<!-- Step 7: Temptation "by own lusts" -->
<Fragment
	step={7}
	layout={{ x: 292.2, y: 355.2, width: 182.7, height: 59.9 }}
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
	font={{ v_align: 'middle', align: 'center', font_size: 23.3, italic: true }}
	animate="fade"
>
	Temptation<br/>"by own lusts"
</Fragment>

<!-- Step 8: Red arc -->
<Fragment step={8} animate="draw">
	<Arc from={{ x: 495.7, y: 302.5 }} to={{ x: 520.2, y: 302.5 }} curve={-86.2} stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={13} />
</Fragment>

<!-- Step 8.1: SIN -->
<Fragment
	step={8.1}
	layout={{ x: 459.4, y: 315.8, width: 98.7, height: 59.8 }}
	line={{ width: 1 }}
	font={{ v_align: 'middle', font_size: 50 }}
	animate="fade"
>
	SIN
</Fragment>

<!-- Step 8.2: Down arrow -->
<Fragment step={8.2} animate="wipe">
	<Arrow from={{ x: 508.7, y: 375 }} to={{ x: 508.7, y: 420 }} stroke={{ width: 10 }} zIndex={14} />
</Fragment>

<!-- Step 8.3: DEATH -->
<Fragment
	step={8.3}
	layout={{ x: 415.2, y: 422.4, width: 187.1, height: 60.9 }}
	line={{ width: 1 }}
	font={{ v_align: 'middle', font_size: 50 }}
	animate="fade"
>
	DEATH
</Fragment>

<!-- Step 9: Side Note: Temptation -->
<Fragment
	step={9}
	layout={{ x: 563.9, y: 270, width: 315, height: 78 }}
	fill="var(--bg-cmd-law)"
	line={{ width: 1 }}
	animate="fade"
>
	Side Note: Temptation is necessary to start the cascade of events that leads to sin and death. Who provided the temptation in the Garden?
</Fragment>

<!-- Step 10: 1Corinthians 15:45-53 -->
<Fragment
	step={10}
	layout={{ x: 647.3, y: 369.4, width: 229.3, height: 88.2 }}
	line={{ width: 6 }}
	font={{ font_size: 33.3 }}
	animate="fade"
>
	1 Corinthians<br/>15:45-53
</Fragment>
