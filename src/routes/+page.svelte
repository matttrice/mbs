<script lang="ts">
	import { navigation } from '$lib/stores/navigation';
	import { goto } from '$app/navigation';
	
	// Reset and start fresh
	function startFresh(presentation: string, route: string) {
		navigation.clearPresentation(presentation);
		goto(route);
	}
</script>

<div class="menu">
	<header>
		<h1>Master Bible Study</h1>
		<p class="subtitle">Select a lesson</p>
	</header>
		<div class="model-card-wrapper">
			<a href="/reasoning" class="model-card">
				<h2>Methods of Reason</h2>
				<p>Inductive vs. Deductive thinking in Scripture</p>
				<span class="arrow">→</span>
			</a>
			<button 
				class="reset-btn" 
				onclick={() => startFresh('reasoning', '/reasoning')}
				title="Reset progress and start fresh"
			>
				Reset
			</button>
		</div>
	<nav class="models">
		<div class="model-card-wrapper">
			<a href="/physical-spiritual" class="model-card">
				<h2>Physical / Spiritual</h2>
				<p>Understanding the visible and invisible realms</p>
				<span class="arrow">→</span>
			</a>
			<button 
				class="reset-btn" 
				onclick={() => startFresh('physical-spiritual', '/physical-spiritual')}
				title="Reset progress and start fresh"
			>
				Reset
			</button>
		</div>
		<div class="model-card-wrapper">
			<a href="/promises" class="model-card">
				<h2>The Promises</h2>
				<p>What did God promise Abraham?</p>
				<span class="arrow">→</span>
			</a>
			<button 
				class="reset-btn" 
				onclick={() => startFresh('promises', '/promises')}
				title="Reset progress and start fresh"
			>
				Reset
			</button>
		</div>
	</nav>
</div>

<style>
	.menu {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 60px;
	}

	header h1 {
		font-size: 48px;
		margin: 0;
		color: #ffd700;
	}

	.subtitle {
		color: #aaa;
		font-size: 18px;
		margin-top: 12px;
	}

	.models {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		justify-content: center;
		max-width: 800px;
	}

	.model-card-wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.model-card {
		display: block;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 215, 0, 0.3);
		border-radius: 12px;
		padding: 30px 40px;
		text-decoration: none;
		color: #fff;
		min-width: 280px;
		transition: all 0.2s;
		position: relative;
	}

	.model-card:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: #ffd700;
		transform: translateY(-4px);
	}

	.model-card h2 {
		font-size: 28px;
		margin: 0 0 12px 0;
		color: #ffd700;
	}

	.model-card p {
		margin: 0;
		color: #ccc;
		font-size: 16px;
	}

	.arrow {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 24px;
		color: #ffd700;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.model-card:hover .arrow {
		opacity: 1;
	}

	.reset-btn {
		background: transparent;
		border: 1px solid rgba(255, 100, 100, 0.4);
		color: rgba(255, 100, 100, 0.7);
		padding: 6px 12px;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
		transition: all 0.2s;
		align-self: flex-end;
	}

	.reset-btn:hover {
		background: rgba(255, 100, 100, 0.1);
		border-color: rgba(255, 100, 100, 0.7);
		color: #ff6666;
	}
</style>
