<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 1 Corinthians 15:1-4 -->
	<Fragment
		layout={{ x: 99, y: 14, width: 756, height: 44 }}
		font={{ font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={0}
	>
		1 Corinthians 15:1-4
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 106, y: 47, width: 768, height: 128 }}
		font={{ wrap: true, font_size: 16.7, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		Now I make known to you, brethren, the gospel which I preached to you, which also you received, in which also you stand, 2 by which also you are saved, if you hold fast the word which I preached to you, unless you believed in vain.3 For I delivered to you as of first importance what I also received, that Christ died for our sins according to the Scriptures, 4 and that He was buried, and that He was raised on the third day according to the Scriptures,
	</Fragment>

	<!-- Hebrews 11:6 -->
	<Fragment
		layout={{ x: 106, y: 186, width: 768, height: 75 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={2}
	>
		Hebrews 11:66 And without faith it is impossible to please Him, for he who comes to God must believe that He is and that He is a rewarder of those who seek Him.
	</Fragment>

	<!-- Acts 17:30 -->
	<Fragment
		layout={{ x: 106, y: 274, width: 775, height: 75 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={3}
	>
		Acts 17:3030 Therefore having overlooked the times of ignorance, God is now declaring to men that all people everywhere should repent,
	</Fragment>

	<!-- Romans 10:17 -->
	<Fragment
		layout={{ x: 99, y: 365, width: 716, height: 54 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={4}
	>
		Romans 10:1717 So faith comes from hearing, and hearing by the word of Christ.
	</Fragment>

	<!-- Acts 2:38 -->
	<Fragment
		layout={{ x: 102, y: 432, width: 794, height: 75 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={5}
	>
		Acts 2:3838 Peter said to them, "Repent, and each of you be baptized in the name of Jesus Christ for the forgiveness of your sins; and you will receive the gift of the Holy Spirit.
	</Fragment>
</Slide>
