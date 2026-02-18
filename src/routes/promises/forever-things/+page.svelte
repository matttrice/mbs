<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect, Line } from '$lib/components/svg';
</script>

<Slide>
	<!-- Background columns -->
	<Rect x={192} y={0} width={288} height={540} fill="var(--bg-level-2)" zIndex={0} />
	<Rect x={480} y={0} width={288} height={540} fill="var(--bg-level-1)" zIndex={0} />
	
	<!-- Vertical divider -->
	<Line from={{ x: 480, y: 0 }} to={{ x: 480, y: 540 }} stroke={{ width: 3, color: '#000000' }} zIndex={1} />

	<!-- Title: 1 Corinthians 15:40-45 (drillable) -->
	<Fragment
		drillTo="promises/1corinthians-15-40"
		returnHere
		layout={{ x: 280, y: -25, width: 400, height: 50 }}
		font={{ font_size: 28, bold: true }}
		fill="var(--bg-ghost)"
		line={{ color: 'var(--bg-level-0)', width: 2 }}
		zIndex={10}
	>
		1 Corinthians 15:40-45
	</Fragment>

	<!-- Column Headers -->
	<Fragment
		layout={{ x: 235, y: 70, width: 200, height: 40 }}
		font={{ font_size: 45, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		SPIRITUAL
	</Fragment>

	<Fragment
		layout={{ x: 525, y: 70, width: 200, height: 40 }}
		font={{ font_size: 45, bold: true }}
		zIndex={10}
	>
		PHYSICAL
	</Fragment>

	<!-- "or" divider -->
	<Fragment
		layout={{ x: 455, y: 70, width: 50, height: 40 }}
		font={{ font_size: 24 }}
		fill="var(--bg-ghost)"
		line={{ color: 'var(--bg-level-0)', width: 2 }}
		zIndex={5}
	>
		or
	</Fragment>

	<!-- ===== SPIRITUAL Column (Left) - Static items ===== -->
	<Fragment
		layout={{ x: 235, y: 130, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Imperishable
	</Fragment>

	<Fragment
		layout={{ x: 235, y: 165, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Glory
	</Fragment>

	<Fragment
		layout={{ x: 235, y: 200, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Power
	</Fragment>

	<Fragment
		layout={{ x: 235, y: 235, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Spiritual Body
	</Fragment>

	<Fragment
		layout={{ x: 235, y: 270, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		2nd Adam - Heaven
	</Fragment>

	<!-- ===== PHYSICAL Column (Right) - Static items ===== -->
	<Fragment
		layout={{ x: 525, y: 130, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true }}
		zIndex={10}
	>
		Perishable
	</Fragment>

	<Fragment
		layout={{ x: 525, y: 165, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true }}
		zIndex={10}
	>
		Dishonor
	</Fragment>

	<Fragment
		layout={{ x: 525, y: 200, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true }}
		zIndex={10}
	>
		Weakness
	</Fragment>

	<Fragment
		layout={{ x: 525, y: 235, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true }}
		zIndex={10}
	>
		Physical Body
	</Fragment>

	<Fragment
		layout={{ x: 525, y: 270, width: 200, height: 30 }}
		font={{ font_size: 22, bold: true }}
		zIndex={10}
	>
		1st Adam - Earth
	</Fragment>

	<!-- ===== ANIMATED Items ===== -->
	<!-- Step 1: Invisible (Spiritual) -->
	<Fragment
		step={1}
		layout={{ x: 235, y: 320, width: 200, height: 30 }}
		font={{ font_size: 40, bold: true, italic: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Invisible
	</Fragment>

	<!-- Step 2: Eternal (Spiritual) -->
	<Fragment
		step={1}
		layout={{ x: 235, y: 355, width: 200, height: 30 }}
		font={{ font_size: 40, bold: true, italic: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		Eternal
	</Fragment>

	<!-- Step 3: Visible & Temporary (Physical) -->
	<Fragment
		step={3}
		layout={{ x: 525, y: 320, width: 200, height: 30 }}
		font={{ font_size: 40, bold: true, italic: true }}
		zIndex={10}
	>
		Visible
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 525, y: 355, width: 200, height: 30 }}
		font={{ font_size: 40, bold: true, italic: true }}
		zIndex={10}
	>
		Temporary
	</Fragment>

	<!-- Step 4: True & Real (Spiritual) -->
	<Fragment
		step={4}
		layout={{ x: 235, y: 410, width: 200, height: 40 }}
		font={{ font_size: 26, bold: true, italic: true, color: 'var(--bg-level-3)' }}
		zIndex={10}
	>
		True & Real
	</Fragment>

	<!-- Step 5: Shadow & Copy (Physical) -->
	<Fragment
		step={5}
		layout={{ x: 525, y: 410, width: 200, height: 40 }}
		font={{ font_size: 26, bold: true, italic: true }}
		zIndex={10}
	>
		Shadow & Copy
	</Fragment>
</Slide>
