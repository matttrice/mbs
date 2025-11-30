<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Genesis 13:14-15</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>14</sup> The LORD said to Abram, after Lot had separated from him, "Lift up your eyes, and look from the place where you are, northward and southward and eastward and westward; <sup>15</sup> for all the land which you see I will give to you and to your descendants <strong>forever</strong>.
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={2}>
			<div class="question" transition:fade>
				What kinds of things are forever?
			</div>
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
		gap: 24px;
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

	.question {
		font-size: 24px;
		font-style: italic;
		text-align: center;
		color: #333;
		padding: 20px;
		background: #fff;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
</style>
