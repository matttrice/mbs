<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<!-- 
	Drill Level 3 - Deepest level drill (third level)
	When completed, returns all the way back to the main presentation origin
-->
<Slide>
	<div class="drill-content">
		<h1>Drill Level 3</h1>
		
		<Fragment step={1}>
			<p>Third level (deepest). Press right to return to main presentation.</p>
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
		color: #009900;
	}
</style>
