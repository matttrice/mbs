<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import Arrow from '$lib/components/Arrow.svelte';
	import { fade, fly } from 'svelte/transition';

	interface Props {
		onMaxStep?: (maxStep: number) => void;
	}

	let { onMaxStep }: Props = $props();
</script>

<Slide {onMaxStep}>
<div class="slide-content">
	<!-- Main three-column layout -->
	<div class="main-layout">
		<!-- Left Column: Physical -->
		<div class="column physical-column">
			<div class="column-header">Physical</div>
			
			<Fragment step={1}>
				<div class="item" transition:fade>Great Nation</div>
			</Fragment>
			
			<Fragment step={4} drillTo="promises/deuteronomy-7-6">
				<div class="item scripture-link" transition:fade>Deuteronomy 7:6-8</div>
			</Fragment>
			
			<Fragment step={5}>
				<div class="item nation-box" transition:fade>Israel</div>
			</Fragment>
			
			<Fragment step={2}>
				<div class="item" transition:fade>Land of Canaan</div>
			</Fragment>
			
			<Fragment step={6} drillTo="promises/genesis-13-14">
				<div class="item scripture-link" transition:fade>Genesis 13:14-15</div>
			</Fragment>
			
			<Fragment step={13}>
				<div class="item nation-box" transition:fade>Canaan</div>
			</Fragment>
			
			<Fragment step={14}>
				<div class="item question" transition:fade>
					<em>Is physical Israel a great nation today?<br/>In possession of Canaan forever?</em>
				</div>
			</Fragment>
			
			<Fragment step={3}>
				<div class="item" transition:fade>Families Blessed</div>
			</Fragment>
			
			<Fragment step={22} drillTo="promises/galatians-3-16">
				<div class="item scripture-link" transition:fade>Galatians 3:16-29</div>
			</Fragment>
		</div>

		<!-- Center Column: Questions and Genealogy -->
		<div class="column center-column">
			<!-- Top questions area -->
			<div class="questions-area">
				<Fragment step={7} drillTo="promises/two-choices">
					<div class="question-link" transition:fade>
						<em>What kinds of things<br/>are forever?</em>
					</div>
				</Fragment>
				
				<Fragment step={17} drillTo="promises/hebrews-3-14">
					<div class="question-link small" transition:fade>
						<em>What if this point is missed?</em><br/>
						<span class="scripture-ref">Hebrews 3:11 - 4:11</span>
					</div>
				</Fragment>
				
				<div class="comparison-row">
					<Fragment step={18}>
						<div class="comparison" transition:fade>Joshua…Savior…<br/>Israel…Canaan</div>
					</Fragment>
					<Fragment step={19}>
						<div class="comparison spiritual-text" transition:fade>Jesus…Savior…<br/>Church…Heaven</div>
					</Fragment>
				</div>
			</div>

			<!-- Genealogy Tree -->
			<div class="genealogy">
				<!-- Abraham at top -->
				<div class="genealogy-row">
					<Fragment step={23}>
						<div class="person abraham" transition:fade>Abraham</div>
					</Fragment>
				</div>
				
				<!-- Ishmael and Isaac row with arrows -->
				<div class="genealogy-row split-row">
					<div class="branch left-branch">
						<Fragment step={31}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={31}>
							<div class="person" transition:fade>Ishmael</div>
						</Fragment>
					</div>
					<div class="branch right-branch">
						<Fragment step={24}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={24}>
							<div class="person" transition:fade>Isaac</div>
						</Fragment>
					</div>
				</div>
				
				<!-- Esau and Jacob row -->
				<div class="genealogy-row split-row">
					<div class="branch left-branch">
						<Fragment step={32}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={32}>
							<div class="person" transition:fade>Arabic Nations</div>
						</Fragment>
					</div>
					<div class="branch right-branch split-inner">
						<div class="inner-branch">
							<Fragment step={25}>
								<div class="arrow-container" transition:fade>
									<Arrow direction="down" size={16} />
								</div>
							</Fragment>
							<Fragment step={25}>
								<div class="person small" transition:fade>Esau</div>
							</Fragment>
						</div>
						<div class="inner-branch">
							<Fragment step={26}>
								<div class="arrow-container" transition:fade>
									<Arrow direction="down" size={20} />
								</div>
							</Fragment>
							<Fragment step={26}>
								<div class="person" transition:fade>Jacob</div>
							</Fragment>
						</div>
					</div>
				</div>
				
				<!-- 12 Sons row -->
				<div class="genealogy-row">
					<div class="branch left-branch">
						<Fragment step={33}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={33}>
							<div class="person" transition:fade>Mohammed</div>
						</Fragment>
					</div>
					<div class="branch right-branch">
						<Fragment step={27}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={27}>
							<div class="person" transition:fade>12 Sons<br/><small>(Tribes)</small></div>
						</Fragment>
					</div>
				</div>
				
				<!-- Judah row -->
				<div class="genealogy-row">
					<div class="branch left-branch">
						<Fragment step={34}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={34}>
							<div class="person" transition:fade>Islam</div>
						</Fragment>
					</div>
					<div class="branch right-branch">
						<Fragment step={28}>
							<div class="arrow-container" transition:fade>
								<Arrow direction="down" size={20} />
							</div>
						</Fragment>
						<Fragment step={28}>
							<div class="person" transition:fade>Judah</div>
						</Fragment>
					</div>
				</div>
				
				<!-- David row -->
				<div class="genealogy-row david-row">
					<Fragment step={29}>
						<div class="arrow-container" transition:fade>
							<Arrow direction="down" size={20} />
						</div>
					</Fragment>
					<Fragment step={29}>
						<div class="person david" transition:fade>David</div>
					</Fragment>
				</div>
				
				<!-- Quote -->
				<Fragment step={30}>
					<div class="quote" transition:fade>
						"if you are Christ's, then you are Abraham's offspring,"
					</div>
				</Fragment>
			</div>
		</div>

		<!-- Right Column: Spiritual -->
		<div class="column spiritual-column">
			<div class="column-header">Spiritual</div>
			
			<Fragment step={12}>
				<div class="item" transition:fade>Chosen race,<br/>royal priesthood,<br/>holy nation</div>
			</Fragment>
			
			<Fragment step={10} drillTo="promises/1peter-2-9">
				<div class="item scripture-link" transition:fade>1Peter 2:9</div>
			</Fragment>
			
			<Fragment step={11}>
				<div class="item nation-box" transition:fade>Church</div>
			</Fragment>
			
			<Fragment step={15} drillTo="promises/hebrews-11-8">
				<div class="item scripture-link" transition:fade>Hebrews 11:8-16</div>
			</Fragment>
			
			<Fragment step={16}>
				<div class="item nation-box" transition:fade>Heaven</div>
			</Fragment>
			
			<Fragment step={20} drillTo="promises/luke-1-30">
				<div class="item scripture-link" transition:fade>Luke 1:30-33</div>
			</Fragment>
			
			<Fragment step={21}>
				<div class="item nation-box" transition:fade>Christ</div>
			</Fragment>
		</div>
	</div>
