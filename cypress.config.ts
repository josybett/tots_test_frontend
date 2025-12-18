const config = {
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    supportFile: 'cypress/support/e2e.ts'
  }
};

export default config;
