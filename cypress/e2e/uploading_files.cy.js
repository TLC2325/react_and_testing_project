describe('Creating a message', () => {
    it('Displays file uploaded when user upload upload file', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="upload file"]')
            .type('file path upload');

        cy.get('[data-testid="sendButton"]')
            .click();

        cy.get('[data-testid="filePathField"]')
            .should('have.value', 'file path');

        cy.contains('File uploaded');
    });
});