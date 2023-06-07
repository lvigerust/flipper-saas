import { getCustomerRecord } from '$lib/server/customers.js'
import { ENV } from '$lib/server/env.js'
import { stripe } from '$lib/server/stripe.js'
import { error, redirect } from '@sveltejs/kit'

export const GET = async (event) => {
	const session = await event.locals.getSession()

	if (!session) {
		throw redirect(302, '/login')
	}

	const customer = await getCustomerRecord(session.user.id)

	const portalSession = await stripe.billingPortal.sessions.create({
		customer: customer.id,
		return_url: `${ENV.PUBLIC_BASE_URL}/account/billing`
	})

	if (!portalSession.url) {
		throw error(500, "Error retrieving billing information. We're working on it!")
	}

	throw redirect(302, portalSession.url)
}
