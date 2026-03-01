<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: James 1:17 consolidated title + body -->
	<Fragment
		layout={{ x: 98, y: 0, width: 770, height: 110 }}
		font={{ align :'left', wrap: true }}
		zIndex={6}
	>
		<ScriptureBlock title="James 1:17">
			Every good thing given and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shifting shadow.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Malachi 3:6 (click) -->
	<Fragment
		step={1}
		layout={{ x: 98, y: 129, width: 770, height: 80 }}
		font={{ align :'left', wrap: true }}
		>
		<ScriptureBlock title="Malachi 3:6">
			"For I, the LORD, do not change; therefore you, O sons of Jacob, are not consumed.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 1Samuel 15:29 (click) -->
	<Fragment
		step={2}
		layout={{ x: 95, y: 229, width: 770, height: 90 }}
		font={{ align :'left', wrap: true }}
	>
		<ScriptureBlock title="1Samuel 15:29">
			"Also the Glory of Israel will not lie or change His mind; for He is not a man that He should change His mind."
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Hebrews 13:8 (click) -->
	<Fragment
		step={3}
		layout={{ x: 95, y: 326, width: 770, height: 78 }}
		font={{ align :'left', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 13:8">
			Jesus Christ is the same yesterday and today and forever.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: Question with border (click) -->
	<Fragment
		step={4}
		layout={{ x: 111, y: 422, width: 770, height: 40 }}
		font={{ align: 'center', font_size: 26.7, bold: true }}
		line={{ width: 1, color: 'var(--stroke-level-0)' }}
	>
		<strong>If God doesn't change, then why two covenants??</strong>
	</Fragment>

	<!-- Step 5: Spiritual = Physical (click) -->
	<Fragment
		step={5}
		layout={{ x: 243, y: 457, width: 476, height: 67 }}
		font={{ align: 'center', font_size: 50, bold: true, color: 'var(--text-level-3)' }}
	>
		<strong>Spiritual </strong>=<strong> Physical</strong>
	</Fragment>
</Slide>
