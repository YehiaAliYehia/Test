describe('Cart Management', () => {
    beforeEach(() => {
      cy.fixture('products').as('products')
    })
  
    it('should add product to cart successfully', function() {
      cy.addProductToCart(this.products[0].name, this.products[0].category)
      cy.get('.cart').should('contain', this.products[0].name)
    })
  })
  