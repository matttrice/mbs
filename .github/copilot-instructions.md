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

### Fixed Canvas System
All presentations use a **960×540 pixel fixed canvas** (16:9 aspect ratio). The canvas scales to fit the viewport via CSS `transform: scale()`. All layout coordinates are absolute pixel positions within this canvas.

## Fragment Component

The `Fragment` component handles all slide content - from simple text to fully-positioned PowerPoint boxes.

### Fragment Props

| Prop | Type | Description |
|------|------|-------------|
| `step` | `number` | Animation sequence (1-indexed). Omit for static content. |
| `withPrev` | `boolean` | Appear simultaneously with previous step |
| `afterPrev` | `boolean` | Like withPrev but with 500ms animation delay |
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

The [hsu-extractor](../hsu-extractor/) parses `.pptx` files into JSON. See [hsu-extractor/README.md](../hsu-extractor/README.md) for full JSON structure reference.

#### Font Size Conversion
PowerPoint uses points (72 DPI), CSS uses pixels (96 DPI):
```
CSS pixels = PowerPoint points × 1.333
```
The extractor outputs font sizes already converted to pixels.

#### Mapping JSON to Svelte Components

**Main presentation slides** (`slides[]` array):
```json
{
  "slide_number": 1,
  "animation_sequence": [
    { 
      "sequence": 1, 
      "text": "Genesis 12:1-3",
      "layout": { "x": 100, "y": 50, "width": 200, "height": 30 },
      "font": { "font_size": 24, "bold": true, "color": "#0000CC" },
      "hyperlink": { "type": "customshow", "id": 2 }
    },
    { 
      "sequence": 2, 
      "text": "Great Nation",
      "layout": { "x": 100, "y": 100, "width": 180, "height": 30 },
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
  
  <!-- hyperlink.type: "customshow" becomes drillTo -->
  <Fragment
    step={1}
    drillTo="promises/genesis-12-1"
    layout={{ x: 100, y: 50, width: 200, height: 30 }}
    font={{ font_size: 24, bold: true, color: '#0000CC' }}
  >
    Genesis 12:1-3
  </Fragment>
  
  <!-- no hyperlink = plain fragment -->
  <Fragment
    step={2}
    layout={{ x: 100, y: 100, width: 180, height: 30 }}
    font={{ font_size: 18 }}
  >
    Great Nation
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
