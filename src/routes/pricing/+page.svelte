<script lang="ts">
	import { CheckCircle } from '$icons'
	import Card from './Card.svelte'

	export let data

	$: ({ prices, interval } = data)
</script>

<section class="mx-auto max-w-7xl">
	<div class="md:text-center">
		<h1 class="font-Display text-3xl font-medium tracking-tight text-white sm:text-5xl">
			Choose a plan
		</h1>
	</div>
	<div class="mt-8 flex justify-center">
		<div class="grid w-full max-w-md grid-cols-2 gap-1 rounded-full bg-slate-800/50 p-2 text-sm">
			<a
				href="/pricing"
				class="flex items-center justify-center gap-2 rounded-full px-6 py-4 normal-case transition-colors
				{interval === 'month' ? 'border-blue-600 bg-blue-600 font-semibold text-white' : ''}"
			>
				Monthly
				<span class:hidden={interval !== 'month'} class="-mr-3">
					<CheckCircle />
				</span>
			</a>
			<a
				href="/pricing?interval=year"
				class="flex items-center justify-center gap-2 rounded-full px-6 py-4 normal-case transition-colors
				{interval === 'year' ? 'border-blue-600 bg-blue-600 font-semibold text-white' : ''}"
			>
				Yearly
				<span class:hidden={interval !== 'year'} class="-mr-3">
					<CheckCircle />
				</span>
			</a>
		</div>
	</div>

	<!-- Cards -->
	<div
		class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
	>
		{#each prices as price, index (price.id)}
			<Card {price} {interval} />
		{/each}
	</div>
</section>
