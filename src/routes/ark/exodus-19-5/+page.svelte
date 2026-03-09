<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 42, y: 16, width: 864, height: 110 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Exodus 19:5" version="NIV">
			Now if you obey me fully and keep my covenant, then out of all nations you will be my <u>treasured possession</u>. Although the whole earth is mine,
		</ScriptureBlock>
	</Fragment>
	
	<Fragment
		layout={{ x: 42, y: 130, width: 864, height: 120 }}
		font={{ align:'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Exodus 25:10,16" version="NIV">
			"Have them make an ark of acacia wood--two and a half cubits long, a cubit and a half wide, and a cubit and a half high... <br><sup>16</sup>Then put in the ark the tablets of the covenant law, which I will give you.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Malachi 3:17-18 (timing: click, inline title extraction) -->
	<Fragment
		step={1}
		layout={{ x: 42, y: 242, width: 864, height: 158 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Malachi 3:17-18" version="NIV">
			"On the day when I act," says the LORD Almighty, "they will be my <u>treasured possession</u>. I will spare them, just as a father has compassion and spares his son who serves him. <sup>18</sup> And you will again see the distinction between the righteous and the wicked, between those who serve God and those who do not.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 1 Peter 2:9 (timing: click, inline title extraction) -->
	<Fragment
		step={2}
		layout={{ x: 42, y: 390, width: 864, height: 129 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="1 Peter 2:9" version="NIV">
			But you are a chosen people, a royal priesthood, a holy nation, <br><u>God's special possession</u>, that you may declare the praises of him who called you out of darkness into his wonderful light.
		</ScriptureBlock>
	</Fragment>
</Slide>
