<script lang="ts">
	interface Props {
		title?: string;
		scale?: 'sm' | 'md' | 'lg';
		class?: string;
		children: import('svelte').Snippet;
	}

	let { title, scale = 'md', class: className = '', children }: Props = $props();
</script>

<div class={`scripture-block scripture-scale-${scale} ${className}`.trim()}>
	{#if title}
		<h2 class="scripture-title">{title}</h2>
	{/if}
	<div class="scripture-text">{@render children()}</div>
</div>