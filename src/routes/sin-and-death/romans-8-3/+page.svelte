<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 73.1, y: 12.2, width: 756.1, height: 35.1 }}
		font={{ font_size: 26.7, bold: true }}
	>
		Romans 8:3
	</Fragment>

	<!-- Romans 8:3 text -->
	<Fragment
		step={1}
		layout={{ x: 73.1, y: 40.6, width: 807.8, height: 104.9 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 20 }}
		animate="fade"
	>
		For what the Law could not do, weak as it was through the flesh, God did: sending His own Son in the likeness of sinful flesh and as an offering for sin, He condemned sin in the flesh,
	</Fragment>

	<!-- Philippians 2:6-7 -->
	<Fragment
		step={2}
		layout={{ x: 73.1, y: 117.3, width: 801.7, height: 113 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 26.7 }}
		animate="fade"
	>
		Philippians 2:6-7 Who, although He existed in the form of God, did not regard equality with God a thing to be grasped, 7 but emptied Himself, taking the form of a bond-servant, and being made in the likeness of men.
	</Fragment>

	<!-- Hebrews 2:14-17 -->
	<Fragment
		step={3}
		layout={{ x: 73.1, y: 229.4, width: 826.1, height: 209.9 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 26.7 }}
		animate="fade"
	>
		Hebrews 2:14-17 Therefore, since the children share in flesh and blood, He Himself likewise also partook of the same, that through death He might render powerless him who had the power of death, that is, the devil, 15 and might free those who through fear of death were subject to slavery all their lives. 16 For assuredly He does not give help to angels, but He gives help to the descendants of Abraham. 17 Therefore, He had to be made like His brethren in all things, so that He might become a merciful and faithful high priest in things pertaining to God, to make propitiation for the sins of the people.
	</Fragment>

	<!-- Hebrews 4:15 -->
	<Fragment
		step={4}
		layout={{ x: 73.1, y: 433.6, width: 801.7, height: 88.8 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', font_size: 26.7 }}
		animate="fade"
	>
		Hebrews 4:15 For we do not have a high priest who cannot sympathize with our weaknesses, but One who has been tempted in all things as we are, yet without sin.
	</Fragment>
</Slide>
