<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!-- 
	Drill Level 1 - First level drill from main presentation
	Contains a drillTo to drill-02 for testing nested drill chains
-->
<Slide>
	<div class="drill-content">
		<h1>Drill Level 1</h1>
		
		<Fragment step={1}>
			<p>First level drill content.</p>
		</Fragment>
		
		<Fragment step={2} drillTo="test-fixture/drill-02">
			<p class="drill-link">Go to Level 2</p>
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
	}
	
	.drill-link {
		color: #0066cc;
		cursor: pointer;
	}
</style>
