<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg"></div>

<!-- Static: Jeremiah 33:17-18 scripture -->
<Fragment
	layout={{ x: 76, y: 18, width: 821, height: 130 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={4}
>
	<ScriptureBlock title="Jeremiah 33:17-18">
		"For thus says the Lord: 'David shall never lack a man to sit on the throne of the house of Israel; <sup>18</sup>&nbsp;nor shall the priests, the Levites, lack a man to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'
	</ScriptureBlock>
</Fragment>

<!-- Static: Zechariah 6:11-13 scripture (unhighlighted) -->
<Fragment
	layout={{ x: 76, y: 186, width: 828, height: 243 }}
	font={{ v_align: 'middle', wrap: true }}
	zIndex={1}
>
	<ScriptureBlock>
		<strong>Zechariah 6:11-13</strong><br/>"Take silver and gold, make an &#123;ornate&#125; crown and set &#123;it&#125; on the head of Joshua the son of Jehozadak, the high priest. <sup>12</sup>&nbsp;"Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. <sup>13</sup>&nbsp;"Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a priest on His throne, and the counsel of peace will be between the two offices.'"
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted Jeremiah + Zechariah + "Offices Spiritually Joined" (click + with + with) -->
<Fragment
	step={1}
	layout={{ x: 77, y: 62, width: 820, height: 86 }}
	fill="var(--bg-ghost)"
	font={{ v_align: 'middle', wrap: true }}
	zIndex={3}
>
	<ScriptureBlock>
		"For thus says the Lord: '<strong>David shall never lack a man </strong>to sit <strong>on the throne </strong>of the house of Israel; <sup>18</sup>&nbsp;<strong>nor shall the priests, the Levites, lack a man </strong>to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted Zechariah overlay (with) -->
<Fragment
	step={1}
	layout={{ x: 76, y: 186, width: 828, height: 243 }}
	fill="var(--bg-ghost)"
	font={{ v_align: 'middle', wrap: true }}
	zIndex={2}
>
	<ScriptureBlock>
		<strong>Zechariah 6:11-13</strong><br/>"Take silver and gold, make an &#123;ornate&#125; crown and set &#123;it&#125; on the head of Joshua the son of Jehozadak, the high priest. <sup>12</sup>&nbsp;"Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. <sup>13</sup>&nbsp;"Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a <u>priest</u> on <u>His throne</u>, and the counsel of <strong>peace will be between the two offices</strong>.'"
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Offices Spiritually Joined (with) -->
<Fragment
	step={1}
	layout={{ x: 131, y: 442, width: 720, height: 34 }}
	fill="var(--bg-level-2)"
	font={{ wrap: true, align: 'center', font_size: 21.6, bold: true, color: 'var(--text-level-3)' }}
	zIndex={5}
>
	<strong>Offices Spiritually Joined – No longer divided</strong>
</Fragment>
