/**
 * SVG Shape Components
 * 
 * svg.js-powered shape components for use inside Fragment.
 * Each component renders an SVG element that integrates with Fragment's
 * step-based visibility and animation system.
 * 
 * @example
 * ```svelte
 * <script>
 *   import Fragment from '$lib/components/Fragment.svelte';
 *   import { Arrow, Line, Rect, Circle, Path, Polygon, Ellipse } from '$lib/components/svg';
 * </script>
 * 
 * <Fragment step={5} layout={{ x: 100, y: 100, width: 200, height: 50 }} animate="wipe">
 *   <Arrow from={{ x: 0, y: 25 }} to={{ x: 180, y: 25 }} stroke={{ width: 5, color: '#0000FF' }} />
 * </Fragment>
 * ```
 */

export { default as Arrow } from './Arrow.svelte';
export { default as Line } from './Line.svelte';
export { default as Rect } from './Rect.svelte';
export { default as Circle } from './Circle.svelte';
export { default as Ellipse } from './Ellipse.svelte';
export { default as Path } from './Path.svelte';
export { default as Polygon } from './Polygon.svelte';

// Re-export types
export type { Point, StrokeStyle, WipeDirection, BaseSvgProps } from './types';
