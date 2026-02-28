<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Revelation 17:14 consolidated -->
<Fragment
	layout={{ x: 88, y: 14, width: 778, height: 134 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Revelation 17:14" scale="lg">
		"These will wage war against the Lamb, and the Lamb will overcome them, because He is Lord of lords and King of kings, and those who are with Him are the called and chosen and faithful."
	</ScriptureBlock>
</Fragment>

<!-- Static: Revelation 19:16 scripture -->
<Fragment
	layout={{ x: 88, y: 163, width: 764, height: 100 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="Revelation 19:16">
		And on His robe and on His thigh He has a name written, "KING OF KINGS, AND LORD OF LORDS."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: King & Lord Forever (click) -->
<Fragment
	step={1}
	layout={{ x: 229, y: 298, width: 482, height: 86 }}
	font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 38.4, bold: true, color: 'var(--text-level-3)' }}
	zIndex={4}
>
	<strong>King &amp; Lord Forever</strong>
</Fragment>
