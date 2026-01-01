<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 5:20 + Galatians 3:19 - Why the Law?
	 * Custom Show ID: 4 (Romans5-Galatians2)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 30, width: 900, height: 50 }}
		font={{ font_size: 40, bold: true, align: 'center' }}
	>
		Romans 5:20
	</Fragment>

	<!-- Romans Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 100, width: 900, height: 100 }}
		font={{ font_size: 28, align: 'center', wrap: true }}
		animate="fade"
	>
		The Law came in so that the transgression would increase; but where sin increased, grace abounded all the more,
	</Fragment>

	<!-- Galatians Title -->
	<Fragment
		step={2}
		layout={{ x: 30, y: 250, width: 900, height: 40 }}
		font={{ font_size: 32, bold: true, align: 'center' }}
		animate="fade"
	>
		Galatians 3:19
	</Fragment>

	<!-- Galatians Text -->
	<Fragment
		step={2}
		layout={{ x: 30, y: 300, width: 900, height: 130 }}
		font={{ font_size: 26, align: 'center', wrap: true }}
		animate="fade"
	>
		Why the Law then? It was added because of transgressions, having been ordained through angels by the agency of a mediator, until the seed would come to whom the promise had been made.
	</Fragment>
</Slide>
