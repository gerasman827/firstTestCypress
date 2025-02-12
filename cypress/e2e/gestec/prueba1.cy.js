describe('Pruebas automatizadas usando Cypress', () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it('Login', () => {
        cy.Login('Admin', 'admin123');
    });


    it('Crear usuario', () => {
        cy.Login('Admin', 'admin123')
        cy.get('.oxd-main-menu > li')
            .contains('Admin')
            .click()
        cy.url()
            .should('include', 'admin/viewSystemUsers')
        cy.get('button[type=button]')
            .contains('Add')
            .click()
        cy.get('.oxd-select-text').eq(0).click();
        cy.get('.oxd-select-dropdown div')
            .contains('ESS')
            .click()
        cy.get('input[placeholder="Type for hints..."]')
            .type('na')
            .wait(3000)
        cy.get('.oxd-autocomplete-dropdown > div').first().click()
        cy.get('.oxd-select-text').eq(1).click()
        cy.wait(1000)
        cy.get('.oxd-select-dropdown div')
            .contains('Enabled')
            .click()
        cy.get('input[autocomplete="off"]').eq(0).type('gerasman82')
        cy.get('input[type="password"]')
            .eq(0)
            .should('exist')
            .and('be.visible')
            .type('hola123')
        cy.get('input[type="password"]')
            .eq(1)
            .should('exist')
            .and('be.visible')
            .type('hola123')
        cy.get('button[type="submit"]')
            .should('exist')
            .and('be.visible')
            .contains('Save')
            .click()
        cy.wait(1000)
        cy.url().should('include', 'admin/viewSystemUsers')
        cy.get('div[role="table"] .oxd-table-cell')
            .contains('gerasman82')
    })

    it.only('Borrar usuario', () => {
        cy.Login('Admin', 'admin123')
        cy.get('.oxd-main-menu > li')
            .contains('Admin')
            .click()
        cy.url()
            .should('include', 'admin/viewSystemUsers')
      
        cy.get('div[role="table"] .oxd-table-card').each(($row) => {
            cy.log($row.text().includes('VAyhzEOHHF'))
            if($row.text().includes('VAyhzEOHHF')){
                cy.wrap($row).find('.oxd-icon.bi-trash').click()
            }
        })
        cy.get('button[type="button"]')
            .contains('Yes, Delete').click()
    })

})