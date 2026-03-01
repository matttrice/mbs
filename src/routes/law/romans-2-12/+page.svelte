<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 42, y: 27, width: 875, height: 345 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 2:12-16">
			For all who have sinned without the Law will also perish without the Law, and all who have sinned under the Law will be judged by the Law; for it is not the hearers of the Law who are just before God, but the doers of the Law will be justified.  For when Gentiles who do not have the Law do instinctively the things of the Law, these, not having the Law, are a law to themselves, in that they show the work of the Law written in their hearts, their conscience bearing witness and their thoughts alternately accusing or else defending them, on the day when, according to my gospel, God will judge the secrets of men through Christ Jesus.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 68, y: 396, width: 266, height: 67 }}
		font={{ v_align: 'middle', align: 'center', font_size: 26.7, wrap: true }}
		line={{ width: 5, color: 'var(--stroke-level-0)' }}
	>
		Jew vs. Gentile<br>Hearers vs Doers
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 354, y: 386, width: 254, height: 88 }}
		font={{ align: 'center', font_size: 35, wrap: true }}
		fill="var(--bg-level-1)"
	>
		"instinctively"<br> Means what?
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 354, y: 475, width: 254, height: 40 }}
		font={{ wrap: true, align: 'center', font_size: 26.7 }}
	>
		Is instinct learned?
	</Fragment>

	<Fragment
		step={4}
		layout={{ x: 632, y: 389, width: 300, height: 81 }}
		font={{ align: 'center', font_size: 30, wrap: true }}
		fill="var(--bg-level-1)"
	>
		Instinct +<br>Conscience &amp; Heart
	</Fragment>
</Slide>
