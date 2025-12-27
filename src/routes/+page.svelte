<script lang="ts">
	import { navigation } from '$lib/stores/navigation';
	import { goto } from '$app/navigation';
	
	// Reset and start fresh
	function startFresh(event: Event, presentation: string, route: string) {
		event.preventDefault();
		event.stopPropagation();
		navigation.clearPresentation(presentation);
		goto(route);
	}
</script>

<div class="menu">
	<header>
		<h1>Master Bible Study</h1>
		<p class="subtitle">Select a lesson</p>
	</header>
	<nav class="lessons">
		<a href="/reasoning" class="lesson-card">
			<div class="lesson-content">
				<h2>Methods of Reason</h2>
				<p>Inductive vs. Deductive thinking in Scripture</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'reasoning', '/reasoning')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/physical-spiritual" class="lesson-card">
			<div class="lesson-content">
				<h2>Physical / Spiritual</h2>
				<p>Understanding the visible and invisible realms</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'physical-spiritual', '/physical-spiritual')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/promises" class="lesson-card">
			<div class="lesson-content">
				<h2>The Promises</h2>
				<p>What did God promise Abraham?</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'promises', '/promises')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
	</nav>
</div>

<style>
	.menu {
		width: 100%;
		height: 100%;
		background: var(--color-bg-light);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 60px 40px;
		box-sizing: border-box;
		overflow-y: auto;
	}

	header {
		text-align: center;
		margin-bottom: 48px;
		flex-shrink: 0;
	}

	header h1 {
		font-size: 64px;
		font-weight: 300;
		margin: 0;
		color: var(--color-level3);
		letter-spacing: -1px;
	}

	.subtitle {
		color: var(--color-text-muted);
		font-size: 16px;
		margin-top: 12px;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
	}

	.lessons {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
		gap: 20px;
		width: 100%;
		max-width: 1200px;
	}

	.lesson-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--color-bg-ghost);
		border: none;
		border-radius: 8px;
		padding: 32px 36px;
		text-decoration: none;
		box-shadow: 0 1px 3px var(--color-shadow);
		transition: box-shadow 0.2s ease, transform 0.2s ease;
	}

	.lesson-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
		transform: translateY(-2px);
	}

	.lesson-content {
		flex: 1;
	}

	.lesson-card h2 {
		font-size: 28px;
		font-weight: 600;
		margin: 0 0 8px 0;
		color: var(--color-level3);
	}

	.lesson-card p {
		margin: 0;
		color: var(--color-text-muted);
		font-size: 18px;
	}

	.lesson-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.arrow {
		font-size: 28px;
		color: var(--color-level3);
		opacity: 0.3;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	.lesson-card:hover .arrow {
		opacity: 0.7;
		transform: translateX(3px);
	}

	.reset-btn {
		background: transparent;
		border: none;
		color: var(--color-text-muted);
		padding: 8px 16px;
		border-radius: 6px;
		font-size: 15px;
		font-weight: 500;
		cursor: pointer;
		transition: color 0.15s ease, background 0.15s ease;
		opacity: 0;
	}

	.lesson-card:hover .reset-btn {
		opacity: 1;
	}

	.reset-btn:hover {
		background: rgba(204, 0, 0, 0.08);
		color: var(--color-danger);
	}
</style>
