<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Job 1:6-7 title -->
<Fragment
	layout={{ x: 30, y: 21, width: 756, height: 44 }}
	font={{ v_align: 'middle', font_size: 36.7, bold: true }}
	zIndex={3}
>
	<strong>Job 1:6-7</strong>
</Fragment>

<!-- Static: Job 1:6-7 scripture -->
<Fragment
	layout={{ x: 30, y: 61, width: 908, height: 138 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={0}
>
	<ScriptureBlock version="NASB">
		Now there was a day when the <strong>sons of God</strong> came to present themselves before the LORD, and Satan also came among them. <sup>7</sup> The LORD said to Satan, "From where do you come?" Then Satan answered the LORD and said, "From roaming about on the earth and walking around on it."
	</ScriptureBlock>
</Fragment>

<!-- Static: Job 2:1-2 title -->
<Fragment
	layout={{ x: 30, y: 206, width: 756, height: 44 }}
	font={{ bold: true }}
	zIndex={2}
>
	Job 2:1-2
</Fragment>

<!-- Static: Job 2:1-2 scripture -->
<Fragment
	layout={{ x: 30, y: 246, width: 878, height: 169 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock version="NASB">
		Again there was a day when the <strong>sons of God</strong> came to present themselves before the LORD, and Satan also came among them to present himself before the LORD. <sup>2</sup> The LORD said to Satan, "Where have you come from?" Then Satan answered the LORD and said, "From roaming about on the earth and walking around on it."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Question -->
<Fragment
	step={1}
	layout={{ x: 118, y: 436, width: 709, height: 42 }}
	font={{ font_size: 30, bold: true }}
	zIndex={4}
>
	<strong>How can "sons of God" appear before the Lord?</strong>
</Fragment>

<!-- Step 2: Answer -->
<Fragment
	step={2}
	layout={{ x: 310, y: 484, width: 326, height: 42 }}
	font={{ font_size: 30, bold: true }}
	zIndex={5}
>
	<strong>Sons of God = Angels</strong>
</Fragment>

<!-- Step 2: "angels (NIV)" on Job 2 -->
<Fragment
	step={2}
	layout={{ x: 435, y: 216, width: 126, height: 38 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
	zIndex={7}
>
	<strong>angels</strong> <em>(NIV)</em>
</Fragment>

<!-- Step 2: "angels (NIV)" on Job 1 -->
<Fragment
	step={2}
	layout={{ x: 418, y: 28, width: 126, height: 38 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-3)' }}
	zIndex={6}
>
	<strong>angels</strong> <em>(NIV)</em>
</Fragment>
