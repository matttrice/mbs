<script lang="ts">
	import Slide from '$lib/components/Slide.svelte';
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
    import { navigation } from '$lib/stores/navigation';
</script>

<Slide>
	<Fragment
		layout={{ x: 48, y: 22, width: 884, height: 467 }}
		font={{ align: 'left', v_align: 'top', wrap: true }}
	>
		<ScriptureBlock title="Romans 3:19 (NIV)">
			Now we know that whatever the law says, it says to those who are under the law, so that every<br>mouth may be silenced and the whole world held accountable to God. <sup>20</sup> Therefore no one will <br>be declared righteous in his sight by observing the law; rather, <u>through the law we become </u><br><u>conscious of sin</u>. <sup>21</sup> But now a righteousness from God, apart from law, has been made known, <br>to which the Law and the Prophets testify. <sup>22</sup> This righteousness from God comes through faith in <br>Jesus Christ to all who believe. There is no difference, <sup>23</sup> for all have sinned and fall short of the <br>glory of God, <sup>24</sup> and are justified freely by his grace through the redemption that came by <br>Christ Jesus. <sup>25</sup> God presented him as a sacrifice of atonement, through faith in his blood. He did <br>this to demonstrate his justice, because in his forbearance he had left the sins committed <br>beforehand unpunished-- <sup>26</sup> he did it to demonstrate his justice at the present time, so as to be <br>just and the one who justifies those who have faith in Jesus.  <sup>27</sup> Where, then, is boasting? It is <br>excluded. On what principle? On that of observing the law? No, but on that of faith. <sup>28</sup> For we <br>maintain that a man is justified by faith apart from observing the law. <br><sup>29</sup> Is God the God of Jews only? Is he not the God of Gentiles too?  Yes, of Gentiles too, <br><sup>30</sup> since there is only one God, who will justify the circumcised by faith and the uncircumcised<br>through that same faith. <sup>31</sup> Do we, then, nullify the law by this faith? Not at all! <br>Rather, we uphold the law.
		</ScriptureBlock>
	</Fragment>

	<Fragment
		layout={{ x: 765, y: 488, width: 148, height: 28 }}
		font={{ font_size: 16.7, italic: true, align: 'center' }}
	>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <span
        style="cursor: pointer;"
        onclick={() => navigation.drillInto('law/romans-3-19-nasb', 0, false)}
    >
        - link to NASB version -
    </span>
	</Fragment>
</Slide>
