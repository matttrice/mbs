<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 116, y: 48, width: 493, height: 42 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Revelation 20:6
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 112, y: 82, width: 735, height: 153 }}
		font={{ font_size: 30, v_align: 'middle', align: 'left', wrap: true }}
	>
		Blessed and holy is the one who has a part in the first resurrection; over these the second death has no power, but they will be priests of God and of Christ and will reign with Him for a thousand years.
	</Fragment>

	<!-- Step 1: Question - Who is the first to be resurrected (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 123, y: 241, width: 300, height: 72 }}
		fill="var(--color-level2)"
		font={{ font_size: 26.7, align: 'center', wrap: true }}
		line={{ width: 2, color: 'var(--color-stroke-darkest)' }}
	>
		Who is the first to be resurrected from death?
	</Fragment>

	<!-- Step 2: Arrow (timing: click) -->
	<Fragment step={2} animate="wipe-right">
		<Arrow from={{ x: 421, y: 281 }} to={{ x: 640, y: 281 }} stroke={{ width: 23, color: '#000000' }} zIndex={1} />
	</Fragment>

	<!-- Step 2.1: CHRIST (timing: after 500ms) -->
	<Fragment
		step={2.1}
		layout={{ x: 662, y: 246, width: 185, height: 62 }}
		font={{ font_size: 45, bold: true, align: 'left' }}
	>
		CHRIST
	</Fragment>

	<!-- Step 3: Question - What did Christ leave behind (timing: click) -->
	<Fragment
		step={3}
		layout={{ x: 123, y: 340, width: 300, height:190 }}
		fill="var(--color-level2)"
		font={{ font_size: 26.7, align: 'left', wrap: true }}
		line={{ width: 2, color: 'var(--color-stroke-darkest)' }}
	>
		What did Christ leave behind as a way for you to "have a part" in His death, burial, and resurrection?
	</Fragment>

	<!-- Step 4: Arrow (timing: click) -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 421, y: 437 }} to={{ x: 640, y: 437 }} stroke={{ width: 23, color: '#000000' }} zIndex={1} />
	</Fragment>

	<!-- Step 4.1: BAPTISM (timing: after 500ms) -->
	<Fragment
		step={4.1}
		layout={{ x: 662, y: 410, width: 205, height: 56 }}
		font={{ font_size: 45, bold: true, align: 'left' }}
	>
		BAPTISIM
	</Fragment>
</Slide>
