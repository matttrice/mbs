<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg scripture"></div>
<ReferenceOverlay src="/export/10-The_Priesthood/Slide6.png" />

<!-- Title -->
<Fragment
	layout={{ x: 89, y: 36, width: 310, height: 40 }}
	font={{ font_size: 33.6, bold: true, color: '#F4F4F4' }}
>
	Hebrews 9:8-10
</Fragment>

<!-- Scripture content -->
<Fragment
	layout={{ x: 91, y: 76, width: 799, height: 295 }}
	font={{ font_size: 28.8, color: '#F4F4F4', wrap: true }}
	fill="#808080"
>
	The Holy Spirit was showing by this that the way into the Most Holy Place had not yet been disclosed as long as the first tabernacle was still standing. 9 This is an illustration for the present time, indicating that the gifts and sacrifices being offered were not able to clear the conscience of the worshiper. 10 They are only a matter of food and drink and various ceremonial washings — external regulations applying until the time of the new order.
</Fragment>

<!-- Step 1: Summary -->
<Fragment
	step={1}
	layout={{ x: 125, y: 377, width: 709, height: 148 }}
	font={{ font_size: 38.4, bold: true, v_align: 'middle', align: 'center' }}
>
	1st tabernacle = illustration<br />External & Temporary<br />Ineffectual for the internal conscience
</Fragment>
