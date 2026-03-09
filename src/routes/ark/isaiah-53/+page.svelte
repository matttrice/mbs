<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 106, y: 26, width: 767, height: 224 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Isaiah 53:1-2" scale="lg">
			Who has believed our message? And to whom has the arm of the LORD been revealed? <sup>2</sup><sup> </sup>For He grew up before Him like a tender  shoot, And like a root out of parched ground; He has no {'{stately}'} form or majesty That we should look upon Him, Nor appearance that we should be attracted to Him.
		</ScriptureBlock>
	</Fragment>
</Slide>
