<script lang="ts">
	import { goto } from '$app/navigation'
	import toast from 'svelte-french-toast'
	import { superForm } from 'sveltekit-superforms/client'

	export let data

	const { form, errors, enhance } = superForm(data.updateContactForm, {
		onResult: ({ result }) => {
			switch (result.type) {
				case 'success':
					toast.success('Successfully updated contact!')
					break
				case 'error':
					toast.error('Error updating your contact.')
				case 'failure':
					toast.error('Validation error, check the details and try again.')
				default:
					return
			}
			return
		}
	})
</script>

<div class=" flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h1 class="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight text-slate-300">
			Edit Contact
		</h1>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form method="POST" action="?/updateContact" class="flex flex-col space-y-6" use:enhance>
			<div>
				<label for="name" class="block text-sm font-medium leading-6">Name</label>
				<div class="mt-2">
					<input bind:value={$form.name} type="text" name="name" class="tailwindInput" />
					{#if $errors.name}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500">{$errors.name}</span
						>
					{/if}
				</div>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Email</label>
				<div class="mt-2">
					<input bind:value={$form.email} type="email" name="email" class="tailwindInput" />
					{#if $errors.email}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
							>{$errors.email}</span
						>
					{/if}
				</div>
			</div>
			<div>
				<label for="phone" class="block text-sm font-medium leading-6">Phone</label>
				<div class="mt-2">
					<input bind:value={$form.phone} type="text" name="phone" class="tailwindInput" />
					{#if $errors.phone}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
							>{$errors.phone}</span
						>
					{/if}
				</div>
			</div>
			<div>
				<label for="company" class="block text-sm font-medium leading-6">Company</label>
				<div class="mt-2">
					<input bind:value={$form.company} type="text" name="company" class="tailwindInput" />
					{#if $errors.company}
						<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
							>{$errors.company}</span
						>
					{/if}
				</div>
			</div>

			<!-- Action -->
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Save Changes</button
			>
		</form>
	</div>
</div>
