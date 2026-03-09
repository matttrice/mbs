<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture with fill -->
<Fragment
	layout={{ x: 135, y: 30, width: 682, height: 185 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Galatians 4:6-9">
		Because you are sons, God has sent forth the Spirit of His Son into our hearts, crying, "Abba! Father!" <sup>7</sup> Therefore you are no longer a slave, but a son; and if a son, then an heir through God.<br><sup>8</sup> However at that time, when you did not know God, you were slaves to those which by nature are no gods. <sup>9</sup> But now that you have come to know God, or rather to be known by God
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 135, y: 74, width: 682, height: 141 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	<u>Because you are sons</u>, God has sent forth <u>the Spirit of His Son into our hearts</u>, crying, "Abba! Father!" <sup>7</sup> Therefore you are no longer a slave, but a son; and if a son, then an heir through God. <em>[birthright/inheritance]</em><br><sup>8</sup> However at that time, when you did not know God, you were slaves to those which by nature are no gods. <sup>9</sup> But now that you have come to know God, <u>or rather to be known by God</u>
</Fragment>

<!-- Step 2: Commentary -->
<Fragment
	step={2}
	layout={{ x: 77, y: 255, width: 797, height: 58 }}
	font={{ font_size: 20, color: 'var(--text-level-3)', align: 'center', wrap: true }}
>
	<u>God knows his sons.</u> <br>If in the end he doesn't know you, its because you were not born by his word/son/seed.
</Fragment>

<!-- Step 3: Galatians 3:2 header -->
<Fragment
	step={3}
	layout={{ x: 94, y: 250, width: 283, height: 37 }}
	font={{ font_size: 28, bold: true }}
>
	Galatians 3:2
</Fragment>

<!-- Step 3: Galatians 3:2 text -->
<Fragment
	step={3}
	layout={{ x: 88, y: 287, width: 469, height: 92 }}
	font={{ font_size: 21.3, wrap: true }}
>
	I would like to learn just one thing from you: Did you receive the Spirit by observing the law, or by believing what you heard?
</Fragment>

<!-- Step 4: Galatians 3:3 header -->
<Fragment
	step={4}
	layout={{ x: 88, y: 378, width: 189, height: 37 }}
	font={{ font_size: 28, bold: true }}
>
	Galatians 3:3
</Fragment>

<!-- Step 4: Galatians 3:3 text -->
<Fragment
	step={4}
	layout={{ x: 88, y: 413, width: 446, height: 95 }}
	font={{ font_size: 21.3, wrap: true }}
>
	Are you so foolish? After beginning with the Spirit, are you now trying to attain your goal by human effort?
</Fragment>

<!-- Step 5: Right side box with explanation -->
<Fragment
	step={5}
	layout={{ x: 565, y: 259, width: 375, height: 259 }}
	font={{ font_size: 16.7, wrap: true }}
>
	God knows his children because he put his Spirit in them. We know God in the same manner. In this way both the father and the son both "know" one another in harmony with the Holy Spirit that connects them. Any doctrine that results in less does not produce Sons of God / Abraham's seed and thus these fall into the category of those who Jesus never knew. Matthew 7:21.
</Fragment>
