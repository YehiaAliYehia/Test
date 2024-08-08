import { cartPage } from '../pages/cartPage'

describe('Cart Management', () => {
  beforeEach(() => {
    cy.fixture('products').as('products')
  })

  it('should remove product from cart successfully', function() {
    cartPage.visit()
    cartPage.removeProduct(this.products[0].name)
    cy.get('.cart').should('not.contain', this.products[0].name)
  })
})
