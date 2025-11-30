<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Romans 8:2-3</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>2</sup> For the law of the Spirit of life in Christ Jesus has set me free from the law of sin and death. <sup>3</sup> For God has done what the law, weakened by the flesh, could not do: sending his own Son in the likeness of sinful flesh and for sin, he condemned sin in the flesh,
				</p>
			</blockquote>
		</Fragment>
	</div>
</div>
</Slide>

<style>
	.drill-content {
		width: 100%;
		height: 100%;
		background: var(--color-bg-light, #e8e8e8);
		display: flex;
		flex-direction: column;
		padding: 40px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 30px;
	}

	header h1 {
		font-size: 36px;
		margin: 0;
		color: #000;
		font-weight: bold;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 800px;
		margin: 0 auto;
	}

	.scripture {
		background: #fff;
		padding: 24px 32px;
		margin: 0;
		font-size: 20px;
		line-height: 1.6;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.scripture p {
		margin: 0;
	}

	.scripture sup {
		color: #666;
		font-size: 12px;
		margin-right: 2px;
	}
</style>
