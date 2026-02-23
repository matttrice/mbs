<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 92, y: 18, width: 778, height: 44 }}
		font={{ font_size: 36, bold: true }}
	>
		Jeremiah 33:14-18
	</Fragment>

	<!-- Main scripture (static) -->
	<Fragment
		layout={{ x: 92, y: 57, width: 784, height: 298 }}
		font={{ font_size: 24, wrap: true }}
	>
		"'The days are coming,' declares the LORD, 'when I will fulfill the gracious promise I made to the house of Israel and to the house of Judah. <sup>15</sup> "'In those days and at that time I will make a righteous Branch sprout from David's line; he will do what is just and right in the land. <sup>16</sup> In those days Judah will be saved and Jerusalem will live in safety. This is the name by which it will be called: The LORD Our Righteousness.' <sup>17</sup> For this is what the LORD says: 'David will never fail to have a man to sit on the throne of the house of Israel, <sup>18</sup> <u>nor will the priests, who are Levites, ever fail to have a man to stand before me</u> continually to offer burnt offerings, to burn grain offerings and to present sacrifices.'" <sub>(NIV)</sub>
	</Fragment>

	<!-- Step 1: Summary box -->
	<Fragment
		step={1}
		layout={{ x: 106, y: 378, width: 756, height: 94 }}
		font={{ font_size: 24, wrap: true }}
		line={{ width: 3, color: 'var(--stroke-level-0)' }}
		zIndex={2}
	>
		The "Branch" will be a <strong>King and Priest</strong> per order of <strong>Melchizedek</strong><br />
		Jesus transformed the <strong>physical (temporary)</strong> Levitical Priesthood into its <strong>spiritual (eternal) Melchizedekian</strong> form.
	</Fragment>
</Slide>
