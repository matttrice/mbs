<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 127, y: 48, width: 686, height: 108 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="1 John 5:7-8" scale="lg" version="NIV">
		For there are three that testify:<sup> 8</sup> the Spirit, the water and the blood; and the three are in agreement.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Revelation 20:6 -->
<Fragment
	step={1}
	layout={{ x: 130, y: 190, width: 707, height: 154 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Revelation 20:6" version="NIV">
		Blessed and holy are those who have part in the first resurrection. The second death has no power over them, but they will be priests of God and of Christ and will reign with him for a thousand years.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Commentary -->
<Fragment
	step={2}
	layout={{ x: 94, y: 389, width: 752, height: 42 }}
	font={{ font_size: 15, v_align: 'middle', align: 'center', wrap: true }}
>
	The true Church, the Bride of Christ, teaches that baptism is the only way you can partake in the first resurrection with Christ. Anything else is a false seed and many adopt it because they think it is close enough.
</Fragment>
