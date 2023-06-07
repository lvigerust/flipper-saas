import { createCheckoutSession } from '$lib/server/subsriptions.js'
import { error, redirect } from '@sveltejs/kit'

export const GET = async (event) => {
	const session = await event.locals.getSession()

	if (!session) {
		throw redirect(302, '/login')
	}

	const price_id = event.url.searchParams.get('id')

	if (!price_id) {
		throw error(400, 'Invalid request')
	}

	let checkoutUrl: string

	try {
		checkoutUrl = await createCheckoutSession(session.user.id, price_id)
	} catch (e) {
		console.log(e)
		throw error(500, 'An error occured while creating the checkout session')
	}

	throw redirect(302, checkoutUrl)
}
