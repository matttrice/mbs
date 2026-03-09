<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 103, y: 42, width: 756, height: 462 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="1 Corinthians 15:45-49">
		So it is written: <br>"The first man Adam became a living being"<br>the last Adam, a life-giving spirit. <br><sup>46</sup>The spiritual did not come first, but the <br>natural, and after that the spiritual. <br><sup>47</sup>The first man was of the dust of the earth,<br> the second man from heaven. <br><sup>48</sup>As was the earthly man, so are those who <br>are of the earth; and as is the man from heaven,<br>so also are those who are of heaven. <sup>49</sup>And <br>just as we have borne the likeness of the <br>earthly man, so shall we bear the likeness <br>of the man from heaven.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 120, y: 91, width: 529, height: 413 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	So it is written: <br>"<strong>The first man Adam became a living being"</strong><br><strong>the last Adam, a life-giving spirit.</strong> <br><sup>46</sup>The spiritual did not come first, but the <br>natural, and after that the spiritual. <br><sup>47</sup><strong>The first man was of the dust of the earth,</strong><br><strong> the second man from heaven.</strong> <br><sup>48</sup>As was the earthly man, so are those who <br>are of the earth; and as is the man from heaven,<br>so also are those who are of heaven. <sup>49</sup>And <br>just as we have borne the likeness of the <br>earthly man, so shall we bear the likeness <br>of the man from heaven.
</Fragment>
