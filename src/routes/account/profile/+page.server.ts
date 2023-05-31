import { emailSchema, profileSchema } from '$lib/schemas.js'
import { error, fail } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'

export const actions = {
	updateProfile: async (event) => {
		const session = await event.locals.getSession()

		if (!session) {
			throw error(401, 'Unauthorized!')
		}

		const profileForm = await superValidate(event, profileSchema, {
			id: 'profile'
		})

		if (!profileForm.valid) {
			return fail(400, {
				profileForm
			})
		}

		const { error: profileError } = await event.locals.supabase
			.from('profiles')
			.update(profileForm.data)
			.eq('id', session.user.id)

		if (profileError) {
			return setError(profileForm, null, 'Error updating your profile.')
		}

		return {
			profileForm
		}
	},

	updateEmail: async (event) => {
		const session = await event.locals.getSession()

		if (!session) {
			throw error(401, 'Unauthorized!')
		}

		const emailForm = await superValidate(event, emailSchema, {
			id: 'email'
		})

		if (!emailForm.valid) {
			return fail(400, {
				emailForm
			})
		}

		const { error: emailError } = await event.locals.supabase.auth.updateUser({
			email: emailForm.data.email
		})

		if (emailError) {
			return setError(emailForm, 'email', 'Error updating your email.')
		}

		return {
			emailForm
		}
	}
}
