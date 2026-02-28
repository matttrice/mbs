<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 84, y: 22, width: 778, height: 246 }}
	font={{ v_align: 'middle', align: 'left', wrap: true }}
	line={{ width: 1 }}
	zIndex={2}
>
	<ScriptureBlock title="2 Corinthians 10:3-6">
		For though we live in the world, we do not wage war as the world does. <sup>4</sup> The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds. <sup>5 </sup>We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ. <sup>6</sup> And we will be ready to punish every act of disobedience, once your obedience is complete. <sub>(NIV)</sub>
	</ScriptureBlock>
</Fragment>

<!-- Step 1: War decree (click) -->
<Fragment
	step={1}
	layout={{ x: 104, y: 262, width: 752, height: 34 }}
	font={{ align: 'center', font_size: 21.6, bold: true, color: 'var(--text-level-3)' }}
	line={{ width: 3 }}
	zIndex={1}
>
	<strong>When Christ became King He issued a decree of war.</strong>
</Fragment>

<!-- Step 2: Tribe ratio (click) -->
<Fragment
	step={2}
	layout={{ x: 152, y: 300, width: 657, height: 94 }}
	font={{ wrap: true, align: 'center', font_size: 24, bold: true }}
	line={{ width: 4, color: 'var(--stroke-level-0)' }}
	zIndex={5}
>
	<strong>Consider the Tutor: </strong>Physical Israel tribe ratio of 11:1 <br/>11 non-priestly tribes to 1 priestly tribe<br/>Most resources were dedicated to the 11
</Fragment>

<!-- Step 3: Church alignment question (click) -->
<Fragment
	step={3}
	layout={{ x: 108, y: 396, width: 743, height: 36 }}
	font={{ wrap: true, font_size: 24 }}
	zIndex={6}
>
	Do most contemporary "churches" align with this biblical pattern?
</Fragment>

<!-- Step 4: Priestly allocations commentary (click) -->
<Fragment
	step={4}
	layout={{ x: 70, y: 428, width: 820, height: 93 }}
	font={{ v_align: 'middle', wrap: true, font_size: 16.8, bold: true }}
	zIndex={3}
>
	<strong>Priestly allocations </strong>(multi-million dollar mega-churches, paid staff, multi-media, etc.)<br/><strong>far exceed the royal </strong>– the opposite of the tutor. <br/>In contrast, most of the New Testament scriptures focus on edification (sword training) and evangelism rather than priestly/worship activities – precisely like Israel!
</Fragment>
