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
	drillTargets: Record<number, string>;  // Map of step -> drillTo target for current slide/drill
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
