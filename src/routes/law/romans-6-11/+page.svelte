<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 6:11-14 - Dead to Sin, Alive in Christ
	 * Custom Show ID: 6 (Romans6.11-14)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 30, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Romans 6:11-14
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 100, width: 880, height: 300 }}
		font={{ font_size: 24, align: 'left', wrap: true }}
		animate="fade"
	>
		In the same way, count yourselves dead to sin but alive to God in Christ Jesus. Therefore do not let sin reign in your mortal body so that you obey its evil desires. Do not offer the parts of your body to sin, as instruments of wickedness, but rather offer yourselves to God, as those who have been brought from death to life; and offer the parts of your body to him as instruments of righteousness. For sin shall not be your master, because you are not under law, but under grace.
	</Fragment>
</Slide>
