# MBS (Master Bible Study) - AI Coding Guidelines

## Architecture Overview

MBS is a SvelteKit presentation system replicating PowerPoint's **Custom Show "drillTo and return"** functionality. The core innovation is a stack-based navigation system that preserves exact fragment position when drilling into scripture references or sequences of slides.

### Core Data Flow
```
JSON (hsu-pptx/) → extractor.py → Slide components → navigation store → localStorage
```

### Key Components

| Component | Purpose |
|-----------|---------|
| [navigation.ts](src/lib/stores/navigation.ts) | State machine managing slides, fragments, drill stack, and localStorage persistence |
| [PresentationProvider.svelte](src/lib/components/PresentationProvider.svelte) | Orchestrates multi-slide presentations, collects slide maxSteps, calls `navigation.init()` |
| [Slide.svelte](src/lib/components/Slide.svelte) | Context provider that auto-registers Fragment steps with parent PresentationProvider |
| [Fragment.svelte](src/lib/components/Fragment.svelte) | Unified component for visibility, positioning, styling, drills, and animations |
| [SVG Components](src/lib/components/svg/) | svg.js-powered shape components (Arrow, Line, Rect, Circle, Ellipse, Path, Polygon) |

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
<Fragment step={2} animate="wipe-down">
  <Rect x={75} y={48} width={275} height={464} fill="var(--color-level1)" />
</Fragment>

<!-- Spiritual column (blue) -->
<Fragment step={3} animate="wipe-down">
  <Rect x={610} y={48} width={266} height={464} fill="var(--color-level2)" />
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
| `font` | `BoxFont` | Typography: `{ font_name?, font_size?, bold?, italic?, color?, align?, v_align?, wrap? }` |
| `fill` | `string` | Background color (e.g., `"var(--color-bg-ghost)"`) |
| `line` | `BoxLine` | Border: `{ color?, width? }` |
| `zIndex` | `number` | Stacking order |
| `animate` | `AnimationType` | Entrance animation: `'fade'`, `'fly-up'`, `'fly-down'`, `'fly-left'`, `'fly-right'`, `'scale'`, `'wipe'`, `'wipe-up'`, `'wipe-down'`, `'wipe-left'`, `'wipe-right'`, `'draw'`, `'none'` |
| `exitStep` | `number` | Step at which this fragment disappears (for temporary content) |
| `keyframes` | `Keyframe[]` | Step-based motion: `[{ step: 2, x: 100 }, { step: 3, x: 200 }]` |
| `transition` | `TransitionConfig` | Motion config: `{ duration?: number, easing?: function }` |
| `returnHere` | `boolean` | Return to this drill (not origin) after nested drill completes |

### BoxFont Properties

| Property | Type | Description |
|----------|------|-------------|
| `font_size` | `number` | Font size in CSS pixels |
| `font_name` | `string` | Font family name |
| `bold` | `boolean` | Bold text |
| `italic` | `boolean` | Italic text |
| `color` | `string` | Text color (hex or CSS variable) |
| `align` | `'left' \| 'center' \| 'right'` | Horizontal text alignment (default: `'center'`) |
| `v_align` | `'top' \| 'middle' \| 'bottom'` | Vertical text alignment (default: `'middle'`) |
| `wrap` | `boolean` | Allow text to wrap within the box (default: `false`) |

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

**Multi-line text with alignment (e.g., book lists):**
```svelte
<Fragment
  step={3}
  layout={{ x: 125, y: 100, width: 82, height: 180 }}
  font={{ font_size: 11, align: 'left', v_align: 'top', wrap: true }}
>
  Genesis<br/>Exodus<br/>Leviticus<br/>Numbers<br/>Deuteronomy
</Fragment>
```

**Lines/connectors with SVG components:**
```svelte
<Fragment step={5} animate="wipe">
  <Arrow from={{ x: 200, y: 300 }} to={{ x: 400, y: 300 }} stroke={{ width: 4 }} zIndex={10} />
</Fragment>
```

## SVG Shape Components

Arrow, Line, and Rect are self-positioning components that use **canvas coordinates** (960×540). Fragment only provides step-based visibility and animation timing—no `layout` prop needed for these components.

