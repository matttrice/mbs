<script lang="ts">
	import { navigation, currentFragment, stackDepth } from '$lib/stores/navigation';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Initialize the presentation with max fragment count
	// 9 "clicks" since some items use withPrev
	onMount(() => {
		navigation.init('life', 9);
	});
</script>

<div class="slide">
	<header>
		<h1>Life</h1>
		<div class="subtitle">
			<span class="question">How many "kinds" of life did God create?</span>
		</div>
		<div class="debug">
			Fragment: {$currentFragment} / 9 | Stack: {$stackDepth}
		</div>
	</header>

	<div class="content">
		<!-- Header bar -->
		<Fragment step={1}>
			<div class="header-bar" transition:fade>
				<span class="left-label">LEAST COMPLEX</span>
				<span class="center-label">MORE COMPLEX</span>
				<span class="right-label">MOST COMPLEX</span>
			</div>
		</Fragment>

		<!-- Body = Visible section -->
		<Fragment step={1}>
			<div class="body-header" transition:fly>Body = Visible</div>
		</Fragment>

		<!-- Three columns: Plants, Animals, Man -->
		<div class="columns">
			<Fragment step={3}>
				<div class="column gray" transition:fly={{ y: 20 }}>
					<div class="column-title">Plants</div>
					<div class="column-subtitle">Body</div>
				</div>
			</Fragment>

			<!-- withPrev: appears at same time as Plants (step 3) -->
			<Fragment step={4} withPrev>
				<div class="column gray" transition:fly={{ y: 20, delay: 100 }}>
					<div class="column-title">Animals</div>
					<div class="column-subtitle">Body</div>
				</div>
			</Fragment>

			<!-- withPrev: appears at same time as Plants (step 3) -->
			<Fragment step={5} withPrev>
				<div class="column gray" transition:fly={{ y: 20, delay: 200 }}>
					<div class="column-title">Man</div>
					<div class="column-subtitle">Body</div>
				</div>
			</Fragment>
		</div>

		<!-- Spirit = Invisible section -->
		<Fragment step={4}>
			<div class="spirit-header" transition:fade>Spirit = Invisible</div>
		</Fragment>

		<div class="spirit-columns">
			<Fragment step={5}>
				<div class="spirit-box" style="visibility: hidden;">
					<!-- Placeholder for alignment -->
				</div>
			</Fragment>

			<!-- Animals Spirit - DRILLABLE -->
			<Fragment step={5} withPrev drillTo="ecclesiastes">
				<div class="spirit-box drillable-box" transition:fly={{ y: 20 }}>
					<div class="spirit-title">Spirit</div>
					<div class="scripture-ref">Ecclesiastes 3:19-21</div>
				</div>
			</Fragment>

			<!-- Man Spirit - DRILLABLE (separate click) -->
			<Fragment step={6} drillTo="thessalonians">
				<div class="spirit-box" transition:fly={{ y: 20 }}>
					<div class="spirit-title">Spirit</div>
					<div class="scripture-ref">1 Thess. 5:23</div>
				</div>
			</Fragment>
		</div>

		<!-- Soul section -->
		<Fragment step={7}>
			<div class="soul-section" transition:scale={{ start: 0.9 }}>
				<div class="soul-box">Soul</div>
			</div>
		</Fragment>

		<!-- Blood = Spirit equation -->
		<Fragment step={8}>
			<div class="equation-section" transition:fade>
				<div class="equation">
					<span class="black">Blood</span> = <span class="red">Spirit</span>
				</div>
			</div>
		</Fragment>

		<!-- Final question -->
		<Fragment step={9}>
			<div class="question-box" transition:fly={{ y: 20 }}>Do plants have blood?</div>
		</Fragment>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%);
		display: flex;
		flex-direction: column;
		padding: 20px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 20px;
	}

	header h1 {
		font-size: 48px;
		margin: 0;
		color: #1a1a1a;
	}

	.subtitle {
		margin-top: 8px;
	}

	.question {
		color: #c00;
		font-size: 20px;
		font-style: italic;
	}

	.debug {
		position: fixed;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.7);
		color: #0f0;
		padding: 8px 12px;
		border-radius: 4px;
		font-family: monospace;
		font-size: 12px;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.header-bar {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		font-weight: bold;
		color: #333;
		text-transform: uppercase;
	}

	.body-header {
		background: #000;
		color: #fff;
		text-align: center;
		padding: 16px;
		font-size: 32px;
		font-weight: bold;
	}

	.columns {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.column {
		width: 250px;
		padding: 30px;
		text-align: center;
		border-radius: 8px;
	}

	.column.gray {
		background: #808080;
		color: #000;
	}

	.column-title {
		font-size: 36px;
		font-weight: bold;
	}

	.column-subtitle {
		font-size: 28px;
		margin-top: 10px;
	}

	.spirit-header {
		background: #0066ff;
		color: #fff;
		text-align: center;
		padding: 12px;
		font-size: 28px;
		font-weight: bold;
	}

	.spirit-columns {
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.spirit-box {
		width: 250px;
		background: #00aaff;
		padding: 20px;
		text-align: center;
		border-radius: 8px;
	}

	.drillable-box {
		box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.5);
	}

	.spirit-title {
		font-size: 32px;
		font-weight: bold;
		color: #0000cc;
	}

	.scripture-ref {
		font-size: 16px;
		margin-top: 8px;
		color: #000;
	}

	.soul-section {
		display: flex;
		justify-content: flex-end;
		padding-right: 100px;
	}

	.soul-box {
		background: #00ddff;
		padding: 20px 60px;
		font-size: 36px;
		font-weight: bold;
		color: #c00;
		border-radius: 8px;
	}

	.equation-section {
		display: flex;
		justify-content: flex-end;
		padding-right: 80px;
	}

	.equation {
		background: #fff;
		border: 3px solid #000;
		padding: 16px 32px;
		font-size: 32px;
		font-weight: bold;
	}

	.equation .black {
		color: #000;
	}

	.equation .red {
		color: #c00;
	}

	.question-box {
		text-align: center;
		font-size: 24px;
		color: #c00;
		font-style: italic;
	}
</style>
