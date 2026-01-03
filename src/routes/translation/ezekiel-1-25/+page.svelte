<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Ezekiel 1:25-28 -->
	<Fragment
		layout={{ x: 56, y: 23, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Ezekiel 1:25-28
	</Fragment>

	<!-- Scripture text (first passage) -->
	<Fragment
		layout={{ x: 56, y: 66, width: 845, height: 262 }}
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={1}
	>
		Then there came a voice from above the expanse over their heads as they stood with lowered wings. 26 Above the expanse over their heads was what looked like a throne of sapphire, and high above on the throne was a figure like that of a man. 27 I saw that from what appeared to be his waist up he looked like glowing metal, as if full of fire, and that from there down he looked like fire; and brilliant light surrounded him. 28 Like the appearance of a rainbow in the clouds on a rainy day, so was the radiance around him.       This was the appearance of the likeness of the glory of the LORD. When I saw it, I fell facedown, and I heard the voice of one speaking.
	</Fragment>

	<!-- Title: Ezekiel 8:1-2 / Daniel 10:4 -->
	<Fragment
		layout={{ x: 56, y: 329, width: 756, height: 44 }}
		font={{ v_align: 'middle', font_name: 'Arial', font_size: 36.7 }}
		zIndex={2}
	>
		Ezekiel 8:1-2
	</Fragment>

	<!-- Scripture text (second passage) -->
	<Fragment
		layout={{ x: 56, y: 365, width: 845, height: 149 }}
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={3}
	>
		In the sixth year, in the sixth month on the fifth day, while I was sitting in my house and the elders of Judah were sitting before me, the hand of the Sovereign LORD came upon me there. 2 I looked, and I saw a figure like that of a man. From what appeared to be his waist down he was like fire, and from there up his appearance was as bright as glowing metal.
	</Fragment>
</Slide>
