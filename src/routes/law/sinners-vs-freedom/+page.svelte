<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect } from '$lib/components/svg';

	/**
	 * Drill: Sinners vs Freedom - Contrasting the two states
	 */
</script>

<Slide>
	<Fragment
		layout={{ x: 163.2, y: 14.4, width: 633.6, height: 40 }}
		font={{ font_size: 36.7, bold: true }}
	>
		Sinners vs. Freedom from Sin
	</Fragment>

	<!-- Left column header - Sinners -->
	<Fragment animate="wipe-down">
		<Rect x={66.5} y={60} width={350} height={460} fill="var(--bg-level-1)" zIndex={0} />
	</Fragment>

	<Fragment
		layout={{ x: 66.5, y: 64.7, width: 350, height: 38 }}
		font={{ font_size: 28, bold: true, align: 'center', color: '#FFFFFF' }}
		fill="var(--bg-level-1)"
	>
		Sinners
	</Fragment>

	<!-- Right column header - Freedom from Sin -->
	<Fragment animate="wipe-down">
		<Rect x={543.5} y={60} width={350} height={460} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<Fragment
		layout={{ x: 543.5, y: 64.7, width: 350, height: 38 }}
		font={{ font_size: 28, bold: true, align: 'center', color: '#FFFFFF' }}
		fill="var(--bg-level-2)"
	>
		Freedom from Sin
	</Fragment>

	<!-- Left column content -->
	<Fragment
		step={1}
		layout={{ x: 76.5, y: 110, width: 330, height: 400 }}
		font={{ font_size: 22, align: 'left', v_align: 'top', wrap: true }}
	>
		• Slaves to sin (Rom 6:17)<br/><br/>
		• Under the law (Rom 6:14)<br/><br/>
		• Wages of sin is death (Rom 6:23)<br/><br/>
		• Unrighteous will not inherit (1 Cor 6:9)<br/><br/>
		• Condemned already (John 3:18)
	</Fragment>

	<!-- Right column content -->
	<Fragment
		step={2}
		layout={{ x: 553.5, y: 110, width: 330, height: 400 }}
		font={{ font_size: 22, align: 'left', v_align: 'top', wrap: true }}
	>
		• Slaves to righteousness (Rom 6:18)<br/><br/>
		• Under grace (Rom 6:14)<br/><br/>
		• Gift of God is eternal life (Rom 6:23)<br/><br/>
		• Washed, sanctified, justified (1 Cor 6:11)<br/><br/>
		• No condemnation (Rom 8:1)
	</Fragment>
</Slide>
