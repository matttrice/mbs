---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide. Reference images for only the main animated diagram slides are in the corresponding [static/export](../../static/export) folder matching the json name and are used to ensure the visual fidelity of the rendered models. The new lesson should include a new [main menu](../../src/routes/+page.svelte) item, all slides, animations and drill references and adhere to current standards.

The json file is the output from [hsu-extractor](../../../hsu-extractor/extractor.py). Details of the extracted data are in [hsu-extractor copilot instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs svelte copilot instructions](../copilot-instructions.md).

When you first examine the extracted json, if you find any animation sequence shape or extracted data that does not have coordinates you will need to inspect and edit the extractor.py file to include it and re-run the extraction process to ensure all data has the necessary coordinates. The original pptx files are in the [hsu-pptx](../../../hsu-pptx) folder and named according to the provided json file. Missing data maybe an image or motion animation which we have not yet implemented. The [svelete components](../../src/lib/components/svg) should be used to render the extracted shapes and animations but additional features such as motion and hide may need to be added to complete the task. Be sure to inspect the existing codebase for examples of how these features are to be implemented.