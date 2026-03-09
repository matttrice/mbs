<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Acts 2:5 cont... -->
<Fragment
	layout={{ x: 85, y: 0, width: 792, height: 130 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 2:5 cont...">
		<sup>5</sup>Now there were staying in Jerusalem God-fearing Jews from every nation under<br>heaven. <sup>6</sup>When they heard this sound, a crowd came together in bewilderment, <br>because each one heard them speaking in his own language.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlight overlay -->
<Fragment
	step={1}
	layout={{ x: 85, y: 43, width: 785, height: 87 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={4}
>
	<ScriptureBlock>
		<sup>5</sup>Now there were staying in Jerusalem<strong> God-fearing Jews</strong> from every nation under<br>heaven. <sup>6</sup>When they heard this sound, a crowd came together in bewilderment, <br>because each one heard them speaking in his own language.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Holy Spirit came on disciples commentary -->
<Fragment
	step={2}
	layout={{ x: 154, y: 129, width: 661, height: 32 }}
	font={{ font_size: 20, bold: true, color: 'var(--text-level-3)', align: 'center', wrap: true }}
	fill="var(--bg-ghost)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
	zIndex={8}
>
	...The Holy Spirit came on the disciples, then other Jews gathered...
</Fragment>

<!-- Step 3: Acts 2:14-17,41 -->
<Fragment
	step={3}
	layout={{ x: 83, y: 159, width: 787, height: 251 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 2:14-17,41">
		<sup>14</sup>Then Peter stood up with the Eleven, raised his voice and addressed the crowd: <br>"Fellow Jews and all of you who live in Jerusalem, let me explain this to you; listen <br>carefully to what I say. <sup>15</sup>These men are not drunk, as you suppose. It's only nine in <br>the morning! <sup>16</sup>No, this is what was spoken by the prophet Joel: <br> <sup>17</sup>" 'In the last days, God says, <br>      I will pour out my Spirit on all people..... <br>.... <sup>41</sup><strong>Those who accepted his message were baptized</strong>, and about three thousand <br>were added to their number that day.
	</ScriptureBlock>
</Fragment>

<!-- Step 4: Highlight overlay -->
<Fragment
	step={4}
	layout={{ x: 90, y: 183, width: 780, height: 227 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={5}
>
	<ScriptureBlock>
		<sup>14</sup>Then Peter stood up with the Eleven, raised his voice and addressed the crowd: <br>"<strong>Fellow Jews</strong> and all of you who live in Jerusalem, let me explain this to you; listen <br>carefully to what I say. <sup>15</sup>These men are not drunk, as you suppose. It's only nine in <br>the morning! <sup>16</sup>No, this is what was spoken by the prophet Joel: <br> <sup>17</sup>" 'In the last days, God says, <br>      I will pour out my Spirit on all people..... <br>.... <sup>41</sup><strong>Those who accepted his message were baptized</strong>, and about three thousand <br>were added to their number that day.
	</ScriptureBlock>
</Fragment>

<!-- Step 5: At this point commentary -->
<Fragment
	step={5}
	layout={{ x: 133, y: 392, width: 661, height: 32 }}
	font={{ font_size: 20, align: 'center', wrap: true }}
	fill="var(--bg-ghost)"
	line={{ width: 1, color: 'var(--stroke-level-0)' }}
	zIndex={6}
>
	At this point, many <strong>Jews</strong> have been added....<strong>by baptism</strong>
</Fragment>

<!-- Step 6: Summary commentary -->
<Fragment
	step={6}
	layout={{ x: 139, y: 437, width: 661, height: 56 }}
	font={{ font_size: 20, bold: true, color: 'var(--text-level-3)', wrap: true }}
	fill="var(--bg-ghost)"
>
	<strong>The disciples received the Holy Spirit miraculously to form the body. </strong><br><strong>Then Jews preached to other Jews and added them by <em>baptism</em>.  </strong>
</Fragment>
