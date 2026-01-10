<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	/**
	 * Dev tool for measuring coordinates on the 960×540 canvas.
	 * Toggle with 'M' key, then drag to measure.
	 * Displays Fragment layout and Arrow from/to formats.
	 */

	let enabled = $state(false);
	let measuring = $state(false);
	let showPanel = $state(false);
	let startPos = $state<{ x: number; y: number } | null>(null);
	let currentPos = $state<{ x: number; y: number } | null>(null);

	// Output formats
	let fragmentLayout = $state('');
	let arrowCoords = $state('');
	let rectComponent = $state('');
	let rotation = $state(0); // degrees
	let panelCorner = $state<'br' | 'bl' | 'tl' | 'tr'>('br'); // bottom-right, bottom-left, top-left, top-right

	function cycleCorner() {
		const order: typeof panelCorner[] = ['br', 'bl', 'tl', 'tr'];
		const idx = order.indexOf(panelCorner);
		panelCorner = order[(idx + 1) % 4];
	}

	const cornerLabels = { br: '↘', bl: '↙', tl: '↖', tr: '↗' };

	onMount(() => {
		if (!browser) return;

		function handleKeydown(e: KeyboardEvent) {
			if (e.key.toLowerCase() === 'm') {
				enabled = !enabled;
				if (!enabled) {
					// Clean up when disabled
					measuring = false;
					showPanel = false;
					startPos = null;
					currentPos = null;
				}
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	function getCanvasElement(): HTMLElement | null {
		return document.querySelector('.slide-canvas');
	}

	function getScale(canvas: HTMLElement): number {
		const transform = getComputedStyle(canvas).transform;
		if (transform === 'none') return 1;
		const matrix = transform.match(/matrix\(([^,]+)/);
		return matrix ? parseFloat(matrix[1]) : 1;
	}

	function toCanvasCoords(clientX: number, clientY: number): { x: number; y: number } | null {
		const canvas = getCanvasElement();
		if (!canvas) return null;

		const rect = canvas.getBoundingClientRect();
		const scale = getScale(canvas);

		// Canvas dimensions
		const canvasWidth = 960;
		const canvasHeight = 540;
		const scaledWidth = canvasWidth * scale;
		const scaledHeight = canvasHeight * scale;

		// Canvas is centered in viewport
		const canvasLeft = rect.left + (rect.width - scaledWidth) / 2;
		const canvasTop = rect.top + (rect.height - scaledHeight) / 2;

		// Convert to canvas coordinates
		const x = Math.round((clientX - canvasLeft) / scale);
		const y = Math.round((clientY - canvasTop) / scale);

		return { x, y };
	}

	function formatOutput(start: { x: number; y: number }, end: { x: number; y: number }, angleDeg: number = 0) {
		// Calculate center point
		const centerX = (start.x + end.x) / 2;
		const centerY = (start.y + end.y) / 2;

		// Rotate points around center
		const angleRad = (angleDeg * Math.PI) / 180;
		const cos = Math.cos(angleRad);
		const sin = Math.sin(angleRad);

		function rotatePoint(px: number, py: number) {
			const dx = px - centerX;
			const dy = py - centerY;
			return {
				x: Math.round(centerX + dx * cos - dy * sin),
				y: Math.round(centerY + dx * sin + dy * cos)
			};
		}

		const rotatedStart = rotatePoint(start.x, start.y);
		const rotatedEnd = rotatePoint(end.x, end.y);

		// For layout (bounding box), use original unrotated values
		const x = Math.min(start.x, end.x);
		const y = Math.min(start.y, end.y);
		const width = Math.abs(end.x - start.x);
		const height = Math.abs(end.y - start.y);

		// Include rotation in Fragment layout and Rect if non-zero
		if (angleDeg !== 0) {
			fragmentLayout = `layout={{ x: ${x}, y: ${y}, width: ${width}, height: ${height}, rotation: ${angleDeg} }}`;
			rectComponent = `<Rect x={${x}} y={${y}} width={${width}} height={${height}} rotation={${angleDeg}} />`;
		} else {
			fragmentLayout = `layout={{ x: ${x}, y: ${y}, width: ${width}, height: ${height} }}`;
			rectComponent = `<Rect x={${x}} y={${y}} width={${width}} height={${height}} />`;
		}
		arrowCoords = `from={{ x: ${rotatedStart.x}, y: ${rotatedStart.y} }} to={{ x: ${rotatedEnd.x}, y: ${rotatedEnd.y} }}`;
	}

	function rotateLeft() {
		rotation -= 15;
		if (startPos && currentPos) {
			formatOutput(startPos, currentPos, rotation);
		}
	}

	function rotateRight() {
		rotation += 15;
		if (startPos && currentPos) {
			formatOutput(startPos, currentPos, rotation);
		}
	}

	function rotateLeftFine() {
		rotation -= 1;
		if (startPos && currentPos) {
			formatOutput(startPos, currentPos, rotation);
		}
	}

	function rotateRightFine() {
		rotation += 1;
		if (startPos && currentPos) {
			formatOutput(startPos, currentPos, rotation);
		}
	}

	function nudge(dx: number, dy: number) {
		if (startPos && currentPos) {
			startPos = { x: startPos.x + dx, y: startPos.y + dy };
			currentPos = { x: currentPos.x + dx, y: currentPos.y + dy };
			formatOutput(startPos, currentPos, rotation);
		}
	}

	function handleMouseDown(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		const coords = toCanvasCoords(e.clientX, e.clientY);
		if (!coords) return;

		startPos = coords;
		currentPos = coords;
		measuring = true;
		showPanel = false;
		rotation = 0; // Reset rotation for new measurement
	}

	function handleMouseMove(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		if (!measuring || !startPos) return;

		const coords = toCanvasCoords(e.clientX, e.clientY);
		if (!coords) return;

		currentPos = coords;
		formatOutput(startPos, coords);
	}

	function handleMouseUp(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		if (!measuring) return;
		measuring = false;
		showPanel = true;
	}

	function closePanel() {
		showPanel = false;
		startPos = null;
		currentPos = null;
		rotation = 0;
	}

	// Calculate rectangle dimensions for overlay
	let rectX = $derived(startPos && currentPos ? Math.min(startPos.x, currentPos.x) : 0);
	let rectY = $derived(startPos && currentPos ? Math.min(startPos.y, currentPos.y) : 0);
	let rectWidth = $derived(
		startPos && currentPos ? Math.abs(currentPos.x - startPos.x) : 0
	);
	let rectHeight = $derived(
		startPos && currentPos ? Math.abs(currentPos.y - startPos.y) : 0
	);

	// Get canvas element position for SVG overlay
	let canvasRect = $state<DOMRect | null>(null);
	let canvasScale = $state(1);

	$effect(() => {
		if (!enabled || !browser) return;

		const updateCanvasInfo = () => {
			const canvas = getCanvasElement();
			if (canvas) {
				canvasRect = canvas.getBoundingClientRect();
				canvasScale = getScale(canvas);
			}
		};

		updateCanvasInfo();
		window.addEventListener('resize', updateCanvasInfo);

		return () => {
			window.removeEventListener('resize', updateCanvasInfo);
		};
	});

	// Convert canvas coordinates to viewport pixels for SVG rendering
	let svgX = $derived(canvasRect ? canvasRect.left + (canvasRect.width - 960 * canvasScale) / 2 + rectX * canvasScale : 0);
	let svgY = $derived(canvasRect ? canvasRect.top + (canvasRect.height - 540 * canvasScale) / 2 + rectY * canvasScale : 0);
	let svgWidth = $derived(rectWidth * canvasScale);
	let svgHeight = $derived(rectHeight * canvasScale);

	// Center point for rotation (in viewport pixels)
	let svgCenterX = $derived(svgX + svgWidth / 2);
	let svgCenterY = $derived(svgY + svgHeight / 2);

	// Show shape during drag OR when panel is shown
	let showShape = $derived((measuring && startPos && currentPos && canvasRect) || (showPanel && startPos && currentPos && canvasRect));
</script>

{#if enabled}
	<!-- Full-screen overlay to capture mouse events and prevent text selection -->
	<div 
		class="measure-capture-overlay"
		role="button"
		tabindex="-1"
		onmousedown={handleMouseDown}
		onmousemove={handleMouseMove}
		onmouseup={handleMouseUp}
	>
		<!-- Visual indicator that measure mode is active -->
		<div class="measure-indicator">
			<span class="indicator-dot"></span>
			MEASURE MODE
			<span class="hint">(DRAG TO MEASURE)</span>
		</div>

		<!-- SVG overlay for measurement rectangle -->
		{#if showShape}
			<svg class="measure-svg-overlay">
				<rect
					x={svgX}
					y={svgY}
					width={svgWidth}
					height={svgHeight}
					stroke="#00ff00"
					stroke-width="2"
					fill="rgba(0, 255, 0, 0.1)"
					stroke-dasharray="5,5"
					transform="rotate({rotation} {svgCenterX} {svgCenterY})"
				/>
				<!-- Show arrow line when rotated -->
				{#if rotation !== 0}
					{@const angleRad = (rotation * Math.PI) / 180}
					{@const cos = Math.cos(angleRad)}
					{@const sin = Math.sin(angleRad)}
					{@const dx1 = svgX - svgCenterX}
					{@const dy1 = svgY - svgCenterY}
					{@const dx2 = svgX + svgWidth - svgCenterX}
					{@const dy2 = svgY + svgHeight - svgCenterY}
					{@const x1 = svgCenterX + dx1 * cos - dy1 * sin}
					{@const y1 = svgCenterY + dx1 * sin + dy1 * cos}
					{@const x2 = svgCenterX + dx2 * cos - dy2 * sin}
					{@const y2 = svgCenterY + dx2 * sin + dy2 * cos}
					<line
						x1={x1}
						y1={y1}
						x2={x2}
						y2={y2}
						stroke="#ff00ff"
						stroke-width="3"
						marker-end="url(#arrowhead)"
					/>
					<defs>
						<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
							<polygon points="0 0, 10 3.5, 0 7" fill="#ff00ff" />
						</marker>
					</defs>
				{/if}
			</svg>
		{/if}
	</div>

	<!-- Output panel -->
	{#if showPanel}
		<div class="measure-panel corner-{panelCorner}">
			<div class="panel-header">
				<span class="panel-title">Coordinate Measurement</span>
				<div class="header-buttons">
					<button class="corner-btn" onclick={cycleCorner} aria-label="Move panel to next corner" title="Move to next corner">{cornerLabels[panelCorner]}</button>
					<button class="close-btn" onclick={closePanel} aria-label="Close panel">×</button>
				</div>
			</div>

			<div class="controls-row">
				<div class="rotation-controls">
					<button class="rotate-btn" onclick={rotateLeft} aria-label="Rotate left 15°">
						↶ 15°
					</button>
					<button class="rotate-btn rotate-btn-fine" onclick={rotateLeftFine} aria-label="Rotate left 1°">
						↶ 1°
					</button>
					<span class="rotation-value">{rotation}°</span>
					<button class="rotate-btn rotate-btn-fine" onclick={rotateRightFine} aria-label="Rotate right 1°">
						1° ↷
					</button>
					<button class="rotate-btn" onclick={rotateRight} aria-label="Rotate right 15°">
						15° ↷
					</button>
				</div>
				<div class="nudge-controls">
					<button class="nudge-btn" onclick={() => nudge(-10, 0)} aria-label="Nudge left 10px">←10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(-1, 0)} aria-label="Nudge left 1px">←</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(0, -1)} aria-label="Nudge up 1px">↑</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(0, 1)} aria-label="Nudge down 1px">↓</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(1, 0)} aria-label="Nudge right 1px">→</button>
					<button class="nudge-btn" onclick={() => nudge(10, 0)} aria-label="Nudge right 10px">10→</button>
				</div>
			</div>

			<div class="output-section">
				<div class="output-label">&lt;Fragment&gt;</div>
				<code class="output-code">{fragmentLayout}</code>
			</div>

			<div class="output-section">
				<div class="output-label">&lt;Arrow&gt;</div>
				<code class="output-code">{arrowCoords}</code>
			</div>

			<div class="output-section">
				<div class="output-label">&lt;Rect&gt;</div>
				<code class="output-code">{rectComponent}</code>
			</div>

			<div class="panel-footer">Click code to select all</div>
		</div>
	{/if}
{/if}

<style>
	.measure-capture-overlay {
		position: fixed;
		inset: 0;
		z-index: 9998;
		cursor: crosshair;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}

	.measure-indicator {
		position: fixed;
		top: 10px;
		left: 10px;
		background: rgba(0, 0, 0, 0.9);
		color: #00ff00;
		padding: 8px 12px;
		border-radius: 4px;
		font-family: monospace;
		font-size: 11px;
		font-weight: bold;
		z-index: 10000;
		display: flex;
		align-items: center;
		gap: 6px;
		pointer-events: none;
		border: 1px solid #00ff00;
	}

	.indicator-dot {
		width: 8px;
		height: 8px;
		background: #00ff00;
		border-radius: 50%;
		animation: pulse 1.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	.hint {
		color: #88ff88;
		font-weight: normal;
		font-size: 10px;
	}

	.measure-svg-overlay {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
	}

	.measure-panel {
		position: fixed;
		background: rgba(0, 0, 0, 0.95);
		color: #00ff00;
		padding: 0;
		border-radius: 6px;
		font-family: monospace;
		font-size: 11px;
		z-index: 10001;
		width: 490px;
		border: 1px solid #00ff00;
		box-shadow: 0 4px 12px rgba(0, 255, 0, 0.2);
	}

	/* Corner positioning */
	.corner-br { bottom: 70px; right: 10px; }
	.corner-bl { bottom: 70px; left: 10px; }
	.corner-tl { top: 50px; left: 10px; }
	.corner-tr { top: 50px; right: 10px; }

	.panel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 12px;
		border-bottom: 1px solid #00ff00;
		background: rgba(0, 255, 0, 0.1);
	}

	.header-buttons {
		display: flex;
		gap: 6px;
		align-items: center;
		flex-shrink: 0;
	}

	.corner-btn {
		background: rgba(0, 255, 0, 0.1);
		border: 1px solid #00ff00;
		color: #00ff00;
		font-size: 14px;
		cursor: pointer;
		padding: 0;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		transition: background 0.2s;
	}

	.corner-btn:hover {
		background: rgba(0, 255, 0, 0.25);
	}

	.panel-title {
		font-weight: bold;
		font-size: 12px;
	}

	.controls-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 12px;
		border-bottom: 1px solid rgba(0, 255, 0, 0.3);
		background: rgba(0, 255, 0, 0.05);
		gap: 16px;
	}

	.rotation-controls {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.nudge-controls {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.nudge-btn {
		background: rgba(0, 255, 0, 0.1);
		border: 1px solid #00ff00;
		color: #00ff00;
		font-family: monospace;
		font-size: 10px;
		padding: 4px 6px;
		border-radius: 3px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.nudge-btn:hover {
		background: rgba(0, 255, 0, 0.25);
	}

	.nudge-btn-fine {
		padding: 4px 5px;
	}

	.rotate-btn {
		background: rgba(0, 255, 0, 0.1);
		border: 1px solid #00ff00;
		color: #00ff00;
		font-family: monospace;
		font-size: 11px;
		padding: 6px 10px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.rotate-btn:hover {
		background: rgba(0, 255, 0, 0.25);
	}

	.rotate-btn-fine {
		font-size: 10px;
		padding: 4px 6px;
		opacity: 0.8;
	}

	.rotation-value {
		font-size: 12px;
		font-weight: bold;
		min-width: 40px;
		text-align: center;
	}

	.close-btn {
		background: none;
		border: none;
		color: #00ff00;
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
		padding: 0;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		transition: background 0.2s;
	}

	.close-btn:hover {
		background: rgba(0, 255, 0, 0.2);
	}

	.output-section {
		padding: 10px 12px;
		border-bottom: 1px solid rgba(0, 255, 0, 0.3);
	}

	.output-section:last-of-type {
		border-bottom: none;
	}

	.output-label {
		color: #88ff88;
		font-size: 10px;
		margin-bottom: 4px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.output-code {
		display: block;
		background: rgba(0, 255, 0, 0.05);
		padding: 8px;
		border-radius: 3px;
		border: 1px solid rgba(0, 255, 0, 0.3);
		user-select: all;
		cursor: text;
		line-height: 1.4;
		white-space: pre-wrap;
		word-break: break-all;
	}

	.output-code:hover {
		background: rgba(0, 255, 0, 0.1);
		border-color: rgba(0, 255, 0, 0.5);
	}

	.panel-footer {
		padding: 8px 12px;
		font-size: 9px;
		color: #88ff88;
		text-align: center;
		background: rgba(0, 255, 0, 0.05);
		border-radius: 0 0 6px 6px;
	}
</style>
