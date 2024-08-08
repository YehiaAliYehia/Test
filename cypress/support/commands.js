import { loginPage } from '../pages/loginPage'
import { productPage } from '../pages/productPage'
import { checkoutPage } from '../pages/checkoutPage'

Cypress.Commands.add('login', (username, password) => {
  loginPage.login(username, password)
})

Cypress.Commands.add('addProductToCart', (productName, category) => {
  productPage.visit()
  productPage.selectCategory(category)
  productPage.selectProduct(productName)
  productPage.addProductToCart()
})

Cypress.Commands.add('checkout', (shippingDetails, paymentMethod) => {
  checkoutPage.checkout(shippingDetails, paymentMethod)
})
