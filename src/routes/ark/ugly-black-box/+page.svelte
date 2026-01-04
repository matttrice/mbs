<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Rect } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 139, y: 30, width: 681, height: 100 }}
		fill="#000000"
		font={{ font_size: 39.2, bold: true, color: '#F4F4F4' }}
	>
		What does the Ark look like?
	</Fragment>

	<!-- Step 1: an ugly black box (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 316, y: 127, width: 332, height: 51 }}
		font={{ font_size: 35, align: 'center' }}
		line={{ width: 4 }}
	>
		an ugly black box…
	</Fragment>

	<!-- Step 2: What did Christ physically look like? (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 247, y: 175, width: 466, height: 72 }}
		font={{ font_size: 26.7, align: 'center' }}
		line={{ width: 4 }}
	>
		What did Christ physically look like?Isaiah 53:1-2
	</Fragment>

	<!-- Step 3: Isaiah 53 scripture (timing: click) -->
	<Fragment
		step={3}
		layout={{ x: 214, y: 244, width: 576, height: 176 }}
		fill="#F4F4F4"
		font={{ font_size: 23.3, align: 'left', wrap: true }}
		line={{ width: 4, color: '#000000' }}
	>
		Who has believed our message? And to whom has the arm of the LORD been revealed? 2 For He grew up before Him like a tender  shoot, And like a root out of parched ground; He has no {'{stately}'} form or majesty That we should look upon Him, Nor appearance that we should be attracted to Him.
	</Fragment>

	<!-- Step 3.1: Arrow pointing to Common (timing: after) -->
	<Fragment step={3.1} animate="wipe-down">
		<Arrow from={{ x: 480, y: 245 }} to={{ x: 480, y: 287 }} stroke={{ width: 13, color: '#000000' }} zIndex={1} />
	</Fragment>

	<!-- Step 3.2: Common, maybe even ugly (timing: after) -->
	<Fragment
		step={3.2}
		layout={{ x: 287, y: 278, width: 386, height: 45 }}
		font={{ font_size: 30.8, align: 'center' }}
		line={{ width: 4 }}
	>
		Common, maybe even ugly.
	</Fragment>

	<!-- Step 4: What is the spiritual counterpart (timing: click) -->
	<Fragment
		step={4}
		layout={{ x: 214, y: 316, width: 531, height: 40 }}
		font={{ font_size: 26.7, align: 'center' }}
		line={{ width: 4 }}
	>
		What is the spiritual counterpart of the Ark?
	</Fragment>

	<!-- Step 4: Ark = ? (timing: with) -->
	<Fragment
		step={4}
		layout={{ x: 209, y: 351, width: 190, height: 61 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'center' }}
		line={{ width: 1 }}
	>
		Ark  = ?
	</Fragment>

	<!-- Step 5: Jesus (timing: click) -->
	<Fragment
		step={5}
		layout={{ x: 389, y: 351, width: 142, height: 62 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'center' }}
		line={{ width: 1 }}
	>
		Jesus
	</Fragment>

	<!-- Step 5: Cover ? mark (timing: with) -->
	<Fragment step={5} animate="fade">
		<Rect x={349} y={349} width={42} height={64} fill="#F4F4F4" stroke={{ width: 1 }} zIndex={2} />
	</Fragment>

	<!-- Step 6: Who is the Church? drillTo (timing: click) -->
	<Fragment
		step={6}
		drillTo="ark/1-corinthians-12"
		layout={{ x: 354, y: 421, width: 252, height: 73 }}
		font={{ font_size: 26.7, align: 'center' }}
		line={{ width: 4 }}
	>
		Who is the Church?1 Corinthians 12
	</Fragment>

	<!-- Step 7: = Church (timing: click) -->
	<Fragment
		step={7}
		layout={{ x: 544, y: 351, width: 211, height: 61 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'center' }}
		line={{ width: 4 }}
	>
		=  Church
	</Fragment>
</Slide>
