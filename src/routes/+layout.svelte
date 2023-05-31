<script lang="ts">
	import { page } from '$app/stores'
	import { Navbar } from '$components'
	import { fly } from 'svelte/transition'
	import '../app.css'
	import { onMount } from 'svelte'
	import { invalidate } from '$app/navigation'

	let route: string | null

	$: if ($page.route.id) {
		route = $page.route.id.slice(1).charAt(0).toUpperCase() + $page.route.id.slice(2)
	}

	export let data
	$: ({ url, session, supabase } = data)

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
		return () => subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>{route ? route : 'Home'} — Wazzzup</title>
</svelte:head>

<Navbar {session} />

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
