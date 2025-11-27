# Goal
Convert set of 17+ powerpoint pptx files to a modern, maintainable web based solution to enable teaching biblical patterns by building conceptual models. 
It's desired to maintain the powerpoint equivalents in code, keeping in mind the diagrams are simple over lapping shapes, pointers and arrows that hide and reveal in sequence, including nested sequences. Although diagrams are simple, css code is difficult to reproduce and we can leverage 3rd party libraries as recommended. 

# Absolute Feature Requirements
These features need to be reusable and are central to success.
- The Powerpoint approach incrementally builds visual diagrams using animation to reveal shapes with clickable links that load "Custom Shows" which are subsets of slides that show and give the option to "Show and Return".
The new approach must be capable of returning to the previous point at which the custom show was loaded.
- Incrementally build visual diagrams. Any shape or text can be a link to a custom show that shows and returns to where it left off. 

# Tried 3rd Library Limitions
- Revealjs: does not have Custom Show requirement natively - it has a concept of fragments, but does not return to the point in animation it left from. The hide and show functionality does work. I didn't care for the verticle vs horizontal sequences. 
- Svelte: the hsu-svelte folder is svelte POC that proved the drill functionality but proved to be quite a bit of customization.
- Slidev: The hsu-slidev folder is a slidev POC that proved the "Custom show" feature of powerpoint was not built in and difficult to customize robustly. 
- Prezi or othe SVG solutions seem too complicated as this teaching tool is more linear and for an audience with presenter guiding. 

# PowerPoint Conversion
The powerpoint files (pptx) in hsu-pptx are the source of truth containing all the slides and animations we want to convert.
Ideally we can build some automation around this which is what the hsu-extractor attempted with some success concerning the extraction of text to sequence for use in hsu-slidev's v-click feature.  

# Technology
Open to pursue any route but the code needs to be very maintainable and able to build new slides with all the Custom Show features rapidly. Python is great, but we want to be sure all functionalty is modern. Typescript is okay if it proves to have a better ecosystem. 