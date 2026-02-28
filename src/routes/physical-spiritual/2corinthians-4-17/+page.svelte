<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 78, y: 61, width: 804, height: 334 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="2 Corinthians 4:17">
			For momentary, light affliction is producing for us an eternal weight of glory far beyond all comparison,<sup>18 </sup>while we <strong>look not at the things which are seen</strong>, but at the things which are <br/><strong>not seen</strong>; <br/>for the <strong>things which are <u>seen are temporal</u></strong>, but the <strong>things which are <u>not seen are eternal</u></strong>.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 805, y: 424, width: 77, height: 26 }}
		font={{ font_size: 16.7 }}
		zIndex={2}
	>
		NASB95
	</Fragment>
</Slide>
