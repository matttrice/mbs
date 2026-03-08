<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 42, y: 50, width: 864, height: 166 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="1 Corinthians 15:22-25" scale="lg">
			For as in Adam all die, so in Christ all will be made alive. <sup>23 </sup>But each in turn: Christ, the firstfruits; then, when he comes, those who belong to him. <sup>24 </sup>Then the end will come, <u>when he hands over the kingdom to God the Father</u> after he has destroyed all dominion, authority and power. <sup>25 </sup>For he must reign until he has put all his enemies under his feet.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 42, y: 260, width: 864, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="2 Peter 1:10-11" scale="lg">
			Therefore, my brothers and sisters, make every effort to confirm your calling and election. For if you do these things, you will <u>never stumble</u>, <sup>11 </sup>and you will receive a rich welcome into the <u>eternal kingdom</u> of our Lord and Savior Jesus Christ.
		</ScriptureBlock>
	</Fragment>
</Slide>
