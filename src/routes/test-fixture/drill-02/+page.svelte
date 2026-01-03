<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!-- 
	Drill Level 2 - Second level drill
	Contains a drillTo to drill-03 for testing 3-level drill chains
-->
<Slide>
	<div class="drill-content">
		<h1>Drill Level 2</h1>
		
		<Fragment step={1}>
			<p>Second level drill content.</p>
		</Fragment>
		
		<Fragment step={2} drillTo="test-fixture/drill-03">
			<p class="drill-link">Go to Level 3</p>
		</Fragment>
	</div>
</Slide>

<style>
	.drill-content {
		padding: 40px;
		text-align: center;
	}
	
	h1 {
		font-size: 32px;
		margin-bottom: 20px;
		color: #0066cc;
	}
	
	.drill-link {
		color: #0066cc;
		cursor: pointer;
	}
</style>
