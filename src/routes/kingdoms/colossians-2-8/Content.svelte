<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<!-- Slide 12: Colossians 2:8-14 content -->
<div class="slide-bg scripture"></div>

<!-- Title: Colossians 2:8-14 -->
<Fragment
	layout={{ x: 101, y: 14, width: 756, height: 44 }}
	font={{ font_size: 26.7, bold: true, color: 'var(--text-level-0)' }}
	zIndex={0}
>
	Colossians 2:8-14
</Fragment>

<!-- Static scripture text -->
<Fragment
	layout={{ x: 102, y: 45, width: 781, height: 228 }}
	font={{ wrap: true, font_size: 18.3, color: 'var(--text-level-0)' }}
	zIndex={1}
>
	See to it that no one takes you captive through philosophy and empty deception, according to the tradition of men, according to the elementary principles of the world, rather than according to Christ. 9 For in Him all the fullness of Deity dwells in bodily form, 10 and in Him you have been made complete, and He is the head over all rule and authority; 11 and in Him you were also circumcised with a circumcision made without hands, in the removal of the body of the flesh by the circumcision of Christ; 12 having been buried with Him in baptism, in which you were also raised up with Him through faith in the working of God, who raised Him from the dead. 13 When you were dead in your transgressions and the uncircumcision of your flesh, He made you alive together with Him, having forgiven us all our transgressions, 14 having canceled out the certificate of debt consisting of decrees against us, which was hostile to us
</Fragment>

<!-- Step 1: Colossians 3:1-4 -->
<Fragment
	step={1}
	layout={{ x: 101, y: 287, width: 772, height: 156 }}
	font={{ wrap: true, font_size: 23.3, bold: true, color: 'var(--text-level-0)' }}
	zIndex={2}
	animate="fade"
>
	Colossians 3:1-4Therefore if you have been raised up with Christ, keep seeking the things above, where Christ is, seated at the right hand of God. 2 Set your mind on the things above, not on the things that are on earth. 3 For you have died and your life is hidden with Christ in God. 4 When Christ, who is our life, is revealed, then you also will be revealed with Him in glory.
</Fragment>

<!-- Step 2: Question: When did this happen? -->
<Fragment
	step={2}
	layout={{ x: 380, y: 460, width: 239, height: 30 }}
	fill="#0000FF"
	font={{ bold: true, color: 'var(--text-light)' }}
	zIndex={3}
	animate="fade"
>
	When did this happen?
</Fragment>

<!-- Step 2: Arrow pointing to question (with) -->
<Fragment step={2} animate="wipe">
	<Arrow from={{ x: 500, y: 388 }} to={{ x: 500, y: 460 }} stroke={{ width: 8, color: 'var(--stroke-level-3)' }} zIndex={4} />
</Fragment>
