<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 111, y: 73, width: 768, height: 309 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Romans 1:20">
			<sup>20</sup>For since the creation of the world God's invisible qualities--his eternal power and divine nature--have been clearly seen, being understood from what has been made, so that men are without excuse. <br/>
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 170, y: 382, width: 650, height: 42 }}
		font={{ font_size: 30, bold: true, color: 'var(--text-level-3)', wrap: true }}
		zIndex={2}
	>
		<strong>How can <u>invisible qualities</u> be <u>clearly seen</u>? </strong>
	</Fragment>
</Slide>
