<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 42, y: 8, width: 864, height: 274 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Peter 2:1-4" scale="lg">
			But false prophets also arose among the people, just as there will also be false teachers among you, who will secretly introduce <u>destructive heresies</u>, even denying the Master who bought them, bringing swift destruction upon themselves. <sup>2 </sup>Many will follow their sensuality, and because of them <u>the way of the truth will be maligned</u>; <sup>3 </sup>and in <em>their</em> greed they will <u>exploit you with false words</u>; their judgment from long ago is not idle, and their destruction is not asleep.<br><sup>4 </sup>For if God did not spare angels when they sinned, but cast them into hell and committed them to pits of darkness, reserved for judgment;
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Explanation box -->
	<Fragment
		step={1}
		layout={{ x: 166, y: 309, width: 596, height: 62 }}
		fill="var(--bg-cmd-law)"
		font={{ wrap: true, align: 'center', font_size: 23.3 }}
		zIndex={2}
		animate="fade"
	>
		Those facing destruction include all who are exploited, deceived or misled by false words and those who teach it.
	</Fragment>
</Slide>
