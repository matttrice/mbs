<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Jude 5-6 scripture -->
	<Fragment
		layout={{ x: 41, y: 13, width: 868, height: 234 }}
		font={{ wrap: true, font_name: '+mn-lt', font_size: 36.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={4}
	>
		Jude 5 Though you already know all this, I want to remind you that the Lord at one time delivered his people out of Egypt, but later destroyed those who did not believe. 6 And the angels who did not keep their positions of authority but abandoned their proper dwelling—these he has kept in darkness, bound with everlasting chains for judgment on the great Day. (NASB)
	</Fragment>

	<!-- Step 1: 2 Peter 2:4 -->
	<Fragment
		step={1}
		layout={{ x: 41, y: 253, width: 828, height: 142 }}
		font={{ font_size: 36.7, bold: true, v_align: 'middle' }}
		line={{ width: 1 }}
		zIndex={0}
		animate="fade"
	>
		2 Peter 2:4 For if God did not spare angels when they sinned, but cast them into hell and committed them to pits of darkness, reserved for judgment;
	</Fragment>

	<!-- Step 2: Job 4:18 -->
	<Fragment
		step={2}
		layout={{ x: 42, y: 394, width: 524, height: 109 }}
		font={{ font_size: 36.7, bold: true, v_align: 'middle' }}
		line={{ width: 1 }}
		zIndex={1}
		animate="fade"
	>
		Job 4:18 He puts no trust even in His servants; And against His angels He charges error.
	</Fragment>

	<!-- Step 3: Extra-biblical evidence box -->
	<Fragment
		step={3}
		layout={{ x: 463, y: 166, width: 301, height: 115 }}
		font={{ font_size: 23.3, v_align: 'middle', align: 'center' }}
		line={{ width: 3 }}
		zIndex={6}
		animate="fade"
	>
		Consider evidence from:<br/>Ancient Cultures<br/>Book of Enoch<br/>Dead Sea Scrolls
	</Fragment>
</Slide>
