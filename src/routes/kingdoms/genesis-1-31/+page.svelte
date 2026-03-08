<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: Genesis 1:31 (consolidated title + body) -->
	<Fragment
		layout={{ x: 91, y: 8, width: 792, height: 87 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Genesis 1:31">
			God saw all that he had made, and it was very good. And there was evening, and there was morning--the sixth day.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Job 38:32-33 -->
	<Fragment
		step={1}
		layout={{ x: 91, y: 102, width: 809, height: 82 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Job 38:32-33">
			Can you bring forth the constellations in their seasons or lead out the Bear with its cubs?<br><sup>33 </sup>Do you know the laws of the heavens? Can you set up God's dominion over the earth?
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: 1 Chronicles 29:10-11 -->
	<Fragment
		step={2}
		layout={{ x: 91, y: 200, width: 455, height: 301 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="1 Chronicles 29:10-11">
			David praised the Lord in the presence of the whole assembly, saying,<br>"Praise be to you, Lord,<br>    the God of our father Israel,<br>    from everlasting to everlasting.<br><sup>11 </sup>Yours, Lord, is the greatness and the power<br>    and the glory and the majesty and the splendor,<br>    for everything in heaven and earth is yours.<br>Yours, Lord, is the kingdom;<br>    you are exalted as head over all.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 3: Psalm 47:2 -->
	<Fragment
		step={3}
		layout={{ x: 538, y: 192, width: 362, height: 131 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Psalm 47:2">
			Clap your hands, all you nations;<br>    shout to God with cries of joy.<br><sup>2 </sup>For the Lord Most High is awesome,<br>    the great King over all the earth.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: Summary box -->
	<Fragment
		step={4}
		layout={{ x: 525, y: 355, width: 366, height: 62 }}
		fill="var(--bg-level-3)"
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true, color: 'var(--text-ghost)' }}
		zIndex={5}
	>
		God created everything in nature and He governs it all
	</Fragment>
</Slide>
