---
name: scripture-references
description: Use this skill to create or refactor scripture Fragments in drill/content using `ScriptureBlock` based on JSON extractor output. Follow the consolidation and timing rules carefully to ensure consistency and preserve behavior. Caution - most routes do not yet utilize the `ScriptureBlock` so examples are limited, but this is the preferred pattern for all scripture reference content going forward and should be used for all new scripture routes and refactors of existing scripture routes.
---

## Scripture Title Reference Pattern
Treat text as a scripture title when it matches the pattern:
`{Book} {Chapter}:{VerseOrRange}`

Examples:
- `Hebrews 7:24`
- `Romans 6:3-7, 17-18, 22-23`
- `1 Peter 3:1-4`

Possible books include the canonical names used across the project (Old + New Testament).

## JSON Extraction To Svelte: Important Consolidation rule (title + body):
You can use these rules during new route creation or when refactoring existing routes. When refactoring, understand this guideline may have been violated in existing routes, so use the JSON sequence as the source of truth for whether consolidation should occur and whether step props are needed, rather than assuming existing route structure is correct.

When you encounter a JSON "text" property matching a "Scripture Title" pattern and there is not additional text in that property, and it is not a drillto/link you should look at the next sequence step before creating the Fragment to see if the text is a scripture body. If the "Scripture Title" is a link to a drill you should not consolidate, as it is the link to the "Scripture Title" + Body drill content that creates the full scripture reference experience. If the "Scripture Title" is static text and the next sequence step is a scripture body, you should consolidate into one `ScriptureBlock` and Fragment instead of separate title + body Fragments. This is a common pattern in scripture reference slides and consolidating to one `ScriptureBlock` Fragment creates a more cohesive scripture reference experience and allows for better reuse of the `ScriptureBlock` component across the project.

Similarly, depending on your approach, if you encounter scripture body text with no "Scripture Title" this is a signal to look at the previous sequence step before creating the Fragment to see if the previous JSON entry is a "Scripture Title". If so, you should consolidate into one `ScriptureBlock` and Fragment instead of separate title + body Fragments.

Finally, if the scripture title and body are in the same sequence step, you should extract the Scripture Title for use as the `ScriptureBlock` "title" prop and the body text as the `ScriptureBlock` content, as they are logically revealed together.

### Inline title extraction rule
When JSON text begins with a bold scripture reference followed by a line break (e.g., `<strong>Genesis 2:4</strong><br>`), extract the reference text as the ScriptureBlock `title` prop and use the remaining text as the body content. ScriptureBlock handles title styling uniformly—do not preserve `<strong>` or `<br>` for the extracted title portion. Strip the leading `<strong>{Title}</strong><br>` from the body content.

Example JSON entry (note `is_scripture: true` flag):
```json
{
  "text": "<strong>Genesis 2:4</strong><br>This is the account of the heavens...",
  "is_scripture": true
}
```
Becomes:
```svelte
<ScriptureBlock title="Genesis 2:4">
	This is the account of the heavens...
</ScriptureBlock>
```

When a single JSON text block contains **multiple** bold scripture references (e.g., `<strong>Genesis 2:4</strong><br>...text...<strong>Genesis 2:18, 21-23</strong><br>...text...`), extract only the **first** reference as the `title` prop. Keep subsequent references inline as `<strong>` within the body content.

These properties commonly indicate consolidation is necessary: `"shape_name": "Title 1"` or `"shape_type": "placeholder (14)"`. Sometimes they are both present, sometimes only one. The key signal is the scripture title pattern in the text and the absence of additional text in that same JSON entry and not hyperlink, combined with the presence of scripture body text in a next sequence step. If these conditions are met, this is a strong signal that consolidation into one `ScriptureBlock` Fragment is appropriate.
Example JSON sequence indicating consolidation:

```json
        {
          "shape_name": "Title 1",
          "static": true,
          "text": "Hebrews 7:11-12",
          "is_scripture": true,
          "z_index": 0,
          "shape_type": "placeholder (14)",
          "layout": {
            "x": 102,
            "y": 18,
            "width": 756,
            "height": 44,
            "rotation": 0
          }
        },
        {
          "shape_name": "TextBox 2",
          "static": true,
          "text": "Text body here?<sup> 12 </sup>Second verse here.",
          "is_scripture": true,
          "z_index": 1,
          "shape_type": "text_box",
          "layout": {
            "x": 102,
            "y": 71,
            "width": 738,
            "height": 261,
            "rotation": 0
          },
          "font": {
            "wrap": true
          }
        }
```
Converts to one Fragment with one `ScriptureBlock` with title and body content, instead of two separate Fragments (one title, one body) when all are true:
```svelte
	<ScriptureBlock title="Hebrews 7:11-12">
		Text body here?<sup> 12 </sup>Second verse here.
	</ScriptureBlock>
```

