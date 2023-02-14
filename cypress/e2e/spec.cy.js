describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:8080');
    cy.get('#passwordinput').type('ntm');
    cy.get('#message').type('hello');
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').type('ntm');
    cy.get('button.btn.btn-success.btn-block').click();
  })
})