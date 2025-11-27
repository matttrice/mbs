<script lang="ts">
	import { navigation, currentFragment, stackDepth, canReturn } from '$lib/stores/navigation';
	import Fragment from '$lib/components/Fragment.svelte';
	import { onMount } from 'svelte';

	// Initialize this custom show
	onMount(() => {
		navigation.setMaxFragment(4);
	});
</script>

<div class="slide">
	<header>
		<h1>Ecclesiastes 3:19-21</h1>
		<div class="debug">
			Fragment: {$currentFragment} / 4 | Stack: {$stackDepth}
			{#if $canReturn}<span class="return-hint">Press Esc to return</span>{/if}
		</div>
	</header>

	<div class="content">
		<Fragment step={1} transition="fade">
			<blockquote class="scripture">
				<p>
					<sup>19</sup> For the fate of the sons of men and the fate of beasts is the same.
					As one dies so dies the other; indeed, they all have the
					<span class="highlight">same breath</span>
					and there is no advantage for man over beast, for all is vanity.
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={2} transition="fade">
			<blockquote class="scripture">
				<p>
					<sup>20</sup> All go to the same place. All came from the dust and all return to the dust.
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={3} transition="fade">
			<blockquote class="scripture">
				<p>
					<sup>21</sup> Who knows that the
					<span class="highlight">breath of man</span>
					ascends upward and the
					<span class="highlight">breath of the beast</span>
					descends downward to the earth?
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={4} transition="scale">
			<div class="insight">
				<h2>Key Insight</h2>
				<p>Both man and animals have <strong>spirit (breath)</strong> — but their destinations differ.</p>
				<p class="action">Click Return or press Esc to continue building the main diagram.</p>
			</div>
		</Fragment>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
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
		padding: 20px 30px;
		margin: 0;
		font-size: 24px;
		line-height: 1.6;
		border-radius: 0 8px 8px 0;
	}

	.scripture p {
		margin: 0;
	}

	.scripture sup {
		color: #888;
		font-size: 14px;
		margin-right: 4px;
	}

	.highlight {
		color: #00d4ff;
		font-weight: bold;
	}

	.insight {
		background: linear-gradient(135deg, #0066cc 0%, #0044aa 100%);
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
