import { expect } from "@playwright/test"
export class AccountPage {
    constructor(page){
        this.page = page
        
        this.editBtn = '*[@id="__next"]/div[2]/div/div/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[5]/td[3]/div/button'
        this.emailInput ='//*[@id=":r0:"]'
        this.confirmEmailInput ='//*[@id=":r1:"]'
        this.passInput ='//*[@id="root"]/div/main/div/div/div/div/div/form/div[2]/span[3]/div/div/input'
        this.confirmBtn= '//*[@id="root"]/div/main/div/div/div/div/div/form/div[2]/div/div[1]/span/button'
        

    }
    async gotoAccountsPage(){
        await this.page.goto('https://www.shutterstock.com/')

    }
    async editEmail(newEmail, password){
        await this.page.locator(this.editBtn).click()
        await this.page.waitForTimeout(3000)

        const loginFrame = await this.page.frameLocator(this.loginFrameId)
        await loginFrame.locator(this.createBtn).click()

        await loginFrame.locator(this.emailInput).fill(email)
        await loginFrame.locator(this.passInput).fill(password)
        await loginFrame.locator(this.confirmBtn).click()

    }
    async login(email, password){
        await this.page.locator(this.loginBtn).click()
        await this.page.locator('//*[@id=":r0:"]').fill(email)
        await this.page.locator('//*[@id="root"]/div/div/main/div/div/div/div/div/form/div[2]/div[1]/span[2]/div/div/input').fill(pass)
        await this.page.locator('//*[@id="root"]/div/div/main/div/div/div/div/div/form/div[2]/div[2]/div[1]/span/button').click()
        

    }
    async verifyLogin(email){
        await this.page.goto('https://www.shutterstock.com/account/profile')
        await this.page.waitForTimeout(3000)
        await expect(this.page.locator('//*[@id="__next"]/div[2]/div/div/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[5]/td[2]')).toHaveText(email)


    }
}