<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'

	export let data

	const { form, errors, enhance } = superForm(data.form)
</script>

<section>
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h1 class="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight text-slate-300">
			Login to your account
		</h1>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form method="POST" class="space-y-6" use:enhance>
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Email</label>
				<div class="mt-2">
					<input
						bind:value={$form.email}
						type="email"
						name="email"
						class="block w-full rounded-md border-0 bg-slate-800 px-3 py-2 text-slate-200 shadow-sm outline-none ring-1 ring-inset ring-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
					/>
					{#if $errors.email}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
							>{$errors.email}</span
						>
					{/if}
				</div>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium leading-6">Password</label>
				<div class="mt-2">
					<input
						bind:value={$form.password}
						type="password"
						name="password"
						class="block w-full rounded-md border-0 bg-slate-800 px-3 py-2 text-slate-200 shadow-sm outline-none ring-1 ring-inset ring-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
					/>
					{#if $errors.password}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
							>{$errors.password}</span
						>
					{/if}
				</div>
			</div>
			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>Login</button
				>
			</div>
		</form>
		<p class="mt-10 text-center text-sm">
			Don't have an account? <a
				href="/register"
				class="font-semibold leading-6 text-blue-500 hover:text-blue-400">Sign up</a
			>
		</p>
	</div>
</section>
