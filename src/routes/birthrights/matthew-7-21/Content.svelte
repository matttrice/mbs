<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 91, y: 2, width: 785, height: 207 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Matthew 7:21">
		"Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only he who does the will of my Father who is in heaven. <sup>22</sup>Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name, and in your name drive out demons and perform many miracles?' <sup>23</sup>Then I will tell them plainly, '<strong>I never knew you.</strong> Away from me, you evildoers!'
	</ScriptureBlock>
</Fragment>

<!-- Step 1: How could God not know them? (drill to Galatians 4:6-9) -->
<Fragment
	step={1}
	drillTo="birthrights/galatians-4-6"
	layout={{ x: 96, y: 225, width: 272, height: 74 }}
	font={{ font_size: 16.7, align: 'center', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
>
	How could God not '<em>know them'? - They used his name -</em><br><strong>Galatians 4:6-9</strong>
</Fragment>

<!-- Step 2: God knows his Sons -->
<Fragment
	step={2}
	layout={{ x: 80, y: 299, width: 323, height: 50 }}
	font={{ font_size: 16.7, bold: true, color: 'var(--text-level-3)', align: 'center', wrap: true }}
>
	<strong>God knows his Sons - those</strong><br><strong>Born of the promise, Abraham's seed.</strong>
</Fragment>

<!-- Step 3: 2 Corinthians 11:4 scripture -->
<Fragment
	step={3}
	layout={{ x: 408, y: 190, width: 492, height: 169 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="2 Corinthians 11:4">
		And no wonder, for Satan himself masquerades as an angel of light. <sup>15</sup>It is not surprising, then, if his servants masquerade as servants of righteousness. Their end will be what their actions deserve.
	</ScriptureBlock>
</Fragment>

<!-- Step 4: Galatians 1:6 scripture -->
<Fragment
	step={4}
	layout={{ x: 408, y: 358, width: 465, height: 145 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Galatians 1:6">
		I am astonished that you are so quickly deserting the one who called you by the grace of Christ and are<strong> turning to a different gospel</strong>-- <sup>7</sup><strong>which <em>is really no gospel</em> at all</strong>.
	</ScriptureBlock>
</Fragment>

<!-- Step 5: Jesus is not just a name -->
<Fragment
	step={5}
	layout={{ x: 93, y: 374, width: 301, height: 133 }}
	font={{ font_size: 23.3, bold: true, color: 'var(--text-level-3)', align: 'center', wrap: true }}
>
	<strong>Jesus is not just a name.</strong><br>Some are born of <em>another "Jesus." </em> Many doctrines look similar but there is only one true seed and gate to salvation.
</Fragment>
