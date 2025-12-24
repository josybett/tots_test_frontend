import LoginPage from "../../core/auth/LoginPage";
import { users } from "../../../fixtures/users";

describe('When call login method', { tags: '@smoke' }, () => {
  const user = {
    email: users.admin.email,
    password: users.admin.password
  }

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('Should login correctly', () => {
    LoginPage.visit()
    LoginPage.verifyPageLoaded()
    LoginPage.login(user.email, user.password)
  })
})