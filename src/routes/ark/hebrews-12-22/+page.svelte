<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 95, y: 15, width: 399, height: 51 }}
		font={{ font_size: 36.7, bold: true, color: '#000000', align: 'left' }}
	>
		Hebrews 12:2, 22-23
	</Fragment>

	<!-- Static: Scripture Hebrews -->
	<Fragment
		layout={{ x: 95, y: 58, width: 756, height: 299 }}
		font={{ font_size: 26.7, color: '#000000', v_align: 'middle', align: 'left' }}
		line={{ width: 1 }}
	>
		fixing our eyes on Jesus, the author and perfecter of faith, who for the joy set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God... 22 But you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem, and to myriads of angels, 23 to the general assembly and Church of the firstborn who are enrolled in heaven, and to God, the Judge of all, and to the spirits of the righteous made perfect,
	</Fragment>

	<!-- Static: Scripture Psalms -->
	<Fragment
		layout={{ x: 95, y: 354, width: 784, height: 152 }}
		font={{ font_size: 36.7, bold: true, color: '#000000', align: 'left' }}
		line={{ width: 1 }}
	>
		Psalms 99:1-2 The LORD reigns, let the nations tremble; he sits enthroned between the cherubim, let the earth shake. 2 Great is the LORD in Zion; he is exalted over all the nations. (NIV)
	</Fragment>
</Slide>
