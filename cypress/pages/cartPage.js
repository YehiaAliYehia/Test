
class CartPage {
    visit() {
      cy.visit('/view_cart'); // Adjust the URL to your products page
    }

 Remove_product_from_the_cart_click() {

    cy.get('td.cart_delete').each(($el) => {
        cy.wrap($el).click();
      });
      
    // function Retry_deleting_products (attempts = 0) {
    //     if (attempts > 6) throw 'Failed to delete product'
    
    //     return cy.get('tr[id="product-1"] a[class="cart_quantity_delete"]').click()
    //       .then(() => {
    //         const option = Cypress.$('tr[id="product-1"]a[class="cart_quantity_delete"]:visible') 
    //         if (!option.length) {
    //             Retry_deleting_products(++attempts)  
    //         } 
    //       })
    //   } 
   
    
    }

   EmptycartText() {
    return cy.get('b').contains('Cart is empty!');  
   }


 

}

export const cartPage = new CartPage();
