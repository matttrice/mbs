<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 102.8, y: 18, width: 705.9, height: 44.4 }}
		font={{ v_align: 'top', font_size: 36.7, bold: true }}
	>
		James 4:17
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 58.9, width: 766.8, height: 343.2 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 30, color: 'var(--text-level-0)' }}
		animate="fade"
	>
		Therefore, to one who knows the right thing to do and does not do it, to him it is sin.<br/><br/>Ezekiel 18:4 "Behold, all souls are Mine; the soul of the father as well as the soul of the son is Mine. The soul who sins will die.
	</Fragment>
</Slide>
