<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 90, y: 8, width: 756, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
	>
		Sinners vs. Freedom
	</Fragment>

	<!-- Static: 1 John 1:8 -->
	<Fragment
		layout={{ x: 47, y: 64, width: 286, height: 103 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 John 1:8">
			If we say that we have no sin, we are deceiving ourselves and the truth is not in us.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: 1 John 1:10 -->
	<Fragment
		layout={{ x: 47, y: 175, width: 318, height: 103 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 John 1:10">
			If we say that we have not sinned, we make Him a liar and His word is not in us.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 1: Romans 6:18 + 1 John 1:18 -->
	<Fragment
		step={1}
		layout={{ x: 435, y: 64, width: 428, height: 115 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 6:18">
			You have been set free from sin.. <br>1 John 1:18<br>We know that no one who is born of God sins;
		</ScriptureBlock>
	</Fragment>

	<!-- Step 2: Question -->
	<Fragment
		step={2}
		layout={{ x: 370, y: 182, width: 492, height: 35 }}
		font={{ font_size: 20, v_align: 'middle', align: 'center' }}
		fill="var(--bg-cmd-law)"
	>
		Which is it? Does the Church have sin or not?
	</Fragment>

	<!-- Step 3: Romans 4:8 + Psalm 32:1 -->
	<Fragment
		step={3}
		layout={{ x: 434, y: 218, width: 428, height: 164 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Romans 4:8">
			"Blessed is the one whose sin the Lord will never count against them."<br>Psalm 32:1<br>How blessed is he whose transgression is forgiven, whose sin is covered!
		</ScriptureBlock>
	</Fragment>

	<!-- Step 4: 2 Corinthians 5:18-19 -->
	<Fragment
		step={4}
		layout={{ x: 435, y: 392, width: 458, height: 128 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="2 Corinthians 5:18-19">
			God, who reconciled us to himself through Christ and gave us the ministry of reconciliation: <sup>19</sup> that <em><u>God was reconciling the world to himself in Christ, not counting men's sins against them</u></em>.
		</ScriptureBlock>
	</Fragment>

	<!-- Step 5: Conclusion -->
	<Fragment
		step={5}
		layout={{ x: 47, y: 310, width: 346, height: 146 }}
		font={{ font_size: 20, v_align: 'middle', align: 'center', wrap: true }}
		fill="var(--bg-level-2)"
	>
		In Christ, sins are not counted.<br>This is only possible through <u>separation from the Law</u> and rebirth under grace.<br>Christ covers the sins of the Church.
	</Fragment>
</Slide>
