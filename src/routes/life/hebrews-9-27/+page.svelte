<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 121, y: 87, width: 696, height: 150 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 9:27" scale="lg">
			And just as it is destined for people to die once, and after this comes judgment,
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 664, y: 188, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true, align: 'right' }}
	>
		NASB2020
	</Fragment>

	<Fragment
		layout={{ x: 121, y: 241, width: 696, height: 124 }}
		font={{ font_size: 20, wrap: true, align: 'left' }}
	>
		<ScriptureBlock title="Hebrews 9:27" scale="lg">

		And inasmuch as it is appointed for men to die once and after this comes judgment,
		</ScriptureBlock>
	</Fragment>
	<Fragment
		layout={{ x: 664, y: 331, width: 134, height: 30 }}
		font={{ font_size: 20, wrap: true, align: 'right' }}
	>
		NASB95
	</Fragment>
</Slide>
