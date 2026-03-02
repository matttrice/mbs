---
agent: agent
description: Refactor existing scripture routes
---
Your goal is to scan lesson [routes](../../src/routes) for the route name provided and refactor scripture reference Fragments so they are consistent and use svelte `ScriptureBlock` component combined with newly extracted JSON text that includes HTML tags. Use the [scripture-references SKILL.md](../skills/scripture-references/SKILL.md) skill to process the updated JSON file provided for reference and should be used to help guide your refactor decisions.

This refactor applies to scripture routes only (`src/routes/{scope}`) and does **not** apply to main presentation slide components under `src/routes/{scope}/slides/` folders.

## Required inputs (from user)
- Route scope: presentation folder name such as `ark`, `priesthood`, etc.
- JSON file path (extractor output)
- Scope modifier (optional, one of):
  - **All routes** (default): Process every scripture route under `src/routes/{scope}` — including CustomShowProvider aggregator routes that contain scripture references. Excludes only the `slides/` folder.
  - **Specific route**: A single route path such as `src/routes/priesthood/2-samuel-11-1` to process only that route.
  - **Exclude list**: All routes except those explicitly listed (e.g., "all except acts-2-37/ and romans-8-1/").

When no scope modifier is given, process **all** routes (excluding `slides/`). Do not independently decide to skip routes — including CustomShowProvider content routes that contain scripture references or drill links to scripture.

If any required input is missing, ask concise clarifying questions before editing.

## Route name guardrails
- If you change a route name, you must change all Fragments in the presentation that drillTo it to match the new route name. This is critical to maintain drillTo integrity and must be applied to the required output Svelte Route Map file described below.

## Workflow
1. **Check for existing Route Map**: Look for a `{Lesson}-Svelte-Route-Map.md` file in the JSON folder. If one exists, use it to skip or accelerate the route-to-JSON matching step — the mappings are already established. Otherwise, you will need to do the matching yourself as described in step 2 and build the route map which will be an expected (required) output.
2. **Gather JSON entries**: Read `linked_slides` and relevant `slides` from the JSON for all scripture drill routes in scope
3. **Match routes to JSON**: For each scripture route, match existing Fragment content to a JSON entry by comparing plain-text substrings (strip HTML from both sides). Do not analyze text differences—once matched, the JSON replaces the old content entirely.
4. **Save/update Svelte Route Map**: Create or update the route map file (see below).
5. **Apply consolidation rules**: Per SKILL.md — consolidate title + body, extract inline titles, determine static vs step
6. **Replace content**: For each matched route, replace the **entire** scripture text block with the JSON `text` value. Do not diff or patch individual characters — overwrite the whole block. Use JSON `layout`, `font`, and `z_index` values for the Fragment props.
7. **Validate**: Run diagnostics/autofix on changed files

## Validation requirements
After edits:
- Run Svelte autofixer for changed Svelte files
- Run diagnostics/errors on changed files
- Fix any introduced issues

## Svelte Route Map file (required)
After matching routes to JSON entries (step 2), create or update a **Svelte Route Map** markdown file in the same folder as the source JSON file:
- **Path**: `{json_folder}/{Lesson}-Svelte-Route-Map.md` (e.g., `extracted/10-The_Priesthood/Priesthood-Svelte-Route-Map.md`)
- **Purpose**: Documents the mapping between Svelte routes and JSON `linked_slides` / `custom_shows` entries for future reference and downstream tasks.
- **If the file already exists**, update it to reflect the current state (add new routes, correct changed mappings).
- **Format**:
  ```markdown
  # {Lesson} - Route-to-Slide Mapping

  ## Route → JSON Linked Slide
  - route-name/ → Slide N
  - aggregator-route/ → CustomShowProvider (Slides N, M)
  ```
  List every route in scope alphabetically. For CustomShowProvider aggregators, list the constituent slide numbers.

## Output/report format (required)
Return a concise summary including:
- Files changed
- Scripture blocks consolidated (title+body)
- Scripture reveal blocks converted to title-less `ScriptureBlock`
- Any ambiguous cases skipped + reason

## References
Extractor JSON details: [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md)
MBS Coding guidance: [mbs copilot-instructions](../copilot-instructions.md)

## Non-negotiable rules
- **Inventing or modifying text content is forbidden.** Use exact JSON `text` values only.
- **JSON replaces existing Svelte text unconditionally.** Do not compare, diff, or merge — the JSON is the new source of truth. Existing route text is only used for matching purposes to identify the correct JSON entry. Once matched, overwrite the entire scripture text block wholesale. Do not catalog or report character-level differences (e.g., `&nbsp;` vs space, em dash vs `--`); those details are irrelevant when doing a full replacement.