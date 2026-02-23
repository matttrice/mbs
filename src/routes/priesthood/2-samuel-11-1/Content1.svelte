<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 78, y: 14, width: 778, height: 40 }}
	font={{ font_size: 28.8, bold: true, align: 'left' }}
>
	2 Samuel 11:1
</Fragment>

<!-- Scripture (static) -->
<Fragment
	layout={{ x: 76, y: 47, width: 820, height: 86 }}
	font={{ font_size: 21.6, v_align: 'middle', wrap: true }}
>
	It happened in the spring of the year, at the time when kings go out to battle, that David sent Joab and his servants with him, and all Israel; and they destroyed the people of Ammon and besieged Rabbah. But David remained at Jerusalem.
</Fragment>

<!-- Ephesians 6:10-12 (static) -->
<Fragment
	layout={{ x: 75, y: 144, width: 806, height: 173 }}
	font={{ font_size: 28.8, bold: true, v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<strong>Ephesians 6:10-12</strong><br />
	Finally, my brethren, be strong in the Lord and in the power of His might. <sup>11</sup> Put on the whole armor of God, that you may be able to stand against the wiles of the devil. <sup>12</sup> For we do not wrestle against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this age, against spiritual hosts of wickedness in the heavenly places.
</Fragment>

<!-- Matthew 28:18-19 (static) -->
<Fragment
	layout={{ x: 74, y: 328, width: 800, height: 121 }}
	font={{ font_size: 28.8, bold: true, v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<strong>Matthew 28:18-19</strong><br />
	And Jesus came and spoke to them, saying, "All authority has been given to Me in heaven and on earth. <sup>19</sup> Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit
</Fragment>

<!-- Step 1: Summary -->
<Fragment
	step={1}
	layout={{ x: 218, y: 464, width: 538, height: 34 }}
	font={{ font_size: 21.6, bold: true, wrap: true }}
	line={{ width: 4, color: 'var(--stroke-level-0)' }}
	zIndex={3}
>
	<strong>The Church is offensive, militant, and on the move</strong>
</Fragment>
