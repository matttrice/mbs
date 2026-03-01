<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 71, y: 81, width: 836, height: 184 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 Thessalonians 5:23" scale="lg">
			Now may the God of peace Himself sanctify you entirely; and may your spirit and soul and body be kept complete, without blame at the coming of our Lord Jesus Christ.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 474, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
