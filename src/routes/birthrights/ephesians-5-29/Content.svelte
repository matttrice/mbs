<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Ephesians 5:29-32 -->
<Fragment
	layout={{ x: 42, y: 35, width: 864, height: 190 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Ephesians 5:29-32" scale="lg">
		After all, no one ever hated his own body, but he feeds and cares for it, just as Christ does the church-- <sup>30</sup>for we are members of his body. <sup>31</sup>"For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh." <sup>32</sup>This is a profound mystery--but I am talking about Christ and the church.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: 2 Corinthians 11:2-4 -->
<Fragment
	step={1}
	layout={{ x: 42, y: 236, width: 864, height: 163 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="2 Corinthians 11:2-4" scale="lg">
		I hope you will put up with a little of my foolishness; but you are already doing that. <sup>2</sup>I am jealous for you with a godly jealousy. I <strong>promised you to one husband, to Christ</strong>, so that I might present you as a pure virgin to him.
	</ScriptureBlock>
</Fragment>
