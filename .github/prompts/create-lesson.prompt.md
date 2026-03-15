---
agent: agent
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide and accurately reproduce and position all Slides, their links to other slides and all contained shapes, arrows, text images and animations on the canvas according to the extracted data. The new lesson should include a [main menu](../../src/routes/+page.svelte) item. This is a large task so plan your approach carefully before beginning the conversion.

Details explaining the extracted json data is in [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs copilot-instructions](../copilot-instructions.md).


## Your approach to planning the json to svelte conversion:
The last step for "main top-level slides" is the most complex and important, so you should plan your approach to it carefully before beginning the conversion. The key is to understand the json structure and how to map it to the svelte route structure before you begin creating files and writing code. This will allow you to create a clear plan for how to approach the conversion and ensure you don't miss any important details or relationships in the json data.

First analyze the json structure to identify all the custom shows, linked slides and main slides.
Use `slides[]` as the authoritative top-level slide set and `linked_slides{}` as drillTo/custom show content.
Do not move slides between these sets based on hyperlink inference; preserve extractor classification exactly.

**Check for existing Route Map**: Before building the plan from scratch, look for a `{Lesson}-Svelte-Route-Map.md` file in the JSON folder. If one exists from a prior run, use it to accelerate planning — the route-to-slide mappings and CustomShowProvider groupings are already established.

## Scripture Reference Routes
During conversion you encounter scripture reference slides (drillto/custom shows), use the [scripture-references SKILL.md](../skills/scripture-references/SKILL.md) skill to convert them to the appropriate structure and `ScriptureBlock` usage in drillto routes. You will need to plan ahead for this for each drill during the json to svelte conversion for fragments as it has key consolidation instructions for sequences. This will ensure consistency across all scripture reference content in the project.

## Custom Show creation approaches:

Plan to begin with the `custom_shows.{N>1}.slide_numbers` which is a list of `slide_number` references into `linked_slides{}` and is the most dependent relational mapping. These define routes that other pages drillTo or clickTo.
### Single-slide custom shows
When **json: `custom_shows{}`** contain only a single slide reference and is used independently (not co-located within other custom show aggregations), create a **Standalone Drill Page** — a single `+page.svelte` with `<Slide>` and Fragments within. This is the default for all single-slide drills.

### Multi-slide custom shows
If multiple slides are referenced in `custom_shows{}` json, use `CustomShowProvider`:
1. **Co-located content** (default): Create `Content1.svelte`, `Content2.svelte`, etc. in the custom show route folder alongside the `+page.svelte` with CustomShowProvider.
2. **Cross-route aggregation** (only when content is shared): If a linked slide's content is also used by another CustomShowProvider elsewhere, give it its own route with `Content.svelte` + `+page.svelte`. The `Content.svelte` holds Fragments only (no `<Slide>` wrapper) so it can be imported into multiple CustomShowProviders, while the `+page.svelte` wraps it in `<Slide>` for standalone access. Only use this pattern when there is an actual consumer — do not preemptively split into Content.svelte.

**Legacy fallback when `custom_shows` is empty** If `custom_shows` is empty (or missing), treat the deck as a legacy hyperlink-chain drill model:
  - Use `hyperlink.type: "slide"` relationships to reconstruct drill chains (slide → slide → ... → return-to-main) as CustomShowProvider routes or Consolidated Content.svelte routes as appropriate based on the number of slides in the chain and whether they are referenced from multiple places.
  - Treat `linked_slides` as drill content and `slides[]` as the top-level presentation slides.
  - Classification is authoritative from extraction: Hidden slides become `linked_slides`, non-hidden slides become `slides[]`.
  - You will have to analyze and build a map of the hyperlink relationships to reconstruct the drill chains and determine which slides belong together in CustomShowProviders or Content.svelte files. This is more work but ensures we can handle legacy decks that were extracted before the `custom_shows` structure was added.

With the remaining linked_slides define individual slide routes:
- **json:`linked_slides{}`** - Individual scripture/drill slides → create`routes/{lesson}/{reference}/+page.svelte` These may have already been created with custom_shows Content.svelte. If not, create the standard +page.svelte with <Slide> object and any fragments.

Next process the main top-level slides array:
- **json:`slides[]`** - This array defines the main presentation slides in `routes/{lesson}/slides/Slide{N}.svelte` and are the most complex (unless its the The End slide) with potentially many fragment elements and drillTo links which maybe a custom show or direct reference depending on what was created earlier. These slides drive the presentation you should be careful to get all animations, shape structures and positioning translated correctly to the svelte app. At the end of the conversion process you should check you have `routes/{lesson}/slides/Slide{N}.svelte` representing each entry in this array.

## Wrap policy for inline markup (required)
When converted text contains inline flow markup (`<br>`, `<em>`, `<strong>`, `<u>`, `<sup>`, `<sub>`), set `font.wrap: true` on that Fragment.

- Apply this even when JSON omits `font.wrap`.
- Do not use `wrap: true` as a global/default toggle for all Fragments.
- Keep nowrap for short labels, symbols, and tightly centered single-line elements.

### PowerPoint JSON conflict note
This can appear to conflict with the "exact JSON" rule. Treat it as an explicit rendering guardrail:
- Keep JSON `text` and `layout` exact.
- Keep all coordinates exact.
- Only elevate `font.wrap` to `true` when required to preserve inline markup flow.

## Svelte Route Map file (required)
After creating all routes, create a **Svelte Route Map** markdown file in the same folder as the source JSON file:
- **Path**: `{json_folder}/{Lesson}-Svelte-Route-Map.md` (e.g., `extracted/10-The_Priesthood/Priesthood-Svelte-Route-Map.md`)
- **Purpose**: Documents the mapping between Svelte routes and JSON `linked_slides` / `custom_shows` / `slides[]` entries for future reference and downstream tasks (e.g., scripture refactoring).
- **Format**:
  ```markdown
  # {Lesson} - Route-to-Slide Mapping

  ## Route → JSON Linked Slide
  - route-name/ → Slide N
  - aggregator-route/ → CustomShowProvider (Slides N, M)

  ## Main Slides
  - Slide1.svelte → JSON slides[0] (slide_number N)
  - Slide2.svelte → JSON slides[1] (slide_number M)
  ```
  List every route alphabetically under "Route → JSON Linked Slide". For CustomShowProvider aggregators, list the constituent slide numbers. Under "Main Slides", map each `Slide{N}.svelte` to its `slides[]` entry.

Finally run the test suite to check for errors and fix any issues found.