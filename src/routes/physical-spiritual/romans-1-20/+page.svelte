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

		<Fragment 
		step={1}
		layout={{ x: 73, y: 49, width: 796, height: 476 }}
		font={{ font_size: 33, align: 'center', wrap: true, color: 'var(--bg-level-3)', bold: true }}

		>
			How can invisible qualities be clearly seen?
		</Fragment>
	</div>
</div>
</Slide>
