<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 106, y: 32, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Hebrews 7:24
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 106, y: 74, width: 763, height: 68 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		but Jesus, on the other hand, because He continues forever, holds His priesthood permanently.
	</Fragment>
</Slide>
