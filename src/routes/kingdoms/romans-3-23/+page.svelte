<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Romans 3:23 (consolidated title + body) -->
	<Fragment
		layout={{ x: 42, y: 17, width: 864, height: 69 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 3:23" scale="lg">
			...There is no distinction; <sup>23</sup> for all have sinned and fall short of the glory of God,
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Isaiah 59:2 -->
	<Fragment
		layout={{ x: 42, y: 107, width: 864, height: 87 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Isaiah 59:2" scale="lg">
			But your iniquities have made a separation between you and your God, And your sins have hidden <em>His</em> face from you so that He does not hear.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Romans 6:23 -->
	<Fragment
		layout={{ x: 42, y: 229, width: 864, height: 82 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Romans 6:23" scale="lg">
			For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
		</ScriptureBlock>
	</Fragment>
</Slide>
