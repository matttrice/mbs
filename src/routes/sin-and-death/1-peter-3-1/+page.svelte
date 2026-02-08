<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 97.8, y: 18.8, width: 755.9, height: 44.4 }}
		font={{ bold: true }}
	>
		1Peter 3:1-4
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 101.1, y: 61.1, width: 771.1, height: 381.6 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8, wrap: true }}
		animate="fade"
	>
		In the same way, you wives, be submissive to your own husbands so that even if any of them are disobedient to the word, they may be won without a word by the behavior of their wives, 2 as they observe your chaste and respectful behavior. 3 Your adornment must not be merely external--braiding the hair, and wearing gold jewelry, or putting on dresses; 4 but let it be the hidden person of the heart, with the imperishable quality of a gentle and quiet spirit, which is precious in the sight of God.
	</Fragment>
</Slide>
