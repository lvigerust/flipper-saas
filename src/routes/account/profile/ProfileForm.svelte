<script lang="ts">
	import type { ProfileSchema } from '$lib/schemas'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let data: Validation<ProfileSchema>

	const { form, errors, enhance } = superForm(data)
</script>

<form method="POST" action="?/updateProfile" use:enhance class="mx-auto max-w-md space-y-4">
	<!-- Inputs -->
	<div class="flex flex-col gap-4">
		<!-- Name -->
		<div class="form-control w-full">
			<label class="label" for="full_name">
				<span class="label-text font-medium">Name</span>
			</label>
			<input
				bind:value={$form.full_name}
				type="text"
				name="full_name"
				class="input-bordered input text-sm"
			/>
			{#if $errors.full_name}
				<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
					>{$errors.full_name}</span
				>
			{/if}
		</div>

		<!-- Submit button -->
		<button type="submit" class="btn mt-4 w-full normal-case">Update Details</button>
	</div>
</form>
