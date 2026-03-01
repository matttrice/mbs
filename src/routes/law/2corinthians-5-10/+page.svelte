<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 98, y: 24, width: 761, height: 256 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="2 Corinthians 5:10">
			For we must all appear before the judgment seat of <br>Christ, that each one may receive what is due him for <br>the thing done while in the body, whether good or bad.<br><sup>11</sup> Since, then, we know what it is to fear the Lord, we try<br>to persuade men.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 60, y: 284, width: 840, height: 112 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, wrap: true }}
		fill="var(--bg-level-2)"
	>
		Did you respect the office of Ambassador for Christ?<br>Did you respect your grace period? Your diplomatic immunity?
	</Fragment>
</Slide>
