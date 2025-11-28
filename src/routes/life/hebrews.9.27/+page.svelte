<script lang="ts">
	import { navigation, currentFragment, stackDepth, canReturn } from '$lib/stores/navigation';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Initialize this drill
	onMount(() => {
		navigation.setMaxFragment(3);
	});
</script>

<div class="slide">
	<header>
		<h1>Hebrews 9:27</h1>
		<div class="debug">
			Fragment: {$currentFragment} / 3 | Stack: {$stackDepth}
			{#if $canReturn}<span class="return-hint">Press → to return</span>{/if}
		</div>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					And just as it is destined for people to die once, 
					and after this comes <span class="highlight">judgment</span>,
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={2}>
			<div class="breakdown" transition:fly={{ y: 20 }}>
				<div class="point">
					<h3>Death</h3>
					<p>Appointed once for all humans</p>
					<p>The body returns to dust</p>
				</div>
				<div class="point">
					<h3>Judgment</h3>
					<p>Follows death inevitably</p>
					<p>The soul faces accountability</p>
				</div>
			</div>
		</Fragment>

		<Fragment step={3}>
			<div class="insight" transition:scale={{ start: 0.9 }}>
				<h2>Key Insight</h2>
				<p>The soul's destination is not automatic — it is <strong>judged</strong>.</p>
				<p>Unlike the body (→ Earth) or spirit (→ God), the soul faces judgment.</p>
				<p class="action">Press → to return to Life presentation.</p>
			</div>
		</Fragment>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #2d1b1b 0%, #1a1a2e 100%);
		display: flex;
		flex-direction: column;
		padding: 40px;
		box-sizing: border-box;
		color: #fff;
	}

	header {
		text-align: center;
		margin-bottom: 30px;
	}

	header h1 {
		font-size: 42px;
		margin: 0;
		color: #ffd700;
	}

	.debug {
		position: fixed;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.7);
		color: #0f0;
		padding: 8px 12px;
		border-radius: 4px;
		font-family: monospace;
		font-size: 12px;
	}

	.return-hint {
		color: #ff0;
		margin-left: 10px;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 24px;
		max-width: 900px;
		margin: 0 auto;
	}

	.scripture {
		background: rgba(255, 255, 255, 0.1);
		border-left: 4px solid #ffd700;
		padding: 24px 30px;
		margin: 0;
		font-size: 28px;
		line-height: 1.6;
		border-radius: 0 8px 8px 0;
	}

	.scripture p {
		margin: 0;
	}

	.highlight {
		color: #ff4444;
		font-weight: bold;
	}

	.breakdown {
		display: flex;
		gap: 30px;
		justify-content: center;
	}

	.point {
		flex: 1;
		padding: 24px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		text-align: center;
	}

	.point h3 {
		margin: 0 0 16px 0;
		color: #ffd700;
		font-size: 28px;
	}

	.point p {
		margin: 8px 0;
		font-size: 18px;
		color: #ddd;
	}

	.insight {
		background: linear-gradient(135deg, #cc2200 0%, #990000 100%);
		padding: 30px;
		border-radius: 12px;
		text-align: center;
		margin-top: 20px;
	}

	.insight h2 {
		margin: 0 0 16px 0;
		color: #ffd700;
	}

	.insight p {
		font-size: 20px;
		margin: 10px 0;
	}

	.action {
		color: #aaa;
		font-style: italic;
		font-size: 16px !important;
		margin-top: 20px !important;
	}
</style>
