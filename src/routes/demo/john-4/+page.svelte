<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="scripture-slide">
		<h1>John 4:24</h1>
		<Fragment step={1}>
			<blockquote>
				"<strong>God is spirit</strong>, and those who worship him 
				must worship in spirit and truth."
			</blockquote>
		</Fragment>
	</div>
</Slide>

<style>
	.scripture-slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 40px;
		background: #f5f5f5;
	}

	h1 {
		font-size: 36px;
		color: #333;
		margin-bottom: 24px;
	}

	blockquote {
		font-size: 24px;
		line-height: 1.6;
		max-width: 700px;
		text-align: center;
		color: #444;
		font-style: italic;
	}

	strong {
		color: #0066cc;
		font-style: normal;
	}
</style>
