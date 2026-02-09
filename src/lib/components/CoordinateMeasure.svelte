<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { getArrow, getBoxToBoxArrow } from 'perfect-arrows';

	/**
	 * Dev tool for measuring coordinates on the 960×540 canvas.
	 * Toggle with 'M' key, then:
	 * - Click a shape to detect its coordinates (from data-coords attribute)
	 * - Shift+click to cycle through overlapping shapes
	 * - Drag to manually measure a region (defaults to Fragment, switchable)
	 * Shows only the selected shape type's output and live preview.
	 */

	// --- Discriminated union for shape state ---
	type Point = { x: number; y: number };
	type Box = { x: number; y: number; width: number; height: number };
	type ShapeType = 'fragment' | 'rect' | 'arrow' | 'line' | 'arc' | 'ellipse';

	type FragmentShape = { type: 'fragment'; x: number; y: number; width: number; height: number; rotation: number };
	type RectShape = { type: 'rect'; x: number; y: number; width: number; height: number; rotation: number };
	type ArrowShape = { type: 'arrow'; from?: Point; to?: Point; fromBox?: Box; toBox?: Box; bow: number; flip: boolean };
	type LineShape = { type: 'line'; from: Point; to: Point };
	type ArcShape = { type: 'arc'; from: Point; to: Point; curve: number };
	type EllipseShape = { type: 'ellipse'; cx: number; cy: number; rx: number; ry: number };

	type ShapeState = FragmentShape | RectShape | ArrowShape | LineShape | ArcShape | EllipseShape;

	// --- Core state ---
	let enabled = $state(false);
	let measuring = $state(false);
	let showPanel = $state(false);
	let mouseDownPos = $state<{ clientX: number; clientY: number } | null>(null);
	let dragStart = $state<Point | null>(null); // canvas coords of drag start (for live drag preview)
	let dragCurrent = $state<Point | null>(null); // canvas coords of drag current

	let shape = $state<ShapeState | null>(null); // single source of truth
	let originalCode = $state<string>(''); // snapshot of outputCode at initial detection (before nudging)
	let activeEndpoint = $state<'from' | 'to' | 'both'>('both'); // for line/arrow/arc endpoint toggle
	let panelCorner = $state<'br' | 'bl' | 'tl' | 'tr'>('br');

	// Shape detection state
	let detectedShapes = $state<Array<{ type: string; coords: Record<string, unknown>; element: Element }>>([]);
	let shapeIndex = $state(0);

	const CLICK_THRESHOLD = 5;
	const ALL_SHAPE_TYPES: ShapeType[] = ['fragment', 'rect', 'arrow', 'line', 'arc', 'ellipse'];

	// --- Helpers ---

	/** Round to at most 2 decimal places, strip trailing zeros */
	function fmt(n: number): string {
		return parseFloat(n.toFixed(2)).toString();
	}

	function cycleCorner() {
		const order: typeof panelCorner[] = ['br', 'bl', 'tl', 'tr'];
		const idx = order.indexOf(panelCorner);
		panelCorner = order[(idx + 1) % 4];
	}

	const cornerLabels = { br: '↘', bl: '↙', tl: '↖', tr: '↗' };

	/** True if the shape type has from/to endpoints */
	function hasEndpoints(s: ShapeState): s is LineShape | ArcShape | (ArrowShape & { from: Point; to: Point }) {
		return s.type === 'line' || s.type === 'arc' || (s.type === 'arrow' && !!s.from && !!s.to);
	}

	// --- Generate output code string from a shape ---
	function generateOutputCode(s: ShapeState | null): string {
		if (!s) return '—';
		switch (s.type) {
			case 'fragment': {
				const rot = s.rotation !== 0 ? `, rotation: ${fmt(s.rotation)}` : '';
				return `layout={{ x: ${fmt(s.x)}, y: ${fmt(s.y)}, width: ${fmt(s.width)}, height: ${fmt(s.height)}${rot} }}`;
			}
			case 'rect': {
				const rot = s.rotation !== 0 ? ` rotation={${fmt(s.rotation)}}` : '';
				return `x={${fmt(s.x)}} y={${fmt(s.y)}} width={${fmt(s.width)}} height={${fmt(s.height)}}${rot}`;
			}
			case 'arrow': {
				if (s.fromBox && s.toBox) {
					const fb = s.fromBox;
					const tb = s.toBox;
					return `fromBox={{ x: ${fmt(fb.x)}, y: ${fmt(fb.y)}, width: ${fmt(fb.width)}, height: ${fmt(fb.height)} }} toBox={{ x: ${fmt(tb.x)}, y: ${fmt(tb.y)}, width: ${fmt(tb.width)}, height: ${fmt(tb.height)} }}${s.bow !== 0 ? ` bow={${fmt(s.bow)}}` : ''}${s.flip ? ' flip' : ''}`;
				} else if (s.from && s.to) {
					return `from={{ x: ${fmt(s.from.x)}, y: ${fmt(s.from.y)} }} to={{ x: ${fmt(s.to.x)}, y: ${fmt(s.to.y)} }}${s.bow !== 0 ? ` bow={${fmt(s.bow)}}` : ''}${s.flip ? ' flip' : ''}`;
				}
				return '—';
			}
			case 'line':
				return `from={{ x: ${fmt(s.from.x)}, y: ${fmt(s.from.y)} }} to={{ x: ${fmt(s.to.x)}, y: ${fmt(s.to.y)} }}`;
			case 'arc':
				return `from={{ x: ${fmt(s.from.x)}, y: ${fmt(s.from.y)} }} to={{ x: ${fmt(s.to.x)}, y: ${fmt(s.to.y)} }} curve={${fmt(s.curve)}}`;
			case 'ellipse':
				return `cx={${fmt(s.cx)}} cy={${fmt(s.cy)}} rx={${fmt(s.rx)}} ry={${fmt(s.ry)}}`;
		}
	}

	let outputCode = $derived(generateOutputCode(shape));

	// --- Derived: component label ---
	let shapeLabel = $derived.by(() => {
		if (!shape) return '';
		const labels: Record<ShapeType, string> = {
			fragment: 'Fragment',
			rect: 'Rect',
			arrow: 'Arrow',
			line: 'Line',
			arc: 'Arc',
			ellipse: 'Ellipse'
		};
		return labels[shape.type];
	});

	// --- Canvas helpers ---
	onMount(() => {
		if (!browser) return;

		function handleKeydown(e: KeyboardEvent) {
			if (e.key.toLowerCase() === 'm') {
				enabled = !enabled;
				if (!enabled) {
					measuring = false;
					showPanel = false;
					shape = null;
					dragStart = null;
					dragCurrent = null;
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

	function toCanvasCoords(clientX: number, clientY: number): Point | null {
		const canvas = getCanvasElement();
		if (!canvas) return null;

		const rect = canvas.getBoundingClientRect();
		const scale = getScale(canvas);
		const canvasWidth = 960;
		const canvasHeight = 540;
		const scaledWidth = canvasWidth * scale;
		const scaledHeight = canvasHeight * scale;
		const canvasLeft = rect.left + (rect.width - scaledWidth) / 2;
		const canvasTop = rect.top + (rect.height - scaledHeight) / 2;

		return {
			x: Math.round((clientX - canvasLeft) / scale),
			y: Math.round((clientY - canvasTop) / scale)
		};
	}

	// --- Build ShapeState from detected coords ---
	function buildShape(type: string, coords: Record<string, unknown>): ShapeState | null {
		if (type === 'fragment' || type === 'rect') {
			return {
				type: type as 'fragment' | 'rect',
				x: coords.x as number,
				y: coords.y as number,
				width: coords.width as number,
				height: coords.height as number,
				rotation: (coords.rotation as number) ?? 0
			};
		} else if (type === 'arrow') {
			if (coords.fromBox && coords.toBox) {
				return {
					type: 'arrow',
					fromBox: coords.fromBox as Box,
					toBox: coords.toBox as Box,
					bow: (coords.bow as number) ?? 0,
					flip: (coords.flip as boolean) ?? false
				};
			} else {
				return {
					type: 'arrow',
					from: coords.from as Point,
					to: coords.to as Point,
					bow: (coords.bow as number) ?? 0,
					flip: (coords.flip as boolean) ?? false
				};
			}
		} else if (type === 'line') {
			return { type: 'line', from: coords.from as Point, to: coords.to as Point };
		} else if (type === 'arc') {
			return { type: 'arc', from: coords.from as Point, to: coords.to as Point, curve: coords.curve as number };
		} else if (type === 'ellipse') {
			return { type: 'ellipse', cx: coords.cx as number, cy: coords.cy as number, rx: coords.rx as number, ry: coords.ry as number };
		}
		return null;
	}

	/** Build a shape from a drag rectangle, using the given type */
	function buildShapeFromDrag(start: Point, end: Point, targetType: ShapeType): ShapeState {
		const x = Math.min(start.x, end.x);
		const y = Math.min(start.y, end.y);
		const width = Math.abs(end.x - start.x);
		const height = Math.abs(end.y - start.y);

		switch (targetType) {
			case 'fragment':
				return { type: 'fragment', x, y, width, height, rotation: 0 };
			case 'rect':
				return { type: 'rect', x, y, width, height, rotation: 0 };
			case 'arrow':
				return { type: 'arrow', from: { ...start }, to: { ...end }, bow: 0, flip: false };
			case 'line':
				return { type: 'line', from: { ...start }, to: { ...end } };
			case 'arc':
				return { type: 'arc', from: { ...start }, to: { ...end }, curve: 0 };
			case 'ellipse':
				return { type: 'ellipse', cx: x + width / 2, cy: y + height / 2, rx: width / 2, ry: height / 2 };
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
					shapes.push({ type: shapeType, coords: JSON.parse(coordsStr), element: el });
				} catch { /* skip */ }
			}
		}
		return shapes;
	}

	// --- Switch shape type (for drag-to-measure) ---
	function switchShapeType(newType: ShapeType) {
		if (!shape || shape.type === newType) return;
		// Convert current shape to new type, preserving geometry
		const bb = shapeBoundingBox(shape);
		if (!bb) return;
		const start: Point = { x: bb.x, y: bb.y };
		const end: Point = { x: bb.x + bb.width, y: bb.y + bb.height };

		// For types with from/to, try to preserve original from/to if available
		if (hasEndpoints(shape) && (newType === 'line' || newType === 'arc' || newType === 'arrow')) {
			const from = 'from' in shape && shape.from ? shape.from : start;
			const to = 'to' in shape && shape.to ? shape.to : end;
			if (newType === 'line') {
				shape = { type: 'line', from: { ...from }, to: { ...to } };
			} else if (newType === 'arc') {
				shape = { type: 'arc', from: { ...from }, to: { ...to }, curve: 0 };
			} else {
				shape = { type: 'arrow', from: { ...from }, to: { ...to }, bow: 0, flip: false };
			}
		} else {
			shape = buildShapeFromDrag(start, end, newType);
		}
		activeEndpoint = 'both';
	}

	// --- Bounding box for showShape guard ---
	function shapeBoundingBox(s: ShapeState): Box | null {
		const P = 2; // padding
		switch (s.type) {
			case 'fragment':
			case 'rect':
				return { x: s.x, y: s.y, width: s.width, height: s.height };
			case 'arrow': {
				if (s.fromBox && s.toBox) {
					const minX = Math.min(s.fromBox.x, s.toBox.x);
					const minY = Math.min(s.fromBox.y, s.toBox.y);
					const maxX = Math.max(s.fromBox.x + s.fromBox.width, s.toBox.x + s.toBox.width);
					const maxY = Math.max(s.fromBox.y + s.fromBox.height, s.toBox.y + s.toBox.height);
					return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
				} else if (s.from && s.to) {
					const minX = Math.min(s.from.x, s.to.x) - P;
					const minY = Math.min(s.from.y, s.to.y) - P;
					const maxX = Math.max(s.from.x, s.to.x) + P;
					const maxY = Math.max(s.from.y, s.to.y) + P;
					return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
				}
				return null;
			}
			case 'line': {
				const minX = Math.min(s.from.x, s.to.x) - P;
				const minY = Math.min(s.from.y, s.to.y) - P;
				return { x: minX, y: minY, width: Math.max(s.from.x, s.to.x) + P - minX, height: Math.max(s.from.y, s.to.y) + P - minY };
			}
			case 'arc': {
				const curveExtent = Math.abs(s.curve) * 0.7;
				const minX = Math.min(s.from.x, s.to.x) - P;
				const maxX = Math.max(s.from.x, s.to.x) + P;
				const minY = Math.min(s.from.y, s.to.y) - P - (s.curve < 0 ? curveExtent : 0);
				const maxY = Math.max(s.from.y, s.to.y) + P + (s.curve > 0 ? curveExtent : 0);
				return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
			}
			case 'ellipse':
				return { x: s.cx - s.rx - P, y: s.cy - s.ry - P, width: (s.rx + P) * 2, height: (s.ry + P) * 2 };
		}
	}

	// --- Adjustment functions ---

	function adjustRotation(delta: number) {
		if (!shape || (shape.type !== 'fragment' && shape.type !== 'rect')) return;
		shape = { ...shape, rotation: shape.rotation + delta };
	}

	function nudge(dx: number, dy: number) {
		if (!shape) return;

		switch (shape.type) {
			case 'fragment':
			case 'rect':
				shape = { ...shape, x: shape.x + dx, y: shape.y + dy };
				break;
			case 'ellipse':
				shape = { ...shape, cx: shape.cx + dx, cy: shape.cy + dy };
				break;
			case 'line':
				if (activeEndpoint === 'from') {
					shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy } };
				} else if (activeEndpoint === 'to') {
					shape = { ...shape, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
				} else {
					shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy }, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
				}
				break;
			case 'arc':
				if (activeEndpoint === 'from') {
					shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy } };
				} else if (activeEndpoint === 'to') {
					shape = { ...shape, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
				} else {
					shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy }, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
				}
				break;
			case 'arrow':
				if (shape.fromBox && shape.toBox) {
					if (activeEndpoint === 'from') {
						shape = { ...shape, fromBox: { ...shape.fromBox, x: shape.fromBox.x + dx, y: shape.fromBox.y + dy } };
					} else if (activeEndpoint === 'to') {
						shape = { ...shape, toBox: { ...shape.toBox, x: shape.toBox.x + dx, y: shape.toBox.y + dy } };
					} else {
						shape = { ...shape, fromBox: { ...shape.fromBox, x: shape.fromBox.x + dx, y: shape.fromBox.y + dy }, toBox: { ...shape.toBox, x: shape.toBox.x + dx, y: shape.toBox.y + dy } };
					}
				} else if (shape.from && shape.to) {
					if (activeEndpoint === 'from') {
						shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy } };
					} else if (activeEndpoint === 'to') {
						shape = { ...shape, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
					} else {
						shape = { ...shape, from: { x: shape.from.x + dx, y: shape.from.y + dy }, to: { x: shape.to.x + dx, y: shape.to.y + dy } };
					}
				}
				break;
		}
	}

	function adjustSize(prop: 'width' | 'height', delta: number) {
		if (!shape || (shape.type !== 'fragment' && shape.type !== 'rect')) return;
		const newVal = Math.max(1, shape[prop] + delta);
		shape = { ...shape, [prop]: newVal };
	}

	function adjustRadius(prop: 'rx' | 'ry', delta: number) {
		if (!shape || shape.type !== 'ellipse') return;
		const newVal = Math.max(1, shape[prop] + delta);
		shape = { ...shape, [prop]: newVal };
	}

	function adjustBow(delta: number) {
		if (!shape || shape.type !== 'arrow') return;
		shape = { ...shape, bow: parseFloat((shape.bow + delta).toFixed(2)) };
	}

	function toggleFlip() {
		if (!shape || shape.type !== 'arrow') return;
		shape = { ...shape, flip: !shape.flip };
	}

	function adjustCurve(delta: number) {
		if (!shape || shape.type !== 'arc') return;
		shape = { ...shape, curve: parseFloat((shape.curve + delta).toFixed(1)) };
	}

	// --- Mouse handlers ---

	function handleMouseDown(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		const coords = toCanvasCoords(e.clientX, e.clientY);
		if (!coords) return;

		mouseDownPos = { clientX: e.clientX, clientY: e.clientY };
		dragStart = coords;
		dragCurrent = coords;
		measuring = true;
		showPanel = false;
		detectedShapes = [];
		shapeIndex = 0;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		if (!measuring || !dragStart) return;
		const coords = toCanvasCoords(e.clientX, e.clientY);
		if (!coords) return;
		dragCurrent = coords;
	}

	function handleMouseUp(e: MouseEvent) {
		if (!enabled) return;
		e.preventDefault();
		e.stopPropagation();

		if (!measuring || !mouseDownPos || !dragStart || !dragCurrent) return;
		measuring = false;

		const dx = e.clientX - mouseDownPos.clientX;
		const dy = e.clientY - mouseDownPos.clientY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < CLICK_THRESHOLD) {
			// Click — detect shapes
			const shapes = detectShapesAtPoint(e.clientX, e.clientY);
			if (shapes.length > 0) {
				detectedShapes = shapes;
				if (e.shiftKey && detectedShapes.length > 1) {
					shapeIndex = (shapeIndex + 1) % shapes.length;
				} else {
					shapeIndex = 0;
				}
				const detected = shapes[shapeIndex];
				shape = buildShape(detected.type, detected.coords);
				originalCode = generateOutputCode(shape);
				activeEndpoint = 'both';
				showPanel = true;
			} else {
				showPanel = false;
				shape = null;
			}
		} else {
			// Drag — manual measurement, default to fragment
			shape = buildShapeFromDrag(dragStart, dragCurrent, 'fragment');
			detectedShapes = [];
			shapeIndex = 0;
			activeEndpoint = 'both';
			originalCode = '';
			showPanel = true;
		}

		mouseDownPos = null;
		dragStart = null;
		dragCurrent = null;
	}

	function closePanel() {
		showPanel = false;
		shape = null;
		detectedShapes = [];
		shapeIndex = 0;
		activeEndpoint = 'both';
	}

	// --- Canvas overlay helpers ---
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
		return () => window.removeEventListener('resize', updateCanvasInfo);
	});

	/** Convert a canvas coordinate to viewport pixel coordinate */
	function canvasToViewport(cx: number, cy: number): Point {
		if (!canvasRect) return { x: 0, y: 0 };
		const offsetX = canvasRect.left + (canvasRect.width - 960 * canvasScale) / 2;
		const offsetY = canvasRect.top + (canvasRect.height - 540 * canvasScale) / 2;
		return { x: offsetX + cx * canvasScale, y: offsetY + cy * canvasScale };
	}

	// Show SVG overlay during drag OR when panel is shown with a shape
	let showShapeOverlay = $derived(
		(measuring && dragStart && dragCurrent && canvasRect) ||
		(showPanel && shape && canvasRect)
	);

	// Drag rectangle for live preview during drag (before shape is created)
	let dragBox = $derived.by(() => {
		if (!measuring || !dragStart || !dragCurrent || !canvasRect) return null;
		const x = Math.min(dragStart.x, dragCurrent.x);
		const y = Math.min(dragStart.y, dragCurrent.y);
		const w = Math.abs(dragCurrent.x - dragStart.x);
		const h = Math.abs(dragCurrent.y - dragStart.y);
		const vp = canvasToViewport(x, y);
		return { x: vp.x, y: vp.y, width: w * canvasScale, height: h * canvasScale };
	});

	// Is the current shape from detection (vs manual drag)?
	let isDetected = $derived(detectedShapes.length > 0);

	// Get the endpoint color based on active endpoint
	function endpointColor(which: 'from' | 'to'): string {
		if (activeEndpoint === 'both') return '#00ff00';
		return activeEndpoint === which ? '#ffff00' : 'rgba(0, 255, 0, 0.3)';
	}
	function endpointRadius(which: 'from' | 'to'): number {
		if (activeEndpoint === 'both') return 4;
		return activeEndpoint === which ? 6 : 3;
	}
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

		<!-- SVG overlay for shape preview -->
		{#if showShapeOverlay}
			<svg class="measure-svg-overlay">
				<defs>
					<marker id="rotation-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
						<polygon points="0 0, 10 3.5, 0 7" fill="#ff00ff" />
					</marker>
				</defs>

				{#if measuring && dragBox}
					<!-- Live drag preview (dashed green rect) -->
					<rect
						x={dragBox.x}
						y={dragBox.y}
						width={dragBox.width}
						height={dragBox.height}
						stroke="#00ff00"
						stroke-width="2"
						fill="rgba(0, 255, 0, 0.1)"
						stroke-dasharray="5,5"
					/>
				{:else if shape}
					<!-- Shape-specific preview -->
					{#if shape.type === 'arrow'}
						{#if shape.fromBox && shape.toBox}
							{@const fb = shape.fromBox}
							{@const tb = shape.toBox}
							{@const vfb = canvasToViewport(fb.x, fb.y)}
							{@const vtb = canvasToViewport(tb.x, tb.y)}
							{@const sfbw = fb.width * canvasScale}
							{@const sfbh = fb.height * canvasScale}
							{@const stbw = tb.width * canvasScale}
							{@const stbh = tb.height * canvasScale}
							{@const arr = getBoxToBoxArrow(vfb.x, vfb.y, sfbw, sfbh, vtb.x, vtb.y, stbw, stbh, { bow: shape.bow, flip: shape.flip, stretch: 0.5, stretchMin: 40, stretchMax: 420, padStart: 0, padEnd: 8, straights: false })}
							<path d="M{arr[0]},{arr[1]} Q{arr[2]},{arr[3]} {arr[4]},{arr[5]}" stroke="#00ff00" stroke-width="3" fill="none" />
							<polygon points="0,-5 12,0 0,5" fill="#00ff00" transform="translate({arr[4]},{arr[5]}) rotate({arr[6] * 180 / Math.PI})" />
							<rect x={vfb.x} y={vfb.y} width={sfbw} height={sfbh} stroke={endpointColor('from')} stroke-width="1" fill="none" stroke-dasharray="4,4" opacity="0.5" />
							<rect x={vtb.x} y={vtb.y} width={stbw} height={stbh} stroke={endpointColor('to')} stroke-width="1" fill="none" stroke-dasharray="4,4" opacity="0.5" />
						{:else if shape.from && shape.to}
							{@const vf = canvasToViewport(shape.from.x, shape.from.y)}
							{@const vt = canvasToViewport(shape.to.x, shape.to.y)}
							{@const arr = getArrow(vf.x, vf.y, vt.x, vt.y, { bow: shape.bow, flip: shape.flip, stretch: shape.bow !== 0 ? 0.5 : 0, straights: shape.bow === 0, padEnd: 8 })}
							<path d="M{arr[0]},{arr[1]} Q{arr[2]},{arr[3]} {arr[4]},{arr[5]}" stroke="#00ff00" stroke-width="3" fill="none" />
							<polygon points="0,-5 12,0 0,5" fill="#00ff00" transform="translate({arr[4]},{arr[5]}) rotate({arr[6] * 180 / Math.PI})" />
							<circle cx={vf.x} cy={vf.y} r={endpointRadius('from')} fill={endpointColor('from')} opacity="0.9" />
							<circle cx={vt.x} cy={vt.y} r={endpointRadius('to')} fill={endpointColor('to')} opacity="0.9" />
						{/if}

					{:else if shape.type === 'arc'}
						{@const vf = canvasToViewport(shape.from.x, shape.from.y)}
						{@const vt = canvasToViewport(shape.to.x, shape.to.y)}
						{@const mx = (vf.x + vt.x) / 2}
						{@const my = (vf.y + vt.y) / 2}
						{@const adx = vt.x - vf.x}
						{@const ady = vt.y - vf.y}
						{@const alen = Math.sqrt(adx * adx + ady * ady)}
						{@const perpX = alen > 0 ? -ady / alen : 0}
						{@const perpY = alen > 0 ? adx / alen : 0}
						{@const scaledCurve = shape.curve * canvasScale}
						{@const cpx = mx + perpX * scaledCurve}
						{@const cpy = my + perpY * scaledCurve}
						<path d="M{vf.x},{vf.y} Q{cpx},{cpy} {vt.x},{vt.y}" stroke="#00ff00" stroke-width="3" fill="none" />
						{@const endAngle = Math.atan2(vt.y - cpy, vt.x - cpx) * 180 / Math.PI}
						<polygon points="0,-5 12,0 0,5" fill="#00ff00" transform="translate({vt.x},{vt.y}) rotate({endAngle})" />
						<circle cx={vf.x} cy={vf.y} r={endpointRadius('from')} fill={endpointColor('from')} opacity="0.9" />
						<circle cx={vt.x} cy={vt.y} r={endpointRadius('to')} fill={endpointColor('to')} opacity="0.9" />
						<circle cx={cpx} cy={cpy} r="3" fill="#00ffff" opacity="0.5" />
						<line x1={mx} y1={my} x2={cpx} y2={cpy} stroke="#00ffff" stroke-width="1" stroke-dasharray="3,3" opacity="0.4" />

					{:else if shape.type === 'line'}
						{@const vf = canvasToViewport(shape.from.x, shape.from.y)}
						{@const vt = canvasToViewport(shape.to.x, shape.to.y)}
						<line x1={vf.x} y1={vf.y} x2={vt.x} y2={vt.y} stroke="#00ff00" stroke-width="3" />
						<circle cx={vf.x} cy={vf.y} r={endpointRadius('from')} fill={endpointColor('from')} opacity="0.9" />
						<circle cx={vt.x} cy={vt.y} r={endpointRadius('to')} fill={endpointColor('to')} opacity="0.9" />

					{:else if shape.type === 'ellipse'}
						{@const vc = canvasToViewport(shape.cx, shape.cy)}
						{@const srx = shape.rx * canvasScale}
						{@const sry = shape.ry * canvasScale}
						<ellipse cx={vc.x} cy={vc.y} rx={srx} ry={sry} stroke="#00ff00" stroke-width="2" fill="rgba(0, 255, 0, 0.1)" />
						<circle cx={vc.x} cy={vc.y} r="3" fill="#00ff00" opacity="0.7" />

					{:else if shape.type === 'rect'}
						{@const vp = canvasToViewport(shape.x, shape.y)}
						{@const sw = shape.width * canvasScale}
						{@const sh = shape.height * canvasScale}
						{@const cx = vp.x + sw / 2}
						{@const cy = vp.y + sh / 2}
						<rect
							x={vp.x}
							y={vp.y}
							width={sw}
							height={sh}
							stroke="#00ff00"
							stroke-width="2"
							fill="rgba(0, 255, 0, 0.1)"
							transform="rotate({shape.rotation} {cx} {cy})"
						/>

					{:else if shape.type === 'fragment'}
						{@const vp = canvasToViewport(shape.x, shape.y)}
						{@const sw = shape.width * canvasScale}
						{@const sh = shape.height * canvasScale}
						{@const cx = vp.x + sw / 2}
						{@const cy = vp.y + sh / 2}
						<rect
							x={vp.x}
							y={vp.y}
							width={sw}
							height={sh}
							stroke="#00ff00"
							stroke-width="2"
							fill="rgba(0, 255, 0, 0.1)"
							stroke-dasharray="5,5"
							transform="rotate({shape.rotation} {cx} {cy})"
						/>
						{#if shape.rotation !== 0}
							{@const angleRad = (shape.rotation * Math.PI) / 180}
							{@const cos = Math.cos(angleRad)}
							{@const sin = Math.sin(angleRad)}
							{@const dx1 = vp.x - cx}
							{@const dy1 = vp.y - cy}
							{@const dx2 = vp.x + sw - cx}
							{@const dy2 = vp.y + sh - cy}
							{@const x1 = cx + dx1 * cos - dy1 * sin}
							{@const y1 = cy + dx1 * sin + dy1 * cos}
							{@const x2 = cx + dx2 * cos - dy2 * sin}
							{@const y2 = cy + dx2 * sin + dy2 * cos}
							<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff00ff" stroke-width="3" marker-end="url(#rotation-arrowhead)" />
						{/if}
					{/if}
				{/if}
			</svg>
		{/if}
	</div>

	<!-- Output panel -->
	{#if showPanel && shape}
		<div class="measure-panel corner-{panelCorner}">
			<!-- Header -->
			<div class="panel-header">
				<span class="panel-title">
					{#if isDetected}
						<span class="shape-type">{shapeLabel}</span>
						{#if detectedShapes.length > 1}
							<span class="shape-count">({shapeIndex + 1}/{detectedShapes.length})</span>
						{/if}
					{:else}
						<span class="shape-type">{shapeLabel}</span>
						<span class="shape-count">(drag)</span>
					{/if}
				</span>
				<div class="header-buttons">
					{#if detectedShapes.length > 1}
						<button class="cycle-btn" onclick={() => { shapeIndex = (shapeIndex + 1) % detectedShapes.length; const s = detectedShapes[shapeIndex]; shape = buildShape(s.type, s.coords); activeEndpoint = 'both'; originalCode = generateOutputCode(shape); }} aria-label="Cycle to next shape" title="Next shape (or Shift+click)">⇄</button>
					{/if}
					{#if !isDetected}
						<!-- Type switcher for drag-to-measure -->
						<div class="type-switcher">
							{#each ALL_SHAPE_TYPES as t}
								<button
									class="type-btn"
									class:active={shape.type === t}
									onclick={() => switchShapeType(t)}
									title={t}
								>
									{t.charAt(0).toUpperCase()}
								</button>
							{/each}
						</div>
					{/if}
					<button class="corner-btn" onclick={cycleCorner} aria-label="Move panel to next corner" title="Move to next corner">{cornerLabels[panelCorner]}</button>
					<button class="close-btn" onclick={closePanel} aria-label="Close panel">×</button>
				</div>
			</div>

			<!-- Nudge controls (all shapes) -->
			<div class="controls-row">
				<div class="nudge-controls">
					<button class="nudge-btn" onclick={() => nudge(-10, 0)} aria-label="Nudge left 10px">←10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(-1, 0)} aria-label="Nudge left 1px">←</button>
					<button class="nudge-btn" onclick={() => nudge(0, -10)} aria-label="Nudge up 10px">↑10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(0, -1)} aria-label="Nudge up 1px">↑</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(0, 1)} aria-label="Nudge down 1px">↓</button>
					<button class="nudge-btn" onclick={() => nudge(0, 10)} aria-label="Nudge down 10px">10↓</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => nudge(1, 0)} aria-label="Nudge right 1px">→</button>
					<button class="nudge-btn" onclick={() => nudge(10, 0)} aria-label="Nudge right 10px">10→</button>
				</div>
			</div>

			<!-- Endpoint toggle for line/arrow/arc -->
			{#if shape.type === 'line' || shape.type === 'arc' || (shape.type === 'arrow' && (shape.from || shape.fromBox))}
			<div class="controls-row">
				<div class="endpoint-toggle">
					<span class="curve-label">nudge</span>
					<button class="endpoint-btn" class:active={activeEndpoint === 'from'} onclick={() => activeEndpoint = activeEndpoint === 'from' ? 'both' : 'from'}>from</button>
					<button class="endpoint-btn" class:active={activeEndpoint === 'both'} onclick={() => activeEndpoint = 'both'}>both</button>
					<button class="endpoint-btn" class:active={activeEndpoint === 'to'} onclick={() => activeEndpoint = activeEndpoint === 'to' ? 'both' : 'to'}>to</button>
				</div>
			</div>
			{/if}

			<!-- Fragment/Rect: rotation + size controls -->
			{#if shape.type === 'fragment' || shape.type === 'rect'}
			<div class="controls-row">
				<div class="rotation-controls">
					<button class="rotate-btn" onclick={() => adjustRotation(-15)} aria-label="Rotate left 15°">↶ 15°</button>
					<button class="rotate-btn rotate-btn-fine" onclick={() => adjustRotation(-1)} aria-label="Rotate left 1°">↶ 1°</button>
					<span class="rotation-value">{shape.rotation}°</span>
					<button class="rotate-btn rotate-btn-fine" onclick={() => adjustRotation(1)} aria-label="Rotate right 1°">1° ↷</button>
					<button class="rotate-btn" onclick={() => adjustRotation(15)} aria-label="Rotate right 15°">15° ↷</button>
				</div>
			</div>
			<div class="controls-row">
				<div class="size-controls">
					<span class="curve-label">w</span>
					<button class="nudge-btn" onclick={() => adjustSize('width', -10)}>−10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustSize('width', -1)}>−1</button>
					<span class="curve-value">{fmt(shape.width)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustSize('width', 1)}>+1</button>
					<button class="nudge-btn" onclick={() => adjustSize('width', 10)}>+10</button>
				</div>
				<div class="size-controls">
					<span class="curve-label">h</span>
					<button class="nudge-btn" onclick={() => adjustSize('height', -10)}>−10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustSize('height', -1)}>−1</button>
					<span class="curve-value">{fmt(shape.height)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustSize('height', 1)}>+1</button>
					<button class="nudge-btn" onclick={() => adjustSize('height', 10)}>+10</button>
				</div>
			</div>
			{/if}

			<!-- Arrow: bow + flip -->
			{#if shape.type === 'arrow'}
			<div class="controls-row">
				<div class="curve-controls">
					<span class="curve-label">bow</span>
					<button class="nudge-btn" onclick={() => adjustBow(-0.1)}>−.1</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustBow(-0.05)}>−.05</button>
					<span class="curve-value">{fmt(shape.bow)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustBow(0.05)}>+.05</button>
					<button class="nudge-btn" onclick={() => adjustBow(0.1)}>+.1</button>
				</div>
				<button class="flip-btn" class:active={shape.flip} onclick={toggleFlip}>⇅ flip</button>
			</div>
			{/if}

			<!-- Arc: curve -->
			{#if shape.type === 'arc'}
			<div class="controls-row">
				<div class="curve-controls">
					<span class="curve-label">curve</span>
					<button class="nudge-btn" onclick={() => adjustCurve(-10)}>−10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustCurve(-5)}>−5</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustCurve(-1)}>−1</button>
					<span class="curve-value">{fmt(shape.curve)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustCurve(1)}>+1</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustCurve(5)}>+5</button>
					<button class="nudge-btn" onclick={() => adjustCurve(10)}>+10</button>
				</div>
			</div>
			{/if}

			<!-- Ellipse: rx/ry -->
			{#if shape.type === 'ellipse'}
			<div class="controls-row">
				<div class="size-controls">
					<span class="curve-label">rx</span>
					<button class="nudge-btn" onclick={() => adjustRadius('rx', -10)}>−10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustRadius('rx', -1)}>−1</button>
					<span class="curve-value">{fmt(shape.rx)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustRadius('rx', 1)}>+1</button>
					<button class="nudge-btn" onclick={() => adjustRadius('rx', 10)}>+10</button>
				</div>
				<div class="size-controls">
					<span class="curve-label">ry</span>
					<button class="nudge-btn" onclick={() => adjustRadius('ry', -10)}>−10</button>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustRadius('ry', -1)}>−1</button>
					<span class="curve-value">{fmt(shape.ry)}</span>
					<button class="nudge-btn nudge-btn-fine" onclick={() => adjustRadius('ry', 1)}>+1</button>
					<button class="nudge-btn" onclick={() => adjustRadius('ry', 10)}>+10</button>
				</div>
			</div>
			{/if}

			<!-- Output sections -->
			<div class="output-section">
				<div class="output-label">ORIGINAL</div>
				<code class="output-code">{originalCode || '—'}</code>
			</div>
			<div class="output-section">
				<div class="output-label">ADJUSTED</div>
				<code class="output-code">{originalCode && originalCode !== outputCode ? outputCode : '—'}</code>
			</div>

			<div class="panel-footer">
				{#if detectedShapes.length > 1}
					Shift+click to cycle shapes
				{:else if !isDetected}
					Use type buttons to switch shape type
				{:else}
					Click shape to select · Shift+click to cycle
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
		0%, 100% { opacity: 1; }
		50% { opacity: 0.4; }
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

	.type-switcher {
		display: flex;
		gap: 2px;
	}

	.type-btn {
		background: rgba(0, 255, 0, 0.1);
		border: 1px solid rgba(0, 255, 0, 0.3);
		color: #88ff88;
		font-family: monospace;
		font-size: 10px;
		cursor: pointer;
		padding: 2px 5px;
		border-radius: 2px;
		transition: all 0.15s;
		min-width: 18px;
		text-align: center;
	}

	.type-btn:hover {
		background: rgba(0, 255, 0, 0.2);
		border-color: #00ff00;
	}

	.type-btn.active {
		background: rgba(0, 255, 255, 0.3);
		border-color: #00ffff;
		color: #00ffff;
		font-weight: bold;
	}

	.controls-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 12px;
		border-bottom: 1px solid rgba(0, 255, 0, 0.3);
		background: rgba(0, 255, 0, 0.05);
		gap: 12px;
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

	.endpoint-toggle {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.endpoint-btn {
		background: rgba(0, 255, 0, 0.1);
		border: 1px solid rgba(0, 255, 0, 0.4);
		color: #88ff88;
		font-family: monospace;
		font-size: 10px;
		padding: 4px 10px;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.15s;
	}

	.endpoint-btn:hover {
		background: rgba(0, 255, 0, 0.2);
	}

	.endpoint-btn.active {
		background: rgba(255, 255, 0, 0.2);
		border-color: #ffff00;
		color: #ffff00;
		font-weight: bold;
	}

	.size-controls {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.curve-controls {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.curve-label {
		color: #00ffff;
		font-size: 11px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.curve-value {
		font-size: 12px;
		font-weight: bold;
		min-width: 40px;
		text-align: center;
		color: #00ffff;
	}

	.flip-btn {
		background: rgba(0, 255, 255, 0.1);
		border: 1px solid #00ffff;
		color: #00ffff;
		font-family: monospace;
		font-size: 11px;
		padding: 4px 10px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.flip-btn:hover {
		background: rgba(0, 255, 255, 0.25);
	}

	.flip-btn.active {
		background: rgba(0, 255, 255, 0.4);
		box-shadow: 0 0 6px rgba(0, 255, 255, 0.4);
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
		border-bottom: 1px solid rgba(0, 255, 0, 0.2);
	}

	.output-section:last-of-type {
		border-bottom: none;
	}

	.output-original {
		opacity: 0.7;
	}

	.output-original .output-label {
		color: #ff8888;
	}

	.output-original .output-code {
		border-color: rgba(255, 136, 136, 0.3);
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
		white-space: nowrap;
		overflow-x: auto;
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
