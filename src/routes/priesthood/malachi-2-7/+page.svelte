<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 92, y: 41, width: 778, height: 40 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Malachi 2:7
	</Fragment>

	<!-- Scripture -->
	<Fragment
		layout={{ x: 84, y: 40, width: 814, height: 216 }}
		font={{ font_size: 43, v_align: 'middle', wrap: true }}
	>
		"For the lips of a priest should preserve knowledge, and men should seek instruction from his mouth; for he is the messenger of the LORD of hosts.
	</Fragment>
</Slide>
