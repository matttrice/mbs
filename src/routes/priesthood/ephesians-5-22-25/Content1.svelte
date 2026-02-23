<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Title (static) -->
<Fragment
	layout={{ x: 98, y: 28, width: 778, height: 40 }}
	font={{ font_size: 36, bold: true, align: 'left' }}
>
	Ephesians 5:22-25
</Fragment>

<!-- Scripture (static) -->
<Fragment
	layout={{ x: 98, y: 69, width: 764, height: 182 }}
	font={{ font_size: 24, v_align: 'middle', wrap: true }}
>
	Wives, be subject to your own husbands, as to the Lord. <sup>23</sup> For the husband is the head of the wife, as <strong>Christ also is the head of the church</strong>, He Himself being the Savior of the body. <sup>24</sup> But as the <strong>church is subject to Christ</strong>, so also the wives ought to be to their husbands in everything. <sup>25</sup> Husbands, love your wives, just as Christ also loved the church and gave Himself up for her,
</Fragment>

<!-- Galatians (static) -->
<Fragment
	layout={{ x: 98, y: 271, width: 764, height: 180 }}
	font={{ font_size: 28.8, bold: true, v_align: 'middle', wrap: true }}
	zIndex={3}
>
	<strong>Galatians 3:26-28</strong><br />
	<u>For </u><strong><u>you are all sons of God</u></strong><u> through faith in Christ Jesus</u>. <sup>27</sup> For all of you who were baptized into Christ have clothed yourselves with Christ. <sup>28</sup> There is neither Jew nor Greek, there is neither slave nor free man, <strong>there is neither male nor female</strong>; for you are all one in Christ Jesus. <sub>(NASB95)</sub>
</Fragment>
