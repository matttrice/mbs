# MBS (Master Bible Study) - AI Coding Guidelines

## Architecture Overview

MBS is a SvelteKit presentation system replicating PowerPoint's **Custom Show "drill and return"** functionality. The core innovation is a stack-based navigation system that preserves exact fragment position when drilling into scripture references or sequences of slides.

### Core Data Flow
```
JSON (hsu-pptx/) → extractor.py → Slide components → navigation store → localStorage
```

### Key Components

| Component | Purpose |
|-----------|---------|
| [navigation.ts](src/lib/stores/navigation.ts) | State machine managing slides, fragments, drill stack, and localStorage persistence |
| [Slide.svelte](src/lib/components/Slide.svelte) | Context provider that collects `maxStep` from child Fragments |
| [Fragment.svelte](src/lib/components/Fragment.svelte) | Unified component for visibility, positioning, styling, drills, and animations |
| [FragmentArrow.svelte](src/lib/components/FragmentArrow.svelte) | Animated arrows/lines with wipe animation and step integration |

### Fixed Canvas System
All presentations use a **960×540 pixel fixed canvas** (16:9 aspect ratio). The canvas scales to fit the viewport via CSS `transform: scale()`. All layout coordinates are absolute pixel positions within this canvas.

## Theme Colors

Use CSS custom properties for semantic colors instead of hardcoded hex values. This ensures consistency across all presentations and enables future theming.

| Variable | Value | Use For |
|----------|-------|---------|
| `var(--color-level1)` | `#808080` | Physical/earthly concepts, gray column backgrounds |
| `var(--color-level2)` | `#00aaff` | Spiritual concepts, blue column backgrounds |
| `var(--color-level3)` | `#0000cc` | Eternal/heavenly concepts, blue text |
| `var(--color-highlight)` | `#ffd700` | Gold accent, emphasis |
| `var(--color-bg-light)` | `#e8e8e8` | Light gray backgrounds |

**Example - Column backgrounds:**
```svelte
<!-- Physical column (gray) -->
<Fragment fill="var(--color-level1)" layout={{ x: 75, y: 48, width: 275, height: 464 }}>
  <span></span>
</Fragment>

<!-- Spiritual column (blue) -->
<Fragment fill="var(--color-level2)" layout={{ x: 610, y: 48, width: 266, height: 464 }}>
  <span></span>
</Fragment>
```

**When converting from PowerPoint JSON:**
- `fill: "#B3B3B3"` or similar grays → `fill="var(--color-level1)"`
- `fill: "#33CCFF"` or `#00AAFF` → `fill="var(--color-level2)"`
- `color: "#0000FF"` or `#0000CC"` in font → `color: '#0000FF'` (keep for text, or use `var(--color-level3)`)

## Fragment Component

The `Fragment` component handles all slide content - from simple text to fully-positioned PowerPoint boxes.

### Fragment Props

| Prop | Type | Description |
|------|------|-------------|
| `step` | `number` | Animation sequence. Integer = click number, decimal = delay (e.g., `2.1` = step 2 with 500ms delay). Omit for static content. |
| `drillTo` | `string` | Route to drill into on click (e.g., `"promises/genesis-12-1"`) |
| `layout` | `BoxLayout` | Absolute positioning: `{ x, y, width, height, rotation? }` |
| `font` | `BoxFont` | Typography: `{ font_name?, font_size?, bold?, italic?, color?, alignment? }` |
| `fill` | `string` | Background color (e.g., `"#FFFFFF"`) |
| `line` | `BoxLine` | Border: `{ color?, width? }` |
| `zIndex` | `number` | Stacking order |
| `animate` | `AnimationType` | Entrance animation: `'fade'`, `'fly-up'`, `'fly-down'`, `'fly-left'`, `'fly-right'`, `'scale'`, `'none'` |
| `returnHere` | `boolean` | Return to this drill (not origin) after nested drill completes |

### Usage Patterns

**Static positioned content (always visible):**
```svelte
<Fragment
  layout={{ x: 100, y: 50, width: 200, height: 40 }}
  font={{ font_size: 24, bold: true }}
  fill="#E8E8E8"
>
  Title Text
</Fragment>
```

**Animated positioned content:**
```svelte
<Fragment
  step={1}
  layout={{ x: 100, y: 100, width: 180, height: 30 }}
  font={{ font_size: 18, color: '#0000CC' }}
  animate="fade"
>
  Genesis 12:1-3
</Fragment>
```

**Drill with positioning:**
```svelte
<Fragment
  step={2}
  drillTo="promises/genesis-12-1"
  layout={{ x: 100, y: 140, width: 180, height: 30 }}
  font={{ font_size: 18, color: '#0000CC' }}
>
  Click to see scripture
</Fragment>
```

**Simple fragment (no positioning - for flow-based layouts):**
```svelte
<Fragment step={1}>
  <div class="custom-styled">Content</div>
</Fragment>
```

**Lines/connectors (no layout prop - inline child handles positioning):**
```svelte
<Fragment step={5}>
  <div class="connector-line" style="left: 200px; top: 300px; width: 100px; height: 4px;"></div>
</Fragment>
```

