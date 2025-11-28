# MBS - Master Bible Study

A SvelteKit-based presentation system replicating PowerPoint's **Custom Show** "drill and return" functionality. Navigate through multi-slide presentations with fragment-by-fragment reveals, drill into scripture references, and automatically return to your exact position.

## Features

- **Multi-slide presentations** with per-slide fragment tracking
- **Drill-and-return** - click scripture references to explore, auto-return when complete
- **Stack-based navigation** - supports nested drills
- **State persistence** - survives page refresh via localStorage
- **Keyboard navigation** - Arrow keys, Space, Escape

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests (watch mode) |
| `npm run test:unit` | Run unit tests (single run) |
| `npm run check` | TypeScript type checking |

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Fragment.svelte      # Controls fragment visibility & drills
│   │   └── Slide.svelte         # Wrapper that auto-registers maxStep
│   ├── stores/
│   │   └── navigation.ts        # Core navigation state machine
│   └── types.ts
├── routes/
│   ├── +layout.svelte           # Global keyboard handling
│   ├── +page.svelte             # Main menu
│   └── life/                    # "Life" presentation
│       ├── +page.svelte         # Presentation controller
│       ├── slides/              # Slide components
│       │   ├── Slide1Life.svelte
│       │   ├── Slide2Mankind.svelte
│       │   └── Slide3ManGod.svelte
│       ├── ecclesiastes.3.19/   # Drill route
│       │   └── +page.svelte
│       └── 1thessalonians.5.23/ # Drill route
│           └── +page.svelte
└── tests/
    ├── navigation.test.ts       # 27 navigation store tests
    └── fragment.test.ts         # 9 component tests
```

## Creating Presentations

### 1. Multi-Slide Presentation

Create a presentation page that collects maxStep from each slide:

```svelte
<!-- routes/lesson/+page.svelte -->
<script lang="ts">
  import { navigation, currentSlide } from '$lib/stores/navigation';
  import Slide1 from './slides/Slide1.svelte';
  import Slide2 from './slides/Slide2.svelte';

  // Slides report their maxStep via callback
  let slideMaxSteps = $state<number[]>([0, 0]);

  function handleSlide1MaxStep(maxStep: number) {
    slideMaxSteps[0] = maxStep;
    if (slideMaxSteps.every(s => s > 0)) {
      navigation.init('lesson', slideMaxSteps);
    }
  }

  function handleSlide2MaxStep(maxStep: number) {
    slideMaxSteps[1] = maxStep;
    if (slideMaxSteps.every(s => s > 0)) {
      navigation.init('lesson', slideMaxSteps);
    }
  }
</script>

<!-- Render all slides, show only active one -->
<div class="slide-wrapper" class:active={$currentSlide === 0}>
  <Slide1 onMaxStep={handleSlide1MaxStep} />
</div>
<div class="slide-wrapper" class:active={$currentSlide === 1}>
  <Slide2 onMaxStep={handleSlide2MaxStep} />
</div>

<style>
  .slide-wrapper { visibility: hidden; position: absolute; }
  .slide-wrapper.active { visibility: visible; position: relative; }
</style>
```

### 2. Slide Components

Wrap slide content in the `Slide` component. Each `Fragment` automatically registers its step:

```svelte
<!-- routes/lesson/slides/Slide1.svelte -->
<script lang="ts">
  import Fragment from '$lib/components/Fragment.svelte';
  import Slide from '$lib/components/Slide.svelte';

  interface Props {
    onMaxStep?: (maxStep: number) => void;
  }
  let { onMaxStep }: Props = $props();
</script>

<Slide {onMaxStep}>
  <Fragment step={1}>
    <h1>First thing revealed</h1>
  </Fragment>

  <Fragment step={2}>
    <p>Second thing</p>
  </Fragment>

  <!-- Appears with step 2 (no separate click needed) -->
  <Fragment step={3} withPrev>
    <p>Also appears at step 2</p>
  </Fragment>

  <!-- Drillable - clicking navigates to the drill route -->
  <Fragment step={4} drillTo="lesson/scripture-ref">
    <span>Click to drill into scripture</span>
  </Fragment>
