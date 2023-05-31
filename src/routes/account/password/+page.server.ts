import { passwordSchema } from '$lib/schemas.js'
import { error, fail } from '@sveltejs/kit'
import { setError, superValidate } from 'sveltekit-superforms/server'

export const actions = {
	updatePassword: async (event) => {
		const session = await event.locals.getSession()

		if (!session) {
			throw error(401, 'Unauthorized!')
		}

		const passwordForm = await superValidate(event, passwordSchema, {
			id: 'password'
		})

		if (!passwordForm.valid) {
			return fail(400, {
				passwordForm
			})
		}

		if (passwordForm.data.password !== passwordForm.data.passwordConfirm) {
			return setError(passwordForm, 'passwordConfirm', 'Passwords must match.')
		}

		const { error: passwordError } = await event.locals.supabase.auth.updateUser({
			password: passwordForm.data.password
		})

		if (passwordError) {
			return setError(passwordForm, null, 'Error updating your password.')
		}

		return {
			passwordForm
		}
	}
}
