<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Revelation 1:8 consolidated title + body -->
	<Fragment
		layout={{ x: 102, y: 3, width: 780, height: 111 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Revelation 1:8">
			"I am the Alpha and the Omega," says the Lord God, "who is, and who was, and who is to come, the Almighty."
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Revelation 21:6-7 (click) -->
	<Fragment
		step={1}
		layout={{ x: 104, y: 114, width: 765, height: 212 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Revelation 21:6-7">
			He said to me: "It is done. I am the Alpha and the Omega, the Beginning and the End. To him who is thirsty I will give to drink without cost from the spring of the water of life. <sup>7</sup> He who overcomes will inherit all this, and I will be his God and he will be my son.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Revelation 22:12-13 (click) -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 322, width: 770, height: 179 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Revelation 22:12-13">
			"Behold, I am coming soon! My reward is with me, and I will give to everyone according to what he has done.<sup> 13</sup> I am the Alpha and the Omega, the First and the Last, the Beginning and the End.
		</ScriptureBlock>
	</Fragment>
</Slide>
