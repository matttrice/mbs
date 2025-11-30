<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Deuteronomy 7:6-8</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>6</sup> "For you are a people holy to the LORD your God; the LORD your God has chosen you to be a people for his own possession, out of all the peoples that are on the face of the earth. <sup>7</sup> It was not because you were more in number than any other people that the LORD set his love upon you and chose you, for you were the fewest of all peoples; <sup>8</sup> but it is because the LORD loves you, and is keeping the oath which he swore to your fathers, that the LORD has brought you out with a mighty hand, and redeemed you from the house of bondage, from the hand of Pharaoh king of Egypt."
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
