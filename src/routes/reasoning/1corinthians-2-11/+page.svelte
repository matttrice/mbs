<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<Slide>
	<!-- Slide background -->
	<div class="slide-bg"></div>
	<!-- Reference overlay for development (press O to toggle) -->
	<ReferenceOverlay src="/export/01-Intro_Reasoning/Slide4.png" />

	<!-- ===== STATIC CONTENT ===== -->

	<!-- Consolidated: Title + Scripture body -->
	<Fragment
		layout={{ x: 72, y: 10, width: 814, height: 515 }}
		font={{ align: 'left', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="1 Corinthians 2:9-16:">
			However, as it is written: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him"--  <sup>10</sup> but <strong>God has revealed it to us by his Spirit. The Spirit searches all things, even the deep things of God.</strong> <sup>11</sup> For who among men knows the thoughts of a man except the man's spirit within him? In the same way no one knows the thoughts of God except the Spirit of God. <sup>12 </sup>We have not received the spirit of the world but the Spirit who is from God, that we may understand what God has freely given us. <sup>13</sup> This is what we speak, <strong>not in words taught us by human wisdom but in words taught by the Spirit, expressing spiritual truths in spiritual words. </strong>  <sup>14</sup> The man without the Spirit does not accept the things that come from the Spirit of God, for they are foolishness to him, and he cannot understand them, because they are spiritually discerned. <sup>15</sup> The spiritual man makes judgments about all things, but he himself is not subject to any man's judgment: <sup>16</sup> "For who has known the mind of the Lord that he may instruct him?  "<strong>But we have the mind of Christ." </strong>
		</ScriptureBlock>
	</Fragment>
</Slide>
