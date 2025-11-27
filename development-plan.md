# MBS Development Plan: PowerPoint to Web-Based Teaching Tool

## Executive Summary

Convert 17+ PowerPoint presentations into a modern, maintainable web-based solution that preserves the "Custom Show" functionality—allowing nested, interruptible sequences that return to the exact fragment/animation state they left from.

---

## 1. Problem Analysis

### Core Challenge: Custom Shows with State Restoration
PowerPoint's "Custom Shows" allow:
1. Clicking a shape/text to jump to a subset of slides (the "custom show")
2. Completing that custom show and **returning to the exact animation step** that was interrupted
3. Nesting these jumps arbitrarily deep

### Why Existing Solutions Fall Short

| Solution | Issue |
|----------|-------|
| **Reveal.js** | Fragments exist but no built-in "drill & return" capability; vertical/horizontal navigation is awkward |
| **Slidev** | `v-click` works well for sequencing, but no native Custom Show support; Vue-based customization is possible but complex |
| **Svelte POC (`hsu-svelte`)** | Proved the drill/return concept using a stack-based approach with `@xyflow/svelte`, but required heavy customization and doesn't scale easily to 17+ presentations |
| **Prezi/SVG** | Too complex for linear teaching presentations with a live presenter |

### What the Svelte POC Got Right
The `hsu-svelte` POC implemented:
- A `drillStack` to save animation state before jumping
- A `step` store to track current animation position
- `drillDown()` to push state and navigate
- `returnToMain()` to pop state and resume

This pattern is **the correct architecture**—the question is how to implement it in a maintainable, scalable way.

---

## 2. Recommended Architecture

### Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | **SvelteKit + TypeScript** | Minimal runtime (~2KB), built-in transitions, existing POC foundation |
| **Presentation Engine** | **Custom Svelte components** | Full control over navigation stack and fragment sequencing |
| **Animation** | **Svelte transitions (built-in)** | Zero-dependency `fade`, `fly`, `draw` transitions |
| **Diagram Rendering** | **SVG + Svelte transitions** | Precise positioning, scalable, matches PowerPoint coordinates |
| **State Management** | **Svelte stores** | Already proven in `hsu-svelte` POC with `drillStack` pattern |
| **Build Tool** | **Vite (via SvelteKit)** | Fast, modern, excellent Svelte support |
| **Extraction Tool** | **Python + python-pptx** | Extend existing `hsu-extractor` for animation sequence extraction |

### Why Svelte over React for This Project

1. **Smaller Bundle**: ~2KB vs React's ~45KB—matters for projector/tablet performance
2. **Built-in Transitions**: No external animation library needed (Motion adds ~15KB)
3. **Existing POC**: `hsu-svelte` already has working drill/return logic
4. **Simpler Reactivity**: `$step` instead of `useState` + `useEffect` boilerplate
5. **No Virtual DOM**: Direct DOM updates = smoother 60fps animations
6. **TypeScript Support**: First-class support in SvelteKit

### Why NOT React Flow / xyflow

After reviewing actual PowerPoint diagrams, they are **layered infographics**, not interactive node graphs:
- Shapes are positioned precisely, not connected nodes
- No drag-and-drop or edge editing needed
- Arrows are decorative, not functional connectors

**SVG + CSS positioning** is the right tool—simpler, lighter, and matches PowerPoint's coordinate system.

---

## 3. Core Architecture: The Navigation Stack Pattern

```
┌─────────────────────────────────────────────────────────┐
│                    NavigationContext                     │
├─────────────────────────────────────────────────────────┤
│  currentPresentation: "physical-spiritual"               │
│  currentSlide: 2                                         │
│  currentFragment: 14                                     │
│  navigationStack: [                                      │
│    { pres: "intro", slide: 5, fragment: 3 },            │
│    { pres: "physical-spiritual", slide: 1, fragment: 8 } │
│  ]                                                       │
└─────────────────────────────────────────────────────────┘
           │                              ▲
           │ drillInto(customShow)        │ returnFromDrill()
           ▼                              │
    Push current state to stack    Pop stack, restore state
```

