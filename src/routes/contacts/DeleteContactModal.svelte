<script lang="ts">
	import type { DeleteContactSchema } from '$lib/schemas'
	import toast from 'svelte-french-toast'
	import { superForm } from 'sveltekit-superforms/client'
	import type { Validation } from 'sveltekit-superforms/index'

	export let deleteContactModal: HTMLDialogElement
	export let deleteContactForm: Validation<DeleteContactSchema>

	export let contactId: string

	const { enhance } = superForm(deleteContactForm, {
		onResult: ({ result }) => {
			switch (result.type) {
				case 'success':
					deleteContactModal.close()
					toast.success('Successfully deleted contact!')
					break
				case 'error':
					toast.error('Error deleting your contact.')
				case 'failure':
					toast.error('Error deleting your contact.')
				default:
					return
			}
		}
	})
</script>

<dialog bind:this={deleteContactModal} class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="mb-5">Are you sure you want to delete this contact?</h3>
		<div class="flex justify-center gap-12">
			<form method="POST" action="?/deleteContact&id={contactId}" use:enhance>
				<button type="submit" class="btn-error btn text-black">Yes, I'm sure</button>
			</form>
			<button class="btn">No, cancel</button>
		</div>
	</form>
</dialog>
