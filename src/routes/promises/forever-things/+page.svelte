<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<Fragment drillTo="promises/1corinthians-15-40" returnHere>
			<h1 class="title-link">1 Corinthians 15:40-45</h1>
		</Fragment>
	</header>

	<div class="content">
		<div class="two-columns">
			<!-- Spiritual Column (Left) -->
			<div class="column spiritual">
				<div class="column-header">SPIRITUAL</div>
				<div class="item">Imperishable</div>
				<div class="item">Glory</div>
				<div class="item">Power</div>
				<div class="item">Spiritual Body</div>
				<div class="item">2nd Adam - Heaven</div>
				
				<Fragment step={1}>
					<div class="item animated" transition:fade>Invisible</div>
				</Fragment>
				<Fragment step={2}>
					<div class="item animated" transition:fade>Eternal</div>
				</Fragment>
				<Fragment step={4}>
					<div class="item animated large" transition:fade>True & Real</div>
				</Fragment>
			</div>

			<!-- Divider -->
			<div class="divider">or</div>

			<!-- Physical Column (Right) -->
			<div class="column physical">
				<div class="column-header">PHYSICAL</div>
				<div class="item">Perishable</div>
				<div class="item">Dishonor</div>
				<div class="item">Weakness</div>
				<div class="item">Physical Body</div>
				<div class="item">1st Adam - Earth</div>
				
				<Fragment step={3}>
					<div class="item animated" transition:fade>Visible</div>
				</Fragment>
				<Fragment step={3}>
					<div class="item animated" transition:fade>Temporary</div>
				</Fragment>
				<Fragment step={5}>
					<div class="item animated large" transition:fade>Shadow & Copy</div>
				</Fragment>
			</div>
		</div>
	</div>
</div>
</Slide>

<style>
	.drill-content {
		width: 100%;
		height: 100%;
		background: var(--color-bg-light, #e8e8e8);
		display: flex;
		flex-direction: column;
		padding: 30px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 20px;
	}

	header h1 {
		font-size: 32px;
		margin: 0;
		color: #000;
		font-weight: bold;
	}

	.title-link {
		text-decoration: underline;
		cursor: pointer;
	}

	.content {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.two-columns {
		display: flex;
		gap: 20px;
		align-items: flex-start;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		min-width: 200px;
	}

	.column-header {
		font-size: 28px;
		font-weight: bold;
		text-decoration: underline;
		margin-bottom: 8px;
	}

	.spiritual .column-header {
		color: var(--color-spiritual-text, #0000cc);
	}

	.physical .column-header {
		color: #000;
	}

	.item {
		font-size: 18px;
		text-align: center;
	}

	.spiritual .item {
		color: var(--color-spiritual-text, #0000cc);
	}

	.physical .item {
		color: #000;
	}

	.item.animated {
		font-style: italic;
	}

	.item.large {
		font-size: 22px;
		font-weight: bold;
		margin-top: 8px;
	}

	.divider {
		font-size: 24px;
		color: #000;
		padding: 0 16px;
		margin-top: 40px;
	}
</style>
