<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 229, y: 13, width: 474, height: 48 }}
	font={{ font_size: 36.7, bold: true }}
>
	Birth Process - macro
</Fragment>

<!-- Static: 1 Corinthians 15:45-49 heading -->
<Fragment
	layout={{ x: 87, y: 61, width: 399, height: 50 }}
	font={{ font_size: 35, bold: true, align: 'center', wrap: true }}
>
	1 Corinthians 15:45-49
</Fragment>

<!-- Static: Scripture text -->
<Fragment
	layout={{ x: 95, y: 110, width: 494, height: 413 }}
	font={{ font_size: 23.3, wrap: true }}
	fill="var(--bg-light)"
>
	So it is written: "The first man Adam became a living being" the last Adam, a life-giving spirit. 46 The spiritual did not come first, but the natural, and after that the spiritual. 47 The first man was of the dust of the earth, the second man from heaven. 48 As was the earthly man, so are those who are of the earth; and as is the man from heaven, so also are those who are of heaven. 49 And just as we have borne the likeness of the earthly man, so shall we bear the likeness of the man from heaven.
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
	line={{ width: 1, color: '#000000' }}
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
	font={{ font_size: 30.8, bold: true, color: '#0000FF' }}
	fill="var(--bg-light)"
	line={{ width: 1, color: '#000000' }}
>
	Spiritual
</Fragment>

<!-- Step 1: Highlight scripture -->
<Fragment
	step={1}
	layout={{ x: 95, y: 110, width: 494, height: 413 }}
	font={{ font_size: 23.3, wrap: true }}
	fill="var(--bg-light)"
>
	So it is written: "The first man Adam became a living being" the last Adam, a life-giving spirit. 46 The spiritual did not come first, but the natural, and after that the spiritual. 47 The first man was of the dust of the earth, the second man from heaven. 48 As was the earthly man, so are those who are of the earth; and as is the man from heaven, so also are those who are of heaven. 49 And just as we have borne the likeness of the earthly man, so shall we bear the likeness of the man from heaven.
</Fragment>
