describe('Logout', () => {
    it('should logout from the website', () => {
      cy.visit('https://www.saucedemo.com/')
  
      // Log in to the website
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      // Verify that the login is successful
      cy.url().should('include', '/inventory.html')
  
      // Click on the hamburger menu button
      cy.get('#react-burger-menu-btn').click()
  
      // Click on the Logout link
      cy.get('#logout_sidebar_link').click()
      cy.log("user logged out");
  
      
    })
  })
  
