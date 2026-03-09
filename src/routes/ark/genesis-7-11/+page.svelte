<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 84, y: 22, width: 807, height: 208 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Genesis 7:11" scale="lg">
			In the six  hundredth year of Noah's life, in the second month, on the seventeenth day of the month, on the same day all the  <u>fountains of the great deep burst open</u>, and the <u>floodgates of the sky</u> were opened.
		</ScriptureBlock>
	</Fragment>
</Slide>
