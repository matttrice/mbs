<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
	import { Rect } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture -->
<Fragment
	layout={{ x: 99, y: 3, width: 787, height: 232 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 1:1" scale="md">
		<sup>1</sup>In my former book, Theophilus, I wrote about all that Jesus began to do and to teach <br><sup>2</sup>until the day he was taken up to heaven, after giving instructions through the <br>Holy Spirit to the apostles he had chosen. <sup>3</sup>After his suffering, he showed himself to <br>these men and gave many convincing proofs that he was alive. He appeared to them <br>over a period of forty days and spoke about the kingdom of God. <sup>4</sup>On one occasion, <br>while he was eating with them, he gave them this command: "Do not leave Jerusalem, <br>but wait for the gift my Father promised, which you have heard me speak about. <sup>5</sup>For <br>John baptized with water, but in a few days you will be baptized with the Holy Spirit."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Acts 2:1-4 scripture -->
<Fragment
	step={1}
	layout={{ x: 90, y: 301, width: 797, height: 184 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Acts 2:1-4" scale="md">
		<sup>1</sup>When the day of Pentecost came, they were all together in one place. <sup>2</sup>Suddenly<br>a sound like the blowing of a violent wind came from heaven and filled the whole<br>house where they were sitting. <sup>3</sup>They saw what seemed to be tongues of fire that<br>separated and came to rest on each of them. <br><sup>4</sup>All of them were filled with the Holy Spirit and began to speak in other tongues <br>as the Spirit enabled them.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Highlighted overlay -->
<Fragment
	step={2}
	layout={{ x: 90, y: 328, width: 797, height: 157 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	<sup>1</sup>When the day of Pentecost came, <strong>they</strong> were all together in one place. <sup>2</sup>Suddenly<br>a sound like the blowing of a violent wind came from heaven and filled the whole<br>house where they were sitting. <sup>3</sup>They saw what seemed to be tongues of fire that<br>separated and came to rest on each of them. <br><sup>4</sup>All of them were <strong>filled with the Holy Spirit</strong> and began to speak in other tongues <br>as the Spirit enabled them.
</Fragment>

<!-- Step 3: Background shape -->
<Fragment step={3}>
	<Rect x={156} y={238} width={682} height={57} fill="var(--bg-ghost)" stroke={{ width: 3, color: 'var(--stroke-level-0)' }} zIndex={5} />
</Fragment>

<!-- Step 3: Church commentary -->
<Fragment
	step={3}
	layout={{ x: 155, y: 236, width: 696, height: 57 }}
	font={{ font_size: 20, bold: true, color: 'var(--text-level-3)', v_align: 'bottom', wrap: true }}
	zIndex={6}
>
	<strong>The Church miraculously comes to life when the disciples receive the </strong><br><strong>Holy Spirit. They now have the counselor and begin to plant the Seed.</strong>
</Fragment>

<!-- Step 4: Only the disciples -->
<Fragment
	step={4}
	layout={{ x: 160, y: 486, width: 643, height: 40 }}
	font={{ font_size: 26.7, bold: true, wrap: true }}
>
	<strong>Only the disciples have received the Holy Spirit...</strong>
</Fragment>
