<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 88, y: 51, width: 784, height: 165 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 5:20" scale="lg">
			The Law came in so that the transgression would increase; but where sin increased, grace abounded all the more,
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 88, y: 246, width: 791, height: 205 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Galatians 3:19">
			Why the Law then? It was <u>added</u> because of transgressions, having been ordained through angels by the agency of a mediator, until the seed would come to whom the promise had been made.
		</ScriptureBlock>
	</Fragment>
</Slide>
