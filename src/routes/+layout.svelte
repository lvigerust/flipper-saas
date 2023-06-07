<script lang="ts">
	import '../app.css'
	import { onMount } from 'svelte'
	import { invalidate } from '$app/navigation'
	import { firstMount } from '$lib/stores'
	import { Navbar } from '$components'
	import { fade } from 'svelte/transition'

	export let data

	$: ({ url, session, supabase } = data)
	$: if (url) {
		url = url.slice(1).charAt(0).toUpperCase() + url.slice(2)
	}

	onMount(() => {
		firstMount.set(false)
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
	<title>{url !== '' ? url : 'Home'} — Flipper</title>
</svelte:head>

<div class="flex h-full flex-col overflow-hidden">
	<Navbar {session} />

	<div class="flex-1 overflow-hidden">
		<main class="mx-auto h-full max-w-8xl px-4 py-16 sm:px-6 md:px-8">
			{#key url}
				<div
					class="transition-layer h-full"
					in:fade={{ duration: 150, delay: 150 }}
					out:fade={{ duration: 150 }}
				>
					<slot />
				</div>
			{/key}
		</main>
	</div>
</div>
