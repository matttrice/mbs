<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Hebrews 12:22-24</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>22</sup> But you have come to Mount Zion and to the city of the living God, the heavenly Jerusalem, and to innumerable angels in festal gathering, <sup>23</sup> and to the assembly of the first-born who are enrolled in heaven, and to a judge who is God of all, and to the spirits of just men made perfect, <sup>24</sup> and to Jesus, the mediator of a new covenant, and to the sprinkled blood that speaks more graciously than the blood of Abel.
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
