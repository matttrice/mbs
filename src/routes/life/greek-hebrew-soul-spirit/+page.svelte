<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect } from '$lib/components/svg';

	/**
	 * Drill: Greek & Hebrew Definitions of Soul and Spirit
	 * Multi-slide drill showing Hebrew/Greek terms and their usage
	 */

</script>

<Slide>
	<Fragment
		layout={{ x: 97.8, y: 12.5, width: 500, height: 37.5 }}
		font={{ font_size: 40, align: 'left', bold: true }}
	>
		Dividing Soul & Spirit
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 62.5, y: 50, width: 835, height: 62.5 }}
		font={{ font_size: 20, v_align: 'top', wrap: true }}
	>
		The Greek and Hebrew terms for soul and spirit are often used interchangeably in physical contexts only. In scripture the word <i>psyche</i> (soul) is used invariably in the context of eternal life. The words that refer to spirit are never mentioned in the context of everlasting life.
	</Fragment>

	<!-- Three columns for terms -->
	<Fragment
		step={2}
		layout={{ x: 62.5, y: 125, width: 250, height: 62.5 }}
		font={{ font_size: 18, wrap: true }}
	>
		<b>Wind, Breath, Life</b><br/>
		Ruwach (spirit) Hebrew<br/>
		Nephesh (soul) Hebrew<br/>
		Pneuma (spirit) Greek<br/>
		Psyche (soul) Greek
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 325, y: 125, width: 250, height: 62.5 }}
		font={{ font_size: 18, wrap: true }}
	>
		<b>Emotions, Love, Desires</b><br/>
		Ruwach (spirit) Hebrew<br/>
		Nephesh (soul) Hebrew<br/>
		Pneuma (spirit) Greek<br/>
		Psyche (soul) Greek
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 587.5, y: 125, width: 250, height: 62.5 }}
		font={{ font_size: 18, wrap: true }}
	>
		<b>Cognition, Mind, Moral Character</b><br/>
		Meah (spirit) Hebrew<br/>
		Nephesh (soul) Hebrew<br/>
		Psyche (soul) Greek<br/>
		Pneuma (soul) Greek
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 62.5, y: 237.5, width: 375, height: 50 }}
		font={{ font_size: 18, wrap: true }}
	>
		<b>Context: Angels, Demons, Evil spirits.</b><br/>
		Greek: pneuma (spirit)
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 450, y: 237.5, width: 375, height: 50 }}
		font={{ font_size: 18, wrap: true }}
	>
		<b>Context: Spirit of God.</b><br/>
		Hebrew: ruach (spirit)<br/>
		Greek: pneuma (spirit)
	</Fragment>

	<Fragment
		step={4}
		drillTo="life/greek-hebrew-soul-spirit-2"
		layout={{ x: 62.5, y: 312.5, width: 500, height: 31.3 }}
		font={{ font_size: 22, color: '#0000FF' }}
	>
		Biblical examples of Psyche (Soul) →
	</Fragment>
</Slide>
