<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>
<ReferenceOverlay src="/export/10-The_Priesthood/Slide16.png" />

<!-- Title -->
<Fragment
	layout={{ x: 91, y: 18, width: 778, height: 40 }}
	font={{ font_size: 33.6, bold: true, align: 'left' }}
>
	Luke 1:30-36
</Fragment>

<!-- Scripture content (static) -->
<Fragment
	layout={{ x: 93, y: 54, width: 806, height: 196 }}
	font={{ font_size: 19.2, wrap: true }}
>
	"Do not be afraid, Mary, you have found favor with God. 31 You will be with child and give birth to a son, and you are to give him the name Jesus. 32 He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, 33 and he will reign over the house of Jacob forever; his kingdom will never end." 34 "How will this be," Mary asked the angel, "since I am a virgin?" 35 The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. 36 Even Elizabeth your relative is going to have a child in her old age, and she who was said to be barren is in her sixth month. (NIV)
</Fragment>

<!-- Step 1: Arrow pointing to "throne of his father David" -->
<Fragment step={1} animate="draw">
	<Arrow from={{ x: 293, y: 83 }} to={{ x: 466, y: 201 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={6} />
</Fragment>

<!-- Step 1: Highlight scripture - with previous -->
<Fragment
	step={1}
	layout={{ x: 93, y: 54, width: 806, height: 196 }}
	font={{ font_size: 19.2, wrap: true }}
	fill="var(--bg-ghost)"
>
	"Do not be afraid, Mary, you have found favor with God. 31 You will be with child and give birth to a son, and you are to give him the name Jesus. 32 He will be great and will be called the Son of the Most High. The Lord God will give him the throne of his father David, 33 and he will reign over the house of Jacob forever; his kingdom will never end." 34 "How will this be," Mary asked the angel, "since I am a virgin?" 35 The angel answered, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the holy one to be born will be called the Son of God. 36 Even Elizabeth your relative is going to have a child in her old age, and she who was said to be barren is in her sixth month. (NIV)
</Fragment>

<!-- Step 2: Luke 1:5 -->
<Fragment
	step={2}
	layout={{ x: 94, y: 246, width: 793, height: 97 }}
	font={{ font_size: 33.6, bold: true, wrap: true }}
>
	Luke 1:5<br />In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife Elizabeth was also a descendant of Aaron. (NIV)
</Fragment>

<!-- Step 3: Arrow to Elizabeth -->
<Fragment step={3} animate="draw">
	<Arrow from={{ x: 610, y: 216 }} to={{ x: 653, y: 320 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={7} />
</Fragment>

<!-- Step 3: Highlight Luke 1:5 - with previous -->
<Fragment
	step={3}
	layout={{ x: 94, y: 246, width: 793, height: 97 }}
	font={{ font_size: 33.6, bold: true, wrap: true }}
	fill="var(--bg-ghost)"
>
	Luke 1:5<br />In the time of Herod king of Judea there was a priest named Zechariah, who belonged to the priestly division of Abijah; his wife Elizabeth was also a descendant of Aaron. (NIV)
</Fragment>

<!-- Step 4: Matthew 1:1-16 -->
<Fragment
	step={4}
	layout={{ x: 98, y: 336, width: 742, height: 164 }}
	font={{ font_size: 28.8, bold: true, color: 'var(--text-level-0)', v_align: 'top', wrap: true }}
>
	Matthew 1:1, 16<br />The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham: 2Abraham was the father of Isaac, Isaac the father of Jacob, and Jacob the father of Judah and his brothers. 3 Judah was the father of Perez and Zerah by Tamar, Perez… Obed the father of Jesse,6 and Jesse the father of King David…16 Jacob was the father of Joseph the husband of Mary, by whom Jesus was born, who is called the Messiah.
</Fragment>

<!-- Step 5: Arrow to David -->
<Fragment step={5} animate="draw">
	<Arrow from={{ x: 430, y: 389 }} to={{ x: 596, y: 447 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 5.1: Arrow to Mary -->
<Fragment step={5.1} animate="draw">
	<Arrow from={{ x: 430, y: 449 }} to={{ x: 470, y: 454 }} stroke={{ width: 6, color: 'var(--stroke-level-3)' }} zIndex={9} />
</Fragment>

<!-- Step 6: Summary -->
<Fragment
	step={6}
	layout={{ x: 84, y: 494, width: 763, height: 36 }}
	font={{ font_size: 21.6, color: 'var(--text-level-3)', wrap: true, align: 'center' }}
>
	Jesus originates from the tribe of KINGS and the tribe of PRIESTS!
</Fragment>
