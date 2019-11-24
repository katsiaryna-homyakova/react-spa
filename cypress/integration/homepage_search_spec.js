describe('Testing search', () => {
    it('I can search for content', () => {
      cy.visit('localhost:8080');
      cy.get(".search input[type='text']").type('Leo Panthera');
      cy.get("#submitSearch").click();
      cy.get('.film-card')
        .its('length')
        .should('be.eq', 5)

    });

   
  });