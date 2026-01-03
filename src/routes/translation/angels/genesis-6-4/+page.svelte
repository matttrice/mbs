<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 69, y: 8, width: 822, height: 44 }}
		font={{ font_name: 'Arial', bold: true }}
		zIndex={1}
	>
		Genesis 6:4 - Nephilim
	</Fragment>

	<!-- Step 1: Nephilim text -->
	<Fragment
		step={1}
		layout={{ x: 35, y: 75, width: 889, height: 80 }}
		font={{ wrap: true, font_size: 23.3, v_align: 'top', align: 'left' }}
		zIndex={2}
		animate="fade"
	>
		The Nephilim were on the earth in those days—and also afterward—when the sons of God went to the daughters of men and had children by them.
	</Fragment>

	<!-- Step 2: Hebrew etymology -->
	<Fragment
		step={2}
		layout={{ x: 35, y: 180, width: 400, height: 120 }}
		font={{ font_size: 22, bold: true, color: '#0000CC' }}
		zIndex={3}
		animate="fade"
	>
		Hebrew: נפילים (Nephilim)<br/>
		Root: נפל (naphal) = "to fall"
	</Fragment>

	<!-- Step 3: Definition -->
	<Fragment
		step={3}
		layout={{ x: 35, y: 340, width: 889, height: 60 }}
		font={{ font_size: 32, bold: true }}
		zIndex={4}
		animate="fade"
	>
		Nephilim = "Fallen Ones" = "Earth Born"
	</Fragment>

	<!-- Step 4: Explanation -->
	<Fragment
		step={4}
		layout={{ x: 35, y: 420, width: 889, height: 80 }}
		font={{ wrap: true, font_size: 20 }}
		zIndex={5}
		animate="fade"
	>
		The offspring of angels (sons of God) and human women were called "Nephilim" — those who had "fallen" to earth from the spiritual realm.
	</Fragment>
</Slide>
