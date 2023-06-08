describe('Checkout Process', () => {
    it('should successfully complete the checkout process', () => {
      // Visit the website
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with valid credentials
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Add items to the cart
      
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
  
      // Proceed to checkout
      cy.get('#checkout').click();
  
      // Fill out the checkout form
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
  
      // Complete the checkout
      cy.get('#continue').click();
  
      //finish the checkout
      cy.get('#finish').click();
  
  
      // Verify the checkout is successful
      
      //cy.get('#checkout_complete_container > h2').should('contain', 'THANK YOU FOR YOUR ORDER');
      cy.get('#back-to-products').should('exist');
    });
  });
  //#finish #checkout_complete_container > h2
  //#continue #finish #checkout_complete_container > h2 //h2[@class="complete-header"]
  