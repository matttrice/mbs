<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 105, y: 29, width: 758, height: 204 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="John 1:11-12" scale="lg">
		He came to that which was his own, but his own did not receive him. <sup>12 </sup>Yet to all who received him, to those who believed in his name, he gave the right to become children of God-- <sup>13</sup>children born not of natural descent, nor of human decision or a husband's will, but born of God.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 105, y: 84, width: 728, height: 149 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	He came to that which was his own, but his own did not receive him. <sup>12 </sup>Yet to all who received him, to those who believed in his name, he gave the right to become children of God-- <sup>13</sup>children <u>born not of natural descent</u>, nor of human decision or a husband's will, <u>but born of God</u>.
</Fragment>
