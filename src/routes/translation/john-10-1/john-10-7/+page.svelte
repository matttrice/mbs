<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line, Ellipse } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 54, y: 12, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		John 10:7-10 cont...
	</Fragment>

	<!-- Step 1: Shepherd label -->
	<Fragment
		step={1}
		layout={{ x: 178, y: 212, width: 188, height: 42 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={10}
		animate="fade"
	>
		Shepherd:
	</Fragment>

	<!-- Step 2: Horizontal line -->
	<Fragment step={2} animate="draw">
		<Line from={{ x: 172, y: 261 }} to={{ x: 786, y: 261 }} stroke={{ width: 9, color: '#000000' }} zIndex={16} />
	</Fragment>

	<!-- Step 3: Vertical line (gate) -->
	<Fragment step={3} animate="draw">
		<Line from={{ x: 499, y: 226 }} to={{ x: 499, y: 414 }} stroke={{ width: 9, color: '#000000' }} zIndex={17} />
	</Fragment>

	<!-- Step 4: Thief label -->
	<Fragment
		step={4}
		layout={{ x: 538, y: 214, width: 111, height: 38 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={7}
		animate="fade"
	>
		Thief:
	</Fragment>

	<!-- Step 5: Satan label (with step 4) -->
	<Fragment
		step={5}
		layout={{ x: 640, y: 216, width: 120, height: 38 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={13}
		animate="fade"
	>
		Satan
	</Fragment>

	<!-- Step 6: Christ label (with step 5) -->
	<Fragment
		step={6}
		layout={{ x: 356, y: 213, width: 111, height: 41 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={12}
		animate="fade"
	>
		Christ
	</Fragment>

	<!-- Step 7: Sheep pen label -->
	<Fragment
		step={7}
		layout={{ x: 54, y: 354, width: 193, height: 46 }}
		font={{ font_size: 33.3, bold: true }}
		zIndex={6}
		animate="fade"
	>
		Sheep pen:
	</Fragment>

	<!-- Step 8: Gates label -->
	<Fragment
		step={8}
		layout={{ x: 69, y: 292, width: 138, height: 46 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={8}
		animate="fade"
	>
		Gates:
	</Fragment>

	<!-- Step 9: Verse 7 explanation -->
	<Fragment
		step={9}
		layout={{ x: 54, y: 432, width: 622, height: 26 }}
		font={{ font_size: 16.7 }}
		zIndex={2}
		animate="fade"
	>
		Verse 7:  "I am the gate for the sheep"  - Jesus becomes the gate of spiritual life.
	</Fragment>

	<!-- Step 10: I am the Gate label -->
	<Fragment
		step={10}
		layout={{ x: 205, y: 259, width: 271, height: 34 }}
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true }}
		zIndex={11}
		animate="fade"
	>
		I am the Gate
	</Fragment>

	<!-- Step 11: Christ label at gate -->
	<Fragment
		step={11}
		layout={{ x: 282, y: 288, width: 118, height: 42 }}
		font={{ wrap: true, font_size: 30.0, bold: true }}
		zIndex={14}
		animate="fade"
	>
		Christ
	</Fragment>

	<!-- Step 12: Blue oval for Spirit Born -->
	<Fragment step={12} animate="fade">
		<Ellipse cx={341} cy={383} rx={59} ry={51} fill="#33CCFF" stroke={{ width: 3, color: '#000000' }} zIndex={18} />
	</Fragment>

	<!-- Step 13: Spirit Born label -->
	<Fragment
		step={13}
		layout={{ x: 298, y: 342, width: 98, height: 79 }}
		font={{ font_size: 30.0, bold: true }}
		zIndex={19}
		animate="fade"
	>
		Spirit Born
	</Fragment>

	<!-- Step 14: Verse 8 explanation -->
	<Fragment
		step={14}
		layout={{ x: 54, y: 460, width: 902, height: 46 }}
		font={{ font_size: 16.7 }}
		zIndex={3}
		animate="fade"
	>
		Verse 8: "All who ever came before me were thieves and robbers" - Who came before him? There were many angelic defectors and false prophets deceiving many, still to this day.
	</Fragment>

	<!-- Step 15: Steal Kill Destroy label -->
	<Fragment
		step={15}
		layout={{ x: 542, y: 259, width: 224, height: 34 }}
		font={{ wrap: true, font_size: 23.3, bold: true }}
		zIndex={9}
		animate="fade"
	>
		Steal Kill Destroy
	</Fragment>

	<!-- Step 16: Deceived label -->
	<Fragment
		step={16}
		layout={{ x: 560, y: 290, width: 190, height: 42 }}
		font={{ wrap: true, font_size: 30.0, bold: true }}
		zIndex={15}
		animate="fade"
	>
		Deceived
	</Fragment>

	<!-- Step 17: Gray oval for Earth Born -->
	<Fragment step={17} animate="fade">
		<Ellipse cx={655} cy={379} rx={59} ry={51} fill="#969696" stroke={{ width: 3, color: '#000000' }} zIndex={20} />
	</Fragment>

	<!-- Step 18: Earth Born label -->
	<Fragment
		step={18}
		layout={{ x: 615, y: 341, width: 98, height: 79 }}
		font={{ font_size: 30.0, bold: true }}
		zIndex={21}
		animate="fade"
	>
		Earth Born
	</Fragment>

	<!-- Step 19: Verse 9-10 explanation -->
	<Fragment
		step={19}
		layout={{ x: 44, y: 505, width: 565, height: 26 }}
		font={{ font_size: 16.7 }}
		zIndex={4}
		animate="fade"
	>
		Verse 9-10: "I am the gate; whoever enters through me will be saved."
	</Fragment>
</Slide>
