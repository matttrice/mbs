<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 83, y: 10, width: 770, height: 456 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 9:22-24" scale="lg">
			In fact, the law requires that nearly everything be cleansed with blood, and without the shedding of blood there is no forgiveness. <sup>23</sup> <strong><u>It was necessary, then, for the copies of the heavenly things</u> </strong>to be purified with these sacrifices, but the heavenly things themselves with better sacrifices than these. <sup>24</sup> <strong><u>For Christ did not enter a sanctuary made with human hands that was only a copy of the true one; he entered heaven itself</u></strong>, now to appear for us in God's presence.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 777, y: 446, width: 153, height: 39 }}
		font={{ font_size: 26.7, wrap: true }}
		zIndex={2}
	>
		(NIV)
	</Fragment>
</Slide>
