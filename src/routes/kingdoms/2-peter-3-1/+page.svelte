<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<Fragment
		layout={{ x: 42, y: 50, width: 864, height: 300 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={1}
	>
		<ScriptureBlock title="2 Peter 3:1-10, 17">
			Dear friends, this is now my second letter to you. I have written both of them as reminders to stimulate you to wholesome thinking. <sup>2 </sup>I want you to <u>recall the words spoken in the past </u>by the holy prophets and the command given by our Lord and Savior through your apostles.<br><sup>3 </sup>Above all, you must understand that in the <u>last days scoffers will come</u>, scoffing and following their own evil desires. <sup>4 </sup>They will say, "Where is this 'coming' he promised? Ever since our ancestors died, everything goes on as it has since the beginning of creation." <sup>5 </sup>But they deliberately forget that long ago <u>by God's word</u> the heavens came into being and <u>the earth was formed out of water and by water</u>. <sup>6 </sup><u>By these waters also</u> the world of that time was deluged and destroyed. <sup>7 </sup><u>By the same word the present heavens and earth are reserved for fire</u>, being kept for the day of judgment and destruction of the ungodly.<br><sup>8 </sup>But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day. <sup>9 </sup>The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.<br><sup>10 </sup>But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire, and the earth and everything done in it will be laid bare.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 42, y: 400, width: 774, height: 79 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock>
			<sup>17</sup>Therefore, dear friends, since you have been forewarned, be on your guard so that you may not be carried away by the error of the lawless and fall from your secure position.
		</ScriptureBlock>
	</Fragment>
</Slide>
