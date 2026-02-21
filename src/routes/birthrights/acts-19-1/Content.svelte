<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title -->
<Fragment
	layout={{ x: 91, y: 8, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	Acts 19:1
</Fragment>

<!-- Step 1: Scripture text -->
<Fragment
	step={1}
	layout={{ x: 91, y: 48, width: 762, height: 454 }}
	font={{ font_size: 21.3, wrap: true }}
>
	While Apollos was at Corinth, Paul took the road through the interior and arrived at Ephesus. There he found some disciples 2and asked them, "Did you receive the Holy Spirit when you believed?" They answered, "No, we have not even heard that there is a Holy Spirit." 3So Paul asked, "Then what baptism did you receive?" "John's baptism," they replied. 4Paul said, "John's baptism was a baptism of repentance. He told the people to believe in the one coming after him, that is, in Jesus." 5On hearing this, they were baptized into the name of the Lord Jesus. 6When Paul placed his hands on them, the Holy Spirit came on them, and they spoke in tongues and prophesied. 7There were about twelve men in all.
</Fragment>

<!-- Step 2: Commentary box -->
<Fragment
	step={2}
	layout={{ x: 91, y: 369, width: 469, height: 143 }}
	font={{ font_size: 18.7, bold: true, align: 'center', wrap: true }}
	line={{ color: 'var(--stroke-level-3)' }}
>
	Several things happened here – 1. The apostles heard the gospel; 2. They were baptized; 3. Hands were laid on them and they received the Spirit; 4. It was demonstrated by tongues. It would be inaccurate to suggest that they received the Spirit before baptism.
</Fragment>
