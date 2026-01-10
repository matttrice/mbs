<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	/**
	 * Dev tool for measuring coordinates on the 960×540 canvas.
	 * Toggle with 'M' key, then:
	 * - Click a shape to detect its coordinates (from data-coords attribute)
	 * - Shift+click to cycle through overlapping shapes
	 * - Drag to manually measure a region
	 * Displays Fragment layout, Arrow from/to, Rect, Arc, and Line formats.
	 */

	let enabled = $state(false);
	let measuring = $state(false);
	let showPanel = $state(false);
	let startPos = $state<{ x: number; y: number } | null>(null);
	let currentPos = $state<{ x: number; y: number } | null>(null);
	let mouseDownPos = $state<{ clientX: number; clientY: number } | null>(null);

	// Output formats
	let fragmentLayout = $state('');
	let arrowCoords = $state('');
	let rectComponent = $state('');
	let arcComponent = $state('');
	let lineComponent = $state('');
	let ellipseComponent = $state('');
	let rotation = $state(0); // degrees
	let panelCorner = $state<'br' | 'bl' | 'tl' | 'tr'>('br'); // bottom-right, bottom-left, top-left, top-right

	// Shape detection state
	let detectedShapes = $state<Array<{ type: string; coords: Record<string, unknown>; element: Element }>>([]);
	let shapeIndex = $state(0);
	let detectedShapeType = $state<string | null>(null);
	let ellipseCoords = $state<{ cx: number; cy: number; rx: number; ry: number } | null>(null);
	// Store actual line/arrow/arc coordinates separately from visual bounding box
	let lineFromTo = $state<{ from: { x: number; y: number }; to: { x: number; y: number } } | null>(null);
	let arcCoords = $state<{ from: { x: number; y: number }; to: { x: number; y: number }; curve: number } | null>(null);
	let arrowFromTo = $state<{ from?: { x: number; y: number }; to?: { x: number; y: number }; fromBox?: { x: number; y: number; width: number; height: number }; toBox?: { x: number; y: number; width: number; height: number }; bow?: number; flip?: boolean } | null>(null);

	// Threshold to distinguish click from drag (in pixels)
	const CLICK_THRESHOLD = 5;

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
			rectComponent = `x={${x}} y={${y}} width={${width}} height={${height}} rotation={${angleDeg}}`;
		} else {
			fragmentLayout = `layout={{ x: ${x}, y: ${y}, width: ${width}, height: ${height} }}`;
			rectComponent = `x={${x}} y={${y}} width={${width}} height={${height}}`;
		}
		arrowCoords = `from={{ x: ${rotatedStart.x}, y: ${rotatedStart.y} }} to={{ x: ${rotatedEnd.x}, y: ${rotatedEnd.y} }}`;
		lineComponent = `from={{ x: ${rotatedStart.x}, y: ${rotatedStart.y} }} to={{ x: ${rotatedEnd.x}, y: ${rotatedEnd.y} }}`;
		arcComponent = '';
		ellipseComponent = '';
		detectedShapeType = null;
	}

	function formatFromShapeCoords(type: string, coords: Record<string, unknown>) {
		detectedShapeType = type;
		// Reset shape-specific state
		lineFromTo = null;
		arrowFromTo = null;
		arcCoords = null;
		ellipseCoords = null;
		
		if (type === 'fragment' || type === 'rect') {
			const x = coords.x as number;
			const y = coords.y as number;
			const width = coords.width as number;
			const height = coords.height as number;
			const rot = (coords.rotation as number) ?? 0;
			rotation = rot;

			// Set start/current positions for visual overlay
			startPos = { x, y };
			currentPos = { x: x + width, y: y + height };

			if (rot !== 0) {
				fragmentLayout = `layout={{ x: ${x}, y: ${y}, width: ${width}, height: ${height}, rotation: ${rot} }}`;
				rectComponent = `x={${x}} y={${y}} width={${width}} height={${height}} rotation={${rot}}`;
			} else {
				fragmentLayout = `layout={{ x: ${x}, y: ${y}, width: ${width}, height: ${height} }}`;
				rectComponent = `x={${x}} y={${y}} width={${width}} height={${height}}`;
			}
			arrowCoords = `from={{ x: ${x}, y: ${y} }} to={{ x: ${x + width}, y: ${y + height} }}`;
			lineComponent = '';
			arcComponent = '';
			ellipseComponent = '';
			ellipseCoords = null;
		} else if (type === 'arrow') {
			if (coords.fromBox && coords.toBox) {
				const fromBox = coords.fromBox as { x: number; y: number; width: number; height: number };
				const toBox = coords.toBox as { x: number; y: number; width: number; height: number };
				const bow = (coords.bow as number) ?? 0;
				const flip = coords.flip as boolean;
				
				// Store for nudging
				arrowFromTo = { fromBox, toBox, bow, flip };
				
				arrowCoords = `fromBox={{ x: ${fromBox.x}, y: ${fromBox.y}, width: ${fromBox.width}, height: ${fromBox.height} }} toBox={{ x: ${toBox.x}, y: ${toBox.y}, width: ${toBox.width}, height: ${toBox.height} }}${bow !== 0 ? ` bow={${bow}}` : ''}${flip ? ' flip' : ''}`;
				
				// Visual overlay for box-to-box: show a bounding area
				const minX = Math.min(fromBox.x, toBox.x);
				const minY = Math.min(fromBox.y, toBox.y);
				const maxX = Math.max(fromBox.x + fromBox.width, toBox.x + toBox.width);
				const maxY = Math.max(fromBox.y + fromBox.height, toBox.y + toBox.height);
				startPos = { x: minX, y: minY };
				currentPos = { x: maxX, y: maxY };
			} else {
				const from = coords.from as { x: number; y: number };
				const to = coords.to as { x: number; y: number };
				const bow = (coords.bow as number) ?? 0;
				const flip = coords.flip as boolean;
				
				// Store for nudging
				arrowFromTo = { from, to, bow, flip };
				
				arrowCoords = `from={{ x: ${from.x}, y: ${from.y} }} to={{ x: ${to.x}, y: ${to.y} }}${bow !== 0 ? ` bow={${bow}}` : ''}${flip ? ' flip' : ''}`;
				
				// Visual overlay for point-to-point: calculate bounding box with padding
				const padding = 10;
				const minX = Math.min(from.x, to.x) - padding;
				const minY = Math.min(from.y, to.y) - padding;
				const maxX = Math.max(from.x, to.x) + padding;
				const maxY = Math.max(from.y, to.y) + padding;
				startPos = { x: minX, y: minY };
				currentPos = { x: maxX, y: maxY };
			}
			fragmentLayout = '';
			rectComponent = '';
			lineComponent = '';
			arcComponent = '';
			ellipseComponent = '';
			rotation = 0;
		} else if (type === 'line') {
			const from = coords.from as { x: number; y: number };
			const to = coords.to as { x: number; y: number };
			
			// Store for nudging
			lineFromTo = { from, to };
			
			lineComponent = `from={{ x: ${from.x}, y: ${from.y} }} to={{ x: ${to.x}, y: ${to.y} }}`;
			arrowCoords = `from={{ x: ${from.x}, y: ${from.y} }} to={{ x: ${to.x}, y: ${to.y} }}`;
			
			// Visual overlay: calculate bounding box with padding
			const padding = 10;
			const minX = Math.min(from.x, to.x) - padding;
			const minY = Math.min(from.y, to.y) - padding;
			const maxX = Math.max(from.x, to.x) + padding;
			const maxY = Math.max(from.y, to.y) + padding;
			startPos = { x: minX, y: minY };
			currentPos = { x: maxX, y: maxY };
			fragmentLayout = '';
			rectComponent = '';
			arcComponent = '';
			ellipseComponent = '';
			rotation = 0;
		} else if (type === 'arc') {
			const from = coords.from as { x: number; y: number };
			const to = coords.to as { x: number; y: number };
			const curve = coords.curve as number;
			
			// Store for nudging
			arcCoords = { from, to, curve };
			
			arcComponent = `<Arc from={{ x: ${from.x}, y: ${from.y} }} to={{ x: ${to.x}, y: ${to.y} }} curve={${curve}} />`;
			arrowCoords = `from={{ x: ${from.x}, y: ${from.y} }} to={{ x: ${to.x}, y: ${to.y} }}`;
			
			// Visual overlay: calculate bounding box with padding accounting for curve
			// Arc peaks at midpoint, so use ~70% of curve for bounding box estimate
			const padding = 10;
			const curveExtent = Math.abs(curve) * 0.7;
			const minX = Math.min(from.x, to.x) - padding;
			const maxX = Math.max(from.x, to.x) + padding;
			// Curve extends up (negative) or down (positive)
			const minY = Math.min(from.y, to.y) - padding - (curve < 0 ? curveExtent : 0);
			const maxY = Math.max(from.y, to.y) + padding + (curve > 0 ? curveExtent : 0);
			startPos = { x: minX, y: minY };
			currentPos = { x: maxX, y: maxY };
			fragmentLayout = '';
			rectComponent = '';
			lineComponent = '';
			ellipseComponent = '';
			rotation = 0;
		} else if (type === 'ellipse') {
			const cx = coords.cx as number;
			const cy = coords.cy as number;
			const rx = coords.rx as number;
			const ry = coords.ry as number;
			
			ellipseCoords = { cx, cy, rx, ry };
			ellipseComponent = `cx={${cx}} cy={${cy}} rx={${rx}} ry={${ry}}`;
			
			// Visual overlay: bounding box around ellipse
			const padding = 5;
			startPos = { x: cx - rx - padding, y: cy - ry - padding };
			currentPos = { x: cx + rx + padding, y: cy + ry + padding };
			fragmentLayout = '';
			rectComponent = '';
			lineComponent = '';
			arcComponent = '';
			arrowCoords = '';
			rotation = 0;
		}
	}

	function detectShapesAtPoint(clientX: number, clientY: number): Array<{ type: string; coords: Record<string, unknown>; element: Element }> {
		const elements = document.elementsFromPoint(clientX, clientY);
		const shapes: Array<{ type: string; coords: Record<string, unknown>; element: Element }> = [];
		
		for (const el of elements) {
			const shapeType = el.getAttribute('data-shape-type');
			const coordsStr = el.getAttribute('data-coords');
			
			if (shapeType && coordsStr) {
				try {
					const coords = JSON.parse(coordsStr);
					shapes.push({ type: shapeType, coords, element: el });
				} catch {
					// Invalid JSON, skip
				}
			}
		}
		
		return shapes;
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
			
			// Handle different shape types that store actual coordinates
			if (detectedShapeType === 'ellipse' && ellipseCoords) {
				ellipseCoords = { ...ellipseCoords, cx: ellipseCoords.cx + dx, cy: ellipseCoords.cy + dy };
				ellipseComponent = `cx={${ellipseCoords.cx}} cy={${ellipseCoords.cy}} rx={${ellipseCoords.rx}} ry={${ellipseCoords.ry}}`;
			} else if (detectedShapeType === 'line' && lineFromTo) {
				lineFromTo = {
					from: { x: lineFromTo.from.x + dx, y: lineFromTo.from.y + dy },
					to: { x: lineFromTo.to.x + dx, y: lineFromTo.to.y + dy }
				};
				lineComponent = `from={{ x: ${lineFromTo.from.x}, y: ${lineFromTo.from.y} }} to={{ x: ${lineFromTo.to.x}, y: ${lineFromTo.to.y} }}`;
				arrowCoords = `from={{ x: ${lineFromTo.from.x}, y: ${lineFromTo.from.y} }} to={{ x: ${lineFromTo.to.x}, y: ${lineFromTo.to.y} }}`;
			} else if (detectedShapeType === 'arrow' && arrowFromTo) {
				if (arrowFromTo.fromBox && arrowFromTo.toBox) {
					const newFromBox = { ...arrowFromTo.fromBox, x: arrowFromTo.fromBox.x + dx, y: arrowFromTo.fromBox.y + dy };
					const newToBox = { ...arrowFromTo.toBox, x: arrowFromTo.toBox.x + dx, y: arrowFromTo.toBox.y + dy };
					const bow = arrowFromTo.bow ?? 0;
					const flip = arrowFromTo.flip;
					arrowFromTo = { ...arrowFromTo, fromBox: newFromBox, toBox: newToBox };
					arrowCoords = `fromBox={{ x: ${newFromBox.x}, y: ${newFromBox.y}, width: ${newFromBox.width}, height: ${newFromBox.height} }} toBox={{ x: ${newToBox.x}, y: ${newToBox.y}, width: ${newToBox.width}, height: ${newToBox.height} }}${bow !== 0 ? ` bow={${bow}}` : ''}${flip ? ' flip' : ''}`;
				} else if (arrowFromTo.from && arrowFromTo.to) {
					const newFrom = { x: arrowFromTo.from.x + dx, y: arrowFromTo.from.y + dy };
					const newTo = { x: arrowFromTo.to.x + dx, y: arrowFromTo.to.y + dy };
					const bow = arrowFromTo.bow ?? 0;
					const flip = arrowFromTo.flip;
					arrowFromTo = { ...arrowFromTo, from: newFrom, to: newTo };
					arrowCoords = `from={{ x: ${newFrom.x}, y: ${newFrom.y} }} to={{ x: ${newTo.x}, y: ${newTo.y} }}${bow !== 0 ? ` bow={${bow}}` : ''}${flip ? ' flip' : ''}`;
				}
			} else if (detectedShapeType === 'arc' && arcCoords) {
				arcCoords = {
					from: { x: arcCoords.from.x + dx, y: arcCoords.from.y + dy },
					to: { x: arcCoords.to.x + dx, y: arcCoords.to.y + dy },
					curve: arcCoords.curve
				};
				arcComponent = `<Arc from={{ x: ${arcCoords.from.x}, y: ${arcCoords.from.y} }} to={{ x: ${arcCoords.to.x}, y: ${arcCoords.to.y} }} curve={${arcCoords.curve}} />`;
				arrowCoords = `from={{ x: ${arcCoords.from.x}, y: ${arcCoords.from.y} }} to={{ x: ${arcCoords.to.x}, y: ${arcCoords.to.y} }}`;
			} else {
				formatOutput(startPos, currentPos, rotation);
			}
		}
	}

	function handleMouseDown(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		const coords = toCanvasCoords(e.clientX, e.clientY);
		if (!coords) return;

		mouseDownPos = { clientX: e.clientX, clientY: e.clientY };
		startPos = coords;
		currentPos = coords;
		measuring = true;
		showPanel = false;
		rotation = 0; // Reset rotation for new measurement
		detectedShapes = [];
		shapeIndex = 0;
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

		if (!measuring || !mouseDownPos) return;
		measuring = false;

		// Check if this was a click (minimal movement) or a drag
		const dx = e.clientX - mouseDownPos.clientX;
		const dy = e.clientY - mouseDownPos.clientY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < CLICK_THRESHOLD) {
			// This is a click - try to detect shapes
			const shapes = detectShapesAtPoint(e.clientX, e.clientY);
			
			if (shapes.length > 0) {
				detectedShapes = shapes;
				
				// Shift+click cycles through shapes, normal click resets to first
				if (e.shiftKey && detectedShapes.length > 1) {
					shapeIndex = (shapeIndex + 1) % shapes.length;
				} else {
					shapeIndex = 0;
				}
				
				const shape = shapes[shapeIndex];
				formatFromShapeCoords(shape.type, shape.coords);
				showPanel = true;
			} else {
				// No shape found, don't show panel
				showPanel = false;
				startPos = null;
				currentPos = null;
			}
		} else {
			// This is a drag - use manual measurement
			detectedShapes = [];
			shapeIndex = 0;
			showPanel = true;
		}
		
		mouseDownPos = null;
	}

	function closePanel() {
		showPanel = false;
		startPos = null;
		currentPos = null;
		rotation = 0;
		detectedShapes = [];
		shapeIndex = 0;
		detectedShapeType = null;
		ellipseCoords = null;
		lineFromTo = null;
		arrowFromTo = null;
		arcCoords = null;
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
			<span class="hint">(CLICK SHAPE OR DRAG)</span>
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
				<span class="panel-title">
					{#if detectedShapeType}
						Detected: <span class="shape-type">{detectedShapeType}</span>
						{#if detectedShapes.length > 1}
							<span class="shape-count">({shapeIndex + 1}/{detectedShapes.length})</span>
						{/if}
					{:else}
						Coordinate Measurement
					{/if}
				</span>
				<div class="header-buttons">
					{#if detectedShapes.length > 1}
						<button class="cycle-btn" onclick={() => { shapeIndex = (shapeIndex + 1) % detectedShapes.length; formatFromShapeCoords(detectedShapes[shapeIndex].type, detectedShapes[shapeIndex].coords); }} aria-label="Cycle to next shape" title="Next shape (or Shift+click)">⇄</button>
					{/if}
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
				<code class="output-code">{fragmentLayout || '—'}</code>
			</div>

			<div class="output-section">
				<div class="output-label">&lt;Arrow&gt; / from-to</div>
				<code class="output-code">{arrowCoords || '—'}</code>
			</div>

			<div class="output-section">
				<div class="output-label">&lt;Rect&gt;</div>
				<code class="output-code">{rectComponent || '—'}</code>
			</div>

			{#if arcComponent}
			<div class="output-section">
				<div class="output-label">&lt;Arc&gt;</div>
				<code class="output-code">{arcComponent}</code>
			</div>
			{/if}

			{#if lineComponent}
			<div class="output-section">
				<div class="output-label">&lt;Line&gt;</div>
				<code class="output-code">{lineComponent}</code>
			</div>
			{/if}

			{#if ellipseComponent}
			<div class="output-section">
				<div class="output-label">&lt;Ellipse&gt;</div>
				<code class="output-code">{ellipseComponent}</code>
			</div>
			{/if}

			<div class="panel-footer">
				{#if detectedShapes.length > 1}
					Shift+click to cycle shapes
				{:else}
					Click code to select all
				{/if}
			</div>
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

	.shape-type {
		color: #00ffff;
		text-transform: uppercase;
	}

	.shape-count {
		color: #88ff88;
		font-weight: normal;
		font-size: 10px;
		margin-left: 4px;
	}

	.cycle-btn {
		background: rgba(0, 255, 255, 0.1);
		border: 1px solid #00ffff;
		color: #00ffff;
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

	.cycle-btn:hover {
		background: rgba(0, 255, 255, 0.25);
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
