<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 91, y: 22, width: 175, height: 32 }}
		font={{ font_size: 30, bold: true, align: 'left' }}
	>
		John 13:5-8
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 91, y: 49, width: 799, height: 234 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		5 Then He poured water into the basin, and began to wash the disciples' feet and to wipe them with the towel with which He was girded. 6 So He came to Simon Peter. He said to Him, "Lord, do You wash my feet?" 7 Jesus answered and said to him, "What I do you do not realize now, but you will understand hereafter." 8 Peter said to Him, "Never shall You wash my feet!" Jesus answered him, "If I do not wash you, you have no part with Me."
	</Fragment>

	<!-- Step 1: Acts 2:38 (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 91, y: 300, width: 734, height: 109 }}
		font={{ font_size: 30, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<strong>Acts 2:38</strong> Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.
	</Fragment>

	<!-- Step 2: Acts 22:16 (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 91, y: 394, width: 793, height: 109 }}
		font={{ font_size: 30, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<strong>Acts 22:16</strong> Now why do you delay? Get up and be baptized, and wash away your sins, calling  on His name.
	</Fragment>
</Slide>
