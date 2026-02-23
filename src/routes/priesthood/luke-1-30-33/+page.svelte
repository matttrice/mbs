<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 98, y: 26, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Luke 1:30-33
	</Fragment>

	<!-- Scripture (static) -->
	<Fragment
		layout={{ x: 98, y: 61, width: 792, height: 251 }}
		font={{ font_size: 28.8, v_align: 'middle', wrap: true }}
	>
		The angel said to her, "Do not be afraid, Mary; for you have found favor with God. <sup>31</sup> "And behold, you will conceive in your womb and bear a son, and you shall name Him Jesus. <sup>32</sup> "He will be great and will be called the Son of the Most High; and the Lord God will give Him the throne of His father David; <sup>33</sup> and He will reign over the house of Jacob forever, and His kingdom will have no end."
	</Fragment>

	<!-- Step 1: Underline connectors -->
	<Fragment step={1} animate="draw">
		<Line from={{ x: 286, y: 242 }} to={{ x: 876, y: 242 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={3} />
	</Fragment>

	<!-- Step 1.1: Connector 2 -->
	<Fragment step={1.1} animate="draw">
		<Line from={{ x: 106, y: 270 }} to={{ x: 186, y: 271 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={4} />
	</Fragment>

	<!-- Step 1.2: Connector 3 -->
	<Fragment step={1.2} animate="draw">
		<Line from={{ x: 278, y: 270 }} to={{ x: 854, y: 270 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={5} />
	</Fragment>

	<!-- Step 1.3: Connector 4 -->
	<Fragment step={1.3} animate="draw">
		<Line from={{ x: 164, y: 308 }} to={{ x: 538, y: 308 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={6} />
	</Fragment>
</Slide>
