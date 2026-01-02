<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 85.9, y: 28.1, width: 756.1, height: 44.4 }}
		font={{ font_size: 33.3, bold: true, color: '#000000' }}
	>
		Acts 2:37-39
	</Fragment>

	<!-- Acts 2:37-39 -->
	<Fragment
		step={1}
		layout={{ x: 82.7, y: 68.6, width: 779.9, height: 266.4 }}
		line={{ width: 1 }}
		font={{ wrap: true, font_size: 26.7 }}
		animate="fade"
	>
		37 When the people heard this, they were cut to the heart and said to Peter and the other apostles, "Brothers, what shall we do?" 38 Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. 39 The promise is for you and your children and for all who are far off—for all whom the Lord our God will call."
	</Fragment>

	<!-- Acts 22:16 -->
	<Fragment
		step={2}
		layout={{ x: 84.6, y: 361.9, width: 765.8, height: 113 }}
		line={{ width: 1 }}
		font={{ v_align: 'middle', wrap: true, font_size: 33.3 }}
		animate="fade"
	>
		Acts 22:16 'Now why do you delay? Get up and be baptized, and wash away your sins, calling on His name.'
	</Fragment>
</Slide>
