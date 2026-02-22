---
agent: agent
model: Claude Opus 4.5 (copilot)
description: Create a new Svelte route from a JSON file
---
Your goal is to create a new svelte [route](../../src/routes) from the provided json file and route name I provide and accurately reproduce and position all Slides, their links to other slides and all contained shapes, arrows, text images and animations on the canvas according to the extracted data. The new lesson should include a [main menu](../../src/routes/+page.svelte) item. This is a large task so plan your approach carefully before beginning the conversion.

Images for `"shape_type": "picture"` are located in the [static/export](../../static/export) folder and identified by the `image` field in the json.

Details explaining the extracted json data is in [hsu-extractor copilot-instructions](../../../hsu-extractor/.github/copilot-instructions.md) and details on the svelte destination structure are in [mbs copilot-instructions](../copilot-instructions.md).

## Your approch to planning the json to svelte conversion:
First analyze the json structure to identify all the custom shows, linked slides and main slides.
Plan to begin with the `custom_shows.{N>1}.slide_numbers` which is a list of ids to the linked_slides object and most dependent in relational model.
- **json: `custom_shows{}`** Defines multi-slide sequences but may contain only a single slide reference. If only a single slide reference, create a "Standalone Drill Page" which is a +page.svelte route with the customshow name. If multiple slides are referenced in custom_shows json, you have 2 options: 
1. Create its associated slides as separate routes using the +page.svelte [CustomShowProvider](../../src/lib/components/CustomShowProvider.svelte) **Content.svelte pattern** to aggregate multiple slide routes to the custom show route. Use this if the slide seems more complex and route might be reused in other custom shows or the main slides.
2. The consolidated approach: create each slide in the same route in Content{N}.svelte files and import them them to the +page.svelte file in the same route. 

With the reamaining linked_slides define individual slide routes:
- **json:`linked_slides{}`** - Individual scripture/drill slides → create`routes/{lesson}/{reference}/+page.svelte` These may have already been crreated with custom_shows Content.svelte. If not, create the standard +page.svelte with <Slide> object and any fragments.

Next process the main top-level slides array:
- **json:`slides[]`** - This array defines the main presentation slides in `routes/{lesson}/slides/Slide{N}.svelte` and are usually the most complex with potentially many fragment elements and drillTo links which maybe a custom show or direct reference depending on what was created earlier. These slides drive the presentation should be carefult to get all animations, shape structures and positioning translated to the svelte app. At the end of the conversion process you should check you have `routes/{lesson}/slides/Slide{N}.svelte` representing each entry in this array.

Finally run the test suite to check for errors and fix any issues found.
