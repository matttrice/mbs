<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Arrow } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 103, y: 9, width: 762, height: 174 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 2:38">
		Peter replied, "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit. <sup>39</sup>The promise is for you and your children and for all who are far off--for all whom the Lord our God will call." <br> <sup>40</sup>With many other words he warned them; and he pleaded with them, "Save yourselves from this corrupt generation." <sup>41</sup><strong>Those <u>who accepted his message were baptized</u></strong>, and about three thousand were added to their number that day.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Galatians 3:24 -->
<Fragment
	step={1}
	layout={{ x: 103, y: 232, width: 761, height: 174 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Galatians 3:24">
		<sup>24</sup>So the law was put in charge to lead us to Christ that we might be justified by faith. <sup>25</sup>Now that faith has come, we are no longer under the supervision of the law.  <sup>26</sup>You are all sons of God through faith in Christ Jesus, <sup>27</sup>for all of you who were baptized into Christ have clothed yourselves with Christ. <sup>28</sup>There is neither Jew nor Greek, slave nor free, male nor female, for you are all one in Christ Jesus. <sup>29</sup><strong>If you belong to Christ, then you are Abraham's seed, and heirs according to the promise.</strong>
	</ScriptureBlock>
</Fragment>

<!-- Step 2: 1 Corinthians 12:13 -->
<Fragment
	step={2}
	layout={{ x: 103, y: 408, width: 756, height: 85 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="1 Corinthians 12:13" scale="lg">
		For we were all baptized by one Spirit into one body -- whether Jews or Greeks, slave or free -- and we were all given the one Spirit to drink.
	</ScriptureBlock>
</Fragment>

<!-- Step 3: Question -->
<Fragment
	step={3}
	layout={{ x: 202, y: 495, width: 540, height: 30 }}
	font={{ font_size: 16.7, color: 'var(--text-ghost)', wrap: true }}
	fill="var(--bg-level-0)"
>
	What does Christ's doctrine (seed / message) on Baptism sound like?
</Fragment>

<!-- Step 4: Equation box -->
<Fragment
	step={4}
	layout={{ x: 60, y: 205, width: 840, height: 38 }}
	font={{ font_size: 23.3, bold: true, color: 'var(--text-ghost)', align: 'center', wrap: true }}
	fill="var(--bg-level-3)"
>
	<strong>Holy Spirit == Gift == Baptism == "You <u>must</u> be born again" == Seed</strong>
</Fragment>

<!-- Step 5: Arrows pointing to equation -->
<Fragment step={5} animate="draw">
	<Arrow from={{ x: 340, y: 88 }} to={{ x: 340, y: 211 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
<Fragment step={5.1} animate="draw">
	<Arrow from={{ x: 455, y: 88 }} to={{ x: 455, y: 210 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
<Fragment step={5.2} animate="draw">
	<Arrow from={{ x: 366, y: 63 }} to={{ x: 366, y: 210 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
<Fragment step={5.3} animate="draw">
	<Arrow from={{ x: 533, y: 175 }} to={{ x: 533, y: 207 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
<Fragment step={5.4} animate="draw">
	<Arrow from={{ x: 728, y: 171 }} to={{ x: 728, y: 210 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>

<!-- Step 5.5: Arrows pointing down from equation -->
<Fragment step={5.5} animate="draw">
	<Arrow from={{ x: 460, y: 238 }} to={{ x: 460, y: 384 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
<Fragment step={5.5} animate="draw">
	<Arrow from={{ x: 618, y: 257 }} to={{ x: 618, y: 311 }} stroke={{ width: 3, color: 'var(--stroke-level-3)' }} zIndex={10} />
</Fragment>
