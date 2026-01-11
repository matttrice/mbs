<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Rect } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 103, y: 3, width: 756, height: 44 }}
	font={{ font_size: 26.7, bold: true, v_align: 'middle' }}
>
	Acts 1:1
</Fragment>

<!-- Static: Acts 1:1-5 text -->
<Fragment
	layout={{ x: 99, y: 31, width: 787, height: 204 }}
	font={{ font_size: 20, wrap: true }}
>
	1 In my former book, Theophilus, I wrote about all that Jesus began to do and to teach 2 until the day he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles he had chosen. 3 After his suffering, he showed himself to these men and gave many convincing proofs that he was alive. He appeared to them over a period of forty days and spoke about the kingdom of God. 4 On one occasion, while he was eating with them, he gave them this command: "Do not leave Jerusalem, but wait for the gift my Father promised, which you have heard me speak about. 5 For John baptized with water, but in a few days you will be baptized with the Holy Spirit."
</Fragment>

<!-- Step 1: Acts 2:1-4 header -->
<Fragment
	step={1}
	layout={{ x: 97, y: 301, width: 154, height: 32 }}
	font={{ font_size: 26.7, bold: true, align: 'center', v_align: 'middle' }}
>
	Acts 2:1-4
</Fragment>

<!-- Step 1: Acts 2:1-4 text -->
<Fragment
	step={1}
	layout={{ x: 90, y: 328, width: 797, height: 157 }}
	font={{ font_size: 21.7, wrap: true }}
>
	1 When the day of Pentecost came, they were all together in one place. 2 Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. 3 They saw what seemed to be tongues of fire that separated and came to rest on each of them. 4 All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.
</Fragment>

<!-- Step 2: Highlight Acts 2:1-4 text -->
<Fragment
	step={2}
	layout={{ x: 90, y: 328, width: 797, height: 157 }}
	font={{ font_size: 21.7, wrap: true }}
	fill="var(--color-bg-light)"
>
	1 When the day of Pentecost came, they were all together in one place. 2 Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. 3 They saw what seemed to be tongues of fire that separated and came to rest on each of them. 4 All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.
</Fragment>

<!-- Step 3: Commentary box -->
<Fragment step={3}>
	<Rect x={156} y={238} width={682} height={57} fill="var(--color-bg-light)" stroke={{ width: 3, color: '#000000' }} zIndex={5} />
</Fragment>

<!-- Step 3: Commentary text -->
<Fragment
	step={3}
	layout={{ x: 155, y: 236, width: 696, height: 57 }}
	font={{ font_size: 20, bold: true, color: '#0000FF', v_align: 'bottom', wrap: true }}
>
	The Church miraculously comes to life when the disciples receive the Holy Spirit. They now have the counselor and begin to plant the Seed.
</Fragment>

<!-- Step 4: Only the disciples... -->
<Fragment
	step={4}
	layout={{ x: 160, y: 486, width: 643, height: 40 }}
	font={{ font_size: 26.7, bold: true }}
>
	Only the disciples have received the Holy Spirit...
</Fragment>
