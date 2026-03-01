<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Romans 8:18 consolidated title + body -->
	<Fragment
		layout={{ x: 86, y: 7, width: 794, height: 109 }}
		font={{ wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Romans 8:18">
			I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: 2 Corinthians 4:17-18 (click) -->
	<Fragment
		step={1}
		layout={{ x: 86, y: 114, width: 788, height: 180 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Corinthians 4:17-18">
			For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. <sup>18 </sup>So we fix our eyes not on what is seen, but on what is unseen. For what is seen is temporary, but what is unseen is eternal.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 2 Timothy 2:8-10 (click) -->
	<Fragment
		step={2}
		layout={{ x: 86, y: 282, width: 796, height: 244 }}
		font={{ wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="2 Timothy 2:8-10">
			Remember Jesus Christ, raised from the dead, descended from David. This is my gospel, <sup>9</sup> for which I am suffering even to the point of being chained like a criminal. But God's word is not chained. <sup>10 </sup>Therefore I endure everything for the sake of the elect, that they too may obtain the salvation that is in Christ Jesus, with eternal glory.
		</ScriptureBlock>
	</Fragment>
</Slide>
