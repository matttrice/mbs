<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 111, y: 0, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true, align: 'center' }}
>
	Circumcision
</Fragment>

<!-- Static: Jeremiah 9:25-26 -->
<Fragment
	layout={{ x: 97, y: 40, width: 797, height: 187 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Jeremiah 9:25-26" scale="lg">
		"The days are coming," declares the LORD, "when I will punish all who are circumcised only in the flesh -- <sup> 26</sup> Egypt, Judah, Edom, Ammon, Moab and all who live in the desert in distant places. For all these nations are really uncircumcised, and even the whole house of Israel is uncircumcised in heart."
	</ScriptureBlock>
</Fragment>

<!-- Step 1: 1 Corinthians 7:19 -->
<Fragment
	step={1}
	layout={{ x: 97, y: 231, width: 783, height: 102 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="1 Corinthians 7:19" scale="lg">
		Circumcision is nothing and uncircumcision is nothing. Keeping God's commands is what counts.
	</ScriptureBlock>
</Fragment>

<!-- Step 2: Romans 2:28-29 -->
<Fragment
	step={2}
	layout={{ x: 101, y: 337, width: 799, height: 158 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="Romans 2:28-29" scale="lg">
		A man is not a Jew if he is only one outwardly, nor is circumcision merely outward and physical. <sup>29</sup> No, a man is a Jew if he is one inwardly; and circumcision is circumcision of the heart, by the Spirit, not by the written code. Such a man's praise is not from men, but from God.
	</ScriptureBlock>
</Fragment>
