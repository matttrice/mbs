<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<Fragment
		layout={{ x: 109, y: 39, width: 744, height: 392 }}
		font={{ align: 'left', wrap: true }}
	>
		<ScriptureBlock title="Hebrews 11:1-3">
			Now faith is the substance of things hoped for, the <u>evidence of things not seen</u>.  <sup>2</sup>For by it the elders obtained a good testimony.  <br/><sup>3</sup>By faith we understand that the worlds were framed by the word of God, so that the <br/><strong><u>things which are seen</u></strong> were <br/><strong><u>not made of things which are visible</u></strong>.<br/>
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 777, y: 446, width: 153, height: 26 }}
		font={{ font_size: 16.7, wrap: true }}
		zIndex={2}
	>
		(NKJV)
	</Fragment>
</Slide>
