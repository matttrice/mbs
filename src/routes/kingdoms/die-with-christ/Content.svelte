<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<!-- Slide 11: Romans 6:1-11 content -->
<div class="slide-bg scripture"></div>

<!-- Static: Romans 6:1-11 (consolidated title + body) -->
<Fragment
	layout={{ x: 42, y: 8, width: 864, height: 306 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Romans 6:1-11">
		What shall we say then? Are we to continue in sin so that grace may increase? <sup>2 </sup>May it never be! How shall we who died to sin still live in it? <sup>3 </sup>Or do you not know that all of us who have been baptized into Christ Jesus have been baptized into His death? <sup>4 </sup>Therefore <u>we have been buried with Him through baptism into death</u>, so that as Christ was raised from the dead through the glory of the Father, so we too might walk in newness of life. <sup>5 </sup>For if we have become united with <em>Him</em> in the likeness of His death, certainly we shall also be <em>in the likeness</em> of His resurrection,<br><sup>8 </sup>Now <u>if we have died with Christ</u>, we believe that we shall also live with Him,<sup>9 </sup>knowing that Christ, having been raised from the dead, is never to die again; death no longer is master over Him. <sup>10 </sup>For the death that He died, He died to sin once for all; but the life that He lives, He lives to God. <sup>11 </sup>Even so consider yourselves to be dead to sin, but alive to God in Christ Jesus.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Question: How does one die with Christ? -->
<Fragment
	step={1}
	layout={{ x: 293, y: 301, width: 306, height: 30 }}
	font={{ font_size: 28, bold: true, color: 'var(--text-level-3)' }}
	zIndex={3}
	animate="fade"
>
	<strong>How does one die with Christ?</strong>
</Fragment>

<!-- Step 1: Arrow pointing down (with) -->
<Fragment step={1} animate="wipe-up">
	<Arrow from={{ x: 483, y: 309 }} to={{ x: 272, y: 221 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={5} />
</Fragment>
<!-- Step 2: Arrow pointing to verse 3 -->
<Fragment step={2} animate="wipe-up">
	<Arrow from={{ x: 484, y: 307 }} to={{ x: 334, y: 155 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={4} />
</Fragment>

<!-- Step 3: Ephesians 2:1-5 -->
<Fragment
	step={3}
	layout={{ x: 42, y: 340, width: 864, height: 190 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Ephesians 2:1-5">
		And <u>you were dead in your trespasses and sins</u>, <sup>2 </sup>in which you formerly walked according to the course of this world, according to the prince of the power of the air, of the spirit that is now working in the sons of disobedience.<sup>3 </sup>Among them we too all formerly lived in the lusts of our flesh, indulging the desires of the flesh and of the mind, and were by nature children of wrath, even as the rest. <sup>4 </sup>But God, being rich in mercy, because of His great love with which He loved us, <sup>5 </sup>even when we were dead in our transgressions, made us alive together with Christ (by grace you have been saved),
	</ScriptureBlock>
</Fragment>

<!-- Step 4: Question: Dead in sins; Saved by grace; Alive with Christ - how? -->
<Fragment
	step={4}
	layout={{ x: 100, y: 540, width: 750, height: 30 }}
	font={{ font_size: 28, bold: true, color: 'var(--text-level-3)', wrap: true }}
	zIndex={6}
>
	<strong>Dead in sins;  Saved by grace;  Alive with Christ - how?</strong>
</Fragment>

<!-- Step 4: Underline right (with) -->
<Fragment step={4} animate="wipe">
	<Line from={{ x: 472, y: 508 }} to={{ x: 767, y: 508 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={9} />
</Fragment>

<!-- Step 4.1: Underline left (after) -->
<Fragment step={4.1} animate="wipe">
	<Line from={{ x: 782, y: 508 }} to={{ x: 894, y: 508 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 4.2: Underline middle (after) -->
<Fragment step={4.2} animate="wipe">
	<Line from={{ x: 47, y: 532 }} to={{ x: 195, y: 532 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={8} />
</Fragment>

<!-- Step 5: Arrow to verse 8 -->
<Fragment step={5} animate="wipe-up">
	<Arrow from={{ x: 651, y: 545 }} to={{ x: 649, y: 228 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={7} />
</Fragment>

<!-- Step 5.1: Horizontal underline (after) -->
<Fragment step={5.1} animate="wipe">
	<Line from={{ x: 476, y: 223 }} to={{ x: 703, y: 223 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={12} />
</Fragment>

<!-- Step 5.1: Second horizontal line (with) -->
<Fragment step={5.1} animate="wipe">
	<Line from={{ x: 375, y: 174 }} to={{ x: 504, y: 174 }} stroke={{ width: 2, color: 'var(--stroke-level-3)' }} zIndex={11} />
</Fragment>
