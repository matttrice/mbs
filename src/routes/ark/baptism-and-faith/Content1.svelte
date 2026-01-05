<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arc } from '$lib/components/svg';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg"></div>
<ReferenceOverlay src="/export/08-The_Ark/Slide8.png" />

<!-- Static: Title -->
<Fragment
	layout={{ x: 58, y: 11, width: 366, height: 36 }}
	font={{ font_size: 26.7, bold: true, color: '#000000', align: 'left' }}
>
	Romans 6:3-7, 17-18, 22-23
</Fragment>

<!-- Static: Main scripture -->
<Fragment
	layout={{ x: 58, y: 39, width: 865, height: 178 }}
	font={{ font_size: 20, color: '#000000', v_align: 'middle', align: 'left', wrap: true }}
	line={{ width: 1 }}
>
	Or do you not know that all of us who have been baptized into Christ Jesus have been baptized into His death? 4 Therefore we have been buried with Him through baptism into death, so that as Christ was raised  from the dead through the glory of the Father, so we too might walk in newness of life. 5 For if we have become united with Him in the likeness of His death, certainly we shall also be in the likeness of His resurrection, 6 knowing this, that our old self was crucified with Him, in order that our body of sin might be done away with, so that we would no longer be slaves to sin; 7 for he who has died is freed from sin.
</Fragment>

<!-- Step 1: Baptism label (timing: click) -->
<Fragment
	step={1}
	layout={{ x: 421, y: 389, width: 162, height: 52 }}
	font={{ font_size: 36.7, bold: true, align: 'left' }}
	line={{ width: 1 }}
>
	Baptism
</Fragment>

<!-- Step 1: = sign (timing: with) -->
<Fragment
	step={1}
	layout={{ x: 571, y: 394, width: 34, height: 45 }}
	font={{ font_size: 30.8, bold: true }}
	line={{ width: 1 }}
>
	=
</Fragment>

<!-- Step 1: Death, Burial (timing: with) -->
<Fragment
	step={1}
	layout={{ x: 396, y: 433, width: 208, height: 40 }}
	font={{ font_size: 30, bold: true, color: '#000000', align: 'left' }}
	line={{ width: 1 }}
>
	Death, Burial
</Fragment>

<!-- Step 1: Arc arrow (timing: with) -->
<Fragment step={1} animate="draw">
	<Arc from={{ x: 609, y: 416 }} to={{ x: 519, y: 500 }} curve={-68} stroke={{ width: 17, color: '#000000' }} arrow zIndex={1} />
</Fragment>

<!-- Step 2: United in Death & Resurrection (timing: click) -->
<Fragment
	step={2}
	layout={{ x: 617, y: 398, width: 331, height: 34 }}
	font={{ font_size: 20, v_align: 'middle', align: 'left' }}
	line={{ width: 1 }}
>
	United in Death & Resurrection
</Fragment>

<!-- Step 2.1: Person Who Dies = Free from Sin (timing: after 500ms) -->
<Fragment
	step={2.1}
	layout={{ x: 642, y: 449, width: 299, height: 29 }}
	font={{ font_size: 20, v_align: 'middle', align: 'left' }}
>
	Person Who Dies = Free from Sin
</Fragment>

<!-- Step 3: 17-18 scripture (timing: click) -->
<Fragment
	step={3}
	layout={{ x: 58, y: 228, width: 846, height: 81 }}
	font={{ font_size: 20, italic: true, v_align: 'middle', align: 'left', wrap: true }}
>
	17...though you were slaves of sin, you became obedient from the heart to that form of teaching to which you were committed, 18 and having been freed from sin, you became slaves of righteousness…
</Fragment>

<!-- Step 4: Freed of Sin = Slave of Righteousness (timing: click) -->
<Fragment
	step={4}
	layout={{ x: 654, y: 494, width: 256, height: 30 }}
	font={{ font_size: 20, v_align: 'middle', align: 'center' }}
>
	Freed of Sin = Slave of Righteousness
</Fragment>

<!-- Step 5: 22-23 scripture (timing: click) -->
<Fragment
	step={5}
	layout={{ x: 58, y: 314, width: 875, height: 81 }}
	font={{ font_size: 20, italic: true, v_align: 'middle', align: 'left', wrap: true }}
>
	22 But now having been freed from sin and enslaved to God, you derive your benefit, resulting in sanctification, and the outcome, eternal life. 23 For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
</Fragment>

<!-- Step 6: Arc arrow returning (timing: click) -->
<Fragment step={6} animate="draw">
	<Arc from={{ x: 300, y: 417 }} to={{ x: 465, y: 500 }} curve={-66} stroke={{ width: 17, color: '#000000' }} arrow headSize={2} zIndex={2} />
</Fragment>

<!-- Step 6.1: Slave's Benefit = Sanctification (timing: after 500ms) -->
<Fragment
	step={6.1}
	layout={{ x: 91, y: 488, width: 189, height: 24 }}
	font={{ font_size: 20, v_align: 'middle', align: 'center' }}
>
	Slave's Benefit = Sanctification
</Fragment>

<!-- Step 6.2: Sanctification = Eternal life (timing: after 1000ms) -->
<Fragment
	step={6.2}
	layout={{ x: 18, y: 457, width: 242, height: 24 }}
	font={{ font_size: 20, v_align: 'middle', align: 'left' }}
>
	Sanctification = Eternal life
</Fragment>

<!-- Step 6.3: Resurrection = Free Gift of God = Eternal life (timing: after 1500ms) -->
<Fragment
	step={6.3}
	layout={{ x: 28, y: 394, width: 298, height: 59 }}
	font={{ font_size: 20, bold: true, color: '#0000FF', v_align: 'middle' }}
	line={{ width: 1 }}
>
	Resurrection = Free Gift of God = Eternal life
</Fragment>
