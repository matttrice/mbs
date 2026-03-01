<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow } from '$lib/components/svg';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 92, y: 18, width: 807, height: 230 }}
	font={{ wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Luke 1:30-36" version="NIV">
		"Do not be afraid, Mary, you have found favor with God. <sup>31</sup> You will be with child and give birth to a son, and you are to give him the name Jesus. <sup>32</sup> He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, <sup>33</sup> and he will reign over the house of Jacob forever; his kingdom will never end." <sup>34</sup> "How will this be," Mary asked the angel, "since I am a virgin?" <sup>35</sup> The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. <sup>36</sup> Even Elizabeth your relative is going to have a child in her old age, and she who was said to be barren is in her sixth month.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Arrow from Mary down (click) + highlighted scripture overlay -->
<Fragment step={1} animate="draw">
	<Arrow from={{ x: 378, y: 83 }} to={{ x: 378, y: 201 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={6} />
</Fragment>

<!-- Step 1: Highlighted scripture overlay (with) -->
<Fragment
	step={1}
	layout={{ x: 93, y: 54, width: 806, height: 194 }}
	fill="var(--bg-ghost)"
	font={{ wrap: true }}
	zIndex={5}
>
	<ScriptureBlock version="NIV">
		"Do not be afraid, <u>Mary</u>, you have found favor with God. <sup>31</sup> You will be with child and give birth to a son, and you are to give him the name Jesus. <sup>32</sup> He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, <sup>33</sup> and he will reign over the house of Jacob forever; his kingdom will never end." <sup>34</sup> "How will this be," Mary asked the angel, "since I am a virgin?" <sup>35</sup> The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. <sup>36</sup> Even <u>Elizabeth your relative </u>is going to have a child in her old age, and she who was said to be barren is in her sixth month.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Luke 1:5 scripture (click) -->
<Fragment
	step={2}
	layout={{ x: 94, y: 246, width: 793, height: 106 }}
	font={{ wrap: true }}
	zIndex={1}
>
	<ScriptureBlock version="NIV">
		<strong>Luke 1:5</strong><br/>In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife Elizabeth was also a descendant of Aaron.
	</ScriptureBlock>
</Fragment>

<!-- Step 3: Arrow from Elizabeth down (click) -->
<Fragment step={3} animate="draw">
	<Arrow from={{ x: 632, y: 216 }} to={{ x: 632, y: 320 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={7} />
</Fragment>

<!-- Step 3: Highlighted Luke 1:5 overlay (with) -->
<Fragment
	step={3}
	layout={{ x: 94, y: 246, width: 793, height: 106 }}
	fill="var(--bg-ghost)"
	font={{ wrap: true }}
	zIndex={4}
>
	<ScriptureBlock version="NIV">
		<strong>Luke 1:5</strong><br/>In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife <u>Elizabeth was also a descendant of Aaron</u>.
	</ScriptureBlock>
</Fragment>

<!-- Step 4: Matthew 1:1, 16 scripture (click) -->
<Fragment
	step={4}
	layout={{ x: 98, y: 336, width: 742, height: 161 }}
	font={{ v_align: 'top', wrap: true, color: 'var(--text-level-0)' }}
	zIndex={8}
>
	<ScriptureBlock>
		<strong>Matthew 1:1, 16</strong><br/>The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham: <sup>2</sup>Abraham was the father of Isaac, Isaac the father of Jacob, and Jacob the father of Judah and his brothers. <sup>3 </sup>Judah was the father of Perez and Zerah by Tamar, Perez... Obed the father of Jesse,<sup>6 </sup>and Jesse the father of King David...<br/><sup>16</sup> Jacob was the father of Joseph the husband of Mary, by whom Jesus was born, who is called the Messiah.
	</ScriptureBlock>
</Fragment>

<!-- Step 5: Arrow from David to Jesus (click) -->
<Fragment step={5} animate="draw">
	<Arrow from={{ x: 513, y: 389 }} to={{ x: 513, y: 447 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 5.1: Arrow from Mary to Jesus (after) -->
<Fragment step={5.1} animate="draw">
	<Arrow from={{ x: 450, y: 448 }} to={{ x: 450, y: 453 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={9} />
</Fragment>

<!-- Step 6: Conclusion (click) -->
<Fragment
	step={6}
	layout={{ x: 84, y: 494, width: 764, height: 34 }}
	font={{ wrap: true, align: 'center', font_size: 21.6, color: 'var(--text-level-3)' }}
	line={{ width: 3 }}
	zIndex={3}
>
	Jesus originates from the tribe of KINGS and the tribe of PRIESTS!
</Fragment>
