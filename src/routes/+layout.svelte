<script>
	import { page } from '$app/stores'
	import { Navbar } from '$components'
	import { fly } from 'svelte/transition'
	import '../app.css'

	$: route = $page.route.id?.slice(1)

	$: if (route) {
		route = route.charAt(0).toUpperCase() + route.slice(1)
	}

	export let data
	$: ({ url } = data)
</script>

<svelte:head>
	<title>{route ? route : 'Home'} — L.V. Solutions</title>
</svelte:head>

<Navbar />

<main class="overflow-hidden">
	{#key url.slice(0, 3)}
		<div
			in:fly={{ x: 500, duration: 300, delay: 300 }}
			out:fly={{ x: -500, duration: 300 }}
			class="mx-auto max-w-8xl px-4 pb-8 pt-16 sm:px-6 lg:px-8"
		>
			<slot />
		</div>
	{/key}
</main>
