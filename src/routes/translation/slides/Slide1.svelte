<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow } from '$lib/components/svg';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/07-Translation/Slide1.png" />

	<!-- Static Content -->
	<!-- Title: Translation -->
	<Fragment
		layout={{ x: 332, y: 19, width: 296, height: 62 }}
		font={{ align: 'center', font_name: 'Arial', font_size: 48.3, bold: true }}
		zIndex={4}
	>
		Translation
	</Fragment>

	<!-- Excarnation references (right side, static) -->
	<Fragment
		layout={{ x: 649, y: 231, width: 244, height: 32 }}
		font={{ v_align: 'middle', color: 'var(--color-level3)' }}
		zIndex={7}
	>
		Taken up into Heaven"
	</Fragment>

	<Fragment
		layout={{ x: 651, y: 94, width: 246, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--color-level3)' }}
		zIndex={8}
	>
		Enoch- "took him away"
	</Fragment>

	<Fragment
		layout={{ x: 651, y: 138, width: 277, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--color-level3)' }}
		zIndex={9}
	>
		Elijah- "went up to heaven"
	</Fragment>

	<Fragment
		layout={{ x: 648, y: 182, width: 222, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--color-level3)' }}
		zIndex={10}
	>
		Jesus' transfiguration
	</Fragment>

	<!-- Scripture drill links (right side, static) -->
	<Fragment
		drillTo="translation/genesis-5-21"
		layout={{ x: 637, y: 77, width: 201, height: 31 }}
		font={{ v_align: 'middle', bold: true, color: 'var(--color-level3)' }}
		zIndex={11}
	>
		Genesis 5:21-24
	</Fragment>

	<Fragment
		drillTo="translation/2-kings-2-11"
		layout={{ x: 637, y: 118, width: 163, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--color-level3)' }}
		zIndex={12}
	>
		2 Kings 2:11-12
	</Fragment>

	<Fragment
		drillTo="translation/matthew-17-1"
		layout={{ x: 637, y: 164, width: 161, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--color-level3)' }}
		zIndex={13}
	>
		Matthew 17:1-3
	</Fragment>

	<Fragment
		drillTo="translation/luke-24-50"
		layout={{ x: 638, y: 208, width: 149, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--color-level3)' }}
		zIndex={14}
	>
		Luke 24:50-52
	</Fragment>

	<!-- Incarnation references (left side, static descriptions) -->
	<Fragment
		layout={{ x: 95, y: 94, width: 289, height: 24 }}
		font={{ v_align: 'middle', align: 'left', color: 'var(--color-level1)' }}
		zIndex={16}
	>
		Serpent, heard Lord walking
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 136, width: 262, height: 34 }}
		font={{ v_align: 'middle', align: 'left', font_size: 20, color: 'var(--color-level1)' }}
		zIndex={19}
	>
		Visitors surprise Abraham
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 182, width: 210, height: 51 }}
		font={{ v_align: 'middle', align: 'left', color: 'var(--color-level1)' }}
		zIndex={15}
	>
		Moses protected from glory of God
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 248, width: 178, height: 29 }}
		font={{ v_align: 'middle', align: 'left', font_size: 20, color: 'var(--color-level1)' }}
		zIndex={20}
	>
		Balaam's donkey
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 289, width: 235, height: 38 }}
		font={{ v_align: 'middle', align: 'left', font_size: 20, color: 'var(--color-level1)' }}
		zIndex={18}
	>
		glowing metal, chrysolite
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 339, width: 181, height: 29 }}
		font={{ v_align: 'middle', align: 'left', font_size: 20, color: 'var(--color-level1)' }}
		zIndex={17}
	>
		shining clothes
	</Fragment>

	<Fragment
		layout={{ x: 95, y: 382, width: 229, height: 49 }}
		font={{ v_align: 'middle', align: 'left', font_size: 20, color: 'var(--color-level1)' }}
		zIndex={21}
	>
		Paul blinded by light on Damascus road
	</Fragment>

	<!-- Scripture drill links (left side, static) -->
	<Fragment
		drillTo="translation/genesis-3-1"
		layout={{ x: 79, y: 72, width: 294, height: 32, }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={22}
	>
		Genesis 3:1-5, 8
	</Fragment>

	<Fragment
		drillTo="translation/genesis-18-1"
		layout={{ x: 79, y: 117, width: 294, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={26}
	>
		Genesis 18:1-2  3
	</Fragment>

	<Fragment
		drillTo="translation/exodus-33-21"
		layout={{ x: 79, y: 161, width: 294, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={23}
	>
		Exodus 33:21-23
	</Fragment>

	<Fragment
		drillTo="translation/numbers-22-29"
		layout={{ x: 79, y: 229, width: 294, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={27}
	>
		Numbers 22:29-33
	</Fragment>

	<Fragment
		drillTo="translation/ezekiel-1-25"
		layout={{ x: 79, y: 269, width: 294, height: 34 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={25}
	>
		Ezekiel 1:25;8:1 Daniel 10:4
	</Fragment>

	<Fragment
		drillTo="translation/acts-10-30"
		layout={{ x: 79, y: 318, width: 294, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={24}
	>
		Acts 10:30-31
	</Fragment>

	<Fragment
		drillTo="translation/acts-22-6"
		layout={{ x: 79, y: 359, width: 294, height: 32 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true, align: 'left' }}
		zIndex={28}
	>
		Acts 22:6
	</Fragment>

	<!-- Step 1: Einstein box -->
	<Fragment
		step={1}
		layout={{ x: 385, y: 86, width: 191, height: 123 }}
		fill="#000000"
		line={{ width: 4 }}
		font={{ v_align: 'middle', align: 'center', color: 'var(--color-level1)' }}
		zIndex={3}
		animate="fade"
	>
		Einstein proved<br/>matter and energy<br/>are convertible<br/>currency
	</Fragment>

	<!-- Step 1: E=MC2 box (with) -->
	<Fragment
		step={1}
		layout={{ x: 374, y: 208, width: 214, height: 72 }}
		fill="#FFFFFF"
		line={{ width: 1, color: '#000000' }}
		font={{ v_align: 'middle', align: 'center', font_name: 'Arial Black', font_size: 50, bold: true, color: 'var(--color-level3)' }}
		zIndex={29}
		animate="fade"
	>
		E=MC2
	</Fragment>

	<!-- Step 2: Spiritual label -->
	<Fragment
		step={2}
		layout={{ x: 619, y: 416, width: 294, height: 96 }}
		font={{ v_align: 'middle', align: 'center', font_size: 66.7, bold: true, color: 'var(--color-level3)' }}
		zIndex={30}
		animate="fade"
	>
		Spiritual
	</Fragment>

	<!-- Step 2: Physical label (with) -->
	<Fragment
		step={2}
		layout={{ x: 92, y: 416, width: 279, height: 88 }}
		font={{ v_align: 'middle', align: 'center', font_size: 66.7, bold: true }}
		zIndex={2}
		animate="fade"
	>
		Physical
	</Fragment>

	<!-- Step 3: Incarnation arrow (Enter - Physical to Spiritual) -->
	<Fragment step={3} animate="wipe">
		<Arrow from={{ x: 372, y: 359 }} to={{ x: 960, y: 360 }} stroke={{ width: 70, color: '#000000' }} zIndex={0} />
	</Fragment>

	<!-- Step 3: "Enter" label (with) -->
	<Fragment
		step={3}
		layout={{ x: 507, y: 321, width: 141, height: 67 }}
		font={{ font_size: 50, bold: true, color: '#FFFFFF' }}
		zIndex={32}
		animate="fade"
	>
		Enter
	</Fragment>

	<!-- Step 3: Incarnation title with drill (with) -->
	<Fragment
		step={3}
		drillTo="translation/incarnation"
		layout={{ x: 75, y: 22, width: 229, height: 56 }}
		font={{ v_align: 'middle', font_size: 39.2, bold: true }}
		zIndex={6}
		animate="fade"
	>
		Incarnation
	</Fragment>

	<!-- Step 4: Excarnation title with drill -->
	<Fragment
		step={4}
		drillTo="translation/excarnation"
		layout={{ x: 637, y: 25, width: 242, height: 56 }}
		font={{ v_align: 'middle', font_size: 39.2, bold: true, color: 'var(--color-level3)' }}
		zIndex={5}
		animate="fade"
	>
		Excarnation
	</Fragment>

	<!-- Step 4: "Exit" label (with) -->
	<Fragment
		step={4}
		layout={{ x: 399, y: 432, width: 104, height: 67 }}
		font={{ font_size: 50, bold: true, color: '#FFFFFF' }}
		zIndex={31}
		animate="fade"
	>
		Exit
	</Fragment>

	<!-- Step 4: Excarnation arrow (Exit - Spiritual to Physical) (with) -->
	<Fragment step={4} animate="wipe">
		<Arrow from={{ x: 0, y: 466 }} to={{ x: 638, y: 468 }} stroke={{ width: 70, color: 'var(--color-level3)' }} zIndex={1} />
	</Fragment>
</Slide>
