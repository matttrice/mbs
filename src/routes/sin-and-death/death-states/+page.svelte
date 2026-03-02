<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<!-- Genesis 3:19 label -->
	<Fragment
		layout={{ x: 90, y: 26, width: 272, height: 43 }}
		line={{ width: 1 }}
		font={{ font_size: 35 }}
	>
		Genesis 3:19
	</Fragment>

	<!-- Death as a Process -->
	<Fragment
		layout={{ x: 432, y: 25, width: 379, height: 44 }}
		font={{ font_size: 40, bold: true }}
	>
		Death as a Process
	</Fragment>

	<!-- Genesis 3:19 text (static) -->
	<Fragment
		layout={{ x: 89, y: 65, width: 768, height: 123 }}
		font={{ font_size: 30, wrap: true }}
	>
		By the sweat of your brow you will eat your food until you<br>return to the ground, since from it you were taken; for dust<br>you are and to dust you will return."
	</Fragment>

	<!-- Death as an Event -->
	<Fragment
		layout={{ x: 442, y: 214, width: 398, height: 44 }}
		line={{ width: 1 }}
		font={{ font_size: 40, color: '#FF8000' }}
	>
		Death as an Event
	</Fragment>

	<!-- Ezekiel 18:4 (static, scripture) -->
	<Fragment
		layout={{ x: 90, y: 210, width: 784, height: 132 }}
		line={{ width: 1 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Ezekiel 18:4">
			"Behold, all souls are Mine; the soul of the father as well<br> as the soul of the son is Mine. The soul  who sins will die.
		</ScriptureBlock>
	</Fragment>

	<!-- Death as a State -->
	<Fragment
		layout={{ x: 442, y: 371, width: 398, height: 41 }}
		line={{ width: 1 }}
		font={{ font_size: 40, color: 'var(--bg-cmd-law)' }}
	>
		Death as a State
	</Fragment>

	<!-- Ephesians 2:1 (static, scripture) -->
	<Fragment
		layout={{ x: 89, y: 375, width: 801, height: 151 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Ephesians 2:1">
			As for you, you were dead in your transgressions and sins,<br><sup>2</sup> in which you used to live when you followed the ways<br>of this world...
		</ScriptureBlock>
	</Fragment>
</Slide>
