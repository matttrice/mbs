<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 120, y: 32, width: 778, height: 40 }}
	font={{ font_size: 36, bold: true, align: 'left' }}
>
	Genesis 14:17-19
</Fragment>

<!-- Scripture (static) -->
<Fragment
	layout={{ x: 120, y: 74, width: 728, height: 211 }}
	font={{ font_size: 24, v_align: 'middle', wrap: true }}
	zIndex={1}
>
	Then after his return from the defeat of Chedorlaomer and the kings who were with him, the king of Sodom went out to meet him at the valley of Shaveh (that is, the King's Valley). <sup>18</sup> And Melchizedek <strong><u>king</u></strong> of Salem brought out bread and wine; now he was a <strong><u>priest</u></strong> of God Most High. <sup>19</sup> He blessed him and said, "Blessed be Abram of God Most High, Possessor of heaven and earth;
</Fragment>

<!-- Step 1: Summary box -->
<Fragment
	step={1}
	layout={{ x: 142, y: 334, width: 655, height: 50 }}
	font={{ font_size: 43, bold: true, wrap: true }}
	line={{ width: 3 }}
	zIndex={2}
>
	<strong>Melchizedek is both a <u>king</u> and a <u>priest</u>.</strong>
</Fragment>
