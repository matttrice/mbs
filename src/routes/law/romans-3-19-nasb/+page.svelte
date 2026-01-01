<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 3:19-31 NASB Version
	 * Custom Show ID: 16 (Romans3.19-31NASB)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 900, height: 40 }}
		font={{ font_size: 34, bold: true, align: 'center' }}
	>
		Romans 3:19-31 (NASB)
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 55, width: 900, height: 420 }}
		font={{ font_size: 15, align: 'left', wrap: true }}
		animate="fade"
	>
		Now we know that whatever the Law says, it speaks to those who are under the Law, so that every mouth may be closed and all the world may become accountable to God; because by the works of the Law no flesh will be justified in His sight; for through the Law comes the knowledge of sin. But now apart from the Law the righteousness of God has been manifested, being witnessed by the Law and the Prophets, even the righteousness of God through faith in Jesus Christ for all those who believe; for there is no distinction; for all sinned and fall short of the glory of God, being justified as a gift by His grace through the redemption which is in Christ Jesus; whom God displayed publicly as a propitiation in His blood through faith. This was to demonstrate His righteousness, because in the forbearance of God He passed over the sins previously committed; for the demonstration, I say, of His righteousness at the present time, so that He would be just and the justifier of the one who has faith in Jesus. Where then is boasting? It is excluded. By what kind of law? Of works? No, but by a law of faith. For we maintain that a man is justified by faith apart from works of the Law. Or is God the God of Jews only? Is He not the God of Gentiles also? Yes, of Gentiles also, since indeed God who will justify the circumcised by faith and the uncircumcised through faith is one. Do we then nullify the Law through faith? May it never be! On the contrary, we establish the Law.
	</Fragment>

	<!-- Link to NIV -->
	<Fragment
		step={2}
		drillTo="law/romans-3-19"
		layout={{ x: 30, y: 485, width: 200, height: 35 }}
		font={{ font_size: 22, italic: true, color: '#0000CC' }}
		animate="fade"
	>
		- link to NIV version -
	</Fragment>
</Slide>
