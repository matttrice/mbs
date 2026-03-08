<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 172 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="Revelation 21:3-4" scale="lg">
			<sup>3 </sup>And I heard a loud voice from the throne, saying, "Behold, the tabernacle of God is among men, and He will dwell among them, and they shall be His people, and God Himself will be among them, <sup>4 </sup>and He will wipe away every tear from their eyes; and there will <strong><u>no longer be </u><em><u>any</u></em><u> death</u></strong>; there will no longer be <em>any</em> mourning, or crying, or pain; the first things have passed away."
		</ScriptureBlock>
	</Fragment>
</Slide>
