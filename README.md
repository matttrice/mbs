# MBS — Master Bible Study

A SvelteKit presentation system that replicates PowerPoint's **Custom Show "drill and return"** pattern for the web. Build concept-driven presentations where each click progressively reveals content, drill into supporting scripture or detail slides, and automatically return to exactly where you left off.

## Quick Start

```bash
npm install
npm run dev          # localhost:5173
npm run check        # TypeScript
npm run test:unit    # Unit tests
npm run test:e2e     # Playwright tests
```

## How It Works

MBS presentations are built around a simple cycle:

1. **Reveal** — Click or press → to progressively reveal Fragments on a slide
2. **Drill** — When a Fragment has a `drillTo`, navigation pushes the current position onto a stack and navigates to the target route
3. **Return** — After the drill's last Fragment is passed, navigation pops the stack and returns to the origin slide at the exact fragment where the user left off

This works at any depth: a drill can drill into another drill, and completing the deepest one returns directly to the original presentation. The `returnHere` prop optionally returns to the parent drill instead of the origin, enabling branching drill trees.

### Core Building Blocks

| Component | Role |
|-----------|------|
| `PresentationProvider` | Orchestrates a multi-slide deck, collects each slide's max step, initializes navigation |
| `CustomShowProvider` | Aggregates multiple content components into a single drill sequence with unified navigation |
| `Slide` | Context provider — child Fragments auto-register their steps |
| `Fragment` | Visibility, positioning, animation, and drill behavior for every piece of content |
| SVG components | `Arrow`, `Arc`, `Line`, `Rect`, `Circle`, `Ellipse`, `Path`, `Polygon` — self-positioning on the 960×540 canvas |

All content is laid out on a **960×540 fixed canvas** that scales to fit the viewport.

## Project Structure

```
src/
├── lib/
│   ├── components/          # Fragment, Slide, providers, SVG shapes, CoordinateMeasure
│   ├── stores/navigation.ts # State machine: slides, fragments, drill stack, localStorage
│   ├── styles/              # Shared presentation & utility CSS
│   └── types.ts
├── routes/
│   ├── +page.svelte         # Main menu
│   ├── promises/            # Example: multi-slide presentation
│   │   ├── +page.svelte     #   PresentationProvider + slide wrappers
│   │   ├── slides/          #   Slide1.svelte, Slide2.svelte, …
│   │   ├── genesis-12-1/    #   Drill route (single-slide or CustomShowProvider)
│   │   └── hebrews-7-24/    #   Another drill route
│   └── …                    # Other presentations follow the same pattern
└── tests/
```

## Adding a Presentation

### 1. Multi-Slide Deck

Create `routes/{name}/+page.svelte` with a `PresentationProvider`, import slide components from `./slides/`, and render each inside a `.slide-wrapper`. Slide components accept a `slideIndex` prop and wrap their content in `<Slide {slideIndex}>`. See [copilot-instructions.md](.github/copilot-instructions.md) for the full template.

### 2. Drill Routes

A drill is a SvelteKit route containing `<Slide>` (no `slideIndex`). When the user advances past its last Fragment, navigation auto-returns to the origin.

```svelte
<Slide>
  <Fragment step={1} layout={…} font={…}>Verse text</Fragment>
  <Fragment step={2} layout={…} font={…}>Key insight</Fragment>
</Slide>
```

For multi-slide drills, use `CustomShowProvider` with co-located `Content1.svelte`, `Content2.svelte`, etc.

### 3. Connecting Drills

Add `drillTo` to any Fragment on the parent slide:

```svelte
<Fragment step={3} drillTo="promises/genesis-12-1" layout={…} font={…}>
  Genesis 12:1-3
</Fragment>
```

Arrow keys execute drills automatically by default (`autoDrillAll`). Toggle this off in the menu to require explicit clicks.

## Converting from PowerPoint

The [hsu-extractor](https://github.com/matttrice/hsu-extractor) parses `.pptx` files into JSON with pre-scaled 960×540 coordinates. The JSON is the single source of truth — use exact values for text, layout, and font properties. Conversion rules (timing → step mapping, color → CSS variable mapping, shape → SVG component mapping) are fully documented in [copilot-instructions.md](.github/copilot-instructions.md).

## Keyboard Controls

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next fragment / slide / drill |
| `←` `↑` | Previous fragment / slide |
| `Escape` `q` | Return to menu |
| `e` | Edit mode (CoordinateMeasure) |
| `d` | Draw mode (CoordinateMeasure) |

## CoordinateMeasure (Dev Tool)

A visual overlay for adjusting and drawing Fragment and SVG objects directly on the 960×540 canvas during local development.

**Edit mode** (`e`) — Click any shape to select it. Nudge position, resize, rotate, or snap to canvas alignment guides. The panel shows original and adjusted code side by side.

**Draw mode** (`d`) — Drag on the canvas to sketch a new Fragment, Rect, Line, Arrow, Arc or Circle. Once inserted, manually add text and other properties not provided.

**Apply to filesystem** — Both modes include an **Apply** button that writes the change directly to the source `.svelte` file on disk via a local dev API. If multiple files in the route match, a picker appears. The browser hot-reloads automatically.

## State Persistence

Navigation state persists to `localStorage` (key `mbs-nav-{route}`), preserving slide position, per-slide fragment positions, and the drill stack across refreshes. The menu Reset button clears this. Press Escape or q to exit any presentation.

## Theological Framework

Master Bible Study is built on foundational theological truths that shape all its conclusions. See [THEOLOGY.md](THEOLOGY.md) for details.

## License

Creative Commons Attribution 4.0 International (CC-BY 4.0). Free to use, modify, and distribute with attribution. See [LICENSE](LICENSE) for details.
