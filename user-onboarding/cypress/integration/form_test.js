describe('Inputs', () => {
    it('can navigate to the site', () => {

        cy.visit('http://localhost:3000')

        cy.url().should('include','localhost')
    })

    it('test name/email/password inputs', () => {
        cy.get('input[name="name"]')
        .type('first name and last name')
        .should('have.value', 'first name and last name')

        cy.get('input[name="email"]')
        .type('youremail@email.com')
        .should('have.value', 'youremail@email.com')

        cy.get('input[name="password"]')
        .type('password required')
        .should('have.value', 'password required')
    })

    it('')
})