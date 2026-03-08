<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<!-- Slide 12: Colossians 2:8-14 content -->
<div class="slide-bg scripture"></div>

<!-- Static: Colossians 2:8-14 (consolidated title + body) -->
<Fragment
	layout={{ x: 42, y: 14, width: 864, height: 259 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Colossians 2:8-14">
		See to it that no one takes you captive through <u>philosophy and empty deception</u>, according to the tradition of men, according to the elementary principles of the world, rather than according to Christ. <sup>9 </sup>For in Him all the fullness of Deity dwells in bodily form, <sup>10 </sup>and in Him you have been made complete, and He is the head over all rule and authority; <sup>11 </sup>and in Him you were also circumcised with a circumcision made without hands, in the removal of the body of the flesh by the circumcision of Christ; <sup>12 </sup><u>having been buried with Him in baptism</u>, in which you were also raised up with Him through faith in the working of God, who raised Him from the dead. <sup>13 </sup>When <u>you were dead </u>in your transgressions and the uncircumcision of your flesh, He made you alive together with Him, having forgiven us all our transgressions, <sup>14 </sup>having canceled out the certificate of debt consisting of decrees against us, which was hostile to us
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Colossians 3:1-4 -->
<Fragment
	step={1}
	layout={{ x: 42, y: 287, width: 864, height: 156 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock title="Colossians 3:1-4">
		Therefore <u>if you have been raised up with Christ</u>, keep seeking the things above, where Christ is, seated at the right hand of God. <sup>2 </sup>Set your mind on the things above, not on the things that are on earth. <sup>3</sup><sup> </sup><u>For you have died</u> and your life is hidden with Christ in God. <sup>4 </sup>When Christ, who is our life, is revealed, then you also will be revealed with Him in glory.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Question: When did this happen? -->
<Fragment
	step={2}
	layout={{ x: 300, y: 460, width: 350, height: 45 }}
	fill="var(--bg-level-3)"
	font={{ font_size: 30, align: 'center', bold: true, color: 'var(--text-ghost)' }}
	zIndex={3}
>
	<strong>When did this happen?</strong>
</Fragment>

<!-- Step 2: Arrow pointing to question (with) -->
<Fragment step={2} animate="wipe-up">
	<Arrow from={{ x: 306, y: 464 }} to={{ x: 266, y: 407 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={4} />
</Fragment>
