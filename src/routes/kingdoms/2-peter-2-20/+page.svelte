<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 102, y: 13, width: 756, height: 167 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Peter 2:20-21" scale="lg">
			If they have escaped the corruption of the world by knowing our Lord and Savior Jesus Christ and are again entangled in it and are overcome, they are worse off at the end than they were at the beginning. <sup>21 </sup>It would have been better for them not to have known the way of righteousness, than to have known it and then to turn their backs on the sacred command that was passed on to them.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: 2 Peter 3:17 -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 221, width: 732, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="2 Peter 3:17" scale="lg">
			Therefore, dear friends, since you have been forewarned, be on your guard so that you may not be carried away by the error of the lawless and <u>fall from your secure position.</u>
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: ref link (with) -->
	<Fragment
		step={1}
		clickTo="kingdoms/2-peter-3-1"
		returnHere 
		layout={{ x: 799, y: 499, width: 80, height: 20 }}
		font={{ font_size: 11.7 }}
		zIndex={3}
	>
		ref: 2 Peter 3
	</Fragment>

	<!-- Step 2: Warning box -->
	<Fragment
		step={2}
		layout={{ x: 150, y: 362, width: 671, height: 34 }}
		fill="var(--bg-cmd-law)"
		font={{ align: 'center', font_size: 23.3, bold: true, wrap: true }}
		zIndex={4}
	>
		Fallen servants enter the hopeless state. No more choices.
	</Fragment>
</Slide>
