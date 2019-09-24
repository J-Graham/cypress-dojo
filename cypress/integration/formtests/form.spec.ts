/// <reference types="cypress" />
describe('Form Validity', () => {
    beforeEach(() => {
        cy.visit('localhost:5000');
    });
    it('should return errors when fields are not supplied on form submit', () => {
        cy.get('.btn-primary').click();

        cy.get('.invalid-feedback:visible').should('have.length.greaterThan', 0);
    });
    it('should return no errors when fields are supplied on form submit', () => {
        cy.get('#userName').type('john');
        cy.get('#city').type('lumberton');
        cy.get('#state').type('New Jersey');
        cy.get('#zip').type('08080');
        cy.get('#terms').check();
        cy.get('.btn-primary').click();

        cy.get('.invalid-feedback:visible').should('have.length', 0);
    });
});
