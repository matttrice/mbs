<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line } from '$lib/components/svg';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 98, y: 26, width: 792, height: 286 }}
	font={{ v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Luke 1:30-33">
		The angel said to her, "Do not be afraid, Mary; for you have found favor with God. <sup>31</sup> "And behold, you will conceive in your womb and bear a son, and you shall name Him Jesus. <sup>32</sup> "He will be great and will be called the Son of the Most High; and the Lord God will give Him the throne of His father David; <sup>33</sup> and He will reign over the house of Jacob forever, and His kingdom will have no end."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Horizontal underline connector (click) -->
<Fragment step={1} animate="draw">
	<Line from={{ x: 286, y: 242 }} to={{ x: 876, y: 242 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={2} />
</Fragment>

<!-- Step 1.1: Horizontal underline connector (after) -->
<Fragment step={1.1} animate="draw">
	<Line from={{ x: 106, y: 270 }} to={{ x: 186, y: 270 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={3} />
</Fragment>

<!-- Step 1.2: Horizontal underline connector (after) -->
<Fragment step={1.2} animate="draw">
	<Line from={{ x: 278, y: 270 }} to={{ x: 854, y: 270 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={4} />
</Fragment>

<!-- Step 1.3: Horizontal underline connector (after) -->
<Fragment step={1.3} animate="draw">
	<Line from={{ x: 164, y: 308 }} to={{ x: 538, y: 308 }} stroke={{ width: 4, color: 'var(--stroke-level-3)' }} zIndex={5} />
</Fragment>
