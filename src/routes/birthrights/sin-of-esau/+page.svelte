<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
<!-- Title -->
<Fragment
	layout={{ x: 91, y: 8, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	Romans 8:5
</Fragment>

<!-- Step 1: Scripture text -->
<Fragment
	layout={{ x: 91, y: 48, width: 762, height: 200 }}
	font={{ font_size: 23.3, wrap: true }}
>
	Those who live according to the sinful nature have their minds set on what that nature desires; but those who live in accordance with the Spirit have their minds set on what the Spirit desires. 6 The mind of sinful man is death, but the mind controlled by the Spirit is life and peace; 7 the sinful mind is hostile to God. <strong>It does not submit to God's law,</strong> nor can it do so. 8 Those controlled by the sinful nature cannot please God. .
</Fragment>

<!-- Title -->
<Fragment
	step={1}
	layout={{ x: 91, y: 250, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	Genesis 25:23
</Fragment>

<!-- Step 1: Scripture text -->
<Fragment
	step={1}
	layout={{ x: 91, y: 260, width: 762, height: 200 }}
	font={{ font_size: 23.3, wrap: true }}
>
	"The LORD said to her, "Two nations are in your womb, and two peoples from within you will be separated; one people will be stronger than the other, and the older will serve the younger."
</Fragment>

<Fragment
	step={2}
	layout={{ x: 70, y: 420, width: 850, height: 100}}
	font={{ font_size: 23.3, wrap: true, bold: true, align: 'center' }}
	fill="var(--bg-level-1)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}	 
>
	Esau cared more for filling his stomach than keeping his inheritance and therefore serves as an example of the physically minded people of the world.
</Fragment>

</Slide>
