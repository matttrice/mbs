<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Genesis 5:21-24 -->
	<Fragment
		layout={{ x: 77, y: 17, width: 756, height: 44 }}
		font={{ font_name: 'Arial', font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Genesis 5:21-24
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		drillTo="translation/excarnation/2-kings-2-11"
		layout={{ x: 72, y: 73, width: 786, height: 226 }}
		font={{ wrap: true, font_size: 30 }}
		zIndex={1}
	>
		When Enoch had lived 65 years, he became the father of Methuselah. 22 And after he became the father of Methuselah, Enoch walked with God 300 years and had other sons and daughters. 23 Altogether, Enoch lived 365 years. 24 Enoch walked with God; then he was no more, because God took him away.
	</Fragment>
</Slide>
