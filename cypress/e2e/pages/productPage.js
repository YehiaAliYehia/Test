class productPage {
    visit() {
      cy.visit('/products')
    }
  
    selectCategory(category) {
      cy.get('.category-list').contains(category).click()
    }
  
    selectProduct(productName) {
      cy.get('.product-list').contains(productName).click()
    }
  
    addProductToCart() {
      cy.get('button.add-to-cart').click()
    }
  }
  
