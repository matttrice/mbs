<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Rect } from '$lib/components/svg';
</script>

<Slide>
	<!-- Static orange rect background -->
	<Fragment>
		<Rect x={614} y={59} width={328} height={163} fill="var(--bg-cmd-law)" stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={0} />
	</Fragment>

	<!-- Title -->
	<Fragment
		layout={{ x: 583, y: 11, width: 365, height: 44 }}
		font={{ font_size: 36.7, bold: true }}
	>
		10 Commandments
	</Fragment>

	<!-- Commandments list -->
	<Fragment
		layout={{ x: 36, y: 18, width: 569, height: 250 }}
		font={{ font_size: 20, align: 'left', v_align: 'top', wrap: true }}
	>
		+ You shall have no other gods before Me.<br>+ You shall not make idols.<br>+ You shall not take the name of the LORD your God in vain.<br>+ Remember the Sabbath day, to keep it holy.<br>* Honor your father and your mother. <br>* You shall not murder.<br>* You shall not commit adultery.<br>* You shall not steal.<br>* You shall not bear false witness against your neighbor.<br>* You shall not covet.
	</Fragment>

	<!-- Legend -->
	<Fragment
		layout={{ x: 626, y: 76, width: 304, height: 131 }}
		font={{ font_size: 20, align: 'left', v_align: 'top', wrap: true }}
		fill="var(--bg-ghost)"
		line={{ width: 4, color: 'var(--stroke-level-0)' }}
	>
		+ Additions that increased   transgression.<br>* Codification of the Moral Law, things your conscience knows by instinct
	</Fragment>

	<!-- Step 1: Romans 2:19-23 scripture -->
	<Fragment
		step={1}
		layout={{ x: 64, y: 265, width: 699, height: 212 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 2:19-23">
			If you are convinced that you are a guide for the blind, a light for those who are in the dark, <sup>20</sup> an instructor of the foolish, a teacher of little children, because you have in the law the embodiment of knowledge and truth-- <sup>21</sup> you, then, who teach others, do you not teach yourself? You who preach against stealing, do you steal? <sup>22</sup> You who say that people should not commit adultery, do you commit adultery? You who abhor idols, do you rob temples? <sup>23</sup> You who boast in the law, do you dishonor God by breaking the law?
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Annotation with orange rect background -->
	<Fragment step={2}>
		<Rect x={763} y={238} width={179} height={281} fill="var(--bg-cmd-law)" stroke={{ width: 4, color: 'var(--stroke-level-0)' }} zIndex={5} />
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 779, y: 251, width: 151, height: 258 }}
		font={{ font_size: 20, wrap: true }}
		fill="var(--bg-ghost)"
		line={{ width: 4, color: 'var(--stroke-level-0)' }}
		zIndex={6}
	>
		Most example law violations are moral law <em>(stealing, adultery). </em><br>Paul (2:12) argues that Gentiles may do these things instinctually.
	</Fragment>
</Slide>
