<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>
	<ReferenceOverlay src="/export/10-The_Priesthood/Slide23.png" />

	<!-- Title -->
	<Fragment
		layout={{ x: 91, y: 20, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Hebrews 7:25
	</Fragment>

	<!-- Hebrews 7:25 -->
	<Fragment
		layout={{ x: 90, y: 61, width: 806, height: 68 }}
		font={{ font_size: 24, v_align: 'middle' }}
	>
		Therefore He is able also to save forever those who draw near to God through Him, since He always lives to make intercession for them.
	</Fragment>

	<!-- 1 Timothy 2:5 -->
	<Fragment
		layout={{ x: 90, y: 154, width: 792, height: 109 }}
		font={{ font_size: 33.6, bold: true, v_align: 'middle' }}
	>
		1Timothy 2:5<br />For there is one God, and one mediator also between God and men, the man Christ Jesus,
	</Fragment>
</Slide>