# Existing Fragment Refactor Consolidation Rules:
When refactoring existing routes, if you encounter an existing Fragment with text that matches the scripture title pattern and there is not additional text in that Fragment, and it is not a drillto/link, you should look at the next sequence step to see if the text is a scripture body (look for `"is_scripture": true` in the JSON entry). 
If the "Scripture Title" is a link to a drill you should not consolidate, as it is the link to the "Scripture Title" + Body drill content that creates the full scripture reference experience. 
When deciding whether to consolidate existing Fragments, similar rules apply:
- If a Fragment content has a scripture title format and not additional text and the next Fragment in sequence has scripture body text, this is a strong signal to consolidate into one `ScriptureBlock` Fragment.
- If a Fragment has scripture body text and the previous Fragment in sequence has a scripture title,
## Step decision rules:
If the "Scripture Title" is static text and the next sequence step is a scripture body, you should consolidate into one static `ScriptureBlock` Fragment instead of separate title + body Fragments and re-order the steps. This is a common pattern in scripture reference slides and consolidating to one `ScriptureBlock` Fragment creates a more cohesive scripture reference experience and allows for better reuse of the `ScriptureBlock` component across the project.

### JSON timing precedence
JSON is the source of truth for reveal/static behavior. If you are refactoring existing content and have questions, you can trace back to the original JSON sequence in the routes associated `hsu-extractor/extracted` json file to see the intended timing and use that as the basis for your decision on how to set steps and whether to consolidate - these files are large so you will need to search for the relevant text in the sequence to find the corresponding JSON entry and its timing information.

- If title + scripture body are both from `static_content`, consolidate into **one static Fragment** with one `ScriptureBlock` and **no `step` prop**.
- If an existing route currently has `step={1}` (or any step) for text that JSON marks as static, remove the step during refactor.
- Only use `step` when JSON timing requires reveal behavior (`animation_sequence` click/with/after mapping).

Example: `{Book} {Chapter}:{VerseOrRange}` title in `static_content` + next scripture body in `static_content` should become one static Fragment `ScriptureBlock` (not title static + body `step={1}`).
Example: `{Book} {Chapter}:{VerseOrRange}` title in `animation_sequence` step 1 + next scripture body in `animation_sequence` step 2 should become one Fragment with `step={1}` for the title and body together, not separate steps.

## ScriptureBlock Component usage
Use: `src/lib/components/ScriptureBlock.svelte`

- `title` is optional but rarely used without a title. Absences of title is more common in reveal blocks where the title is revealed in an earlier step and the body of multiple verses is revealed in a later step.
- `version` is optional. Use it to indicate the Bible translation (e.g., `"NIV"`, `"NASB95"`, `"KJV"`). The value is free text—not restricted to a fixed list. Common values include: KJV, NKJV, NIV, NIV2020, NASB, NASB95, NASB2020, RSV, NET.
- default scale is `md` (do not pass `scale="md"` unless explicitly needed)
- pass `scale="sm"` or `scale="lg"` based on the scale heuristic below

### Version prop extraction rules
When converting from JSON or refactoring existing routes, extract inline Bible version references to the `version` prop. This standardizes the citation position and styling.

**Inline version indicators to extract:**
- Parenthesized at end of text: `(NIV)`, `(NASB95)`, `(KJV)`, etc.
- Wrapped in `<sub>` or `<sup>` or `<em>` tags: `<sub>(NIV)</sub>`
- Plain text after scripture body: `NASB95` at end of text

**Extraction rule:** Remove the version text (including surrounding parentheses, `<sub>` tags, and leading whitespace) from the ScriptureBlock body content and move it to the `version` prop.

**Separate Fragment version labels:** When a version label exists as its own standalone Fragment (e.g., a Fragment containing just `NIV` positioned at the bottom-right of the slide), remove that Fragment entirely and add the `version` prop to the associated ScriptureBlock(s) instead.

**When the version is part of the title** (e.g., `title="2 Corinthians 4:3-4 NIV"`), leave it in the title as-is — do not extract it to the `version` prop.

**Example — inline extraction:**
```svelte
<!-- Before: version inline in text -->
<ScriptureBlock title="Jeremiah 33:14-18">
	"'The days are coming,' declares the LORD... <sub>(NIV)</sub>
</ScriptureBlock>

<!-- After: version extracted to prop -->
<ScriptureBlock title="Jeremiah 33:14-18" version="NIV">
	"'The days are coming,' declares the LORD...
</ScriptureBlock>
```

**Example — separate Fragment removal:**
```svelte
<!-- Before: version as standalone Fragment -->
<Fragment layout={{ x: 829, y: 486, width: 48, height: 30 }} font={{ font_size: 20 }}>
	NIV
</Fragment>

<!-- After: Fragment removed, version added to ScriptureBlock -->
<ScriptureBlock title="2 Corinthians 3:7-11" version="NIV">
	...scripture text...
</ScriptureBlock>
```

### Scale selection heuristic

Apply this heuristic **regardless of JSON font sizes** — scale choice is a layout concern driven by content density and slide composition, not by the source PowerPoint styling.

