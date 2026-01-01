<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * Romans 3:19-31 NIV Version
	 * Custom Show ID: 15 (Romans3.19-31NIV)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 900, height: 40 }}
		font={{ font_size: 34, bold: true, align: 'center' }}
	>
		Romans 3:19-31 (NIV)
	</Fragment>

	<!-- Scripture Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 55, width: 900, height: 420 }}
		font={{ font_size: 15, align: 'left', wrap: true }}
		animate="fade"
	>
		Now we know that whatever the law says, it says to those who are under the law, so that every mouth may be silenced and the whole world held accountable to God. Therefore no one will be declared righteous in his sight by observing the law; rather, through the law we become conscious of sin. But now a righteousness from God, apart from law, has been made known, to which the Law and the Prophets testify. This righteousness from God comes through faith in Jesus Christ to all who believe. There is no difference, for all have sinned and fall short of the glory of God, and are justified freely by his grace through the redemption that came by Christ Jesus. God presented him as a sacrifice of atonement, through faith in his blood. He did this to demonstrate his justice, because in his forbearance he had left the sins committed beforehand unpunished— he did it to demonstrate his justice at the present time, so as to be just and the one who justifies those who have faith in Jesus. Where, then, is boasting? It is excluded. On what principle? On that of observing the law? No, but on that of faith. For we maintain that a man is justified by faith apart from observing the law. Is God the God of Jews only? Is he not the God of Gentiles too? Yes, of Gentiles too, since there is only one God, who will justify the circumcised by faith and the uncircumcised through that same faith. Do we, then, nullify the law by this faith? Not at all! Rather, we uphold the law.
	</Fragment>

	<!-- Link to NASB -->
	<Fragment
		step={2}
		drillTo="law/romans-3-19-nasb"
		layout={{ x: 30, y: 485, width: 200, height: 35 }}
		font={{ font_size: 22, italic: true, color: '#0000CC' }}
		animate="fade"
	>
		- link NASB version -
	</Fragment>
</Slide>
