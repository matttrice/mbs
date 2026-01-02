<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.7, y: 8.6, width: 756.1, height: 44.4 }}
		font={{ bold: true }}
	>
		Deuteronomy 1:39
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		step={1}
		layout={{ x: 107.1, y: 57.9, width: 740, height: 157.4 }}
		line={{ width: 1 }}
		font={{ font_size: 30.8 }}
		animate="fade"
	>
		'Moreover, your little ones who you said would become a prey, and your sons, who this day have no knowledge of good or evil, shall enter there, and I will give it to them and they shall possess it.
	</Fragment>
</Slide>
