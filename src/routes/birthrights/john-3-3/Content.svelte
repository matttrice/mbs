<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Line } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<Fragment
	layout={{ x: 42, y: 52, width: 864, height: 305 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="John 3:3-7">
		In reply Jesus declared, "I tell you the truth, no one can see the kingdom of God unless <br> he is born again" <sup>4</sup>"How can a man be born when he is old?" Nicodemus asked. "Surely he cannot enter a second time into his mother's womb to be born!" <br> <sup>5</sup>Jesus answered, "I tell you the truth, no one can enter the kingdom of God unless he is born of water and the Spirit. <sup>6</sup>Flesh gives birth to flesh, but the Spirit gives birth to spirit. <sup>7</sup>You should not be surprised at my saying, 'You must be born again.'
	</ScriptureBlock>
</Fragment>

<Fragment step={1} animate="draw">
	<Line from={{ x: 233, y: 268 }} to={{ x: 740, y: 268 }} stroke={{ width: 3 }} zIndex={5} />
</Fragment>
