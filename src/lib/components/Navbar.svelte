<script lang="ts">
	import { page } from '$app/stores'
	import type { Session } from '@supabase/supabase-js'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	export let session: Session | null

	const menuItems: { label: string; href: string }[] = [
		{
			label: 'Pricing',
			href: '/pricing'
		},
		{
			label: 'Contacts',
			href: '/contacts'
		}
	]

	let showAccountMenu = false

	function toggleAccountMenu() {
		showAccountMenu = !showAccountMenu
	}

	let animateItems = false

	onMount(() => {
		animateItems = true
	})
</script>

<nav class="navbar">
	{#if animateItems}
		<div class="navbar-start gap-x-12">
			<a
				in:fly={{ x: -150, duration: 800, delay: 200 }}
				href="/"
				class="m-1 -ml-2 px-2 font-semibold tracking-tight hover:text-slate-300"
				>faire<span class="text-slate-300">Sauter</span>
			</a>
			<ul class="flex gap-x-6">
				{#each menuItems as { label, href }, index}
					<li in:fly={{ opacity: 0, duration: 800, y: -50, delay: 300 + index * 75 }}>
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

		<div in:fly={{ x: 150, duration: 800, delay: 200 }} class="navbar-end gap-x-5 md:gap-x-8">
			{#if session}
				<div class="dropdown-end dropdown -mr-2">
					<button
						on:click={toggleAccountMenu}
						id="menu-button"
						aria-expanded={showAccountMenu}
						class="m-1 rounded-md px-2 py-1 text-sm hover:bg-slate-800/30 hover:text-slate-100 focus:bg-slate-800 focus:text-slate-100 focus:ring-1"
						>Account</button
					>
					<div
						class="dropdown-content menu z-50 mt-2 w-56 rounded-md bg-slate-800 p-2 shadow"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabindex="-1"
					>
						<div class="py-1" role="none">
							<div class="block px-2 py-1 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
								{session.user.user_metadata.full_name || session.user.email}
							</div>
							<div class="divider mx-2 my-1" />
							<a
								href="/account/profile"
								class="block rounded-md px-2 py-1 text-sm hover:font-medium hover:text-slate-200"
								role="menuitem"
								tabindex="-1"
								id="menu-item-1">Settings</a
							>
							<a
								href="/account/billing/portal"
								class="block px-2 py-1 text-sm hover:font-medium hover:text-slate-200"
								role="menuitem"
								tabindex="-1"
								id="menu-item-2">Billing</a
							>
							<div class="divider mx-2 my-1" />
							<form method="POST" action="/logout" role="none">
								<button
									type="submit"
									class="block w-full px-2 py-1 text-left text-sm hover:font-medium hover:text-slate-200"
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
					class="group -mr-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100"
					><span>Get started <span class="hidden lg:inline">today</span></span></a
				>
			{/if}
		</div>
	{/if}
</nav>
