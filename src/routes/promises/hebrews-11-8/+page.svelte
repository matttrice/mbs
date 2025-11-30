<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Hebrews 11:8-16</h1>
	</header>

	<div class="content">
		<Fragment>
			<blockquote class="scripture" transition:fade>
				<p>
					By faith Abraham obeyed when he was called to go out to a place which he was to receive as an inheritance; and he went out, not knowing where he was to go. <sup>9</sup> By faith he sojourned in the land of promise, as in a foreign land, living in tents with Isaac and Jacob, heirs with him of the same promise. <sup>10</sup> For he looked forward to the city which has foundations, whose builder and maker is God. <sup>11</sup> By faith Sarah herself received power to conceive, even when she was past the age, since she considered him faithful who had promised. <sup>12</sup> Therefore from one man, and him as good as dead, were born descendants as many as the stars of heaven and as the innumerable grains of sand by the seashore. <sup>13</sup> These all died in faith, not having received what was promised, but having seen it and greeted it from afar, and having acknowledged that they were strangers and exiles on the earth. <sup>14</sup> For people who speak thus make it clear that they are seeking a homeland. <sup>15</sup> If they had been thinking of that land from which they had gone out, they would have had opportunity to return. <sup>16</sup> But as it is, they desire a better country, that is, a heavenly one. Therefore God is not ashamed to be called their God, for he has prepared for them a city.
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
		overflow-y: auto;
	}

	.scripture {
		background: #fff;
		padding: 24px 32px;
		margin: 0;
		font-size: 18px;
		line-height: 1.6;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.scripture p {
		margin: 0;
	}

	.scripture sup {
		color: #666;
		font-size: 11px;
		margin-right: 2px;
	}
</style>
