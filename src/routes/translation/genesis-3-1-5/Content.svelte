<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: title + body consolidated -->
<Fragment
	layout={{ x: 71, y: 23, width: 818, height: 311 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="Genesis 3:1-5,8">
		Now the serpent was more crafty than any of the wild animals the LORD God had made. He said to the woman, "Did God really say, 'You must not eat from any tree in the garden'?"  <sup>2</sup> The woman said to the serpent, "We may eat fruit from the trees in the garden, <sup>3</sup> but God did say, 'You must not eat fruit from the tree that is in the middle of the garden, and you must not touch it, or you will die.' " <br> <sup>4</sup> "You will not surely die," the serpent said to the woman. <sup>5</sup> "For God knows that when you eat of it your eyes will be opened, and you will be like God, knowing good and evil."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: verses 8-10 -->
<Fragment
	step={1}
	layout={{ x: 71, y: 349, width: 818, height: 148 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock>
		<sup>8 </sup>Then the man and his wife heard the sound of the Lord God as he was walking in the garden in the cool of the day, and they hid from the Lord God among the trees of the garden. <sup>9 </sup>But the Lord God called to the man, "Where are you?"<sup> 10 </sup>He said, "I heard the sound of You in the garden, and I was afraid because I was naked; so I hid myself."
	</ScriptureBlock>
</Fragment>
