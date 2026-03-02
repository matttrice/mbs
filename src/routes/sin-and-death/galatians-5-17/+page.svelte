<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<!-- Galatians 5:17 (static) -->
	<Fragment
		layout={{ x: 76, y: 56, width: 805, height: 138 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Galatians 5:17" scale="lg">
			For the  flesh sets  its desire against the Spirit, and the <br>Spirit against the flesh; for these are in opposition to one <br>another, so that you may not do the things that you please.
		</ScriptureBlock>
	</Fragment>

	<!-- Romans 6:12 (static) -->
	<Fragment
		layout={{ x: 82, y: 185, width: 789, height: 108 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 6:12" scale="lg">
			Therefore do not let sin reign  in your mortal body so that <br>you obey its lusts,
		</ScriptureBlock>
	</Fragment>

	<!-- James 1:14-15 (static) -->
	<Fragment
		layout={{ x: 79, y: 312, width: 798, height: 186 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="James 1:14-15" scale="lg">
			But each one is tempted when he is carried away and <br>enticed by his own lust. <sup>15</sup> Then when  lust has conceived, <br>it gives birth to sin; and when sin  is  accomplished, <br>it brings forth death.
		</ScriptureBlock>
	</Fragment>
</Slide>
