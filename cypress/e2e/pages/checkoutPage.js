class CheckoutPage {
    visit() {
      cy.visit('/checkout')
    }
  
    fillShippingDetails(address) {
      cy.get('#shipping-address').type(address)
    }
  
    selectPaymentMethod(method) {
      cy.get('#payment-method').select(method)
    }
  
    completePurchase() {
      cy.get('button.complete-purchase').click()
    }
  
    checkout(shippingDetails, paymentMethod) {
      this.visit()
      this.fillShippingDetails(shippingDetails.address)
      this.selectPaymentMethod(paymentMethod)
      this.completePurchase()
    }
  }
  
  export const checkoutPage = new CheckoutPage()
  