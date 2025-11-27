// Navigation state for a single position in the presentation
export interface NavigationState {
	presentation: string;
	slide: number;
	fragment: number;
}

// Full navigation context including the return stack
export interface NavigationContext {
	current: NavigationState;
	stack: NavigationState[]; // Stack of states to return to
	maxFragment: number; // Total fragments in current slide
}

// Slide definition
export interface SlideDefinition {
	id: string;
	component: string; // Svelte component name
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
	transition?: 'fade' | 'fly' | 'scale' | 'slide';
	duration?: number;
	drillTo?: string; // Format: "presentation/slide" or just "presentation"
}
