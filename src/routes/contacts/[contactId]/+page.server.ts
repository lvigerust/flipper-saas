import { createContactSchema } from '$lib/schemas.js'
import { error, fail, redirect } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'

export const load = async (event) => {
	const session = event.locals.getSession()

	if (!session) {
		throw redirect(302, '/login')
	}

	async function getContact(contact_id: string) {
		const { error: contactError, data: contact } = await event.locals.supabase
			.from('contacts')
			.select('*')
			.eq('id', contact_id)
			.limit(1)
			.maybeSingle()

		if (contactError) {
			throw error(500, 'Error fetching contact. Please try again later.')
		}

		if (!contact) {
			throw error(404, 'Contact not found.')
		}

		return contact
	}

	return {
		updateContactForm: superValidate(await getContact(event.params.contactId), createContactSchema)
	}
}

export const actions = {
	updateContact: async (event) => {
		const session = await event.locals.getSession()

		if (!session) {
			throw error(401, 'Unauthorized!')
		}

		const updateContactForm = await superValidate(event, createContactSchema)

		if (!updateContactForm.valid) {
			return fail(400, {
				updateContactForm
			})
		}

		const { error: updateContactError } = await event.locals.supabase
			.from('contacts')
			.update(updateContactForm.data)
			.eq('id', event.params.contactId)

		if (updateContactError) {
			return setError(updateContactForm, null, 'Error updating contact, please try again later.')
		}

		return {
			updateContactForm
		}
	}
}
