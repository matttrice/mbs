<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Genesis 6:1-4 title -->
<Fragment
	layout={{ x: 30, y: 22, width: 646, height: 44 }}
	font={{ font_size: 36.7, bold: true }}
	zIndex={3}
>
	Genesis 6:1-4
</Fragment>

<!-- Static: Genesis 6:1-4 scripture -->
<Fragment
	layout={{ x: 31, y: 66, width: 862, height: 222 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock>
		When men began to increase in number on the earth and daughters were born to them, the <strong>sons of God </strong>saw that the daughters of men were beautiful; and they took wives for themselves, whomever they chose.<sup>3 </sup>Then the Lord said, "My Spirit shall not<sup> </sup>strive with man forever, because he also is flesh; nevertheless his days shall be one hundred and twenty years." <sup>4 </sup>The <strong>Nephilim</strong> were on the earth <strong>in those days</strong>, and <strong>also afterward</strong>, when the <strong>sons of God </strong>came in to the daughters of men, and they bore <em>children</em> to them. Those were the mighty men who <em>were</em> of old, men of renown.
	</ScriptureBlock>
</Fragment>

<!-- Static: Question -->
<Fragment
	layout={{ x: 72, y: 297, width: 756, height: 57 }}
	font={{ align: 'center', font_size: 35, bold: true }}
	zIndex={0}
>
	<strong>What does the word Nephilim mean?</strong>
</Fragment>

<!-- Step 1: Hebrew definition -->
<Fragment
	step={1}
	layout={{ x: 104, y: 346, width: 786, height: 69 }}
	font={{ font_size: 23.3, wrap: true }}
	zIndex={4}
>
	- <strong>Hebrew</strong> = nĕphiyl, noun = giants | primitive root = naphal, verb = to fall,     	be cast down
</Fragment>

<!-- Step 1: Greek definition -->
<Fragment
	step={1}
	layout={{ x: 105, y: 411, width: 392, height: 30 }}
	font={{ font_size: 23.3 }}
	zIndex={5}
>
	-<strong> Greek </strong>(Septuagint) = earth born
</Fragment>

<!-- Step 2: "Fallen Ones, Earth Born" -->
<Fragment
	step={2}
	layout={{ x: 72, y: 442, width: 818, height: 81 }}
	font={{ align: 'center', font_size: 55, bold: true, color: 'var(--text-level-3)' }}
	zIndex={1}
>
	<strong>Fallen Ones, Earth Born</strong>
</Fragment>
