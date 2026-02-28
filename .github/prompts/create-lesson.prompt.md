---
agent: agent
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide and accurately reproduce and position all Slides, their links to other slides and all contained shapes, arrows, text images and animations on the canvas according to the extracted data. The new lesson should include a [main menu](../../src/routes/+page.svelte) item. This is a large task so plan your approach carefully before beginning the conversion.

Details explaining the extracted json data is in [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs copilot-instructions](../copilot-instructions.md).

#### Scripture Reference Routes
When you encounter scripture reference slides (drillto/custom shows), use the [scripture-references SKILL.md](../skills/scripture-references/SKILL.md) skill to convert them to the appropriate structure and `ScriptureBlock` usage in drillto routes. You will need to plan ahead for this for each drill during the json to svelte conversion for fragments as it has key consolidation instructions for sequences. This will ensure consistency across all scripture reference content in the project.

## Your approach to planning the json to svelte conversion:
The last step for "main top-level slides" is the most complex and important, so you should plan your approach to it carefully before beginning the conversion. The key is to understand the json structure and how to map it to the svelte route structure before you begin creating files and writing code. This will allow you to create a clear plan for how to approach the conversion and ensure you don't miss any important details or relationships in the json data.

First analyze the json structure to identify all the custom shows, linked slides and main slides.
Use `slides[]` as the authoritative top-level slide set and `linked_slides{}` as drillTo/custom show content.
Do not move slides between these sets based on hyperlink inference; preserve extractor classification exactly.

**Check for existing Route Map**: Before building the plan from scratch, look for a `{Lesson}-Svelte-Route-Map.md` file in the JSON folder. If one exists from a prior run, use it to accelerate planning — the route-to-slide mappings and CustomShowProvider groupings are already established.

Plan to begin with the `custom_shows.{N>1}.slide_numbers` which is a list of `slide_number` references into `linked_slides{}` and is the most dependent relational mapping.
- **json: `custom_shows{}`** Defines multi-slide sequences but may contain only a single slide reference. If only a single slide reference is in the custom_shows, create a "Standalone Drill Page" which is a single +page.svelte with the <Slide> and Fragments within and drillTo it - this is most common. 
If multiple slides are referenced in custom_shows json, you have 2 options: 
1. If the slides can be references to other routes, you can use +page.svelte with [CustomShowProvider](../../src/lib/components/CustomShowProvider.svelte) **Content.svelte pattern** to aggregate multiple slide routes to the custom show route and create other content with them as needed. This is the most flexible and reusable approach but requires more setup and planning.
2. The consolidated approach: create each slide in the same route in Content{N}.svelte files and import them them to the +page.svelte file in the same route. 
3. **Legacy fallback when `custom_shows` is empty** If `custom_shows` is empty (or missing), treat the deck as a legacy hyperlink-chain drill model:
  - Use `hyperlink.type: "slide"` relationships to reconstruct drill chains (slide → slide → ... → return-to-main).
  - Treat `linked_slides` as drill content and `slides[]` as the top-level presentation slides.
  - Classification is authoritative from extraction: Hidden slides become `linked_slides`, non-hidden slides become `slides[]`.

With the remaining linked_slides define individual slide routes:
- **json:`linked_slides{}`** - Individual scripture/drill slides → create`routes/{lesson}/{reference}/+page.svelte` These may have already been created with custom_shows Content.svelte. If not, create the standard +page.svelte with <Slide> object and any fragments.

Next process the main top-level slides array:
- **json:`slides[]`** - This array defines the main presentation slides in `routes/{lesson}/slides/Slide{N}.svelte` and are the most complex (unless its the The End slide) with potentially many fragment elements and drillTo links which maybe a custom show or direct reference depending on what was created earlier. These slides drive the presentation you should be careful to get all animations, shape structures and positioning translated correctly to the svelte app. At the end of the conversion process you should check you have `routes/{lesson}/slides/Slide{N}.svelte` representing each entry in this array.

Finally run the test suite to check for errors and fix any issues found.

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
