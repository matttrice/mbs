<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Hebrews 4:1-11</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					Therefore, since the promise of entering his rest still stands, let us be careful that none of you be found to have fallen short of it. <sup>2</sup> For we also have had the good news proclaimed to us, just as they did; but the message they heard was of no value to them, because they did not share the faith of those who obeyed. <sup>3</sup> Now we who have believed enter that rest, just as God has said, "So I declared on oath in my anger, 'They shall never enter my rest.'" And yet his works have been finished since the creation of the world. <sup>4</sup> For somewhere he has spoken about the seventh day in these words: "On the seventh day God rested from all his works." <sup>5</sup> And again in the passage above he says, "They shall never enter my rest." <sup>6</sup> Therefore since it still remains for some to enter that rest, and since those who formerly had the good news proclaimed to them did not go in because of their disobedience, <sup>7</sup> God again set a certain day, calling it "Today." This he did when a long time later he spoke through David, as in the passage already quoted: "Today, if you hear his voice, do not harden your hearts." <sup>8</sup> For if Joshua had given them rest, God would not have spoken later about another day. <sup>9</sup> There remains, then, a Sabbath-rest for the people of God; <sup>10</sup> for anyone who enters God's rest also rests from their works, just as God did from his. <sup>11</sup> Let us, therefore, make every effort to enter that rest, so that no one will perish by following their example of disobedience.
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
		font-size: 17px;
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
