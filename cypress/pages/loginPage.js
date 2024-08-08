class LoginPage {
    visit() {
      cy.visit('/login')
    }
  
    fillUsername(username) {
      cy.get('input[data-qa="login-email"]').type(username)
    }
  
    fillPassword(password) {
      cy.get('input[data-qa="login-password"]').type(password)
    }
  
    submit() {
      cy.get('button[data-qa="login-button"]').click()
    }
  
    login(username, password) {
      this.visit()
      this.fillUsername(username)
      this.fillPassword(password)
      this.submit()
    }
  }
  
  export const loginPage = new LoginPage()