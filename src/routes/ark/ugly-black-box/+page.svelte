<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow, Rect } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 139, y: 30, width: 681, height: 100 }}
		fill="var(--bg-level-0)"
		font={{ font_size: 39, bold: true, color: 'var(--text-light)' }}
	>
		What does the Ark look like?
	</Fragment>

	<!-- Step 1: an ugly black box (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 138, y: 129, width: 332, height: 51 }}
		font={{ font_size: 35, align: 'left', v_align: 'middle' }}
	>
		An ugly black box…
	</Fragment>

	<!-- Step 2: What did Christ physically look like? (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 138, y: 170, width: 586, height: 42 }}
		font={{ font_size: 35, align: 'left', v_align: 'middle' }}
	>
		What did Christ physically look like?
	</Fragment>

	<!-- Step 3: Isaiah 53 scripture (timing: click) -->
	<Fragment
		step={3}
		layout={{ x: 42, y: 217, width: 316, height: 306 }}
		fill="var(--bg-ghost)"
		font={{ align: 'center', v_align: 'middle', wrap: true }}
		line={{ width: 4, color: 'var(--stroke-level-0)' }}
	>
		<ScriptureBlock title="Isaiah 53:1-2" scale="md">
			Who has believed our message? And to whom has the arm of the LORD been revealed? <sup>2</sup><sup> </sup>For He grew up before Him like a tender  shoot, And like a root out of parched ground; He has no {'{stately}'} form or majesty That we should look upon Him, Nor appearance that we should be attracted to Him.
		</ScriptureBlock>
	</Fragment>

	<Fragment step={4} animate="wipe-up">
		<Arrow from={{ x: 324, y: 393 }} to={{ x: 383, y: 255 }} stroke={{ width: 5, color: 'var(--stroke-level-0)' }} zIndex={1} />
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 378, y: 212, width: 386, height: 45 }}
		font={{ font_size: 30.8, align: 'left', v_align: 'middle' }}
	>
		Common, maybe even ugly.
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 383, y: 261, width: 531, height: 40 }}
		font={{ font_size: 26.7, align: 'left', v_align: 'middle' }}
	>
		What is the spiritual counterpart of the Ark?
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 381, y: 291, width: 190, height: 61 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'left' }}
		line={{ width: 1 }}
	>
		<strong>Ark</strong> &nbsp; = ?
	</Fragment>

	<Fragment
		step={6}
		layout={{ x: 510, y: 291, width: 162, height: 61 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'center' }}
		fill="var(--bg-light)"
		zIndex={1}
	>
		<strong>Jesus</strong>
	</Fragment>

	<!-- Step 6: Who is the Church? drillTo (timing: click) -->
	<Fragment
		step={7}
		drillTo="ark/1-corinthians-12"
		returnHere
		layout={{ x: 376, y: 350, width: 500, height: 60 }}
		font={{ font_size: 27, align: 'center', v_align: 'middle', wrap: true }}
	>
		Who is the Church? <strong>1 Corinthians 12</strong>
	</Fragment>

	<Fragment
		step={8}
		layout={{ x: 670, y: 291, width: 211, height: 61 }}
		font={{ font_size: 44.2, bold: true, v_align: 'middle', align: 'center', wrap: true }}
		line={{ width: 4 }}
	>
		=  <strong style="color:var(--text-level-3)">Church</strong>
	</Fragment>
</Slide>
