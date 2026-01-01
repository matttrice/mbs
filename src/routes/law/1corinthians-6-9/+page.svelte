<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 1 Corinthians 6:9-12 - The Wicked Will Not Inherit
	 * Custom Show ID: 13 (1Corinthians6.9)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 450, height: 40 }}
		font={{ font_size: 34, bold: true, align: 'left' }}
	>
		1 Corinthians 6:9-12
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 55, width: 450, height: 340 }}
		font={{ font_size: 17, align: 'left', wrap: true }}
		animate="fade"
	>
		Do you not know that the wicked will not inherit the kingdom of God? Do not be deceived: Neither the sexually immoral nor idolaters nor adulterers nor male prostitutes nor homosexual offenders nor thieves nor the greedy nor drunkards nor slanderers nor swindlers will inherit the kingdom of God. And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God. "Everything is permissible for me"—but not everything is beneficial. "Everything is permissible for me"—but I will not be mastered by anything.
	</Fragment>

	<!-- 1 Corinthians 10 -->
	<Fragment
		step={2}
		layout={{ x: 500, y: 10, width: 430, height: 40 }}
		font={{ font_size: 34, bold: true, align: 'left' }}
		animate="fade"
	>
		1 Corinthians 10:23-25
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 500, y: 55, width: 430, height: 200 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		"Everything is permissible"—but not everything is beneficial. "Everything is permissible"—but not everything is constructive. Nobody should seek his own good, but the good of others. Eat anything that is sold in the meat market without asking questions for conscience' sake;
	</Fragment>

	<!-- Note -->
	<Fragment
		step={3}
		layout={{ x: 500, y: 280, width: 430, height: 60 }}
		font={{ font_size: 22, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		[NIV] Permissible = [NASB, KJV] Lawful
	</Fragment>
</Slide>
