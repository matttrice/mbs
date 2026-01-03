<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Genesis 3:1-5,8 -->
	<Fragment
		layout={{ x: 74, y: 23, width: 756, height: 44 }}
		font={{ bold: true }}
		zIndex={0}
	>
		Genesis 3:1-5,8
	</Fragment>

	<!-- Scripture text (first part) -->
	<Fragment
		layout={{ x: 71, y: 72, width: 818, height: 262 }}
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={1}
	>
		Now the serpent was more crafty than any of the wild animals the LORD God had made. He said to the woman, "Did God really say, 'You must not eat from any tree in the garden'?"  2 The woman said to the serpent, "We may eat fruit from the trees in the garden, 3 but God did say, 'You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.' "  4 "You will not surely die," the serpent said to the woman. 5 "For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil."
	</Fragment>

	<!-- Scripture text (second part) -->
	<Fragment
		layout={{ x: 71, y: 349, width: 818, height: 148 }}
		font={{ wrap: true, font_size: 23.3, bold: true }}
		zIndex={2}
	>
		8 Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden. 9 But the Lord God called to the man, "Where are you?" 10 He said, "I heard the sound of You in the garden, and I was afraid because I was naked; so I hid myself."
	</Fragment>
</Slide>
