import { productPage } from '../../pages/productPage'

describe('Product Browsing', () => {
  beforeEach(() => {
    cy.fixture('products').as('products')
  })

  it('should display product details correctly', function() {
    this.products.forEach(product => {
      productPage.visit()
      productPage.selectCategory(product.category)
      productPage.selectProduct(product.name)
      cy.get('.product-detail').should('contain', product.name)
    })
  })
})
