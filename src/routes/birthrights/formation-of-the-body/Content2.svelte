<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 103, y: 9, width: 756, height: 44 }}
	font={{ font_size: 30.8, bold: true }}
>
	Genesis 2:7
</Fragment>

<!-- Static: Genesis 2:7 text -->
<Fragment
	layout={{ x: 102, y: 45, width: 776, height: 60 }}
	font={{ font_size: 21.7, wrap: true }}
>
	7 Then the LORD God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being.
</Fragment>

<!-- Step 1: Genesis 2:20-24 text -->
<Fragment
	step={1}
	layout={{ x: 115, y: 146, width: 737, height: 402 }}
	font={{ font_size: 21.7, wrap: true }}
>
	20 So the man gave names to all the livestock, the birds of the air and all the beasts of the field. But for Adam no suitable helper was found. 21 So the LORD God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man's ribs and closed up the place with flesh. 22 Then the LORD God made a woman from the rib he had taken out of the man, and he brought her to the man. 23 The man said, "This is now bone of my bones and flesh of my flesh; she shall be called 'woman,' for she was taken out of man." 24 For this reason a man will leave his father and mother and be united to his wife, and they will become one flesh.
</Fragment>

<!-- Step 1: Genesis 2:20 header -->
<Fragment
	step={1}
	layout={{ x: 102, y: 114, width: 231, height: 36 }}
	font={{ font_size: 30.8, bold: true, align: 'center', v_align: 'middle' }}
>
	Genesis 2:20
</Fragment>
