<script lang="ts">
	import type { ProfileSchema } from '$lib/schemas'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let data: Validation<ProfileSchema>

	const { form, errors, enhance } = superForm(data)
</script>

<form method="POST" action="?/updateProfile" use:enhance class="mx-auto max-w-md space-y-4">
	<!-- Avatar
	<div class="flex items-center gap-4">
		<div class="placeholder avatar">
			<div class="w-16 rounded-full bg-neutral-focus text-neutral-content">
				<span class="text-lg">LV</span>
			</div>
		</div>

		<div>
			<h3 class="font-semibold">Avatar</h3>
			<p>Min 200*200px .PNG or .JPEG</p>
		</div>
	</div> -->

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
