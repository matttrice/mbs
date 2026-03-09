<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 103, y: 15, width: 756, height: 138 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Hebrews 11:1-2" scale="lg">
		Now faith is being sure of what we hope for and certain of what we do not see. <sup>2</sup> This is what the ancients were <br>commended for.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 103, y: 60, width: 702, height: 93 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	Now faith is being sure of what we hope for and <u>certain of what we do not see</u>. <sup>2</sup> This is what the ancients were <br>commended for.
</Fragment>

<!-- Step 1: Commentary (with previous) -->
<Fragment
	step={1}
	layout={{ x: 139, y: 260, width: 710, height: 115 }}
	font={{ font_size: 23.3, italic: true, color: 'var(--text-level-3)', wrap: true }}
>
	<em>Being certain of what is not seen means you are spiritually minded; a Jacob type of individual</em><br><em>[Noah, Abraham, Isaac, Jacob, Moses, etc.]</em><br>
</Fragment>
