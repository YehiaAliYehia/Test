// productPage.js
class ProductPage {
  visit() {
    cy.visit('/products'); // Adjust the URL to your products page
  }

  selectCategory(category) {
    cy.get(`a[href="#${category}"]`).click();    }

    selectSubcategory(subcategory) {
      cy.contains(subcategory).click(); // Adjust if necessary
    }
  selectProduct(productName) {
    cy.contains(productName).click(); // Adjust if necessary
  }
  getPrice() {
    return cy.get('div[class="product-information"] span span');
    }
  clickOn_Addtocart(productPosition) {
    cy.get(`a[href="${productPosition}"]`).click();    }
}

export const productPage = new ProductPage();
