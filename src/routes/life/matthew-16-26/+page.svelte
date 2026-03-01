<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 100, y: 94, width: 708, height: 120 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Matthew 16:26" scale="lg">
			For what good will it do a person if he gains the whole world, but forfeits his soul? Or what will a person give in exchange for his soul?
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 753, y: 432, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true }}
	>
		NASB2020
	</Fragment>
</Slide>
