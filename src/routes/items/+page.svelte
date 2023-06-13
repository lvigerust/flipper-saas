<script lang="ts">
	export let data

	$: ({ items } = data)

	$: items.sort((a, b) => new Date(b.bought_at).getTime() - new Date(a.bought_at).getTime())

	function calculateROI(buy_price: number, sale_price: number) {
		return Math.round((sale_price / buy_price) * 100) + ' %'
	}

	function formatCurrency(price: number) {
		const formatCurrency = new Intl.NumberFormat('no-NO', {
			style: 'currency',
			currency: 'NOK',
			maximumFractionDigits: 0
		}).format(price)

		return formatCurrency
	}

	type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

	function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
		const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
		const relativeFormatter = new Intl.RelativeTimeFormat(locales)

		const bought_at = new Date(date).getTime()
		const today = new Date().getTime()
		const difference = Math.ceil((bought_at - today) / (1000 * 3600 * 24))

		if (difference < -14) {
			return formatter.format(new Date(date))
		} else return relativeFormatter.format(difference, 'day')
	}
</script>

<div class="rounded-lg border border-slate-700 bg-neutral py-10">
	<div class="mx-auto max-w-7xl">
		<section class="px-4">
			<div class="mx-4 sm:flex sm:items-center">
				<div class="flex-auto">
					<h1 class="text-base font-semibold leading-6 text-slate-300">Items</h1>
					<p class="mt-2 text-sm">
						A list of all the users in your account including their name, email, phone and company.
					</p>
				</div>
				<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						tabindex="0"
						class="block cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
						>Add flip</button
					>
				</div>
			</div>
			<div class="mt-8 flow-root">
				<div class="overflow-x-auto">
					<div class="inline-block min-w-full py-2 align-middle">
						<table class="min-w-full text-left text-sm">
							<!-- head -->
							<thead>
								<tr class="font-semibold text-slate-300 [&>th]:px-3 [&>th]:py-[.875rem]">
									<th>Item</th>
									<th>Buy price</th>
									<th>Sale price</th>
									<th>ROI</th>
									<th>Purchased</th>
									<th>Sold</th>
								</tr>
							</thead>
							<tbody>
								{#each items as item, _i (item.id)}
									<tr class="group [&>td]:whitespace-nowrap [&>td]:px-3 [&>td]:py-4">
										<td
											class="rounded-l-md font-medium text-slate-300 transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-200"
											>{item.title ?? '--'}</td
										>
										<td
											class="select-all transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
										>
											{formatCurrency(item.buy_price) ?? '--'}
										</td>
										<td
											class="select-all transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
											>{formatCurrency(item.sale_price ?? 0)}</td
										>
										{#if item.sale_price}
											<td
												class="select-all transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
												>{calculateROI(item.buy_price, item.sale_price) ?? '--'}</td
											>
										{/if}
										<td
											class="transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
											>{formatDate(item.bought_at) ?? '--'}</td
										>
										<td
											class="transition-colors duration-100 group-hover:bg-slate-700/50 group-hover:text-slate-300"
											>{formatDate(item.sold_at ?? '--')}</td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
