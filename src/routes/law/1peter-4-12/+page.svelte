<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';

	/**
	 * 1 Peter 4:12-18 + Hebrews 10:23
	 * Custom Show ID: 10 (1Peter4.12)
	 */
</script>

<Slide>
	<!-- Title -->
	<Fragment
		layout={{ x: 30, y: 10, width: 450, height: 35 }}
		font={{ font_size: 32, bold: true, align: 'left' }}
	>
		1 Peter 4:12-18
	</Fragment>

	<!-- 1 Peter Text -->
	<Fragment
		step={1}
		layout={{ x: 30, y: 50, width: 450, height: 380 }}
		font={{ font_size: 16, align: 'left', wrap: true }}
		animate="fade"
	>
		Dear friends, do not be surprised at the painful trial you are suffering, as though something strange were happening to you. But rejoice that you participate in the sufferings of Christ, so that you may be overjoyed when his glory is revealed. If you are insulted because of the name of Christ, you are blessed, for the Spirit of glory and of God rests on you. If you suffer, it should not be as a murderer or thief or any other kind of criminal, or even as a meddler. However, if you suffer as a Christian, do not be ashamed, but praise God that you bear that name. For it is time for judgment to begin with the family of God; and if it begins with us, what will the outcome be for those who do not obey the gospel of God? And, "If it is hard for the righteous to be saved, what will become of the ungodly and the sinner?"
	</Fragment>

	<!-- Hebrews Title -->
	<Fragment
		step={2}
		layout={{ x: 500, y: 10, width: 430, height: 35 }}
		font={{ font_size: 32, bold: true, align: 'left' }}
		animate="fade"
	>
		Hebrews 10:23-27
	</Fragment>

	<!-- Hebrews Text -->
	<Fragment
		step={2}
		layout={{ x: 500, y: 50, width: 430, height: 380 }}
		font={{ font_size: 16, align: 'left', wrap: true }}
		animate="fade"
	>
		Let us hold fast the confession of our hope without wavering, for He who promised is faithful; and let us consider how to stimulate one another to love and good deeds, not forsaking our own assembling together, as is the habit of some, but encouraging one another; and all the more as you see the day drawing near. For if we go on sinning willfully after receiving the knowledge of the truth, there no longer remains a sacrifice for sins, but a terrifying expectation of judgment and the fury of a fire which will consume the adversaries.
	</Fragment>
</Slide>
