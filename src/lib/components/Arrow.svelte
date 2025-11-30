<script lang="ts">
	interface Props {
		direction?: 'down' | 'right' | 'left' | 'up';
		color?: string;
		size?: number;
	}

	let { direction = 'down', color = '#000', size = 24 }: Props = $props();

	const rotations = {
		down: 0,
		right: -90,
		left: 90,
		up: 180
	};

	const rotation = $derived(rotations[direction]);
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	style="transform: rotate({rotation}deg)"
	class="arrow"
>
	<path
		d="M12 4L12 20M12 20L6 14M12 20L18 14"
		stroke={color}
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style>
	.arrow {
		display: inline-block;
		flex-shrink: 0;
	}
</style>
