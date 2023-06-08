describe('Product Filtering', () => {
    it('should filter products from low to high', () => {
      cy.visit('https://www.saucedemo.com/')
      
      // Log in to the website
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      
      // Sort products from low to high
      cy.get('.product_sort_container').select('lohi')
      cy.log('filter successful')
    })
})
