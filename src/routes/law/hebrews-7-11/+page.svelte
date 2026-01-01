<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Hebrews 7:11-12 - Change of Priesthood, Change of Law
	 * Custom Show ID: 17 (Hebrews7.11)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 30, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Hebrews 7:11-12
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 100, width: 880, height: 160 }}
		font={{ font_size: 26, align: 'left', wrap: true }}
		animate="fade"
	>
		Now if perfection was through the Levitical priesthood (for on the basis of it the people received the Law), what further need was there for another priest to arise according to the order of Melchizedek, and not be designated according to the order of Aaron? For when the priesthood is changed, of necessity there takes place a change of law also.
	</Fragment>

	<!-- Comparison -->
	<Fragment
		step={2}
		layout={{ x: 100, y: 300, width: 320, height: 80 }}
		font={{ font_size: 26, align: 'center', wrap: true }}
		fill="var(--color-bg-light)"
		animate="fade"
	>
		Commandment Law<br/>Levitical – Not perfect
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 540, y: 300, width: 320, height: 80 }}
		font={{ font_size: 26, align: 'center', wrap: true }}
		fill="var(--color-level2)"
		animate="fade"
	>
		Law of Faith / Grace<br/>Christ – Perfect Law
	</Fragment>

	<!-- Change of Law -->
	<Fragment
		step={3}
		layout={{ x: 340, y: 420, width: 280, height: 50 }}
		font={{ font_size: 36, bold: true, align: 'center', color: '#0000CC' }}
		animate="fade"
	>
		Change of Law
	</Fragment>
</Slide>
