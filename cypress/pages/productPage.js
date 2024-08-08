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

    get_add_to_cart_confirmation(){
      return cy.get('.modal-title.w-100').contains('Added!');
    }

    Add_to_cart_click() {
       cy.get('button.btn.btn-default.cart').click();  
      }

      View_Cart_click() {
        cy.get('u').contains('View Cart').click();  
       }

       Continue_shopping_click() {
        cy.get('.btn.btn-success.close-modal.btn-block').click();  
       }


  clickOn_Viewproduct(productPosition) {
    cy.get(`a[href="${productPosition}"]`).click();  
    }
}

export const productPage = new ProductPage();
