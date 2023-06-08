import {
	clearSupabaseData,
	createContact,
	createUser,
	startSupabase,
	syncStripeProducts
} from './utils'

const testUsers = [
	{
		full_name: 'Test User 1',
		email: 't1@t.com',
		password: 'passord'
	},
	{
		full_name: 'Test User 2',
		email: 't2@t.com',
		password: 'passord'
	},
	{
		full_name: 'Test User 3',
		email: 't3@t.com',
		password: 'passord'
	},
	{
		full_name: 'Ludvig Vigerust',
		email: 'l.vigerust@gmail.com',
		password: 'passord'
	}
]

async function seed() {
	try {
		await startSupabase()
		await clearSupabaseData()
		await syncStripeProducts()

		for (const testUser of testUsers) {
			const user = await createUser(testUser)

			for (let i = 0; i < 5; i++) {
				await createContact(user.id)
			}
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
	process.exit()
}

seed()
