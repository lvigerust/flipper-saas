<script lang="ts">
	import type { CreateContactSchema } from '$lib/schemas'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let createContactModal: HTMLDialogElement
	export let createContactForm: Validation<CreateContactSchema>

	const { form, errors, enhance } = superForm(createContactForm, {
		resetForm: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createContactModal.close()
				return
			}
		}
	})

	function clearForm() {
		setTimeout(() => {
			$errors._errors = undefined
		}, 250)
	}
</script>

<dialog bind:this={createContactModal} class="modal bg-black/20 backdrop-blur-[2px]">
	<form method="dialog" class="modal-box">
		<form method="POST" action="?/createContact" class="flex flex-col space-y-6" use:enhance>
			<h3 class="text-xl font-medium">Create Contact</h3>
			{#if $errors._errors}
				<span class="inputError">{$errors._errors}</span>
			{/if}

			<div>
				<label for="name" class="block text-sm font-medium leading-6">Name</label>
				<div class="mt-2">
					<input bind:value={$form.name} type="text" name="name" class="tailwindInput" />
					{#if $errors.name}
						<span class="inputError">{$errors.name}</span>
					{/if}
				</div>
			</div>
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Email</label>
				<div class="mt-2">
					<input bind:value={$form.email} type="email" name="email" class="tailwindInput" />
					{#if $errors.email}
						<span class="inputError">{$errors.email}</span>
					{/if}
				</div>
			</div>
			<div>
				<label for="phone" class="block text-sm font-medium leading-6">Phone</label>
				<div class="mt-2">
					<input bind:value={$form.phone} type="text" name="phone" class="tailwindInput" />
					{#if $errors.phone}
						<span class="inputError">{$errors.phone}</span>
					{/if}
				</div>
			</div>
			<div>
				<label for="company" class="block text-sm font-medium leading-6">Company</label>
				<div class="mt-2">
					<input bind:value={$form.company} type="text" name="company" class="tailwindInput" />
					{#if $errors.company}
						<span class="inputError">{$errors.company}</span>
					{/if}
				</div>
			</div>

			<!-- Action -->
			<div class="modal-action">
				<button type="submit" class="btn normal-case">Add Contact</button>
			</div>
		</form>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button class="cursor-default" on:click={clearForm}>close</button>
	</form>
</dialog>
