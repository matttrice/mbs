<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';

	/**
	 * Slide 4: 1 Corinthians 2:9-16 - Scripture reading with highlights
	 * Canvas: 960 x 540 pixels (16:9 aspect ratio)
	 * Scale factor: 0.625 (from 1536×864 PowerPoint)
	 * 
	 * This slide shows 1 Corinthians 2:9-16 with progressive highlighting
	 */

	interface Props {
		slideIndex?: number;
	}

	let { slideIndex }: Props = $props();
</script>

<Slide {slideIndex}>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide4.png" />

	<!-- ===== STATIC CONTENT ===== -->
	
	<!-- Title: 1 Corinthians 2:9-16 -->
	<!-- Original: x: 116.2, y: 16.3, font_size: 70.7 -->
	<Fragment
		layout={{ x: 73, y: 10, width: 470, height: 50 }}
		font={{ font_size: 30, align: 'left', bold: true }}
		zIndex={1}
	>
		1 Corinthians 2:9-16:
	</Fragment>

	<!-- Scripture text - static base version -->
	<!-- Original: x: 143.8, y: 77.7, width: 1273.5, height: 762.3, font_size: 38.7 -->
	<Fragment
		layout={{ x: 90, y: 49, width: 796, height: 476 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		zIndex={0}
	>
		<div class="scripture-text">
			However, as it is written: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him"— <sup>10</sup> but God has revealed it to us by his Spirit. The Spirit searches all things, even the deep things of God. <sup>11</sup> For who among men knows the thoughts of a man except the man's spirit within him? In the same way no one knows the thoughts of God except the Spirit of God. <sup>12</sup> We have not received the spirit of the world but the Spirit who is from God, that we may understand what God has freely given us. <sup>13</sup> This is what we speak, not in words taught us by human wisdom but in words taught by the Spirit, expressing spiritual truths in spiritual words. <sup>14</sup> The man without the Spirit does not accept the things that come from the Spirit of God, for they are foolishness to him, and he cannot understand them, because they are spiritually discerned. <sup>15</sup> The spiritual man makes judgments about all things, but he himself is not subject to any man's judgment: <sup>16</sup> "For who has known the mind of the Lord that he may instruct him?" <strong>"But we have the mind of Christ."</strong>
		</div>
	</Fragment>

	<!-- ===== ANIMATION SEQUENCE ===== -->
	<!-- Steps 1-3: Progressive highlighting overlays -->
	<!-- These overlay the text with highlighted portions -->

	<Fragment
		step={1}
		layout={{ x: 90, y: 49, width: 796, height: 476 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		fill="var(--color-bg-ghost)"
		zIndex={2}
	>
		<div class="scripture-text highlighted">
			However, as it is written: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him"— <sup>10</sup> <mark>but God has revealed it to us by his Spirit.</mark> The Spirit searches all things, even the deep things of God. <sup>11</sup> For who among men knows the thoughts of a man except the man's spirit within him? <mark>In the same way no one knows the thoughts of God except the Spirit of God.</mark> <sup>12</sup> We have not received the spirit of the world but the Spirit who is from God, <mark>that we may understand what God has freely given us.</mark> <sup>13</sup> This is what we speak, not in words taught us by human wisdom but in words taught by the Spirit, expressing spiritual truths in spiritual words. <sup>14</sup> The man without the Spirit does not accept the things that come from the Spirit of God, for they are foolishness to him, and he cannot understand them, because they are spiritually discerned. <sup>15</sup> The spiritual man makes judgments about all things, but he himself is not subject to any man's judgment: <sup>16</sup> "For who has known the mind of the Lord that he may instruct him?" <strong>"But we have the mind of Christ."</strong>
		</div>
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 90, y: 49, width: 796, height: 476 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		fill="var(--color-bg-ghost)"
		zIndex={3}
	>
		<div class="scripture-text highlighted">
			However, as it is written: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him"— <sup>10</sup> <mark>but God has revealed it to us by his Spirit.</mark> The Spirit searches all things, even the deep things of God. <sup>11</sup> For who among men knows the thoughts of a man except the man's spirit within him? <mark>In the same way no one knows the thoughts of God except the Spirit of God.</mark> <sup>12</sup> We have not received the spirit of the world but the Spirit who is from God, <mark>that we may understand what God has freely given us.</mark> <sup>13</sup> This is what we speak, not in words taught us by human wisdom but <mark>in words taught by the Spirit, expressing spiritual truths in spiritual words.</mark> <sup>14</sup> The man without the Spirit does not accept the things that come from the Spirit of God, for they are foolishness to him, <mark>and he cannot understand them, because they are spiritually discerned.</mark> <sup>15</sup> The spiritual man makes judgments about all things, but he himself is not subject to any man's judgment: <sup>16</sup> "For who has known the mind of the Lord that he may instruct him?" <strong>"But we have the mind of Christ."</strong>
		</div>
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 90, y: 49, width: 796, height: 476 }}
		font={{ font_size: 20, align: 'left', wrap: true }}
		fill="var(--color-bg-ghost)"
		zIndex={4}
	>
		<div class="scripture-text highlighted final">
			However, as it is written: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him"— <sup>10</sup> <mark>but God has revealed it to us by his Spirit.</mark> The Spirit searches all things, even the deep things of God. <sup>11</sup> For who among men knows the thoughts of a man except the man's spirit within him? <mark>In the same way no one knows the thoughts of God except the Spirit of God.</mark> <sup>12</sup> We have not received the spirit of the world but the Spirit who is from God, <mark>that we may understand what God has freely given us.</mark> <sup>13</sup> This is what we speak, not in words taught us by human wisdom but <mark>in words taught by the Spirit, expressing spiritual truths in spiritual words.</mark> <sup>14</sup> The man without the Spirit does not accept the things that come from the Spirit of God, for they are foolishness to him, <mark>and he cannot understand them, because they are spiritually discerned.</mark> <sup>15</sup> The spiritual man makes judgments about all things, but he himself is not subject to any man's judgment: <sup>16</sup> "For who has known the mind of the Lord that he may instruct him?" <strong class="emphasis">"But we have the mind of Christ."</strong>
		</div>
	</Fragment>
</Slide>

<style>
	.scripture-text {
		line-height: 1.6;
		padding: 10px;
	}

	.scripture-text mark {
		background-color: #ffff99;
		padding: 2px 0;
	}

	.scripture-text .emphasis {
		color: #0000CC;
	}
</style>
