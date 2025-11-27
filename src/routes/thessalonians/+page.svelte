<script lang="ts">
	import { navigation, currentFragment, stackDepth, canReturn } from '$lib/stores/navigation';
	import Fragment from '$lib/components/Fragment.svelte';
	import { onMount } from 'svelte';

	// Initialize this custom show
	onMount(() => {
		navigation.setMaxFragment(3);
	});
</script>

<div class="slide">
	<header>
		<h1>1 Thessalonians 5:23</h1>
		<div class="debug">
			Fragment: {$currentFragment} / 3 | Stack: {$stackDepth}
			{#if $canReturn}<span class="return-hint">Press Esc to return</span>{/if}
		</div>
	</header>

	<div class="content">
		<Fragment step={1} transition="fade">
			<blockquote class="scripture">
				<p>
					Now may the God of peace Himself sanctify you entirely; and may your
					<span class="highlight">spirit</span>
					and
					<span class="highlight">soul</span>
					and
					<span class="highlight">body</span>
					be preserved complete, without blame at the coming of our Lord Jesus Christ.
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={2} transition="fly">
			<div class="breakdown">
				<div class="part spirit">
					<h3>Spirit</h3>
					<p>πνεῦμα (pneuma)</p>
					<p>The innermost part — connection to God</p>
				</div>
				<div class="part soul">
					<h3>Soul</h3>
					<p>ψυχή (psyche)</p>
					<p>Mind, will, emotions</p>
				</div>
				<div class="part body">
					<h3>Body</h3>
					<p>σῶμα (soma)</p>
					<p>Physical form</p>
				</div>
			</div>
		</Fragment>

		<Fragment step={3} transition="scale">
			<div class="insight">
				<h2>Key Insight</h2>
				<p>Man is <strong>tripartite</strong> — spirit, soul, and body.</p>
				<p>This distinguishes man from animals who have only body and spirit.</p>
				<p class="action">Click Return or press Esc to continue building the main diagram.</p>
			</div>
		</Fragment>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 100%);
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
		gap: 30px;
		max-width: 900px;
		margin: 0 auto;
	}

	.scripture {
		background: rgba(255, 255, 255, 0.1);
		border-left: 4px solid #ffd700;
		padding: 24px 32px;
		margin: 0;
		font-size: 26px;
		line-height: 1.6;
		border-radius: 0 8px 8px 0;
	}

	.scripture p {
		margin: 0;
	}

	.highlight {
		color: #00d4ff;
		font-weight: bold;
	}

	.breakdown {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.part {
		flex: 1;
		padding: 24px;
		border-radius: 12px;
		text-align: center;
	}

	.part h3 {
		margin: 0 0 12px 0;
		font-size: 28px;
	}

	.part p {
		margin: 8px 0;
		font-size: 16px;
	}

	.part p:first-of-type {
		font-style: italic;
		color: #aaa;
	}

	.spirit {
		background: linear-gradient(135deg, #0066ff 0%, #0044cc 100%);
	}

	.soul {
		background: linear-gradient(135deg, #00aaff 0%, #0088cc 100%);
	}

	.body {
		background: linear-gradient(135deg, #666 0%, #444 100%);
	}

	.insight {
		background: linear-gradient(135deg, #6b21a8 0%, #4c1d95 100%);
		padding: 30px;
		border-radius: 12px;
		text-align: center;
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
