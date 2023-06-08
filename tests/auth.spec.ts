import { test } from '@playwright/test'
import { loginUser, logoutUser, registerUser } from './utils'

const testUser = {
	full_name: 'Test User',
	email: 't@User.com',
	password: 'password'
}

test('user can register for an account', async ({ page }) => {
	await registerUser(page, testUser)
})

test('user can login to their account', async ({ page }) => {
	await loginUser(page, testUser)
})

test('user can logout of an account', async ({ page }) => {
	await logoutUser(page, testUser)
})