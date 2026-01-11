<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 106, y: 25, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Matthew 23:8-10
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 106, y: 68, width: 770, height: 126 }}
		font={{ font_size: 24, v_align: 'middle' }}
	>
		"But do not be called Rabbi; for One is your Teacher, and you are all brothers. 9 "Do not call anyone on earth your father; for One is your Father, He who is in heaven. 10 "Do not be called leaders; for One is your Leader, that is, Christ.
	</Fragment>
</Slide>
