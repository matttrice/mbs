<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Colossians 1:13-14 (consolidated title + body) -->
	<Fragment
		layout={{ x: 101, y: 12, width: 768, height: 86 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Colossians 1:13-14">
			For He rescued us from the domain of darkness, and transferred us to the kingdom of His beloved Son, <sup>14 </sup>in whom we have redemption, the forgiveness of sins.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: 1 Peter 2:9-11 -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 109, width: 767, height: 184 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="1 Peter 2:9-11">
			But you are a chosen race, a royal priesthood, a holy nation, a people for <em>God's</em> own possession, so that you may proclaim the excellencies of Him who has called you out of darkness into His marvelous light; <sup>10 </sup>for you once were not a people, but now you are the people of God; you had not received mercy, but now you have received mercy.<sup>11 </sup>Beloved, I urge you as aliens and strangers to abstain from fleshly lusts which wage war against the soul.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Galatians 3:26-29 -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 308, width: 766, height: 159 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Galatians 3:26-29">
			For you are all sons of God through faith in Christ Jesus. <sup>27 </sup>For all of you who were baptized into Christ have clothed yourselves with Christ.<sup>28 </sup>There is neither Jew nor Greek, there is neither slave nor free man, there is neither male nor female; for you are all one in Christ Jesus. <sup>29 </sup>And if you belong to Christ, then you are Abraham's descendants, heirs according to promise.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Summary box -->
	<Fragment
		step={3}
		layout={{ x: 60, y: 484, width: 840, height: 90 }}
		fill="var(--bg-level-3)"
		font={{font_size: 28, wrap: true, align: 'center', bold: true, color: 'var(--text-ghost)' }}
		zIndex={4}
	>
		Descendants of Abraham, Born of God, subjects of the King, Strangers in the World
	</Fragment>
</Slide>
