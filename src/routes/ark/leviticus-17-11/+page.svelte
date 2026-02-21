<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 83, y: 42, width: 332, height: 62 }}
		font={{ font_size: 44, bold: true, color: 'var(--text-level-0)' }}
	>
		Leviticus 17:11
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 100, y: 92, width: 791, height: 105 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		'For the life of the flesh is in the blood, and I have given it to you on the altar to make atonement for your souls; for it is the blood by reason of the life that makes atonement.' NASB
	</Fragment>

	<!-- Step 1: Leviticus 16:15-16 (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 109, y: 235, width: 779, height: 244 }}
		font={{ font_size: 26, align: 'left', wrap: true }}
	>
		<strong>Leviticus 16:15-16</strong><br/>"He shall then slaughter the goat for the sin offering for the people and take its blood behind the curtain and do with it as he did with the bull's blood: He shall sprinkle it on the atonement cover and in front of it. 16 In this way he will make atonement for the Most Holy Place because of the uncleanness and rebellion of the Israelites, whatever their sins have been. He is to do the same for the tent of meeting, which is among them in the midst of their uncleanness. NIV
	</Fragment>
</Slide>
