<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 2 Corinthians 5:17-20 - New Creation, Reconciliation
	 * Custom Show ID: 11 (2Corinthians5.18)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 20, width: 900, height: 45 }}
		font={{ font_size: 38, bold: true, align: 'center' }}
	>
		2 Corinthians 5:17-20
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 80, width: 880, height: 240 }}
		font={{ font_size: 24, align: 'left', wrap: true }}
		animate="fade"
	>
		Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come! All this is from God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: that God was reconciling the world to himself in Christ, not counting men's sins against them. And he has committed to us the message of reconciliation. We are therefore Christ's ambassadors, as though God were making his appeal through us. We implore you on Christ's behalf: Be reconciled to God.
	</Fragment>

	<!-- Commentary -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 360, width: 880, height: 100 }}
		font={{ font_size: 26, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Under the Law, sins are counted against mankind.<br/>
		Christ's ambassadors' sins are NOT counted against them
	</Fragment>
</Slide>
