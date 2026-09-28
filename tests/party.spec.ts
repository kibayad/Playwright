import { test, expect } from "@playwright/test";

// =========================
// Test Data
// =========================

const loginUrl = 'https://rhtestcons.rhinfos.in/login';

const username = 'test.demo@rhinfos.com';
const password = 'CocunutTree**25&&';

const siteNumberValue = '1';
const partyNameValue = 'ABC PARTY';
const mobileNumberValue = '9876543210';
const addressValue = 'No.25, ABC Street, GTS Colony, CBE';


// =========================
// Test Case
// =========================

test('Add new Party successfully', async ({ page }) => {

  // ---------------------------------
  // 1. Open Login Page
  // ---------------------------------

  await page.goto(loginUrl);

  await expect(page).toHaveURL(/\/login/);


  // ---------------------------------
  // 2. Enter Username
  // ---------------------------------

  const usernameField = page.getByPlaceholder('Username');

  await expect(usernameField).toBeVisible();

  await usernameField.fill(username);


  // ---------------------------------
  // 3. Enter Password
  // ---------------------------------

  const passwordField = page.getByPlaceholder('Password');

  await expect(passwordField).toBeVisible();

  await passwordField.fill(password);


  // ---------------------------------
  // 4. Click Sign In
  // ---------------------------------

  await page.getByRole('button', { name: 'Sign In' }).click();


  // ---------------------------------
  // 5. Verify Login Success
  // ---------------------------------

  // Wait for the login redirect
  await page.waitForURL(url => !url.pathname.endsWith('/login'));

  console.log('After login URL:', page.url());


  // ---------------------------------
  // 6. Click Party Menu
  // ---------------------------------

  const partyMenu = page
    .locator('a.nav-link[href="#"]')
    .filter({ hasText: 'Party' });

  await expect(partyMenu).toBeVisible();

  await partyMenu.click();


  // ---------------------------------
  // 7. Click Add Party
  // ---------------------------------

  const addPartyLink = page.getByRole('link', {
    name: 'Add Party'
  });

  await expect(addPartyLink).toBeVisible();

  await addPartyLink.click();


  // ---------------------------------
  // 8. Verify Add Party Page
  // ---------------------------------

  await expect(page).toHaveURL(/\/Party\/Party_add$/);


  // ---------------------------------
  // 9. Date
  // ---------------------------------

  const dateField = page.locator('input[type="date"]');

  await expect(dateField).toBeVisible();

  const dateValue = await dateField.inputValue();

  expect(dateValue).not.toBe('');


  // ---------------------------------
  // 10. Site Number
  // ---------------------------------

  const siteNumber = page.getByPlaceholder('Ex : Site Number');

  await expect(siteNumber).toBeVisible();

  await siteNumber.fill(siteNumberValue);


  // ---------------------------------
  // 11. Party Name
  // ---------------------------------

  const partyName = page.getByPlaceholder('EX : PARTY NAME');

  await expect(partyName).toBeVisible();

  await partyName.fill(partyNameValue);


  // ---------------------------------
  // 12. Mobile Number
  // ---------------------------------

  const mobileNumber = page.getByPlaceholder('EX : 98765XXXXX');

  await expect(mobileNumber).toBeVisible();

  await mobileNumber.fill(mobileNumberValue);


  // ---------------------------------
  // 13. Address
  // ---------------------------------

  const address = page.getByPlaceholder('EX : D.NO-XX');

  await expect(address).toBeVisible();

  await address.fill(addressValue);


  // ---------------------------------
  // 14. Save
  // ---------------------------------

  await page.getByRole('button', {
    name: 'Save'
  }).click();


  /// ---------------------------------
// 15. Verify Party List URL
// ---------------------------------

await expect(page).toHaveURL(/\/Party$/);


// ---------------------------------
// 16. Verify Party Information
// ---------------------------------

await expect(
  page.getByRole('heading', { name: 'Party Information' })
).toBeVisible();


// ---------------------------------
// 17. Verify Created Party
// ---------------------------------

await expect(
  page.getByText(partyNameValue, { exact: true })
).toBeVisible();
  // ---------------------------------
  // 17. Verify Created Party
  // ---------------------------------

  await expect(
    page.getByText(partyNameValue, {
      exact: true
    })
  ).toBeVisible();

});