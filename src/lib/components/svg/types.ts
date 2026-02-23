/**
 * SVG Shape Types
 * 
 * Shared type definitions for svg.js-powered shape components.
 */

/** 2D point coordinate */
export interface Point {
	x: number;
	y: number;
}

export type StrokeLineCap = 'butt' | 'round' | 'square';
export type StrokeLineJoin = 'miter' | 'round' | 'bevel';

export type StrokeSegmentStyle = {
	/** Stroke width in pixels */
	width?: number;
	/** Stroke color */
	color?: string;
	/** Dash pattern, e.g., '5,5' for dashed, '10,5,2,5' for dash-dot */
	dash?: string;
	/** Line cap style */
	linecap?: StrokeLineCap;
	/** Line join style */
	linejoin?: StrokeLineJoin;
};

export type StrokeSide = 'top' | 'right' | 'bottom' | 'left';

export type StrokeSidesByName = Partial<Record<StrokeSide, StrokeSegmentStyle>>;
export type StrokeSidesByPosition = [StrokeSegmentStyle?, StrokeSegmentStyle?, StrokeSegmentStyle?, StrokeSegmentStyle?];
export type RectStrokeSides = StrokeSidesByName | StrokeSidesByPosition;

/**
 * Stroke styling for lines and shape outlines
 * @property width - Stroke width in pixels (default: 2)
 * @property color - Stroke color (default: '#000000')
 * @property dash - Dash pattern, e.g., '5,5' for dashed, '10,5,2,5' for dash-dot
 * @property linecap - Line cap style: 'butt' | 'round' | 'square'
 * @property linejoin - Line join style: 'miter' | 'round' | 'bevel'
 */
export type StrokeStyle = StrokeSegmentStyle;

/** Rect-only stroke style supporting optional per-side overrides */
export type RectStrokeStyle = StrokeStyle & {
	/** Side-specific stroke values as object (`top/right/bottom/left`) or array ([top, right, bottom, left]) */
	sides?: RectStrokeSides;
	/** Direct named side overrides */
	top?: StrokeSegmentStyle;
	right?: StrokeSegmentStyle;
	bottom?: StrokeSegmentStyle;
	left?: StrokeSegmentStyle;
};

/** Circle marker at line endpoints */
export type CircleMarker = {
	/** Radius of the circle in pixels */
	radius: number;
	/** Fill color (default: same as stroke color) */
	fill?: string;
};

/** Wipe animation direction */
export type WipeDirection = 'left' | 'right' | 'up' | 'down' | 'auto';

/** Common props shared by all SVG shape components */
export interface BaseSvgProps<TStroke = StrokeStyle> {
	/** Stroke styling */
	stroke?: TStroke;
	/** Fill color (default: none for lines, 'var(--bg-level0)' for shapes) */
	fill?: string;
	/** Z-index for stacking order */
	zIndex?: number;
}

const STROKE_SIDES: StrokeSide[] = ['top', 'right', 'bottom', 'left'];
const STROKE_SIDE_INDEX: Record<StrokeSide, 0 | 1 | 2 | 3> = {
	top: 0,
	right: 1,
	bottom: 2,
	left: 3
};

function hasOwnStrokeFields(stroke?: StrokeSegmentStyle): boolean {
	if (!stroke) return false;
	return stroke.width !== undefined
		|| stroke.color !== undefined
		|| stroke.dash !== undefined
		|| stroke.linecap !== undefined
		|| stroke.linejoin !== undefined;
}

function mergeStroke(base: StrokeSegmentStyle, override?: StrokeSegmentStyle): StrokeSegmentStyle {
	if (!override) return base;
	return {
		width: override.width ?? base.width,
		color: override.color ?? base.color,
		dash: override.dash ?? base.dash,
		linecap: override.linecap ?? base.linecap,
		linejoin: override.linejoin ?? base.linejoin
	};
}

function getSidesOverride(sides: RectStrokeSides | undefined, side: StrokeSide): StrokeSegmentStyle | undefined {
	if (!sides) return undefined;
	if (Array.isArray(sides)) {
		return sides[STROKE_SIDE_INDEX[side]];
	}
	return sides[side];
}

export function resolveRectStrokeSide(stroke: RectStrokeStyle | undefined, side: StrokeSide): StrokeSegmentStyle | undefined {
	if (!stroke) return undefined;

	const base: StrokeSegmentStyle = {
		width: stroke.width,
		color: stroke.color,
		dash: stroke.dash,
		linecap: stroke.linecap,
		linejoin: stroke.linejoin
	};

	const fromSides = getSidesOverride(stroke.sides, side);
	const fromNamed = stroke[side];

	const merged = mergeStroke(mergeStroke(base, fromSides), fromNamed);
	return hasOwnStrokeFields(merged) ? merged : undefined;
}

export function hasRectSideStroke(stroke: RectStrokeStyle | undefined): boolean {
	if (!stroke) return false;
	for (const side of STROKE_SIDES) {
		if (stroke[side] || getSidesOverride(stroke.sides, side)) {
			return true;
		}
	}
	return false;
}
