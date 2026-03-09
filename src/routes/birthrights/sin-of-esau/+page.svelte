<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
<!-- Static scripture -->
<Fragment
	layout={{ x: 106, y: 33, width: 763, height: 214 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Romans 8:5-8">
		Those who live according to the sinful nature have their minds set on what that nature desires; but those who live in accordance with the Spirit have their minds set on what the Spirit desires. <sup>6</sup>The mind of sinful man is death, but the mind controlled by the Spirit is life and peace; <sup>7</sup>the sinful mind is hostile to God. It <strong>does not submit to God's law</strong>, nor can it do so. <sup>8</sup><strong>Those controlled by the sinful nature cannot please God. </strong>
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Genesis 25:23 -->
<Fragment
	step={1}
	layout={{ x: 106, y: 265, width: 758, height: 135 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Genesis 25:23">
		The LORD said to her, "Two nations are in your womb, and two peoples from within you will be separated; one people will be stronger than the other, and the older will serve the younger."
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Commentary -->
<Fragment
	step={2}
	layout={{ x: 155, y: 411, width: 682, height: 82 }}
	font={{ font_size: 20, wrap: true, align: 'center' }}
	fill="var(--bg-ghost)"
>
	Esau cared more for filling his stomach than keeping his inheritance and therefore serves as an example of the physically minded people of the world.
</Fragment>

</Slide>
