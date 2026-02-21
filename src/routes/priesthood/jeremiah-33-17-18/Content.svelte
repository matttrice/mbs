<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ReferenceOverlay from '$lib/components/ReferenceOverlay.svelte';
</script>

<div class="slide-bg scripture"></div>
<ReferenceOverlay src="/export/10-The_Priesthood/Slide17.png" />

<!-- Title -->
<Fragment
	layout={{ x: 76, y: 18, width: 778, height: 40 }}
	font={{ font_size: 33.6, bold: true, align: 'left' }}
>
	Jeremiah 33:17-18
</Fragment>

<!-- Scripture content (static) -->
<Fragment
	layout={{ x: 78, y: 60, width: 821, height: 88 }}
	font={{ font_size: 21.6, v_align: 'middle', wrap: true }}
>
	"For thus says the Lord: 'David shall never lack a man to sit on the throne of the house of Israel; 18 nor shall the priests, the Levites, lack a man to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'"
</Fragment>

<!-- Zechariah 6:11-13 (static) -->
<Fragment
	layout={{ x: 76, y: 190, width: 828, height: 234 }}
	font={{ font_size: 33.6, bold: true, v_align: 'middle' }}
>
	Zechariah 6:11-13<br />"Take silver and gold, make an {'{'}ornate{'}'} crown and set {'{'}it{'}'} on the head of Joshua the son of Jehozadak, the high priest. 12 "Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. 13 "Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a priest on His throne, and the counsel of peace will be between the two offices.'"
</Fragment>

<!-- Step 1: Highlight Jeremiah -->
<Fragment
	step={1}
	layout={{ x: 78, y: 60, width: 821, height: 88 }}
	font={{ font_size: 21.6, v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	"For thus says the Lord: 'David shall never lack a man to sit on the throne of the house of Israel; 18 nor shall the priests, the Levites, lack a man to offer burnt offerings before Me, to kindle grain offerings, and to sacrifice continually.'"
</Fragment>

<!-- Step 1: Highlight Zechariah - with previous -->
<Fragment
	step={1}
	layout={{ x: 76, y: 190, width: 828, height: 234 }}
	font={{ font_size: 33.6, bold: true, v_align: 'middle' }}
	fill="var(--bg-ghost)"
>
	Zechariah 6:11-13<br />"Take silver and gold, make an {'{'}ornate{'}'} crown and set {'{'}it{'}'} on the head of Joshua the son of Jehozadak, the high priest. 12 "Then say to him, 'Thus says the LORD of hosts, "Behold, a man whose name is Branch, for He will branch out from where He is; and He will build the temple of the LORD. 13 "Yes, it is He who will build the temple of the LORD, and He who will bear the honor and sit and rule on His throne. Thus, He will be a priest on His throne, and the counsel of peace will be between the two offices.'"
</Fragment>

<!-- Step 1: Summary - with previous -->
<Fragment
	step={1}
	layout={{ x: 132, y: 443, width: 720, height: 36 }}
	font={{ font_size: 21.6, bold: true, color: 'var(--text-level-3)', wrap: true, align: 'center' }}
	fill="var(--bg-level-2)"
>
	Offices Spiritually Joined – No longer divided
</Fragment>