**Use `scale="lg"` when ALL of the following are true:**
1. **Low word count**: Total scripture body text across all ScriptureBlocks on the page/content is roughly ≤ 120 words. As a rule of thumb, a single block of ~50 words is a guaranteed `lg`; even 3 blocks of ~50 words each (~150 total) still warrants `lg`.
2. **Scripture-only content**: The page has no SVG shape elements (Arrow, Line, Rect, Arc, Circle, Ellipse, Path, Polygon) that compete for canvas space.
3. **Few scripture blocks**: ≤ 3 ScriptureBlock Fragments on the page.

**Confidence modifiers:**
- **High confidence** for `lg`: Scripture Fragments are the only content on the slide (possibly with small non-scripture labels like version/translation indicators). This covers the vast majority of single-slide drill routes.
- **Lower confidence** for `lg`: Other visual elements (shapes, arrows, lines, images) coexist on the slide. In this case, default to `md` unless the scripture is clearly small and the layout has ample room.

**Use default `md` (omit scale prop) when:**
- Total scripture text is roughly 120–350 words in a single Fragment, or
- SVG shapes / visual elements are present alongside scripture, or
- More than 3 ScriptureBlock Fragments share the page

A single large Fragment (e.g., `layout={{ x: 38, y: 18, width: 884, height: 487 }}`) can comfortably hold ~300 words at `md` scale with room to spare. Reference: `law/romans-3-19-niv` and `law/romans-3-19-nasb` are ~280 words each and represent the approximate threshold for `md`.

**Use `scale="sm"` when:**
- **Multiple Fragments** compete for vertical space on the same page and text overflows at `md`, or
- Total scripture text across all blocks exceeds ~350 words **and** layout space is constrained

`sm` is rarely appropriate for a single large Fragment—even dense single-block passages of 300+ words typically fit at `md` when the Fragment layout is near-full-canvas. Only reach for `sm` when multiple Fragments must share limited canvas space.

**The word-count thresholds are guidelines, not hard rules.** When in doubt, prefer `lg` for scripture-only drill routes with modest text and `md` for everything else. Reserve `sm` for genuine multi-fragment space constraints.

### Preferred patterns

Single consolidated block:
```svelte
<Fragment layout={...} font={{ align: 'left', v_align: 'middle', wrap: true }}>
	<ScriptureBlock title="Hebrews 7:24">
		...scripture text...
	</ScriptureBlock>
</Fragment>
```

With version attribution:
```svelte
<Fragment layout={...} font={{ align: 'left', v_align: 'middle', wrap: true }}>
	<ScriptureBlock title="Hebrews 7:11-19" version="NASB95">
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
- Preserve existing emphasis from JSON text markup (`<strong>`, `<em>`, `<u>`, `<sup>`, `<sub>`, `<br>`)
- If scripture text contains inline flow markup (`<br>`, `<em>`, `<strong>`, `<u>`, `<sup>`, `<sub>`), ensure `font.wrap: true` on the Fragment so inline flow renders reliably.
- If the text contains HTML tags like <strong>,<em> and <u> inline that apply to the entire text, use the Fragment `font` props to apply that formatting instead of the HTML tags while preserving other inline tags like `<sup>` and `<br>` as they are. 
  - If the HTML tags only apply to part of the text, preserve them inline in the `ScriptureBlock` content and remove the overlapping Fragment font props.

### JSON fidelity conflict note
If JSON omits `font.wrap`, still set `wrap: true` when inline flow markup is present. This is a rendering guardrail only; keep JSON `text`, `layout`, and timing values exact.

## Refactor approach: Replace, don't merge
When refactoring existing routes, the JSON is the **replacement source**, not a diff target. Do not compare existing Svelte text against JSON to find differences (dashes, spacing, superscript formatting, etc.). Instead:
1. **Identify** the existing route's scripture Fragment by matching its plain-text content (ignoring HTML) to the JSON entry
2. **Replace** the entire Fragment content with the JSON `text` value wrapped in `ScriptureBlock`
3. **Apply** consolidation and title extraction rules from above

The existing Svelte text may have formatting inconsistencies (wrong dashes, missing spaces, different `<sup>` formatting). These are irrelevant—just use the JSON text as-is.

### Route-to-JSON matching strategy
To efficiently identify which JSON entry corresponds to which existing route Fragment:
- Strip HTML tags from both JSON `text` and existing Svelte content for comparison
- Match on a distinctive substring (first ~20 plain-text words) rather than exact full-text comparison
- Once matched, discard the existing Svelte text entirely and use the JSON `text` value
- Do not spend time analyzing differences between old and new text—the JSON replaces the old text unconditionally

## Identifying scripture entries in JSON
The extractor adds `"is_scripture": true` to JSON entries that contain scripture content. Use this flag to identify which entries should use `ScriptureBlock` — do not rely on text patterns or HTML class markers.

## JSON-to-text fidelity
- Use ONLY exact `text` from JSON
- Never invent, paraphrase, or "fix" wording
- When extracting a scripture title from inline `<strong>Title</strong><br>`, strip those tags from the body but preserve all other markup