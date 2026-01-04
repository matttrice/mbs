<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 91, y: 22, width: 807, height: 90 }}
		font={{ font_size: 44.2, bold: true, color: '#000000', align: 'left' }}
	>
		Genesis 7:11
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 84, y: 92, width: 791, height: 138 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		In the six  hundredth year of Noah's life, in the second month, on the seventeenth day of the month, on the same day all the  fountains of the great deep burst open, and the floodgates of the sky were opened.
	</Fragment>
</Slide>