**Important:** For shapes without text content (empty rectangles, lines, arrows), use SVG components directly inside Fragment rather than using Fragment's `layout` and `fill` props. Fragment requires children content—using it with layout/fill but no children causes TypeScript errors.

**Identifying in JSON:** When converting from PowerPoint JSON, shapes without text content will NOT have `text` or `font` properties—only `shape_name`, `layout`, `fill`, `line`, etc. These should be converted to SVG components (Rect, Line, Arrow, Arc) inside Fragment.

```svelte
<!-- ✅ CORRECT: SVG component inside Fragment for empty shapes -->
<Fragment step={2} animate="wipe-down">
  <Rect x={75} y={48} width={275} height={464} fill="var(--color-level1)" zIndex={5} />
</Fragment>

<!-- ❌ WRONG: Fragment with layout/fill but no children -->
<Fragment step={2} layout={{ x: 75, y: 48, width: 275, height: 464 }} fill="var(--color-level1)">
</Fragment>
```

```svelte
<script>
  import Fragment from '$lib/components/Fragment.svelte';
  import { Arrow, Arc, Line, Rect, Circle, Ellipse, Path, Polygon } from '$lib/components/svg';
</script>
```

### Arrow Component

Arrow uses the [perfect-arrows](https://github.com/steveruizok/perfect-arrows) library for consistent rendering. Supports two modes:

1. **Point-to-point**: Use `from`/`to` with `{x, y}` coordinates
2. **Box-to-box**: Use `fromBox`/`toBox` with `{x, y, width, height}` for automatic curved arrows between rectangles

| Prop | Type | Description |
|------|------|-------------|
| `from` | `{ x, y }` | Start point in canvas coordinates (point-to-point mode) |
| `to` | `{ x, y }` | End point in canvas coordinates (point-to-point mode) |
| `fromBox` | `{ x, y, width, height }` | Source rectangle (box-to-box mode) |
| `toBox` | `{ x, y, width, height }` | Target rectangle (box-to-box mode) |
| `stroke` | `StrokeStyle` | Stroke styling (width, color, dash) |
| `zIndex` | `number` | Stacking order (default: 1) |
| `headSize` | `number` | Arrow head size multiplier (default: 3, use 0 for no head) |
| `bow` | `number` | Curvature amount (0 = straight, 0.1-0.5 = curved). Default: 0 |
| `flip` | `boolean` | Reverse curve direction (default: false) |

### Line Component

Line is the same as Arrow but without an arrowhead.

| Prop | Type | Description |
|------|------|-------------|
| `from` | `{ x, y }` | Start point in canvas coordinates (960×540) |
| `to` | `{ x, y }` | End point in canvas coordinates |
| `stroke` | `StrokeStyle` | Stroke styling (width, color, dash) |
| `zIndex` | `number` | Stacking order (default: 1) |

### Rect Component

Rect positions itself absolutely on the canvas. Use for background columns, boxes, and filled shapes.

| Prop | Type | Description |
|------|------|-------------|
| `x` | `number` | X position on canvas (960×540) |
| `y` | `number` | Y position on canvas |
| `width` | `number` | Rectangle width |
| `height` | `number` | Rectangle height |
| `fill` | `string` | Fill color (e.g., `"var(--color-level2)"`) |
| `stroke` | `StrokeStyle` | Border styling (width, color, dash) |
| `radius` | `number` | Corner radius for rounded rectangles |
| `zIndex` | `number` | Stacking order (default: 1) |

### StrokeStyle Type

```typescript
interface StrokeStyle {
  width?: number;     // Stroke width in pixels (default: 2)
  color?: string;     // Stroke color (default: '#000000')
  dash?: string;      // Dash pattern (e.g., '10,5')
}
```

### Arrow and Line Usage

**Horizontal arrow (pointing right):**
```svelte
<Fragment step={14} animate="wipe">
  <Arrow from={{ x: 307, y: 197 }} to={{ x: 666, y: 197 }} stroke={{ width: 10 }} zIndex={34} />
</Fragment>
```

**Curved arrow (point-to-point with bow):**
```svelte
<Fragment step={15} animate="draw">
  <Arrow from={{ x: 100, y: 200 }} to={{ x: 300, y: 200 }} bow={0.3} stroke={{ width: 5 }} />
</Fragment>
```

**Curved arrow between boxes (for timeline self-references):**
```svelte
<script>
  // Define boxes for timeline elements
  const genesisBox = { x: 74, y: 362, width: 99, height: 29 };
  const revelationBox = { x: 757, y: 356, width: 123, height: 32 };
</script>

<!-- Revelation → Genesis curved arrow (arcs upward) -->
<Fragment step={27} animate="draw">
  <Arrow fromBox={revelationBox} toBox={genesisBox} bow={0.5} flip={true} stroke={{ width: 5, color: '#0000FF' }} />
</Fragment>

<!-- Genesis → Revelation curved arrow (arcs downward) -->
<Fragment step={27.1} animate="draw">
  <Arrow fromBox={genesisBox} toBox={revelationBox} bow={0.5} stroke={{ width: 5, color: '#0000FF' }} headSize={0} />
</Fragment>
```

**Vertical arrow (pointing down):**
```svelte
<Fragment step={15} animate="wipe">
  <Arrow from={{ x: 265, y: 244 }} to={{ x: 265, y: 292 }} stroke={{ width: 24 }} headSize={1} zIndex={23} />
</Fragment>
```

**Horizontal line (no arrowhead):**
```svelte
<Fragment step={17} animate="draw">
  <Line from={{ x: 547, y: 285 }} to={{ x: 453, y: 285 }} stroke={{ width: 3 }} zIndex={8} />
</Fragment>
```

**Diagonal arrow (angled connector):**
```svelte
<Fragment step={22} animate="wipe">
  <Arrow from={{ x: 170, y: 252 }} to={{ x: 235, y: 228 }} stroke={{ width: 7 }} headSize={2} zIndex={32} />
</Fragment>
```

**Dashed line:**
```svelte
<Fragment step={5} animate="draw">
  <Line from={{ x: 100, y: 100 }} to={{ x: 300, y: 100 }} stroke={{ width: 2, dash: '10,5' }} zIndex={5} />
</Fragment>
```

### Rect Usage

**Background column (full height, wipes down):**
```svelte
<Fragment step={3} animate="wipe-down">
  <Rect x={192.7} y={0} width={288} height={540} fill="var(--color-level2)" zIndex={2} />
</Fragment>
```

**Box with border:**
```svelte
<Fragment step={22} animate="fade">
  <Rect x={206} y={178} width={275} height={118.9} fill="var(--color-bg-light)" stroke={{ color: '#000000', width: 1 }} zIndex={6} />
</Fragment>
```

**White background box:**
```svelte
<Fragment step={25} animate="fade">
  <Rect x={481.1} y={295.4} width={258.6} height={127.7} fill="var(--color-bg-ghost)" zIndex={1} />
</Fragment>
```

### Arc Component

Arc is a self-positioning curved line/arrow for drawing half-circle arcs above or below content (like timeline self-references). Uses quadratic bezier curves.

| Prop | Type | Description |
|------|------|-------------|
| `from` | `{ x, y }` | Start point in canvas coordinates (960×540) |
| `to` | `{ x, y }` | End point in canvas coordinates |
| `curve` | `number` | Vertical offset: negative = curves up, positive = curves down |
| `stroke` | `StrokeStyle` | Stroke styling (width, color, dash) |
| `arrow` | `boolean` | Show arrowhead at end (default: false) |
| `headSize` | `number` | Arrow head size multiplier (default: 3) |
| `zIndex` | `number` | Stacking order (default: 1) |

**Arc curving upward (e.g., Poetry → Ezra):**
```svelte
<Fragment step={48} animate="draw">
  <Arc from={{ x: 364, y: 382 }} to={{ x: 242, y: 382 }} curve={-34} stroke={{ width: 5, color: '#0000FF' }} arrow />
</Fragment>
```

**Arc curving downward (looping below timeline):**
```svelte
<Fragment step={49} animate="draw">
  <Arc from={{ x: 400, y: 300 }} to={{ x: 600, y: 300 }} curve={50} stroke={{ width: 4 }} arrow />
</Fragment>
```

**Note:** Coordinates from PowerPoint JSON are already scaled to 960×540 by the extractor - use them directly without manual scaling.

### Other SVG Components

For other shapes (Circle, etc.), use Fragment with `layout` to position them:

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `Circle` | Circle | `cx`, `cy`, `r`, `fill`, `stroke` |
| `Ellipse` | Ellipse | `cx`, `cy`, `rx`, `ry`, `fill`, `stroke` |
| `Path` | SVG path | `d`, `fill`, `stroke` |
| `Polygon` | Multi-point shape | `points`, `fill`, `stroke` |

### Key Features

- **Arrow/Line use canvas coordinates**: `from={{ x: 100, y: 200 }}` is position on the 960×540 canvas
- **Self-positioning**: Arrow/Line render their own absolutely-positioned SVG—no Fragment layout needed
- **Animation types**: Use `animate="wipe"` for arrows, `animate="draw"` for lines
- **Direction inference**: Wipe direction auto-calculated from `from` → `to` direction
- **Drill return handling**: Animations skip when returning from drill (content shows fully revealed)
- **perfect-arrows library**: Arrow uses perfect-arrows for clean arrowhead geometry

## Critical Patterns

### Multi-Slide Presentations

Presentations use `PresentationProvider` to orchestrate slides. Each slide component receives a `slideIndex` prop and passes it to the `<Slide>` component. The provider automatically collects maxStep from each slide and calls `navigation.init()`.

**Main presentation page (`+page.svelte`):**
```svelte
<script lang="ts">
  import { currentSlide } from '$lib/stores/navigation';
  import PresentationProvider from '$lib/components/PresentationProvider.svelte';
  import Slide1 from './slides/Slide1.svelte';
  import Slide2 from './slides/Slide2.svelte';
</script>

<PresentationProvider name="my-presentation" slideCount={2}>
  <div class="presentation">
    <div class="slide-container">
      <!-- All slides render to register maxSteps, only active one visible -->
      <div class="slide-wrapper" class:active={$currentSlide === 0}>
        <Slide1 slideIndex={0} />
      </div>
      <div class="slide-wrapper" class:active={$currentSlide === 1}>
        <Slide2 slideIndex={1} />
      </div>
    </div>

    <!-- Slide indicator dots -->
    <div class="slide-indicators">
      {#each {length: 2} as _, index}
        <button 
          class="indicator-dot"
          class:active={$currentSlide === index}
          onclick={() => import('$lib/stores/navigation').then(m => m.navigation.goToSlide(index))}
          aria-label="Go to slide {index + 1}"
        >
          {index + 1}
        </button>
      {/each}
    </div>
  </div>
</PresentationProvider>
```

**Slide component (`slides/Slide1.svelte`):**
```svelte
<script lang="ts">
  import Slide from '$lib/components/Slide.svelte';
  import Fragment from '$lib/components/Fragment.svelte';

  interface Props {
    slideIndex?: number;
  }

  let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
  <div class="slide-bg"></div>
  
  <!-- Static content (always visible) -->
  <Fragment
    layout={{ x: 300, y: 20, width: 360, height: 50 }}
    font={{ font_size: 36, bold: true }}
  >
    Slide Title
  </Fragment>

  <!-- Step 1: Animated content -->
  <Fragment
    step={1}
    layout={{ x: 100, y: 100, width: 200, height: 40 }}
    font={{ font_size: 24 }}
  >
    First Fragment
  </Fragment>
</Slide>
```

The `.slide-bg` class is defined in `$lib/styles/utilities.css`. All slides must render (use `visibility: hidden` via `.slide-wrapper`, not `display: none`) so Fragments can register steps. Presentation styles are in `$lib/styles/presentation.css`.

### Standalone Drill Pages (Custom Shows + Return)

Drill pages use `<Slide>` without `slideIndex`—this triggers standalone mode where Slide auto-calls `navigation.setMaxFragment()`:

```svelte
<!-- routes/my-presentation/genesis-12-1/+page.svelte -->
<script lang="ts">
  import Slide from '$lib/components/Slide.svelte';
  import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
  <div class="drill-content">
    <h1>Genesis 12:1-3</h1>
    
    <Fragment step={1}>
      <p>Scripture content here...</p>
    </Fragment>
    
    <!-- Chain to another drill -->
    <Fragment step={2} drillTo="my-presentation/genesis-12-7">
      <p class="drill-link">Continue to next passage</p>
    </Fragment>
  </div>
</Slide>
```

### Route Structure for Drills
Drill routes live under their parent presentation:
```
routes/demo/+page.svelte           # Main presentation
routes/demo/genesis-12-1/+page.svelte  # Drill route (scripture reference as folder name)
routes/demo/slides/Slide1.svelte   # Slide components
```

## Drill Behavior (Custom Shows)

Drills replicate PowerPoint's Custom Show functionality. Understanding the drill lifecycle is critical for correct implementation.

### autoDrillAll Setting

The navigation store has an `autoDrillAll` setting (persisted to localStorage as `mbs-drillto`):

| Setting | Arrow Key Behavior | Click Behavior |
|---------|-------------------|----------------|
| `autoDrillAll=true` (default) | Arrow right executes drills automatically | Click always drills |
| `autoDrillAll=false` | Arrow right **skips** all drills | Click always drills |

**Key behavior**: When `autoDrillAll=false`, arrow keys skip drills entirely—this applies to ALL drillTo fragments, including ones at the last fragment of a slide/drill. The user must click on drillable fragments to drill.

### Multi-Level Drill Chains

Drills can chain to other drills (e.g., `hebrews-3-14` → `hebrews-4-1`). When the deepest drill completes, navigation returns **directly to the origin** (the original presentation slide), not back through each intermediate drill, unless `returnHere={true}` is set on a fragment in the drill chain.

**Example 3-level chain:**
```
Slide 1 step 1 (drillTo drill-01)
  └→ drill-01 step 2 (drillTo drill-02)
      └→ drill-02 step 2 (drillTo drill-03)
          └→ drill-03 completes → Returns to Slide 1 step 1
```

**Implementation**: Each drill pushes state to a stack. On return, the entire stack is popped and navigation returns to the first (origin) entry.

### returnHere Prop

The `returnHere` prop changes return behavior for specific drill chains:

| Prop | Return Behavior |
|------|----------------|
| `returnHere={false}` (default) | Return to origin (pop entire stack) |
| `returnHere={true}` | Return to parent drill (pop one level) |

**Use case**: When a drill has multiple branches and you want to return to the parent drill to continue, not all the way to the origin.

```svelte
<!-- In parent drill: return HERE after nested drill completes -->
<Fragment step={2} drillTo="demo/nested-scripture" returnHere>
  Scripture reference (returns here, not to origin)
</Fragment>

<!-- Continue in parent drill after nested returns -->
<Fragment step={3}>More content after nested drill</Fragment>
```

### Pending Drill Approach

Drills use a "pending drill" approach to ensure content is visible before drilling:

1. **Step N**: Fragment with `drillTo` becomes visible, pending drill is set
2. **Next arrow**: Pending drill executes, navigating to the drill route

This ensures users always see the drillable content before the navigation happens.

### End-of-Drill Behavior

When at the last fragment of a drill:

| Condition | Arrow Right Behavior |
|-----------|---------------------|
| Last fragment has `drillTo` + `autoDrillAll=true` | Execute the drill |
| Last fragment has `drillTo` + `autoDrillAll=false` | **Skip drill**, return to origin |
| Last fragment, no drillTo, in drill stack | Return to origin |
| Last fragment, no drillTo, `returnHere=true` | Return to parent (one level) |
| Last fragment, no drillTo, main presentation | Do nothing (end of presentation) |

## Commands

```bash
npm run dev          # Dev server at localhost:5173
npm run test:unit    # Run 70+ navigation and component tests
npm run check        # TypeScript type checking
```

## Creating New Content

### New Presentation
1. Create `routes/{name}/+page.svelte`:
   - Import `PresentationProvider` and `currentSlide` from stores
   - Import slide components from `./slides/`
   - Wrap everything in `<PresentationProvider name="{name}" slideCount={N}>`
   - Render each slide in a `.slide-wrapper` div with `class:active={$currentSlide === index}`
   - Pass `slideIndex={n}` to each slide component (0-indexed)
2. Create `routes/{name}/slides/Slide1.svelte` etc.:
   - Accept `slideIndex` prop and pass it to `<Slide {slideIndex}>`
   - Use `<Fragment step={n} layout={...}>` for content
3. Add menu entry in [routes/+page.svelte](src/routes/+page.svelte)

### New Drill
1. Create `routes/{presentation}/{reference}/+page.svelte`
2. Wrap content in `<Slide>` (no slideIndex = standalone drill mode)
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
<Fragment step={1} layout={{ x: 100, y: 195, width: 200, height: 10 }} animate="wipe">
  <Arrow from={{ x: 0, y: 5 }} to={{ x: 200, y: 5 }} stroke={{ width: 10 }} />
</Fragment>

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
<script lang="ts">
  import Slide from '$lib/components/Slide.svelte';
  import Fragment from '$lib/components/Fragment.svelte';

  interface Props {
    slideIndex?: number;
  }

  let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
  <div class="slide-bg"></div>
  <!-- static_content: no step prop -->
  <Fragment
    layout={{ x: 0, y: 0, width: 960, height: 50 }}
    font={{ font_size: 36, bold: true, align: 'center' }}
  >
    The Promises
  </Fragment>
  
  <!-- timing: "click" + hyperlink.type: "customshow" becomes step + drillTo -->
  <Fragment
    step={1}
    drillTo="promises/genesis-12-1"
    layout={{ x: 100, y: 50, width: 200, height: 30 }}
    font={{ font_size: 24, bold: true, color: 'var(--color-level3)' }}
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

**Custom shows** (`custom_shows` object `linked_content`) become **drill routes**:
```svelte
<!-- routes/promises/genesis-12-1/+page.svelte -->
<script lang="ts">
  import Slide from '$lib/components/Slide.svelte';
  import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>  <!-- No slideIndex = standalone drill mode -->
  <div class="drill-content">
    <Fragment layout={{ x: 50, y: 20, width: 860, height: 40 }} font={{ font_size: 28, bold: true }}>
      Genesis 12:1-3
    </Fragment>
    <Fragment step={1} layout={{ x: 50, y: 80, width: 860, height: 400 }} font={{ font_size: 20 }}>
      <blockquote>1 Now the LORD said...</blockquote>
    </Fragment>
  </div>
</Slide>
```

The `.drill-content` class is defined in `$lib/styles/scripture.css`.

#### Shapes Without Text (SVG Components)

JSON entries **without `text` or `font` properties** represent visual-only shapes (rectangles, lines, arrows). Convert these to SVG components inside Fragment:

**JSON entry (no text/font = visual shape):**
```json
{
  "sequence": 5,
  "shape_name": "Rectangle 68",
  "timing": "click",
  "layout": { "x": 75, "y": 48, "width": 275, "height": 464 },
  "fill": "#B3B3B3"
}
```

**Becomes SVG component inside Fragment:**
```svelte
<Fragment step={5} animate="wipe-down">
  <Rect x={75} y={48} width={275} height={464} fill="var(--color-level1)" zIndex={5} />
</Fragment>
```

**JSON with `line_endpoints` = Arrow or Line:**
```json
{
  "sequence": 14,
  "shape_name": "Line 74",
  "timing": "click",
  "layout": { "x": 191.5, "y": 285.0, "width": 0.6, "height": 558.6, "rotation": 90.0 },
  "line": { "width": 9.4 },
  "arrow_ends": { "tailEnd": "triangle" },
  "line_endpoints": { "from": { "x": 0, "y": 285.3 }, "to": { "x": 750.3, "y": 285.3 } }
}
```

**Becomes:**
```svelte
<Fragment step={14} animate="wipe">
  <Arrow from={{ x: 0, y: 285.3 }} to={{ x: 750.3, y: 285.3 }} stroke={{ width: 9.4 }} zIndex={30} />
</Fragment>
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
- Forgetting to pass `slideIndex` to slides inside `PresentationProvider`
- Using `slideIndex` on standalone drill pages (omit it for drill mode)
- Using absolute paths in `drillTo` (use `"demo/ref"` not `"/demo/ref"`)
- Using `display: none` for inactive slides (breaks step registration—use `visibility: hidden` via `.slide-wrapper`)
- Using Svelte transitions on positioned Fragments (use `animate` prop instead)
- Expecting `returnHere` behavior by default (drills return to origin, not parent)
- Expecting drills to execute when `autoDrillAll=false` (arrow keys skip ALL drills)
