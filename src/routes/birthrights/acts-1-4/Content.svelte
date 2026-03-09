<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 103, y: 28, width: 757, height: 160 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 1:4-5" scale="lg">
		On one occasion, while he was eating with them, he gave them this command: "Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about. <sup>5</sup> For John baptized with water, but in a few days you will be baptized with the Holy Spirit."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: John 14:26 -->
<Fragment
	step={1}
	layout={{ x: 105, y: 246, width: 739, height: 130 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="John 14:26" scale="lg">
		But the Counselor, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.
	</ScriptureBlock>
</Fragment>
