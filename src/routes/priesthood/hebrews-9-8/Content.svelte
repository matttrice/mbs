<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 88, y: 36, width: 804, height: 344 }}
	font={{ wrap: true, color: 'var(--text-ghost)', align: 'left' }}
>
	<ScriptureBlock title="Hebrews 9:8-10">
		The Holy Spirit was showing by this that the way into the Most Holy Place had not yet been disclosed as long as the <strong><u>first tabernacle</u></strong> was still standing. <sup>9</sup> This is an <strong><u>illustration</u></strong> for the present time, indicating that the gifts and sacrifices being offered were <u>not able to clear the conscience</u> of the worshiper. <sup>10</sup> They are only a matter of food and drink and various ceremonial washings -- <strong>external</strong> regulations applying <strong><u>until</u></strong> the time of the <strong><u>new order</u></strong>.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Summary (click) -->
<Fragment
	step={1}
	layout={{ x: 125, y: 376, width: 710, height: 148 }}
	font={{ v_align: 'middle', align: 'center', wrap: true }}
	zIndex={3}
>
	<strong><u>1</u></strong><sup>st</sup><strong><u> tabernacle = illustration</u></strong><br/><strong>External &amp; Temporary</strong><br/><strong>Ineffectual for the internal conscience</strong>
</Fragment>
