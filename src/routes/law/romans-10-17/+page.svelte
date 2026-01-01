<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 10:17 - Faith Comes from Hearing
	 * Custom Show ID: 8 (Romans10.17)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 50, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Romans 10:17
	</Fragment>

	<!-- NASB Version -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 140, width: 880, height: 100 }}
		font={{ font_size: 28, align: 'center', wrap: true }}
		animate="fade"
	>
		<strong>NASB:</strong> So faith comes from hearing, and hearing by the word of Christ.
	</Fragment>

	<!-- NIV Version -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 280, width: 880, height: 100 }}
		font={{ font_size: 28, align: 'center', wrap: true }}
		animate="fade"
	>
		<strong>NIV:</strong> Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.
	</Fragment>
</Slide>