### Navigation State Interface

```typescript
interface NavigationState {
  presentation: string;
  slide: number;
  fragment: number;
}

interface PresentationContext {
  current: NavigationState;
  stack: NavigationState[];
  
  // Actions
  next: () => void;
  prev: () => void;
  goToSlide: (slide: number, fragment?: number) => void;
  drillInto: (customShow: string, startSlide?: number) => void;
  returnFromDrill: () => void;
  canReturn: boolean;
}
```

---

## 4. Content Definition Format

### Slide Definition Schema

Create a declarative JSON/TypeScript format for defining presentations:

```typescript
// presentations/physical-spiritual.ts
export const physicalSpiritual: Presentation = {
  id: "physical-spiritual",
  title: "Physical & Spiritual",
  slides: [
    {
      id: "genesis-intro",
      layout: "two-column",
      fragments: [
        { id: 1, type: "text", content: "Genesis 1:1", position: "left" },
        { 
          id: 2, 
          type: "text", 
          content: '"In the beginning God created the HEAVENS and the EARTH..."',
          position: "left",
          style: { fontSize: "sm" }
        },
        {
          id: 3,
          type: "box",
          content: "Internal Interpretation",
          position: "left",
          icon: "archive-research",
          // This fragment is clickable and drills into another show
          drillTo: "scrolls/colossians-1-15-16"
        },
        { id: 4, type: "header", content: "Heavens", column: "spiritual" },
        { id: 4, type: "header", content: "Earth", column: "physical" },
        { id: 6, type: "item", content: "Invisible", column: "spiritual" },
        { id: 6, type: "item", content: "Visible", column: "physical" },
        // ... more fragments
      ]
    }
  ],
  customShows: {
    "causes-effects": { slides: ["causes-effects-1", "causes-effects-2"] },
  }
};
```

### Advantages of This Format

1. **Declarative**: Easy to read, write, and modify
2. **Type-Safe**: Full TypeScript support with autocomplete
3. **Automatable**: Can be generated from PowerPoint extraction
4. **Composable**: Presentations can reference each other
5. **Testable**: Can validate structure programmatically

---

## 5. Component Architecture

```
src/
├── lib/
│   ├── components/
│   │   ├── core/
│   │   │   ├── Slide.svelte            # Renders current slide
│   │   │   ├── Fragment.svelte         # Handles show/hide based on step
│   │   │   └── DrillLink.svelte        # Clickable element that drills
│   │   ├── layouts/
│   │   │   ├── TwoColumnLayout.svelte  # Physical/Spiritual column layout
│   │   │   ├── ThreeColumnLayout.svelte # Plants/Animals/Man layout
│   │   │   ├── FullSlideLayout.svelte
│   │   │   └── ScriptureLayout.svelte
│   │   ├── shapes/
│   │   │   ├── Box.svelte              # Colored rectangle with text
│   │   │   ├── Arrow.svelte            # Curved or straight arrows
│   │   │   ├── Circle.svelte           # For heart, cycle diagrams
│   │   │   ├── Equation.svelte         # E=mc², subscripts, etc.
│   │   │   └── Label.svelte            # Positioned text labels
│   │   └── controls/
│   │       ├── NavigationControls.svelte
│   │       ├── ProgressIndicator.svelte
│   │       └── ReturnButton.svelte     # "Return to main diagram"
│   ├── stores/
│   │   ├── navigation.ts               # step, drillStack, current slide
│   │   └── presentations.ts            # Registry of all presentations
│   └── types.ts                        # Shared TypeScript types
├── routes/
│   ├── +layout.svelte                  # Global keyboard handling
│   ├── +page.svelte                    # Presentation index
│   └── [presentation]/
│       ├── +page.svelte                # Main presentation view
│       └── [customShow]/
│           └── +page.svelte            # Custom show (drill target)
└── presentations/
    ├── index.ts                        # Registry of all presentations
    ├── life/
    │   ├── slides.ts                   # Slide definitions
    │   └── Life.svelte                 # SVG diagram component
    ├── physical-spiritual/
    │   ├── slides.ts
    │   └── PhysicalSpiritual.svelte
    └── ...
```

