<script lang="ts" module>
	/**
	 * Path endpoints from PowerPoint extraction
	 */
	export interface ArrowPathPoints {
		start: { x: number; y: number };
		end: { x: number; y: number };
	}

	/**
	 * Line styling from PowerPoint extraction
	 */
	export interface ArrowLineStyle {
		color?: string;
		width?: number;
		theme_color?: string;
	}

	export interface ArrowPathProps {
		path?: ArrowPathPoints;
		line?: ArrowLineStyle;
		/** Show arrowhead at end point */
		arrowhead?: boolean;
		/** Animation duration in seconds */
		duration?: number;
		/** Whether the arrow is currently visible (triggers animation) */
		visible?: boolean;
		zIndex?: number;
		/** Direction for solid arrow shapes */
		direction?: 'up' | 'down' | 'left' | 'right';
		/** X position for solid arrows */
		x?: number;
		/** Y position for solid arrows */
		y?: number;
		/** Width for solid arrows */
		width?: number;
		/** Height for solid arrows */
		height?: number;
	}
</script>

<script lang="ts">
	/**
	 * ArrowPath: Renders SVG arrows/connector lines.
	 * 
	 * Two modes:
	 * 1. Path mode: Provide `path` for animated line from start to end
	 * 2. Solid mode: Provide `direction`, `x`, `y`, `width`, `height` for positioned solid arrow
	 * 
	 * @example Path mode:
	 * ```svelte
	 * <ArrowPath 
	 *   path={{ start: { x: 100, y: 50 }, end: { x: 300, y: 150 } }}
	 *   line={{ color: "#0000CC", width: 2 }}
	 *   arrowhead={true}
	 *   visible={step <= currentFragment}
	 * />
	 * ```
	 * 
	 * @example Solid mode:
	 * ```svelte
	 * <ArrowPath 
	 *   direction="down"
	 *   x={240}
	 *   y={244}
	 *   width={50}
	 *   height={48}
	 * />
	 * ```
	 */
	interface Props {
		path?: ArrowPathPoints;
		line?: ArrowLineStyle;
		arrowhead?: boolean;
		duration?: number;
		visible?: boolean;
		zIndex?: number;
		direction?: 'up' | 'down' | 'left' | 'right';
		x?: number;
		y?: number;
		width?: number;
		height?: number;
	}

	let { 
		path, 
		line, 
		arrowhead = true, 
		duration = 0.5, 
		visible = false,
		zIndex = 0,
		direction,
		x = 0,
		y = 0,
		width = 50,
		height = 50
	}: Props = $props();

	// Determine mode: solid arrow if direction is provided, path mode if path is provided
	const isSolidMode = $derived(direction !== undefined);

	// Path mode calculations
	const pathLength = $derived(
		path ? Math.sqrt(
			Math.pow(path.end.x - path.start.x, 2) + 
			Math.pow(path.end.y - path.start.y, 2)
		) : 0
	);

	const pathD = $derived(
		path ? `M ${path.start.x} ${path.start.y} L ${path.end.x} ${path.end.y}` : ''
	);

	// Styling
	const strokeColor = $derived(line?.color ?? '#333333');
	const strokeWidth = $derived(line?.width ?? 2);

	// Solid arrow SVG paths for different directions
	const solidArrowPaths = {
		down: 'M 50 100 L 0 0 L 35 0 L 35 -100 L 65 -100 L 65 0 L 100 0 Z',
		up: 'M 50 0 L 0 100 L 35 100 L 35 200 L 65 200 L 65 100 L 100 100 Z',
		left: 'M 0 50 L 100 0 L 100 35 L 200 35 L 200 65 L 100 65 L 100 100 Z',
		right: 'M 100 50 L 0 0 L 0 35 L -100 35 L -100 65 L 0 65 L 0 100 Z'
	};
</script>

{#if isSolidMode}
	<!-- Solid arrow shape mode -->
	{@const arrowHeadSize = direction === 'left' || direction === 'right' ? height * 1.5 : width * 1.5}
	{@const viewW = direction === 'left' || direction === 'right' ? width : 100}
	{@const viewH = direction === 'left' || direction === 'right' ? height : 100}
	<svg
		class="solid-arrow"
		style:left="{x}px"
		style:top="{y}px"
		style:width="{width}px"
		style:height="{height}px"
		style:z-index={zIndex}
		viewBox="0 0 {viewW} {viewH}"
		preserveAspectRatio="none"
	>
		{#if direction === 'down'}
			<polygon points="50,100 0,30 30,30 30,0 70,0 70,30 100,30" fill="#000000" />
		{:else if direction === 'up'}
			<polygon points="50,0 0,70 30,70 30,100 70,100 70,70 100,70" fill="#000000" />
		{:else if direction === 'left'}
			{@const ah = arrowHeadSize}
			<polygon points="0,{viewH/2} {ah},0 {ah},{viewH*0.3} {viewW},{viewH*0.3} {viewW},{viewH*0.7} {ah},{viewH*0.7} {ah},{viewH}" fill="#000000" />
		{:else if direction === 'right'}
			{@const ah = arrowHeadSize}
			<polygon points="{viewW},{viewH/2} {viewW-ah},{viewH} {viewW-ah},{viewH*0.7} 0,{viewH*0.7} 0,{viewH*0.3} {viewW-ah},{viewH*0.3} {viewW-ah},0" fill="#000000" />
		{/if}
	</svg>
{:else if path}
	<!-- Path mode (animated line) -->
	<svg 
		class="arrow-path-svg"
		class:visible
		style:z-index={zIndex}
		style:--duration="{duration}s"
		style:--path-length={pathLength}
	>
		{#if arrowhead}
			<defs>
				<marker
					id="arrowhead-{path.start.x}-{path.start.y}"
					markerWidth="10"
					markerHeight="7"
					refX="9"
					refY="3.5"
					orient="auto"
					markerUnits="strokeWidth"
				>
					<polygon 
						points="0 0, 10 3.5, 0 7" 
						fill={strokeColor}
					/>
				</marker>
			</defs>
		{/if}

		<path
			d={pathD}
			stroke={strokeColor}
			stroke-width={strokeWidth}
			fill="none"
			stroke-linecap="round"
			stroke-dasharray={pathLength}
			stroke-dashoffset={pathLength}
			marker-end={arrowhead ? `url(#arrowhead-${path.start.x}-${path.start.y})` : undefined}
		/>
	</svg>
{/if}

<style>
	.solid-arrow {
		position: absolute;
		pointer-events: none;
	}

	.arrow-path-svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		overflow: visible;
	}

	.arrow-path-svg path {
		transition: stroke-dashoffset var(--duration) ease-out;
	}

	.arrow-path-svg.visible path {
		stroke-dashoffset: 0;
	}
</style>
