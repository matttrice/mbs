---
agent: agent
model: Claude Opus 4.6 (copilot)
description: Refactor existing scripture routes
---
Your goal is to scan lesson [routes](../../src/routes) for the route name provided and, using the JSON provided, refactor scripture reference Fragments so they are consistent and use `ScriptureBlock`.

This refactor applies to scripture routes only (drill/content routes) and does **not** apply to main presentation [slides](../../src/routes/{scope}/slides).

Do not refactor non-scripture explanatory labels, equations, or diagram text.

## Required inputs (from user)
- Route scope (default batch): presentation folder name such as `ark`, `priesthood`, etc. This means process all scripture routes under `src/routes/{scope}`.
- Optional single-route override: full route path such as `src/routes/priesthood/2-samuel-11-1` to process only that route.
- JSON file path (extractor output)

If any required input is missing, ask concise clarifying questions before editing.

## Scripture reference detection
Treat text as a scripture title when it matches the pattern:
`{Book} {Chapter}:{VerseOrRange}`

Examples:
- `Hebrews 7:24`
- `Romans 6:3-7, 17-18, 22-23`
- `1 Peter 3:1-4`

Possible books include the canonical names used across the project (Old + New Testament).

## Scope guardrails
- Do not edit SVG components (`Arrow`, `Arc`, `Line`, `Rect`, etc.)
- Do not change `step`, `exitStep`, `drillTo`, `returnHere`, `autoDrill`, `animate`, `zIndex`, layout coordinates, fill, or line props unless consolidation requires moving equivalent wrappers
- Do not alter non-scripture Fragments
- Preserve original route structure and file names

## Consolidation rule (title + body)
When JSON shows a scripture title shape and an adjacent scripture body shape (commonly title `"shape_type": "placeholder (14)"` or `"shape_name": "Title 1"` followed by scripture body text), consolidate to one Fragment using `ScriptureBlock` **only when all are true**:
1. Same logical scripture block (adjacent in sequence)
2. Compatible timing (both static, or same reveal step)
3. No behavior loss (no lost hyperlink/step semantics)

If timing differs (for example title static but later body reveal), keep separate Fragments and use title-less `ScriptureBlock` for later body reveals.

## JSON timing precedence (important)
JSON is the source of truth for reveal/static behavior.

- If title + scripture body are both from `static_content`, consolidate into **one static Fragment** with one `ScriptureBlock` and **no `step` prop**.
- If an existing route currently has `step={1}` (or any step) for text that JSON marks as static, remove the step during refactor.
- Only use `step` when JSON timing requires reveal behavior (`animation_sequence` click/with/after mapping).

Example: `Ezekiel 18:4` title in `static_content` + next scripture body in `static_content` should become one static `ScriptureBlock` (not title static + body `step={1}`).

## ScriptureBlock usage standard
Use: `src/lib/components/ScriptureBlock.svelte`

- `title` is optional
- default scale is `md` (do not pass `scale="md"` unless explicitly needed)
- pass `scale="sm"` or `scale="lg"` only when content density requires it as overflow is obvious

### Preferred patterns

Single consolidated block:
```svelte
<Fragment layout={...} font={{ align: 'left', v_align: 'middle', wrap: true }}>
	<ScriptureBlock title="Hebrews 7:24">
		...scripture text...
	</ScriptureBlock>
</Fragment>
```

Title-less reveal block (same scripture continued later):
```svelte
<Fragment step={3} layout={...} font={{ align: 'left', v_align: 'middle', wrap: true, italic: true }}>
	<ScriptureBlock>
		...continued scripture text...
	</ScriptureBlock>
</Fragment>
```

## Fragment font rules for scripture
For scripture Fragments:
- Do **not** set `font_size` (let `ScriptureBlock` CSS control size)
- Keep alignment/wrap/italic/bold in `Fragment.font` only when semantically needed
- Preserve existing emphasis from JSON text markup (`<strong>`, `<em>`, `<u>`, `<sup>`, `<sub>`, `<br/>`)

## JSON-to-text fidelity
- Use ONLY exact `text` from JSON
- Never invent, paraphrase, or “fix” wording
- Preserve line breaks and inline markup as provided

## Workflow
1. Identify candidate scripture Fragments in the target route scope
2. Map each candidate to JSON sequence entries
3. Decide: consolidate or keep separate (per consolidation rule)
4. Refactor to `ScriptureBlock`
5. Validate with diagnostics/autofix

## Validation requirements
After edits:
- Run Svelte autofixer for changed Svelte files
- Run diagnostics/errors on changed files
- Fix any introduced issues

## Output/report format (required)
Return a concise summary including:
- Files changed
- Scripture blocks consolidated (title+body)
- Scripture reveal blocks converted to title-less `ScriptureBlock`
- Any ambiguous cases skipped + reason

## References
Extractor JSON details: [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md)

MBS route/component guidance: [mbs copilot-instructions](../copilot-instructions.md)

## Non-negotiable rule
- **Inventing or modifying text content is forbidden.** Use exact JSON `text` values only.