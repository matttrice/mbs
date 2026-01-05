<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Genesis 1:31 -->
	<Fragment
		layout={{ x: 91, y: 8, width: 168, height: 39 }}
		font={{ align: 'left', font_size: 23.3, bold: true }}
		zIndex={0}
	>
		Genesis 1:31
	</Fragment>

	<!-- Static scripture text -->
	<Fragment
		layout={{ x: 91, y: 41, width: 792, height: 54 }}
		font={{ wrap: true }}
		zIndex={1}
	>
		God saw all that he had made, and it was very good. And there was evening, and there was morning—the sixth day.
	</Fragment>

	<!-- Step 1: Job 38:32-33 -->
	<Fragment
		step={1}
		layout={{ x: 91, y: 102, width: 809, height: 82 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: '#000000' }}
		zIndex={2}
		animate="fade"
	>
		Job 38:32-33Can you bring forth the constellations in their seasons or lead out the Bear with its cubs?33 Do you know the laws of the heavens? Can you set up God's dominion over the earth?
	</Fragment>

	<!-- Step 2: 1 Chronicles 29:10-11 -->
	<Fragment
		step={2}
		layout={{ x: 91, y: 200, width: 455, height: 301 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: '#000000' }}
		zIndex={3}
		animate="fade"
	>
		1 Chronicles 29:10-11David praised the Lord in the presence of the whole assembly, saying,"Praise be to you, Lord,    the God of our father Israel,    from everlasting to everlasting.11 Yours, Lord, is the greatness and the power    and the glory and the majesty and the splendor,    for everything in heaven and earth is yours.Yours, Lord, is the kingdom;    you are exalted as head over all.
	</Fragment>

	<!-- Step 3: Psalm 47:2 -->
	<Fragment
		step={3}
		layout={{ x: 538, y: 192, width: 362, height: 131 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: '#000000' }}
		zIndex={4}
		animate="fade"
	>
		Psalm 47:2Clap your hands, all you nations;    shout to God with cries of joy.2 For the Lord Most High is awesome,    the great King over all the earth.
	</Fragment>

	<!-- Step 4: Summary box -->
	<Fragment
		step={4}
		layout={{ x: 525, y: 355, width: 366, height: 62 }}
		fill="#0000FF"
		font={{ wrap: true, align: 'center', font_size: 23.3, bold: true, color: '#FFFFFF' }}
		zIndex={5}
		animate="fade"
	>
		God created everything in nature and He governs it all
	</Fragment>
</Slide>
