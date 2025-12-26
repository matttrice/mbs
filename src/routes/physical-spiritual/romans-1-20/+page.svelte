<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Romans 1:20</h1>
	</header>

	<div class="content">
		<Fragment>
			<blockquote class="scripture">
				<p>
					<sup>20</sup> For since the creation of the world God's invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that men are without excuse.
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={1}>
			<p class="study-question">How can invisible qualities be clearly seen?</p>
		</Fragment>
	</div>
</div>
</Slide>

<style>
	.study-question {
		font-size: 1.3em;
		font-weight: bold;
		color: var(--color-level2);
		margin-top: 1.5em;
		text-align: center;
	}
</style>
