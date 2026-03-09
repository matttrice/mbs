<script lang="ts">
	import Fragment from '$lib/components/Fragment.svelte';
	import ScriptureBlock from '$lib/components/ScriptureBlock.svelte';
</script>

<div class="slide-bg scripture"></div>

<!-- Static scripture with fill -->
<Fragment
	layout={{ x: 135, y: 30, width: 687, height: 387 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
>
	<ScriptureBlock title="James 2:14">
		What use is it, my brethren, if someone says he has faith but he has no works? Can that faith save him? <sup>15</sup> If a brother or sister is without clothing and in need of daily food,<sup>16</sup> and one of you says to them, "Go in peace, be warmed and be filled," and yet you do not give them what is necessary for their body, what use is that? <br><sup>17</sup> Even so faith, if it has no works, is dead, being by itself.<br><sup>18</sup> But someone may well say, "You have faith and I have works; show me your faith without the works, and I will show you my faith by my works." <sup>19</sup> You believe that God is one. You do well; the demons also believe, and shudder. <br><sup>20</sup> But are you willing to recognize, you foolish fellow, that faith without works is useless? <sup>21</sup> Was not Abraham our father justified by works when he offered up Isaac his son on the altar? <sup>22</sup> You see that faith was working with his works, and as a result of the works, faith was perfected; <sup>23</sup> and the Scripture was fulfilled which says, "And Abraham believed God, and it was reckoned to him as righteousness," and he was called the friend of God. <sup>24</sup> You see that a man is justified by works and not by faith alone.
	</ScriptureBlock>
</Fragment>

<!-- Step 1: Highlighted overlay -->
<Fragment
	step={1}
	layout={{ x: 140, y: 76, width: 682, height: 341 }}
	font={{ align: 'left', v_align: 'middle', wrap: true }}
	fill="var(--bg-ghost)"
>
	What use is it, my brethren, if someone says he has faith but he has no works? Can that faith save him? <sup>15</sup> If a brother or sister is without clothing and in need of daily food,<sup>16</sup> and one of you says to them, "Go in peace, be warmed and be filled," and yet you do not give them what is necessary for their body, what use is that? <br><sup>17</sup> <u>Even so faith, if it has no works, is dead, being by itself.</u><br><sup>18</sup> But someone may well say, "You have faith and I have works; show me your faith without the works, and I will show you my faith by my works." <sup>19</sup> You believe that God is one. You do well; the demons also believe, and shudder. <br><sup>20</sup> But are you willing to recognize, you foolish fellow, that faith without works is useless? <sup>21</sup> Was not Abraham our father justified by works when he offered up Isaac his son on the altar? <sup>22</sup> You see that faith was working with his works, and <u>as a result of the works, faith was perfected</u>; <sup>23</sup> and the Scripture was fulfilled which says, "And Abraham believed God, and it was reckoned to him as righteousness," and he was called the friend of God. <sup>24</sup> You see that a man is justified by works and not by faith alone.
</Fragment>

<!-- Step 2: Commentary -->
<Fragment
	step={2}
	layout={{ x: 131, y: 421, width: 705, height: 82 }}
	font={{ font_size: 20, color: 'var(--text-level-3)', align: 'center', wrap: true }}
>
	Clearly some works are necessary in addition to belief: <br>God instructs us to be baptized - faith is "perfected" when we follow through.<br><u>This instruction is part the one true seed. </u>
</Fragment>

<!-- Step 3: Grace/works relationship (manually added) -->
<Fragment
	step={3}
	layout={{ x: 103, y: 57, width: 292, height: 40 }}
	font={{ font_size: 21.3, align: 'center' }}
	fill="#FFD700"
>
	Grace and works go together.
</Fragment>
