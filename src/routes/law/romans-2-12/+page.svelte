<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 2:12-16 - Sinning Without/Under the Law
	 * Custom Show ID: 1 (Romans2.12)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 15, width: 900, height: 45 }}
		font={{ font_size: 40, bold: true, align: 'center' }}
	>
		Romans 2:12-16
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 60, width: 900, height: 280 }}
		font={{ font_size: 22, align: 'left', wrap: true }}
		animate="fade"
	>
		For all who have sinned without the Law will also perish without the Law, and all who have sinned under the Law will be judged by the Law; for it is not the hearers of the Law who are just before God, but the doers of the Law will be justified. For when Gentiles who do not have the Law do instinctively the things of the Law, these, not having the Law, are a law to themselves, in that they show the work of the Law written in their hearts, their conscience bearing witness and their thoughts alternately accusing or else defending them, on the day when, according to my gospel, God will judge the secrets of men through Christ Jesus.
	</Fragment>

	<!-- Side notes -->
	<Fragment
		step={2}
		layout={{ x: 30, y: 355, width: 280, height: 80 }}
		font={{ font_size: 24, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		"instinctively" Means what?<br/>Is instinct learned?
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 340, y: 355, width: 280, height: 80 }}
		font={{ font_size: 24, italic: true, align: 'center', wrap: true }}
		animate="fade"
	>
		Jew vs. Gentile<br/>Hearers vs Doers
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 650, y: 355, width: 280, height: 80 }}
		font={{ font_size: 24, italic: true, align: 'center', color: '#0000CC', wrap: true }}
		animate="fade"
	>
		Instinct + Conscience &amp; Heart
	</Fragment>
</Slide>
