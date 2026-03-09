<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
    import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<ReferenceOverlay src="/export/11-Birthrights/Slide8.png" />	

<!-- Step 1: Genesis 3:13 -->
<Fragment
	step={1}
	layout={{ x: 72, y: 5, width: 800, height: 110 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={7}
>
	<ScriptureBlock title="Genesis 3:13">
		Then the LORD God said to the woman, "What is this you have<br>done?" The woman said, "The serpent deceived me, and I ate."
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Genesis 3:14 verse -->
<Fragment
	step={2}
	layout={{ x: 76, y: 113, width: 781, height: 210 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock>
		<sup>14</sup> So the LORD God said to the serpent, "Because you have done this,<br>      "Cursed are you above all the livestock<br>       and all the wild animals!<br>       You will crawl on your belly<br>       and you will eat dust<br>       all the days of your life.
	</ScriptureBlock>
</Fragment>

<!-- Step 3: Genesis 3:15 first part -->
<Fragment
	step={3}
	layout={{ x: 72, y: 309, width: 538, height: 95 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={2}
>
	<ScriptureBlock>
		<sup>15</sup> And I will put enmity<br>       between you and the woman,<br>       and between your offspring and hers;
	</ScriptureBlock>
</Fragment>

<!-- Step 4: Genesis 3:15 second part -->
<Fragment
	step={4}
	layout={{ x: 129, y: 397, width: 420, height: 66 }}
	font={{ font_size: 26.7, wrap: true }}
>
	he will crush your head, and<br>you will strike his heel."
</Fragment>

<!-- Step 5: Overlay first verse -->
<Fragment
	step={5}
	layout={{ x: 69, y: 50, width: 800, height: 66 }}
	font={{ font_size: 26.7, wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={5}
>
	Then the LORD God said to the <strong>woman</strong>, "What is this you have<br>done?" The woman said, "The <strong>serpent</strong> deceived me, and I ate."
</Fragment>

<!-- Step 6: Overlay Genesis 3:15 -->
<Fragment
	step={6}
	layout={{ x: 74, y: 309, width: 554, height: 101 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={6}
>
	<ScriptureBlock>
		<sup>15</sup> And I <strong>will put enmity</strong><br>       between <strong>you</strong> and the <strong>woman</strong>,<br>       and between <strong>your offspring</strong> and <strong>hers;</strong>
	</ScriptureBlock>
</Fragment>

<!-- Step 7: Highlight "crush your head" -->
<Fragment
	step={7}
	layout={{ x: 129, y: 402, width: 418, height: 67 }}
	font={{ font_size: 30.8, bold: true, color: 'var(--text-level-3)', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={4}
>
	<strong>he</strong> will crush <strong>your</strong> head, and<br><strong>you</strong> will strike <strong>his</strong> heel."
</Fragment>

<!-- Step 8: Who is the Woman? -->
<Fragment
	step={8}
	layout={{ x: 548, y: 308, width: 260, height: 50 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)', align: 'center', v_align: 'middle' }}
>
	Who is the Woman?
</Fragment>

<!-- Step 8: Arrow to woman -->
<Fragment step={8} animate="draw">
	<Arrow from={{ x: 486, y: 346 }} to={{ x: 548, y: 363 }} stroke={{ width: 3 }} headSize={2} zIndex={5} />
</Fragment>

<!-- Step 9: Christ -->
<Fragment
	step={9}
	layout={{ x: 586, y: 343, width: 147, height: 38 }}
	font={{ font_size: 39.2, bold: true, align: 'center', v_align: 'middle' }}
>
	Christ
</Fragment>

<!-- Step 10: Who is the Serpent? -->
<Fragment
	step={10}
	layout={{ x: 617, y: 384, width: 278, height: 51 }}
	font={{ font_size: 26.7, bold: true, color: '#FF0000', align: 'center', v_align: 'middle' }}
>
	Who is the Serpent?
</Fragment>

<!-- Step 10: Arrow to serpent -->
<Fragment step={10} animate="draw">
	<Arrow from={{ x: 287, y: 371 }} to={{ x: 617, y: 417 }} stroke={{ width: 3 }} headSize={2} zIndex={5} />
</Fragment>

<!-- Step 11: Satan -->
<Fragment
	step={11}
	layout={{ x: 618, y: 412, width: 124, height: 55 }}
	font={{ font_size: 39.2, bold: true, align: 'center' }}
>
	Satan
</Fragment>

<!-- Step 12: Who are his offspring? -->
<Fragment
	step={12}
	layout={{ x: 603, y: 455, width: 278, height: 28 }}
	font={{ font_size: 20, bold: true, color: '#FF0000', align: 'center', v_align: 'middle' }}
>
	Who are his offspring?
</Fragment>

<!-- Step 13: Those born of false seed -->
<Fragment
	step={13}
	layout={{ x: 633, y: 474, width: 240, height: 57 }}
	font={{ font_size: 20, align: 'center', v_align: 'middle' }}
>
	Those "born" of false seed, doctrine, teaching
</Fragment>

<!-- Step 14: Arrow to heel -->
<Fragment step={14} animate="draw">
	<Arrow from={{ x: 151, y: 434 }} to={{ x: 223, y: 489 }} stroke={{ width: 3 }} headSize={2} zIndex={5} />
</Fragment>

<!-- Step 14.1: Fatal (500ms delay) -->
<Fragment
	step={14.1}
	layout={{ x: 126, y: 481, width: 98, height: 50 }}
	font={{ font_size: 35, bold: true, color: 'var(--text-level-3)' }}
>
	Fatal
</Fragment>

<!-- Step 14.2: Arrow to strike -->
<Fragment step={14.2} animate="draw">
	<Arrow from={{ x: 293, y: 467 }} to={{ x: 301, y: 492 }} stroke={{ width: 3 }} headSize={2} zIndex={5} />
</Fragment>

<!-- Step 14.3: Frustrating (1500ms delay) -->
<Fragment
	step={14.3}
	layout={{ x: 279, y: 481, width: 202, height: 50 }}
	font={{ font_size: 35, bold: true, color: '#FF0000' }}
>
	Frustrating
</Fragment>

<!-- Static: Battle consideration -->
<Fragment
	layout={{ x: 519, y: 189, width: 341, height: 114 }}
	font={{ font_size: 26.7, bold: true, wrap: true }}
	zIndex={12}
>
	<strong>Consider when the battle between seeds </strong><em>(doctrine)</em><strong> began...</strong>
</Fragment>
