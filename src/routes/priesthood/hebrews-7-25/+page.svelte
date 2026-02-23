<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 92, y: 20, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Hebrews 7:25
	</Fragment>

	<!-- Hebrews 7:25 -->
	<Fragment
		layout={{ x: 90, y: 62, width: 806, height: 65 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		Therefore He is able also to save forever those who draw near to God through Him, since He always lives to make intercession for them.
	</Fragment>

	<!-- 1 Timothy 2:5 -->
	<Fragment
		layout={{ x: 90, y: 150, width: 792, height: 118 }}
		font={{ font_size: 43, bold: true, v_align: 'middle', wrap: true }}
	>
		<strong>1Timothy 2:5</strong><br />
		For there is one God, and one mediator also between God and men, the man Christ Jesus,
	</Fragment>
</Slide>
