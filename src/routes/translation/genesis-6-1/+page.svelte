<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Genesis 6:1-8 -->
	<Fragment
		layout={{ x: 51, y: 8, width: 756, height: 44 }}
		font={{ font_name: 'Arial', bold: true }}
		zIndex={1}
	>
		Genesis 6:1-8
	</Fragment>

	<!-- Scripture text (NIV) -->
	<Fragment
		layout={{ x: 772, y: 469, width: 116, height: 30 }}
		font={{ wrap: true, font_size: 20, italic: true }}
		zIndex={3}
	>
		(NIV)
	</Fragment>

	<!-- Static scripture text -->
	<Fragment
		layout={{ x: 48, y: 52, width: 851, height: 432 }}
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={0}
	>
		When men began to increase in number on the earth and daughters were born to them, 2 the sons of God saw that the daughters of men were beautiful, and they married any of them they chose. 3 Then the LORD said, "My Spirit will not contend with man forever, for he is mortal; his days will be a hundred and twenty years."  4 The Nephilim were on the earth in those days—and also afterward—when the sons of God went to the daughters of men and had children by them. They were the heroes of old, men of renown.  5 The LORD saw how great man's wickedness on the earth had become, and that every inclination of the thoughts of his heart was only evil all the time. 6 The LORD was grieved that he had made man on the earth, and his heart was filled with pain. 7 So the LORD said, "I will wipe mankind, whom I have created, from the face of the earth—men and animals, and creatures that move along the ground, and birds of the air—for I am grieved that I have made them." 8 But Noah found favor in the eyes of the LORD.
	</Fragment>

	<!-- Step 1: Highlighted scripture (overlaid with fill) -->
	<Fragment
		step={1}
		layout={{ x: 48, y: 52, width: 851, height: 432 }}
		fill="var(--bg-ghost)"
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={2}
		animate="fade"
	>
		When men began to increase in number on the earth and daughters were born to them, 2 the sons of God saw that the daughters of men were beautiful, and they married any of them they chose. 3 Then the LORD said, "My Spirit will not contend with man forever, for he is mortal; his days will be a hundred and twenty years."  4 The Nephilim were on the earth in those days—and also afterward—when the sons of God went to the daughters of men and had children by them. They were the heroes of old, men of renown.  5 The LORD saw how great man's wickedness on the earth had become, and that every inclination of the thoughts of his heart was only evil all the time. 6 The LORD was grieved that he had made man on the earth, and his heart was filled with pain. 7 So the LORD said, "I will wipe mankind, whom I have created, from the face of the earth—men and animals, and creatures that move along the ground, and birds of the air—for I am grieved that I have made them." 8 But Noah found favor in the eyes of the LORD.
	</Fragment>
</Slide>
