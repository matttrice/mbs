<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 80, y: 14, width: 331, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	Matthew 7:21
</Fragment>

<!-- Static: Scripture text -->
<Fragment
	layout={{ x: 80, y: 50, width: 323, height: 172 }}
	font={{ font_size: 18.3, wrap: true }}
>
	"Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only he who does the will of my Father who is in heaven. 22Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name, and in your name drive out demons and perform many miracles?' 23 Then I will tell them plainly, 'I never knew you. Away from me, you evildoers!'
</Fragment>

<!-- Step 1: Galatians 4:6-9 link -->
<Fragment
	step={1}
	drillTo="birthrights/galatians-4-6"
	layout={{ x: 96, y: 225, width: 272, height: 74 }}
	font={{ font_size: 16.7, v_align: 'middle', wrap: true, align: 'center' }}
	fill="var(--color-bg-light)"
	line={{ width: 1, color: '#000000' }}
>
	How could God not 'know them'? – They used his name –Galatians 4:6-9
</Fragment>

<!-- Step 2: God knows his Sons -->
<Fragment
	step={2}
	layout={{ x: 80, y: 299, width: 323, height: 50 }}
	font={{ font_size: 16.7, bold: true, color: '#0000FF', align: 'center' }}
>
	God knows his Sons – thoseBorn of the promise, Abraham's seed.
</Fragment>

<!-- Step 3: 2 Corinthians 11:4 header -->
<Fragment
	step={3}
	layout={{ x: 408, y: 190, width: 365, height: 40 }}
	font={{ font_size: 26.7, bold: true, wrap: true }}
>
	2 Corinthians 11:4
</Fragment>

<!-- Step 3: Scripture text -->
<Fragment
	step={3}
	layout={{ x: 408, y: 220, width: 492, height: 139 }}
	font={{ font_size: 21.7, wrap: true }}
>
	And no wonder, for Satan himself masquerades as an angel of light. 15It is not surprising, then, if his servants masquerade as servants of righteousness. Their end will be what their actions deserve.
</Fragment>

<!-- Step 4: Galatians 1:6 -->
<Fragment
	step={4}
	layout={{ x: 408, y: 358, width: 465, height: 145 }}
	font={{ font_size: 26.7, bold: true, wrap: true }}
>
	Galatians 1:6I am astonished that you are so quickly deserting the one who called you by the grace of Christ and are turning to a different gospel— 7which is really no gospel at all.
</Fragment>

<!-- Step 5: Jesus is not just a name -->
<Fragment
	step={5}
	layout={{ x: 93, y: 374, width: 301, height: 133 }}
	font={{ font_size: 23.3, bold: true, color: '#0000FF', wrap: true, align: 'center' }}
>
	Jesus is not just a name.Some are born of another "Jesus."  Many doctrines look similar but there is only one true seed and gate to salvation.
</Fragment>
