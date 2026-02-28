---
name: scripture-references
description: Use this skill to create scripture Fragments in drill/content using `ScriptureBlock` based on JSON extractor output. Follow the consolidation and timing rules carefully to ensure consistency and preserve behavior.
---

## Scripture reference pattern
Treat text as a scripture title when it matches the pattern:
`{Book} {Chapter}:{VerseOrRange}`

Examples:
- `Hebrews 7:24`
- `Romans 6:3-7, 17-18, 22-23`
- `1 Peter 3:1-4`

Possible books include the canonical names used across the project (Old + New Testament).

## JSON Extraction To Svelte: Important Consolidation rule (title + body)
You must look ahead before creating a Fragment for a scripture title to see if the next JSON entry is the corresponding scripture body text. If so, you may be able to consolidate into one `ScriptureBlock` Fragment instead of separate title + body Fragments.
When JSON shows a scripture title shape and an adjacent scripture body shape (commonly title `"shape_type": "placeholder (14)"` or `"shape_name": "Title 1"` followed by scripture body text), consolidate to one Fragment using `ScriptureBlock` **only when all are true**:
1. Same logical scripture block (adjacent in sequence)
2. Compatible timing (both static, or same reveal step)
3. No behavior loss (no lost hyperlink/step semantics)

If timing differs (for example title static but later body reveal), keep separate Fragments and use title-less `ScriptureBlock` for later body reveals.

## JSON timing precedence
JSON is the source of truth for reveal/static behavior.

- If title + scripture body are both from `static_content`, consolidate into **one static Fragment** with one `ScriptureBlock` and **no `step` prop**.
- If an existing route currently has `step={1}` (or any step) for text that JSON marks as static, remove the step during refactor.
- Only use `step` when JSON timing requires reveal behavior (`animation_sequence` click/with/after mapping).

Example: `Ezekiel 18:4` title in `static_content` + next scripture body in `static_content` should become one static `ScriptureBlock` (not title static + body `step={1}`).

## ScriptureBlock Component usage
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