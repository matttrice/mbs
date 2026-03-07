<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow } from '$lib/components/svg';
	import { navigation } from '$lib/stores/navigation';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 332, y: 19, width: 296, height: 62 }}
		font={{ align: 'center', font_size: 48.3, bold: true }}
		zIndex={4}
	>
		Translation
	</Fragment>

	<!-- Step 1: Einstein matter/energy box -->
	<Fragment
		step={1}
		layout={{ x: 385, y: 86, width: 191, height: 123 }}
		font={{ v_align: 'middle', font_size:22, align: 'center', wrap: true }}
		fill="var(--bg-level-1)"
		line={{ width: 4 }}
		zIndex={3}
	>
		Einstein proved<br>matter and energy<br>are convertible<br>currency
	</Fragment>

	<!-- Step 1: E=MC² -->
	<Fragment
		step={1}
		layout={{ x: 374, y: 208, width: 214, height: 72 }}
		font={{ font_size: 48.3, font_name: 'Arial Black', v_align: 'middle', align: 'center', color: 'var(--text-level-3)' }}
		fill="white"
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
		zIndex={29}
	>
		<strong>E</strong>=<strong>MC</strong><sup>2</sup>
	</Fragment>

	<!-- Step 2: Spiritual -->
	<Fragment
		step={2}
		layout={{ x: 619, y: 416, width: 294, height: 96 }}
		font={{ v_align: 'middle', align: 'center', font_size: 66.7, bold: true, color: 'var(--text-level-3)' }}
		zIndex={30}
	>
		Spiritual
	</Fragment>

	<!-- Step 2: Physical -->
	<Fragment
		step={2}
		layout={{ x: 75, y: 432, width: 279, height: 72 }}
		font={{ v_align: 'middle', align: 'center', font_size: 66.7, bold: true }}
		fill="var(--bg-ghost)"
		zIndex={2}
	>
		Physical
	</Fragment>

	<!-- Step 3: Enter arrow (thick black horizontal bar) -->
	<Fragment step={3} animate="draw">
		<Arrow to={{ x: 372, y: 359 }} from={{ x: 960, y: 360 }} stroke={{ width: 60, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<!-- Step 3: Enter label -->
	<Fragment
		step={3}
		layout={{ x: 580, y: 325, width: 141, height: 67 }}
		font={{ font_size: 50, bold: true, color: '#FFFFFF' }}
		zIndex={32}
	>
		Enter
	</Fragment>

	<!-- Step 3: Incarnation (underlined, drillTo) -->
	<Fragment
		step={4}
		drillTo="translation/incarnation"
		layout={{ x: 75, y: 22, width: 229, height: 56 }}
		font={{ v_align: 'middle', font_size: 39.2, bold: true }}
		zIndex={6}
	>
		<u>Incarnation</u>
	</Fragment>

	<!-- Step 4: Genesis 3:1-5, 8 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 72, width: 170, height: 32 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={22}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/genesis-3-1-5', 0, false)}>Genesis 3:1-5, 8</span>
	</Fragment>

	<!-- Step 4: Serpent, heard Lord walking -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 94, width: 289, height: 24 }}
		font={{ v_align: 'middle',font_size: 20, color: 'var(--text-level-1)' }}
		zIndex={16}
	>
		Serpent, heard Lord walking
	</Fragment>

	<!-- Step 4: Genesis 18:1-2 3 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 117, width: 222, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={26}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/genesis-18-1-3', 0, false)}>Genesis 18:1-2  3</span>
	</Fragment>

	<!-- Step 4: Visitors surprise Abraham -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 136, width: 262, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)' }}
		zIndex={19}
	>
		Visitors surprise Abraham
	</Fragment>

	<!-- Step 4: Exodus 33:21-23 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 161, width: 203, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={23}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/exodus-33-21-23', 0, false)}>Exodus 33:21-23</span>
	</Fragment>

	<!-- Step 4: Moses protected from glory of God -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 182, width: 210, height: 51 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)', wrap: true }}
		zIndex={15}
	>
		Moses protected <br>from glory of God
	</Fragment>

	<!-- Step 4: Numbers 22:29-33 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 229, width: 239, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={27}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/numbers-22-29-33', 0, false)}>Numbers 22:29-33</span>
	</Fragment>

	<!-- Step 4: Balaam's donkey -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 248, width: 178, height: 29 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)' }}
		zIndex={20}
	>
		Balaam's donkey
	</Fragment>

	<!-- Step 4: Ezekiel 1:25;8:1 Daniel 10:4 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 269, width: 294, height: 34 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={25}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/ezekiel-1-daniel-10', 0, false)}>Ezekiel 1:25;8:1 Daniel 10:4</span>
	</Fragment>

	<!-- Step 4: glowing metal, chrysolite -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 289, width: 235, height: 38 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)' }}
		zIndex={18}
	>
		glowing metal, chrysolite
	</Fragment>

	<!-- Step 4: Acts 10:30-31 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 318, width: 169, height: 31 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={24}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/acts-10-30-31', 0, false)}>Acts 10:30-31</span>
	</Fragment>

	<!-- Step 4: shining clothes -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 339, width: 181, height: 29 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)' }}
		zIndex={17}
	>
		shining clothes
	</Fragment>

	<!-- Step 4: Acts 22:6 (click-only) -->
	<Fragment
		step={4}
		layout={{ x: 79, y: 359, width: 122, height: 32 }}
		font={{ v_align: 'middle', font_size: 21.7, bold: true }}
		zIndex={28}
	>
		<span style="cursor: pointer;" onclick={() => navigation.drillInto('translation/acts-22-6-9', 0, false)}>Acts 22:6</span>
	</Fragment>

	<!-- Step 4: Paul blinded by light on Damascus road -->
	<Fragment
		step={4}
		layout={{ x: 95, y: 382, width: 229, height: 49 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-1)', wrap: true }}
		zIndex={21}
	>
		Paul blinded by light on <br>Damascus road
	</Fragment>

	<!-- Step 5: Excarnation (underlined, drillTo) -->
	<Fragment
		step={5}
		drillTo="translation/excarnation"
		layout={{ x: 637, y: 25, width: 242, height: 56 }}
		font={{ v_align: 'middle', font_size: 39.2, bold: true, color: 'var(--text-level-3)' }}
		zIndex={5}
	>
		<u>Excarnation</u>
	</Fragment>

	<!-- Step 5: Exit label -->
	<Fragment
		step={5}
		layout={{ x: 402, y: 434, width: 104, height: 67 }}
		font={{ font_size: 50, bold: true, color: '#FFFFFF' }}
		zIndex={31}
	>
		Exit
	</Fragment>

	<!-- Step 5: Exit arrow (thick blue horizontal bar) -->
	<Fragment step={5} animate="draw">
		<Arrow from={{ x: 0, y: 468 }} to={{ x: 638, y: 468 }} stroke={{ width: 80, color: 'var(--stroke-level-3)' }} zIndex={1} />
	</Fragment>

	<!-- Step 5: Taken up into Heaven -->
	<Fragment
		step={5}
		layout={{ x: 649, y: 231, width: 244, height: 32 }}
		font={{ v_align: 'middle', color: 'var(--text-level-3)' }}
		zIndex={7}
	>
		Taken up into Heaven"
	</Fragment>

	<!-- Step 5: Luke 24:50-52 (drillTo) -->
	<Fragment
		step={5}
		drillTo="translation/luke-24-50-52"
		layout={{ x: 638, y: 208, width: 149, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--text-level-3)' }}
		zIndex={14}
	>
		Luke 24:50-52
	</Fragment>

	<!-- Step 5: Matthew 17:1-3 (drillTo) -->
	<Fragment
		step={5}
		drillTo="translation/matthew-17-1-3"
		layout={{ x: 637, y: 164, width: 161, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--text-level-3)' }}
		zIndex={13}
	>
		Matthew 17:1-3
	</Fragment>

	<!-- Step 5: Jesus' transfiguration -->
	<Fragment
		step={5}
		layout={{ x: 648, y: 182, width: 222, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-3)' }}
		zIndex={10}
	>
		Jesus' transfiguration
	</Fragment>

	<!-- Step 5: Elijah- "went up to heaven" -->
	<Fragment
		step={5}
		layout={{ x: 651, y: 138, width: 277, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-3)' }}
		zIndex={9}
	>
		Elijah- "went up to heaven"
	</Fragment>

	<!-- Step 5: 2 Kings 2:11-12 (drillTo) -->
	<Fragment
		step={5}
		drillTo="translation/2-kings-2-11-12"
		layout={{ x: 637, y: 118, width: 163, height: 32 }}
		font={{ v_align: 'middle', font_size: 20, bold: true, color: 'var(--text-level-3)' }}
		zIndex={12}
	>
		2 Kings 2:11-12
	</Fragment>

	<!-- Step 5: Genesis 5:21-24 (drillTo) -->
	<Fragment
		step={5}
		drillTo="translation/genesis-5-21-24"
		layout={{ x: 637, y: 77, width: 201, height: 31 }}
		font={{ v_align: 'middle', bold: true, color: 'var(--text-level-3)' }}
		zIndex={11}
	>
		Genesis 5:21-24
	</Fragment>

	<!-- Step 5: Enoch- "took him away" -->
	<Fragment
		step={5}
		layout={{ x: 651, y: 94, width: 246, height: 34 }}
		font={{ v_align: 'middle', font_size: 20, color: 'var(--text-level-3)' }}
		zIndex={8}
	>
		Enoch- "took him away"
	</Fragment>
</Slide>
