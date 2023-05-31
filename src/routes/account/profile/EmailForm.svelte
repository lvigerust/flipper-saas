<script lang="ts">
	import type { EmailSchema } from '$lib/schemas'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let data: Validation<EmailSchema>

	const { form, errors, enhance } = superForm(data)
</script>

<form method="POST" action="?/updateEmail" use:enhance class="mx-auto max-w-md space-y-4">
	<div class="flex flex-col gap-4">
		<div class="form-control w-full">
			<label class="label" for="email">
				<span class="label-text font-medium">Email</span>
			</label>
			<input
				bind:value={$form.email}
				type="email"
				name="email"
				class="input-bordered input text-sm"
			/>
			{#if $errors.email}
				<span class="mt-2 block text-sm font-medium leading-6 text-red-500">{$errors.email}</span>
			{/if}
		</div>

		<button type="submit" class="btn mt-4 w-full normal-case">Update Details</button>
	</div>
</form>
