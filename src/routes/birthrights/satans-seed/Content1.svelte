<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Ellipse } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Static: Title -->
<Fragment
	layout={{ x: 91, y: 8, width: 756, height: 44 }}
	font={{ font_size: 36, bold: true }}
>
	2 Corinthians 11:2
</Fragment>

<!-- Step 1: Scripture text -->
<Fragment
	step={1}
	layout={{ x: 95, y: 50, width: 786, height: 179 }}
	font={{ font_size: 21.7, wrap: true }}
	fill="var(--color-bg-light)"
>
	I am jealous for you with a godly jealousy. I promised you to one husband, to Christ, so that I might present you as a pure virgin to him. 3 But I am afraid that just as Eve was deceived by the serpent's cunning, your minds may somehow be led astray from your sincere and pure devotion to Christ. 4 For if someone comes to you and preaches a Jesus other than the Jesus we preached, or if you receive a different spirit from the one you received, or a different gospel from the one you accepted, you put up with it easily enough.
</Fragment>

<!-- Step 2: How can multiple Jesus' exist? -->
<Fragment
	step={2}
	layout={{ x: 80, y: 242, width: 420, height: 38 }}
	font={{ font_size: 23.3, bold: true, align: 'center', wrap: true }}
>
	How can multiple Jesus' exist?
</Fragment>

<!-- Step 3: Jesus is not just an utterance -->
<Fragment
	step={3}
	layout={{ x: 100, y: 300, width: 392, height: 171 }}
	font={{ font_size: 21.7, bold: true, align: 'center', wrap: true }}
>
	"Jesus" is not just an utterance: He is the Word: doctrine - teachings - instruction. There are different gospels and different Jesus's. True Christ is monogamous – one doctrine (one Husband, one Bride – the Church)
</Fragment>

<!-- Step 4: Satan is promiscuous -->
<Fragment
	step={4}
	layout={{ x: 507, y: 241, width: 342, height: 138 }}
	font={{ font_size: 20, bold: true, wrap: true }}
	line={{ width: 1, color: '#000000' }}
>
	Satan is promiscuous (many women – many doctrines). He impregnates with his seed to generate illegitimate children; These women/churches will teach their children a gospel message but it is not the true.
</Fragment>

<!-- Step 4: Seed/Doctrine labels -->
<Fragment
	step={4}
	layout={{ x: 552, y: 392, width: 126, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
>
	Seed/ Doctrine
</Fragment>

<Fragment
	step={4}
	layout={{ x: 704, y: 392, width: 126, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
>
	Seed/ Doctrine
</Fragment>

<!-- Step 4: Harlots ellipses -->
<Fragment step={4}>
	<Ellipse cx={569} cy={463} rx={44} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={8} />
</Fragment>

<Fragment
	step={4}
	layout={{ x: 539, y: 454, width: 65, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
	zIndex={9}
>
	Harlots
</Fragment>

<Fragment step={4}>
	<Ellipse cx={682} cy={463} rx={44} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={6} />
</Fragment>

<Fragment
	step={4}
	layout={{ x: 653, y: 454, width: 64, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
	zIndex={11}
>
	Harlots
</Fragment>

<Fragment step={4}>
	<Ellipse cx={786} cy={463} rx={44} ry={48} stroke={{ width: 8, color: '#000000' }} zIndex={7} />
</Fragment>

<Fragment
	step={4}
	layout={{ x: 757, y: 454, width: 63, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle' }}
	zIndex={10}
>
	Harlots
</Fragment>
