<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Genesis 3:6-8 -->
	<Fragment
		layout={{ x: 96, y: 8, width: 182, height: 39 }}
		font={{ align: 'left', font_size: 23.3, bold: true }}
		zIndex={0}
	>
		Genesis 3:6-8
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 96, y: 41, width: 795, height: 162 }}
		font={{ wrap: true, font_size: 18.3, color: '#000000' }}
		zIndex={1}
	>
		When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it. 7 Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.8 Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden.
	</Fragment>

	<!-- Step 1: "The Fall" explanation -->
	<Fragment
		step={1}
		layout={{ x: 143, y: 209, width: 675, height: 30 }}
		font={{ bold: true }}
		zIndex={2}
		animate="fade"
	>
		"The Fall" – The origin of conscience – Adam & Eve created innocent
	</Fragment>

	<!-- Step 2: Matthew 18:2-3 -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 254, width: 776, height: 107 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: '#000000' }}
		zIndex={3}
		animate="fade"
	>
		Matthew 18:2-3He called a little child to him, and placed the child among them. 3 And he said: "Truly I tell you, unless you change and become like little children, you will never enter the kingdom of heaven.
	</Fragment>

	<!-- Step 3: Matthew 19:14 -->
	<Fragment
		step={3}
		layout={{ x: 102, y: 376, width: 771, height: 82 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: '#000000' }}
		zIndex={4}
		animate="fade"
	>
		Matthew 19:14 Jesus said, "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."
	</Fragment>

	<!-- Step 4: Question box -->
	<Fragment
		step={4}
		layout={{ x: 171, y: 473, width: 632, height: 34 }}
		fill="#0000FF"
		font={{ font_size: 23.3, bold: true, color: '#F4F4F4' }}
		zIndex={5}
		animate="fade"
	>
		Why use children to illustrate the Kingdom of Heaven?
	</Fragment>
</Slide>
