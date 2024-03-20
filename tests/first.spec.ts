import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';
import { AccountPage } from '../pages/accoount.page';

test('scenario 1', async ({ page }) => {
  const email = 'bryan5@gmail.com'
  const pass = 'bryan123'

  const base = new BasePage(page)
  const account = new AccountPage(page)
  await base.goToMainPage()
  await base.createNewAccount(email, pass)

  await account.gotoAccountsPage()
  await account.verifyLogin(email)

});

test('scenario 2', async ({ page }) => {
  const email = 'bryansito1@gmail.com'
  const newEmail = 'bryan3@gmail.com'
  const pass = 'bryan123'
  const base = new BasePage(page)
  const account = new AccountPage(page)
  await base.goToMainPage()
  await base.login(email, pass)
  await account.gotoAccountsPage()
  await account.verifyLogin(email)
  await account.editEmail(newEmail)
  await base.goToMainPage()
  await base.logOut()
  await base.login(newEmail, pass)
  await account.gotoAccountsPage()
  await account.verifyLogin(email)

});


