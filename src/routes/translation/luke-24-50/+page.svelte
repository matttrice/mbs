<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Luke 24:50-52 -->
	<Fragment
		layout={{ x: 100, y: 46, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={1}
	>
		Luke 24:50-52
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 97, y: 92, width: 735, height: 190 }}
		font={{ wrap: true, font_size: 30 }}
		zIndex={0}
	>
		When he had led them out to the vicinity of Bethany, he lifted up his hands and blessed them. 51While he was blessing them, he left them and was taken up into heaven. 52Then they worshiped him and returned to Jerusalem with great joy.
	</Fragment>
</Slide>
