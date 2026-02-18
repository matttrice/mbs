<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Rect, Line } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/10-The_Priesthood/Slide3.png" />

	<!-- Static: Physical Priesthood title -->
	<Fragment
		layout={{ x: 50, y: 11, width: 365, height: 50 }}
		font={{ font_size: 33.6, bold: true, color: '#000000', wrap: true }}
	>
		Physical Priesthood
	</Fragment>

	<!-- Step 1: Gray rectangle (left column) -->
	<Fragment step={1} animate="wipe-down">
		<Rect x={59} y={53} width={331} height={487} fill="var(--bg-level-1)" zIndex={1} />
	</Fragment>

	<!-- Step 1: Top line - with previous -->
	<Fragment step={1} animate="wipe">
		<Line from={{ x: 55, y: 54 }} to={{ x: 905, y: 54 }} stroke={{ width: 3, color: '#000000' }} zIndex={2} />
	</Fragment>

	<!-- Step 1: Men Interceding/Mediating - with previous -->
	<Fragment
		step={1}
		layout={{ x: 97, y: 68, width: 248, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={4}
	>
		Men Interceding/Mediating
	</Fragment>

	<!-- Step 2: Men have titles/clergy & laity -->
	<Fragment
		step={2}
		layout={{ x: 97, y: 97, width: 266, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={5}
	>
		Men have titles/clergy & laity
	</Fragment>

	<!-- Step 3: Tithes support clergy -->
	<Fragment
		step={3}
		layout={{ x: 97, y: 126, width: 199, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={30}
	>
		Tithes support clergy
	</Fragment>

	<!-- Step 4: Men interceding die & replaced -->
	<Fragment
		step={4}
		layout={{ x: 97, y: 155, width: 287, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={6}
	>
		Men interceding die & replaced
	</Fragment>

	<!-- Step 5: Physical Holy Lands -->
	<Fragment
		step={5}
		layout={{ x: 97, y: 184, width: 194, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={7}
	>
		Physical Holy Lands
	</Fragment>

	<!-- Step 6: Physical capital on earth -->
	<Fragment
		step={6}
		layout={{ x: 97, y: 213, width: 230, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={8}
	>
		Physical capital on earth
	</Fragment>

	<!-- Step 7: Physical wars -->
	<Fragment
		step={7}
		layout={{ x: 97, y: 242, width: 138, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={9}
	>
		Physical wars
	</Fragment>

	<!-- Step 8: "Weak and Useless" drillTo -->
	<Fragment
		step={8}
		drillTo="priesthood/hebrews-7-11-19"
		layout={{ x: 98, y: 277, width: 248, height: 38 }}
		font={{ font_size: 21.6, bold: true, v_align: 'middle', wrap: true, align: 'center' }}
		zIndex={34}
	>
		"Weak and Useless"<br />(Hebrews 7:18)
	</Fragment>

	<!-- Step 9: Physical Symbols: -->
	<Fragment
		step={9}
		layout={{ x: 65, y: 317, width: 247, height: 39 }}
		font={{ font_size: 24, color: '#000000', wrap: true }}
		zIndex={16}
	>
		Physical Symbols:
	</Fragment>

	<!-- Step 10: Jewish Star image -->
	<Fragment
		step={10}
		layout={{ x: 65, y: 354, width: 101, height: 95 }}
		line={{ width: 1 }}
		zIndex={17}
	>
		<img src="/export/10-The_Priesthood/image1.png" alt="Jewish Star" class="slide-image" />
	</Fragment>

	<!-- Step 10: Judaism - with previous -->
	<Fragment
		step={10}
		layout={{ x: 55, y: 446, width: 118, height: 39 }}
		font={{ font_size: 24, bold: true, color: '#000000' }}
		zIndex={18}
	>
		Judaism
	</Fragment>

	<!-- Step 11: Islam Symbol image -->
	<Fragment
		step={11}
		layout={{ x: 170, y: 355, width: 97, height: 93 }}
		zIndex={19}
	>
		<img src="/export/10-The_Priesthood/image2.png" alt="Islam Symbol" class="slide-image" />
	</Fragment>

	<!-- Step 11: Islam - with previous -->
	<Fragment
		step={11}
		layout={{ x: 174, y: 446, width: 81, height: 39 }}
		font={{ font_size: 24, bold: true, color: '#000000' }}
		zIndex={20}
	>
		Islam
	</Fragment>

	<!-- Step 12: Orthodox Cross image -->
	<Fragment
		step={12}
		layout={{ x: 279, y: 352, width: 93, height: 96 }}
		zIndex={21}
	>
		<img src="/export/10-The_Priesthood/image3.png" alt="Orthodox Cross" class="slide-image" />
	</Fragment>

	<!-- Step 12: Orthodox/Protestant - with previous -->
	<Fragment
		step={12}
		layout={{ x: 258, y: 444, width: 139, height: 68 }}
		font={{ font_size: 24, bold: true, color: '#000000' }}
		zIndex={22}
	>
		Orthodox<br />Protestant
	</Fragment>

	<!-- Step 13: Spiritual Priesthood title -->
	<Fragment
		step={13}
		layout={{ x: 519, y: 11, width: 379, height: 50 }}
		font={{ font_size: 33.6, bold: true, color: '#0000FF', wrap: true, align: 'center' }}
		zIndex={3}
	>
		Spiritual Priesthood
	</Fragment>

	<!-- Step 13: Blue rectangle (right column) - with previous -->
	<Fragment step={13} animate="wipe-down">
		<Rect x={533} y={53} width={371} height={487} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<!-- Step 14: Hebrews 7:25 drillTo -->
	<Fragment
		step={14}
		drillTo="priesthood/hebrews-7-25"
		layout={{ x: 395, y: 62, width: 138, height: 50 }}
		font={{ font_size: 16.8, bold: true, color: '#000000' }}
		zIndex={26}
	>
		Hebrews 7:25, 1Timothy 2:5
	</Fragment>

	<!-- Step 14: Christ Intercedes - with previous -->
	<Fragment
		step={14}
		layout={{ x: 535, y: 71, width: 166, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={10}
	>
		Christ Intercedes
	</Fragment>

	<!-- Step 15: God has all titles -->
	<Fragment
		step={15}
		layout={{ x: 535, y: 108, width: 163, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={11}
	>
		God has all titles
	</Fragment>

	<!-- Step 15: Matthew 23:8-10 drillTo - with previous -->
	<Fragment
		step={15}
		drillTo="priesthood/matthew-23-8-10"
		layout={{ x: 390, y: 110, width: 151, height: 30 }}
		font={{ font_size: 16.8, bold: true, color: '#000000' }}
		zIndex={27}
	>
		Matthew 23:8-10
	</Fragment>

	<!-- Step 16: All must work for their possessions -->
	<Fragment
		step={16}
		layout={{ x: 535, y: 133, width: 318, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={31}
	>
		All must work for their possessions
	</Fragment>

	<!-- Step 16: 2 Thessalonians 3:9 drillTo - with previous -->
	<Fragment
		step={16}
		drillTo="priesthood/2-thessalonians-3-7-11"
		layout={{ x: 384, y: 137, width: 158, height: 27 }}
		font={{ font_size: 14.4, bold: true, color: '#000000', align: 'center' }}
		zIndex={32}
	>
		2 Thessalonians 3:9
	</Fragment>

	<!-- Step 17: Christ never dies, never replaced -->
	<Fragment
		step={17}
		layout={{ x: 535, y: 158, width: 304, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={12}
	>
		Christ never dies, never replaced
	</Fragment>

	<!-- Step 17: Hebrews 7:24 drillTo - with previous -->
	<Fragment
		step={17}
		drillTo="priesthood/hebrews-7-24"
		layout={{ x: 401, y: 160, width: 129, height: 30 }}
		font={{ font_size: 16.8, bold: true, color: '#000000' }}
		zIndex={28}
	>
		Hebrews 7:24
	</Fragment>

	<!-- Step 18: Spiritual land of Canaan/Eternal Sabbath -->
	<Fragment
		step={18}
		layout={{ x: 535, y: 188, width: 371, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={13}
	>
		Spiritual land of Canaan/Eternal Sabbath
	</Fragment>

	<!-- Step 19: Spiritual capital/Jerusalem above -->
	<Fragment
		step={19}
		layout={{ x: 535, y: 218, width: 304, height: 33 }}
		font={{ font_size: 19.2, color: '#000000' }}
		zIndex={14}
	>
		Spiritual capital/Jerusalem above
	</Fragment>

	<!-- Step 20: Spiritual battles -->
	<Fragment
		step={20}
		layout={{ x: 537, y: 248, width: 362, height: 56 }}
		font={{ font_size: 19.2, color: '#000000', wrap: true }}
		zIndex={15}
	>
		Spiritual battles<br />"not against flesh and blood"
	</Fragment>

	<!-- Step 21: "No graven image" -->
	<Fragment
		step={21}
		layout={{ x: 289, y: 316, width: 515, height: 33 }}
		font={{ font_size: 19.2, bold: true, color: '#000000', wrap: true, align: 'center' }}
		fill="#969696"
		zIndex={35}
	>
		"No graven image" can represent a Spiritual Nation
	</Fragment>

	<!-- Step 22: Fish Symbol image -->
	<Fragment
		step={22}
		layout={{ x: 381, y: 328, width: 158, height: 95 }}
		zIndex={23}
	>
		<img src="/export/10-The_Priesthood/image4.png" alt="Fish Symbol" class="slide-image" />
	</Fragment>

	<!-- Step 23: Evangelicalism -->
	<Fragment
		step={23}
		layout={{ x: 354, y: 418, width: 211, height: 36 }}
		font={{ font_size: 24, bold: true, v_align: 'middle', wrap: true, align: 'center' }}
		fill="#F4F4F4"
		zIndex={33}
	>
		Evangelicalism
	</Fragment>

	<!-- Step 24: Dagon (Fish God) Philistines -->
	<Fragment
		step={24}
		layout={{ x: 399, y: 452, width: 116, height: 79 }}
		font={{ font_size: 19.2, bold: true, color: '#000000', align: 'center' }}
		zIndex={24}
	>
		Dagon<br />(Fish God)<br />Philistines
	</Fragment>

	<!-- Step 24: Contradiction warning - with previous -->
	<Fragment
		step={24}
		layout={{ x: 553, y: 358, width: 334, height: 114 }}
		font={{ font_size: 21.6, color: '#000000', wrap: true, align: 'center' }}
		fill="#F4F4F4"
		zIndex={36}
	>
		A physical symbol representing a spiritual (invisible) nation is a contradiction, anathema to God
	</Fragment>
</Slide>

<style>
	:global(.slide-bg) {
		position: absolute;
		inset: 0;
		background: var(--bg-ghost);
	}

	:global(.slide-image) {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}
</style>
