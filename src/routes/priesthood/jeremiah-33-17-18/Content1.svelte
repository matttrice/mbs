<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 76, y: 18, width: 778, height: 40 }}
	font={{ font_size: 36, bold: true, align: 'left' }}
	zIndex={4}
>
	Jeremiah 33:17-18
</Fragment>

<!-- Jeremiah scripture (static, unhighlighted version) -->
<Fragment
	layout={{ x: 77, y: 62, width: 820, height: 86 }}
	font={{ font_size: 21.6, v_align: 'middle', wrap: true }}
>
	"For thus says the Lord: 'David shall never lack a man to sit on the throne of the house of Israel; <sup>18</sup> nor shall the priests, the Levites, lack a man to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'
</Fragment>

<!-- Zechariah scripture (static, unhighlighted version) -->
<Fragment
	layout={{ x: 76, y: 186, width: 828, height: 243 }}
	font={{ font_size: 43, bold: true, v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<strong>Zechariah 6:11-13</strong><br />"Take silver and gold, make an &#123;ornate&#125; crown and set &#123;it&#125; on the head of Joshua the son of Jehozadak, the high priest. <sup>12</sup> "Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. <sup>13</sup> "Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a priest on His throne, and the counsel of peace will be between the two offices.'"
</Fragment>

<!-- Step 1: Highlighted Jeremiah + Zechariah + Summary -->
<Fragment
	step={1}
	layout={{ x: 77, y: 62, width: 820, height: 86 }}
	font={{ font_size: 21.6, v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={3}
>
	"For thus says the Lord: '<strong>David shall never lack a man </strong>to sit <strong>on the throne </strong>of the house of Israel; <sup>18</sup> <strong>nor shall the priests, the Levites, lack a man </strong>to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'
</Fragment>

<Fragment
	step={1}
	layout={{ x: 76, y: 186, width: 828, height: 243 }}
	font={{ font_size: 43, bold: true, v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
	zIndex={2}
>
	<strong>Zechariah 6:11-13</strong><br />"Take silver and gold, make an &#123;ornate&#125; crown and set &#123;it&#125; on the head of Joshua the son of Jehozadak, the high priest. <sup>12</sup> "Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. <sup>13</sup> "Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a <u>priest</u> on <u>His throne</u>, and the counsel of <strong>peace will be between the two offices</strong>.'"
</Fragment>

<Fragment
	step={1}
	layout={{ x: 131, y: 442, width: 720, height: 34 }}
	font={{ font_size: 21.6, bold: true, align: 'center', color: 'var(--text-level-3)', wrap: true }}
	fill="var(--bg-level-2)"
	zIndex={5}
>
	<strong>Offices Spiritually Joined – No longer divided</strong>
</Fragment>
