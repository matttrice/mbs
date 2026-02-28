<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 101, y: 35, width: 756, height: 44 }}
		font={{ font_size: 42, align: 'center', color: 'var(--text-level-3)', bold: true }}
		zIndex={2}
	>
		1 Corinthians 15:40-45
	</Fragment>

	<Fragment
		layout={{ x: 103, y: 88, width: 775, height: 334 }}
		font={{ align: 'left', font_size: 28, wrap: true }}
		zIndex={0}
	>
		So it is with the resurrection of the dead. What is sown is perishable, what is raised is imperishable.  It is sown in dishonor, it is raised in glory. It is sown in weakness, it is raised in power.  It is sown a physical body, it is raised a spiritual body. If there is a physical body, there is also a spiritual body.  Thus it is written, "The first man, Adam, became a living being"; the last Adam became a life-giving spirit.  But it is not the spiritual that is first, but the physical, and then the spiritual.  The first man was from the earth, a man of dust; the second man is from heaven.
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 103, y: 88, width: 820, height: 334 }}
		font={{ align: 'left', font_size: 28, wrap: true }}
		fill='var(--bg-light)'
		zIndex={1}
	>
		So it is with the resurrection of the dead. What is sown is <strong><em>perishable</em></strong>, what is raised is <strong><em>imperishable</em></strong>.  It is sown in <strong><em>dishonor</em></strong>, it is raised in <strong><em>glory</em></strong>. It is sown in <strong><em>weakness</em></strong>, it is raised in <strong><em>power</em></strong>.  It is sown a <strong><em>physical body</em></strong>, it is raised a <strong><em>spiritual body</em></strong>. If there is a <strong><em>physical body</em></strong>, there is also a <strong><em>spiritual body</em></strong>.  Thus it is written, "The <strong><em>first man, Adam</em></strong>, became a <strong><em>living being"</em></strong>; the <strong><em>last Adam</em></strong> became a <strong><em>life-giving spirit</em></strong>.  But it is not the spiritual that is first, but the physical, and then the spiritual.  The first man was from the <strong><em>earth</em></strong>, a man of dust; the second man is from <strong><em>heaven</em></strong>.<br/>
	</Fragment>
</Slide>