<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 106, y: 26, width: 369, height: 51 }}
		font={{ font_size: 45, bold: true, color: 'var(--text-level-0)', align: 'left' }}
	>
		Isaiah 53:1-2
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 106, y: 81, width: 767, height: 169 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left' }}
		line={{ width: 1 }}
	>
		Who has believed our message? And to whom has the arm of the LORD been revealed? 2 For He grew up before Him like a tender  shoot, And like a root out of parched ground; He has no {'{stately}'} form or majesty That we should look upon Him, Nor appearance that we should be attracted to Him.
	</Fragment>
</Slide>
