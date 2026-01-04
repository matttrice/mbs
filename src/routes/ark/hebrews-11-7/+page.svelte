<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 104, y: 36, width: 100, height: 44 }}
		font={{ font_size: 36, bold: true, align: 'left' }}
	>
		Hebrews 11:7
	</Fragment>

	<!-- Static: Scripture NASB -->
	<Fragment
		layout={{ x: 100, y: 110, width: 763, height: 121 }}
		font={{ font_size: 30, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		By faith Noah, being warned by God about things not yet seen, in reverence prepared an ark for the salvation of his household, by which he condemned the world, and became an heir of the righteousness which is according to faith. <sub>(NASB)</sub>
	</Fragment>

	<!-- Static: Scripture NIV -->
	<Fragment
		layout={{ x: 100, y: 320, width: 651, height: 156 }}
		font={{ font_size: 30, align: 'left', wrap: true }}
	>
		<strong>Hebrews 11:7</strong> <br /> By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family. By his faith he condemned the world and became heir of the righteousness that is in keeping with faith. <sub>(NIV)</sub>
	</Fragment>
</Slide>
