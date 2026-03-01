<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: 2 Corinthians 3:18 consolidated title + body -->
	<Fragment
		layout={{ x: 102, y: 18, width: 763, height: 143 }}
		font={{ wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="2 Corinthians 3:18">
			And we, who with unveiled faces all reflect the Lord's glory, are being transformed into his likeness with ever-increasing glory, which comes from the Lord, who is the Spirit.
		</ScriptureBlock>
	</Fragment>
</Slide>
