<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 83, y: 31, width: 320, height: 39 }}
		font={{ font_size: 36.7, bold: true, align: 'left' }}
	>
		Genesis 6:5-12
	</Fragment>

	<!-- Static: Scripture text -->
	<Fragment
		layout={{ x: 77, y: 100, width: 801, height: 396 }}
		font={{ font_size: 26.7, align: 'left', v_align: 'middle', wrap: true }}
		line={{ width: 1 }}
	>
		Then the Lord saw that the wickedness of mankind was great on the earth, and that every intent of the thoughts of their hearts was only evil continually. [6] So the Lord was sorry that He had made mankind on the earth, and He was grieved in His heart. [7] Then the Lord said, "I will wipe out mankind whom I have created from the face of the land; mankind, and animals as well, and crawling things, and the birds of the sky. For I am sorry that I have made them." [8] But Noah found favor in the eyes of the Lord. [9] These are the records of the generations of Noah. Noah was a righteous man, blameless in his generation. Noah walked with God. [10] And Noah fathered three sons: Shem, Ham, and Japheth. [11] Now the earth was corrupt in the sight of God, and the earth was filled with violence. [12] And God looked on the earth, and behold, it was corrupt; for humanity had corrupted its way upon the earth.
	</Fragment>

	<!-- Static: Version -->
	<Fragment
		layout={{ x: 861, y: 491, width: 58, height: 26 }}
		font={{ font_size: 16.7, italic: true, align: 'center' }}
	>
		NASB
	</Fragment>
</Slide>
