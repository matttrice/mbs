<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 99, y: 36, width: 766, height: 405 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="Exodus 2:1-6" version="NIV" scale="lg">
			Now a man of the tribe of Levi married a Levite woman, <sup>2</sup> and she became pregnant and gave birth to a son. When she saw that he was a fine child, she hid him for three months. <sup>3</sup> But when she could hide him no longer, she got a papyrus basket <em>(tebah) </em>for him and coated it with tar and <u>pitch</u>. Then she placed the child in it and put it among the reeds along the bank of the Nile. <sup>4</sup> His sister stood at a distance to see what would happen to him. <sup>5</sup> Then Pharaoh's daughter went down to the Nile to bathe, and her attendants were walking along the riverbank. She saw the basket among the reeds and sent her female slave to get it.
		</ScriptureBlock>
	</Fragment>
</Slide>
