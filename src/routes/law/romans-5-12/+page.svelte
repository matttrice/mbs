<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line, Rect } from '$lib/components/svg';

	/**
	 * Drill: Romans 5:12-14 - Sin before the Law
	 */
</script>

<Slide>
	<ReferenceOverlay src="/export/05-Law/Slide10.png" />

	<Fragment
		layout={{ x: 38.8, y: 10.1, width: 756.1, height: 44.4 }}
		font={{ font_size: 44.2, bold: true }}
	>
		Romans 5:12-14
	</Fragment>

	<Fragment
		layout={{ x: 38.8, y: 47.2, width: 874, height: 177.6 }}
		font={{ font_size: 23.3, v_align: 'middle', wrap: true }}
	>
		Therefore, just as sin entered the world through one man, and death through sin, and in this way death came to all men, because all sinned— 13 for before the law was given, sin was in the world. But sin is not taken into account when there is no law. 14 Nevertheless, death reigned from the time of Adam to the time of Moses, even over those who did not sin by breaking a command, as did Adam, who was a pattern of the one to come.
	</Fragment>

	<!-- Timeline elements -->
	<Fragment
		step={1}
		layout={{ x: 707.2, y: 250.3, width: 139.9, height: 86.8 }}
		font={{ font_size: 33.3, align: 'center', v_align: 'middle' }}
		fill="var(--color-bg-cmd-law)"
		line={{ width: 2, color: "var(--color-stroke-dark)" }}
	>
		Moses<br/>Law
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 302, y: 228, width: 329.6, height: 41.4 }}
		font={{ font_size: 23.3, wrap: true }}
	>
		"before the law was given"
	</Fragment>

	<Fragment step={1.1} animate="wipe-left">
		<Arrow to={{ x: 213, y: 292 }} from={{ x: 709, y: 292 }} stroke={{ width: 18.3 }} zIndex={1} />
	</Fragment>

	<Fragment
		step={1.2}
		layout={{ x: 25.6, y: 250.3, width: 187.5, height: 83.4 }}
		font={{ font_size: 48, align: 'center', v_align: 'middle', wrap: true }}
		fill="var(--color-level1)"
		line={{ width: 2, color: "var(--color-stroke-dark)" }}
	>
		Adam
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 350, y: 254, width: 233.9, height: 34.3 }}
		font={{ font_size: 23.3 }}
	>
		"sin was in the world"
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 220, y: 325, width: 506.2, height: 41.4 }}
		font={{ font_size: 20 }}
	>
		"But sin is not taken into account when there is no law" (verse 13)
	</Fragment>

	<Fragment step={3} animate="wipe">
		<Arrow from={{ x: 123.2, y: 366 }} to={{ x: 927.7, y: 366 }} stroke={{ width: 18.3 }} zIndex={1} startMarker={{ radius: 28 }} />
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 130, y: 370, width: 734.9, height: 32.2 }}
		font={{ font_size: 19, align: 'right' }}
	>
		"Death reigned…even over those who did not sin by breaking a command" (verse 14)
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 124.2, y: 397.1, width: 685.3, height: 40.2 }}
		font={{ font_size: 26.7, align: 'center', italic: true, color: '#0000FF' }}
	>
		Why did death reign during the time period with no law?
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 356.4, y: 451.6, width: 468.8, height: 48.4 }}
		font={{ font_size: 33.3 }}
	>
		No Law = No Sin = No Death?
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 50.5, y: 440.3, width: 256.6, height: 72.6 }}
		font={{ font_size: 26.7, align: 'center', italic: true }}
	>
		Days of Noah,<br/>Sodom & Gomorrah
	</Fragment>
	
	<Fragment
		step={6}
		layout={{ x: 600, y: 450, width: 145.2, height: 45.4 }}
		font={{ font_size: 23.3, align: 'center', wrap: true }}
		zIndex={1}
	>
		"all sinned"<br/>(verse 12)
	</Fragment>
	<Fragment
		step={6}
		layout={{ x: 0, y: 441.2, width: 960, height: 72.8 }}
		font={{ font_size: 48, align: 'center', v_align: 'middle' }}
		fill="var(--color-level1)"
		line={{ color: '#000000' }}
	>
		Moral Law
	</Fragment>
</Slide>
