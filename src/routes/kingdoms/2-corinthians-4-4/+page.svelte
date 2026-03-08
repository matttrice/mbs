<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 42, y: 8, width: 864, height: 117 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Corinthians 4:3-4 NIV">
			And even if our gospel is veiled, it is veiled to those who are perishing.<sup>4</sup><strong><u>The god of this age</u></strong> has blinded the minds of unbelievers, so that they cannot see the light of the gospel that displays the glory of Christ, who is the image of God.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: NASB95 version -->
	<Fragment
		step={1}
		layout={{ x: 42, y: 134, width: 864, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="2 Corinthians 4:3-4 NASB95" version="">
			And even if our gospel is veiled, it is veiled to those who are perishing, <sup>4</sup>in whose <br>case <strong><u>the god of this world</u></strong> has blinded the minds of the unbelieving so that they might not see the light of the gospel of the glory of Christ, who is the image of God.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Matthew 4:8-9 -->
	<Fragment
		step={2}
		layout={{ x: 42, y: 258, width: 864, height: 111 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Matthew 4:8-9">
			Again, the devil took Him to a very high mountain and showed Him all the kingdoms of the world and their glory; <sup>9</sup>and he said to Him, "All these things I will give You, if You fall down and worship me."
		</ScriptureBlock>
	</Fragment>
</Slide>
