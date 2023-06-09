<script lang="ts">
	import { beforeNavigate } from '$app/navigation'
	import { fly } from 'svelte/transition'

	export let data

	$: ({ url } = data)
	$: if (url) {
		url = url.slice(9).charAt(0).toUpperCase() + url.slice(10)
	}

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

	let left = -300
	let right = 300

	let outTransition: number, inTransition: number

	beforeNavigate((event) => {
		const fromRoute = event.from?.route.id?.split('/').at(-1)!
		const toRoute = event.to?.route.id?.split('/').at(-1)

		if (fromRoute === 'profile') {
			outTransition = left
			inTransition = right
		} else if (fromRoute === 'password') {
			if (toRoute === 'profile') {
				outTransition = right
				inTransition = left
			} else {
				outTransition = left
				inTransition = right
			}
		} else if (fromRoute === 'billing') {
			outTransition = right
			inTransition = left
		}
	})
</script>

<svelte:head>
	<title>{url} settings — Flipper</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<hgroup class="space-y-1">
		<h1 class="text-2xl font-semibold text-slate-200">Account</h1>
		<h2>Set your account settings down below</h2>
	</hgroup>

	<div class="mb-10 mt-6 flex justify-evenly gap-1 rounded-lg bg-slate-950/25 p-[5px]">
		{#each subPages as { name, href }}
			<a
				class="{url === name
					? 'bg-slate-900/50 font-semibold text-slate-300'
					: ''} flex h-8 min-h-0 w-full items-center justify-center rounded-lg px-10 py-5 text-sm font-normal normal-case"
				{href}>{name}</a
			>
		{/each}
	</div>

	{#key url}
		<div
			in:fly|local={{ x: inTransition, delay: 400, duration: 400 }}
			out:fly|local={{ x: outTransition, duration: 400 }}
			class="transition-layer"
		>
			<slot />
		</div>
	{/key}
</div>
