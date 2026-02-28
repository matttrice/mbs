---
agent: agent
description: Refactor existing scripture routes
---
Your goal is to scan lesson [routes](../../src/routes) for the route name provided and refactor scripture reference Fragments so they are consistent and use svelte `ScriptureBlock` component combined with newly extracted JSON text that includes HTML tags. Use the [scripture-references SKILL.md](../skills/scripture-references/SKILL.md) skill to process the updated JSON file provided for reference and should be used to help guide your refactor decisions.

This refactor applies to scripture routes only (`src/routes/{scope}`) and does **not** apply to main presentation slides routes under `src/routes/{scope}/slides`.

## Required inputs (from user)
- Route scope (default batch): presentation folder name such as `ark`, `priesthood`, etc. This means process all scripture routes under `src/routes/{scope}`.
- Optional single-route override: full route path such as `src/routes/priesthood/2-samuel-11-1` to process only that route.
- JSON file path (extractor output)

If any required input is missing, ask concise clarifying questions before editing.

## Scope guardrails
- Do not edit SVG components (`Arrow`, `Arc`, `Line`, `Rect`, etc.)
- Do not change `step`, `exitStep`, `drillTo`, `returnHere`, `autoDrill`, `animate`, `zIndex`, layout coordinates, fill, or line props unless consolidation requires moving equivalent wrappers
- Do not alter non-scripture Fragments
- Preserve original route structure and file names

## Workflow
1. **Check for existing Route Map**: Look for a `{Lesson}-Svelte-Route-Map.md` file in the JSON folder. If one exists, use it to skip or accelerate the route-to-JSON matching step — the mappings are already established.
2. **Gather JSON entries**: Read `linked_slides` and relevant `slides` from the JSON for all scripture drill routes in scope
3. **Match routes to JSON**: For each scripture route, match existing Fragment content to a JSON entry by comparing plain-text substrings (strip HTML from both sides). Do not analyze text differences—once matched, the JSON replaces the old content entirely.
4. **Save/update Svelte Route Map**: Create or update the route map file (see below).
5. **Apply consolidation rules**: Per SKILL.md — consolidate title + body, extract inline titles, determine static vs step
6. **Replace content**: Swap existing Fragment content with JSON `text` wrapped in `ScriptureBlock`. Use JSON `layout`, `font`, and `z_index` values for the Fragment props.
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
- **JSON replaces existing Svelte text unconditionally.** Do not compare or merge — the JSON is the new source of truth. Existing route text is only used for matching purposes to identify the correct JSON entry.