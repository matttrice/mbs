<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Ephesians 1:3-4 consolidated title + body -->
	<Fragment
		layout={{ x: 88, y: 0, width: 791, height: 176 }}
		font={{ wrap: true }}
		zIndex={6}
	>
		<ScriptureBlock title="Ephesians 1:3-4">
			Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ. <sup>4</sup> For he chose us in him before the creation of the world to be holy and blameless in his sight.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: John 17:24 (click) -->
	<Fragment
		step={1}
		layout={{ x: 88, y: 164, width: 791, height: 142 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="John 17:24">
			"Father, I want those you have given me to be with me where I am, and to see my glory, the glory you have given me because you loved me before the creation of the world.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 1 Peter 1:20 (click) -->
	<Fragment
		step={2}
		layout={{ x: 88, y: 299, width: 791, height: 110 }}
		font={{ wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="1 Peter 1:20">
			He was chosen before the creation of the world, but was revealed in these last times for your sake.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Jude 24-25 (click) -->
	<Fragment
		step={3}
		layout={{ x: 88, y: 399, width: 812, height: 142 }}
		font={{ wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Jude 24-25">
			to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.
		</ScriptureBlock>
	</Fragment>
</Slide>
