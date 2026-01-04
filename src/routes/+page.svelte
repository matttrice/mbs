<script lang="ts">
	import { navigation, autoDrillAll } from '$lib/stores/navigation';
	import { goto } from '$app/navigation';
	
	// Reset and start fresh
	function startFresh(event: Event, presentation: string, route: string) {
		event.preventDefault();
		event.stopPropagation();
		navigation.clearPresentation(presentation);
		goto(route);
	}

	function toggleAutoDrill() {
		navigation.setAutoDrillAll(!$autoDrillAll);
	}
</script>

<div class="menu">
	<header>
		<h1>Master Bible Study</h1>
		<p class="subtitle">Select a lesson</p>
		<div class="auto-drill-toggle">
			<label class="toggle-label">
				<span class="toggle-text">Auto-drill</span>
				<button 
					class="toggle-switch"
					class:active={$autoDrillAll}
					onclick={toggleAutoDrill}
					aria-pressed={$autoDrillAll}
					title={$autoDrillAll ? 'Auto-drill enabled: all scripture references drill automatically' : 'Auto-drill disabled: only last reference drills automatically'}
				>
					<span class="toggle-knob"></span>
				</button>
			</label>
		</div>
	</header>
	<nav class="lessons">
		<a href="/reasoning" class="lesson-card">
			<div class="lesson-content">
				<h2>1. Methods of Reason</h2>
				<p>Inductive vs. Deductive Thinking in Scripture</p>
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
				<h2>2. Physical / Spiritual</h2>
				<p>Understanding the visible and invisible realms; foundational model for all other lessons</p>
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
		<a href="/biblical-time" class="lesson-card">
			<div class="lesson-content">
				<h2>3. Biblical Time</h2>
				<p>Understanding the timeline from eternity to eternity</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'biblical-time', '/biblical-time')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/life" class="lesson-card">
			<div class="lesson-content">
				<h2>4. Life</h2>
				<p>Body, Spirit, and Soul - understanding the whole person</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'life', '/life')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/law" class="lesson-card">
			<div class="lesson-content">
				<h2>5. Law</h2>
				<p>Moral Law, Commandment Law, and the Law of Faith</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'law', '/law')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/sin-and-death" class="lesson-card">
			<div class="lesson-content">
				<h2>6. Sin & Death</h2>
				<p>Understanding mortality, morality, and original sin</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'sin-and-death', '/sin-and-death')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/translation" class="lesson-card">
			<div class="lesson-content">
				<h2>7. Translation</h2>
				<p>Physical to Spiritual realm transitions: Incarnation and Excarnation</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'translation', '/translation')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/ark" class="lesson-card">
			<div class="lesson-content">
				<h2>8. The Ark</h2>
				<p>Pattern of Salvation: Judgment, Wrath, Plan of Salvation, Blood</p>
			</div>
			<div class="lesson-actions">
				<button 
					class="reset-btn" 
					onclick={(e) => startFresh(e, 'ark', '/ark')}
					title="Reset progress and start fresh"
				>
					Reset
				</button>
				<span class="arrow">→</span>
			</div>
		</a>
		<a href="/promises" class="lesson-card">
			<div class="lesson-content">
				<h2>9. The Promises</h2>
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
		padding: 20px 40px;
		box-sizing: border-box;
		overflow-y: auto;
	}

	header {
		text-align: center;
		margin-bottom: 0px;
		flex-shrink: 0;
		position: relative;
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

	.auto-drill-toggle {
		position: absolute;
		top: 0;
		right: -200px;
	}

	.toggle-label {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.toggle-text {
		font-size: 14px;
		color: var(--color-text-muted);
		font-weight: 500;
	}

	.toggle-switch {
		position: relative;
		width: 44px;
		height: 24px;
		background: var(--color-text-muted);
		border: none;
		border-radius: 12px;
		cursor: pointer;
		transition: background 0.2s ease;
		padding: 0;
	}

	.toggle-switch.active {
		background: var(--color-level3);
	}

	.toggle-knob {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 20px;
		height: 20px;
		background: white;
		border-radius: 50%;
		transition: transform 0.2s ease;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	.toggle-switch.active .toggle-knob {
		transform: translateX(20px);
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
		transition: color 0.2s ease, background 0.2s ease, opacity 0.2s ease;
		opacity: 0;
		pointer-events: none;
	}

	.lesson-card:hover .reset-btn {
		opacity: .8;
		background: var(--color-level3);
		color: var(--color-bg-ghost);
		pointer-events: auto;
	}

	.lesson-card:hover .reset-btn:hover {
		background: rgba(204, 0, 0, 0.3);
		color: var(--color-bg-danger-dark);
	}
</style>
