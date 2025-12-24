class LoginPage {
  elements = {
    title: () => cy.get('[data-pc-section="title"]'),
    subtitle: () => cy.get('[data-pc-section="subtitle"]'),
    emailInput: () => cy.get('[data-cy="email-input"]'),
    passwordInput: () => cy.get('[data-cy="password-input"]'),
    loginButton: () => cy.get('[data-cy="submit-button"]')
  }

  visit() {
    cy.visit('/auth/login')
  }

  verifyPageLoaded() {
    this.elements.title().contains('Iniciar Sesión').should('be.visible')
    this.elements.subtitle().contains('Por favor, ingrese sus datos').should('be.visible')
    return this
  }

  login(email, password) {
    if (!email || !password) {
      throw new Error('Email y Contraseña con requeridos')
    }
    this.elements.emailInput().type(email)
    this.elements.passwordInput().type(password)
    this.elements.loginButton().click()
  }
}

export default new LoginPage();