import { checkoutPage } from '../../pages/checkoutPage'

describe('Checkout Process', () => {
  const shippingDetails = {
    address: '123 Cypress Lane'
  }

  it('should complete the purchase successfully', () => {
    cy.visit('/cart')
    cy.addProductToCart('Product 1', 'Category 1') // Ensure there's a product in the cart
    cy.get('.cart').should('contain', 'Product 1')
    
    cy.checkout(shippingDetails, 'Credit Card')
    cy.get('.receipt').should('contain', 'Order Completed')
  })
})
