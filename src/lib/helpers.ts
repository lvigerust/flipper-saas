import type { RequestEvent } from '@sveltejs/kit'
import { tierPolicy } from './config'
import type { SubscriptionTier } from './schemas'

export function hasReachedMaxContacts(tier: SubscriptionTier, contactsCount: number) {
	return contactsCount >= tierPolicy['maxContacts'][tier]
}

export function getUpgradeUrl(tier: SubscriptionTier) {
	return tier === 'Free' ? '/pricing' : '/account/billing/portal'
}

export function handleLoginRedirect(event: RequestEvent) {
	const redirectTo = event.url.pathname + event.url.search

	return `/login?redirectTo=${redirectTo}`
}
