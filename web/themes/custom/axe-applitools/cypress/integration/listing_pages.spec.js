context('Listing Pages', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Listing Pages test in English Languge!', () => {
        cy.contains('Articles').click();
        cy.get('.node').should('have.length', 8);
        cy.eyesCheckWindow({
            tag: "Articles Page in English Languge",
            target: 'window',
            fully: true
        });

        cy.contains('Recipes').click();
        cy.get('.node').should('have.length', 9);
        cy.eyesCheckWindow({
            tag: "Recipes Page in English Languge",
            target: 'window',
            fully: true
        });

    });


    });
