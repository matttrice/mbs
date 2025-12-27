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

/**
 * Stroke styling for lines and shape outlines
 * @property width - Stroke width in pixels (default: 2)
 * @property color - Stroke color (default: '#000000')
 * @property dash - Dash pattern, e.g., '5,5' for dashed, '10,5,2,5' for dash-dot
 * @property linecap - Line cap style: 'butt' | 'round' | 'square'
 * @property linejoin - Line join style: 'miter' | 'round' | 'bevel'
 */
export type StrokeStyle = {
	/** Stroke width in pixels (default: 2) */
	width?: number;
	/** Stroke color (default: '#000000') */
	color?: string;
	/** Dash pattern, e.g., '5,5' for dashed, '10,5,2,5' for dash-dot */
	dash?: string;
	/** Line cap style */
	linecap?: 'butt' | 'round' | 'square';
	/** Line join style */
	linejoin?: 'miter' | 'round' | 'bevel';
}

/** Wipe animation direction */
export type WipeDirection = 'left' | 'right' | 'up' | 'down' | 'auto';

/** Common props shared by all SVG shape components */
export interface BaseSvgProps {
	/** Stroke styling */
	stroke?: StrokeStyle;
	/** Fill color (default: none for lines, '#000000' for shapes) */
	fill?: string;
}
