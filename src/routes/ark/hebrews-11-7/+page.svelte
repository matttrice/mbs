<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture NASB (consolidated title + body) -->
	<Fragment
		layout={{ x: 104, y: 36, width: 763, height: 163 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Hebrews 11:7" version="NASB" scale="lg">
			By faith Noah, being warned <em>by God</em> about things not yet seen, in reverence <u>prepared an ark</u> <u>for the salvation</u> of his household, by which he condemned the world, and became an heir of the righteousness which is according to faith.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Scripture NIV (inline title extraction) -->
	<Fragment
		layout={{ x: 106, y: 232, width: 651, height: 156 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 11:7" version="NIV" scale="lg">
			By faith Noah, when warned about things not yet seen, in holy fear <u>built an ark</u> <u>to save</u> his family. By his faith he condemned the world and became heir of the righteousness that is in keeping with faith.
		</ScriptureBlock>
	</Fragment>
</Slide>
