<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Galatians 4:21-31</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>21</sup> Tell me, you who desire to be under law, do you not hear the law? <sup>22</sup> For it is written that Abraham had two sons, one by a slave and one by a free woman. <sup>23</sup> But the son of the slave was born according to the flesh, the son of the free woman through promise. <sup>24</sup> Now this is an allegory: these women are two covenants. One is from Mount Sinai, bearing children for slavery; she is Hagar. <sup>25</sup> Now Hagar is Mount Sinai in Arabia; she corresponds to the present Jerusalem, for she is in slavery with her children. <sup>26</sup> But the Jerusalem above is free, and she is our mother. <sup>27</sup> For it is written, "Rejoice, O barren one who does not bear; break forth and shout, you who are not in travail; for the children of the desolate one are many more than the children of her that is married." <sup>28</sup> Now we, brethren, like Isaac, are children of promise. <sup>29</sup> But as at that time he who was born according to the flesh persecuted him who was born according to the Spirit, so it is now. <sup>30</sup> But what does the scripture say? "Cast out the slave and her son; for the son of the slave shall not inherit with the son of the free woman." <sup>31</sup> So, brethren, we are not children of the slave but of the free woman.
				</p>
			</blockquote>
		</Fragment>
	</div>
</div>
</Slide>

<style>
	.drill-content {
		width: 100%;
		height: 100%;
		background: var(--color-bg-light, #e8e8e8);
		display: flex;
		flex-direction: column;
		padding: 40px;
		box-sizing: border-box;
	}

	header {
		text-align: center;
		margin-bottom: 30px;
	}

	header h1 {
		font-size: 36px;
		margin: 0;
		color: #000;
		font-weight: bold;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 800px;
		margin: 0 auto;
		overflow-y: auto;
	}

	.scripture {
		background: #fff;
		padding: 24px 32px;
		margin: 0;
		font-size: 18px;
		line-height: 1.6;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.scripture p {
		margin: 0;
	}

	.scripture sup {
		color: #666;
		font-size: 11px;
		margin-right: 2px;
	}
</style>
