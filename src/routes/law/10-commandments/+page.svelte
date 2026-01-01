<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 10 Commandments - Additions vs Codification
	 * Custom Show ID: 18 (10Commandments)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 450, height: 45 }}
		font={{ font_size: 38, bold: true, align: 'left' }}
	>
		10 Commandments
	</Fragment>

	<!-- Commandments List -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 60, width: 450, height: 340 }}
		font={{ font_size: 18, align: 'left', wrap: true }}
		animate="fade"
	>
		<span style="color: #0000CC">+</span> You shall have no other gods before Me.<br/>
		<span style="color: #0000CC">+</span> You shall not make idols.<br/>
		<span style="color: #0000CC">+</span> You shall not take the name of the LORD your God in vain.<br/>
		<span style="color: #0000CC">+</span> Remember the Sabbath day, to keep it holy.<br/>
		<span style="color: #CC0000">*</span> Honor your father and your mother.<br/>
		<span style="color: #CC0000">*</span> You shall not murder.<br/>
		<span style="color: #CC0000">*</span> You shall not commit adultery.<br/>
		<span style="color: #CC0000">*</span> You shall not steal.<br/>
		<span style="color: #CC0000">*</span> You shall not bear false witness against your neighbor.<br/>
		<span style="color: #CC0000">*</span> You shall not covet.
	</Fragment>

	<!-- Legend -->
	<Fragment
		step={2}
		layout={{ x: 30, y: 410, width: 450, height: 80 }}
		font={{ font_size: 16, align: 'left', wrap: true, italic: true }}
		animate="fade"
	>
		<span style="color: #0000CC">+</span> Additions that increased transgression.<br/>
		<span style="color: #CC0000">*</span> Codification of the Moral Law, things your conscience knows by instinct
	</Fragment>

	<!-- Romans reference -->
	<Fragment
		step={3}
		layout={{ x: 490, y: 60, width: 440, height: 280 }}
		font={{ font_size: 17, align: 'left', wrap: true }}
		animate="fade"
	>
		<strong>Romans 2:19-23</strong><br/>
		If you are convinced that you are a guide for the blind, a light for those who are in the dark, an instructor of the foolish, a teacher of little children, because you have in the law the embodiment of knowledge and truth— you, then, who teach others, do you not teach yourself? You who preach against stealing, do you steal? You who say that people should not commit adultery, do you commit adultery? You who abhor idols, do you rob temples? You who boast in the law, do you dishonor God by breaking the law?
	</Fragment>

	<!-- Conclusion -->
	<Fragment
		step={4}
		layout={{ x: 490, y: 360, width: 440, height: 100 }}
		font={{ font_size: 18, italic: true, align: 'left', wrap: true, color: '#0000CC' }}
		animate="fade"
	>
		Most example law violations are moral law (stealing, adultery). Paul (2:12) argues that Gentiles may do these things instinctually.
	</Fragment>
</Slide>
