<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 1: Genesis 1:1 - In the beginning...
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (960/1536)
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<div class="slide-bg"></div>
	<ReferenceOverlay src="/export/03-Biblical_Time/Slide1.png" />

	<!-- ===== STATIC CONTENT ===== -->
	<!-- Title: Genesis 1:1 In the beginning... -->
	<Fragment
		layout={{ x: 131.1, y: 34.6, width: 319.5, height: 101.9 }}
		font={{ font_size: 40, v_align: 'top', align: 'left' }}
		zIndex={0}
	>
		Genesis 1:1<br/>In the beginning…
	</Fragment>

	<!-- God created the Heavens and the Earth -->
	<Fragment
		layout={{ x: 139.4, y: 157.2, width: 675.5, height: 50.5 }}
		font={{ font_size: 36.7 }}
		zIndex={1}
	>
		God created the Heavens and the Earth
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: God created the Invisible and the Visible -->
	<Fragment
		step={1}
		layout={{ x: 127.1, y: 209.9, width: 699.7, height: 50.5 }}
		font={{ font_size: 36.7 }}
		zIndex={2}
	>
		God created the Invisible and the Visible
	</Fragment>

	<!-- Step 2: God created Energy and Matter -->
	<Fragment
		step={2}
		layout={{ x: 204.8, y: 262.6, width: 545.5, height: 50.5 }}
		font={{ font_size: 36.7 }}
		zIndex={3}
	>
		God created Energy and Matter
	</Fragment>

	<!-- Step 3: God created the Spiritual and Physical -->
	<Fragment
		step={3}
		layout={{ x: 140.1, y: 315.3, width: 677.4, height: 50.5 }}
		font={{ font_size: 36.7 }}
		zIndex={4}
	>
		God created the Spiritual and Physical
	</Fragment>

	<!-- Step 4: Beginning of What? -->
	<Fragment
		step={4}
		layout={{ x: 311.3, y: 399.3, width: 335.3, height: 50.5 }}
		font={{ font_size: 36.7 }}
		zIndex={5}
	>
		Beginning of What?
	</Fragment>
</Slide>

<style>
</style>
