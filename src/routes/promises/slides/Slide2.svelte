<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
<div class="slide-content">

	<!-- Main two-column layout -->
	<div class="main-layout">
		<!-- Left Column: Physical (Hagar's line) -->
		<div class="column physical-column">
			<div class="column-header">Physical</div>
			
			<Fragment step={3}>
				<div class="person-name" transition:fade>Ishmael</div>
			</Fragment>
			
			<Fragment step={7}>
				<div class="person-name large" transition:fade>Hagar</div>
			</Fragment>
			
			<Fragment step={8}>
				<div class="item" transition:fade>covenant</div>
			</Fragment>
			
			<Fragment step={8}>
				<div class="arrow-container" transition:fade>
					<Arrow direction="down" size={24} />
				</div>
			</Fragment>
			
			<Fragment step={11}>
				<div class="item bold" transition:fade>Mt. Sinai</div>
			</Fragment>
			
			<Fragment step={12}>
				<div class="item italic" transition:fade>Mosaical Law</div>
			</Fragment>
			
			<Fragment step={13}>
				<div class="item" transition:fade>Present Jerusalem</div>
			</Fragment>
			
			<Fragment step={14}>
				<div class="item" transition:fade>Bondage to sin</div>
			</Fragment>
			
			<Fragment step={15}>
				<div class="item" transition:fade>Slaves to the LAW</div>
			</Fragment>
			
			<Fragment step={16} drillTo="promises/romans-8-2">
				<div class="scripture-link" transition:fade>Romans 8:2-3</div>
			</Fragment>
			
			<!-- Bottom summary box -->
			<div class="summary-box physical-summary">
				<Fragment step={19}>
					<div class="summary-text" transition:fade>
						<span class="highlight">Physical</span> Jews/Following Mosaical Law <strong>does not</strong> give salvation.
					</div>
				</Fragment>
			</div>
		</div>

		<!-- Center: Abraham box -->
		<div class="center-area">
			<Fragment step={2}>
				<div class="abraham-box" transition:fade>Abraham</div>
			</Fragment>
		</div>

		<!-- Right Column: Spiritual (Sarah's line) -->
		<div class="column spiritual-column">
			<div class="column-header">Spiritual</div>
			
			<Fragment step={4}>
				<div class="person-name" transition:fade>Isaac</div>
			</Fragment>
			
			<Fragment step={9}>
				<div class="person-name large" transition:fade>Sarah</div>
			</Fragment>
			
			<Fragment step={10}>
				<div class="item" transition:fade>covenant</div>
			</Fragment>
			
			<Fragment step={10}>
				<div class="arrow-container" transition:fade>
					<Arrow direction="down" size={24} color="#0000cc" />
				</div>
			</Fragment>
			
			<Fragment step={17}>
				<div class="item quote" transition:fade>"Jerusalem above is free"</div>
			</Fragment>
			
			<Fragment step={18} drillTo="promises/hebrews-12-22">
				<div class="scripture-link" transition:fade>Hebrews 12:22-24</div>
			</Fragment>
			
			<!-- Bottom summary box -->
			<div class="summary-box spiritual-summary">
				<Fragment step={20}>
					<div class="summary-text" transition:fade>
						<span class="highlight">Spiritual</span> Jews/Following Christ's Law <strong>gives</strong> salvation.
					</div>
				</Fragment>
			</div>
		</div>
	</div>

	<!-- Physical/Spiritual labels -->
	<div class="type-labels">
		<Fragment step={5}>
			<span class="type-label physical" transition:fade>Physical</span>
		</Fragment>
		<Fragment step={6}>
			<span class="type-label spiritual" transition:fade>Spiritual</span>
		</Fragment>
	</div>
</div>
</Slide>

<style>
	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.main-layout {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0;
		position: relative;
	}

	.column {
		display: flex;
		flex-direction: column;
		padding: 16px;
		gap: 8px;
		align-items: center;
	}

	.physical-column {
		background: var(--color-level1);
	}

	.spiritual-column {
		background: var(--color-level2);
	}

	.center-area {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 40px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	.abraham-box {
		background: var(--color-bg-light);
		border: 3px solid var(--color-border);
		padding: 12px 24px;
		font-size: 24px;
		font-weight: bold;
	}

	.column-header {
		font-size: 28px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 8px;
		margin-top: 60px;
	}

	.physical-column .column-header {
		color: var(--color-text-primary);
	}

	.spiritual-column .column-header {
		color: var(--color-level3);
	}

	.person-name {
		font-size: 18px;
	}

	.person-name.large {
		font-size: 24px;
		font-weight: bold;
	}

	.item {
		font-size: 16px;
		text-align: center;
	}

	.item.bold {
		font-weight: bold;
	}

	.item.italic {
		font-style: italic;
	}

	.item.quote {
		font-style: italic;
		color: var(--color-level3);
	}

	.scripture-link {
		color: var(--color-level3);
		text-decoration: underline;
		cursor: pointer;
		font-size: 16px;
	}

	.arrow-container {
		display: flex;
		justify-content: center;
		margin: 4px 0;
	}

	.summary-box {
		margin-top: auto;
		padding: 12px;
		width: 100%;
		box-sizing: border-box;
	}

	.physical-summary {
		background: #a0a0a0;
		border: 2px solid var(--color-border);
	}

	.spiritual-summary {
		background: #66ccff;
		border: 2px solid var(--color-level3);
	}

	.summary-text {
		font-size: 14px;
		text-align: center;
	}

	.summary-text .highlight {
		color: var(--color-level3);
		font-weight: bold;
	}

	.type-labels {
		position: absolute;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 20px;
		z-index: 5;
	}

	.type-label {
		font-size: 14px;
		padding: 4px 8px;
	}

	.type-label.physical {
		background: var(--color-level1);
	}

	.type-label.spiritual {
		background: var(--color-level2);
		color: var(--color-level3);
	}
</style>
