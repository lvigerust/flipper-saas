<script lang="ts">
	import type { PasswordSchema } from '$lib/schemas'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let data: Validation<PasswordSchema>

	const { form, errors, enhance } = superForm(data, {
		resetForm: true
	})
</script>

<form method="POST" action="?/updatePassword" use:enhance class="mx-auto max-w-md space-y-4">
	<div class="flex flex-col gap-4">
		<div class="form-control w-full">
			<label class="label" for="password">
				<span class="label-text font-medium">New Password</span>
			</label>
			<input
				bind:value={$form.password}
				type="password"
				name="password"
				class="input-bordered input text-sm"
			/>
			{#if $errors.password}
				<span class="mt-2 block text-sm font-medium leading-6 text-red-500">{$errors.password}</span
				>
			{/if}
		</div>

		<div class="form-control w-full">
			<label class="label" for="passwordConfirm">
				<span class="label-text font-medium">Confirm New Password</span>
			</label>
			<input
				bind:value={$form.passwordConfirm}
				type="password"
				name="passwordConfirm"
				class="input-bordered input text-sm"
			/>
			{#if $errors.passwordConfirm}
				<span class="mt-2 block text-sm font-medium leading-6 text-red-500"
					>{$errors.passwordConfirm}</span
				>
			{/if}
		</div>

		<button type="submit" class="btn mt-4 w-full normal-case">Update Password</button>
	</div>
</form>
