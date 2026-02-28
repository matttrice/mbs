<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 99, y: 53, width: 773, height: 302 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Colossians 1:15-16">
			He is the image of the invisible God, the firstborn of all creation.  <sup>16</sup>For by Him <u>all things were created</u>, both in the <strong>heavens and on earth, visible and invisible</strong>, whether thrones or dominions or rulers or authorities--<u>all things</u> have been created through Him and for Him.
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
