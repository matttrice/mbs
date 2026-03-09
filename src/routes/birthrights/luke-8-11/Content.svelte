<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 104, y: 49, width: 762, height: 176 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Luke 8:11-12" scale="lg">
		"This is the meaning of the parable: The seed is the word of God. <sup>12</sup> Those along the path are the ones who hear, and then the devil comes and takes away the word from their hearts, so that they may not believe and be saved.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 104, y: 104, width: 735, height: 121 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	"This is the meaning of the parable: <u>The seed is the word of God</u>. <sup>12</sup> Those along the path are the ones who <u>hear</u>, and then the devil comes and takes away the <u>word from their hearts</u>, so that they may not believe and be saved.
</Fragment>
