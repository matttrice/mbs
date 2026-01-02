---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide. The new lesson should include a [main menu](../../src/routes/+page.svelte) item, all slides with animations and objects properly positioned and drillTo references. Aadhere to current standards and existing patterns.
Some slides or custom shows have pngs in the [static/export](../../static/export) folder matching the json name and can be used with [ReferenceOverlay](../../src/lib/components/ReferenceOverlay.svelte) component to compare and ensure the visual fidelity. If the static png exists by name, use it as a ReferenceOverlay to verify the slide layout, animations, and objects match the original PowerPoint slide.

The json file is the output from [hsu-extractor](../../../hsu-extractor/extractor.py). Details of the extracted data are in [hsu-extractor copilot instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs svelte copilot instructions](../copilot-instructions.md).