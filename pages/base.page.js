export class BasePage {
    constructor(page){
        this.page = page
        this.loginBtn = '[data-automation="loginButton"]'
        this.loginFrameId = '#login-iframe'
        this.emailInput = '[data-test-id="email-input"]'
        this.passInput = '[data-test-id="password-input"]'
        this.createBtn = '[data-test-id="create-user-btn"]'
        this.confirmBtn = '[data-test-id="create-user-form-submit-button"]'
        this.accountIcon = '[aria-label="User profile"]'
        this.logoutBtn = '[data-automation="ProfileDrawer_LogoutButton"]'
        this.sendLogin = '[data-test-id="login-form-submit-button"]'
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
        await this.page.waitForTimeout(2000)

        await loginFrame.locator(this.passInput).fill(password)
        await this.page.waitForTimeout(2500)

        await loginFrame.locator(this.confirmBtn).click()
        await this.page.waitForTimeout(5000)

    }
    async login(email, pass){
        await this.page.locator(this.loginBtn).click()
        const loginFrame = await this.page.frameLocator(this.loginFrameId)
        await this.page.waitForTimeout(3000)
        await this.loginFrame.locator(this.emailInput).fill(email)
        await this.page.waitForTimeout(1000)
        await this.loginFrame.locator(this.passInput).fill(pass)
        await this.page.waitForTimeout(3000)
        await this.loginFrame.locator(this.sendLogin).click()
    }
    async logOut(){
        await this.page.locator(this.accountIcon).click()
        await this.page.locator(this.logoutBtn).click()
    }
}