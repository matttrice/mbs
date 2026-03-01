<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 96, y: 91, width: 796, height: 141 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 Corinthians 5:5">
			I have decided to deliver such a one to Satan for the destruction of his flesh, so that his spirit may be saved in the day of the Lord Jesus.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 97, y: 312, width: 686, height: 97 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="John 4:24">
			God is spirit, and his worshipers must worship in spirit and in truth."
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 263, y: 438, width: 382, height: 52 }}
		font={{ font_size: 36.7 }}
	>
		Is God only a spirit?
	</Fragment>
</Slide>
