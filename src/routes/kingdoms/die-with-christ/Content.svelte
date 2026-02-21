<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<!-- Slide 11: Romans 6:1-11 content -->
<div class="slide-bg scripture"></div>

<!-- Title: Romans 6:1-11 -->
<Fragment
	layout={{ x: 50, y: 25, width: 200, height: 44 }}
	font={{ font_size: 26.7, bold: true }}
	zIndex={0}
>
	Romans 6:1-11
</Fragment>

<!-- Static scripture text -->
<Fragment
	layout={{ x: 50, y: 42, width: 800, height: 272 }}
	font={{ wrap: true, font_size: 18, color: 'var(--text-level-0)' }}
	zIndex={1}
>
	What shall we say then? Are we to continue in sin so that grace may increase? 2 May it never be! How shall we who died to sin still live in it? 3 Or do you not know that all of us who have been baptized into Christ Jesus have been baptized into His death? 4 Therefore we have been buried with Him through baptism into death, so that as Christ was raised from the dead through the glory of the Father, so we too might walk in newness of life. 5 For if we have become united with Him in the likeness of His death, certainly we shall also be in the likeness of His resurrection,8 Now if we have died with Christ, we believe that we shall also live with Him,9 knowing that Christ, having been raised from the dead, is never to die again; death no longer is master over Him. 10 For the death that He died, He died to sin once for all; but the life that He lives, He lives to God. 11 Even so consider yourselves to be dead to sin, but alive to God in Christ Jesus.
</Fragment>

<!-- Step 1: Question: How does one die with Christ? -->
<Fragment
	step={1}
	layout={{ x: 293, y: 301, width: 306, height: 30 }}
	font={{ bold: true, color: 'var(--text-level-3)' }}
	zIndex={3}
	animate="fade"
>
	How does one die with Christ?
</Fragment>

<!-- Step 1: Arrow pointing down (with) -->
<Fragment step={1} animate="wipe">
	<Arrow from={{ x: 340, y: 221 }} to={{ x: 340, y: 310 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={4} />
</Fragment>

<!-- Step 2: Arrow pointing to verse 3 -->
<Fragment step={2} animate="wipe">
	<Arrow from={{ x: 332, y: 134 }} to={{ x: 332, y: 307 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={5} />
</Fragment>

<!-- Step 3: Ephesians 2:1-5 -->
<Fragment
	step={3}
	layout={{ x: 50, y: 321, width: 800, height: 190 }}
	font={{ wrap: true, font_size: 18 }}
	zIndex={2}
>
	Ephesians 2:1-5 And you were dead in your trespasses and sins, 2 in which you formerly walked according to the course of this world, according to the prince of the power of the air, of the spirit that is now working in the sons of disobedience.3 Among them we too all formerly lived in the lusts of our flesh, indulging the desires of the flesh and of the mind, and were by nature children of wrath, even as the rest. 4 But God, being rich in mercy, because of His great love with which He loved us, 5 even when we were dead in our transgressions, made us alive together with Christ (by grace you have been saved),
</Fragment>

<!-- Step 4: Question: Dead in sins; Saved by grace; Alive with Christ – how? -->
<Fragment
	step={4}
	layout={{ x: 299, y: 504, width: 551, height: 30 }}
	font={{ bold: true, color: 'var(--text-level-3)' }}
	zIndex={6}
	animate="fade"
>
	Dead in sins;  Saved by grace;  Alive with Christ – how?
</Fragment>

<!-- Step 4: Underline right (with) -->
<Fragment step={4} animate="wipe">
	<Line from={{ x: 672, y: 483 }} to={{ x: 788, y: 483 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={9} />
</Fragment>

<!-- Step 4.1: Underline left (after) -->
<Fragment step={4.1} animate="wipe">
	<Line from={{ x: 182, y: 506 }} to={{ x: 263, y: 506 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 4.2: Underline middle (after) -->
<Fragment step={4.2} animate="wipe">
	<Line from={{ x: 279, y: 506 }} to={{ x: 527, y: 506 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={8} />
</Fragment>

<!-- Step 5: Arrow to verse 8 -->
<Fragment step={5} animate="wipe">
	<Arrow from={{ x: 624, y: 224 }} to={{ x: 624, y: 510 }} stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={7} />
</Fragment>

<!-- Step 5.1: Horizontal underline (after) -->
<Fragment step={5.1} animate="wipe">
	<Line from={{ x: 514, y: 221 }} to={{ x: 718, y: 221 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={12} />
</Fragment>

<!-- Step 5.1: Second horizontal line (with) -->
<Fragment step={5.1} animate="wipe">
	<Line from={{ x: 499, y: 155 }} to={{ x: 685, y: 155 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={11} />
</Fragment>
