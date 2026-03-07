<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Numbers 13:32-33 title + body -->
<Fragment
	layout={{ x: 42, y: 21, width: 895, height: 199 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="Numbers 13:32-33">
		So they gave out to the sons of Israel a bad report of the land which they had spied out, saying, "The land through which we have gone, in spying it out, is a land that devours its inhabitants;  and <strong>all the people whom we saw in it are men of great size</strong>.<sup>33</sup> "There also we saw the <strong>Nephilim </strong>(the sons of Anak are part of the Nephilim); and we became like grasshoppers in our own sight and so we were in their sight."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Deuteronomy 1:27-28 -->
<Fragment
	step={1}
	layout={{ x: 42, y: 210, width: 884, height: 158 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Deuteronomy 1:27-28">
		You grumbled in your tents and said, "The LORD hates us; so he brought us out of Egypt to deliver us into the hands of the Amorites to destroy us. <sup>28</sup> Where can we go? Our brothers have made us lose heart. They say, 'The people are stronger and taller than we are; the cities are large, with walls up to the sky. We even saw the Anakites there.'
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Deuteronomy 3:10-11 -->
<Fragment
	step={2}
	layout={{ x: 42, y: 365, width: 884, height: 158 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={3}
>
	<ScriptureBlock title="Deuteronomy 3:10-11">
		We took all the towns on the plateau, and all Gilead, and all Bashan as far as Salecah and Edrei, towns of Og's kingdom in Bashan. <sup>11</sup>(Only Og king of Bashan was left of the remnant of the Rephaites. His bed was made of iron and was more than thirteen feet long and six feet wide. It is still in Rabbah of the Ammonites.)
	</ScriptureBlock>
</Fragment>
