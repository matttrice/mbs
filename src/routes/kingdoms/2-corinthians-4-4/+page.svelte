<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Corinthians 4:3-4 NIV -->
	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 44 }}
		font={{ font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={0}
	>
		2 Corinthians 4:3-4 NIV
	</Fragment>

	<!-- Scripture text (NIV) -->
	<Fragment
		layout={{ x: 102, y: 46, width: 765, height: 79 }}
		font={{ font_size: 20, wrap: true, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		And even if our gospel is veiled, it is veiled to those who are perishing. 4 The god of this age has blinded the minds of unbelievers, so that they cannot see the light of the gospel that displays the glory of Christ, who is the image of God.
	</Fragment>

	<!-- Step 1: NASB95 version -->
	<Fragment
		step={1}
		layout={{ x: 102, y: 134, width: 778, height: 111 }}
		font={{ font_size: 20, wrap: true }}
		zIndex={3}
	>
		2 Corinthians 4:3-4 NASB95And even if our gospel is veiled, it is veiled to those who are perishing, 4 in whose case the god of this world has blinded the minds of the unbelieving so that they might not see the light of the gospel of the glory of Christ, who is the image of God.
	</Fragment>

	<!-- Step 2: Matthew 4:8-9 -->
	<Fragment
		step={2}
		layout={{ x: 102, y: 258, width: 756, height: 111 }}
		font={{ wrap: true, font_size: 20, bold: true, color: 'var(--text-level-0)' }}
		zIndex={2}
	>
		Matthew 4:8-9 Again, the devil took Him to a very high mountain and showed Him all the kingdoms of the world and their glory; 9 and he said to Him, "All these things I will give You, if You fall down and worship me."
	</Fragment>
</Slide>
