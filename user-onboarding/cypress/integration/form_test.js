describe('Inputs and register', () => {
    it('can navigate to the site', () => {

        cy.visit('http://localhost:3000')

        cy.url().should('include','localhost')
    })

    it('test name/email/password inputs', () => {
        cy.get('input[name="name"]')
        .type('Izzy')
        .should('have.value', 'Izzy')

        cy.get('input[name="email"]')
        .type('izzy@email.com')
        .should('have.value', 'izzy@email.com')

        cy.get('input[name="password"]')
        .type('password123')
        .should('have.value', 'password123')

        cy.get('select').select('student')

        cy.get('[type="checkbox"]').check()
    })

    it('register button is disabled', () => {
        cy.get('#registerBtn').click()
        cy.get('input[name="name"]').should('have.value', '')
        cy.get('input[name="email"]').should('have.value', '')
        cy.get('input[name="password"]').should('have.value','')
        cy.get('[type="checkbox"]').should('not.be.checked')
    })

    it('validation', () => {
        cy.get('input[name="name"]').type('s {backspace}')
        cy.get('#user-error').should('have.text','Please include your first and last name')

        cy.get('input[name="email"]').type('s {backspace}')
        cy.get('#emailError').should('have.text','Please enter a valid email address')
        
        cy.get('input[name="password"]').type('s {backspace}')
        cy.get('#passwordError').should('have.text','Please create a password')
    })
})