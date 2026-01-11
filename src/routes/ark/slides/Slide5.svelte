<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arc } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();

	const bgLayer = 0
    const boxLayer = 1
    const textLayer = 2
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 66, y: 12, width: 244, height: 44 }}
		font={{ font_size: 30.8, bold: true}}
	>
		Genesis 8:1-4
	</Fragment>

	<!-- Static: Scripture text -->
	<Fragment
		layout={{ x: 74, y: 51, width: 826, height: 192 }}
		font={{ font_size: 21.7, italic: true, align: 'left', v_align: 'middle' , wrap: true }}
		line={{ width: 1 }}
	>
		1 But God  remembered Noah and all the beasts and all the cattle that were with him in the ark; and God caused a wind to pass over the earth, and the water subsided. 2 Also the fountains of the deep and the floodgates of the sky were closed, and the rain from the sky was restrained; 3 and the water receded steadily from the earth, and at the end of  one hundred and fifty days the water decreased. 4 In the seventh month, on the seventeenth day of the month, the ark rested upon the mountains of Ararat.
	</Fragment>

	<!-- Static: Water line image -->
	<Fragment
		layout={{ x: 49, y: 475, width: 862, height: 99 }}
		zIndex={textLayer}
	>
		<img src="/export/08-The_Ark/image6.png" alt="WaterLine" class="slide-image" />
	</Fragment>

	<!-- Step 1: Brown ark shape (left side) with labels -->
	<Fragment step={1} animate="draw">
		<Arc from={{ x: 84, y: 522 }} to={{ x: 424, y: 522 }} curve={-450} stroke={{ width: 8, color: '#000000' }} zIndex={boxLayer} />
	</Fragment>

	<!-- Step 1.2: Ark label (timing: with delay 1000ms) -->
	<Fragment
		step={1.2}
		layout={{ x: 165, y: 276, width: 182, height: 51 }}
		fill="#000000"
		font={{ font_size: 35, bold: true, color: '#F4F4F4', align: 'center' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		Ark
	</Fragment>

	<!-- Step 1.2: "Rested" label (timing: with delay 1000ms) -->
	<Fragment
		step={1.2}
		layout={{ x: 196, y: 328, width: 132, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		"Rested"
	</Fragment>

	<!-- Step 2: Mountains of Ararat -->
	<Fragment
		step={2}
		layout={{ x: 188, y: 366, width: 151, height: 72 }}
		font={{ font_size: 26.7, bold: true, align: 'center' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		Mountains<br/>of Ararat
	</Fragment>

	<!-- Step 3: "Exalted Mountain" -->
	<Fragment
		step={3}
		layout={{ x: 129, y: 441, width: 266, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		"Exalted Mountain"
	</Fragment>

	<!-- Step 4: Hebrews 12 / Psalms 99 drillTo -->
	<Fragment
		step={4}
		drillTo="ark/hebrews-12-22"
		layout={{ x: 345, y: 314, width: 243, height: 105 }}
		font={{ font_size: 23, bold: true, color: '#0000FF', align: 'center' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		Hebrews 12:2<br/>Hebrews 12:22-23<br/>Psalms 99
	</Fragment>

	<!-- Step 5: ark shape (right side - Church) -->
	<Fragment step={5} animate="draw">
		<Arc from={{ x: 525, y: 522 }} to={{ x: 850, y: 522 }} curve={-400} stroke={{ width: 8, color: '#000000' }} zIndex={boxLayer}/>
	</Fragment>

	<!-- Step 5.1: Christ "sat down" label (timing: after) -->
	<Fragment
		step={5.1}
		layout={{ x: 588, y: 332, width: 200, height: 25 }}
		font={{ font_size: 26.7, bold: true, align: 'center'}}
		fill="var(--color-bg-light)"
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		Christ "sat down"
	</Fragment>

	<!-- Step 6: Church label -->
	<Fragment
		step={6}
		layout={{ x: 590, y: 276, width: 203, height: 51 }}
		fill="#000000"
		font={{ font_size: 35, bold: true, color: '#F4F4F4', align: 'center' }}
		line={{ width: 1 }}
		zIndex={textLayer}

	>
		Church
	</Fragment>

	<!-- Step 7: Mount Zion -->
	<Fragment
		step={7}
		layout={{ x: 616, y: 380, width: 161, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		Mount Zion
	</Fragment>

	<!-- Step 8: "Exalted Mountain" (right side) -->
	<Fragment
		step={8}
		layout={{ x: 563, y: 441, width: 266, height: 40 }}
		font={{ font_size: 26.7, bold: true, align: 'left' }}
		line={{ width: 1 }}
		zIndex={textLayer}
	>
		"Exalted Mountain"
	</Fragment>
</Slide>
