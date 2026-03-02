<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<!-- Ezekiel 18:4 (static) -->
	<Fragment
		layout={{ x: 111, y: 65, width: 684, height: 135 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Ezekiel 18:4" scale="lg">
			"Behold, all souls are Mine; the soul of the father as well as the soul of the son is Mine. The soul who sins will die.
		</ScriptureBlock>
	</Fragment>

	<!-- Ephesians 2:1-2 (step 1) -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 251, width: 768, height: 220 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Ephesians 2:1-2" scale="lg">
			And you were dead in your trespasses and sins in which you formerly walked according to the course of this world, according to the prince of the power of the air, of the spirit that is now working in the sons of disobedience.
		</ScriptureBlock>
	</Fragment>
</Slide>
