<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Kings 2:11-12 -->
	<Fragment
		layout={{ x: 105, y: 49, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		2 Kings 2:11-12
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 99, y: 91, width: 737, height: 262 }}
		font={{ wrap: true, font_size: 30 }}
		zIndex={1}
	>
		As they were walking along and talking together, suddenly a chariot of fire and horses of fire appeared and separated the two of them, and Elijah went up to heaven in a whirlwind. 12 Elisha saw this and cried out, "My father! My father! The chariots and horsemen of Israel!" And Elisha saw him no more. Then he took hold of his own clothes and tore them apart.
	</Fragment>
</Slide>