### SVG Diagram Pattern

Each complex diagram gets its own Svelte component with embedded SVG:

```svelte
<!-- presentations/life/Life.svelte -->
<script lang="ts">
  import { step } from '$lib/stores/navigation';
  import { fade, fly, draw } from 'svelte/transition';
  import DrillLink from '$lib/components/core/DrillLink.svelte';
</script>

<svg viewBox="0 0 1200 800" class="w-full h-full">
  <!-- Body = Visible header -->
  {#if $step >= 1}
    <g transition:fade={{ duration: 300 }}>
      <rect x="0" y="80" width="1200" height="60" fill="black"/>
      <text x="600" y="120" fill="white" text-anchor="middle" 
            font-size="36" font-weight="bold">Body = Visible</text>
    </g>
  {/if}
  
  <!-- Plants column -->
  {#if $step >= 2}
    <g transition:fly={{ y: 30, duration: 400 }}>
      <rect x="50" y="150" width="320" height="220" fill="#808080"/>
      <text x="210" y="200" text-anchor="middle" font-size="48">Plants</text>
      <text x="210" y="260" text-anchor="middle" font-size="36">Body</text>
    </g>
  {/if}
  
  <!-- Spirit box with drill link -->
  {#if $step >= 10}
    <DrillLink target="ecclesiastes-3-19-21" let:drill>
      <g transition:fade on:click={drill} class="cursor-pointer">
        <rect x="380" y="400" width="280" height="90" fill="#0066ff"/>
        <text x="520" y="445" fill="white" text-anchor="middle" font-size="42">Spirit</text>
        <text x="520" y="475" fill="white" text-anchor="middle" font-size="18">
          Ecclesiastes 3:19-21
        </text>
      </g>
    </DrillLink>
  {/if}
  
  <!-- CO2/O2 cycle with draw transition -->
  {#if $step >= 5}
    <path transition:draw={{ duration: 800 }}
          d="M 90 240 C 40 300, 40 380, 90 440" 
          stroke="#0066ff" fill="none" stroke-width="4"/>
    <text x="35" y="340" fill="#0066ff" font-size="24">CO₂</text>
  {/if}
</svg>

<style>
  svg { background: #d0d0d0; }
  text { font-family: Arial, sans-serif; }
</style>
```

---

## 6. PowerPoint Extraction Strategy

### Phase 1: Enhanced Extractor

Extend the existing `hsu-extractor/extractor.py` to:

1. **Extract Animation Sequences**: Parse `slide.timeline` for build order
2. **Extract Hyperlinks**: Map click actions to custom shows
3. **Extract Shapes**: Position, size, color, text content
4. **Output JSON**: Generate structured data matching our schema

```python
# Enhanced extraction output
{
  "slides": [
    {
      "id": "slide-1",
      "shapes": [
        {
          "id": "shape-1",
          "type": "textbox",
          "text": "Genesis 1:1",
          "position": { "x": 100, "y": 50 },
          "size": { "width": 200, "height": 40 },
          "animation": { "sequence": 2, "effect": "appear" },
          "hyperlink": { "type": "customShow", "target": "scrolls" }
        }
      ]
    }
  ],
  "customShows": {
    "scrolls": { "slideIds": ["scrolls-1", "scrolls-2"] }
  }
}
```

### Phase 2: JSON to TypeScript Converter

A script to convert extracted JSON to TypeScript presentation definitions:

```bash
python extract_pptx.py 02-Physical_Spiritual.pptx > physical-spiritual.json
npx ts-node convert-to-presentation.ts physical-spiritual.json > presentations/physical-spiritual.ts
```

