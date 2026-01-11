<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 98, y: 25, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Luke 1:30-33
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 98, y: 60, width: 792, height: 254 }}
		font={{ font_size: 28.8, v_align: 'middle' }}
	>
		The angel said to her, "Do not be afraid, Mary; for you have found favor with God. 31 "And behold, you will conceive in your womb and bear a son, and you shall name Him Jesus. 32 "He will be great and will be called the Son of the Most High; and the Lord God will give Him the throne of His father David; 33 and He will reign over the house of Jacob forever, and His kingdom will have no end."
	</Fragment>

	<!-- Step 1: Underline "throne of His father David" -->
	<Fragment step={1} animate="draw">
		<Line from={{ x: 286, y: 241 }} to={{ x: 876, y: 241 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={2} />
	</Fragment>

	<!-- Step 1.1: Underline "forever" -->
	<Fragment step={1.1} animate="draw">
		<Line from={{ x: 106, y: 270 }} to={{ x: 185, y: 271 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={3} />
	</Fragment>

	<!-- Step 1.2: Underline "reign over the house of Jacob" -->
	<Fragment step={1.2} animate="draw">
		<Line from={{ x: 278, y: 270 }} to={{ x: 854, y: 270 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={4} />
	</Fragment>

	<!-- Step 1.3: Underline "kingdom will have no end" -->
	<Fragment step={1.3} animate="draw">
		<Line from={{ x: 163, y: 308 }} to={{ x: 537, y: 308 }} stroke={{ width: 4, color: '#0000FF' }} zIndex={5} />
	</Fragment>
</Slide>
