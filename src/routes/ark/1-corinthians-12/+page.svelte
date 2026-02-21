<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Title -->
	<Fragment
		layout={{ x: 100, y: 36, width: 525, height: 44 }}
		font={{ font_size: 36, bold: true, color: 'var(--text-level-0)', align: 'left' }}
	>
		1 Corinthians 12:12-14, 27-28
	</Fragment>

	<!-- Static: Scripture -->
	<Fragment
		layout={{ x: 102, y: 78, width: 763, height: 363 }}
		font={{ font_size: 26.7, v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		12 For even as the body is one and yet has many members, and all the members of the body, though they are many, are one body, so also is Christ. 13 For by one Spirit we were all baptized into one body, whether Jews or Greeks, whether slaves or free, and we were all made to drink of one Spirit.14For the body is not one member, but many. 27 Now you are Christ's body, and individually members of it. 28 And God has appointed in the church, first apostles, second prophets, third teachers, then miracles, then gifts of healings, helps, administrations, various kinds of tongues.
	</Fragment>
</Slide>
