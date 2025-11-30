<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import { fade } from 'svelte/transition';
</script>

<Slide>
<div class="drill-content">
	<header>
		<h1>Galatians 3:16-29</h1>
	</header>

	<div class="content">
		<Fragment step={1}>
			<blockquote class="scripture" transition:fade>
				<p>
					<sup>16</sup> Now the promises were made to Abraham and to his offspring. It does not say, "And to offsprings," referring to many; but, referring to one, "And to your offspring," which is Christ. <sup>17</sup> This is what I mean: the law, which came four hundred and thirty years afterward, does not annul a covenant previously ratified by God, so as to make the promise void. <sup>18</sup> For if the inheritance is by the law, it is no longer by promise; but God gave it to Abraham by a promise. <sup>19</sup> Why then the law? It was added because of transgressions, till the offspring should come to whom the promise had been made; and it was ordained by angels through an intermediary. <sup>20</sup> Now an intermediary implies more than one; but God is one. <sup>21</sup> Is the law then against the promises of God? Certainly not; for if a law had been given which could make alive, then righteousness would indeed be by the law. <sup>22</sup> But the scripture consigned all things to sin, that what was promised to faith in Jesus Christ might be given to those who believe. <sup>23</sup> Now before faith came, we were confined under the law, kept under restraint until faith should be revealed. <sup>24</sup> So that the law was our custodian until Christ came, that we might be justified by faith. <sup>25</sup> But now that faith has come, we are no longer under a custodian; <sup>26</sup> for in Christ Jesus you are all sons of God, through faith. <sup>27</sup> For as many of you as were baptized into Christ have put on Christ. <sup>28</sup> There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female; for you are all one in Christ Jesus. <sup>29</sup> And if you are Christ's, then you are Abraham's offspring, heirs according to promise.
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