</div>
</Slide>

<style>
	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.main-layout {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1.2fr 1fr;
		gap: 8px;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px;
		gap: 10px;
	}

	.physical-column {
		background: var(--color-physical-bg, #808080);
	}

	.spiritual-column {
		background: var(--color-spiritual-bg, #00aaff);
	}

	.center-column {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.column-header {
		font-size: 36px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 12px;
	}

	.physical-column .column-header {
		color: #000;
	}

	.spiritual-column .column-header {
		color: var(--color-spiritual-text, #0000cc);
	}

	.item {
		font-size: 20px;
		padding: 6px 12px;
		text-align: center;
	}

	.scripture-link {
		color: var(--color-scripture-ref, #0000cc);
		text-decoration: underline;
		cursor: pointer;
		font-size: 18px;
	}

	.nation-box {
		background: var(--color-spiritual-bg, #00aaff);
		color: var(--color-spiritual-text, #0000cc);
		font-weight: bold;
		font-size: 24px;
		padding: 10px 24px;
		text-align: center;
		border: 3px solid var(--color-spiritual-text, #0000cc);
	}

	.physical-column .nation-box {
		background: #6699ff;
	}

	.question {
		font-size: 14px;
		color: #c00;
		text-align: center;
	}

	.questions-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 12px;
	}

	.question-link {
		color: var(--color-spiritual-text, #0000cc);
		font-style: italic;
		text-align: center;
		cursor: pointer;
		font-size: 18px;
	}

	.question-link.small {
		font-size: 15px;
	}

	.scripture-ref {
		color: var(--color-scripture-ref, #0000cc);
		text-decoration: underline;
	}

	.comparison-row {
		display: flex;
		gap: 24px;
		justify-content: center;
	}

	.comparison {
		font-size: 16px;
		text-align: center;
	}

	.spiritual-text {
		color: var(--color-spiritual-text, #0000cc);
	}

	/* Genealogy Tree Styles */
	.genealogy {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		padding: 12px;
	}

	.genealogy-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
	}

	.split-row {
		width: 100%;
		justify-content: space-around;
	}

	.branch {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}

	.split-inner {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	.inner-branch {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}

	.arrow-container {
		display: flex;
		justify-content: center;
	}

	.person {
		background: #fff;
		border: 2px solid #000;
		padding: 6px 16px;
		font-size: 16px;
		font-weight: bold;
		text-align: center;
	}

	.person.small {
		font-size: 14px;
		padding: 4px 10px;
	}

	.person.abraham {
		font-size: 22px;
		padding: 10px 24px;
	}

	.person.david {
		background: #fff;
	}

	.david-row {
		flex-direction: column;
		margin-left: 80px;
	}

	.quote {
		font-size: 15px;
		font-style: italic;
		text-align: center;
		margin-top: 10px;
		padding: 10px;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 4px;
	}
</style>
