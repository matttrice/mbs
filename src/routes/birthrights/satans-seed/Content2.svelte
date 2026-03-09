<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg scripture"></div>

<ReferenceOverlay src="/export/11-Birthrights/Slide11.png" />	

<!-- Static: Romans 6:3-9 -->
<Fragment
	layout={{ x: 104, y: 12, width: 759, height: 506 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Romans 6:3-9">
		Or don't you know that all of us who were baptized into Christ Jesus were baptized into his death? <sup>4</sup> We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life. <sup>5 </sup>If we have been united with him like this in his death, we will certainly also be united with him in his resurrection.<sup> 6</sup> For we know that our old self was crucified with him so that the body of sin might be done away with, that we should no longer be slaves to sin-- <sup>7</sup> because anyone who has died has been freed from sin. <sup>8</sup> Now if we died with Christ, we believe that we will also live with him. <sup>9</sup> For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlight overlay -->
<Fragment
	step={1}
	layout={{ x: 105, y: 49, width: 407, height: 468 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={4}
>
	<ScriptureBlock>
		Or don't you know that <u>all of us who were baptized into Christ </u>Jesus were baptized into his death? <sup>4</sup> We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life. <sup>5 </sup><strong><em><u>If</u></em></strong> we have been united with him like this in his death, we will certainly also be united with him in his resurrection.<sup> 6</sup> For we know that our old self was crucified with him so that the body of sin might be done away with, that we should no longer be slaves to sin-- <sup>7</sup> because anyone who has died has been freed from sin. <sup>8</sup> Now <strong><em><u>if </u></em>we died with Christ</strong>, we believe that we will also live with him. <sup>9</sup> For we know that since Christ was raised from the dead, he cannot die again; death no longer has mastery over him.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: True seed message -->
<Fragment
	step={1}
	layout={{ x: 521, y: 17, width: 359, height: 82 }}
	font={{ font_size: 15, align: 'center', wrap: true }}
	fill="var(--bg-level-2)"
	line={{ color: 'var(--stroke-level-3)' }}
	zIndex={5}
>
	The true seed, gospel message, places a major conditional on being baptized into Christ.  Any message (seed) that teaches less is simply false doctrine, from a false Jesus that cannot save.
</Fragment>

<!-- Step 2: Large church quote -->
<Fragment
	step={2}
	layout={{ x: 521, y: 103, width: 359, height: 171 }}
	font={{ font_size: 16.7, bold: true, wrap: true }}
	fill="var(--bg-ghost)"
>
	<strong>Quoted from large evangelical church: </strong><br><em>"One last thing we need to be careful of: Making baptism something that it's not. You need to remind yourself that baptism is not a work that you do in order to earn salvation. It's simply a gift, a public, outward act that shows the change that has happened in your heart"</em>
</Fragment>

<!-- Step 3: Rebuttal -->
<Fragment
	step={3}
	layout={{ x: 515, y: 317, width: 371, height: 173 }}
	font={{ font_size: 15, wrap: true }}
	fill="var(--bg-ghost)"
>
	Baptism does <em>"earn" </em>i.e. - perfect / complete faith.<br>Baptism is the gate to the gift of the Holy Spirit.<br>The <em>"change" </em>that matters (death to sin) can't occur unless you are baptized - therefore no meaningful change has occurred until this is done.<br>Christ would never say less, nor would his servants    therefore baptism with this doctrine / seed cannot result in salvation.
</Fragment>

<!-- Step 3: James 2:14 link -->
<Fragment
	step={3}
	drillTo="birthrights/james-2-14"
	returnHere
	layout={{ x: 540, y: 281, width: 328, height: 30 }}
	font={{ font_size: 16.7 }}
	line={{ width: 3, color: 'var(--stroke-level-3)' }}
	zIndex={6}
>
	Some works are necessary: <strong>James 2:14</strong>
</Fragment>