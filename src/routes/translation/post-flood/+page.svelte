<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 44, y: 21, width: 354, height: 39 }}
		font={{ font_name: 'Arial', font_size: 36.7, bold: true }}
		zIndex={0}
	>
		Numbers 13:32-33
	</Fragment>

	<!-- Static: Numbers 13:32-33 scripture -->
	<Fragment
		layout={{ x: 42, y: 58, width: 895, height: 162 }}
		font={{ wrap: true, font_size: 23.3 }}
		zIndex={1}
	>
		So they gave out to the sons of Israel a bad report of the land which they had spied out, saying, "The land through which we have gone, in spying it out, is a land that devours its inhabitants;  and all the people whom we saw in it are men of great size. 33 "There also we saw the Nephilim (the sons of Anak are part of the Nephilim); and we became like grasshoppers in our own sight and so we were in their sight."
	</Fragment>

	<!-- Step 1: Deuteronomy 1:27-28 -->
	<Fragment
		step={1}
		layout={{ x: 42, y: 210, width: 884, height: 158 }}
		font={{ wrap: true, font_size: 36.7, bold: true }}
		zIndex={2}
		animate="fade"
	>
		Deuteronomy 1:27-28 You grumbled in your tents and said, "The LORD hates us; so he brought us out of Egypt to deliver us into the hands of the Amorites to destroy us. 28 Where can we go? Our brothers have made us lose heart. They say, 'The people are stronger and taller than we are; the cities are large, with walls up to the sky. We even saw the Anakites there.'"
	</Fragment>

	<!-- Step 2: Deuteronomy 3:10-11 -->
	<Fragment
		step={2}
		drillTo="translation/post-flood/amos-2-9"
		layout={{ x: 42, y: 365, width: 884, height: 158 }}
		font={{ wrap: true, font_size: 36.7, bold: true }}
		zIndex={3}
		animate="fade"
	>
		Deuteronomy 3:10-11 We took all the towns on the plateau, and all Gilead, and all Bashan as far as Salecah and Edrei, towns of Og's kingdom in Bashan. 11 (Only Og king of Bashan was left of the remnant of the Rephaites. His bed was made of iron and was more than thirteen feet long and six feet wide. It is still in Rabbah of the Ammonites.)
	</Fragment>
</Slide>
