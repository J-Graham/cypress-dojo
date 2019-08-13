/// <reference types="cypress" />
describe('index page tests', () => {
    beforeEach(() => {
        cy.visit('localhost:5000');
    });

    describe('Form Tests', () => {
        it('Should validate the form on submit and fail', () => {
            cy.get('.btn-primary').click();
            cy.get('.invalid-feedback').should('have.length', 5);
            cy.get('.valid-feedback').should('have.length', 2);
        });

        it('Should validate the form on submit', () => {
            cy.get('.btn-primary').click();
            cy.get('#userName').type('jgraham');
            cy.get('#city').type('Lumberton');
            cy.get('#state').type('New Jersey');
            cy.get('#zip').type('08048');
            cy.get('#terms').check();
            cy.get('.btn-primary').click();
            cy.get('#firstName').should('have.value', 'John');
            cy.get('#lastName').should('have.value', 'Graham');
        });
    });

    describe('dropdown tests', () => {
        beforeEach(() => {
            cy.get('.btn-secondary').click();
        });

        it('should display hello element when 1 is selected', () => {
            cy.get('#showElements').select('1');
            cy.get('#number1').should('be.visible');
        });

        it('should clear the value when clicking reset', () => {
            cy.get('#showElements')
                .select('1')
                .should('have.value', '1');
            cy.get('#number1').should('be.visible');
            cy.get('.btn-secondary').click();
            cy.get('#showElements').should('have.value', '0');
            cy.get('#number1').should('not.be.visible');
        });
    });
});
