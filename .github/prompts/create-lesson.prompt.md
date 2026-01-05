---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide and accurately reproduce and position all Slides, their links to other slides and all contained shapes, images, arrows, text and animations on the canvas according to the extracted data. The new lesson should include a [main menu](../../src/routes/+page.svelte) item, all slides and their drill-to/custom show equivalents. Aadhere to current standards and existing patterns.

Images for `"shape_type": "picture"` are located in the [static/export](../../static/export) folder and identified by the `image` field in the json.

Details explaining the json extracted data are in [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs copilot-instructions](../copilot-instructions.md).

## JSON Structure Summary

- **`slides[]`** - Main presentation slides → create `routes/{lesson}/slides/Slide{N}.svelte`
- **`linked_slides{}`** - Individual scripture/drill slides → create `routes/{lesson}/{reference}/Content.svelte` and `+page.svelte`
- **`custom_shows{}`** - Multi-slide sequences → use [CustomShowProvider](../../src/lib/components/CustomShowProvider.svelte) to aggregate Content components

For multi-slide custom shows, follow the **Content.svelte pattern** and **flat route structure** documented in copilot-instructions.md.