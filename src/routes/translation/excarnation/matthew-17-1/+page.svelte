<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Matthew 17:1-3 -->
	<Fragment
		layout={{ x: 102, y: 21, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Matthew 17:1-3
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		drillTo="translation/excarnation/luke-24-50"
		layout={{ x: 111, y: 73, width: 725, height: 262 }}
		font={{ wrap: true, font_size: 30 }}
		zIndex={1}
	>
		After six days Jesus took with him Peter, James and John the brother of James, and led them up a high mountain by themselves. 2There he was transfigured before them. His face shone like the sun, and his clothes became as white as the light. 3Just then there appeared before them Moses and Elijah, talking with Jesus.
	</Fragment>
</Slide>
