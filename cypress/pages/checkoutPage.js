class CheckoutPage {
    visit() {
      cy.visit('/payment')
    }
  
    fillcardOwner() {
      cy.get('input[data-qa="name-on-card"]').type('Test')
    }
  
    fillCardNumber() {
      cy.get('input[data-qa="card-number"]').type('42424242424242')
    }
  
    fillCardCVV() {
      cy.get('input[data-qa="cvc"]').type('100')
    }

    fillExpiry() {
      cy.get('input[data-qa="expiry-month"]').type('05')
      cy.get('input[data-qa="expiry-year"]').type('2026')

    }

    completePurchase() {
      cy.get('button[data-qa="pay-button"]').click()
    }
  
    checkoutPayment() {
      this.visit()
      this.fillcardOwner()
      this.fillCardNumber()
      this.fillCardCVV()
      this.fillExpiry()
      this.completePurchase()
    }

    Fill_checkout_form() {
      cy.get('textarea[class="form-control"]').type('Test Test');
     }

     placeOrder() {
      cy.get('a.btn.btn-default.check_out').click()
    }

    get_order_success_message(){
      return cy.get('b').contains('Order Placed!');
    }
  }
  
  export const checkoutPage = new CheckoutPage()
  