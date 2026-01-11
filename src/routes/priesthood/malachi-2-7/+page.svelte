<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 91, y: 41, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Malachi 2:7
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 84, y: 82, width: 814, height: 132 }}
		font={{ font_size: 33.6, v_align: 'middle' }}
	>
		"For the lips of a priest should preserve knowledge, and men should seek instruction from his mouth; for he is the messenger of the LORD of hosts.
	</Fragment>
</Slide>
