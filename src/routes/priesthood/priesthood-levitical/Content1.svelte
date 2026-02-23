<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 92, y: 10, width: 778, height: 40 }}
	font={{ font_size: 36, bold: true, color: 'var(--text-ghost)' }}
	zIndex={3}
>
	Structure of Levitical Priesthood
</Fragment>

<!-- Step 1: Abraham + Jacob (Israel) -->
<Fragment
	step={1}
	layout={{ x: 64, y: 54, width: 147, height: 39 }}
	font={{ font_size: 21.6, bold: true, v_align: 'middle', wrap: true }}
	zIndex={10}
>
	<strong>Abraham</strong>
</Fragment>

<Fragment
	step={1}
	layout={{ x: 186, y: 56, width: 155, height: 34 }}
	font={{ font_size: 21.6, bold: true, align: 'center', color: 'var(--text-ghost)' }}
	zIndex={1}
>
	<strong>Jacob (Israel)</strong>
</Fragment>

<!-- Step 2: 12 sons/12 tribes -->
<Fragment
	step={2}
	layout={{ x: 326, y: 56, width: 313, height: 34 }}
	font={{ font_size: 21.6, bold: true, align: 'center', color: 'var(--text-ghost)', wrap: true }}
	zIndex={4}
>
	<strong>12 sons12 tribes (Israel)</strong>
</Fragment>

<!-- Step 3: Levi -->
<Fragment
	step={3}
	layout={{ x: 626, y: 56, width: 82, height: 34 }}
	font={{ font_size: 21.6, bold: true, align: 'center', color: 'var(--text-ghost)' }}
	zIndex={6}
>
	<strong>Levi</strong>
</Fragment>

<!-- Step 4: Aaron (order of) -->
<Fragment
	step={4}
	layout={{ x: 694, y: 56, width: 204, height: 34 }}
	font={{ font_size: 21.6, bold: true, align: 'center', color: 'var(--text-ghost)' }}
	zIndex={5}
>
	<strong>Aaron (order of)</strong>
</Fragment>

<!-- Step 5: Responsible for animal sacrifice + Leviticus scripture -->
<Fragment
	step={5}
	layout={{ x: 158, y: 90, width: 628, height: 42 }}
	font={{ font_size: 28.8, bold: true, align: 'center', color: 'var(--text-ghost)', wrap: true }}
	zIndex={2}
>
	<strong>Responsible for a system of animal sacrifice</strong>
</Fragment>

<Fragment
	step={5}
	layout={{ x: 70, y: 129, width: 821, height: 278 }}
	font={{ font_size: 28.8, bold: true, v_align: 'middle', wrap: true }}
	zIndex={9}
>
	<strong>Leviticus 9:7-8,15</strong><br />
	Moses said to Aaron, "Come to the altar and sacrifice your sin offering and your burnt offering and make atonement for yourself and the people; sacrifice the offering that is for the people and make atonement for them, as the LORD has commanded." <sup>8</sup> So Aaron came to the altar and slaughtered the calf as a sin offering for himself…<br />
	<sup>15</sup> Aaron then brought the offering that was for the people. He took the goat for the people's sin offering and slaughtered it and offered it for a sin offering as he did with the first one.
</Fragment>

<!-- Step 6: Hebrews 10:3-4 + Copy/Shadow -->
<Fragment
	step={6}
	layout={{ x: 69, y: 406, width: 836, height: 100 }}
	font={{ font_size: 28.8, bold: true, color: 'var(--text-ghost)', wrap: true }}
>
	<strong>Hebrews10:3-4</strong>:<br />
	But those sacrifices are an annual reminder of sins, <sup>4</sup> because it is <strong><u>impossible</u></strong> for the blood of bulls and goats to take away sins.
</Fragment>

<Fragment
	step={6}
	layout={{ x: 463, y: 385, width: 435, height: 44 }}
	font={{ font_size: 43, bold: true, v_align: 'middle', wrap: true }}
	line={{ width: 4, color: 'var(--stroke-level-0)' }}
	zIndex={11}
>
	<strong>Copy / Shadow </strong>of the <strong>True</strong>
</Fragment>
