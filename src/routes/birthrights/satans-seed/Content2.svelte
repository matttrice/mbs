<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg scripture"></div>

<ReferenceOverlay src="/export/11-Birthrights/Slide11.png" />	

<!-- Static: Title -->
<Fragment
	layout={{ x: 172, y: 12, width: 100, height: 44 }}
	font={{ font_size: 36, bold: true }}
	zIndex={2}
>
	Romans 6:3-9
</Fragment>

<!-- Static: Scripture text -->
<Fragment
	step={1}
	layout={{ x: 100, y: 40, width: 409, height: 468 }}
	font={{ font_size: 20, wrap: true }}
>
	Or don't you know that all of us who were baptized into Christ Jesus were baptized into his death? 4 We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life. 5 If we have been united with him like this in his death, we will certainly also be united with him in his resurrection. 6 For we know that our old self was crucified with him so that the body of sin might be done away with, that we should no longer be slaves to sin— 7 because anyone who has died has been freed from sin. 8 Now if we died with Christ, we believe that we will also live with him. 9 For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him.
</Fragment>

<!-- Step 1: Highlight scripture -->
<Fragment
	step={2}
	layout={{ x: 100, y: 40, width: 409, height: 468 }}
	font={{ font_size: 20, wrap: true }}
	fill="var(--color-bg-light)"
>
	Or don't you know that <u>all of us who were baptized into Christ Jesus</u> were baptized into his death? 4 We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life. 5 If we have been united with him like this in his death, we will certainly also be united with him in his resurrection. 6 For we know that our old self was crucified with him so that the body of sin might be done away with, that we should no longer be slaves to sin— 7 because anyone who has died has been freed from sin. 8 Now if we died with Christ, we believe that we will also live with him. 9 For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him.
</Fragment>

<!-- Step 1: True seed message -->
<Fragment
	step={3}
	layout={{ x: 521, y: 17, width: 359, height: 82 }}
	font={{ font_size: 15, align: 'center', wrap: true }}
	fill="var(--color-level2)"
	line={{ color: 'var(--color-stroke-darkest)' }}
>
	The true seed, gospel message, places a major conditional on being baptized into Christ. Any message (seed) that teaches less is simply false doctrine, from a false Jesus that cannot save.
</Fragment>

<!-- Step 2: Large church quote -->
<Fragment
	step={4}
	layout={{ x: 521, y: 103, width: 359, height: 160 }}
	font={{ font_size: 16.7, wrap: true }}
	line={{ color: 'var(--color-stroke-darkest)', width: 1 }}
>
	<strong>Quoted from large evangelical church:</strong><br><i>"One last thing we need to be careful of, Making baptism something that it's not. You need to remind yourself that baptism is not a work that you do in order to earn salvation. It's simply a gift, a public, outward act that shows the change that has happened in your heart"</i>
</Fragment>

<!-- Step 3: James 2:14 link -->
<Fragment
	step={5}
	drillTo="birthrights/james-2-14"
	returnHere
	layout={{ x: 540, y: 281, width: 328, height: 30 }}
	font={{ font_size: 16.7 }}
	line={{ width: 3, color: 'var(--color-level3)' }}
>
	Some works are necessary: James 2:14
</Fragment>

<!-- Step 3: Rebuttal -->
<Fragment
	step={6}
	layout={{ x: 500, y: 317, width: 400, height: 173 }}
	font={{ font_size: 15, wrap: true }}
	fill="var(--color-bg-light)"
>
	<ul>
	<li>Baptism <i>does</i> "earn" i.e. "result" in perfect / complete faith. </li>
	<li>Baptism is the gate to the gift of the Holy Spirit. </li>
	<li>The "change" that matters (death to sin) can't occur unless you are baptized – therefore no meaningful change has occurred until this is done.</li>
	<li><strong>Christ would never say less, nor would his servants </strong> 
		therefore a doctrine / seed with optional, not-required baptism cannot result in salvation.</li>
	</ul>
</Fragment>