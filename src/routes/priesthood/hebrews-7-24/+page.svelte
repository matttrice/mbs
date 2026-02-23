<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 106, y: 32, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Hebrews 7:24
	</Fragment>

	<!-- Scripture -->
	<Fragment
		layout={{ x: 106, y: 76, width: 764, height: 65 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		but Jesus, on the other hand, because He continues forever, holds His priesthood permanently.
	</Fragment>
</Slide>
