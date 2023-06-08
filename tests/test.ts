import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
	await page.goto('/')
	await expect(
		page.getByRole('heading', { name: 'Flipper. A flip tracker to log your profits.' })
	).toBeVisible()
})
