<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 99, y: 24, width: 759, height: 263 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Romans 6:17-18">
			But thanks be to God that, though you used to be <br>slaves to sin, you wholeheartedly obeyed the form of <br>teaching to which you were entrusted. <br><br><sup>18</sup> You have been <em><u>set free from sin</u></em> and have<br> become <em><u>slaves to righteousness</u></em>.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 66, y: 324, width: 849, height: 141 }}
		font={{ align: 'center', font_size: 30, color: 'var(--text-level-3)', wrap: true }}
	>
		Freedom from sin but a slave to righteousness.<br>This dictates a new standard; a responsibility to live by.<br>Are God's standards easy to meet?
	</Fragment>
</Slide>
