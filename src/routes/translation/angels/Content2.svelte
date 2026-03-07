<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<Fragment
	layout={{ x: 30, y: 80, width: 908, height: 138 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={0}
>
	<ScriptureBlock title="Job 1:6-7" version="NASB">
		Now there was a day when the <strong>sons of God</strong> came to present themselves before the LORD, and Satan also came among them. <sup>7</sup> The LORD said to Satan, "From where do you come?" Then Satan answered the LORD and said, "From roaming about on the earth and walking around on it."
	</ScriptureBlock>
</Fragment>

<!-- Static: Job 2:1-2 scripture -->
<Fragment
	layout={{ x: 30, y: 246, width: 878, height: 169 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="Job 2:1-2" version="NASB">
		Again there was a day when the <strong>sons of God</strong> came to present themselves before the LORD, and Satan also came among them to present himself before the LORD. <sup>2</sup> The LORD said to Satan, "Where have you come from?" Then Satan answered the LORD and said, "From roaming about on the earth and walking around on it."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Question -->
<Fragment
	step={1}
	layout={{ x: 118, y: 400, width: 709, height: 42 }}
	font={{ font_size: 30, bold: true }}
	zIndex={4}
>
	<strong>How can "sons of God" appear before the Lord?</strong>
</Fragment>

<!-- Step 2: Answer -->
<Fragment
	step={2}
	animate="fly-down"
	layout={{ x: 310, y: 440, width: 326, height: 42 }}
	font={{ font_size: 30, bold: true, color: 'var(--text-level-3)' }}
	zIndex={5}
>
	<strong>Sons of God = Angels</strong>
</Fragment>

<!-- Step 2: "angels (NIV)" on Job 2 -->
<Fragment
	step={2}
	animate="fly-down"
	layout={{ x: 308, y: 251, width: 166, height: 38 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
	zIndex={7}
>
	<strong>Angels</strong> <em>(NIV)</em>
</Fragment>

<!-- Step 2: "angels (NIV)" on Job 1 -->
<Fragment
	step={2}
	animate="fly-down"
	layout={{ x: 288, y: 82, width: 166, height: 38 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
	zIndex={6}
>
	<strong>Angels</strong> <em>(NIV)</em>
</Fragment>
