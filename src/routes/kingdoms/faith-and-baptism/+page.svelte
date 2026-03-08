<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Static: 1 Corinthians 15:1-4 (consolidated title + body) -->
	<Fragment
		layout={{ x: 42, y: 14, width: 864, height: 161 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 Corinthians 15:1-4">
			Now I make known to you, brethren, <u>the gospel which I preached to you</u>, which also you received, in which also you stand, <sup>2 </sup>by which also you are saved, if you hold fast the word which I preached to you, unless you believed in vain.<sup>3</sup>For I delivered to you as of first importance what I also received, that Christ died for our sins according to the Scriptures, <sup>4 </sup>and that He was buried, and that He was raised on the third day according to the Scriptures,
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Hebrews 11:6 -->
	<Fragment
		layout={{ x: 42, y: 186, width: 864, height: 75 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={2}
	>
		<ScriptureBlock title="Hebrews 11:6">
			<sup>6 </sup>And <u>without faith</u> it is impossible to please <em>Him</em>, for he who comes to God must believe that He is and <em>that</em> He is a rewarder of those who seek Him.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Acts 17:30 -->
	<Fragment
		layout={{ x: 42, y: 274, width: 864, height: 75 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={3}
	>
		<ScriptureBlock title="Acts 17:30">
			<sup>30 </sup>Therefore having overlooked the times of ignorance, God is now declaring to men that <u>all people</u> everywhere should repent,
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Romans 10:17 -->
	<Fragment
		layout={{ x: 42, y: 365, width: 864, height: 54 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={4}
	>
		<ScriptureBlock title="Romans 10:17">
			<sup>17</sup>So <u>faith</u> <em><u>comes</u></em> <u>from hearing</u>, and hearing by the word of Christ.
		</ScriptureBlock>
	</Fragment>

	<!-- Static: Acts 2:38 -->
	<Fragment
		layout={{ x: 42, y: 432, width: 864, height: 75 }}
		font={{ align: 'left', v_align: 'middle', wrap: true }}
		zIndex={5}
	>
		<ScriptureBlock title="Acts 2:38">
			<sup>38 </sup>Peter <em>said</em> to them, "Repent, and each of you be <u>baptized</u> in the name of Jesus Christ for the forgiveness of your sins; and <u>you will receive the gift of the Holy Spirit</u>.
		</ScriptureBlock>
	</Fragment>
</Slide>
