<script lang="ts">
	import { page } from '$app/stores'

	const subPages: { name: string; href: string }[] = [
		{
			name: 'Profile',
			href: '/account/profile'
		},
		{
			name: 'Password',
			href: '/account/password'
		},
		{
			name: 'Billing',
			href: '/account/billing'
		}
	]

	$: activePage = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1)
	$: if (activePage) {
		activePage = activePage.charAt(0).toUpperCase() + activePage.slice(1)
	}
</script>

<svelte:head>
	<title>{activePage} settings — Flipper</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<hgroup class="space-y-1">
		<h1 class="text-2xl font-semibold text-slate-200">Account</h1>
		<h2>Set your account settings down below</h2>
	</hgroup>

	<div class="mb-10 mt-6 flex justify-evenly gap-1 rounded-lg bg-slate-950/25 p-[5px]">
		{#each subPages as { name, href }}
			<a
				class="{$page.url.pathname === href
					? 'bg-slate-900/50 font-semibold text-slate-300'
					: ''} flex h-8 min-h-0 w-full items-center justify-center rounded-lg px-10 py-5 text-sm font-normal normal-case"
				{href}>{name}</a
			>
		{/each}
	</div>
	<slot />
</div>
