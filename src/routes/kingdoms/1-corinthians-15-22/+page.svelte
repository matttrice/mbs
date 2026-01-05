<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 1 Corinthians 15:22-25 -->
	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		1 Corinthians 15:22-25
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 101, y: 46, width: 764, height: 128 }}
		font={{ wrap: true, color: '#000000' }}
		zIndex={1}
	>
		For as in Adam all die, so in Christ all will be made alive. 23 But each in turn: Christ, the firstfruits; then, when he comes, those who belong to him. 24 Then the end will come, when he hands over the kingdom to God the Father after he has destroyed all dominion, authority and power. 25 For he must reign until he has put all his enemies under his feet.
	</Fragment>

	<!-- 2 Peter 1:10-11 -->
	<Fragment
		layout={{ x: 102, y: 194, width: 785, height: 111 }}
		font={{ wrap: true, font_size: 26.7, bold: true, color: '#000000' }}
		zIndex={2}
	>
		2 Peter 1:10-11Therefore, my brothers and sisters, make every effort to confirm your calling and election. For if you do these things, you will never stumble, 11 and you will receive a rich welcome into the eternal kingdom of our Lord and Savior Jesus Christ.
	</Fragment>
</Slide>
