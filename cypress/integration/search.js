
describe('Search for artists in different displays', () => {
  it('Search for Daniel Ceasar artist on macbook!', () => {
    cy.viewport('macbook-15')
    cy.visit('localhost:4200')
    cy.wait(500)
    cy.get('[cy-search-input]').type('daniel caesar')
    cy.wait(500)
    cy.get('[cy-search-content-item]:first').click()
    expect(true).to.equal(true)
  })

  it('Search for Alina Baraz artist on iphone!', () => {
    cy.viewport('iphone-6')
    cy.visit('localhost:4200')
    cy.wait(500)
    cy.get('[cy-search-input]').type('alina baraz')
    cy.wait(500)
    cy.get('[cy-search-content-item]:first').click()
    expect(true).to.equal(true)
  })
})
