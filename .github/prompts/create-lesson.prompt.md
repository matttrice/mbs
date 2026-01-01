---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide. Reference images for only the main animated diagram slides are in the corresponding [static/export](../../static/export) folder matching the json name and are used to ensure the visual fidelity of the rendered models. The new lesson should include a new [main menu](../../src/routes/+page.svelte) item, all slides, animations and drill references and adhere to current standards and existing patterns.

The json file is the output from [hsu-extractor](../../../hsu-extractor/extractor.py). Details of the extracted data are in [hsu-extractor copilot instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs svelte copilot instructions](../copilot-instructions.md).