<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 103, y: 32, width: 764, height: 368 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock title="2 Thessalonians 3:7-11" version="NASB95">
		For you yourselves know how you ought to follow our example, because we did not act in an undisciplined manner among you, <sup>8</sup> nor did we eat anyone's bread without paying for it, but with labor and hardship we kept working night and day so that we would not be a burden to any of you; <sup>9</sup> not because we do not have the right to this, but in order to offer ourselves as a model for you, so that you would follow our example. <sup>10</sup> For even when we were with you, we used to give you this order: if anyone is not willing to work, then he is not to eat, either. <sup>11</sup> For we hear that some among you are leading an undisciplined life, doing no work at all, but acting like busybodies.
	</ScriptureBlock>
</Fragment>
