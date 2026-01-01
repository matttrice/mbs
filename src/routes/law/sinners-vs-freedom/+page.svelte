<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Sinners vs. Freedom - Reconciliation
	 * Custom Show ID: 19 (SinnersVsSinless)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 900, height: 45 }}
		font={{ font_size: 38, bold: true, align: 'center' }}
	>
		Sinners vs. Freedom
	</Fragment>

	<!-- Left column: We have sin -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 65, width: 450, height: 200 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>1 John 1:8</strong><br/>
		If we say that we have no sin, we are deceiving ourselves and the truth is not in us.<br/><br/>
		<strong>1 John 1:10</strong><br/>
		If we say that we have not sinned, we make Him a liar and His word is not in us.
	</Fragment>

	<!-- Right column: Set free from sin -->
	<Fragment
		step={2}
		layout={{ x: 490, y: 65, width: 440, height: 200 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Romans 6:18</strong><br/>
		You have been set free from sin..<br/><br/>
		<strong>1 John 5:18</strong><br/>
		We know that no one who is born of God sins;
	</Fragment>

	<!-- Question -->
	<Fragment
		step={3}
		layout={{ x: 30, y: 280, width: 900, height: 40 }}
		font={{ font_size: 28, bold: true, align: 'center', color: '#CC0000' }}
		animate="fade"
	>
		Which is it? Does the Church have sin or not?
	</Fragment>

	<!-- Resolution -->
	<Fragment
		step={4}
		layout={{ x: 30, y: 330, width: 900, height: 100 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>2 Corinthians 5:18-19</strong><br/>
		God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: that God was reconciling the world to himself in Christ, not counting men's sins against them.
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 30, y: 435, width: 450, height: 80 }}
		font={{ font_size: 17, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Romans 4:8</strong><br/>
		"Blessed is the one whose sin the Lord will never count against them."
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 490, y: 435, width: 440, height: 80 }}
		font={{ font_size: 17, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Psalm 32:1</strong><br/>
		How blessed is he whose transgression is forgiven, whose sin is covered!
	</Fragment>

	<!-- Conclusion -->
	<Fragment
		step={5}
		layout={{ x: 30, y: 520, width: 900, height: 25 }}
		font={{ font_size: 20, italic: true, align: 'center', color: '#0000CC' }}
		animate="fade"
	>
		In Christ, sins are not counted. Christ covers the sins of the Church.
	</Fragment>
</Slide>
