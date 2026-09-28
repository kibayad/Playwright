import { test, expect } from '@playwright/test';
const loginUrl = 'https://rhtestcons.rhinfos.in/login'
// 1. Valid Username and Password
test('Verify login page', async ({ page }) => {

  // Open login page
  await page.goto(loginUrl);

  // Verify Sign in heading
  /*await expect(
    page.getByRole('heading', { name: 'Sign in' })
  ).toBeVisible(); */

  // Verify username/email field
  await page.getByPlaceholder('Username')
  .fill('test.demo@rhinfos.com')

  // Verify password field
  await page.getByPlaceholder('Password').fill('CocunutTree**25&&')

  // Verify Sign in button
  await page.getByRole('button', { name: 'Sign in' })
.click()

// Verify Dashboard is displayed
await expect(
  page.getByRole('heading', { name: 'Dashboard' })
).toBeVisible();

})
// 2. Invalid username + valid password
test('Login with invalid username', async ({ page }) => {

  await page.goto('https://rhtestcons.rhinfos.in/login');

  await page
    .getByPlaceholder('Username')
    .fill('wronguser@gmail.com');

  await page
    .getByPlaceholder('Password')
    .fill('CocunutTree**25&&');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();

  // Verify login failed
  await expect(
    page.getByText('Invalid email or Password')
  ).toBeVisible();
});

//3. Invalid password + valid username
test('Login with invalid password', async ({ page }) => {

  await page.goto(loginUrl);

  await page
    .getByPlaceholder('Username')
    .fill('test.demo@rhinfos.com');

  await page
    .getByPlaceholder('Password')
    .fill('WrongPassword123');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();

  // Verify login failed
  await expect(
    page.getByText('Invalid email or Password')
  ).toBeVisible();
});

//4. Empty username and password
/*test('Login with empty username and password', async ({ page }) => {
  await page.goto(loginUrl);

  // Create locators
  const username = page.getByPlaceholder('Username');
  const password = page.getByPlaceholder('Password');

  // Don't enter anything
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Verify username is invalid/required
  const usernameIsValid = await username.evaluate(
    (element: HTMLInputElement) => element.checkValidity()
  );
  
  // Verify password is invalid/required
  const passwordIsValid = await password.evaluate(
    (element: HTMLInputElement) => element.checkValidity()
);
});*/

  // 5. Empty username + password entered
  test('Login with empty username', async ({ page }) => {

  await page.goto(loginUrl);

  const username = page.getByPlaceholder('Username');

  await page
    .getByPlaceholder('Password')
    .fill('CocunutTree**25&&');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();

  const validationMessage = await username.evaluate(
    (element: HTMLInputElement) => element.validationMessage
  );

  console.log('Validation message:', validationMessage);

  expect(validationMessage).toBeTruthy();
});
// 6. Entered username + password empty
test('Login with empty password', async ({ page }) => {

  await page.goto(loginUrl);

  await page
    .getByPlaceholder('Username')
    .fill('test.demo@rhinfos.com');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();

  // Verify password validation
 /* const Password = page.getByPlaceholder('Password');
  const validationMessage = await Password.evaluate(
    (element: HTMLInputElement) => element.validationMessage
  );

  console.log('Validation message:', validationMessage);

  await expect(
    page.getByText("Email and Password is required and can't be empty.")
  ).toBeVisible();*/
  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).not.toBeVisible();
});

//7. Invalid Email Format
test('Login with invalid email format', async ({ page }) => {

  await page.goto(loginUrl);

  await page
    .getByPlaceholder('Username')
    .fill('test.demo');

  await page
    .getByPlaceholder('Password')
    .fill('CocunutTree**25&&');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();

  // Verify validation
  await expect(
    page.getByText('Invalid email or Password')
  ).toBeVisible();
});

//8. Wrong Username + Wrong Password
test('Login with invalid username and password', async ({ page }) => {

  await page.goto(loginUrl);

  await page
    .getByPlaceholder('Username')
    .fill('wronguser@gmail.com');

  await page
    .getByPlaceholder('Password')
    .fill('WrongPassword123');

  await page
    .getByRole('button', { name: 'Sign in' })
    .click();
  // Verify login failed
  await expect(
    page.getByText('Invalid email or Password', { exact: false })
).toBeVisible();
});
