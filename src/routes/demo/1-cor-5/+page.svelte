<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="scripture-slide">
		<h1>1 Corinthians 5:5</h1>
		<Fragment step={1}>
			<blockquote>
				"deliver such a one to Satan for the destruction of the flesh, 
				so that his <strong>spirit may be saved</strong> in the day of the Lord."
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
