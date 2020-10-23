import '@applitools/eyes-cypress/commands'

if (Cypress.env('APPLITOOLS_SETUP')) {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Umami Drupal Site!',
            batchName: 'Umami Drupal Site!',
            browser: [
                { width: 1920, height: 1080, name: 'chrome' },
            ],
            concurrency: 1,
        });
    });

} else {
    // do nothing for visual test commands
    Cypress.Commands.overwrite(
        'eyesCheckWindow',
        (eyesCheckWindow, options = {}) => {
            if (options.tag) {
                cy.log(`👀 skipping screenshot **${options.tag}**`);
            } else {
                cy.log(`👀 skipping screenshot`);
            }
        },
    )
}


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

context('Validate Visual Difference in Home Page with Chrome Only', () => {
    it('Validate Visual Difference in Home Page', () => {
        // ⭐️ Note to see visual bugs, Please follow the steps:
        // 1. In first iteration, Execute this test - Accept and Save this as a baseline in the Applitools dashboard.
        // 2. In Second Run, Uncomment the lines #43 and #44 to change the CSS for creating visual bugs
        // 3. Go to the Applitools dashboard to review the visual comparison results
        cy.visit('/');
        cy.get('.block-inner').should('be.visible');
        // Change the CSS for creating visual bugs
        /*cy.get('.field--name-field-content-link a').invoke('css', 'background-color', '#000000').should('have.css', 'background-color', 'rgb(0, 0, 0)')
        cy.get('div.js-form-item').invoke('css', 'margin-left', '2rem').should('have.css', 'margin-left', '32px')*/
        cy.eyesCheckWindow({
            tag: "Home Page - Chrome",
            target: 'window',
            fully: true
        });
    }); 
})
