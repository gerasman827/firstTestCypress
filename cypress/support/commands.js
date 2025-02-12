// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (usuario, password) => {
    cy.get('input[name="username"]')
        .should('exist')
        .and('be.visible')
        .type(usuario)
    cy.get('input[name="password"]')
        .should('exist')
        .and('be.visible')
        .type(password)
    cy.get('button[type="submit"]')
        .should('exist')
        .and('be.visible')
        .contains('Login')
        .click()
    cy.url()
        .should('include', 'web/index.php/dashboard/index')
    cy.url()
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})