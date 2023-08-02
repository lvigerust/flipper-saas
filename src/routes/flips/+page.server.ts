import { handleLoginRedirect } from '$lib/helpers'
import { error, redirect } from '@sveltejs/kit'

export const load = async (event) => {
	const session = await event.locals.getSession()

	if (!session) {
		throw redirect(302, handleLoginRedirect(event))
	}

	async function getItems() {
		const { data: items, error: itemsError } = await event.locals.supabase
			.from('items')
			.select('*')
			.limit(10)

		if (itemsError) {
			throw error(500, 'Error fetching contacts, please try again later.')
		}

		return items
	}

	return {
		items: getItems()
	}
}
