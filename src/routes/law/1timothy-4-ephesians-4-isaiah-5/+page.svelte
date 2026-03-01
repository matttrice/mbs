<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<Slide>
	<Fragment
		layout={{ x: 38, y: 18, width: 884, height: 146 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="1 Timothy 4:1-2">
			But the Spirit explicitly says that in later times some will fall away from the faith, <br>paying attention to deceitful spirits and doctrines of demons, by means of the <br>hypocrisy of liars seared in their own conscience as with a branding iron,
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={1}
		layout={{ x: 44, y: 140, width: 878, height: 212 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Ephesians 4:17-19">
			So this I say, and affirm together with the Lord, that you walk no longer just as the <br>Gentiles also walk, in the futility of their mind, being darkened  in their understanding,<br>excluded from the life of God because of the ignorance that is in them, because of <br>the hardness of their heart; and they, having become callous, have given themselves<br>over to sensuality for the practice of every kind of impurity with greediness.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		step={2}
		layout={{ x: 131, y: 345, width: 706, height: 64 }}
		font={{ align: 'center', font_size: 23.3, wrap: true }}
		fill="var(--bg-level-2)"
	>
		Does a person with seared conscience or callous heart distinguish easily between what is good and what is evil?
	</Fragment>

	<Fragment
		step={3}
		layout={{ x: 44, y: 408, width: 878, height: 109 }}
		font={{ v_align: 'middle', wrap: true }}
	>
		<ScriptureBlock title="Isaiah 5:20">
			Woe to those who call evil good, and good evil; Who substitute darkness for light and light for darkness; Who substitute bitter for sweet and sweet for bitter!
		</ScriptureBlock>
	</Fragment>
</Slide>
