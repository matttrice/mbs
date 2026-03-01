<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Hebrews 8:7, 13 consolidated title + body -->
	<Fragment
		layout={{ x: 102, y: 32, width: 756, height: 341 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="Hebrews 8:7, 13">
			<sup>7</sup> For if there had been nothing wrong with that first covenant, no place would have been sought for another. <br/>...............<br/><br/><sup>13 </sup>By calling this covenant "new," he has made the first one obsolete; and what is obsolete and aging will soon disappear.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: NIV label -->
	<Fragment
		layout={{ x: 748, y: 436, width: 76, height: 30 }}
		font={{ font_size: 20, wrap: true }}
		zIndex={2}
	>
		NIV
	</Fragment>
</Slide>
