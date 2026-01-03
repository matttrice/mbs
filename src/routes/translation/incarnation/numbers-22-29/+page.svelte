<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Numbers 22:29-33 -->
	<Fragment
		layout={{ x: 46, y: 21, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Numbers 22:29-33
	</Fragment>

	<!-- Scripture text with drill to next -->
	<Fragment
		step={1}
		drillTo="translation/incarnation/ezekiel-1-25"
		layout={{ x: 41, y: 66, width: 873, height: 428 }}
		font={{ wrap: true, font_size: 26.7 }}
		zIndex={1}
	>
		Balaam answered the donkey, "You have made a fool of me! If I had a sword in my hand, I would kill you right now."  30 The donkey said to Balaam, "Am I not your own donkey, which you have always ridden, to this day? Have I been in the habit of doing this to you?" "No," he said.  31 Then the LORD opened Balaam's eyes, and he saw the angel of the LORD standing in the road with his sword drawn. So he bowed low and fell facedown.  32 The angel of the LORD asked him, "Why have you beaten your donkey these three times? I have come here to oppose you because your path is a reckless one before me.33 The donkey saw me and turned away from me these three times. If she had not turned away, I would certainly have killed you by now, but I would have spared her."
	</Fragment>
</Slide>
