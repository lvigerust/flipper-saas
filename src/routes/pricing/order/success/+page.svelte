<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	let animate: boolean

	onMount(() => {
		animate = true
	})
</script>

{#if animate}
	<section
		transition:fade|local={{ delay: 800, duration: 1000 }}
		class="flex h-full flex-col items-center justify-center gap-4"
	>
		<h1 class="font-Display text-5xl font-semibold text-white">Here comes confetti 🎉🎉🎉</h1>
		<p class="text-lg">Thank you for your order</p>
	</section>
{/if}
