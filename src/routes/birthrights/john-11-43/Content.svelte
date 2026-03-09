<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 97, y: 9, width: 779, height: 162 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="John 11:43-44" scale="lg">
		When he had said this, Jesus called in a loud voice, "Lazarus, come out!"  <sup>44</sup> The dead man came out, his hands and feet wrapped with strips of linen, and a cloth around his face. Jesus said to them, "Take off the grave clothes and let him go."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Colossians 1:18 -->
<Fragment
	step={1}
	layout={{ x: 97, y: 215, width: 757, height: 135 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Colossians 1:18" scale="lg">
		And he is the head of the body, the church; he is the beginning and the firstborn from among the dead, so that in everything he might have the supremacy.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Commentary box -->
<Fragment
	step={2}
	layout={{ x: 94, y: 373, width: 512, height: 130 }}
	font={{ font_size: 18.7, bold: true, align: 'center', wrap: true }}
	line={{ color: 'var(--text-level-3)' }}
>
	While it's true that in resurrection some will not experience death (1 Thes 4:17), Lazarus was not resurrected – he was called from physical death back to physical life. Why? – Because it was not time for him to be resurrected.
</Fragment>
