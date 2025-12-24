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
 */
export type AnimationType = 'fade' | 'fly-up' | 'fly-down' | 'fly-left' | 'fly-right' | 'scale' | 'none';

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
	withPrev?: boolean;
	afterPrev?: boolean;
	drillTo?: string;
}

// Drill target definition
export interface DrillDefinition {
	id: string;             // 'ecclesiastes-3-19'
	route: string;          // '/ecclesiastes-3-19' 
	title: string;          // 'Ecclesiastes 3:19-21'
	fragmentCount: number;  // Total fragments in drill
}
