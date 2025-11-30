<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>1 Corinthians 15:40-45</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					So it is with the resurrection of the dead. What is sown is <em>perishable</em>, what is raised is <strong class="spiritual">imperishable</strong>. It is sown in <em>dishonor</em>, it is raised in <strong class="spiritual">glory</strong>. It is sown in <em>weakness</em>, it is raised in <strong class="spiritual">power</strong>. It is sown a <em>physical body</em>, it is raised a <strong class="spiritual">spiritual body</strong>. If there is a <em>physical body</em>, there is also a <strong class="spiritual">spiritual body</strong>. Thus it is written, "The <em>first man, Adam</em>, became a <em>living being</em>"; the <strong class="spiritual underline">last Adam</strong> became a <strong class="spiritual underline">life-giving spirit</strong>. But it is not the spiritual that is first, but the physical, and then the spiritual. The first man was from the <em>earth</em>, a man of dust; the second man is from <strong class="spiritual">heaven</strong>.
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
		line-height: 1.7;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.scripture p {
		margin: 0;
	}

	.scripture em {
		font-style: italic;
		font-weight: bold;
	}

	.scripture .spiritual {
		color: var(--color-spiritual-text, #0000cc);
	}

	.scripture .underline {
		text-decoration: underline;
	}
</style>
