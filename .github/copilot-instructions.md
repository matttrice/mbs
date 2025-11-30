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
| [Fragment.svelte](src/lib/components/Fragment.svelte) | Controls visibility, registers drill targets, handles click navigation |

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
  <Fragment step={1}>Content</Fragment>
  <Fragment step={2} drillTo="demo/nested-drill">Chains to another drill</Fragment>
</Slide>
```

### Fragment Step Registration
Fragments are 1-indexed and register via Svelte context. The `drillTo` prop enables both click navigation and auto-drill at end of sequence.

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
npm run test:unit    # Run 36+ navigation and component tests
npm run check        # TypeScript type checking
```

## Creating New Content

### New Presentation
1. Create `routes/{name}/+page.svelte` - import slides, collect maxSteps, call `navigation.init('{name}', slideMaxSteps)`
2. Create `routes/{name}/slides/Slide1.svelte` etc. - wrap in `<Slide onMaxStep={...}>`, use `<Fragment step={n}>`
3. Add menu entry in [routes/+page.svelte](src/routes/+page.svelte)

### New Drill
1. Create `routes/{presentation}/{reference}/+page.svelte`
2. Wrap content in `<Slide>` (no onMaxStep)
3. Use `drillTo` on last Fragment to chain drills, or let auto-return happen

### From PowerPoint JSON

The [hsu-extractor](../hsu-extractor/) parses `.pptx` files into JSON. See [hsu-extractor/README.md](../hsu-extractor/README.md) for full JSON structure reference.

#### Mapping JSON to Svelte Components

**Main presentation slides** (`slides[]` array):
```json
{
  "slide_number": 1,
  "animation_sequence": [
    { "sequence": 1, "text": "Genesis 12:1-3", "hyperlink": { "type": "customshow", "id": 2 } },
    { "sequence": 2, "text": "Great Nation" }
  ],
  "static_content": [{ "text": "The Promises", "static": true }]
}
```

Becomes:
```svelte
<!-- routes/promises/slides/Slide1.svelte -->
<Slide {onMaxStep}>
  <h1>The Promises</h1>  <!-- static_content: always visible -->
  
  <Fragment step={1} drillTo="promises/gen12.1">  <!-- hyperlink.type: "customshow" -->
    Genesis 12:1-3
  </Fragment>
  
  <Fragment step={2}>  <!-- no hyperlink = plain fragment -->
    Great Nation
  </Fragment>
</Slide>
```

**Custom shows** (`custom_shows` object) become **drill routes**:
```json
"custom_shows": {
  "2": {
    "name": "Gen12.1",
    "slides": [{ "texts": ["1 Now the LORD said...", "Genesis 12:1-3"] }]
  }
}
```

Becomes:
```svelte
<!-- routes/promises/gen12.1/+page.svelte -->
<Slide>  <!-- No onMaxStep = drill mode -->
  <h1>Genesis 12:1-3</h1>
  <Fragment step={1}>
    <blockquote>1 Now the LORD said...</blockquote>
  </Fragment>
</Slide>
```

**Drill route naming**: Convert `custom_shows[id].name` to lowercase route folder (e.g., `Gen12.1` → `gen12.1/`).

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
