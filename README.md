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
│   │   └── Fragment.svelte      # Controls fragment visibility & drills
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

Create a presentation controller that registers slides:

```svelte
<!-- routes/lesson/+page.svelte -->
<script lang="ts">
  import { navigation, currentSlide } from '$lib/stores/navigation';
  import { onMount } from 'svelte';
  import Slide1 from './slides/Slide1.svelte';
  import Slide2 from './slides/Slide2.svelte';

  // Define fragment counts for each slide
  const slideFragmentCounts = [9, 15]; // Slide1 has 9, Slide2 has 15

  onMount(() => {
    navigation.init('lesson', slideFragmentCounts);
  });
</script>

{#if $currentSlide === 0}
  <Slide1 />
{:else}
  <Slide2 />
{/if}
```

### 2. Slide Components

Each slide uses `Fragment` components to control reveal order:

```svelte
<!-- routes/lesson/slides/Slide1.svelte -->
<script lang="ts">
  import Fragment from '$lib/components/Fragment.svelte';

  // IMPORTANT: Export fragmentCount so parent knows total
  // This is documentation only - the actual count comes from slideFragmentCounts
  export const fragmentCount = 9;
</script>

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
  <span class="drillable">Click to drill</span>
</Fragment>
```

### 3. Drill Routes (Custom Shows)

Drills are single-slide presentations that auto-return when complete:

```svelte
<!-- routes/lesson/scripture-ref/+page.svelte -->
<script lang="ts">
  import { navigation, currentFragment } from '$lib/stores/navigation';
  import Fragment from '$lib/components/Fragment.svelte';
  import { onMount } from 'svelte';

  // IMPORTANT: Drills use setMaxFragment, not init()
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
| `navigation.init('id', [9, 15, 12])` | Multi-slide presentations with slide fragment counts array |
| `navigation.setMaxFragment(4)` | Single-slide drills - simpler, just the fragment count |

### Fragment Props

| Prop | Type | Description |
|------|------|-------------|
| `step` | `number` | Fragment number (1-indexed) when this appears |
| `withPrev` | `boolean` | Appear with previous fragment (no extra click) |
| `afterPrev` | `boolean` | Same as withPrev but with 300ms animation delay |
| `drillTo` | `string` | Route to navigate to on click (e.g., `"life/ecclesiastes.3.19"`) |

### Why `export const fragmentCount`?

The `fragmentCount` export in slide components is **documentation only**. The actual fragment count must be specified in the parent's `slideFragmentCounts` array passed to `init()`. Keep them in sync manually.

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

1. **Fragment counts must match** - The `slideFragmentCounts` array in the parent must match the actual highest fragment step in each slide component.

2. **Drills use `setMaxFragment()`** - Don't call `init()` in drill routes; it's for multi-slide presentations only.

3. **Fragment steps are 1-indexed** - Start with `step={1}`, not `step={0}`.

4. **`drillTo` routes are relative** - Use `"life/ecclesiastes.3.19"` not `"/life/ecclesiastes.3.19"`.

5. **Auto-return happens at end** - When `next()` is called on the last fragment of the last slide and there's a stack, it auto-returns.
