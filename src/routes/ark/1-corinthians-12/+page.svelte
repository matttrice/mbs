<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<div class="slide-bg"></div>

	<!-- Static: Scripture (consolidated title + body) -->
	<Fragment
		layout={{ x: 100, y: 36, width: 765, height: 405 }}
		font={{ v_align: 'middle', align: 'left', wrap: true }}
		line={{ width: 1 }}
	>
		<ScriptureBlock title="1Corinthians 12:12-14, 27-28" scale="lg">
			<sup>12 </sup>For even as the body is one and yet has many members, and all the members of the body, though they are many, are one body, so also is Christ. <sup>13 </sup>For by one Spirit we were all <u>baptized into one body</u>, whether Jews or Greeks, whether slaves or free, and we were all made to drink of one Spirit.<sup>14</sup>For the body is not one member, but many. <br><br><sup>27</sup> Now <u>you are Christ's body</u>, and individually members of it. <sup>28</sup> And God has appointed in the church, first apostles, second prophets, third teachers, then miracles, then gifts of healings, helps, administrations, various kinds of tongues.
		</ScriptureBlock>
	</Fragment>
</Slide>
