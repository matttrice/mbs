<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade, fly, scale } from 'svelte/transition';

	// This slide has 15 fragments (simplified for demo)
	export const fragmentCount = 15;
</script>

<div class="slide-content">
	<!-- Body / Spirit / Soul headers -->
	<div class="header-row">
		<Fragment step={1}>
			<div class="header-cell body-header" transition:fly={{ y: -20 }}>
				<div class="header-title">Body</div>
				<div class="scripture-ref" transition:fade>Genesis 3:19</div>
			</div>
		</Fragment>
		<Fragment step={2}>
			<div class="header-cell spirit-header" transition:fly={{ y: -20 }}>
				<div class="header-title">Spirit</div>
				<div class="scripture-ref" transition:fade>Ecclesiastes 12:7</div>
			</div>
		</Fragment>
		<Fragment step={3}>
			<div class="header-cell soul-header" transition:fly={{ y: -20 }}>
				<div class="header-title">Soul</div>
				<div class="scripture-ref" transition:fade>Ezekiel 18:4</div>
			</div>
		</Fragment>
	</div>

	<!-- ORIGINS section -->
	<Fragment step={4}>
		<div class="section-label" transition:fade>ORIGINS</div>
	</Fragment>

	<div class="data-row">
		<Fragment step={5}>
			<div class="data-cell" transition:fly={{ x: -20 }}>Earth</div>
		</Fragment>
		<Fragment step={6}>
			<div class="data-cell spirit-cell" transition:fly={{ x: -20 }}>God</div>
		</Fragment>
		<Fragment step={7}>
			<div class="data-cell soul-cell" transition:fly={{ x: -20 }}>God</div>
		</Fragment>
	</div>

	<!-- DESTINATIONS section -->
	<Fragment step={8}>
		<div class="section-label" transition:fade>DESTINATIONS</div>
	</Fragment>

	<div class="data-row">
		<Fragment step={9}>
			<div class="data-cell" transition:fly={{ x: -20 }}>Earth</div>
		</Fragment>
		<Fragment step={10}>
			<div class="data-cell spirit-cell" transition:fly={{ x: -20 }}>God</div>
		</Fragment>
		<Fragment step={11} drillTo="life/hebrews.9.27">
			<div class="data-cell soul-cell judgment" transition:fly={{ x: -20 }}>
				Judgment
				<div class="scripture-ref">Hebrews 9:27</div>
			</div>
		</Fragment>
	</div>

	<!-- Ranking section -->
	<Fragment step={12}>
		<div class="ranking-section" transition:scale={{ start: 0.9 }}>
			<div class="rank-label">Rank of Importance?</div>
			<div class="scripture-ref">Matthew 16:26</div>
		</div>
	</Fragment>

	<div class="rank-list">
		<Fragment step={13}>
			<div class="rank-item" transition:fly={{ x: 20 }}>
				<span class="rank-number">#1</span>
				<span class="rank-name soul-text">Soul</span>
				<span class="rank-desc">Dominant</span>
			</div>
		</Fragment>
		<Fragment step={14}>
			<div class="rank-item" transition:fly={{ x: 20 }}>
				<span class="rank-number">#2</span>
				<span class="rank-name spirit-text">Spirit</span>
				<span class="rank-desc">Submissive</span>
			</div>
		</Fragment>
		<Fragment step={15}>
			<div class="rank-item" transition:fly={{ x: 20 }}>
				<span class="rank-number">#3</span>
				<span class="rank-name">Body</span>
				<span class="rank-desc">Submissive</span>
			</div>
		</Fragment>
	</div>
</div>

<style>
	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
	}

	.header-row {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.header-cell {
		width: 200px;
		padding: 20px;
		text-align: center;
		border-radius: 8px;
	}

	.header-title {
		font-size: 32px;
		font-weight: bold;
	}

	.body-header {
		background: #808080;
		color: #000;
	}

	.spirit-header {
		background: #00aaff;
		color: #0000cc;
	}

	.soul-header {
		background: #00ddff;
		color: #c00;
	}

	.scripture-ref {
		font-size: 14px;
		margin-top: 8px;
		color: #333;
	}

	.section-label {
		font-size: 20px;
		font-weight: bold;
		color: #666;
		margin-left: 100px;
	}

	.data-row {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.data-cell {
		width: 200px;
		padding: 20px;
		text-align: center;
		font-size: 28px;
		font-weight: bold;
		background: #e0e0e0;
		border-radius: 8px;
	}

	.spirit-cell {
		background: #aaddff;
		color: #0066cc;
	}

	.soul-cell {
		background: #aaffff;
		color: #c00;
	}

	.judgment {
		box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5);
	}

	.ranking-section {
		text-align: center;
		margin-top: 20px;
		padding: 16px;
		background: rgba(255, 0, 0, 0.1);
		border: 2px solid #c00;
		border-radius: 8px;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
	}

	.rank-label {
		font-size: 24px;
		font-weight: bold;
		color: #c00;
	}

	.rank-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		margin-top: 20px;
	}

	.rank-item {
		display: flex;
		gap: 20px;
		align-items: center;
		padding: 12px 24px;
		background: #f5f5f5;
		border-radius: 8px;
		font-size: 24px;
	}

	.rank-number {
		font-weight: bold;
		color: #c00;
	}

	.rank-name {
		font-weight: bold;
		min-width: 100px;
	}

	.soul-text {
		color: #c00;
	}

	.spirit-text {
		color: #0066cc;
	}

	.rank-desc {
		color: #666;
		font-size: 18px;
	}
</style>
