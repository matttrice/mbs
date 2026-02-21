<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line, Ellipse } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 41, y: 12, width: 756, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
		zIndex={0}
	>
		John 10:1-6
	</Fragment>

	<!-- Static: Scripture text -->
	<Fragment
		layout={{ x: 49, y: 54, width: 845, height: 216 }}
		font={{ wrap: true, font_size: 21.7 }}
		zIndex={2}
	>
		"I tell you the truth, the man who does not enter the sheep pen by the gate, but climbs in by some other way, is a thief and a robber. 2 The man who enters by the gate is the shepherd of his sheep. 3 The watchman opens the gate for him, and the sheep listen to his voice. He calls his own sheep by name and leads them out. 4 When he has brought out all his own, he goes on ahead of them, and his sheep follow him because they know his voice. 5 But they will never follow a stranger; in fact, they will run away from him because they do not recognize a stranger's voice." 6 Jesus used this figure of speech, but they did not understand what he was telling them."
	</Fragment>

	<!-- Step 1: Shepherd label -->
	<Fragment
		step={1}
		layout={{ x: 170, y: 282, width: 188, height: 42 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={7}
		animate="fade"
	>
		Shepherd:
	</Fragment>

	<!-- Step 2: Horizontal line -->
	<Fragment step={2} animate="draw">
		<Line from={{ x: 164, y: 331 }} to={{ x: 778, y: 331 }} stroke={{ width: 9, color: 'var(--stroke-level-0)' }} zIndex={13} />
	</Fragment>

	<!-- Step 3: Vertical line (gate) -->
	<Fragment step={3} animate="draw">
		<Line from={{ x: 491, y: 296 }} to={{ x: 491, y: 399 }} stroke={{ width: 9, color: 'var(--stroke-level-0)' }} zIndex={14} />
	</Fragment>

	<!-- Step 4: Thief label -->
	<Fragment
		step={4}
		layout={{ x: 529, y: 286, width: 111, height: 38 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={4}
		animate="fade"
	>
		Thief:
	</Fragment>

	<!-- Step 5: Line above gate -->
	<Fragment step={5} animate="draw">
		<Line from={{ x: 55, y: 110 }} to={{ x: 483, y: 110 }} stroke={{ width: 9, color: 'var(--stroke-level-0)' }} zIndex={17} />
	</Fragment>

	<!-- Step 6: Satan label -->
	<Fragment
		step={6}
		layout={{ x: 631, y: 287, width: 120, height: 38 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={10}
		animate="fade"
	>
		Satan
	</Fragment>

	<!-- Step 7: Blue line (proper way) -->
	<Fragment step={7} animate="draw">
		<Line from={{ x: 55, y: 136 }} to={{ x: 273, y: 136 }} stroke={{ width: 9, color: 'var(--stroke-level-3)' }} zIndex={18} />
	</Fragment>

	<!-- Step 8: Christ label -->
	<Fragment
		step={8}
		layout={{ x: 347, y: 284, width: 111, height: 41 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={9}
		animate="fade"
	>
		Christ
	</Fragment>

	<!-- Step 9: Gates label -->
	<Fragment
		step={9}
		layout={{ x: 61, y: 362, width: 138, height: 46 }}
		font={{ wrap: true, font_size: 33.3, bold: true }}
		zIndex={5}
		animate="fade"
	>
		Gates:
	</Fragment>

	<!-- Step 10: Watchman opens gate -->
	<Fragment
		step={10}
		layout={{ x: 197, y: 331, width: 271, height: 34 }}
		font={{ wrap: true, font_size: 23.3, bold: true }}
		zIndex={8}
		animate="fade"
	>
		Watchman opens gate
	</Fragment>

	<!-- Step 11: Some other way -->
	<Fragment
		step={11}
		layout={{ x: 534, y: 331, width: 202, height: 34 }}
		font={{ wrap: true, font_size: 23.3, bold: true }}
		zIndex={6}
		animate="fade"
	>
		Some other way
	</Fragment>

	<!-- Step 12: Mary label -->
	<Fragment
		step={12}
		layout={{ x: 261, y: 364, width: 118, height: 42 }}
		font={{ wrap: true, font_size: 30.0, bold: true }}
		zIndex={11}
		animate="fade"
	>
		Mary
	</Fragment>

	<!-- Step 13: Incarnation label -->
	<Fragment
		step={13}
		layout={{ x: 541, y: 364, width: 190, height: 42 }}
		font={{ wrap: true, font_size: 30.0, bold: true }}
		zIndex={12}
		animate="fade"
	>
		Incarnation
	</Fragment>

	<!-- Step 14: Sheep pen label -->
	<Fragment
		step={14}
		layout={{ x: 224, y: 428, width: 193, height: 46 }}
		font={{ font_size: 33.3, bold: true }}
		zIndex={3}
		animate="fade"
	>
		Sheep pen:
	</Fragment>

	<!-- Step 15: Earth oval -->
	<Fragment step={15} animate="fade">
		<Ellipse cx={490} cy={454} rx={64} ry={56} fill="#05D000" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={15} />
	</Fragment>

	<!-- Step 16: Earth label -->
	<Fragment
		step={16}
		drillTo="translation/john-10-1/john-10-7"
		layout={{ x: 446, y: 431, width: 89, height: 42 }}
		font={{ font_size: 30.0, bold: true }}
		zIndex={16}
		animate="fade"
	>
		Earth
	</Fragment>
</Slide>
