<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 85, y: 0, width: 205, height: 44 }}
	font={{ font_size: 23.3, bold: true }}
>
	Acts 2:5 cont...
</Fragment>

<!-- Static: Acts 2:5-6 text -->
<Fragment
	layout={{ x: 92, y: 43, width: 785, height: 87 }}
	font={{ font_size: 21.7, wrap: true }}
>
	5 Now there were staying in Jerusalem God-fearing Jews from every nation under heaven. 6 When they heard this sound, a crowd came together in bewilderment, because each one heard them speaking in his own language.
</Fragment>

<!-- Step 1: Highlight Acts 2:5-6 -->
<Fragment
	step={1}
	layout={{ x: 85, y: 43, width: 785, height: 87 }}
	font={{ font_size: 21.7, wrap: true }}
	fill="var(--color-bg-light)"
>
	5 Now there were staying in Jerusalem God-fearing Jews from every nation under heaven. 6 When they heard this sound, a crowd came together in bewilderment, because each one heard them speaking in his own language.
</Fragment>

<!-- Step 2: Holy Spirit came on disciples commentary -->
<Fragment
	step={2}
	layout={{ x: 154, y: 129, width: 661, height: 32 }}
	font={{ font_size: 20, bold: true, color: '#0000FF', align: 'center' }}
	fill="var(--color-bg-light)"
	line={{ width: 1, color: '#000000' }}
>
	...The Holy Spirit came on the disciples, then other Jews gathered...
</Fragment>

<!-- Step 3: Acts 2:14-17,41 header -->
<Fragment
	step={3}
	layout={{ x: 83, y: 159, width: 186, height: 32 }}
	font={{ font_size: 21.7, bold: true, align: 'center', v_align: 'middle' }}
>
	Acts 2:14-17,41
</Fragment>

<!-- Step 3: Acts 2:14-17,41 text -->
<Fragment
	step={3}
	layout={{ x: 90, y: 183, width: 780, height: 227 }}
	font={{ font_size: 20, wrap: true }}
>
	14 Then Peter stood up with the Eleven, raised his voice and addressed the crowd: "Fellow Jews and all of you who live in Jerusalem, let me explain this to you; listen carefully to what I say. 15 These men are not drunk, as you suppose. It's only nine in the morning! 16 No, this is what was spoken by the prophet Joel: 17 'In the last days, God says, I will pour out my Spirit on all people….. …. 41 Those who accepted his message were baptized, and about three thousand were added to their number that day.
</Fragment>

<!-- Step 4: Highlight scripture -->
<Fragment
	step={4}
	layout={{ x: 90, y: 183, width: 780, height: 227 }}
	font={{ font_size: 20, wrap: true }}
	fill="var(--color-bg-light)"
>
	14 Then Peter stood up with the Eleven, raised his voice and addressed the crowd: "Fellow Jews and all of you who live in Jerusalem, let me explain this to you; listen carefully to what I say. 15 These men are not drunk, as you suppose. It's only nine in the morning! 16 No, this is what was spoken by the prophet Joel: 17 'In the last days, God says, I will pour out my Spirit on all people….. …. 41 Those who accepted his message were baptized, and about three thousand were added to their number that day.
</Fragment>

<!-- Step 5: At this point commentary -->
<Fragment
	step={5}
	layout={{ x: 133, y: 392, width: 661, height: 32 }}
	font={{ font_size: 20, align: 'center' }}
	fill="var(--color-bg-light)"
	line={{ width: 1, color: '#000000' }}
>
	At this point, many Jews have been added....by baptism
</Fragment>

<!-- Step 6: Summary commentary -->
<Fragment
	step={6}
	layout={{ x: 139, y: 437, width: 661, height: 56 }}
	font={{ font_size: 20, bold: true, color: '#0000FF', wrap: true }}
	fill="var(--color-bg-light)"
>
	The disciples received the Holy Spirit miraculously to form the body. Then Jews preached to other Jews and added them by baptism.
</Fragment>
