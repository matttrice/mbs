<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
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
				<div class="column-header text-level3">SPIRITUAL</div>
				<div class="item text-level3">Imperishable</div>
				<div class="item text-level3">Glory</div>
				<div class="item text-level3">Power</div>
				<div class="item text-level3">Spiritual Body</div>
				<div class="item text-level3">2nd Adam - Heaven</div>
				
				<Fragment step={1}>
					<div class="item text-level3 animated">Invisible</div>
				</Fragment>
				<Fragment step={2}>
					<div class="item text-level3 animated">Eternal</div>
				</Fragment>
				<Fragment step={4}>
					<div class="item text-level3 animated large">True & Real</div>
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
					<div class="item animated">Visible</div>
				</Fragment>
				<Fragment step={3}>
					<div class="item animated">Temporary</div>
				</Fragment>
				<Fragment step={5}>
					<div class="item animated large">Shadow & Copy</div>
				</Fragment>
			</div>
		</div>
	</div>
</div>
</Slide>

<style>
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

	.item {
		font-size: 18px;
		text-align: center;
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
