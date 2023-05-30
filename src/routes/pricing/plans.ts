type Plan = {
	title: string
	price: number
	description: string
	cta: string
	benefits: string[]
}

const freePlan: Plan = {
	title: 'Free',
	price: 0,
	description: 'Good for anyone who is self-employed and just getting started.',
	cta: 'Get Started',
	benefits: ['Up to 5 Contacts']
}
const plusPlan: Plan = {
	title: 'Plus',
	price: 10,
	description: 'Perfect for small / medium sized businesses.',
	cta: 'Start Free Trial',
	benefits: ['Up to 25 Contacts', 'Community Support', 'Automatic Backups']
}
const proPlan: Plan = {
	title: 'Pro',
	price: 20,
	description: 'For even the biggest enterprise companies.',
	cta: 'Get Started',
	benefits: [
		'Up to 25 Contacts',
		'Community Support',
		'Automatic Backups',
		'24/7 Customer Support',
		'SSO'
	]
}

const plans: Plan[] = [freePlan, plusPlan, proPlan]

export { type Plan, plans }
