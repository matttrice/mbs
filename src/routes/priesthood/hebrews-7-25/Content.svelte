<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Hebrews 7:25 consolidated -->
<Fragment
	layout={{ x: 90, y: 20, width: 806, height: 107 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Hebrews 7:25" scale="lg">
		Therefore He is able also to save forever those who draw near to God through Him, since He always lives to make intercession for them.
	</ScriptureBlock>
</Fragment>

<!-- Static: 1 Timothy 2:5 scripture -->
<Fragment
	layout={{ x: 90, y: 150, width: 792, height: 118 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="1Timothy 2:5" scale="lg">
		For there is one God, and one mediator also between God and men, the man Christ Jesus,
	</ScriptureBlock>
</Fragment>
