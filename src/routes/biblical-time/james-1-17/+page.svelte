<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="drill-content">
		<header>
			<h1>James 1:17</h1>
		</header>

		<div class="content">
			<Fragment>
				<blockquote class="scripture">
					<p>
						Every good thing given and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shifting shadow.
					</p>
				</blockquote>
			</Fragment>

			<Fragment step={1}>
				<p class="question"><em>If God never changes and is consistent, why two covenants?</em></p>
			</Fragment>

			<Fragment step={2}>
				<blockquote class="scripture">
					<p>
						<strong>Malachi 3:6</strong> "For I, the LORD, do not change; therefore you, O sons of Jacob, are not consumed.
					</p>
				</blockquote>
			</Fragment>

			<Fragment step={3}>
				<blockquote class="scripture">
					<p>
						<strong>1 Samuel 15:29</strong> "Also the Glory of Israel will not lie or change His mind; for He is not a man that He should change His mind."
					</p>
				</blockquote>
			</Fragment>

			<Fragment step={4}>
				<blockquote class="scripture">
					<p>
						<strong>Hebrews 13:8</strong> Jesus Christ is the same yesterday and today and forever.
					</p>
				</blockquote>
			</Fragment>

			<Fragment step={5}>
				<p class="answer"><strong>If God doesn't change, then why two covenants??</strong></p>
				<p class="highlight"><span class="spiritual">Spiritual</span> = <span class="physical">Physical</span></p>
			</Fragment>
		</div>
	</div>
</Slide>

<style>
	.question {
		font-size: 1.2em;
		margin: 1em 0;
	}
	.answer {
		font-size: 1.3em;
		margin: 1em 0;
	}
	.highlight {
		font-size: 2em;
		font-weight: bold;
		text-align: center;
		margin-top: 1em;
	}
	.spiritual {
		color: var(--bg-level-3);
	}
	.physical {
		color: var(--bg-level-1);
	}
</style>
