<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 53, y: 16, width: 603, height: 44 }}
		font={{ font_size: 30, bold: true, align: 'left' }}
	>
		Exodus 19:5
	</Fragment>

	<!-- Static: Scripture Exodus 19:5, 25:10 -->
	<Fragment
		layout={{ x: 56, y: 50, width: 876, height: 198 }}
		font={{ font_size: 23.3, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine,Exodus 25:10,16"Have them make an ark of acacia wood—two and a half cubits long, a cubit and a half wide, and a cubit and a half high… [16] Then put in the ark the tablets of the covenant law, which I will give you.
	</Fragment>

	<!-- Static: NIV label -->
	<Fragment
		layout={{ x: 890, y: 502, width: 46, height: 30 }}
		font={{ font_size: 20, italic: true }}
	>
		NIV
	</Fragment>

	<!-- Step 1: Malachi 3:17-18 (timing: click) -->
	<Fragment
		step={1}
		layout={{ x: 56, y: 242, width: 876, height: 158 }}
		font={{ font_size: 30, bold: true, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		Malachi 3:17-18"On the day when I act," says the LORD Almighty, "they will be my treasured possession. I will spare them, just as a father has compassion and spares his son who serves him. 18 And you will again see the distinction between the righteous and the wicked, between those who serve God and those who do not.
	</Fragment>

	<!-- Step 2: 1 Peter 2:9 (timing: click) -->
	<Fragment
		step={2}
		layout={{ x: 56, y: 402, width: 876, height: 129 }}
		font={{ font_size: 30, bold: true, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		1 Peter 2:9But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.
	</Fragment>
</Slide>
