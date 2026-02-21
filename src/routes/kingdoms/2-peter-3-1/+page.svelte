<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title: 2 Peter 3:1-10, 17 -->
	<Fragment
		layout={{ x: 49, y: 8, width: 864, height: 44 }}
		font={{ font_size: 26.7, bold: true }}
		zIndex={0}
	>
		2 Peter 3:1-10, 17
	</Fragment>

	<!-- Scripture text -->
	<Fragment
		layout={{ x: 102, y: 47, width: 762, height: 261 }}
		font={{ wrap: true, font_name: 'Helvetica Neue', font_size: 15.0, color: 'var(--text-level-0)' }}
		zIndex={1}
	>
		Dear friends, this is now my second letter to you. I have written both of them as reminders to stimulate you to wholesome thinking. 2 I want you to recall the words spoken in the past by the holy prophets and the command given by our Lord and Savior through your apostles.3 Above all, you must understand that in the last days scoffers will come, scoffing and following their own evil desires. 4 They will say, "Where is this 'coming' he promised? Ever since our ancestors died, everything goes on as it has since the beginning of creation." 5 But they deliberately forget that long ago by God's word the heavens came into being and the earth was formed out of water and by water. 6 By these waters also the world of that time was deluged and destroyed. 7 By the same word the present heavens and earth are reserved for fire, being kept for the day of judgment and destruction of the ungodly.8 But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day. 9 The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.10 But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire, and the earth and everything done in it will be laid bare.
	</Fragment>

	<!-- Verse 17 -->
	<Fragment
		layout={{ x: 119, y: 364, width: 754, height: 79 }}
		font={{ wrap: true, font_name: 'Arial', bold: true, color: 'var(--text-level-0)' }}
		zIndex={2}
	>
		17 Therefore, dear friends, since you have been forewarned, be on your guard so that you may not be carried away by the error of the lawless and fall from your secure position.
	</Fragment>
</Slide>
