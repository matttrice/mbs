<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 51, y: 8, width: 756, height: 44 }}
		font={{ bold: true }}
		zIndex={1}
	>
		Genesis 6:1-8
	</Fragment>

	<!-- Static: Scripture text -->
	<Fragment
		layout={{ x: 48, y: 52, width: 851, height: 432 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={0}
	>
		<ScriptureBlock version="NIV">
			When men began to increase in number on the earth and daughters were born to them, <sup>2</sup> the sons of God saw that the daughters of men were beautiful, and they married any of them they chose. <sup>3</sup> Then the LORD said, "My Spirit will not contend with man forever, for he is mortal; his days will be a hundred and twenty years."  <sup>4</sup> The Nephilim were on the earth in those days--and also afterward--when the sons of God went to the daughters of men and had children by them. They were the heroes of old, men of renown.  <br><br><sup>5</sup> The LORD saw how great man's wickedness on the earth had become, and that every inclination of the thoughts of his heart was only evil all the time. <sup>6</sup> The LORD was grieved that he had made man on the earth, and his heart was filled with pain. <sup>7</sup> So the LORD said, "I will wipe mankind, whom I have created, from the face of the earth--men and animals, and creatures that move along the ground, and birds of the air--for I am grieved that I have made them." <sup>8</sup> But Noah found favor in the eyes of the LORD.
		</ScriptureBlock>
	</Fragment>
</Slide>
