<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import { Arrow, Ellipse, Rect } from '$lib/components/svg';
</script>

<div class="slide-bg scripture"></div>

<!-- Title -->
<Fragment
	layout={{ x: 160, y: 0, width: 100, height: 44 }}
	font={{ font_size: 36, bold: true }}
	zIndex={2}
>
	2 Corinthians 11:2-4
</Fragment>

<!-- Static scripture text -->
<Fragment
	layout={{ x: 40, y: 35, width: 880, height: 200 }}
	font={{ font_size: 22, wrap: true }}
	zIndex={0}
>
	I am jealous for you with a godly jealousy. I promised you to one husband, to Christ, so that I might present you as a pure virgin to him. <sup>3</sup> But I am afraid that just as Eve was deceived by the serpent's cunning, your minds may somehow be led astray from your sincere and pure devotion to Christ. <sup>4</sup> For if someone comes to you and preaches a Jesus other than the Jesus we preached, or if you receive a different spirit from the one you received, or a different gospel from the one you accepted, you put up with it easily enough.
</Fragment>

<!-- Step 1: Highlight box -->
<Fragment
	step={1}
	layout={{ x: 40, y: 35, width: 880, height: 200 }}
	font={{ font_size: 22, wrap: true }}
	fill="var(--color-bg-light)"
	zIndex={1}
>
	I am jealous for you with a godly jealousy. I promised you to <strong><u>one husband, to Christ</u></strong>, so that I might present you as a pure virgin to him. <sup>3</sup> But I am afraid that just <strong><u>as Eve was deceived by the serpent's cunning, your minds may somehow be led astray</u></strong> from your sincere and pure devotion to Christ. <sup>4</sup> For if someone comes to you and preaches <strong><u>a Jesus other than the Jesus we preached</u></strong>, or if you receive a different spirit from the one you received, or <strong><u>a different gospel</u></strong> from the one you accepted, you put up with it easily enough.
</Fragment>

<!-- Step 2: How can multiple Jesus' exist? -->
<Fragment
	step={2}
	layout={{ x: 45, y: 245, width: 420, height: 30 }}
	font={{ font_size: 23.3, bold: true, align: 'center', wrap: true }}
	line={{ width: 1, color: 'var(--color-stroke-dark)' }}
	fill="var(--color-highlight)"
>
	How do multiple Jesus' exist?
</Fragment>

<!-- Step 3: Jesus explanation -->
<Fragment
	step={3}
	layout={{ x: 45, y: 274, width: 420, height: 150 }}
	font={{ font_size: 22, align: 'center', wrap: true }}
	line={{ width: 1, color: 'var(--color-stroke-dark)' }}
	fill="var(--color-level2)"
>
	<strong>"Jesus" is not just an utterance:</strong><br>He is the Word:<br><u>doctrine - teachings - instruction.</u><br>There are different "gospels" <br> and thus different Jesuses
</Fragment>

<Fragment
	step={3}
	layout={{ x: 45, y: 435, width: 465, height: 55 }}
	font={{ font_size: 22, align: 'center', wrap: true }}
	line={{ width: 1, color: 'var(--color-stroke-dark)' }}

>
	<strong><u>The true Christ</u></strong> is monogamous – one doctrine (one Husband, one Bride – the Church)
</Fragment>

<!-- Step 4: Satan is promiscuous box -->
<Fragment
	step={4}
	layout={{ x: 507, y: 245, width: 380, height: 145 }}
	font={{ font_size: 20, wrap: true }}
	line={{ width: 1, color: 'var(--color-stroke-dark)' }}
>
	<strong>Satan is promiscuous <br> (many women – many doctrines)</strong><br>He impregnates with his seed to generate Illegitimate children; These women/churches will teach their children <strong><span style="color: var(--color-bg-blood);">a gospel message but it is not the true.</span></strong>
</Fragment>

<!-- Step First Harlots oval -->
<Fragment step={4}>
	<Ellipse cx={585} cy={448} rx={44} ry={48} fill="var(--color-bg-blood)" stroke={{ width: 8, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<!-- Step Second Harlots oval -->
<Fragment step={4}>
	<Ellipse cx={699} cy={448} rx={44} ry={48} fill="var(--color-bg-blood)" stroke={{ width: 8, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<!-- Step Third Harlots oval -->
<Fragment step={4}>
	<Ellipse cx={803} cy={448} rx={43.5} ry={48} fill="var(--color-bg-blood)" stroke={{ width: 8, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<Fragment 
	step={4}
	layout={{ x: 535, y: 383, width: 100, height: 100 }}
	zIndex={1}
>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
</Fragment>

<Fragment 
	step={4}
	layout={{ x: 649, y: 383, width: 100, height: 100 }}
	zIndex={1}
	>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
</Fragment>

<Fragment
	step={4}
	layout={{ x: 753, y: 383, width: 100, height: 100 }}
	zIndex={1}
	>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800"><g fill="var(--color-bg-dark)" stroke-width="10" stroke="hsl(356, 77%, 40%)" id="black-heart"><path d="M409.7902255825229 338.46151840103255C596.8531592309057 141.25873880453042 800 400 409.79021427181215 669.2307397802393 0 400 203.1468407690943 141.25873880453042 409.7902255825229 338.46151840103255Z" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
</Fragment>

<!-- Step (with): Harlots text (first) -->
<Fragment
	step={4}
	layout={{ x: 553, y: 460, width: 65, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--color-text-light)' }}
	zIndex={2}
>
	Harlots
</Fragment>

<!-- Step (with): Harlots text (second) -->
<Fragment
	step={4}
	layout={{ x: 666, y: 460, width: 64, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--color-text-light)' }}
	zIndex={2}
>
	Harlots
</Fragment>

<!-- Step (with): Harlots text (third) -->
<Fragment
	step={4}
	layout={{ x: 773, y: 460, width: 63, height: 22 }}
	font={{ font_size: 17.5, bold: true, align: 'center', v_align: 'middle', color: 'var(--color-text-light)'	 }}
	zIndex={2}
>
	Harlots
</Fragment>

<!-- Step (with): Arrow lines to harlots -->
<Fragment step={4} animate="wipe-down">
	<Arrow from={{ x: 640, y: 396 }} to={{ x: 622, y: 413 }} stroke={{ width: 3, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<Fragment step={4} animate="wipe-down">
	<Arrow from={{ x: 639, y: 396 }} to={{ x: 658, y: 419 }} stroke={{ width: 3, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<Fragment step={4} animate="wipe-down">
	<Arrow from={{ x: 754, y: 399 }} to={{ x: 738, y: 418 }} stroke={{ width: 3, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<Fragment step={4} animate="wipe-down">
	<Arrow from={{ x: 753, y: 399 }} to={{ x: 766, y: 416 }} stroke={{ width: 3, color: 'var(--color-bg-darkest)' }} />
</Fragment>

<!-- Step Baptism warning -->
<Fragment
	step={5}
	layout={{ x: 140, y: 505, width: 700, height: 48 }}
	font={{ font_size: 18, wrap: true, color: 'var(--color-bg-ghost)', align: 'center', italic: true }}
	fill="var(--color-bg-darkest)"
>
	Simply because one is baptized does not guarantee birth into the true (legitimate) family, thus, receiving the precious birthrights from Christ.
</Fragment>
