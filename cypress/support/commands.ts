declare global {
  namespace Cypress {
    // tslint:disable-next-line:interface-name
    interface Chainable<Subject> {
      formControl: typeof formControl;
    }
  }
}

export function formControl(propertyName: string): Cypress.Chainable<JQuery> {
  return cy.get(`input[formcontrolname="${propertyName}"]`);
}

Cypress.Commands.add('formControl', formControl);
