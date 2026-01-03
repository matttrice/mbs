<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Drill: Genesis 1 vs Genesis 2 - Comparing creation accounts
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Shows Genesis 1:1, 26-27 and Genesis 2:4-8, 18, 21-23
	 */
</script>

<Slide>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide7.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: Genesis 1:1, 26-27 -->
	<!-- Original: x: 184.8, y: 23.2, font_size: 37.3 -->
	<Fragment
		layout={{ x: 15, y: 14, width: 287, height: 44 }}
		font={{ font_size: 23.3, bold: true, wrap: true, align: 'left' }}
		zIndex={2}
	>
		Genesis 1:1, 26-27
	</Fragment>

	<!-- Genesis 1 text (static) -->
	<!-- Original: x: 184.8, y: 82.2, width: 1153.5, height: 255.1, font_size: 24 -->
	<Fragment
		layout={{ x: 15, y: 51, width: 850, height: 159 }}
		font={{ font_size: 15, wrap: true }}
		zIndex={0}
	>
		<p style="margin: 0; line-height: 1.5;">
			<sup>1</sup>In the beginning God created the heavens and the earth… <sup>26</sup> Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground." <sup>27</sup> So God created mankind in his own image, in the image of God he created them; male and female he created them. <sup>28</sup> God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground."
		</p>
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: Genesis 2 text -->
	<!-- Original: x: 179.2, y: 337.2, font_size: 37.3 -->
	<Fragment
		step={1}
		layout={{ x: 15, y: 225, width: 850, height: 301 }}
		font={{ font_size: 15, wrap: true, align: 'left' }}
		zIndex={1}
	>
		<p style="margin: 0; line-height: 1.5;">
			<strong>Genesis 2:4</strong><br/>
			This is the account of the heavens and the earth when they were created, in the day that the Lord God made earth and heaven. <sup>5</sup> Now no shrub of the field was yet in the earth, and no plant of the field had yet sprouted, for the Lord God had not sent rain upon the earth, and there was no man to cultivate the ground. <sup>6</sup> But a mist used to rise from the earth and water the whole surface of the ground. <sup>7</sup> Then the Lord God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being. <sup>8</sup> The Lord God planted a garden toward the east, in Eden; and there He placed the man whom He had formed.
		</p>
		<p style="margin: 10px 0 0 0; line-height: 1.5;">
			<strong>Genesis 2:18, 21-23</strong><br/>
			Then the Lord God said, "It is not good for the man to be alone; I will make him a helper suitable for him."… <sup>21</sup> So the Lord God caused a deep sleep to fall upon the man, and he slept; then He took one of his ribs and closed up the flesh at that place. <sup>22</sup> The Lord God fashioned into a woman the rib which He had taken from the man, and brought her to the man. <sup>23</sup> The man said, "This is now bone of my bones, And flesh of my flesh; She shall be called Woman, Because she was taken out of Man."
		</p>
	</Fragment>
</Slide>

<style>
	/* Scripture styling */
</style>
