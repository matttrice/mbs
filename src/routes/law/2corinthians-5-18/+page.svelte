<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 52, y: 24, width: 883, height: 371 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="2 Corinthians 5:17-20">
			Therefore, if anyone is in Christ, he is a new creation; the old has <br>gone, the new has come! <sup>18</sup> All this is from God, who reconciled us<br>to himself through Christ and gave us the ministry of reconciliation:<br><sup>19</sup> that God was reconciling the world to himself in Christ, not <br>counting men's sins against them. And he has committed to us <br>the message of reconciliation. <sup>20</sup> We are therefore Christ's <br>ambassadors, as though God were making his appeal through <br>us. We implore you on Christ's behalf: Be reconciled to God.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 99, y: 384, width: 782, height: 94 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, wrap: true }}
		fill="var(--bg-level-2)"
	>
		Under the Law, sins <em><u>are</u></em> counted against mankind.<br>Christ's ambassadors' sins <em><u>are NOT</u></em> counted against them
	</Fragment>
</Slide>
