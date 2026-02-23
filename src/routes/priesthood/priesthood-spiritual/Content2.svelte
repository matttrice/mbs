<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 70, y: 8, width: 778, height: 40 }}
	font={{ font_size: 33.6, bold: true, align: 'left' }}
>
	Hebrews 7:1-10
</Fragment>

<!-- Scripture (static) -->
<Fragment
	layout={{ x: 70, y: 44, width: 826, height: 365 }}
	font={{ font_size: 21.6, wrap: true }}
	zIndex={1}
>
	This <u>Melchizede</u>k was <u>king</u> of Salem and <u>priest</u> of God Most High. He met Abraham returning from the defeat of the kings and blessed him, <sup>2 </sup>and Abraham gave him a tenth of everything. First, his name means "king of righteousness"; then also, "king of Salem" means "king of peace." <sup>3</sup> Without father or mother, without genealogy, without beginning of days or end of life, like the Son of God he <strong><u>remains a priest forever</u></strong>.<br /><br /><sup>4</sup>Just think how great he was: Even the patriarch Abraham gave him a tenth of the plunder! <sup>5</sup> Now the law requires the descendants of Levi who become priests to collect a tenth from the people—that is, from their fellow Israelites—even though they also are descended from Abraham. <sup>6</sup> This man, however, did not trace his descent from Levi, yet he collected a tenth from Abraham and blessed him who had the promises. <sup>7</sup> And without doubt the lesser is blessed by the greater. <sup>8</sup> In the one case, the tenth is collected by people who die; but in the other case, by him who is declared to be living.
</Fragment>

<!-- Step 1: Summary -->
<Fragment
	step={1}
	layout={{ x: 256, y: 436, width: 478, height: 52 }}
	font={{ font_size: 28.8, bold: true, color: 'var(--text-level-3)' }}
	line={{ width: 3 }}
	zIndex={2}
>
	<strong>Only spiritual things last forever.</strong>
</Fragment>
