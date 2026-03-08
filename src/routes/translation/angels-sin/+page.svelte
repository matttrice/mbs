<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Rect } from '$lib/components/svg';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Jude 5-6 scripture -->
	<Fragment
		layout={{ x: 41, y: 13, width: 868, height: 234 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Jude 5" version="NASB">
			Though you already know all this, I want to remind you that the Lord<sup> </sup>at one time delivered his people out of Egypt, but later destroyed those who did not believe. <sup>6 </sup>And the angels who did not keep their positions of authority but abandoned their proper dwelling--these he has kept in darkness, bound with everlasting chains for judgment on the great Day.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Rounded rectangle outline -->
	<Fragment step={1}>
		<Rect x={263} y={215} width={651} height={58} stroke={{ width: 2, color: 'var(--stroke-level-0)' }} radius={10} zIndex={3} />
	</Fragment>

	<!-- Step 1: "If they abandoned Heaven where did they go?" -->
	<Fragment
		step={1}
		layout={{ x: 270, y: 210, width: 642, height: 67 }}
		font={{ align: 'center', font_size: 30, v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		If they <strong><em>abandoned</em></strong> <strong style="color: var(--text-level-3);">Heaven</strong> where did they go?
	</Fragment>

	<!-- Step 2: 2 Peter 2:4 -->
	<Fragment
		step={2}
		layout={{ x: 41, y: 253, width: 868, height: 142 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		line={{ width: 1 }}
		zIndex={0}
	>
		<ScriptureBlock title="2 Peter 2:4">
			For if God did not spare angels when they sinned, but cast them into hell and committed them to pits of darkness, reserved for judgment;
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Job 4:18 -->
	<Fragment
		step={3}
		layout={{ x: 41, y: 394, width: 450, height: 109 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		line={{ width: 1 }}
		zIndex={1}
	>
		<ScriptureBlock title="Job 4:18">
			He puts no trust even in His servants; <br>And against His angels He charges error.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: Consider evidence box -->
	<Fragment step={4}>
		<Rect x={500} y={386} width={301} height={115} stroke={{ width: 2, color: 'var(--stroke-level-0)' }} radius={10} zIndex={6} />
	</Fragment>
	<Fragment
		step={4}
		layout={{ x: 510, y: 395, width: 280, height: 99 }}
		font={{ v_align: 'middle', align: 'center', font_size: 23.3, wrap: true }}
		zIndex={5}
	>
		<strong>Consider evidence from:</strong><br>Ancient Cultures<br>Book of Enoch<br>Dead Sea Scrolls
	</Fragment>
</Slide>
