<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 1 Timothy 4:1-2, Ephesians 4:17-19, Isaiah 5:20
	 * Custom Show ID: 2 (1Timothy4-Ephesians4-Isaiah5)
	 * Seared Conscience
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 440, height: 35 }}
		font={{ font_size: 32, bold: true, align: 'left' }}
	>
		1 Timothy 4:1-2
	</Fragment>

	<!-- 1 Timothy Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 45, width: 440, height: 150 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		But the Spirit explicitly says that in later times some will fall away from the faith, paying attention to deceitful spirits and doctrines of demons, by means of the hypocrisy of liars seared in their own conscience as with a branding iron,
	</Fragment>

	<!-- Ephesians Text -->
	<Fragment
		step={2}
		layout={{ x: 490, y: 10, width: 440, height: 200 }}
		font={{ font_size: 16, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Ephesians 4:17-19</strong><br/>
		So this I say, and affirm together with the Lord, that you walk no longer just as the Gentiles also walk, in the futility of their mind, being darkened in their understanding, excluded from the life of God because of the ignorance that is in them, because of the hardness of their heart; and they, having become callous, have given themselves over to sensuality for the practice of every kind of impurity with greediness.
	</Fragment>

	<!-- Question -->
	<Fragment
		step={3}
		layout={{ x: 30, y: 210, width: 440, height: 100 }}
		font={{ font_size: 22, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Does a person with seared conscience or callous heart distinguish easily between what is good and what is evil?
	</Fragment>

	<!-- Isaiah -->
	<Fragment
		step={4}
		layout={{ x: 30, y: 340, width: 900, height: 100 }}
		font={{ font_size: 22, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Isaiah 5:20</strong> Woe to those who call evil good, and good evil; Who substitute darkness for light and light for darkness; Who substitute bitter for sweet and sweet for bitter!
	</Fragment>
</Slide>
