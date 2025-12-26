<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import Slide from '$lib/components/Slide.svelte';

	interface Props {
		slideIndex: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
<div class="slide-content">
		<div class="end-box">
			End of lesson
		</div>
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
