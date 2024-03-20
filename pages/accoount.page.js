import { expect } from "@playwright/test"
export class AccountPage {
    constructor(page){
        this.page = page
        
        this.editBtn = '[data-automation="UserDetail_EditEmail_Button"]'
        this.emailInput ='[data-test-id="user-email-new-email-input"]'
        this.confirmEmailInput ='[autocomplete="current_confirm_email"]'
        this.passInput ='[data-test-id="user-email-password-input"]'
        this.confirmBtn= '[data-test-id="change-email-submit"]'
        this.profileBtn = '[href="/account/profile"]'
        this.emailVerification = '[data-automation="UserDetail_Email_Text"]'

    }
    async gotoAccountsPage(){
        await this.page.goto('https://www.shutterstock.com/account/profile')

    }
    async editEmail(newEmail, password){
        await this.page.locator(this.profileBtn).click()

        await this.page.locator(this.editBtn).click()
        await this.page.waitForTimeout(3000)

        const loginFrame = await this.page.frameLocator(this.loginFrameId)
        await loginFrame.locator(this.createBtn).click()

        await loginFrame.locator(this.emailInput).fill(newEmail)
        await loginFrame.locator(this.passInput).fill(password)
        await loginFrame.locator(this.confirmBtn).click()

    }
    
    async verifyLogin(email){
        await this.page.locator(this.profileBtn).click()
        await expect(this.page.locator(this.emailVerification)).toHaveText(email)


    }
}