<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Drill: Romans 2:12-16 - Moral Law and Conscience
	 */
</script>

<Slide>
	<Fragment
		layout={{ x: 42.6, y: 26.8, width: 390.1, height: 51.1, }}
		font={{ font_size: 44.2, bold: true, align: 'left' }}
	>
		Romans 2:12-16
	</Fragment>

	<Fragment
		layout={{ x: 42.6, y: 73.2, width: 874.9, height: 298.8 }}
		font={{ font_size: 26.7, v_align: 'middle', wrap: true }}
	>
		For all who have sinned without the Law will also perish without the Law, and all who have sinned under the Law will be judged by the Law; for it is not the hearers of the Law who are just before God, but the doers of the Law will be justified.  For when Gentiles who do not have the Law do instinctively the things of the Law, these, not having the Law, are a law to themselves, in that they show the work of the Law written in their hearts, their conscience bearing witness and their thoughts alternately accusing or else defending them, on the day when, according to my gospel, God will judge the secrets of men through Christ Jesus.
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 67.8, y: 385, width: 254, height: 88 }}
		font={{ font_size: 26.7, align: 'center', v_align: 'middle', bold: true }}
		line={{ width: 2 }}
	>
		Jew vs. Gentile<br/>Hearers vs Doers
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 354, y: 385, width: 254, height: 88 }}
		font={{ font_size: 23, align: 'center' , wrap: true }}
		fill="var(--color-level1)"
	>
		<strong>"instinctively"</strong> <br/> Means what?
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 354, y: 475, width: 254.5, height: 40.2 }}
		font={{ font_size: 26.7, align: 'center', wrap: true }}
	>
		Is instinct learned?
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 632.8, y: 389.2, width: 300.2, height: 80.7 }}
		font={{ font_size: 30, align: 'center' }}
		fill="var(--color-level1)"
	>
		Instinct +<br/>Conscience & Heart
	</Fragment>
</Slide>
