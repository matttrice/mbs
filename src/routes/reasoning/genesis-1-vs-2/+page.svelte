<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<Slide>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide7.png" />

	<!-- ===== STATIC CONTENT ===== -->

	<!-- Consolidated: Title + Genesis 1 body -->
	<Fragment
		layout={{ x: 42, y: 0, width: 864, height: 220 }}
		font={{ align: 'left', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Genesis 1:1, 26-27" scale="sm">
			<sup>1</sup>In the beginning God created the heavens and the earth... <br/><sup>26 </sup>Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground." <sup>27 </sup>So God created mankind in his own image, in the image of God he created them; male and female he created them.<br/><sup>28 </sup>God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.
		</ScriptureBlock>
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: Genesis 2 text -->
	<Fragment
		step={1}
		layout={{ x: 42, y: 160, width: 864, height: 220 }}
		font={{ align: 'left', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="Genesis 2:4" scale="sm">
			This is the account of the heavens and the earth when they were created, in the day that the Lord God made earth and heaven. <sup>5 </sup>Now no shrub of the field was yet in the earth, and no plant of the field had yet sprouted, for the Lord God had not sent rain upon the earth, and there was no man to cultivate the ground. <sup>6 </sup>But a mist used to rise from the earth and water the whole surface of the ground. <sup>7 </sup>Then the Lord God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being. <sup>8 </sup>The Lord God planted a garden toward the east, in Eden; and there He placed the man whom He had formed. 
		</ScriptureBlock>
	</Fragment>

	<Fragment
	   step={2}
	   layout={{ x: 42, y: 310, width: 864, height: 220 }}
	   font={{ align: 'left', wrap: true }}
	   zIndex={3}
	>
		<ScriptureBlock title="Genesis 2:18, 21-23" scale="sm">
			Then the Lord God said, "It is not good for the man to be alone; I will make him a helper suitable for him."... <sup>21 </sup>So the Lord God caused a deep sleep to fall upon the man, and he slept; then He took one of his ribs and closed up the flesh at that place. <sup>22 </sup>The Lord God fashioned into a woman the rib which He had taken from the man, and brought her to the man. <sup>23 </sup>The man said, "This is now bone of my bones,<br/>And flesh of my flesh; She shall be called Woman, Because she was taken out of Man."
		</ScriptureBlock>
	</Fragment>
</Slide>
