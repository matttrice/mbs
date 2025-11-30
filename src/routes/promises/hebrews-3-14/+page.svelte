<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Hebrews 3:14-19</h1>
	</header>

	<div class="content">
		<blockquote class="scripture main">
			<p>
				<sup>14</sup> We have come to share in Christ, if indeed we hold our original conviction firmly to the very end. <sup>15</sup> As has just been said: "Today, if you hear his voice, do not harden your hearts as you did in the rebellion." <sup>16</sup> Who were they who heard and rebelled? Were they not all those Moses led out of Egypt? <sup>17</sup> And with whom was he angry for forty years? Was it not with those who sinned, whose bodies perished in the wilderness? <sup>18</sup> And to whom did God swear that they would never enter his rest if not to those who disobeyed? <sup>19</sup> So we see that they were not able to enter, because of their unbelief.
			</p>
		</blockquote>

		<Fragment step={1}>
			<blockquote class="scripture reference" transition:fade>
				<h3>Psalm 95:7-8</h3>
				<p>
					"Today, if you will hear His voice, <sup>8</sup> Do not harden your hearts as at Meribah, As on the day of Massah in the wilderness, <sup>9</sup> When your fathers put Me to the test, They tested Me, though they had seen My work. <sup>10</sup> For forty years I was disgusted with that generation, And said they are a people who err in their heart, And they do not know My ways."
				</p>
			</blockquote>
		</Fragment>

		<Fragment step={2} drillTo="promises/hebrews-4-1">
			<blockquote class="scripture reference" transition:fade>
				<h3>Exodus 17:1-3, 7</h3>
				<p>
					They camped at Rephidim, but there was no water for the people to drink. <sup>2</sup> So they quarreled with Moses and said, "Give us water to drink." Moses replied, "Why do you quarrel with me? Why do you put the Lord to the test?" <sup>3</sup> But the people were thirsty for water there, and they grumbled against Moses. They said, "Why did you bring us up out of Egypt to make us and our children and livestock die of thirst?" <sup>7</sup> And he called the place Massah and Meribah because the Israelites quarreled and because they tested the Lord saying, "Is the Lord among us or not?"
				</p>
				<p class="context">(vs 7 for context)</p>
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
		padding: 30px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 20px;
	}

	header h1 {
		font-size: 32px;
		margin: 0;
		color: #000;
		font-weight: bold;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-width: 900px;
		margin: 0 auto;
		overflow-y: auto;
	}

	.scripture {
		background: #fff;
		padding: 20px 28px;
		margin: 0;
		font-size: 16px;
		line-height: 1.5;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.scripture.main {
		font-size: 18px;
	}

	.scripture.reference {
		background: #f5f5f5;
		border-left: 4px solid #666;
	}

	.scripture h3 {
		margin: 0 0 12px 0;
		font-size: 16px;
		color: #333;
	}

	.scripture p {
		margin: 0;
	}

	.scripture sup {
		color: #666;
		font-size: 11px;
		margin-right: 2px;
	}

	.context {
		font-style: italic;
		color: #666;
		margin-top: 8px !important;
		font-size: 14px;
	}
</style>
