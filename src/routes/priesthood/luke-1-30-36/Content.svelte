<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Line } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Title -->
<Fragment
	layout={{ x: 92, y: 18, width: 778, height: 40 }}
	font={{ font_size: 33.6, bold: true, align: 'left' }}
>
	Luke 1:30-36
</Fragment>

<!-- Base scripture (static, behind overlay) -->
<Fragment
	layout={{ x: 93, y: 54, width: 806, height: 194 }}
	font={{ font_size: 19.2, wrap: true }}
>
	"Do not be afraid, Mary, you have found favor with God. <sup>31</sup> You will be with child and give birth to a son, and you are to give him the name Jesus. <sup>32</sup> He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, <sup>33</sup> and he will reign over the house of Jacob forever; his kingdom will never end." <sup>34</sup> "How will this be," Mary asked the angel, "since I am a virgin?" <sup>35</sup> The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. <sup>36</sup> Even Elizabeth your relative is going to have a child in her old age, and she who was said to be barren is in her sixth month. <sub>(NIV)</sub>
</Fragment>

<!-- Step 1: Arrow from Mary to Elizabeth + highlighted scripture overlay -->
<Fragment step={1}>
	<Arrow from={{ x: 292, y: 83 }} to={{ x: 465, y: 201 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={7} />
</Fragment>

<Fragment
	step={1}
	layout={{ x: 93, y: 54, width: 806, height: 194 }}
	font={{ font_size: 19.2, wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={6}
>
	"Do not be afraid, <u>Mary</u>, you have found favor with God. <sup>31</sup> You will be with child and give birth to a son, and you are to give him the name Jesus. <sup>32</sup> He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, <sup>33</sup> and he will reign over the house of Jacob forever; his kingdom will never end." <sup>34</sup> "How will this be," Mary asked the angel, "since I am a virgin?" <sup>35</sup> The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. <sup>36</sup> Even <u>Elizabeth your relative</u> is going to have a child in her old age, and she who was said to be barren is in her sixth month. <sub>(NIV)</sub>
</Fragment>

<!-- Step 2: Luke 1:5 -->
<Fragment
	step={2}
	layout={{ x: 94, y: 246, width: 793, height: 106 }}
	font={{ font_size: 43, bold: true, wrap: true }}
	zIndex={2}
>
	<strong>Luke 1:5</strong><br />
	In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife Elizabeth was also a descendant of Aaron. <sub>(NIV)</sub>
</Fragment>

<!-- Step 3: Arrow to Elizabeth + highlighted overlay -->
<Fragment step={3}>
	<Arrow from={{ x: 632, y: 216 }} to={{ x: 632, y: 320 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={8} />
</Fragment>

<Fragment
	step={3}
	layout={{ x: 94, y: 246, width: 793, height: 106 }}
	font={{ font_size: 43, bold: true, wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={5}
>
	<strong>Luke 1:5</strong><br />
	In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife <u>Elizabeth was also a descendant of Aaron</u>. <sub>(NIV)</sub>
</Fragment>

<!-- Step 4: Matthew 1 genealogy -->
<Fragment
	step={4}
	layout={{ x: 98, y: 336, width: 742, height: 161 }}
	font={{ font_size: 28.8, bold: true, v_align: 'top', wrap: true, color: 'var(--text-level-0)' }}
	zIndex={9}
>
	<strong>Matthew 1:1, 16</strong><br />
	The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham: <sup>2</sup>Abraham was the father of Isaac, Isaac the father of Jacob, and Jacob the father of Judah and his brothers. <sup>3</sup>Judah was the father of Perez and Zerah by Tamar, Perez… Obed the father of Jesse,<sup>6</sup>and Jesse the father of King David…<br />
	<sup>16</sup> Jacob was the father of Joseph the husband of Mary, by whom Jesus was born, who is called the Messiah.
</Fragment>

<!-- Step 5: Arrow connectors -->
<Fragment step={5}>
	<Arrow from={{ x: 430, y: 389 }} to={{ x: 596, y: 448 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={11} />
</Fragment>

<Fragment step={5.1}>
	<Arrow from={{ x: 430, y: 448 }} to={{ x: 470, y: 453 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 6: Conclusion -->
<Fragment
	step={6}
	layout={{ x: 84, y: 494, width: 764, height: 34 }}
	font={{ font_size: 21.6, align: 'center', color: 'var(--text-level-3)', wrap: true }}
	line={{ width: 3 }}
	zIndex={4}
>
	Jesus originates from the tribe of KINGS and the tribe of PRIESTS!
</Fragment>
