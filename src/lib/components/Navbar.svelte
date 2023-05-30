<script lang="ts">
	import { page } from '$app/stores'

	const menuItems: { label: string; href: string }[] = [
		{
			label: 'Features',
			href: '/features'
		},

		{
			label: 'Pricing',
			href: '/pricing'
		},
		{
			label: 'Account',
			href: '/account/profile'
		}
	]
</script>

<nav class="navbar">
	<div class="navbar-start gap-x-12">
		<a href="/" class="tracking-tight hover:text-blue-300"
			>VW <span class="font-semibold tracking-normal text-slate-300">Solutions</span></a
		>
		<ul class="flex gap-x-6">
			{#each menuItems as { label, href }}
				<li>
					<a
						{href}
						class="inline-block rounded-lg px-2 py-1 text-sm hover:bg-slate-800/30 hover:text-slate-100 {$page
							.url.pathname === href
							? 'text-slate-100'
							: ''}">{label}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end gap-x-5 md:gap-x-8">
		<a
			href="/login"
			class="inline-block rounded-lg px-2 py-1 text-sm hover:bg-slate-800/30 hover:text-slate-300"
			>Sign in</a
		>
		<a
			href="/register"
			class="group inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
			><span>Get started <span class="hidden lg:inline">today</span></span></a
		>
	</div>
</nav>
