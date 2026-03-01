<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 114, y: 121, width: 742, height: 195 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 4:12">
			For the word of God is living and active and sharper than any two-edged sword, and piercing as far as the <u>division of soul</u> and <u>spirit</u>, of both joints and marrow, and able to judge the thoughts and intentions of the heart.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 841, y: 442, width: 50, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NIV
	</Fragment>
</Slide>
