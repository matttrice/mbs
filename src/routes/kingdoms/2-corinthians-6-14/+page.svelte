<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 102, y: 21, width: 768, height: 110 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Corinthians 6:14-15" scale="lg">
			Do not be bound together with unbelievers; for what partnership have righteousness and lawlessness, or what fellowship has light with darkness?<sup>15 </sup>Or what harmony has Christ with Belial, or what has a believer in common with an unbeliever?
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Question box -->
	<Fragment
		step={1}
		layout={{ x: 219, y: 154, width: 534, height: 34 }}
		fill="var(--bg-level-2)"
		font={{ font_size: 23.3, bold: true, wrap: true }}
		zIndex={3}
	>
		What is a Christian's mission in this kingdom?
	</Fragment>

	<!-- Step 2: Mark 16:15-16 -->
	<Fragment
		step={2}
		layout={{ x: 98, y: 209, width: 772, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Mark 16:15-16" scale="lg">
			<sup>15 </sup>And He said to them, "Go into all <u>the world</u> and preach the gospel to all creation. <sup>16 </sup>He who has believed and has been baptized shall be saved; but he who has disbelieved shall be condemned.
		</ScriptureBlock>
	</Fragment>
</Slide>
