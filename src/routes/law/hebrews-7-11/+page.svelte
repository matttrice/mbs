<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow, Rect } from '$lib/components/svg';
</script>

<Slide>
	<Fragment
		layout={{ x: 102, y: 18, width: 756, height: 314 }}
		font={{ wrap: true }}
	>
		<ScriptureBlock title="Hebrews 7:11-12">
			Now if perfection was through the Levitical priesthood (for on the basis of it the people received the Law), what further need was there for another priest to arise according to the order of Melchizedek, and not be designated according to the order of Aaron?<sup> 12 </sup>For when the priesthood is changed, of necessity there takes place a change of law also.
		</ScriptureBlock>
	</Fragment>

	<Fragment step={1}>
		<Rect x={86} y={372} width={342} height={114} fill="var(--bg-cmd-law)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={2} />
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 91, y: 386, width: 332, height: 85 }}
		font={{ align: 'center', font_size: 26.7, wrap: true }}
		zIndex={3}
	>
		<u>Commandment Law</u><br>Levitical - <em>Not</em> perfect
	</Fragment>

	<Fragment step={1}>
		<Rect x={554} y={367} width={304} height={122} fill="var(--bg-level-2)" stroke={{ width: 1, color: 'var(--stroke-level-0)' }} zIndex={4} />
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 560, y: 386, width: 289, height: 94 }}
		font={{ align: 'center', font_size: 26.7, wrap: true }}
		zIndex={5}
	>
		<u>Law of Faith / Grace </u><br>Christ - Perfect Law
	</Fragment>

	<Fragment
		step={1.1}
		layout={{ x: 441, y: 372, width: 102, height: 65 }}
		font={{ wrap: true, align: 'center', font_size: 20 }}
		zIndex={7}
	>
		Change of Law
	</Fragment>

	<Fragment step={1.1} animate="draw">
		<Arrow from={{ x: 436, y: 428 }} to={{ x: 550, y: 429 }} stroke={{ width: 8 }} zIndex={6} />
	</Fragment>
</Slide>
