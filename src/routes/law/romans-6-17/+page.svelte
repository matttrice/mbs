<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 6:17-18 - Slaves to Righteousness
	 * Custom Show ID: 7 (Romans6.17-18)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 30, width: 900, height: 50 }}
		font={{ font_size: 42, bold: true, align: 'center' }}
	>
		Romans 6:17-18
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 40, y: 100, width: 880, height: 180 }}
		font={{ font_size: 26, align: 'left', wrap: true }}
		animate="fade"
	>
		But thanks be to God that, though you used to be slaves to sin, you wholeheartedly obeyed the form of teaching to which you were entrusted. You have been set free from sin and have become slaves to righteousness.
	</Fragment>

	<!-- Commentary -->
	<Fragment
		step={2}
		layout={{ x: 40, y: 320, width: 880, height: 120 }}
		font={{ font_size: 24, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Freedom from sin but a slave to righteousness.<br/>
		This dictates a new standard; a responsibility to live by.<br/>
		Are God's standards easy to meet?
	</Fragment>
</Slide>
