<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 92, y: 10, width: 778, height: 40 }}
	font={{ bold: true, color: 'var(--text-ghost)' }}
>
	Structure of Levitical Priesthood
</Fragment>

<!-- Step 1: Abraham (click) -->
<Fragment
	step={1}
	layout={{ x: 64, y: 54, width: 147, height: 39 }}
	font={{ v_align: 'middle', wrap: true, font_size: 21.6, bold: true }}
	zIndex={10}
>
	<strong>Abraham</strong>
</Fragment>

<!-- Step 1: Jacob (Israel) (with) -->
<Fragment
	step={1}
	layout={{ x: 186, y: 56, width: 155, height: 34 }}
	font={{ align: 'center', font_size: 21.6, bold: true, color: 'var(--text-ghost)' }}
>
	<strong>Jacob (Israel)</strong>
</Fragment>

<!-- Step 2: 12 sons/12 tribes (click) -->
<Fragment
	step={2}
	layout={{ x: 326, y: 56, width: 313, height: 34 }}
	font={{ wrap: true, align: 'center', font_size: 21.6, bold: true, color: 'var(--text-ghost)' }}
	zIndex={4}
>
	<strong>12 sons12 tribes (Israel)</strong>
</Fragment>

<!-- Step 3: Levi (click) -->
<Fragment
	step={3}
	layout={{ x: 626, y: 56, width: 82, height: 34 }}
	font={{ align: 'center', font_size: 21.6, bold: true, color: 'var(--text-ghost)' }}
	zIndex={6}
>
	<strong>Levi</strong>
</Fragment>

<!-- Step 4: Aaron (order of) (click) -->
<Fragment
	step={4}
	layout={{ x: 694, y: 56, width: 204, height: 34 }}
	font={{ align: 'center', font_size: 21.6, bold: true, color: 'var(--text-ghost)' }}
	zIndex={5}
>
	<strong>Aaron (order of)</strong>
</Fragment>

<!-- Step 5: Responsible for animal sacrifice (click) -->
<Fragment
	step={5}
	layout={{ x: 158, y: 90, width: 628, height: 42 }}
	font={{ align: 'center', font_size: 28.8, bold: true, color: 'var(--text-ghost)', wrap: true }}
	zIndex={2}
>
	<strong>Responsible for a system of animal sacrifice</strong>
</Fragment>

<!-- Step 5: Leviticus 9:7-8,15 (with) -->
<Fragment
	step={5}
	layout={{ x: 70, y: 129, width: 821, height: 278 }}
	font={{ v_align: 'middle', wrap: true, align: 'left' }}
	zIndex={9}
>
	<ScriptureBlock title="Leviticus 9:7-8,15">
		Moses said to Aaron, "Come to the altar and sacrifice your sin offering and your burnt offering and make atonement for yourself and the people; sacrifice the offering that is for the people and make atonement for them, as the LORD has commanded." <sup>8</sup> So Aaron came to the altar and slaughtered the calf as a sin offering for himself… <br/><sup>15</sup> Aaron then brought the offering that was for the people. He took the goat for the people's sin offering and slaughtered it and offered it for a sin offering as he did with the first one.
	</ScriptureBlock>
</Fragment>

<!-- Step 6: Hebrews 10:3-4 (click) -->
<Fragment
	step={6}
	layout={{ x: 69, y: 406, width: 836, height: 100 }}
	font={{ wrap: true, color: 'var(--text-ghost)', align: 'left' }}
>
	<ScriptureBlock title="Hebrews10:3-4">
		But those sacrifices are an annual reminder of sins, <sup>4</sup> because it is <strong><u>impossible</u></strong> for the blood of bulls and goats to take away sins.
	</ScriptureBlock>
</Fragment>

<!-- Step 6: Copy / Shadow of the True (with) -->
<Fragment
	step={6}
	layout={{ x: 463, y: 385, width: 435, height: 44 }}
	font={{ v_align: 'middle', wrap: true, font_size: 43, bold: true }}
	line={{ width: 4, color: 'var(--stroke-level-0)' }}
	zIndex={11}
>
	<strong>Copy / Shadow </strong>of the <strong>True</strong>
</Fragment>
