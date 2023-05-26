<script lang="ts">
	import { page } from '$app/stores'

	const menuItems: { label: string; href: string }[] = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'Pricing',
			href: '/pricing'
		},
		{
			label: 'Contacts',
			href: '/contacts'
		},
		{
			label: 'Account',
			href: '/account'
		}
	]
</script>

<div class="navbar max-w-8xl w-52 mx-auto bg-base-300 text-white">
	<div class="navbar-start">Web Services</div>
	<div class="navbar-center hidden lg:flex">
		<div class="text-sm leading-6 font-semibold">
			<ul class="flex space-x-8">
				{#each menuItems as { href, label }}
					<li><a {href} class="hover:text-white">{label}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-end space-x-4">
		<a href={'#'}>Register</a>
		<a href={'#'}>Login</a>
	</div>
</div>
