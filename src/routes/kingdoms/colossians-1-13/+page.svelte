<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Colossians 1:13-14 -->
	<Fragment
		layout={{ x: 101, y: 12, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={0}
	>
		Colossians 1:13-14
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 44, width: 767, height: 54 }}
		font={{ wrap: true, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		For He rescued us from the domain of darkness, and transferred us to the kingdom of His beloved Son, 14 in whom we have redemption, the forgiveness of sins.
	</Fragment>

	<!-- Step 1: 1 Peter 2:9-11 -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 109, width: 767, height: 184 }}
		font={{ wrap: true, font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={2}
		animate="fade"
	>
		1 Peter 2:9-11But you are a chosen race, a royal priesthood, a holy nation, a people for God's own possession, so that you may proclaim the excellencies of Him who has called you out of darkness into His marvelous light; 10 for you once were not a people, but now you are the people of God; you had not received mercy, but now you have received mercy.11 Beloved, I urge you as aliens and strangers to abstain from fleshly lusts which wage war against the soul.
	</Fragment>

	<!-- Step 2: Galatians 3:26-29 -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 308, width: 766, height: 159 }}
		font={{ wrap: true, font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={3}
		animate="fade"
	>
		Galatians 3:26-29For you are all sons of God through faith in Christ Jesus. 27 For all of you who were baptized into Christ have clothed yourselves with Christ.28 There is neither Jew nor Greek, there is neither slave nor free man, there is neither male nor female; for you are all one in Christ Jesus. 29 And if you belong to Christ, then you are Abraham's descendants, heirs according to promise.
	</Fragment>

	<!-- Step 3: Summary box -->
	<Fragment
		step={3}
		layout={{ x: 60, y: 484, width: 840, height: 30 }}
		fill="#0000FF"
		font={{ wrap: true, align: 'center', bold: true, color: 'var(--text-light)' }}
		zIndex={4}
		animate="fade"
	>
		Descendants of Abraham, Born of God, subjects of the King, Strangers in the World
	</Fragment>
</Slide>