## FragmentArrow Component

The `FragmentArrow` component draws animated arrows/lines with a "wipe" reveal animation (like PowerPoint). It integrates with the slide fragment system for step-based visibility.

### FragmentArrow Props

| Prop | Type | Description |
|------|------|-------------|
| `step` | `number` | Animation sequence. Integer = click number, decimal = delay (e.g., `2.1` = step 2 with 500ms delay). |
| `path` | `ArrowPathPoints` | Start and end coordinates: `{ start: {x, y}, end: {x, y} }` |
| `line` | `ArrowLineStyle` | Styling: `{ color?, width? }` |
| `arrowhead` | `boolean` | Show arrowhead at end (default: true) |
| `headSize` | `number` | Arrowhead size relative to width (default: 1.5) |
| `duration` | `number` | Animation duration in seconds (default: 0.5) |
| `zIndex` | `number` | Stacking order |

### Usage Patterns

**Horizontal arrow (pointing right):**
```svelte
<FragmentArrow 
  step={15}
  path={{ start: { x: 100, y: 200 }, end: { x: 400, y: 200 } }}
  line={{ width: 20 }}
/>
```

**Vertical arrow (pointing down):**
```svelte
<FragmentArrow 
  step={5}
  path={{ start: { x: 250, y: 100 }, end: { x: 250, y: 300 } }}
  line={{ width: 30, color: '#333333' }}
/>
```

**Line without arrowhead:**
```svelte
<FragmentArrow 
  step={3}
  path={{ start: { x: 100, y: 150 }, end: { x: 300, y: 150 } }}
  line={{ width: 4 }}
  arrowhead={false}
/>
```

**Delayed appearance (same click, 500ms delay):**
```svelte
<FragmentArrow 
  step={10.1}
  path={{ start: { x: 200, y: 250 }, end: { x: 400, y: 250 } }}
  line={{ width: 20 }}
/>
```

### Key Features

- **Direction inference**: Arrow direction is calculated from `path.start` to `path.end`
- **Wipe animation**: Reveals from start to end using CSS clip-path animation
- **Drill return handling**: Skips animation when returning from drill (shows fully revealed)
- **Step registration**: Automatically registers with slide context like Fragment

## Critical Patterns

### Multi-Slide Presentations
Presentations collect `maxStep` from each slide via callbacks before calling `navigation.init()`:

```svelte
<!-- Parent collects all slide maxSteps, then inits -->
<Slide1 onMaxStep={step => { slideMaxSteps[0] = step; updateNavigation(); }} />
```

All slides must render (use `visibility: hidden`, not `display: none`) so Fragments can register steps.

### Slide Drills (Custom Shows + Return)
Drills omit the `onMaxStep` callback—Slide auto-calls `navigation.setMaxFragment()`:

```svelte
<Slide>  <!-- No onMaxStep = drill mode -->
  <Fragment step={1} layout={{ x: 50, y: 50, width: 860, height: 440 }} font={{ font_size: 24 }}>
    Scripture content here
  </Fragment>
  <Fragment step={2} drillTo="demo/nested-drill">Chains to another drill</Fragment>
</Slide>
```

### Route Structure for Drills
Drill routes live under their parent presentation:
```
routes/demo/+page.svelte           # Main presentation
routes/demo/ecclesiastes.3.19/     # Drill route (scripture reference as folder name)
routes/demo/slides/Slide1.svelte   # Slide components
```

## Commands

```bash
npm run dev          # Dev server at localhost:5173
npm run test:unit    # Run 70+ navigation and component tests
npm run check        # TypeScript type checking
```

## Creating New Content

### New Presentation
1. Create `routes/{name}/+page.svelte` - import slides, collect maxSteps, call `navigation.init('{name}', slideMaxSteps)`
2. Create `routes/{name}/slides/Slide1.svelte` etc. - wrap in `<Slide onMaxStep={...}>`, use `<Fragment step={n} layout={...}>`
3. Add menu entry in [routes/+page.svelte](src/routes/+page.svelte)

### New Drill
1. Create `routes/{presentation}/{reference}/+page.svelte`
2. Wrap content in `<Slide>` (no onMaxStep)
3. Use `drillTo` on last Fragment to chain drills, or let auto-return happen

### From PowerPoint JSON

The [hsu-extractor](../../hsu-extractor/) parses `.pptx` files into JSON. See [hsu-extractor/README.md](../../hsu-extractor/README.md) for full JSON structure reference.

#### Font Size Conversion
PowerPoint uses points (72 DPI), CSS uses pixels (96 DPI):
```
CSS pixels = PowerPoint points × 1.333
```
The extractor outputs font sizes already converted to pixels.

#### Animation Timing (With Previous / After Previous)

PowerPoint has three animation timing modes that map to MBS decimal step notation:

| PowerPoint Timing | XML `nodeType` | MBS Step | Behavior |
|-------------------|----------------|----------|----------|
| **On Click** | `clickEffect` | `step={n}` | New step number, requires click |
| **With Previous** | `withEffect` | `step={n}` (same as previous) | Same integer = appears together |
| **After Previous** | `afterEffect` | `step={n.1}` | Decimal = delayed (e.g., `.1` = 500ms, `.2` = 1000ms) |

