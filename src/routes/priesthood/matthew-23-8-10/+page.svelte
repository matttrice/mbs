<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 106, y: 26, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Matthew 23:8-10
	</Fragment>

	<!-- Scripture -->
	<Fragment
		layout={{ x: 106, y: 69, width: 770, height: 124 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		"But do not be called Rabbi; for One is your Teacher, and you are all brothers. <sup>9</sup> "Do not call anyone on earth your father; for One is your Father, He who is in heaven. <sup>10</sup> "Do not be called leaders; for One is your Leader, that is, Christ.
	</Fragment>
</Slide>
