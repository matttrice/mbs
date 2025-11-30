<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import Slide from '$lib/components/Slide.svelte';

	interface Props {
		onMaxStep?: (maxStep: number) => void;
	}

	let { onMaxStep }: Props = $props();
</script>

<Slide {onMaxStep}>
<div class="slide-content">
	<Fragment step={1} withPrev>
		<div class="end-box">
			End of lesson
		</div>
	</Fragment>
</div>
</Slide>

<style>
	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 20px;
	}

	.end-box {
		background: #d0d0d0;
		padding: 12px 24px;
		font-size: 24px;
		font-weight: bold;
		font-style: italic;
		display: inline-block;
		border-left: 4px solid #c0a000;
	}
</style>
