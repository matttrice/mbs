<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 88, y: 36, width: 310, height: 40 }}
	font={{ font_size: 36, bold: true, color: 'var(--text-ghost)' }}
>
	Hebrews 9:8-10
</Fragment>

<!-- Main scripture (static) -->
<Fragment
	layout={{ x: 92, y: 76, width: 800, height: 304 }}
	font={{ font_size: 28.8, color: 'var(--text-ghost)', wrap: true }}
	zIndex={1}
>
	The Holy Spirit was showing by this that the way into the Most Holy Place had not yet been disclosed as long as the <strong><u>first tabernacle</u></strong> was still standing. <sup>9</sup> This is an <strong><u>illustration</u></strong> for the present time, indicating that the gifts and sacrifices being offered were <u>not able to clear the conscience</u> of the worshiper. <sup>10</sup> They are only a matter of food and drink and various ceremonial washings — <strong>external</strong> regulations applying <strong><u>until</u></strong> the time of the <strong><u>new order</u></strong>.
</Fragment>

<!-- Step 1: Summary -->
<Fragment
	step={1}
	layout={{ x: 125, y: 376, width: 710, height: 148 }}
	font={{ font_size: 38.4, bold: true, v_align: 'middle', align: 'center', wrap: true }}
	zIndex={3}
>
	<strong><u>1</u></strong><sup>st</sup><strong><u> tabernacle = illustration</u></strong><br />
	<strong>External &amp; Temporary</strong><br />
	<strong>Ineffectual for the internal conscience</strong>
</Fragment>
