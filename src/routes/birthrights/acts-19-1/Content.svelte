<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<Fragment
	layout={{ x: 99, y: 8, width: 778, height: 302 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 19:1-5" scale="lg">
		While Apollos was at Corinth, Paul took the road through the interior and arrived at Ephesus. There he found some disciples <sup>2</sup>and asked them, <strong>"Did you receive the Holy Spirit when you believed?" </strong><br>      They answered, "No, we have not even heard that there is a Holy Spirit."  <sup>3</sup>So Paul asked, "Then what baptism did you receive?" <br>      "John's baptism," they replied. <br> <sup>4</sup>Paul said, "John's baptism was a baptism of repentance. He told the people to believe in the one coming after him, that is, in Jesus." <sup>5</sup>On hearing this, they were<strong> baptized into the name</strong> of the Lord Jesus.
	</ScriptureBlock>
</Fragment>

<!-- Commentary box -->
<Fragment
	step={1}
	layout={{ x: 91, y: 369, width: 469, height: 143 }}
	font={{ font_size: 18.7, bold: true, align: 'center', wrap: true }}
	line={{ color: 'var(--stroke-level-3)' }}
>
	Several things happened here – 1. The apostles heard the gospel; 2. They were baptized; 3. Hands were laid on them and they received the Spirit; 4. It was demonstrated by tongues. It would be inaccurate to suggest that they received the Spirit before baptism.
</Fragment>
