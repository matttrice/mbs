<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Galatians 3:24-25 consolidated title + body -->
	<Fragment
		layout={{ x: 75, y: 1, width: 825, height: 92 }}
		font={{ wrap: true }}
		zIndex={6}
	>
		<ScriptureBlock title="Galatians 3:24-25">
			Therefore the <strong>Law has become our tutor</strong> to lead us to Christ, so that we may be justified by faith.  But now that faith has come, we are no longer under a tutor
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Romans 15:4 (click) -->
	<Fragment
		step={1}
		layout={{ x: 75, y: 94, width: 837, height: 92 }}
		font={{ v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="Romans 15:4">
			For whatever was written in earlier times <strong>was written for our instruction</strong>, so that through perseverance and the encouragement of the Scriptures we might have hope.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 1Corinthians 10:11 (click) -->
	<Fragment
		step={2}
		layout={{ x: 75, y: 188, width: 825, height: 97 }}
		font={{ v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="1Corinthians 10:11">
			Now these things happened to them as <strong>an example</strong>, and they were written for our instruction, upon whom the ends of the ages have come.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Colossians 2:16-17 (click) -->
	<Fragment
		step={3}
		layout={{ x: 75, y: 282, width: 825, height: 125 }}
		font={{ v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Colossians 2:16-17">
			Therefore no one is to act as your judge in regard to food or drink or in respect to a festival or a new moon or a Sabbath day -<strong>things which are a mere shadow</strong> of what is to come; but the substance belongs to Christ.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: Hebrews 10:1 (click) -->
	<Fragment
		step={4}
		layout={{ x: 75, y: 406, width: 818, height: 125 }}
		font={{ v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Hebrews 10:1">
			For the <strong>Law, since it has only a shadow</strong> of the good things to come and <strong>not the very form of things</strong>, can never, by the same sacrifices which they offer continually year by year, make perfect those who draw near.
		</ScriptureBlock>
	</Fragment>
</Slide>
