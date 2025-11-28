<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import { fade, fly, scale } from 'svelte/transition';

	interface Props {
		onMaxStep?: (maxStep: number) => void;
	}

	let { onMaxStep }: Props = $props();
</script>

<Slide {onMaxStep}>
<div class="slide-content">
	<!-- Header bar -->
	<Fragment step={1}>
		<div class="header-bar" transition:fade>
			<span class="left-label">LEAST COMPLEX</span>
			<span class="center-label">MORE COMPLEX</span>
			<span class="right-label">MOST COMPLEX</span>
		</div>
	</Fragment>

	<!-- Body = Visible section -->
	<Fragment step={2}>
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
		<Fragment step={4}>
			<div class="column gray" transition:fly={{ y: 20, delay: 100 }}>
				<div class="column-title">Animals</div>
				<div class="column-subtitle">Body</div>
			</div>
		</Fragment>

		<!-- withPrev: appears at same time as Plants (step 3) -->
		<Fragment step={5}>
			<div class="column gray" transition:fly={{ y: 20, delay: 200 }}>
				<div class="column-title">Man</div>
				<div class="column-subtitle">Body</div>
			</div>
		</Fragment>
	</div>

	<!-- Spirit = Invisible section -->
	<Fragment step={6}>
		<div class="spirit-header" transition:fade>Spirit = Invisible</div>
	</Fragment>

	<div class="spirit-columns">
		<Fragment step={7}>
			<div class="spirit-box" style="visibility: hidden;">
				<!-- Placeholder for alignment -->
			</div>
		</Fragment>

		<!-- Animals Spirit - DRILLABLE -->
		<Fragment step={8} drillTo="life/ecclesiastes.3.19">
			<div class="spirit-box drillable-box" transition:fly={{ y: 20 }}>
				<div class="spirit-title">Spirit</div>
				<div class="scripture-ref">Ecclesiastes 3:19-21</div>
			</div>
		</Fragment>

		<!-- Man Spirit - DRILLABLE (separate click) -->
		<Fragment step={9} drillTo="life/1thessalonians.5.23">
			<div class="spirit-box" transition:fly={{ y: 20 }}>
				<div class="spirit-title">Spirit</div>
				<div class="scripture-ref">1 Thess. 5:23</div>
			</div>
		</Fragment>
	</div>

	<!-- Soul section -->
	<Fragment step={10}>
		<div class="soul-section" transition:scale={{ start: 0.9 }}>
			<div class="soul-box">Soul</div>
		</div>
	</Fragment>

	<!-- Blood = Spirit equation -->
	<Fragment step={11}>
		<div class="equation-section" transition:fade>
			<div class="equation">
				<span class="black">Blood</span> = <span class="red">Spirit</span>
			</div>
		</div>
	</Fragment>

	<!-- Final question -->
	<Fragment step={12}>
		<div class="question-box" transition:fly={{ y: 20 }}>Do plants have blood?</div>
	</Fragment>
</div>
</Slide>

<style>
	.slide-content {
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
