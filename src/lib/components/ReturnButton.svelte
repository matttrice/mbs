<script lang="ts">
	import { canReturn, navigation, stackDepth } from '$lib/stores/navigation';

	function handleReturn() {
		navigation.returnFromDrill();
	}
</script>

{#if $canReturn}
	<button class="return-button" onclick={handleReturn} title="Return to previous diagram (Esc)">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19 12H5M12 19l-7-7 7-7" />
		</svg>
		<span>Return</span>
		{#if $stackDepth > 1}
			<span class="depth-badge">{$stackDepth}</span>
		{/if}
	</button>
{/if}

<style>
	.return-button {
		position: fixed;
		bottom: 24px;
		left: 24px;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 20px;
		background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
		color: white;
		border: none;
		border-radius: 12px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		box-shadow:
			0 4px 12px rgba(37, 99, 235, 0.3),
			0 2px 4px rgba(0, 0, 0, 0.1);
		transition: all 0.2s ease;
		z-index: 1000;
	}

	.return-button:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 16px rgba(37, 99, 235, 0.4),
			0 3px 6px rgba(0, 0, 0, 0.15);
	}

	.return-button:active {
		transform: translateY(0);
	}

	.depth-badge {
		background: rgba(255, 255, 255, 0.2);
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 12px;
	}
</style>
