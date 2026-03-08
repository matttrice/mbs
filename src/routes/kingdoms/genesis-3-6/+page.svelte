<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Genesis 3:6-8 (consolidated title + body) -->
	<Fragment
		layout={{ x: 96, y: 8, width: 795, height: 195 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Genesis 3:6-8">
			When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it. <sup>7 </sup>Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves.<br><sup>8 </sup>Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: "The Fall" explanation -->
	<Fragment
		step={1}
		layout={{ x: 143, y: 209, width: 675, height: 30 }}
		font={{ bold: true, wrap: true }}
		zIndex={2}
	>
		"The Fall" - The origin of conscience - Adam &amp; Eve created innocent
	</Fragment>

	<!-- Step 2: Matthew 18:2-3 -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 254, width: 776, height: 107 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Matthew 18:2-3">
			He called a little child to him, and placed the child among them. <sup>3 </sup>And he said: "Truly I tell you, unless you change and become like little children, you will never enter the kingdom of heaven.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Matthew 19:14 -->
	<Fragment
		step={3}
		layout={{ x: 102, y: 376, width: 771, height: 82 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Matthew 19:14">
			Jesus said, "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: Question box -->
	<Fragment
		step={4}
		layout={{ x: 171, y: 473, width: 632, height: 34 }}
		fill="var(--bg-level-3)"
		font={{ font_size: 23.3, bold: true, color: 'var(--text-ghost)', wrap: true }}
		zIndex={5}
	>
		Why use children to illustrate the Kingdom of Heaven?
	</Fragment>
</Slide>
