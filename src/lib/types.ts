// ============================================
// Layout Types (from PowerPoint extraction)
// ============================================

/**
 * Position and dimensions for absolute placement within a slide.
 * Coordinates are in pixels relative to the 960×540 slide canvas.
 */
export interface BoxLayout {
	x: number;
	y: number;
	width: number;
	height: number;
	rotation?: number;
}

/**
 * Font styling extracted from PowerPoint shapes.
 */
export interface BoxFont {
	font_name?: string;
	font_size?: number;
	bold?: boolean;
	italic?: boolean;
	color?: string;
	theme_color?: string;
	alignment?: 'left' | 'center' | 'right';
}

/**
 * Border/outline styling for positioned boxes.
 */
export interface BoxLine {
	color?: string;
	width?: number;
}

/**
 * Animation types for fragment entrance effects.
 * CSS keyframe animations triggered when fragment becomes visible.
 * 
 * Standard animations (work with any content):
 * - 'fade': Fade in from transparent
 * - 'fly-up', 'fly-down', 'fly-left', 'fly-right': Slide in from direction
 * - 'scale': Scale up from 90%
 * 
 * SVG-specific animations (for SVG shape children):
 * - 'wipe': Clip-path reveal from start to end
 * - 'wipe-up', 'wipe-down', 'wipe-left', 'wipe-right': Directional wipe
 * - 'draw': Stroke drawing effect using stroke-dashoffset
 */
export type AnimationType = 
	| 'fade' | 'fly-up' | 'fly-down' | 'fly-left' | 'fly-right' | 'scale'
	| 'wipe' | 'wipe-up' | 'wipe-down' | 'wipe-left' | 'wipe-right'
	| 'draw'
	| 'none';

/**
 * Keyframe for step-based motion animation.
 * Defines property values at a specific step for interpolation.
 */
export interface Keyframe {
	/** Step number when these values should be reached */
	step: number;
	/** X position change (relative to layout.x) */
	x?: number;
	/** Y position change (relative to layout.y) */
	y?: number;
	/** Width change */
	width?: number;
	/** Height change */
	height?: number;
	/** Rotation in degrees */
	rotation?: number;
	/** Opacity (0-1) */
	opacity?: number;
}

/**
 * Transition configuration for keyframe animations.
 */
export interface TransitionConfig {
	/** Duration in milliseconds (default: 300) */
	duration?: number;
	/** CSS easing function (default: 'ease-out') */
	easing?: string;
}

// ============================================
// Navigation Types
// ============================================

// Navigation state for a single position in the presentation
export interface NavigationState {
	presentation: string;
	slide: number;                  // 0-indexed slide within presentation
	fragment: number;               // current fragment within slide
	slideFragments?: number[];      // Per-slide fragment positions (saved when drilling)
}

// Full navigation context including the return stack
export interface NavigationContext {
	current: NavigationState;
	stack: NavigationState[];           // Stack of states to return to
	maxSlide: number;                   // Total slides in presentation (0-indexed max)
	maxFragment: number;                // Total fragments in CURRENT slide
	slideFragmentCounts: number[];      // Fragment count per slide
	slideFragments: number[];           // Current fragment position for each slide (preserved when jumping)
	isReturningFromDrill: boolean;      // Flag to prevent init() from resetting state
	drillTargets: Record<number, DrillTargetInfo>;  // Map of step -> drillTo info for current slide/drill
	returnHere: boolean;                // If true, this drill returns to its caller, not origin
}

// Drill target info registered by Fragment components
export interface DrillTargetInfo {
	target: string;         // The route to drill into
	returnHere: boolean;     // If true, the drilled content returns to this drill, not origin
}

// Slide definition for a presentation
export interface SlideDefinition {
	id: string;
	component: string;      // Svelte component name
	fragmentCount: number;
	title?: string;
}

// Presentation definition
export interface PresentationDefinition {
	id: string;
	title: string;
	slides: SlideDefinition[];
}

// Fragment props for the Fragment component
export interface FragmentProps {
	step: number;
	drillTo?: string;
}

// Drill target definition
export interface DrillDefinition {
	id: string;             // 'ecclesiastes-3-19'
	route: string;          // '/ecclesiastes-3-19' 
	title: string;          // 'Ecclesiastes 3:19-21'
	fragmentCount: number;  // Total fragments in drill
}
