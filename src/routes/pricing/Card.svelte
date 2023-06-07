<script lang="ts">
	import type { Price } from '$lib/schemas'
	import { fly } from 'svelte/transition'

	export let price: Price
	export let interval: 'month' | 'year'
</script>

<section
	class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 {price.product.name === 'Plus'
		? 'bg-blue-600 text-white'
		: 'text-slate-400'}  p-6 shadow-lg shadow-gray-900/5"
>
	<h3 class="mt-5 text-lg tracking-wide text-white">{price.product.name}</h3>

	<p class="mt-2 text-base">{price.product.description}</p>

	<p
		in:fly|local={{ y: -15, delay: 200, duration: 200 }}
		out:fly|local={{ y: 15, duration: 200 }}
		class="font-display order-first text-5xl font-semibold tracking-tight text-white"
	>
		<span>{price.unit_amount}kr</span><span class="text-2xl text-slate-400">
			/{price.unit_amount > 0 ? interval : 'forever'}</span
		>
	</p>
	<ul
		class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
		class:text-white={price.product.name === 'Plus'}
	>
		{#each price.product.features as feature, index}
			<li
				class="flex {(price.product.name === 'Free' && index >= 1) ||
				(price.product.name === 'Plus' && index >= 3)
					? 'text-slate-300/50 line-through'
					: ''}"
			>
				{feature}
			</li>
		{/each}
	</ul>
	<a
		class="group mt-8 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm focus:outline-none focus-visible:outline-white {price
			.product.name === 'Plus'
			? 'bg-white font-semibold text-slate-900 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-blue-200 active:text-slate-600'
			: 'text-white ring-1 ring-slate-700 hover:ring-slate-500 active:text-slate-400 active:ring-slate-700 '}"
		href={price.product.name === 'Free' ? '/contacts' : `/api/stripe/checkout?id=${price.id}`}
		>{price.product.call_to_action}</a
	>
</section>
