<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 68, y: 39, width: 827, height: 385 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Romans 4:14-16">
			For if those who are of the Law are heirs, then faith is made void and<br>the promise is nullified; <sup>15</sup> for the <u>Law brings about wrath, but where </u><br><u>there is no law, there also is no violation</u>. <br><sup>16</sup> For <u>this reason</u> it is by faith, in order that it may be in accordance <br>with grace, so that the promise will be guaranteed to all the <br>descendants, not only to those who are of the Law, but also to those <br>who are of the faith of Abraham, who is the father of us all, <br><sup>17</sup> (as it is written: "I have made you a father of many nations") in the <br>presence of Him whom he believed, that is, God, who gives life to the<br> dead and calls into being things that do not exist.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 190, y: 452, width: 560, height: 46 }}
		font={{ align: 'center', font_size: 30, italic: true }}
		line={{ width: 5, color: 'var(--stroke-level-2)' }}
	>
		<em>What then is the Church under?</em>
	</Fragment>
</Slide>
