<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: Romans 3:23 -->
	<Fragment
		layout={{ x: 102, y: 17, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		Romans 3:23
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 56, width: 741, height: 30 }}
		font={{ wrap: true, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		…There is no distinction; 23 for all have sinned and fall short of the glory of God,
	</Fragment>

	<!-- Isaiah 59:2 -->
	<Fragment
		layout={{ x: 102, y: 107, width: 718, height: 87 }}
		font={{ wrap: true, font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
		zIndex={2}
	>
		Isaiah 59:2 But your iniquities have made a separation between you and your God, And your sins have hidden His face from you so that He does not hear.
	</Fragment>

	<!-- Romans 6:23 -->
	<Fragment
		layout={{ x: 107, y: 229, width: 681, height: 82 }}
		font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
		zIndex={3}
	>
		Romans 6:23For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.
	</Fragment>
</Slide>
