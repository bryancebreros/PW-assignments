import { expect } from "@playwright/test"
export class BasePage {
    constructor(page){
        this.page = page
        
        this.loginBtn = '//*[@id="__next"]/div[3]/header/div/div[3]/div[3]/a'
        this.loginFrameId = '#login-iframe'
        this.emailInput = '//*[@id=":r1:"]'
        this.passInput = '//*[@id="root"]/div/main/div/div/div/div/div/form/div[2]/div[1]/span[2]/div/div/input'
        this.createBtn = '//*[@id="root"]/div/div/main/div/div/div/div/div/form/div[2]/div[4]/span/a'
        this.confirmBtn = '//*[@id="root"]/div/main/div/div/div/div/div/form/div[2]/div[2]/div[1]/span/button'
        this.accountIcon = '//*[@id="__next"]/div[3]/header/div/div[3]/div[3]/button/div/svg'
        this.logoutBtn = '/html/body/div[9]/div[3]/div/div/ul[2]/a[3]'
    }
    async goToMainPage(){
        await this.page.goto('https://www.shutterstock.com/')

    }
    async createNewAccount(email, password){
        await this.page.locator(this.loginBtn).click()
        await this.page.waitForTimeout(3000)

        const loginFrame = await this.page.frameLocator(this.loginFrameId)
        await loginFrame.locator(this.createBtn).click()

        await loginFrame.locator(this.emailInput).fill(email)
        await loginFrame.locator(this.passInput).fill(password)
        await loginFrame.locator(this.confirmBtn).click()

    }
    async login(email, pass){
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
    async logOut(){
        await this.page.locator(this.accountIcon).click()
        await this.page.locator(this.logoutBtn).click()
    }
}