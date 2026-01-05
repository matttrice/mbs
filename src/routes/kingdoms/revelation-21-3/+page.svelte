<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Revelation 21:3-4 -->
	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		Revelation 21:3-4
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 52, width: 756, height: 128 }}
		font={{ wrap: true, bold: true }}
		zIndex={1}
	>
		3 And I heard a loud voice from the throne, saying, "Behold, the tabernacle of God is among men, and He will dwell among them, and they shall be His people, and God Himself will be among them, 4 and He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away."
	</Fragment>
</Slide>
