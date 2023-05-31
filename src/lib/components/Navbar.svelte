<script lang="ts">
	import { page } from '$app/stores'
	import type { Session } from '@supabase/supabase-js'

	export let session: Session | null

	const menuItems: { label: string; href: string }[] = [
		{
			label: 'Features',
			href: '/features'
		},

		{
			label: 'Pricing',
			href: '/pricing'
		}
		// {
		// 	label: 'Account',
		// 	href: '/account/profile'
		// }
	]

	let showAccountMenu = false

	function toggleAccountMenu() {
		showAccountMenu = !showAccountMenu
	}
</script>

<nav class="navbar">
	<div class="navbar-start gap-x-12">
		<a href="/" class="tracking-tight hover:text-white"
			>Wazzz<span class="font-semibold tracking-normal text-slate-300">up</span></a
		>
		<ul class="flex gap-x-6">
			{#each menuItems as { label, href }}
				<li>
					<a
						{href}
						class="inline-block rounded-lg px-2 py-1 text-sm hover:bg-slate-800/30 hover:text-slate-100 {$page
							.url.pathname === href ||
						($page.url.pathname.startsWith('/account') && href.includes('/account'))
							? 'text-slate-100'
							: ''}">{label}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end gap-x-5 md:gap-x-8">
		{#if session}
			<div class="dropdown-end dropdown">
				<button
					on:click={toggleAccountMenu}
					id="menu-button"
					aria-expanded={showAccountMenu}
					class="m-1 rounded-md px-2 py-1 text-sm hover:bg-slate-800/30 hover:text-slate-100 focus:bg-slate-800 focus:text-slate-100 focus:ring-1"
					>Account</button
				>
				<div
					class="dropdown-content menu mt-2 w-56 rounded-md bg-slate-800 p-2 shadow"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div class="py-1" role="none">
						<div class="block px-2 py-1 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
							{session.user.email}
						</div>
						<div class="divider mx-2 my-2" />
						<a
							href="/account/profile"
							class="block rounded-md px-2 py-1 text-sm hover:font-medium hover:text-slate-200"
							role="menuitem"
							tabindex="-1"
							id="menu-item-1">Settings</a
						>
						<a
							href="/account/billing"
							class="block px-2 py-1 text-sm hover:font-medium hover:text-slate-200"
							role="menuitem"
							tabindex="-1"
							id="menu-item-2">Billing</a
						>
						<div class="divider mx-2 my-2" />
						<form method="POST" action="/logout" role="none">
							<button
								type="submit"
								class="block w-full px-2 py-1 text-left text-sm hover:font-medium hover:text-slate-200"
								role="menuitem"
								tabindex="-1"
								id="menu-item-3">Sign out</button
							>
						</form>
					</div>
				</div>
			</div>
		{:else}
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
		{/if}
	</div>
</nav>