**Step numbering convention:**
- Elements with the same integer step value appear together on the same click
- Use decimal notation for cascading animations (e.g., `step={1.1}` = 500ms after step 1)

**Example - cascading animation:**
```svelte
<!-- Click 1: Arrow appears -->
<FragmentArrow step={1} path={{ start: { x: 100, y: 200 }, end: { x: 300, y: 200 } }} />

<!-- Still click 1: Box appears 500ms after arrow -->
<Fragment step={1.1} layout={{ x: 310, y: 185, width: 100, height: 30 }}>
  Result
</Fragment>
```

**Example - simultaneous appearance:**
```svelte
<!-- Click 2: Both appear at the same time -->
<Fragment step={2} layout={{ x: 100, y: 100, width: 80, height: 30 }}>First</Fragment>
<Fragment step={2} layout={{ x: 200, y: 100, width: 80, height: 30 }}>Second</Fragment>
```

#### Mapping JSON to Svelte Components

**Main presentation slides** (`slides[]` array):
```json
{
  "slide_number": 1,
  "animation_sequence": [
    { 
      "sequence": 1,
      "timing": "click",
      "text": "Genesis 12:1-3",
      "layout": { "x": 100, "y": 50, "width": 200, "height": 30 },
      "font": { "font_size": 24, "bold": true, "color": "#0000CC" },
      "hyperlink": { "type": "customshow", "id": 2 }
    },
    { 
      "sequence": 2,
      "timing": "with",
      "text": "Great Nation",
      "layout": { "x": 100, "y": 100, "width": 180, "height": 30 },
      "font": { "font_size": 18 }
    },
    { 
      "sequence": 3,
      "timing": "after",
      "delay": 500,
      "text": "Land of Canaan",
      "layout": { "x": 100, "y": 130, "width": 180, "height": 30 },
      "font": { "font_size": 18 }
    }
  ],
  "static_content": [{ 
    "text": "The Promises",
    "layout": { "x": 0, "y": 0, "width": 960, "height": 50 },
    "font": { "font_size": 36, "bold": true, "alignment": "center" }
  }]
}
```

Becomes:
```svelte
<!-- routes/promises/slides/Slide1.svelte -->
<Slide {onMaxStep}>
  <!-- static_content: no step prop -->
  <Fragment
    layout={{ x: 0, y: 0, width: 960, height: 50 }}
    font={{ font_size: 36, bold: true, alignment: 'center' }}
  >
    The Promises
  </Fragment>
  
  <!-- timing: "click" + hyperlink.type: "customshow" becomes step + drillTo -->
  <Fragment
    step={1}
    drillTo="promises/genesis-12-1"
    layout={{ x: 100, y: 50, width: 200, height: 30 }}
    font={{ font_size: 24, bold: true, color: '#0000CC' }}
  >
    Genesis 12:1-3
  </Fragment>
  
  <!-- timing: "with" = same step as previous click -->
  <Fragment
    step={1}
    layout={{ x: 100, y: 100, width: 180, height: 30 }}
    font={{ font_size: 18 }}
  >
    Great Nation
  </Fragment>
  
  <!-- timing: "after" + delay: 500 = decimal step (500ms = 0.1) -->
  <Fragment
    step={1.1}
    layout={{ x: 100, y: 130, width: 180, height: 30 }}
    font={{ font_size: 18 }}
  >
    Land of Canaan
  </Fragment>
</Slide>
```

**Custom shows** (`custom_shows` object) become **drill routes**:
```svelte
<!-- routes/promises/genesis-12-1/+page.svelte -->
<Slide>  <!-- No onMaxStep = drill mode -->
  <Fragment layout={{ x: 50, y: 20, width: 860, height: 40 }} font={{ font_size: 28, bold: true }}>
    Genesis 12:1-3
  </Fragment>
  <Fragment step={1} layout={{ x: 50, y: 80, width: 860, height: 400 }} font={{ font_size: 20 }}>
    <blockquote>1 Now the LORD said...</blockquote>
  </Fragment>
</Slide>
```

**Drill route naming**: Convert `custom_shows[id].name` to lowercase route folder (e.g., `Gen12.1` → `genesis-12-1/`).

**Multi-slide custom shows**: When `custom_shows[id].slides` has multiple entries, chain them with `drillTo` on the last fragment of each drill page.

## Testing Conventions
- Tests are content-agnostic (test mechanics, not specific presentations)
- Mock localStorage and `$app/navigation` in tests
- Test file locations: `src/tests/*.test.ts`

## State Persistence
Navigation state persists to `localStorage` key `mbs-nav-state`. The Reset button in the menu clears this.

## Common Mistakes to Avoid
- Using `step={0}` (steps are 1-indexed)
- Forgetting to wrap drill content in `<Slide>`
- Using absolute paths in `drillTo` (use `"demo/ref"` not `"/demo/ref"`)
- Using `display: none` for inactive slides (breaks step registration)
- Using Svelte transitions on positioned Fragments (use `animate` prop instead)
