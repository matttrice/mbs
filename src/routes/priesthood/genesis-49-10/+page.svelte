<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 89, y: 13, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		Genesis 49:10
	</Fragment>

	<!-- Genesis 49:10 -->
	<Fragment
		layout={{ x: 90, y: 52, width: 814, height: 97 }}
		font={{ font_size: 24, v_align: 'middle' }}
	>
		"The scepter shall not depart from Judah, Nor the ruler's staff from between his feet, Until Shiloh comes, And to him {'{'}shall be{'}'} the obedience of the peoples.
	</Fragment>

	<!-- Psalms 60:6-7 -->
	<Fragment
		layout={{ x: 84, y: 162, width: 806, height: 138 }}
		font={{ font_size: 33.6, bold: true, v_align: 'middle' }}
	>
		Psalms 60:6-7<br />God has spoken in His holiness: "I will exult, I will portion out Shechem and measure out the valley of Succoth. 7 "Gilead is Mine, and Manasseh is Mine; Ephraim also is the helmet of My head; Judah is My scepter.
	</Fragment>

	<!-- Hebrews 7:14 -->
	<Fragment
		layout={{ x: 84, y: 312, width: 706, height: 109 }}
		font={{ font_size: 33.6, bold: true, wrap: true }}
	>
		Hebrews 7:14<br />For it is clear that our Lord descended from Judah, and in regard to that tribe Moses said nothing about priests.
	</Fragment>
</Slide>
