
context('Landing Pages', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Article - Landing Page test in English Languge!', () => {
        cy.visit('/en/articles/the-umami-guide-to-our-favourite-mushrooms');
        cy.get('.field__item > img').should('have.length', 5);
        cy.eyesCheckWindow({
            tag: "Article Landing Page in English Languge",
            target: 'window',
            fully: true
        });
    });

    it('Recipes - Landing Page test in English Languge!', () => {
        cy.visit('/en/recipes/gluten-free-pizza');
        cy.get('.field__item > img').should('have.length', 2);
        cy.eyesCheckWindow({
            tag: "Recipes Landing Page in English Languge",
            target: 'window',
            fully: true
        });
    });

});


