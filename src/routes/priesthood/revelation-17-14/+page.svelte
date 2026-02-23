<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 88, y: 14, width: 778, height: 40 }}
		font={{ font_size: 28.8, bold: true, align: 'left' }}
	>
		Revelation 17:14
	</Fragment>

	<!-- Rev 17:14 -->
	<Fragment
		layout={{ x: 92, y: 54, width: 770, height: 94 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		"These will wage war against the Lamb, and the Lamb will overcome them, because He is Lord of lords and King of kings, and those who are with Him are the called and chosen and faithful."
	</Fragment>

	<!-- Rev 19:16 -->
	<Fragment
		layout={{ x: 88, y: 163, width: 764, height: 100 }}
		font={{ font_size: 28.8, bold: true, v_align: 'middle', wrap: true }}
	>
		<strong>Revelation 19:16</strong><br />
		And on His robe and on His thigh He has a name written, "KING OF KINGS, AND LORD OF LORDS."
	</Fragment>

	<!-- Step 1: King & Lord Forever -->
	<Fragment
		step={1}
		layout={{ x: 229, y: 298, width: 482, height: 86 }}
		font={{ font_size: 38.4, bold: true, v_align: 'middle', align: 'center', color: 'var(--text-level-3)', wrap: true }}
		zIndex={5}
	>
		<strong>King &amp; Lord Forever</strong>
	</Fragment>
</Slide>
