<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: 2 Corinthians 3:7-11 consolidated title + body -->
	<Fragment
		layout={{ x: 63, y: 21, width: 799, height: 265 }}
		font={{ wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="2 Corinthians 3:7-11">
			Now if the ministry that brought death, which was engraved in letters on stone, came with glory, so that the Israelites could not look steadily at the face of Moses because of its glory, fading though it was,<sup> 8 </sup>will not the ministry of the Spirit be even more glorious?<sup> 9 </sup>If the ministry that condemns men is glorious, how much more glorious is the ministry that brings righteousness! <sup>10</sup> For what was glorious has no glory now in comparison with the surpassing glory. <sup>11</sup> And if what was fading away came with glory, how much greater is the glory of that which lasts!
		</ScriptureBlock>
	</Fragment>

	<!-- Static: NIV label -->
	<Fragment
		layout={{ x: 829, y: 486, width: 48, height: 30 }}
		font={{ font_size: 20, wrap: true }}
		zIndex={4}
	>
		NIV
	</Fragment>

	<!-- Step 1: 1 Peter 1:10-11 (click) -->
	<Fragment
		step={1}
		layout={{ x: 63, y: 304, width: 855, height: 142 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="1 Peter 1:10-11">
			Concerning this salvation, the prophets, who spoke of the grace that was to come to you, searched intently and with the greatest care, <sup>11</sup>trying to find out the time and circumstances to which the Spirit of Christ in them was pointing when he predicted the sufferings of Christ and the glories that would follow.
		</ScriptureBlock>
	</Fragment>
</Slide>
