<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade, fly, scale } from 'svelte/transition';

	// This slide has 12 fragments (simplified for demo)
	export const fragmentCount = 12;
</script>

<div class="slide-content">
	<!-- Headers -->
	<div class="header-row">
		<Fragment step={1}>
			<div class="man-header" transition:fly={{ x: -40 }}>
				<h2>Man</h2>
				<div class="subtitle">(Made in the image of God)</div>
			</div>
		</Fragment>
		<Fragment step={2}>
			<div class="heb-header" transition:scale={{ start: 0.9 }}>
				<div class="verse-ref">Hebrews 4:12</div>
				<div class="note">3 parts identified by many</div>
			</div>
		</Fragment>
		<Fragment step={3}>
			<div class="god-header" transition:fly={{ x: 40 }}>
				<h2>God</h2>
			</div>
		</Fragment>
	</div>

	<!-- Three-part comparison -->
	<div class="comparison-grid">
		<!-- Soul row -->
		<Fragment step={4}>
			<div class="part-row">
				<div class="man-part soul-part">
					<h3>Soul</h3>
					<p>Think, Reason, Choose</p>
					<p>Judge, Plan, Create, Progress</p>
					<p>Logic, Rational</p>
				</div>
				<div class="god-part">
					<h3 class="father">Father</h3>
					<p>Creator, Designer,</p>
					<p>Planner, progressive,</p>
					<p>dominant</p>
				</div>
			</div>
		</Fragment>

		<!-- Spirit row -->
		<Fragment step={5}>
			<div class="part-row">
				<div class="man-part spirit-part">
					<h3>Spirit</h3>
					<p>Unreason, Instinct, basic emotions</p>
					<div class="refs">
						<span class="ref">Jude 1:10</span>
						<span class="ref">2 Peter 2:12</span>
					</div>
				</div>
				<div class="god-part">
					<h3 class="son">Son</h3>
					<p>Word governs the</p>
					<p>Church which is the</p>
					<p>body of Christ – rules,</p>
					<p>regulations, restrictions</p>
				</div>
			</div>
		</Fragment>

		<!-- Body row -->
		<Fragment step={6}>
			<div class="part-row">
				<div class="man-part body-part">
					<h3>Body</h3>
					<p>Structure, boundary,</p>
					<p>house, governs, restricts</p>
				</div>
				<div class="god-part">
					<h3 class="holy-spirit">Holy Spirit</h3>
					<p>Implementation of His</p>
					<p>will - life to the body</p>
					<p>of Christ. Defies logic.</p>
				</div>
			</div>
		</Fragment>
	</div>

	<!-- Additional references -->
	<div class="references-section">
		<Fragment step={7}>
			<div class="ref-box" transition:fly={{ y: 20 }}>
				<div class="ref-title">Greek & Hebrew Definitions</div>
			</div>
		</Fragment>

		<Fragment step={8}>
			<div class="comparison-box" transition:fly={{ y: 20 }}>
				<div class="comp-column">
					<h4>Freud</h4>
					<p>Id / Ego / Superego</p>
				</div>
			</div>
		</Fragment>

		<Fragment step={9}>
			<div class="comparison-box" transition:fly={{ y: 20 }}>
				<div class="comp-column">
					<h4>Harris</h4>
					<p>Parent / Adult / Child</p>
				</div>
			</div>
		</Fragment>
	</div>

	<!-- Scripture references for drills -->
	<div class="drill-refs">
		<Fragment step={10} drillTo="1-cor-5">
			<div class="drill-ref" transition:fade>
				1 Corinthians 5:5 "spirit may be saved"
			</div>
		</Fragment>
		<Fragment step={11} drillTo="john-4">
			<div class="drill-ref" transition:fade>
				John 4:24 "God is spirit"
			</div>
		</Fragment>
		<Fragment step={12}>
			<div class="invisible-note" transition:fade>
				Invisible part: Ingredient of animal and human life
			</div>
		</Fragment>
	</div>
</div>

<style>
	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px;
	}

	.header-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0 40px;
	}

	.man-header, .god-header {
		text-align: center;
	}

	.man-header h2, .god-header h2 {
		font-size: 36px;
		margin: 0;
	}

	.man-header {
		color: #000;
	}

	.god-header h2 {
		color: #0066cc;
	}

	.subtitle {
		font-size: 16px;
		color: #666;
	}

	.heb-header {
		text-align: center;
		padding: 16px 24px;
		background: rgba(0, 100, 255, 0.1);
		border-radius: 8px;
	}

	.verse-ref {
		font-size: 24px;
		font-weight: bold;
		color: #0066cc;
	}

	.note {
		font-size: 14px;
		color: #666;
	}

	.comparison-grid {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.part-row {
		display: flex;
		justify-content: space-between;
		gap: 40px;
		padding: 0 40px;
	}

	.man-part, .god-part {
		flex: 1;
		padding: 16px;
		border-radius: 8px;
	}

	.man-part h3 {
		margin: 0 0 8px 0;
		font-size: 28px;
	}

	.god-part h3 {
		margin: 0 0 8px 0;
		font-size: 28px;
	}

	.man-part p, .god-part p {
		margin: 4px 0;
		font-size: 14px;
	}

	.soul-part {
		background: #aaffff;
	}

	.soul-part h3 {
		color: #c00;
	}

	.spirit-part {
		background: #aaddff;
	}

	.spirit-part h3 {
		color: #0066cc;
	}

	.body-part {
		background: #e0e0e0;
	}

	.god-part {
		background: #d0e8ff;
		text-align: right;
	}

	.father {
		color: #0066cc;
	}

	.son {
		color: #0066cc;
	}

	.holy-spirit {
		color: #00aa00;
	}

	.refs {
		display: flex;
		gap: 12px;
		margin-top: 8px;
	}

	.ref {
		font-size: 12px;
		color: #666;
		background: rgba(255, 255, 255, 0.5);
		padding: 4px 8px;
		border-radius: 4px;
	}

	.references-section {
		display: flex;
		gap: 20px;
		justify-content: center;
		margin-top: 16px;
	}

	.ref-box, .comparison-box {
		padding: 12px 20px;
		background: rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		text-align: center;
	}

	.ref-title {
		font-weight: bold;
		color: #333;
	}

	.comp-column h4 {
		margin: 0 0 4px 0;
		font-size: 16px;
	}

	.comp-column p {
		margin: 0;
		font-size: 12px;
		color: #666;
	}

	.drill-refs {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: center;
		margin-top: 12px;
	}

	.drill-ref {
		padding: 8px 16px;
		background: rgba(255, 200, 0, 0.2);
		border: 2px solid rgba(255, 200, 0, 0.5);
		border-radius: 8px;
		font-size: 14px;
		cursor: pointer;
	}

	.invisible-note {
		font-size: 14px;
		color: #666;
		font-style: italic;
		padding: 8px 16px;
	}
</style>
