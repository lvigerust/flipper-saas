<script lang="ts">
	import type { Plan } from './plans'

	export let plan: Plan

	const { title, price, description, cta, benefits } = plan
</script>

<section
	class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8 {title === 'Plus'
		? 'bg-blue-600 text-white'
		: 'text-slate-400'}  p-6 shadow-lg shadow-gray-900/5"
>
	<h3 class="mt-5 text-lg tracking-wide text-white">{title}</h3>

	<p class="mt-2 text-base">{description}</p>
	<p class="font-display order-first text-5xl font-semibold tracking-tight text-white">${price}</p>
	<ul
		class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
		class:text-white={title === 'Plus'}
	>
		{#each benefits as benefit}
			<li class="flex">{benefit}</li>
		{/each}
	</ul>
	<a
		class="group mt-8 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm focus:outline-none focus-visible:outline-white {title ===
		'Plus'
			? 'bg-white font-semibold text-slate-900 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-blue-200 active:text-slate-600'
			: 'text-white ring-1 ring-slate-700 hover:ring-slate-500 active:text-slate-400 active:ring-slate-700 '}"
		href={'#'}>{cta}</a
	>
</section>
