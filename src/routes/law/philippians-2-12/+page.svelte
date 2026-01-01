<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Philippians 2:12 - Work Out Salvation with Fear and Trembling
	 * Custom Show ID: 9 (Philippians2.12)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 80, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Philippians 2:12
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 180, width: 880, height: 180 }}
		font={{ font_size: 30, align: 'center', wrap: true }}
		animate="fade"
	>
		So then, my beloved, just as you have always obeyed, not as in my presence only, but now much more in my absence, work out your salvation with fear and trembling;
	</Fragment>
</Slide>
