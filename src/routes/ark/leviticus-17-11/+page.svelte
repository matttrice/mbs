<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 42, y: 42, width: 864, height: 155 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Leviticus 17:11" version="NASB" scale="lg">
			'For the <u>life of the flesh is in the blood</u>, and I have given it to you on the altar to make <u>atonement</u> for your souls; for it is the blood by reason of the life that makes atonement.'
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 42, y: 200, width: 864, height: 244 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Leviticus 16:15-16" version="NIV" scale="lg">
			"He shall then slaughter the goat for the sin offering for the people and take its blood behind the curtain and do with it as he did with the bull's blood: He shall sprinkle it on the <u>atonement cover </u>and in front of it. <sup>16 </sup>In this way he will make <u>atonement</u> for the Most Holy Place because of the uncleanness and rebellion of the Israelites, whatever their sins have been. He is to do the same for the tent of meeting, which is among them in the midst of their uncleanness.
		</ScriptureBlock>
	</Fragment>
</Slide>
