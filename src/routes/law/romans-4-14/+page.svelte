<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 4:14-17 - Faith, Not Law, for Inheritance
	 * Custom Show ID: 14 (Romans4.14-16)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 20, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Romans 4:14-17
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 90, width: 880, height: 280 }}
		font={{ font_size: 22, align: 'left', wrap: true }}
		animate="fade"
	>
		For if those who are of the Law are heirs, then faith is made void and the promise is nullified; for the Law brings about wrath, but where there is no law, there also is no violation. For this reason it is by faith, in order that it may be in accordance with grace, so that the promise will be guaranteed to all the descendants, not only to those who are of the Law, but also to those who are of the faith of Abraham, who is the father of us all, (as it is written: "I have made you a father of many nations") in the presence of Him whom he believed, that is, God, who gives life to the dead and calls into being things that do not exist.
	</Fragment>

	<!-- Question -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 400, width: 880, height: 60 }}
		font={{ font_size: 32, italic: true, align: 'center', color: '#0000CC' }}
		animate="fade"
	>
		What then is the Church under?
	</Fragment>
</Slide>
