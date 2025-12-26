<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Genesis 1:1-3</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture">
				<p>
					<sup>1</sup> In the beginning God created the heavens and the earth.
				</p>
				<p class="annotation">(Energy & Matter)</p>
			</blockquote>
		</Fragment>

		<Fragment step={2}>
			<blockquote class="scripture">
				<p>
					<sup>2</sup> The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters.
				</p>
				<p class="annotation">(Problem?)</p>
			</blockquote>
		</Fragment>

		<Fragment step={3}>
			<blockquote class="scripture">
				<p>
					<sup>3</sup> Then God said, "Let there be light"; and there was light.
				</p>
				<p class="annotation">(Solution)</p>
			</blockquote>
		</Fragment>
	</div>
</div>
</Slide>

<style>
	.annotation {
		font-style: italic;
		color: #666;
		margin-top: 0.5em;
	}
</style>
