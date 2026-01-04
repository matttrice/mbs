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
		Genesis 6:13-17
	</Fragment>

	<!-- Static: Scripture text -->
	<Fragment
		layout={{ x: 77, y: 71, width: 801, height: 396 }}
		font={{ font_size: 26.7, align: 'left', v_align: 'middle', wrap: true }}
	>
		Then God said to Noah, "The end of all flesh has come before Me; for the earth is filled with violence because of them; and behold, I am about to destroy them with the earth. 14 "Make for yourself an ark of gopher wood; you shall make the ark with rooms, and shall *cover (pitch) it inside and out with *pitch. 15 "This is how you shall make it: the length of the ark three hundred cubits,  its breadth fifty cubits,  and its height thirty cubits. 16 "You shall make a window  for the ark, and finish it to a cubit from the  top; and set the door of the ark in the side of it; you shall make it with lower, second, and third decks. 17 "Behold, I, even I am bringing the flood of water upon the earth, to destroy all flesh in which is the breath of life, from under heaven; everything that is on the earth shall perish.
	</Fragment>

	<!-- Static: Version -->
	<Fragment
		layout={{ x: 806, y: 481, width: 102, height: 26 }}
		font={{ font_size: 16.7, italic: true, align: 'center', wrap: true }}
	>
		NASB95
	</Fragment>
</Slide>
