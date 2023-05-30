<script lang="ts">
	import Card from './Card.svelte'

	import { plans } from './plans'

	let billingPlan: 'Monthly' | 'Annually' = 'Monthly'
</script>

<section class="py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="md:text-center">
			<h1 class="font-Display text-3xl font-medium tracking-tight text-white sm:text-4xl">
				Simple pricing, for everyone.
			</h1>
			<p class="mt-2 text-lg text-slate-400">
				It doesn't matter what size your business is, our software won't work well for you.
			</p>
		</div>
		<!-- <div class="mt-8 flex justify-center">
			<div class="grid grid-cols-2 text-sm">
				<button
					on:click={() => (billingPlan = 'Monthly')}
					class="{billingPlan === 'Monthly'
						? 'border-primary bg-primary font-semibold text-white'
						: ''} rounded-l-lg border-y border-l border-slate-500 px-4 py-2 normal-case"
					>Monthly</button
				>
				<button
					on:click={() => (billingPlan = 'Annually')}
					class="{billingPlan === 'Annually'
						? 'border-primary bg-primary font-semibold text-white'
						: ''} rounded-r-lg border-y border-r border-slate-500 px-4 py-2 normal-case"
					>Annually</button
				>
			</div>
		</div> -->

		<div
			class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"
		>
			{#each plans as plan}
				<Card {plan} />
			{/each}
		</div>
	</div>
</section>
