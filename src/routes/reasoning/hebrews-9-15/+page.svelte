<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
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
	<Fragment
		layout={{ x: 57, y: 14, width: 287, height: 44 }}
		font={{ font_size: 30.8, bold: true }}
		zIndex={3}
	>
		Hebrews 9:15-17 (NIV)
	</Fragment>

	<Fragment
		layout={{ x: 57, y: 51, width: 813, height: 129 }}
		font={{ font_size: 18.7, wrap: true }}
		zIndex={0}
	>
		For this reason Christ is the mediator of a new covenant, that those who are called may receive the promised eternal inheritance — now that he has died as a ransom to set them free from the sins committed under the first covenant. <sup>16</sup> In the case of a will, it is necessary to prove the death of the one who made it, <sup>17</sup> because a will is in force only when somebody has died; it never takes effect while the one who made it is living.
	</Fragment>

	<!-- Step 1: NASB95 translation -->
	<Fragment
		step={1}
		layout={{ x: 57, y: 182, width: 877, height: 89 }}
		font={{ font_size: 18.7, wrap: true }}
		zIndex={1}
	>
		<strong>Hebrews 9:16-17 (NASB95)</strong><br/>
		For where a covenant is, there must of necessity be the death of the one who made it. <sup>17</sup>For a covenant is valid only when men are dead, for it is never in force while the one who made it lives.
	</Fragment>

	<!-- Step 2: NKJV translation -->
	<Fragment
		step={2}
		layout={{ x: 57, y: 288, width: 860, height: 89 }}
		font={{ font_size: 18.7, wrap: true }}
		zIndex={4}
	>
		<strong>Hebrews 9:16-17 (NKJV)</strong><br/>
		For where there is a testament, there must also of necessity be the death of the testator. <sup>17</sup> For a testament is in force after men are dead, since it has no power at all while the testator lives.
	</Fragment>

	<!-- Step 3: RSV translation -->
	<Fragment
		step={3}
		layout={{ x: 57, y: 399, width: 829, height: 89 }}
		font={{ font_size: 18.7, wrap: true }}
		zIndex={2}
	>
		<strong>Hebrews 9:16-17 (RSV)</strong><br/>
		For where a will is involved, the death of the one who made it must be established. <sup>17</sup>For a will takes effect only at death, since it is not in force as long as the one who made it is alive.
	</Fragment>
</Slide>
