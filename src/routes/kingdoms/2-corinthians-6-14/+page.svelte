<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Corinthians 6:14-15 -->
	<Fragment
		layout={{ x: 102, y: 21, width: 311, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		2 Corinthians 6:14-15
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 52, width: 768, height: 79 }}
		font={{ wrap: true, color: '#000000' }}
		zIndex={1}
	>
		Do not be bound together with unbelievers; for what partnership have righteousness and lawlessness, or what fellowship has light with darkness?15 Or what harmony has Christ with Belial, or what has a believer in common with an unbeliever?
	</Fragment>

	<!-- Step 1: Question box -->
	<Fragment
		step={1}
		layout={{ x: 219, y: 144, width: 534, height: 34 }}
		fill="#33CCFF"
		font={{ font_size: 23.3, bold: true }}
		zIndex={3}
		animate="fade"
	>
		What is a Christian's mission in this kingdom?
	</Fragment>

	<!-- Step 2: Mark 16:15-16 -->
	<Fragment
		step={2}
		layout={{ x: 98, y: 209, width: 772, height: 111 }}
		font={{ wrap: true, font_size: 26.7, bold: true, color: '#000000' }}
		zIndex={2}
		animate="fade"
	>
		Mark 16:15-1615 And He said to them, "Go into all the world and preach the gospel to all creation. 16 He who has believed and has been baptized shall be saved; but he who has disbelieved shall be condemned.
	</Fragment>
</Slide>
