<script lang="ts">
	import { onMount } from 'svelte'
	import { fade, scale } from 'svelte/transition'
	import { firstMount } from '$lib/stores'

	export let data

	$: ({ session } = data)

	let animate = false
	let delay = 150
	let duration = 150

	onMount(() => {
		animate = true
		if ($firstMount) {
			;(delay = 800), (duration = 1000)
		}
	})

	let animateButtons: boolean
</script>

{#if animate}
	<div class="mx-auto pb-16 pt-20 text-center lg:pt-32">
		<div in:fade={{ duration: duration, delay: delay }} on:introend={() => (animateButtons = true)}>
			<h1
				class="mx-auto max-w-4xl font-Display text-5xl font-medium tracking-tight text-slate-200 sm:text-7xl"
			>
				<i>Flipper.</i> A <span class="relative whitespace-nowrap text-pink-600">flip tracker</span>
				to log your profits.
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight">
				Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and <i
					>hope</i
				>
				you don't get audited.
			</p>
		</div>
		<div class="mt-10 flex justify-center gap-x-6">
			{#if animateButtons}
				<a
					in:scale={{ delay: 50 }}
					class="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white hover:ring-1 hover:ring-slate-800"
					href={session ? '/pricing' : '/register'}>Get 6 months free</a
				>

				<a
					in:scale={{ delay: 150 }}
					class="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-slate-400 ring-1 ring-slate-800 hover:text-slate-300 hover:ring-slate-700"
					href="#features">See features</a
				>
			{/if}
		</div>
	</div>
{/if}
