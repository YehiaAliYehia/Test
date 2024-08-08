import { productPage } from '../../pages/productPage';

describe('Product Browsing', () => {
  const credentials = require('../../fixtures/credentials.json');
  const products = require('../../fixtures/products.json');

  beforeEach(() => {
    cy.visit('/login');
    cy.login(credentials.validUser.username, credentials.validUser.password);
  });

  it('should display product details correctly', function() {
    // Load products fixture
    cy.fixture('products').then((products) => {
      // Ensure the fixture is loaded before proceeding
      expect(products).to.be.an('array').and.not.empty;

      console.log(productPage);  // Debug log to check productPage

      cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
      products.forEach(product => {
        productPage.visit();
        productPage.selectCategory(product.category);  // Use product.category
        productPage.selectSubcategory(product.subcategory);
        productPage.clickOn_Addtocart(product.productPosition)
       // productPage.selectProduct(product.name);
        cy.get('.product-information').should('be.visible');
        productPage.getPrice().should('contain', `Rs. ${product.price}`);
      });
    });
  });
});
