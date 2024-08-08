describe('User Authentication', () => {
  beforeEach(() => {
      cy.visit('/login');
  });
  const credentials = require('../../fixtures/credentials.json');

  it('should successfully login with valid credentials', () => {

      cy.login(credentials.validUser.username, credentials.validUser.password);

      cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
  });


  it('should not login with invalid password', () => {

    cy.login(credentials.validUser.username, credentials.invalidUser.password);

    cy.contains('Your email or password is incorrect!').should('be.visible')
});


it('should not login with invalid mail and password', () => {

  cy.login(credentials.invalidUser.username, credentials.invalidUser.password);

  cy.contains('Your email or password is incorrect!').should('be.visible')
});


it('should not login with invalid mail and valid password', () => {

  cy.login(credentials.invalidUser.username, credentials.validUser.password);

  cy.contains('Your email or password is incorrect!').should('be.visible')
});
});
