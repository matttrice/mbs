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
		path: ArrowPathPoints;
		line?: ArrowLineStyle;
		/** Show arrowhead at end point */
		arrowhead?: boolean;
		/** Animation duration in seconds */
		duration?: number;
		/** Whether the arrow is currently visible (triggers animation) */
		visible?: boolean;
		zIndex?: number;
	}
</script>

<script lang="ts">
	/**
	 * ArrowPath: Renders an animated SVG arrow/connector line.
	 * 
	 * Uses stroke-dashoffset animation to draw the line from start to end
	 * when the `visible` prop becomes true. Designed to work with Fragment
	 * visibility for synchronized animations.
	 * 
	 * @example
	 * ```svelte
	 * <ArrowPath 
	 *   path={{ start: { x: 100, y: 50 }, end: { x: 300, y: 150 } }}
	 *   line={{ color: "#0000CC", width: 2 }}
	 *   arrowhead={true}
	 *   visible={step <= currentFragment}
	 * />
	 * ```
	 */
	interface Props {
		path: ArrowPathPoints;
		line?: ArrowLineStyle;
		arrowhead?: boolean;
		duration?: number;
		visible?: boolean;
		zIndex?: number;
	}

	let { 
		path, 
		line, 
		arrowhead = true, 
		duration = 0.5, 
		visible = false,
		zIndex = 0 
	}: Props = $props();

	// Calculate path length for stroke-dasharray animation
	const pathLength = $derived(
		Math.sqrt(
			Math.pow(path.end.x - path.start.x, 2) + 
			Math.pow(path.end.y - path.start.y, 2)
		)
	);

	// Generate SVG path d attribute
	const pathD = $derived(
		`M ${path.start.x} ${path.start.y} L ${path.end.x} ${path.end.y}`
	);

	// Calculate arrowhead rotation angle
	const arrowAngle = $derived(
		Math.atan2(
			path.end.y - path.start.y,
			path.end.x - path.start.x
		) * (180 / Math.PI)
	);

	// Styling
	const strokeColor = $derived(line?.color ?? '#333333');
	const strokeWidth = $derived(line?.width ?? 2);
</script>

<svg 
	class="arrow-path-svg"
	class:visible
	style:z-index={zIndex}
	style:--duration="{duration}s"
	style:--path-length={pathLength}
>
	<!-- Define arrowhead marker -->
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

	<!-- The animated line -->
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

<style>
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
