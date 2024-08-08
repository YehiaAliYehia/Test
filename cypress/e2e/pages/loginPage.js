class LoginPage {
    visit() {
      cy.visit('/login')
    }
  
    fillUsername(username) {
      cy.get('#username').type(username)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    submit() {
      cy.get('button[type="submit"]').click()
    }
  
    login(username, password) {
      this.visit()
      this.fillUsername(username)
      this.fillPassword(password)
      this.submit()
    }
  }
  
  export const loginPage = new LoginPage()