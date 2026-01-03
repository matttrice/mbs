---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide and accurately reproduce and position all the shapes, arrows, text and animations on the canvas according to the extracted data. The new lesson should include a [main menu](../../src/routes/+page.svelte) item, all slides and their drill-to/custom show equivalents. Aadhere to current standards and existing patterns.
Some slides have pngs in the [static/export](../../static/export) folder matching the slide_file name from the extracted json and can be used with [ReferenceOverlay](../../src/lib/components/ReferenceOverlay.svelte) for the slide.

The json file is the output from [hsu-extractor](../../../hsu-extractor/extractor.py). Details of the extracted data are in [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs svelte copilot-instructions](../copilot-instructions.md).