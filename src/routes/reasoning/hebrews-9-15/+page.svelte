<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Drill: Hebrews 9:15-17 - Multiple translations
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * Shows NIV, NASB95, NKJV, and RSV translations
	 */
</script>

<Slide>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide6.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: Hebrews 9:15-17 (NIV) -->
	<!-- Original: x: 91.3, y: 23.2, font_size: 49.3 -->
	<Fragment
		layout={{ x: 57, y: 14, width: 287, height: 44 }}
		font={{ font_size: 30.8, bold: true }}
		zIndex={3}
	>
		Hebrews 9:15-17 (NIV)
	</Fragment>

	<!-- NIV translation (static) -->
	<!-- Original: x: 91.3, y: 82.2, width: 1301.5, height: 206.6 -->
	<Fragment
		layout={{ x: 57, y: 51, width: 813, height: 129 }}
		font={{ font_size: 18.7 }}
		zIndex={0}
	>
		<p style="margin: 0; line-height: 1.5;">
			For this reason Christ is the mediator of a new covenant, that those who are called may receive the promised eternal inheritance — now that he has died as a ransom to set them free from the sins committed under the first covenant. <sup>16</sup> In the case of a will, it is necessary to prove the death of the one who made it, <sup>17</sup> because a will is in force only when somebody has died; it never takes effect while the one who made it is living.
		</p>
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->

	<!-- Step 1: NASB95 translation -->
	<!-- Original: x: 91.3, y: 291, font_size: 42.7 -->
	<Fragment
		step={1}
		layout={{ x: 57, y: 182, width: 877, height: 89 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={1}
	>
		<p style="margin: 0; line-height: 1.5;">
			<strong>Hebrews 9:16-17 (NASB95)</strong><br/>
			For where a covenant is, there must of necessity be the death of the one who made it. <sup>17</sup>For a covenant is valid only when men are dead, for it is never in force while the one who made it lives.
		</p>
	</Fragment>

	<!-- Step 2: NKJV translation -->
	<!-- Original: x: 91.3, y: 461.3, font_size: 42.7 -->
	<Fragment
		step={2}
		layout={{ x: 57, y: 288, width: 860, height: 89 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={4}
	>
		<p style="margin: 0; line-height: 1.5;">
			<strong>Hebrews 9:16-17 (NKJV)</strong><br/>
			For where there is a testament, there must also of necessity be the death of the testator. <sup>17</sup> For a testament is in force after men are dead, since it has no power at all while the testator lives.
		</p>
	</Fragment>

	<!-- Step 3: RSV translation -->
	<!-- Original: x: 91.3, y: 638.2, font_size: 42.7 -->
	<Fragment
		step={3}
		layout={{ x: 57, y: 399, width: 829, height: 89 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={2}
	>
		<p style="margin: 0; line-height: 1.5;">
			<strong>Hebrews 9:16-17 (RSV)</strong><br/>
			For where a will is involved, the death of the one who made it must be established. <sup>17</sup>For a will takes effect only at death, since it is not in force as long as the one who made it is alive.
		</p>
	</Fragment>
</Slide>

<style>
	/* Scripture styling */
</style>
