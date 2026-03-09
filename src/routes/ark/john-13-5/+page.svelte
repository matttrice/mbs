<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 91, y: 22, width: 799, height: 261 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="John 13:5-8" scale="lg">
			Then He poured water into the basin, and began to wash the disciples' feet and to wipe them with the towel with which He was girded. <sup>6</sup><sup> </sup>So He came to Simon Peter. He said to Him, "Lord, do You wash my feet?" <sup>7</sup> Jesus answered and said to him, "What I do you do not realize now, but you will understand hereafter." <sup>8</sup> Peter said to Him, "Never shall You wash my feet!" Jesus answered him,"If I do not <u>wash</u> you, you have no part with Me."
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Acts 2:38 (timing: click, inline title extraction) -->
	<Fragment
		step={1}
		layout={{ x: 91, y: 282, width: 734, height: 109 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Acts 2:38" scale="lg">
			Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Acts 22:16 (timing: click, inline title extraction) -->
	<Fragment
		step={2}
		layout={{ x: 91, y: 394, width: 793, height: 109 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Acts 22:16" scale="lg">
			`Now why do you delay? Get up and be baptized, and <u>wash</u> away your sins, calling  on His name.'
		</ScriptureBlock>
	</Fragment>
</Slide>