### Known Limitation

**python-pptx does not fully support animation extraction**. The library can read shapes and some timing information, but full animation sequences (entrance effects, build order) may require:
- Direct XML parsing of the PPTX (it's a ZIP with XML files)
- Manual review and adjustment of extracted data

This is an acceptable trade-off since the number of presentations (17) is finite and the extraction is a one-time effort.

---

## 7. Implementation Phases

### Phase 1: Core Navigation Engine (Week 1-2)
- [ ] Extend existing `hsu-svelte` SvelteKit project (or fresh start if preferred)
- [ ] Refactor `NavigationContext` with proper TypeScript types
- [ ] Create reusable `Fragment.svelte` component with configurable transitions
- [ ] Create `DrillLink.svelte` component for custom show navigation
- [ ] Keyboard navigation (Space, Arrow keys, Escape to return)
- [ ] URL-based state persistence for bookmarking

### Phase 2: SVG Diagram System (Week 2-3)
- [ ] Create base SVG shape components (Box, Arrow, Circle, Label)
- [ ] Implement `draw` transition for arrows/paths
- [ ] Build the "Life" diagram as first complete example
- [ ] Build the "Physical/Spiritual" two-column layout
- [ ] Test drill-and-return between diagrams

### Phase 3: Enhanced Extractor (Week 3-4)
- [ ] Extend `extractor.py` for animation sequences
- [ ] Extract hyperlinks and custom show targets
- [ ] Generate JSON output
- [ ] Build JSON → TypeScript converter
- [ ] Extract and convert 2-3 sample presentations

### Phase 4: Full Content Migration (Week 4-6)
- [ ] Extract all 17 presentations
- [ ] Review and adjust auto-generated content
- [ ] Add any missing animations/styling
- [ ] Cross-link custom shows between presentations

### Phase 5: Polish & Features (Week 6-8)
- [ ] Presenter mode (notes, preview)
- [ ] Progress indicators
- [ ] Touch/swipe support for tablets
- [ ] Print-friendly view
- [ ] Deployment (Vercel/Netlify)

---

## 8. Key Design Decisions

### Decision 1: Reveal.js vs. Custom Implementation

**Recommendation: Custom implementation using React + Motion**

Reasoning:
- Reveal.js would require a custom plugin for the navigation stack
- React/Motion gives us full control and is more maintainable
- The presentation requirements are specific enough that a general framework adds complexity

### Decision 2: Animation Library

**Recommendation: Motion (formerly Framer Motion)**

- Industry standard for React animations
- Built-in `AnimatePresence` for enter/exit animations
- Timeline and stagger support for fragment sequences
- Spring physics for natural-feeling reveals

### Decision 3: Diagram Rendering

**Recommendation: SVG + Svelte transitions**

After reviewing actual PowerPoint content (e.g., the "Life" diagram):
- Diagrams are **layered infographics**, not interactive node graphs
- Shapes need **precise positioning** to match PowerPoint layout
- Arrows are **decorative**, not functional connectors
- No drag-and-drop or edge editing needed

**SVG advantages:**
- Coordinates map directly to PowerPoint's positioning
- Scalable on any projector resolution
- Svelte's `draw` transition animates path strokes beautifully
- Zero library dependencies

**React Flow / xyflow removed from plan** — it solves a different problem (interactive node editors).

### Decision 4: State Persistence

**Recommendation: URL-based state**

```
/presentations/physical-spiritual?slide=2&fragment=14&stack=intro:5:3,ps:1:8
```

Benefits:
- Bookmarkable specific states
- Browser back/forward works naturally
- Can share exact positions
- Presenter can open specific starting points

---

## 9. Migration from Existing POCs

### From `hsu-svelte` (Primary Foundation)
- **Keep**: The `drillStack` and `step` store pattern—it works
- **Keep**: SvelteKit routing structure
- **Remove**: `@xyflow/svelte` dependency (replace with SVG)
- **Enhance**: Add TypeScript types for navigation state
- **Enhance**: Add URL-based state persistence

### From `hsu-slidev`
- **Port**: The `v-click` numbering concept → `step` store
- **Port**: UnoCSS/Tailwind styling classes
- **Learn from**: Layout template patterns (slots) → Svelte slots

### From `hsu-extractor`
- **Extend**: Add animation sequence extraction
- **Extend**: Output JSON with shape positions for SVG generation
- **Add**: SVG coordinate mapping from PowerPoint EMUs

---

## 10. Success Criteria

1. **Functional Parity**: All 17 presentations work with Custom Show drill/return
2. **Maintainability**: Adding a new slide takes < 10 minutes
3. **Performance**: 60fps animations, < 2s initial load
4. **Accessibility**: Keyboard navigable, screen reader friendly
5. **Responsive**: Works on projector, laptop, tablet

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Animation extraction incomplete | High | Medium | Manual review step, accept 80% automation |
| Complex diagrams don't translate | Medium | Medium | Use SVG with careful coordinate mapping |
| Performance with many fragments | Low | Medium | Virtualize off-screen fragments |
| Time overrun | Medium | Medium | Phase 1-2 is MVP; later phases can be iterative |

---

## 12. Next Steps

1. **Approve this plan** or discuss modifications
2. **Decide**: Extend existing `hsu-svelte` or start fresh in new folder
3. **Build the navigation engine** (Phase 1)
4. **Port the "Life" diagram** as first complete SVG example

---

## Appendix A: Alternative Considered - React + Motion

A React-based approach was considered:

**Advantages:**
- Larger ecosystem, more third-party components
- Motion (Framer Motion) is excellent for complex animations
- Larger hiring pool

**Why we chose Svelte instead:**
- **Bundle size**: React + ReactDOM (~45KB) + Motion (~15KB) vs Svelte (~2KB)
- **Existing POC**: `hsu-svelte` already has working navigation stack
- **Built-in transitions**: No external library needed
- **Simpler code**: `$step` vs `useState` + `useEffect`
- **This is a presentation tool**, not a complex web app—Svelte's simplicity wins

## Appendix B: Sample Fragment Component Implementation

```svelte
<!-- lib/components/core/Fragment.svelte -->
<script lang="ts">
  import { step } from '$lib/stores/navigation';
  import { fade, fly, scale } from 'svelte/transition';
  import type { TransitionConfig } from 'svelte/transition';
  
  export let show: number;  // Step number when this becomes visible
  export let transition: 'fade' | 'fly' | 'scale' = 'fade';
  export let duration: number = 300;
  export let drillTo: string | undefined = undefined;
  
  $: isVisible = $step >= show;
  
  function getTransition(node: Element): TransitionConfig {
    switch (transition) {
      case 'fly': return fly(node, { y: 20, duration });
      case 'scale': return scale(node, { start: 0.9, duration });
      default: return fade(node, { duration });
    }
  }
</script>

{#if isVisible}
  <div 
    transition:getTransition
    class:drillable={drillTo}
    on:click={() => drillTo && drillInto(drillTo)}
  >
    <slot />
  </div>
{/if}

<style>
  .drillable {
    cursor: pointer;
  }
  .drillable:hover {
    outline: 2px solid rgba(59, 130, 246, 0.5);
    outline-offset: 2px;
  }
</style>
```

### Usage Example

```svelte
<Fragment show={1}>
  <h1>Genesis 1:1</h1>
</Fragment>

<Fragment show={2} transition="fly">
  <p>"In the beginning God created the heavens and the earth..."</p>
</Fragment>

<Fragment show={3} drillTo="colossians-1-15">
  <ScriptureBox book="Colossians" chapter={1} verses="15-16" />
</Fragment>
```

---

*Document Version: 1.1*  
*Created: November 26, 2025*  
*Updated: November 26, 2025 - Started fresh implementation in `mbs` folder*  
*Author: Development Planning Session*
