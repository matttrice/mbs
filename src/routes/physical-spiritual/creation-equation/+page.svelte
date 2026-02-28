<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import {Arrow, Line } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 82, y: 16, width: 756, height: 44 }}
		font={{ font_size: 42, align: 'center', color: 'var(--text-level-3)', bold: true }}
		zIndex={2}
	>
		Creation Equation
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 63, y: 104, width: 819, height: 42 }}
		font={{ align: 'left', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Genesis 1:1-3">
				<sup>1 </sup>In the beginning God created the <strong><em>heavens</em></strong> and the <strong><em>earth</em></strong>.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 609, y: 71, width: 250, height: 46 }}
		font={{ v_align: 'middle', align: 'right', font_size: 26.7, italic: true, bold: true }}
		line={{ width: 1 }}
		zIndex={4}
	>
		<em>(<strong>Energy &amp; Matter</strong>)</em>
	</Fragment>

	<Fragment step={2.1} animate="draw">
		<Line from={{ x: 619, y: 96 }} to={{ x: 474, y: 112 }} stroke={{ color: 'var(--stroke-level-0)', width: 3 }} endMarker={{ radius: 5 }} zIndex={1} />
	</Fragment>
	
	<Fragment step={2.1}>
		<Arrow from={{ x: 472, y: 112 }} to={{ x: 519, y: 132 }} stroke={{ color: 'var(--stroke-level-0)', width: 3 }} zIndex={0} />
		<Arrow from={{ x: 474, y: 112 }} to={{ x: 436, y: 129 }} stroke={{ color: 'var(--stroke-level-3)', width: 3 }} zIndex={0} />
	</Fragment>
	<Fragment
		step={3}
		layout={{ x: 63, y: 183, width: 819, height: 129 }}
		font={{ v_align: 'middle', wrap: true, align: 'left' }}
		zIndex={5}
	>
		<ScriptureBlock>
			<sup>2 </sup>The <strong><em><u>earth was formless and void</u></em></strong>, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 609, y: 176, width: 150, height: 46 }}
		font={{ v_align: 'middle', align: 'right', font_size: 26.7, italic: true, bold: true }}
		line={{ width: 1 }}
		zIndex={6}
	>
		<em>(<strong>Problem?</strong>)</em>
	</Fragment>
		<!-- Arrow from Problem to word Light -->	 	
	<Fragment
		step={4.1}
		zIndex={8}
	> 
		<Arrow from={{ x: 605, y: 201 }} to={{ x: 388, y: 224 }} stroke={{ color: 'var(--stroke-level-0)', width: 3 }} />
	</Fragment>

	<Fragment
		step={5}
		layout={{ x: 63, y: 321, width: 779, height: 89 }}
		font={{ v_align: 'middle', wrap: true, align: 'left' }}
		zIndex={1}
	>
		<ScriptureBlock>
			<sup>3 </sup>Then God said, <br/>"Let there be <em>light</em>"; and there was <strong>light</strong>.
		</ScriptureBlock>
	</Fragment>

	<Fragment step={5} animate="draw">
		<Line from={{ x: 368, y: 389 }} to={{ x: 411, y: 389 }} stroke={{ color: 'var(--stroke-level-3)', width: 3 }} zIndex={0} />
	</Fragment>

	<Fragment
		step={5.1}
		layout={{ x: 509, y: 322, width: 150, height: 46 }}
		font={{ v_align: 'middle', align: 'right', font_size: 26.7, italic: true, bold: true }}
		line={{ width: 1 }}
		zIndex={7}
	>
		<em>(<strong>Solution</strong>)</em>
	</Fragment>

	<!-- Arrow from Problem to word Light -->	 	
	<Fragment
		step={5.1}
		zIndex={8}
	> 
		<Arrow from={{ x: 518, y: 354 }} to={{ x: 417, y: 375 }} stroke={{ color: 'var(--stroke-level-3)', width: 3 }} />
	</Fragment>
	

</Slide>
