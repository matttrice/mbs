<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<Slide>
	<div class="slide-bg scripture"></div>

	<!-- Title -->
	<Fragment
		layout={{ x: 106, y: 32, width: 778, height: 40 }}
		font={{ font_size: 33.6, bold: true, align: 'left' }}
	>
		2 Thessalonians 3:7-11
	</Fragment>

	<!-- Scripture content -->
	<Fragment
		layout={{ x: 102, y: 72, width: 763, height: 330 }}
		font={{ font_size: 24, v_align: 'middle', wrap: true }}
	>
		For you yourselves know how you ought to follow our example, because we did not act in an undisciplined manner among you, 8 nor did we eat anyone's bread without paying for it, but with labor and hardship we kept working night and day so that we would not be a burden to any of you; 9 not because we do not have the right to this, but in order to offer ourselves as a model for you, so that you would follow our example. 10 For even when we were with you, we used to give you this order: if anyone is not willing to work, then he is not to eat, either. 11 For we hear that some among you are leading an undisciplined life, doing no work at all, but acting like busybodies. (NASB95)
	</Fragment>
</Slide>
