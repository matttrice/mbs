<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture Hebrews (consolidated title + body) -->
	<Fragment
		layout={{ x: 95, y: 15, width: 756, height: 342 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 12:2, 22-23" scale="lg">
			fixing our eyes on Jesus, the author and perfecter of faith, who for the joy set before Him endured the cross, despising the shame, and has <strong>sat down</strong> at the right hand of the throne of God... <br><sup>22 </sup>But you have come to <strong>Mount Zion</strong> and to the city of the living God, the heavenly Jerusalem, and to myriads of angels, <sup>23</sup>to the general assembly and <strong>Church</strong> of the firstborn who are enrolled in heaven, and to God, the Judge of all, and to the spirits of the righteous made perfect,
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Scripture Psalms (inline title extraction) -->
	<Fragment
		layout={{ x: 95, y: 354, width: 784, height: 152 }}
		font={{ align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Psalms 99:1-2" version="NIV" scale="lg">
			The LORD reigns, let the nations tremble; he <strong>sits enthroned</strong> between the cherubim, let the earth shake. <sup>2</sup>Great is the LORD in Zion; <strong>he is exalted over all the nations</strong>.
		</ScriptureBlock>
	</Fragment>
</Slide>
