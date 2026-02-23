<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Line, Rect } from '$lib/components/svg';

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>

	<!-- Static: Physical Priesthood title -->
	<Fragment
		layout={{ x: 50, y: 10, width: 365, height: 48 }}
		font={{ font_size: 33.6, bold: true, wrap: true }}
		zIndex={30}
	>
		Physical Priesthood
	</Fragment>

	<!-- Step 1: Gray rect + line + Men Interceding -->
	<Fragment step={1}>
		<Rect x={58} y={52} width={332} height={488} fill="var(--bg-level-1)" zIndex={1} />
	</Fragment>

	<Fragment step={1}>
		<Line from={{ x: 56, y: 54 }} to={{ x: 906, y: 54 }} stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={2} />
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 97, y: 68, width: 242, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={4}
	>
		Men Interceding/Mediating
	</Fragment>

	<!-- Step 2: Men have titles -->
	<Fragment
		step={2}
		layout={{ x: 97, y: 98, width: 260, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={5}
	>
		Men have titles/clergy &amp; laity
	</Fragment>

	<!-- Step 3: Tithes support clergy -->
	<Fragment
		step={3}
		layout={{ x: 97, y: 126, width: 194, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={31}
	>
		Tithes support clergy
	</Fragment>

	<!-- Step 4: Men interceding die & replaced -->
	<Fragment
		step={4}
		layout={{ x: 97, y: 155, width: 281, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={6}
	>
		Men interceding die &amp; replaced
	</Fragment>

	<!-- Step 5: Physical Holy Lands -->
	<Fragment
		step={5}
		layout={{ x: 97, y: 184, width: 189, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={7}
	>
		Physical Holy Lands
	</Fragment>

	<!-- Step 6: Physical capital on earth -->
	<Fragment
		step={6}
		layout={{ x: 97, y: 213, width: 224, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={8}
	>
		Physical capital on earth
	</Fragment>

	<!-- Step 7: Physical wars -->
	<Fragment
		step={7}
		layout={{ x: 97, y: 242, width: 133, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={9}
	>
		Physical wars
	</Fragment>

	<!-- Step 8: "Weak and Useless" drill to hebrews-7-11-19 -->
	<Fragment
		step={8}
		drillTo="priesthood/hebrews-7-11-19"
		layout={{ x: 98, y: 278, width: 248, height: 38 }}
		font={{ font_size: 21.6, bold: true, v_align: 'middle', align: 'center', wrap: true }}
		zIndex={34}
	>
		<strong>"Weak and Useless"</strong><br />(Hebrews 7:18)
	</Fragment>

	<!-- Step 9: Physical Symbols: -->
	<Fragment
		step={9}
		layout={{ x: 65, y: 317, width: 247, height: 36 }}
		font={{ font_size: 24, wrap: true }}
		zIndex={16}
	>
		Physical Symbols:
	</Fragment>

	<!-- Step 10: Jewish Star image + Judaism -->
	<Fragment
		step={10}
		layout={{ x: 65, y: 354, width: 101, height: 95 }}
		line={{ width: 1 }}
		zIndex={17}
	>
		<img src="/export/10-The_Priesthood/image1.png" alt="Jewish Star" class="slide-image" />
	</Fragment>

	<Fragment
		step={10}
		layout={{ x: 55, y: 446, width: 112, height: 36 }}
		font={{ font_size: 24, bold: true }}
		zIndex={18}
	>
		<strong>Judaism</strong>
	</Fragment>

	<!-- Step 11: Islam image + Islam -->
	<Fragment
		step={11}
		layout={{ x: 170, y: 356, width: 98, height: 93 }}
		zIndex={19}
	>
		<img src="/export/10-The_Priesthood/image2.png" alt="Islam Symbol" class="slide-image" />
	</Fragment>

	<Fragment
		step={11}
		layout={{ x: 174, y: 446, width: 76, height: 36 }}
		font={{ font_size: 24, bold: true }}
		zIndex={20}
	>
		<strong>Islam</strong>
	</Fragment>

	<!-- Step 12: Orthodox Cross image + Orthodox/Protestant -->
	<Fragment
		step={12}
		layout={{ x: 280, y: 352, width: 93, height: 96 }}
		zIndex={21}
	>
		<img src="/export/10-The_Priesthood/image3.png" alt="Orthodox Cross" class="slide-image" />
	</Fragment>

	<Fragment
		step={12}
		layout={{ x: 257, y: 445, width: 134, height: 65 }}
		font={{ font_size: 24, bold: true, wrap: true }}
		zIndex={22}
	>
		<strong>Orthodox</strong><br /><strong>Protestant</strong>
	</Fragment>

	<!-- Step 13: Spiritual Priesthood title + blue rect -->
	<Fragment
		step={13}
		layout={{ x: 519, y: 12, width: 379, height: 112 }}
		font={{ font_size: 43, bold: true, align: 'center', color: 'var(--text-level-3)', wrap: true }}
		zIndex={3}
	>
		<strong>Spiritual Priesthood</strong>
	</Fragment>

	<Fragment step={13}>
		<Rect x={533} y={52} width={371} height={488} fill="var(--bg-level-2)" zIndex={0} />
	</Fragment>

	<!-- Step 14: Hebrews 7:25 drill + Christ Intercedes -->
	<Fragment
		step={14}
		drillTo="priesthood/hebrews-7-25"
		layout={{ x: 395, y: 62, width: 134, height: 48 }}
		font={{ font_size: 16.8, bold: true, wrap: true }}
		zIndex={27}
	>
		<strong>Hebrews 7:25, </strong><br /><strong>1Timothy 2:5</strong>
	</Fragment>

	<Fragment
		step={14}
		layout={{ x: 536, y: 71, width: 161, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={10}
	>
		Christ Intercedes
	</Fragment>

	<!-- Step 15: God has all titles + Matthew 23:8-10 drill -->
	<Fragment
		step={15}
		layout={{ x: 535, y: 109, width: 158, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={11}
	>
		God has all titles
	</Fragment>

	<Fragment
		step={15}
		drillTo="priesthood/matthew-23-8-10"
		layout={{ x: 390, y: 110, width: 146, height: 28 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={28}
	>
		<strong>Matthew 23:8-10</strong>
	</Fragment>

	<!-- Step 16: All must work + 2 Thessalonians drill -->
	<Fragment
		step={16}
		layout={{ x: 535, y: 134, width: 313, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={32}
	>
		All must work for their possessions
	</Fragment>

	<Fragment
		step={16}
		drillTo="priesthood/2-thessalonians-3-7-11"
		layout={{ x: 387, y: 136, width: 152, height: 25 }}
		font={{ font_size: 14.4, bold: true, align: 'center' }}
		zIndex={33}
	>
		<strong>2 Thessalonians 3:9</strong>
	</Fragment>

	<!-- Step 17: Christ never dies + Hebrews 7:24 drill -->
	<Fragment
		step={17}
		layout={{ x: 536, y: 158, width: 298, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={12}
	>
		Christ never dies, never replaced
	</Fragment>

	<Fragment
		step={17}
		drillTo="priesthood/hebrews-7-24"
		layout={{ x: 401, y: 160, width: 124, height: 28 }}
		font={{ font_size: 16.8, bold: true }}
		zIndex={29}
	>
		<strong>Hebrews 7:24</strong>
	</Fragment>

	<!-- Step 18: Spiritual land of Canaan -->
	<Fragment
		step={18}
		layout={{ x: 536, y: 188, width: 365, height: 31 }}
		font={{ font_size: 19.2, wrap: true }}
		zIndex={13}
	>
		Spiritual land of Canaan/Eternal Sabbath
	</Fragment>

	<!-- Step 19: Spiritual capital -->
	<Fragment
		step={19}
		layout={{ x: 536, y: 218, width: 298, height: 31 }}
		font={{ font_size: 19.2 }}
		zIndex={14}
	>
		Spiritual capital/Jerusalem above
	</Fragment>

	<!-- Step 20: Spiritual battles -->
	<Fragment
		step={20}
		layout={{ x: 537, y: 248, width: 362, height: 54 }}
		font={{ font_size: 19.2, wrap: true }}
		zIndex={15}
	>
		Spiritual battles<br />"not against flesh and blood"
	</Fragment>

	<!-- Step 21: No graven image -->
	<Fragment
		step={21}
		layout={{ x: 290, y: 316, width: 514, height: 31 }}
		font={{ font_size: 19.2, bold: true, align: 'center', wrap: true }}
		fill="#969696"
		zIndex={35}
	>
		<strong>"No graven image" can represent a <u>Spiritual</u> Nation </strong>
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
		font={{ font_size: 24, bold: true, v_align: 'middle', align: 'center', wrap: true }}
		zIndex={36}
	>
		<strong>Evangelicalism</strong>
	</Fragment>

	<!-- Step 24: Dagon + contradiction text -->
	<Fragment
		step={24}
		layout={{ x: 402, y: 452, width: 112, height: 77 }}
		font={{ font_size: 19.2, bold: true, align: 'center', wrap: true }}
		zIndex={24}
	>
		<strong>Dagon</strong><br /><strong>(Fish God)</strong><br /><strong>Philistines</strong>
	</Fragment>

	<Fragment
		step={24}
		layout={{ x: 554, y: 358, width: 334, height: 86 }}
		font={{ font_size: 21.6, align: 'center', wrap: true }}
		fill="var(--bg-ghost)"
		zIndex={25}
	>
		A physical symbol representing a spiritual (invisible) nation is <strong>a contradiction</strong>, anathema to God
	</Fragment>
</Slide>
