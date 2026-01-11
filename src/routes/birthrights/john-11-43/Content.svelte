<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title -->
<Fragment
	layout={{ x: 91, y: 8, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	John 11:43
</Fragment>

<!-- Step 1: Scripture text -->
<Fragment
	step={1}
	layout={{ x: 91, y: 56, width: 762, height: 406 }}
	font={{ font_size: 26.7, wrap: true }}
>
	When he had said this, Jesus called in a loud voice, "Lazarus, come out!" 44The dead man came out, his hands and feet wrapped with strips of linen, and a cloth around his face. Jesus said to them, "Take off the grave clothes and let him go."
</Fragment>

<!-- Step 2: Commentary box -->
<Fragment
	step={2}
	layout={{ x: 94, y: 373, width: 512, height: 130 }}
	font={{ font_size: 18.7, bold: true, align: 'center', wrap: true }}
	line={{ color: '#0000FF' }}
>
	While it's true that in resurrection some will not experience death (1 Thes 4:17), Lazarus was not resurrected – he was called from physical death back to physical life. Why? – Because it was not time for him to be resurrected.
</Fragment>
