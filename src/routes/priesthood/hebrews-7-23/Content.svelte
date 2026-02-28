<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Scripture -->
<Fragment
	layout={{ x: 98, y: 27, width: 764, height: 336 }}
	font={{ wrap: true, align: 'left' }}
	zIndex={1}
>
	<ScriptureBlock title="Hebrews 7:23-28">
		Now there have been many of those priests, since death prevented them from continuing in office; <sup>24</sup> but <strong>because Jesus lives forever</strong>, he has a <strong>permanent priesthood</strong>. <sup>25</sup> Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them. <sup>26</sup> Such a high priest meets our need — one who is holy, blameless, pure, set apart from sinners, exalted above the heavens. <sup>27</sup> Unlike the other high priests, he does not need to offer sacrifices day after day, <strong>first for his own sins</strong>, and then for the sins of the people. He sacrificed for their sins once for all when he offered himself. <sup>28</sup> For the law appoints as high priests <strong>men who are weak</strong>; but the oath, which came after the law, appointed the Son, who has been made <strong>perfect forever</strong>.<sub> (NIV)</sub>
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Commentary (click) -->
<Fragment
	step={1}
	layout={{ x: 228, y: 327, width: 490, height: 216 }}
	font={{ v_align: 'middle', wrap: true, align: 'center', font_size: 43, bold: true }}
	zIndex={3}
>
	<strong>Physical = Weak Sinful</strong><br/><strong>Spiritual = Perfect Forever</strong><br/><strong><u>Permanent Priesthood</u></strong>
</Fragment>
