<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 99, y: 36, width: 525, height: 44 }}
		font={{ font_size: 36, bold: true, color: '#000000', align: 'left' }}
	>
		Exodus 2:1-6
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 102, y: 78, width: 763, height: 363 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left' }}
		line={{ width: 1 }}
	>
		Now a man of the tribe of Levi married a Levite woman, 2 and she became pregnant and gave birth to a son. When she saw that he was a fine child, she hid him for three months. 3 But when she could hide him no longer, she got a papyrus basket (tebah) for him and coated it with tar and pitch. Then she placed the child in it and put it among the reeds along the bank of the Nile. 4 His sister stood at a distance to see what would happen to him. 5 Then Pharaoh's daughter went down to the Nile to bathe, and her attendants were walking along the riverbank. She saw the basket among the reeds and sent her female slave to get it.
	</Fragment>

	<!-- Static: NIV label -->
	<Fragment
		layout={{ x: 776, y: 449, width: 51, height: 34 }}
		font={{ font_size: 23.3 }}
	>
		NIV
	</Fragment>
</Slide>
