<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 229, y: 13, width: 474, height: 48 }}
	font={{ font_size: 36.7, bold: true }}
>
	Birth Process - macro
</Fragment>

<!-- Static: 1 Corinthians 15:45-49 -->
<Fragment
	layout={{ x: 87, y: 61, width: 494, height: 462 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-light)"
>
	<ScriptureBlock title="1 Corinthians 15:45-49">
		So it is written: <br>"The first man Adam became a living being"<br>the last Adam, a life-giving spirit. <br><sup>46</sup>The spiritual did not come first, but the <br>natural, and after that the spiritual. <br><sup>47</sup>The first man was of the dust of the earth,<br> the second man from heaven. <br><sup>48</sup>As was the earthly man, so are those who <br>are of the earth; and as is the man from heaven,<br>so also are those who are of heaven. <sup>49</sup>And <br>just as we have borne the likeness of the <br>earthly man, so shall we bear the likeness <br>of the man from heaven.
	</ScriptureBlock>
</Fragment>

<!-- Static: Physical body image -->
<Fragment
	layout={{ x: 577, y: 107, width: 137, height: 375 }}
>
	<img src="/export/11-Birthrights/image6.png" alt="body" class="slide-image" />
</Fragment>

<!-- Static: Physical label -->
<Fragment
	layout={{ x: 577, y: 197, width: 151, height: 45 }}
	font={{ font_size: 30.8, bold: true }}
	fill="var(--bg-light)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
>
	Physical
</Fragment>

<!-- Static: Spiritual body image -->
<Fragment
	layout={{ x: 730, y: 28, width: 143, height: 375 }}
>
	<img src="/export/11-Birthrights/image6.png" alt="body" class="slide-image" />
</Fragment>

<!-- Static: Spiritual label -->
<Fragment
	layout={{ x: 735, y: 103, width: 140, height: 45 }}
	font={{ font_size: 30.8, bold: true, color: 'var(--text-level-3)' }}
	fill="var(--bg-light)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
>
	Spiritual
</Fragment>

<!-- Step 1: Highlight overlay -->
<Fragment
	step={1}
	layout={{ x: 95, y: 110, width: 494, height: 413 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	<ScriptureBlock>
		So it is written: <br>"<strong>The first man Adam became a living being"</strong><br><strong>the last Adam, a life-giving spirit.</strong> <br><sup>46</sup>The spiritual did not come first, but the <br>natural, and after that the spiritual. <br><sup>47</sup><strong>The first man was of the dust of the earth,</strong><br><strong> the second man from heaven.</strong> <br><sup>48</sup>As was the earthly man, so are those who <br>are of the earth; and as is the man from heaven,<br>so also are those who are of heaven. <sup>49</sup>And <br>just as we have borne the likeness of the <br>earthly man, so shall we bear the likeness <br>of the man from heaven.
	</ScriptureBlock>
</Fragment>
