describe('Cancel Checkout', () => {
    it('should cancel the checkout process', () => {
      cy.visit('https://www.saucedemo.com/')
  
      // Log in to the website
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      // Add items to the cart
      
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      // Go to the cart
      cy.get('.shopping_cart_link').click()
  
      // Click on the Checkout button
      cy.get('#checkout').click()
  
      // Fill in the checkout form
      cy.get('#first-name').type('John')
      cy.get('#last-name').type('Doe')
      cy.get('#postal-code').type('12345')
  
      // Click on the Cancel button
      cy.get('#cancel').click()
  
      // Verify that the cart is not empty
      cy.get('.shopping_cart_badge').should('exist')
      cy.log('canceled')
    })
  })
  
