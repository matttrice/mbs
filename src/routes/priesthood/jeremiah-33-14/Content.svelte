<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 92, y: 18, width: 784, height: 337 }}
	font={{ wrap: true, align: 'left' }}
>
	<ScriptureBlock title="Jeremiah 33:14-18">
		"'The days are coming,' declares the LORD, 'when I will fulfill the gracious promise I made to the house of Israel and to the house of Judah. <sup>15</sup> "'In those days and at that time I will make a righteous Branch sprout from David's line; he will do what is just and right in the land. <sup>16</sup> In those days Judah will be saved and Jerusalem will live in safety. This is the name by which it will be called: The LORD Our Righteousness.' <sup>17</sup> For this is what the LORD says: 'David will never fail to have a man to sit on the throne of the house of Israel, <sup>18</sup> <u>nor will the priests, who are Levites, ever fail to have a man to stand before me</u> continually to offer burnt offerings, to burn grain offerings and to present sacrifices.'" <sub>(NIV)</sub>
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Commentary (click) -->
<Fragment
	step={1}
	layout={{ x: 106, y: 378, width: 756, height: 94 }}
	font={{ wrap: true, font_size: 24 }}
	line={{ width: 3, color: 'var(--stroke-level-0)' }}
	zIndex={1}
>
	The "Branch" will be a <strong>King and Priest</strong> per order of <strong>Melchizedek</strong><br/>Jesus transformed the <strong>physical (temporary)</strong> Levitical Priesthood into its <strong>spiritual (eternal) Melchizedekian</strong> form.
</Fragment>