</Slide>
```

**How it works:** The `Slide` component creates a context. Each `Fragment` registers its `step` value with that context. The `Slide` tracks the highest step seen and reports it via `onMaxStep` callback.

### 3. Drill Routes (Custom Shows)

Drills are single-slide presentations that auto-return when complete:

```svelte
<!-- routes/lesson/scripture-ref/+page.svelte -->
<script lang="ts">
  import { navigation } from '$lib/stores/navigation';
  import Fragment from '$lib/components/Fragment.svelte';
  import { onMount } from 'svelte';

  // Drills use setMaxFragment (no Slide wrapper needed)
  onMount(() => {
    navigation.setMaxFragment(4);
  });
</script>

<Fragment step={1}>Verse 1</Fragment>
<Fragment step={2}>Verse 2</Fragment>
<Fragment step={3}>Verse 3</Fragment>
<Fragment step={4}>Key insight - press → to return</Fragment>
```

## Key Concepts

### `init()` vs `setMaxFragment()`

| Method | Use Case |
|--------|----------|
| `navigation.init('id', [9, 15])` | Multi-slide presentations - array of max steps per slide |
| `navigation.setMaxFragment(4)` | Single-slide drills - just the max step number |

### `Slide` + `Fragment` Auto-Registration

The `Slide` component uses Svelte context to collect step values from child `Fragment` components:

1. `Slide` creates a context with `registerStep()` function
2. Each `Fragment` calls `registerStep(step)` when it mounts
3. `Slide` tracks the max and reports via `onMaxStep` callback
4. Presentation page collects all maxSteps and calls `navigation.init()`

### Fragment Props

| Prop | Type | Description |
|------|------|-------------|
| `step` | `number` | Step number (1-indexed) when this content appears |
| `withPrev` | `boolean` | Appear with previous step (no extra click) |
| `afterPrev` | `boolean` | Same as withPrev but with 300ms animation delay |
| `drillTo` | `string` | Route to drill into on click (e.g., `"life/ecclesiastes.3.19"`) |

### Keyboard Controls

| Key | Action |
|-----|--------|
| `→` `Space` `PageDown` | Next fragment/slide |
| `←` `PageUp` | Previous fragment/slide |
| `Escape` | Return to menu |

## Navigation Store API

```typescript
// Initialize presentation with slide fragment counts
navigation.init('life', [9, 15, 12]);

// For single-slide drills
navigation.setMaxFragment(4);

// Navigation
navigation.next();           // Advance fragment, slide, or auto-return
navigation.prev();           // Go back
navigation.goToSlide(1);     // Jump to slide (preserves fragment position)
navigation.goToFragment(5);  // Jump to fragment in current slide

// Drill operations
navigation.drillInto('life/ecclesiastes.3.19');  // Push state, navigate
navigation.returnFromDrill();                     // Pop state, navigate back

// State management
navigation.clearPresentation('life');  // Clear localStorage for presentation
navigation.reset();                    // Reset everything
```

## Testing

Unit tests cover all core navigation functionality:

```bash
npm run test:unit
```

- **36 tests** covering navigation store and Fragment component
- Tests are content-agnostic - they test mechanics, not specific presentations

## State Persistence

Navigation state is saved to `localStorage` under key `mbs-nav-state`. This preserves:
- Current slide and fragment position
- Per-slide fragment positions (so jumping between slides remembers where you were)
- Drill stack (for nested drills)

The menu's Reset button clears this state.

## Common Gotchas

1. **Wrap slides in `<Slide>`** - Without the Slide wrapper, Fragments won't register their steps and maxStep won't be reported.

2. **Render all slides** - Use `visibility: hidden` not `display: none` for inactive slides. They need to mount to register their steps.

3. **Drills use `setMaxFragment()`** - Don't use the Slide wrapper in drill routes; just call `navigation.setMaxFragment(n)` in onMount.

4. **Fragment steps are 1-indexed** - Start with `step={1}`, not `step={0}`.

5. **`drillTo` routes are relative** - Use `"life/ecclesiastes.3.19"` not `"/life/ecclesiastes.3.19"`.

6. **Auto-return at end of drill** - When `next()` is called on the last step and there's a stack, it auto-returns.
