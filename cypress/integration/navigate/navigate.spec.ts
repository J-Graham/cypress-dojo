/// <reference types="cypress" />
describe('Navigate to localhost', () => {
    it('Should navigate to localhost addess', () => {
        cy.visit('localhost:5000');
    });
});
