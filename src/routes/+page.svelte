<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
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
</script>

{#if animate}
	<div class="mx-auto pb-16 pt-20 text-center lg:pt-32">
		<div in:fade={{ duration: duration, delay: delay }}>
			<h1
				class="mx-auto max-w-4xl font-Display text-5xl font-medium tracking-tight text-slate-200 sm:text-7xl"
			>
				Building <span class="relative whitespace-nowrap">websites</span>
				is simple with <i class="text-pink-500">Svelte<span class="text-pink-400">Kit</span>.</i>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight">
				Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and <i
					>hope</i
				>
				you don't get audited.
			</p>
		</div>
		<div in:fade={{ delay: 1800 }} class="mt-10 flex justify-center gap-x-6">
			<a
				class="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white hover:ring-1 hover:ring-slate-800"
				href={session ? '/pricing' : '/register'}>Get 6 months free</a
			>

			<a
				class="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-slate-400 ring-1 ring-slate-800 hover:text-slate-300 hover:ring-slate-700"
				href="#features">See features</a
			>
		</div>
	</div>
{/if}
